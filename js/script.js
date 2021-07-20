console.log("Exercise-6");

const alarmSubmit = document.getElementById('alarmSubmit');
alarmSubmit.addEventListener('click', setAlarm);

// var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
var audio = new Audio('../mp3/ring.mp3');

function ringBell()
{
    audio.play();
}

function setAlarm(e){
    e.preventDefault();  
     
    const alarm = document.getElementById('alarm');   
    alarmDate = new Date(alarm.value); 
    console.log(`Setting Alarm for ${alarmDate}...`);
    now = new Date();

    let timeToAlarm = alarmDate - now;
    console.log(timeToAlarm);
    

    if(timeToAlarm >= 0){
        setTimeout(() => {
            ringBell();
        }, timeToAlarm);
        
        const alert = document.getElementById('alert');
        var html = ``;
        alert.innerText = html;
    }
    else{
        const alert = document.getElementById('alert');
        var html = `Invalid Time.\n Please Enter Again`;
        console.log(`Invalid Time to play the Alarm. Please Enter Again`);
        alert.innerText = html;
    }
}

// const time;
function showTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let period = 'AM';
    let date = today.getDate();
    let day = today.getDay();
    
    const time = ` ${hours} : ${minutes} : ${seconds}  ${period} , ${date}`;
    document.getElementById('clock').innerHTML = time;
    
    setInterval(showTime,1000);
}