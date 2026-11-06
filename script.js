
let count = 0;

// زيادة عداد التسبيح
function increase() {
    count++;
    document.getElementById("counter").innerText = count;
}

// تصفير العداد
function reset() {
    count = 0;
    document.getElementById("counter").innerText = count;
}

// تغيير الذكر
let azkar = [
    "سبحان الله",
    "الحمد لله",
    "الله أكبر",
    "لا إله إلا الله"
];

let currentZekr = 0;

function changeZekr() {
    currentZekr++;

    if (currentZekr >= azkar.length) {
        currentZekr = 0;
    }

    document.getElementById("zekr").innerText =
        azkar[currentZekr];

    count = 0;
    document.getElementById("counter").innerText = count;
}
