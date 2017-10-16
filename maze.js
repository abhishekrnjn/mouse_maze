var alerted =false;// used to remove multiple alert
var stclick=false;// stores value to check player clicked start or not
var stime;// stores value when S is clicked


//start function is invoked when S is clicked
function start(){
	mousecur=true;
	stclick=true;
	stime=Date.now();
	ondiv=true;
var x= document.getElementsByClassName("boundary");
var i;
for(i=0;i<x.length;i++){
	x[i].style.backgroundColor="#eeeeee";
}
    if(alerted==true) {
		window.alerted=false;
		
}
}


// end function is invoked when E is clicked
function end(){

	if(stclick && mousecur){
		var etime=Date.now();
		var tgap=etime-stime;
		var tgaps=tgap/parseFloat(1000);
		alert("Yeah!!, You completed in:"+ tgaps+"s");

	}

}




function changecolor(){

var x= document.getElementsByClassName("boundary");
var i;
for(i=0;i<x.length;i++){
	x[i].style.backgroundColor="red";
	
}

    if (!window.alerted) {
window.alert("Sorry!! you lost :( ");
	window.alerted=true;}
}



/*
function changecolor(){
	document.getElementById("boundary1").style.backgroundColor="red";
	alert("you touched the boundary try again");
}
*/