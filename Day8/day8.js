var q1_x=103;
var q1_y=2;
var q1_z=q1_x + q1_y;
document.getElementById("a1").innerHTML=q1_z;
document.getElementById("a1").setAttribute("class","p1change")

var q2_x=34;
var q2_y=2;
var q2_z=q2_x - q2_y;
document.getElementById("a2").innerHTML=q2_z;
document.getElementById("a2").setAttribute("class","p1change")

var q3_x=2;
var q3_y=2;
var q3_z=q3_x * q3_y;
document.getElementById("a3").innerHTML=q3_z;
document.getElementById("a3").setAttribute("class","p1change")

var q4_x=3;
var q4_y=4;
var q4_z=q4_x / q4_y;
document.getElementById("a4").innerHTML=q4_z;
document.getElementById("a4").setAttribute("class","p1change")

var q5_x=1;
document.getElementById("a5").innerHTML=q5_x++;
document.getElementById("a5").setAttribute("class","p1change")

var q6_x=2;
document.getElementById("a6").innerHTML=--q6_x;
document.getElementById("a6").setAttribute("class","p1change")

var q7_x=document.getElementById("x").innerHTML;
var q7_y=document.getElementById("y").innerHTML;
var q7_z=q7_x - q7_y;
document.getElementById("a7").innerHTML=q7_z;
document.getElementById("a7").setAttribute("class","p1change")