let random = document.getElementById("text");
let randomNumber = () =>{random.innerHTML = Math.floor(Math.random()*100)};
let equation = document.getElementById("equation");
let result = document.getElementById('result');
let gameStatus = document.getElementById("gameStatus")
let finish = false;
let numbers = document.getElementsByClassName("number");
let again = document.getElementById("again");
[...numbers].forEach(number => {
    number.addEventListener('click',(e) =>{
        //console.log(e.target.innerHTML);
        if(!finish ){
            equation.innerHTML += (equation.innerHTML == "")? e.target.innerHTML : "+" + e.target.innerHTML;
        result.innerHTML = Number(result.innerHTML) + Number(e.target.innerHTML);
        if(result.innerHTML == random.innerHTML){
            gameStatus.innerHTML = "Your are Correct";
            finish = true;
        }
        else if(Number(result.innerHTML) > Number(random.innerHTML)){
            gameStatus.innerHTML = "Your are Wrong";
            finish = true;
        }
    }
})    
});
again.addEventListener("click", () =>{location.reload()});