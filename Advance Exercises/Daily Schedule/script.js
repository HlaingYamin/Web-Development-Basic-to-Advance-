let assignDays = document.getElementById("tabledates");
let assignWeekDays = document.getElementById("weekdays")

let selectDay = document.getElementById("selectDay");
let selectDate = document.getElementById("selectDate");

let dayText= document.getElementById("dayText");
let neightText = document.getElementById("neightText");

let dayFromCal="";
let weekdayFromCal="";

function assign(){
    const now = new Date();
    dayFromCal = getAllDaysInMonth(now.getFullYear(), now.getMonth());
    weekdayFromCal = getWeekDaysInMonth(now.getFullYear(), now.getMonth());

    for (var index = 0; index < dayFromCal.split(",").length;index++)
    {
        assignDays.innerHTML +=
        '<tr onclick="press()">'+
                '<td class="days" id="days">'+Number(index+1) +'</td>'+
                '<td class="second" id="weekdays">'+weekdayFromCal.split(",")[index] +'</td>'+
                '<td class="third" id="daySchedule"></td>' +
                '<td id="neightSchedule"></td>'+
        '</tr>';
    }
}

function getAllDaysInMonth(year,month){
    const date = new Date(year,month,1);
    const dates = [];

    while(date.getMonth() === month){
        dates.push(new Date(date));
        date.setDate(date.getDate()+1);
    }
    return dates.toLocaleString("en-us",{day:"numeric"});
}

function getWeekDaysInMonth(year,month){
    const date = new Date(year,month,1);
    const weekdays= [];

    while(date.getMonth() === month){

        weekdays.push(new Date(date));
        date.setDate(date.getDate()+1);
        
    }
    return weekdays.toLocaleString("en-us",{weekday:"short"});
}


function press(){
    var table =document.getElementById("tabledates");
    for(var i = 0;i<table.rows.length;i++){
        table.rows[i].onclick = function(){
            selectDay.innerHTML = this.cells[0].innerHTML;
            selectDate.innerText = "("+this.cells[1].innerHTML+")";

            dayText.value = daySchedule[selectDay.innerHTML-1].innerHTML;
            neightText.value = neightSchedule[selectDay.innerHTML-1].innerHTML;
        };
    }
}

function transferText(){
    
    var index =  selectDay.innerHTML-1; //get lable value and subtract for index
    daySchedule[index].innerHTML = dayText.value;
    neightSchedule[index].innerHTML = neightText.value;
    dayText.value="";
    neightText.value="";
}

