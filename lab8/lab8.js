function showDate() {
    let out = document.getElementById('current-date');
    let localesOut = document.getElementById('locale-dates');
    let today = new Date();

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
}