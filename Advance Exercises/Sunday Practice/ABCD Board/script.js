let text = document.getElementById("text");
let item1 = document.getElementById("item1");
let item2 = document.getElementById("item2");
let item3 = document.getElementById("item3");
let item4 = document.getElementById("item4");
let result = document.getElementById("result");

function random(){
    let letter="";
    for(let index = 0; index < 4 ;index++)
    {
        let keyCode =  Math.floor(Math.random() * (90 - 65 + 1) + 65);
        letter += String.fromCharCode(keyCode);
    }
        text.innerHTML = letter;

}

function press(obj){
    if(item1.innerHTML==""){
        item1.innerHTML = obj.innerHTML;
    }
    else if(item2.innerHTML==""){
        item2.innerHTML = obj.innerHTML;
    }
    else if(item3.innerHTML==""){
        item3.innerHTML = obj.innerHTML;
    }
    else if(item4.innerHTML==""){
        item4.innerHTML = obj.innerHTML;
    }
}

function checkAnswer(){
    let userInput = item1.innerHTML + item2.innerHTML + item3.innerHTML + item4.innerHTML;
    if(userInput == text.innerHTML){
        result.innerHTML = "Correct!";
        random();
    }
    else{
        result.innerHTML = "Wrong!";

        document.getElementById("refresh").style.display = "inline";    }

    item1.innerHTML = "";
    item2.innerHTML = "";
    item3.innerHTML = "";
    item4.innerHTML = "";
}