
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