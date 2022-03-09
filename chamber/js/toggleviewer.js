let viewtype = "O";
let ww = window.innerWidth;

    if (ww >= 600 && ww <= 1000) {
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
    if (ww >= 600 && ww <= 1000 ){
       if (viewtype != "M") {
           toggleView();
           viewtype = "M";
       }
    } else {
        if (viewtype == "M") {
            toggleView();
            viewtype = "O"
        }
    }
}

