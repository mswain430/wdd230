 function toggleMenu2() {
   document.getElementById("bgrid").classList.toggle("open");
   document.getElementById("blist").classList.toggle("open");
}

function hideGrid() {
  var x = document.getElementById("bizcards");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}