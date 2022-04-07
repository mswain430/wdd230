// initialize display elements
//const todayDisplay = document.querySelector(".today");
const visitsDisplay = document.querySelector(".visits");
//const lastvisitDisplay = document.querySelector("#lastvisit");
const lastvisit2Display = document.querySelector(".lastvisit2");

let lastvisit = Number(window.localStorage.getItem('last-visit-date'));
//let thisvisit = Date.now();

if(lastvisit != 0) {
    let thisvisit = Date.now();
    const FACTOR = 86400000; /* 1000 * 60 * 60 * 24 //milliseconds */
    let daysBetween = (thisvisit - lastvisit)
    let numberOfDays = daysBetween/ FACTOR;
    if (daysBetween.toFixed(5) >0) {
        lastvisit2Display.textContent = `It has been ${numberOfDays.toFixed(5)} days since your last visit`;
        window.localStorage.setItem('last-visit-date', thisvisit);
    } else {
        lastvisit2Display.textContent = `It has been ${numberOfDays.toFixed(10)} days since your last visit.`;
        window.localStorage.setItem('last-visit-date', thisvisit)
    }
} else {
    window.localStorage.setItem('last-visit-date', Date.now());
    document.querySelector('#lastvisit2').innerHTML =`This is your first visit! Welcome!`;
}
// ********************************************************* # of visits* */
//get the stored value in localstorage
let numVisits = Number(window.localStorage.getItem("visit"));


//determine if this is the first visit or display the number of visits
if(numVisits !== 0) {
   visitsDisplay.innerHTML = `You have visited ${numVisits} times`;

} else {
   visitsDisplay.innerHTML = `This is your first visit. Welcome to the site!`;
}
// increment the number of visits
numVisits++;
// store the number of visits value
window.localStorage.setItem("visit", numVisits)
//window.localStorage.setItem('last-visit-date', thisvisit)
// show todays date
//todayDisplay.textContent = Date.now();
