const year = new Date().getFullYear();

// old version ("year-span")
const yearSpots = document.getElementsByClassName("year-span");
for (let i = yearSpots.length - 1; i >= 0; i--) {
    let startYear = parseInt(yearSpots.item(i).innerHTML)
    if (startYear < 2020 || year < startYear)
        yearSpots.item(i).innerHTML = "???-" + year;
    else if (startYear === year)
        yearSpots.item(i).innerHTML = year;
    else
        yearSpots.item(i).innerHTML = startYear + "-" + year;
}

// new version ("copyright-msg")
const copyrightSpots = document.getElementsByClassName("copyright-msg");
for (let i = copyrightSpots.length - 1; i >= 0; i--) {
    let item = copyrightSpots.item(i);

    let lead = item.getAttribute("lead");
    if (lead === null)
        lead = "";
    else if (!lead.endsWith(" "))
        lead += " ";

    let startYear = parseInt(item.getAttribute("year")), yearSpan;
    if (startYear < 2020 || year < startYear)
        yearSpan = "???-" + year;
    else if (startYear === year)
        yearSpan = year;
    else
        yearSpan = startYear + "-" + year;

    let author = item.getAttribute("author");
    if (author === null)
        author = "";
    else if (!author.startsWith(" "))
        author = " " + author;
    let message = item.innerHTML, end = "";
    if (message !== null)
        end = ". " + message;

    item.innerHTML = lead + "© " + yearSpan + author + end;
}