let r1=[0,0,0,0];
let r2=[0,0,0,0];
let r3=[0,0,0,0];
let r4=[0,0,0,0];

var first=1;
var second=2;

var current=first;
var finished = false;

if (finished == false){
    function flip(obj){
        var valid = true; //To check cell is click or not

        let tmp=obj.id.split(",");
        let clickRow = Number(tmp[0]);
        let clickColumn = Number(tmp[1]-1);

        switch(clickRow){
            case 1:
                if(r1[clickColumn] != 0){
                    valid = false;
                    break;
                }
                    r1[clickColumn] = current;
                    break;

            case 2:
                if(r2[clickColumn] != 0){
                    valid = false;
                    break;
                }
                    r2[clickColumn] = current;
                    break;
            case 3:
                if(r3[clickColumn] != 0){
                    valid = false;
                    break;
                }
                    r3[clickColumn] = current;
                    break;
            case 4:
                if(r4[clickColumn] != 0){
                    valid = false;
                    break;
                }
                    r4[clickColumn] = current;
                    break;  
        }
        if(valid){
            obj.style.transform="scaleY(-1)";
            if(current == first){
                obj.style.background = "tomato";
            }else{
                obj.style.background = "teal";
            }

            if(current == first){
                current = second;
                document.getElementById("turn").innerHTML ="Player 2 Turn!";
                document.getElementById("turn").style.color = "teal";
            }
            else{
                current = first;
                document.getElementById("turn").innerHTML ="Player 1 Turn!";
                document.getElementById("turn").style.color = "tomato";
            }
            checkWhoWin();
        }  
    }
}
function checkWhoWin(){
    //Vetrtical
    if(vertical(first)){
        
        document.getElementById("win").innerHTML = "Player 1 Win!";
        
    }else if(vertical(second)){
        document.getElementById("win").innerHTML = "Player 2 Win!";
    }  

    //Horizontal
    if(horizonal(first)){
        
        document.getElementById("win").innerHTML = "Player 1 Win!";
        
    }else if(horizonal(second)){
        document.getElementById("win").innerHTML = "Player 2 Win!";
        
    } 

}

//player 1 or 2
function vertical(player){
    for(let index = 0 ; index < 4 ; index++){
        if(r1[index] == player &&
            r2[index] == player &&
            r3[index] == player &&
            r4[index] == player) {
                return true;
            }
        }
    return false;
}


/*function checkArrayEqualElements(_array)
{  
        for (var i=1; i< _array.length; i++) 
            {
                if (_array[i] !== _array[0]) 
                { 
                    return false; 
                }
                else
                {
                    return true;
                }
            }
}*/

//player 1 or 2
