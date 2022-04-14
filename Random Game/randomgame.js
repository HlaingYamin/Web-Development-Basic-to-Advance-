var random_num1,random_num2,correct_num;
var score;

//Start Game
function start(){
    document.getElementById("btnstart").setAttribute("class","btnstart inactivestart")
    document.getElementById("btnstart").disabled=true;
    document.getElementById("btnstop").disabled=false;
    document.getElementById("btnstop").setAttribute("class","btnstop activestop")
   
    quiz();
}

//Random Function
function quiz(){
    var num1=Math.floor(Math.random()*100+ 1);
    var num2=Math.floor(Math.random()*100 + 1);
    document.getElementById("ques").innerHTML=num1 + "+"+ num2+"=";
    
    random_num1=Math.floor(Math.random()*100)
    random_num2=Math.floor(Math.random()*100)
    correct_num=num1+num2;
    randomShowStart();    
}

function randomShowStart(){
  var place=Math.floor(Math.random()*3+1);
  if(place==1){
    document.getElementById("btn1").innerHTML=correct_num;
    document.getElementById("btn2").innerHTML=random_num1;
    document.getElementById("btn3").innerHTML=random_num2;
  }
  else if(place==2){
    document.getElementById("btn1").innerHTML=random_num1;
    document.getElementById("btn2").innerHTML=correct_num;
    document.getElementById("btn3").innerHTML=random_num2;

  }
  else{
    document.getElementById("btn1").innerHTML=random_num1;
    document.getElementById("btn2").innerHTML=random_num2;
    document.getElementById("btn3").innerHTML=correct_num;
  }
}

//Onclick Button1
function btnrandom1(){
    //Increase Times
    var times=Number(document.getElementById("times").innerHTML);
    document.getElementById("times").innerHTML=times+1;

   
   //Increase or decrease Scores
   var press=document.getElementById("btn1").innerHTML;

   if(press==correct_num)
   {
    score=Number(document.getElementById("score").innerHTML);
    score+=20;
    document.getElementById("score").innerHTML=score;
    console.log("Btn1 Score:"+score);
   }
   else{
    score=Number(document.getElementById("score").innerHTML);
    score-=20;
    document.getElementById("score").innerHTML=score;
    console.log("Btn1 Score:"+score);
   }
    //Recall Random calculation
    quiz();
  

}

//Onclick Button2
function btnrandom2(){
  //Increase Times
  var times=Number(document.getElementById("times").innerHTML);
  document.getElementById("times").innerHTML=times+1;

//Increase or decrease Scores
 var press=document.getElementById("btn2").innerHTML;
 if(press==correct_num)
 {
  score=Number(document.getElementById("score").innerHTML);
  score+=20;
  document.getElementById("score").innerHTML=score;
  console.log("Btn2 Score:"+score);
 }
 else{
  score=Number(document.getElementById("score").innerHTML);
  score-=20;
  document.getElementById("score").innerHTML=score;
  console.log("Btn2 Score:"+score);
 }
 //Recall Random calculation
 quiz();

}
//Onclick Button3
function btnrandom3(){
  //Increase Times
  var times=Number(document.getElementById("times").innerHTML);
  document.getElementById("times").innerHTML=times+1;
 
//Increase or decrease Scores
 var press=document.getElementById("btn3").innerHTML;

 console.log("press"+press);
 console.log("correct_num"+correct_num);

 if(press==correct_num)
 {
  score=Number(document.getElementById("score").innerHTML);
  score+=20;
  document.getElementById("score").innerHTML=score;
  console.log("Btn3 Score:"+score);
 }
 else{
  score=Number(document.getElementById("score").innerHTML);
  score-=20;
  document.getElementById("score").innerHTML=score;
  console.log("Btn13 Score:"+score);
 }
   //Recall Random calculation
   quiz();

}

//Stop the Game
function stop(){
   //Changing Background Color
   document.getElementById("btnstop").setAttribute("class","btnstop inactivestop")
   document.getElementById("btnstop").disabled=true;
   document.getElementById("btnstart").disabled=false;
   document.getElementById("btnstart").setAttribute("class","btnstart activestart")

  //Show History
   document.getElementById("history").innerHTML += "<li>Your score is "+document.getElementById("score").innerHTML+"</li>"
  //Set Default State
   document.getElementById("ques").innerHTML="=";
   document.getElementById("btn1").innerHTML="";
   document.getElementById("btn2").innerHTML="";
   document.getElementById("btn3").innerHTML="";
   document.getElementById("score").innerHTML="0";
   document.getElementById("times").innerHTML="0";


}