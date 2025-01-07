const hour  = document.querySelector(".hour-hand")
const minutes = document.querySelector('.minute-hand')
const second = document.querySelector('.second-hand')

function  clock() {
    let date = new Date()
    
    let hdate = date.getHours();
    let mindate = date.getMinutes();
    let secdate = date.getSeconds();
      
    // 12hr = 360               60 min = 360            60sec = 360  
    //1h = 360/12              1= 360/60                1 sec = 360/60     
    // 30h + m/2 deg           m = 6m                   1sec = 6s            

    let hr = ((hdate / 12) * 360) + ((mindate / 60) * 30) + 90;
    let min =((mindate / 60) * 360) + ((secdate / 60) * 6) + 90;
    let sec = ((secdate / 60) * 360) +  90;
     
    hour.style.transform = `rotate(${hr}deg)`;
    second.style.transform = `rotate(${sec}deg)`;
    minutes.style.transform = `rotate(${min}deg)`;
}

setInterval(clock, 1000);
