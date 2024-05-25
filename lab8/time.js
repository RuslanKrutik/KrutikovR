function showTime(){
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;

    let seconds = today.getSeconds();
    document.getElementById('seconds').innerHTML = seconds < 10 ? '0' + seconds : seconds;
}

setInterval(showTime, 1000);