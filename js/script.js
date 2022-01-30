
//ToLocaleDateString
const options = {weekday: 'long' , day: 'numeric', month: 'long', year: 'numeric'};
const year = {year: 'numeric'}
document.getElementById('year').textContent = new Date().toLocaleDateString('en-us', year);
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-us', options);

function toggleMenu() {

   document.getElementById("PrimaryNav").classList.toggle("open");

}

const x = document.getElementById("hamburgerBtn");

x.onclick = toggleMenu;
