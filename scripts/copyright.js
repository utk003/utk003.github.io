const yearSpots = document.getElementsByClassName("year-span");
const year = new Date().getFullYear();
for (let i = yearSpots.length - 1; i >= 0; i--) {
    let startYear = parseInt(yearSpots.item(i).innerHTML)
    if (startYear < 2020 || year < startYear)
        yearSpots.item(i).innerHTML = "???-" + year;
    else if (startYear === year)
        yearSpots.item(i).innerHTML = year;
    else
        yearSpots.item(i).innerHTML = startYear + "-" + year;
}