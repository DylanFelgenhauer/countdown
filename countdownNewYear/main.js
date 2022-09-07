const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');




const newYears = '1 January 2023'
function countDown() {
    const newYearsDate = new Date(newYears)
    const currentDate = new Date();

    const totalSeconds = (newYearsDate-currentDate) /1000;
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const minutes = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds %60);

    daysEl.innerHTML = changeTime(days);
    hoursEl.innerHTML = changeTime(hours);
    minutesEl.innerHTML = changeTime(minutes);
    secondsEl.innerHTML = changeTime(seconds);
}

function changeTime(time){
    return time < 10 ? `0${time}` : time;
}
countDown();
setInterval(countDown,1000)