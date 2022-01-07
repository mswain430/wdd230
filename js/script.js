const d = new Date("July 21, 1983 01:15:00");
let year = d.getFullYear();
const date = d.getDate();

document.getElementById("year").innerHTML = year;
document.getElementByClassName("date").innerHTML = date;