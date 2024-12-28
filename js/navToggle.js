// Side Navigation Bar

var nav = document.getElementById('side-nav');
var menu = document.getElementsByClassName('menu')[0];

function navOpen() {
    nav.style.display = "block"
    menu.style.display = "none"
}

function navClose() {
    nav.style.display = "none"
    menu.style.display = "block"
}