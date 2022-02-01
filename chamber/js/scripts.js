 function toggleMenu() {

   document.getElementById("navigation").classList.toggle("open");
}

const x = document.getElementById("ham");
x.onclick = toggleMenu;


const hambutton = document.querySelector('ham');
const mainnav = document.querySelector('navigation');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// Solve the mid resizing issue
window.onresize = () => {if(window.innerWidth > 760) mainnav.classList.remove('responsive')};


