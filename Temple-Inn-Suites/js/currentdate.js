const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
//const fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
// using getElementById
document.getElementById("currentdate").textContent = fulldate;
// ****************************
// using querySelector
const date2 = document.querySelector('#currentdate2');

/*try {
  const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
  date2.textContent = new Date().toLocaleDateString('en-UK', options);
} catch (e) {
  alert('Error with code or your browser does not support Locale');
} */
//ToLocaleDateString
/*const options = {weekday: 'long' , day: 'numeric', month: 'long', year: 'numeric'};
const year = {year: 'numeric'}
document.getElementById('year').textContent = new Date().toLocaleDateString('en-us', year);
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-us', options);

//String Literal
//currentdate3 = `current Date: ${dayName}, ${monthName} ${d.getDate()}, ${year}`
//document.getElementById('currentdate3').textContent = currentdate3
*/
// If day is equal to 0-7, 1 or 2 then display message (dybanner)
/* const d = new Date(); */
const dayOfWeek = d.getDay()
let dybanner;
if (dayOfWeek === 1 || dayOfWeek === 7) {
   dybanner = "🤝🏼All Temples are closed on Sunday and Monday";
}
document.querySelector('#dybanner').textContent = dybanner;

//current date
let lastmod = document.querySelector('#lastmod');
lastmod.textContent =  document.lastModified;