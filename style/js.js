

//Validacija - kontakt forma
function validacijaKontaktForma()
{
    var a = document.forms["kontaktForma"]["imeIprezime"].value
    var b = document.forms["kontaktForma"]["poruka"].value

    //ime i prezime
    if (a == null || a == "") {
        alert("Ime mora biti upisano!");
        return false;
    }

    //poruka
    if (b == null || b == "") {
        alert("Morate upisati neku poruku!");
        return false;
    }

    //e-mail
    var x = document.forms["kontaktForma"]["email"].value;

    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length) {
        alert("Unesite ispravnu E-mail adresu");
        return false;
    }




}


//Validacija

function validateForm() {

    var x = document.forms["myForm"]["fIme"].value;
    var y = document.forms["myForm"]["fPrezime"].value;
    var z = document.forms["myForm"]["fDrzava"].value;
    var radio1 = document.getElementById("dorucak").checked;
    var radio2 = document.getElementById("polupansion").checked;
    var da = document.getElementById("yes").checked;


    //Validacija - Checkbox
    if (da == "")
    {
        alert("Morate potvrditi ispravnost podataka!");
        return false;
    }


    //Validacija - Ime
    if (x == null || x == "") {
        alert("Ime mora biti upisano!");
        return false;
    }


    //Validacija - prezime
    if (y == null || y == "") {
        alert("Prezime mora biti upisano!");
        return false;
    }

    //Validacija - država
    if (z == null || z == "") {
        alert("Država mora biti upisana!");
        return false;
    }


    //Validacija - Izbornik
    var a = document.forms["myForm"]["fTipSobe"].value;

    if (a == null || a < 1) {
        alert("Morate odabrati tip sobe!");
        return false;
    }


    //Validacija - RadioButton
    if ((radio1 == "") && (radio2 == "")) {
        alert("Potrebno je odabrati ili doruèak ili polupansion!")
        return false;
    }


    //Validacija - E-mail
    var m = document.forms["myForm"]["mail"].value;

    var atpos = m.indexOf("@");
    var dotpos = m.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= m.length) {
        alert("Unesite ispravnu E-mail adresu");
        return false;
    }


}





//Pop-up prozor (otvaranje)
var myWindow
function openWin() {
    myWindow = window.open("popup.html", "myWindow", "width=407, height=750");
}

//Pop-up prozor (zatvaranje)
function closeWin() {
    window.close();
}




//Sat(timer)
function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s = today.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML = h+":"+m+":"+s;
    var t = setTimeout(function(){startTime()},500);
}

//Pomoæna funkcija koja dodaje nulu ispred broja u satu
function checkTime(i) {
    if (i<10) {i = "0" + i};
    return i;
}




//Kalkulator
calc_array = new Array();
var calcul=0;
var pas_ch=0;
function $id(id)
{
        return document.getElementById(id);
}
function f_calc(id,n)
{
        if(n=='ce')
        {
                init_calc(id);
        }
        else if(n=='=')
        {
                if(calc_array[id][0]!='=' && calc_array[id][1]!=1)
                {
                        eval('calcul='+calc_array[id][2]+calc_array[id][0]+calc_array[id][3]+';');
                        calc_array[id][0] = '=';
                        $id(id+'_result').value=calcul;
                        calc_array[id][2]=calcul;
                        calc_array[id][3]=0;
                }
        }
        else if(n=='+-')
        {
                $id(id+'_result').value=$id(id+'_result').value*(-1);
                if(calc_array[id][0]=='=')
                {
                        calc_array[id][2] = $id(id+'_result').value;
                        calc_array[id][3] = 0;
                }
                else
                {
                        calc_array[id][3] = $id(id+'_result').value;
                }
                pas_ch = 1;
        }
        else if(n=='nbs')
        {
                if($id(id+'_result').value<10 && $id(id+'_result').value>-10)
                {
                        $id(id+'_result').value=0;
                }
                else
                {
                        $id(id+'_result').value=$id(id+'_result').value.slice(0,$id(id+'_result').value.length-1);
                }
                if(calc_array[id][0]=='=')
                {
                        calc_array[id][2] = $id(id+'_result').value;
                        calc_array[id][3] = 0;
                }
                else
                {
                        calc_array[id][3] = $id(id+'_result').value;
                }
        }
        else
        {
                        if(calc_array[id][0]!='=' && calc_array[id][1]!=1)
                        {
                                eval('calcul='+calc_array[id][2]+calc_array[id][0]+calc_array[id][3]+';');
                                $id(id+'_result').value=calcul;
                                calc_array[id][2]=calcul;
                                calc_array[id][3]=0;
                        }
                        calc_array[id][0] = n;
        }
        if(pas_ch==0)
        {
                calc_array[id][1] = 1;
        }
        else
        {
                pas_ch=0;
        }
        document.getElementById(id+'_result').focus();
        return true;
}
function add_calc(id,n)
{
        if(calc_array[id][1]==1)
        {
                $id(id+'_result').value=n;
        }
        else
        {
                $id(id+'_result').value+=n;
        }
        if(calc_array[id][0]=='=')
        {
                calc_array[id][2] = $id(id+'_result').value;
                calc_array[id][3] = 0;
        }
        else
        {
                calc_array[id][3] = $id(id+'_result').value;
        }
        calc_array[id][1] = 0;
        document.getElementById(id+'_result').focus();
        return true;
}
function init_calc(id)
{
        $id(id+'_result').value=0;
        calc_array[id] = new Array('=',1,'0','0',0);
        document.getElementById(id+'_result');
        return true;
}
function key_detect_calc(id,evt)
{
        if((evt.keyCode>95) && (evt.keyCode<106))
        {
                var nbr = evt.keyCode-96;
                add_calc(id,nbr);
        }
        else if((evt.keyCode>47) && (evt.keyCode<58))
        {
                var nbr = evt.keyCode-48;
                add_calc(id,nbr);
        }
        else if(evt.keyCode==107)
        {
                f_calc(id,'+');
        }
        else if(evt.keyCode==109)
        {
                f_calc(id,'-');
        }
        else if(evt.keyCode==106)
        {
                f_calc(id,'*');
        }
        else if(evt.keyCode==111)
        {
                f_calc(id,'');
        }
        else if(evt.keyCode==110)
        {
                add_calc(id,'.');
        }
        else if(evt.keyCode==190)
        {
                add_calc(id,'.');
        }
        else if(evt.keyCode==188)
        {
                add_calc(id,'.');
        }
        else if(evt.keyCode==13)
        {
                f_calc(id,'=');
        }
        else if(evt.keyCode==46)
        {
                f_calc(id,'ce');
        }
        else if(evt.keyCode==8)
        {
                f_calc(id,'nbs');
        }
        else if(evt.keyCode==27)
        {
                f_calc(id,'ce');
        }
        return true;
}



//Random link
function randomLink()
{
    var slucajna = (Math. random())*10;
    slucajna = Math. round(slucajna);

    if (slucajna<3) slucajna = 3;
    else if (slucajna>6) slucajna = 6;

    switch (slucajna){

        case 3:
            poruka = "<a href='http://www.mev.hr'>MEV<a>";
            break;

        case 6:
            poruka = "<a href='http://www.myspace.com'>MySpace<a>";

        default:
            poruka = "<a href='http://www.youtube.com'>Youtube<a>";
    }
    document.getElementById('link').innerHTML = poruka;
}




//Padajuæi meni(izbornik)
var timeout	= 500;
var closetimer	= 0;
var ddmenuitem	= 0;

// open hidden layer
function mopen(id)
{	
	// cancel close timer
	mcancelclosetime();

	// close old layer
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';

	// get new layer and show it
	ddmenuitem = document.getElementById(id);
	ddmenuitem.style.visibility = 'visible';

}
// close showed layer
function mclose()
{
	if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// go close timer
function mclosetime()
{
	closetimer = window.setTimeout(mclose, timeout);
}

// cancel close timer
function mcancelclosetime()
{
	if(closetimer)
	{
		window.clearTimeout(closetimer);
		closetimer = null;
	}
}

// close layer when click-out
document.onclick = mclose;

