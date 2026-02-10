document.getElementById("akanForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const dayInput = document.getElementById("day").value;
    const monthInput = document.getElementById("month").value;
    const yearInput = document.getElementById("year").value;
    const maleBtn = document.getElementById("maleBtn");
    const femaleBtn = document.getElementById("femaleBtn");

    const day = Number(dayInput);
    const month = Number(monthInput);
    const year = Number(yearInput);

    if (dayInput.length < 1) {
        alert("Please enter day");
        return;
    }
    if (monthInput.length < 1) {
        alert("Please enter month");
        return;
    }
    if (yearInput.length < 1) {
        alert("Please enter year");
        return;
    }
    if (day < 1 || day > 31 || month < 1 || month > 12) {
        alert("Please enter valid day and month");
        return;
    }
    if (year < 1900) {
        alert("Please enter year above 1900");
        return;
    }
    if (maleBtn.dataset.selected.length < 1 && femaleBtn.dataset.selected.length < 1) {
        alert("Please click Male or Female");
        return;
    }

    const CC = Math.floor(year / 100);
    const YY = year % 100;
    const MM = month;
    const DD = day;

    const dayOfWeek = (
        (4 * CC - 2 * CC - 1) +
        (5 * YY) / 4 +
        (26 * (MM + 1)) / 10 +
        DD
    ) % 7;


    const dayIndex = Math.floor((dayOfWeek + 7) % 7);

    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    let akanName;

    if (maleBtn.dataset.selected.indexOf("true") > -1) {
        akanName = maleNames[dayIndex];
    }
    if (femaleBtn.dataset.selected.indexOf("true") > -1) {
        akanName = femaleNames[dayIndex];
    }

    document.getElementById("result").textContent = "Your Akan name is " + akanName;
});

document.getElementById("maleBtn").addEventListener("click", function () {
    document.getElementById("maleBtn").dataset.selected = "true";
    document.getElementById("femaleBtn").dataset.selected = "";
});

document.getElementById("femaleBtn").addEventListener("click", function () {
    document.getElementById("femaleBtn").dataset.selected = "true";
    document.getElementById("maleBtn").dataset.selected = "";
});
