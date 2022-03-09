function toggleMenu() {
    document.querySelector('.gridviewBtn').classList.toggle("open");
    document.querySelector('.listviewBtn').classList.toggle("open");
    document.querySelector('.bizcards').classList.toggle("open");
}
    const xo = document.querySelector(".gridviewBtn");
        xo.onclick = toggleMenu;
    const ox = document.querySelector(".listviewBtn");
        ox.onclick = toggleMenu;

    let viewtype = "O";
    let ww = window.innerWidth;

    if (ww >= 592 && ww <= 991) {
        toggleMenu();
        viewtype = "M";
    }

function checkWidth() {
    ww = window.innerWidth;
    if (ww >= 592 && ww <= 991 ){
       if (viewtype != "M") {
           toggleMenu();
           viewtype = "M";
       }
    } else {
        if (viewtype == "M") {
            toggleMenu();
            viewtype = "O"
        }
    }
}