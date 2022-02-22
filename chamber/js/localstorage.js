// initialize display elements
const todayDisplay = document.querySelector(".today");
const visitDisplay = document.querySelector(".visits");
//get the stored value in localstorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
//determine if this is the first visit or display the number of visits
if(numVisits !== 0) {
    visitDisplay.textContent = numVisits;
} else {
    visitDisplay.textContent = `This is your first visit`;
}

// increment the number of visits
numVisits++;
// store the number of visits value
localStorage.setItem("visits-ls", numVisits)

// show todays date
todayDisplay.textContent = Date.now();

// Time between dates if null "Welcome to the site"
const lastvisit = localStorage.getItem("lastvisit");
const FACTOR = 1000 * 60 * 60 * 24 //milliseconds
let daysbetween = Date.now() - lastvisit;
console.log(daysbetween)
let numberofdays = daysbetween / FACTOR;
console.log(numberofdays)
//discovery page
localStorage.setItem("lastvisit", Date.now());


