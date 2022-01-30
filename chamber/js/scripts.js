function toggleMenu() {

   document.getElementById("PrimaryNav").classList.toggle("open");
}

const x = document.getElementById("hamBtn");
x.onclick = toggleMenu;
