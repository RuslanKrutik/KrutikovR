function showDate() {
    let out = document.getElementById('current-date');
    let localesOut = document.getElementById('locale-dates');
    let additionalInfo = document.getElementById('additional-info');
    let today = new Date();

    out.innerHTML = "Текущая дата и время (ru-RU): " + today.toLocaleString("ru-RU");

    let locales = [
        {locale: "ru-RU", country: "Russia"},
        {locale: "en-US", country: "United States"},
        {locale: "fr-FR", country: "France"},
        {locale: "de-DE", country: "Germany"},
        {locale: "ja-JP", country: "Japan"},
        {locale: "zh-CN", country: "China"}
    ];

    localesOut.innerHTML = "";
    locales.forEach(function(item) {
        let localeDate = today.toLocaleString(item.locale);
        localesOut.innerHTML += `<div class="locale-date"><span>${item.country} (${item.locale}):</span> ${localeDate}</div>`;
    });

    additionalInfo.innerHTML = `
        <div class="additional-info-item"><span>Текущий год:</span> ${today.getFullYear()}</div>
        <div class="additional-info-item"><span>Текущий месяц:</span> ${today.toLocaleString('ru-RU', { month: 'long' })}</div>
        <div class="additional-info-item"><span>Текущая дата:</span> ${today.getDate()}</div>
        <div class="additional-info-item"><span>День недели:</span> ${today.toLocaleString('ru-RU', { weekday: 'long' })}</div>
    `;
}

function showDayOfWeek() {
    let day = document.getElementById('input-day').value;
    let month = document.getElementById('input-month').value - 1;
    let year = document.getElementById('input-year').value;
    let date = new Date(year, month, day);
    let dayOfWeek = date.toLocaleString('ru-RU', { weekday: 'long' });
    
    document.getElementById('day-of-week').innerHTML = `
        <div class="additional-info-item"><span>Выбранная дата:</span> ${day}.${month + 1}.${year} - ${dayOfWeek}</div>
    `;
}