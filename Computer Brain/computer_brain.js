var answer;
function start(){
    document.getElementById("btnstart").setAttribute("class","btnstart inactivestart")
    document.getElementById("btnstart").disabled=true;
    document.getElementById("btnstop").disabled=false;
    document.getElementById("btnstop").setAttribute("class","btnstop activestop")
    document.getElementById("ans").disabled=false;
    document.getElementById("user_ans").disabled=false;
    quiz();
}

function stop(){
    document.getElementById("btnstop").setAttribute("class","btnstop inactivestop")
    document.getElementById("btnstop").disabled=true;
    document.getElementById("btnstart").disabled=false;
    document.getElementById("btnstart").setAttribute("class","btnstart activestart")
    document.getElementById("ans").disabled=true;
    document.getElementById("user_ans").disabled=true;
    document.getElementById("ans").value="";
    document.getElementById("ques").innerHTML="";
    document.getElementById("history").innerHTML="";
    
}

function quiz(){
    var num1=Math.floor(Math.random()*100 + 1);
    var num2=Math.floor(Math.random()*100 + 1);
    answer = num1 + num2;
    document.getElementById("ques").innerHTML=num1 + "+"+ num2;
}

function check_ans(){
    var userinput=document.getElementById("ans").value;
    if(answer == userinput){
        document.getElementById("history").innerHTML += "<li>Correct</li>"
    }else{
        document.getElementById("history").innerHTML += "<li>Wrong</li>"
    }
    document.getElementById("ans").value="=";
    quiz();
}