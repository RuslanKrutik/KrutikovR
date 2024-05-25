function showDaysCount() {
    let today = new Date();
    let inputDate = document.getElementById('birthday');
    let birthday = new Date(inputDate.value);
    let daysCount = (today - birthday) / 1000 / 60 / 60 / 24;
    daysCount = Math.floor(daysCount);
    
    let daysCountDiv = document.getElementById('days-count');
    daysCountDiv.innerHTML = `Количество дней с даты рождения: ${daysCount}`;
    
    let dayOfWeek = birthday.toLocaleString('ru-RU', { weekday: 'long' });
    let dayOfWeekDiv = document.getElementById('day-of-week');
    dayOfWeekDiv.innerHTML = `День недели для выбранной даты: ${dayOfWeek}`;
}

function clearFields() {
    document.getElementById('birthday').value = '';
    document.getElementById('days-count').innerHTML = '';
    document.getElementById('day-of-week').innerHTML = '';
}