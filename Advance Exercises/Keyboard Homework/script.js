var show=document.getElementById("show");
var userInput=document.getElementById("userInput");
var caplock=document.getElementById("caplock");

//to show words on the display
function press(e){
    var text="";
    if(caplock.checked == true)
    {
        text = e.value.toUpperCase();
    }else{
        text = e.value.toLowerCase();
    }
    show.innerHTML += text;
}

//to clear the display and input box
function press_blank()
{
    show.innerHTML=" ";
    userInput.value=" ";
}
function press_space()
{
    show.innerHTML+=" ";
}
function press_backspace()
{
    var letter=show.innerHTML;
    letter=letter.slice(0,-1);
    show.innerHTML=letter;
}

//charAt()
function charAt(){
    window.alert(show.innerHTML.charAt(userInput.value));
}

//charCodeAt()
function charCodeAt(){
    window.alert(show.innerHTML.charCodeAt(userInput.value));
}

//toUpperCase()
function toUpperCase(){
    window.alert(show.innerHTML.toUpperCase(userInput.value));
}
//toLowerCase()
function toLowerCase(){
    window.alert(show.innerHTML.toLowerCase(userInput.value));
}
//trims()
function trim(){
    window.alert(show.innerHTML.toLowerCase(userInput.value));
}
//includes()
function includes(){
    window.alert(show.innerHTML.includes(userInput.value));
}
//indexOf()
function indexOf(){
    window.alert(show.innerHTML.indexOf(userInput.value));
}
//indexOf()
function lastIndexOf(){
    window.alert(show.innerHTML.lastIndexOf(userInput.value));
}
//startsWith()
function startsWith(){
    window.alert(show.innerHTML.startsWith(userInput.value));
}

//endsWith()
function endsWith(){
    window.alert(show.innerHTML.endsWith(userInput.value));
}

