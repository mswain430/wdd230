// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitDisplay = document.querySelector(".visits");

//get the stored value in localstorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
//determine if this is the first visit or display the number of visits

if(numVisits !== 0) {
    visitDisplay.textContent = "You have visited: " + numVisits + " times";

} else {
    visitDisplay.textContent = `This is your first visit. Welcome to the site!`;
}
// increment the number of visits
numVisits++;
// store the number of visits value
localStorage.setItem("visits-ls", numVisits)

// show todays date
//todayDisplay.textContent = Date.now();

// Time between dates if null "Welcome to the site"
/*let lastvisit = Number(window.localStorage.getItem('last-visit-date'));
let thisvisit = Date.now();
const FACTOR = 1000 * 60 * 60 * 24 //milliseconds
let daysbetween = Date.now() - lastvisit;
let numberofdays = daysbetween / FACTOR;

//discovery page
if (lastvisit !=0) {
    let thisvisit = Date.now();
    let FACTOR = 8640000;  /* 1000 * 60 * 60 * 24 //milliseconds */
 /*   let daysBetween = (thisvisit - lastvisit)/FACTOR;

    if (daysBetween.toFixed(0) != 1) {
        document.querySelector('#lastvisit').innerHtml = `It has been ${daysBetween}.toFixed(0) days between your last visit.`;
        window.localStorage.setiItem('last-visit-date', thisvisit);
    } else {
    /* thisvisit Null */
/*    document.querySelector('#lastvisit').innerHTML = `It has been ${daysBetween}.toFixed(0) days since your last visit.`;
    window.localStorage.setiItem('last-visit-date', thisvisit);
 } */
/* } else {
        window.localStorage.setItem('last-visit-date', Date.now());
        document.querySelector('#lastvisit').innerHTML ="This is your first visit! Welcome!";
}
localStorage.setItem("lastvisit", Date.now());
*/

