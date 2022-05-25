let card = ["Access/cat1.jpg","Access/cat1.jpg","Access/cat2.jpg",
"Access/cat2.jpg","Access/cat3.jpg","Access/cat3.jpg","Access/cat4.jpg",
"Access/cat4.jpg","Access/cat5.jpg","Access/cat5.jpg","Access/cat6.jpg","Access/cat6.jpg"];
let randomCardList = [];
let i = 0;
let cards = document.getElementsByClassName("card");
var chosenCard = [];
var chosenCardsIds = [];

function clickCard(obj){
    if(chosenCard.length != 2){
        var cardId= obj.id;
        var cardImg = obj.src;
        chosenCard.push(cardImg);//for clicked card image
        chosenCardsIds.push(cardId);//for clicked card id

        console.log("0 :"+chosenCardsIds[0],"1 :"+chosenCardsIds[1]);
        console.log("0 :"+chosenCard[0],"1 :"+chosenCard[1]);

    if(chosenCard.length == 2){
        setTimeout(checkForMatch,1000);
    }
}}

function checkForMatch(){
    var cards = document.getElementsByClassName('card');
    var firstCard =chosenCardsIds[0];//3
    var secondCard = chosenCardsIds[1];//1
    if(chosenCard[0] == chosenCard[1] && firstCard !== secondCard){
        cards[firstCard-1].style.display="none";
        cards[secondCard-1].style.display = "none";

    }else{
        cards[firstCard-1].style.display="block";
        cards[secondCard-1].style.display="block";
    }
    chosenCard = [];
    chosenCardsIds = [];
}


function initial(){
    random ();
    for (let index = 0; index < randomCardList.length; index++) {
        cards[index].src = randomCardList[index];
    }
}

let random = () =>{
    while(i < 12){
        let key = Math.floor(Math.random() * card.length);
        if(checkTwice(card[key])){
            random();
        }else{
            randomCardList.push(card[key]);
            i++;
        }
    }
}

let checkTwice = (value) => {
    let count = 0;
    for(let index = 0 ; index < randomCardList.length ; index++)
    {
        if (randomCardList[index] == value)
            count++;
    }
    if (count ==2)
    {
        return true;
    }
    else{
        return false;
    }
}

/*function alarm(sec){
    var timing = document.getElementById("timing");
    timing.innerHTML = sec + "s";
    timing.style.display = "block";
    var loop = setInterval(() => {
            document.getElementById("timing").innerHTML = --sec + "s";
            if(sec == 0 && cards.length !=0)
            {
                console.log("You Lose");
                
            }
    },1000);
    
    setTimeout (function (){
        clearInterval(loop);
        document.getElementById("timing").style.display = "none";
    },sec * 1000);
}

var enabled = true;

function enable(){
    enabled = true;
}

function disable(){
    enabled = false;
}

function setColorRojo() {
    if (enabled) {
        //Set color or do any other actions here
    }
}*/