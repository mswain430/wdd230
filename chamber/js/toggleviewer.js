let viewtype = "O";
let ww = window.innerWidth;

    if (ww >= 592 && ww <= 991) {
        toggleView();
        viewtype = "M";
    }

function toggleView() {
    document.getElementById('gridviewBtn').classList.toggle("open");
    document.getElementById('listviewBtn').classList.toggle("open");
    document.getElementById('bizDir').classList.toggle("open");
}

const lv = document.querySelector("#listviewBtn");
    lv.onclick = toggleView();
const gv = document.querySelector("#gridviewBtn");
    gv.onclick = toggleView();


function checkWidth() {
    ww = window.innerWidth;
    if (ww >= 592 && ww <= 991 ){
       if (viewtype != "M") {
           toggleMenu();
           viewtype = "M";
       }
    } else {
        if (viewtype == "M") {
            toggleView();
            viewtype = "O"
        }
    }
}

