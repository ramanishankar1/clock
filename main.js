let date1 = document.getElementById('date')
let month = document.getElementById('month')
let year = document.getElementById('year')

let hour = document.getElementById('hour')
let min = document.getElementById('minute')
let second = document.getElementById('seconds')
let session= document.getElementById('session')
function setTime() {
    let date = new Date();
    let dateUpdate = date.getDate();
   let d= date1.innerText= dateUpdate + "." ;
    let yearUpdate = date.getFullYear();
    year.innerText= + yearUpdate;

    let monthUpdate = date.getMonth();
    let m=month.innerText=  monthUpdate +1 +".";

    let hourUpdate = date.getHours();
   let h= hour.innerText = hourUpdate + ":";


    let minUpdate = date.getMinutes();
    min.innerText = minUpdate + ":";

    let secUpdate = date.getSeconds();
    second.innerText =  secUpdate;

    if(dateUpdate.toString().length == 2){
        date1.innerText=dateUpdate;
    }
    else{
       date1.innerText= "0"+ dateUpdate; 

    }
    if(monthUpdate.toString().length == 2){
       m;
    }
    else{
       month.innerText= "0"+ m; 
    }

    if(minUpdate.toString().length == 2){
        min.innerText=minUpdate;
    }
    else{
       min.innerText= "0"+ minUpdate;   
     }
    if(secUpdate.toString().length == 2){
        second.innerText=secUpdate;
    }
    else{
       second.innerText= "0"+ secUpdate;   
     }
    if(hourUpdate>12){
        hourUpdate=hourUpdate-12;
        hour.innerText=hourUpdate;
        session.innerText="PM";
}
else if(hourUpdate==00){
    hourUpdate=12;
    hour.innerText=hourUpdate;
    session.innerText="AM"
}
else if(hourUpdate>00 && (hourUpdate<12)){
   hour.innerText=hourUpdate
   session.innerText="AM"
}
}
setInterval(setTime, 1000);
