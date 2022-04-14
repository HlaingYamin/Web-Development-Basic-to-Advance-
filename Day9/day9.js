//Calculate Function
function calculate_fun(){
    var first_num=Number(document.getElementById("first_num").value);
    var sec_num=Number(document.getElementById("sec_num").value);

    if(document.getElementById("operator").value=="add")
    {
        var sum=first_num + sec_num;
        return document.getElementById("cal_result").innerHTML=sum;
    }
    else if(document.getElementById("operator").value=="sub"){
        var sub=first_num - sec_num;
        return document.getElementById("cal_result").innerHTML=sub;
    }
    if(document.getElementById("operator").value=="multi")
    {
        var multiply=first_num * sec_num;
        return document.getElementById("cal_result").innerHTML=multiply;
    }
    else{
        var divided=first_num / sec_num;
        return document.getElementById("cal_result").innerHTML=divided;
    }    
}

//Multiply Show Function
function show_fun(){
    var num=parseInt(document.getElementById("number").value);
    var times=parseInt(document.getElementById("times").value);
    var result="";

    for(var i = 1; i<= times; i++)
    {
        result += "<p></p>"+num + "*" + i + "=" + num * i;
    }
    document.getElementById("show_result").innerHTML=result;
}