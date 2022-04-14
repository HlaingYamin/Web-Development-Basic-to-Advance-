var mine;
var p1,p2,p3,p4,p5,p6,p7,p8;
var over=false;
var count=0;
var clicked=false;

//Place Mine when load the webpage
function mineBuild(){
    var r=Math.floor(Math.random()*6 + 1);
    var c=Math.floor(Math.random()*6 + 1);
    console.log(r,c);
    mine = r+""+c;

    p1=(r-1)+""+(c-1);
    p2=(r-1)+""+c;
    p3=(r-1)+""+(c+1);
    p4=r+""+(c-1);
    p5=r+""+(c+1);
    p6=(r+1)+""+(c-1);
    p7=(r+1)+""+c;
    p8=(r+1)+""+(c+1);
}

//When Player click cells 
function press(obj){

    //Get id of the cell that is clicked by Player
    var userpress=Number(obj.id);
    console.log("userpress"+userpress);
    
    if(over == false)
    {
        //Found Mine Condition
        if(userpress == mine)
        {
            gameOverSound();
            gameOverDisplay();

            obj.style.backgroundColor="red";
            obj.innerHTML="BOOM";
            obj.style.pointerEvents="none";
            
            console.log("Found mine count"+count);

        }
        //Found neighbours of mine
        else if(userpress ==p1 ||userpress ==p2 ||userpress ==p3 ||userpress ==p4 ||userpress ==p5 ||userpress ==p6 ||userpress ==p7 ||userpress ==p8)
        {     
            playClick();
            obj.style.backgroundColor="red";
            count++;
            console.log("count"+count);
            
            obj.style.pointerEvents="none"; //Use for disable multiple clicks
             
        }
        else{
                playClick();
                obj.style.backgroundColor="green";
                count++;
                console.log("count"+count);
                
                obj.style.pointerEvents="none";//Use for disable multiple clicks    
            }
        //Winning Situation 
        if(count==35)
        {
            for(var index=0;index<36;index++){
                over=true;
                
                document.getElementsByClassName("cell")[index].style.backgroundColor="green";
                document.getElementsByClassName("cell")[index].style.color="white";  
                
            }
            document.getElementById("21").innerHTML = "Y";
            document.getElementById("22").innerHTML = "O";
            document.getElementById("23").innerHTML = "U";

            document.getElementById("31").innerHTML = "A";
            document.getElementById("32").innerHTML = "R";
            document.getElementById("33").innerHTML = "E";

            document.getElementById("41").innerHTML = "W";
            document.getElementById("42").innerHTML = "I";
            document.getElementById("43").innerHTML = "N";
            document.getElementById("44").innerHTML = "N";
            document.getElementById("45").innerHTML = "E";
            document.getElementById("46").innerHTML = "R";
           
            gameWinSound();
              
        }
    } 

}

//Game Over Situation
function gameOverDisplay(){
    over=true;
    for(var index=0;index<36;index++){
        
        document.getElementsByClassName("cell")[index].style.backgroundColor="red";
        document.getElementsByClassName("cell")[index].style.color="white";  
    }
    document.getElementById("32").innerHTML = "G";
    document.getElementById("33").innerHTML = "A";
    document.getElementById("34").innerHTML = "M";
    document.getElementById("35").innerHTML = "E";

    document.getElementById("42").innerHTML = "O";
    document.getElementById("43").innerHTML = "V";
    document.getElementById("44").innerHTML = "E";
    document.getElementById("45").innerHTML = "R";
    
}

//Audio for single Click
function playClick(){
    var audio=document.getElementById("clickvoice");
    audio.play();

}
//Audio for Game Over
function gameOverSound(){
    var audio=document.getElementById("gameover");
    audio.play();
    
}
//Audio for Winning
function gameWinSound(){
    var audio=document.getElementById("gamewin");
    audio.play();
    
}

