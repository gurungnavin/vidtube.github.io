let menuIcon = document.querySelector(".menu-icon");
let sidbar = document.querySelector(".sidebar");
let container = document.querySelector(".container");

menuIcon.onclick = function() {
    sidbar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container")
}