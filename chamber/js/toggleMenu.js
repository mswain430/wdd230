 function toggleMenu() {
   document.getElementById("gridviewBtn").classList.toggle("open");
   document.getElementById("listviewBtn").classList.toggle("open");
}

function hideGrid() {
  const gv = document.getElementById("bizDir");
  if (gv.style.display === "none") {
    gv.style.display = "block";
  } else {
    gv.style.display = "none";
  }
}