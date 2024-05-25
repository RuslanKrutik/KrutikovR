function showDate() {
    let out = document.getElementById('current-date');
    let localesOut = document.getElementById('locale-dates');
    let today = new Date();
    let additionalInfo = document.getElementById('additional-info');

    out.innerHTML = "Текущая дата и время:";
    out.style.color = "white"
    out.style.textAlign = "center"

    let locales = [
        {locale: "ru-Ru", country: "Russia"},
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
