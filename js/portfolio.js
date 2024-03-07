"use strict"
window.onload = init;
window.onresize = checkResize;

let menuDown = false;

//Initialization function
function init() {
    document.querySelector("#hamburgerMenu").onclick = toggleMenu;
}

//Toggles the dropdown menu activated with the hamburger icon
function toggleMenu() {
    menuDown = !menuDown;
    setMenuState();
}

//Sets the current state of the dropdown menu (whether or not it is displayed)
function setMenuState() {
    if (menuDown) {
        document.querySelector("nav").style.display = "block";
    } else {
        document.querySelector("nav").style.display = "none";
    }
}

//Checks the current size of the window to see if menu visibility needs to be adjusted
function checkResize() {
    if(window.innerWidth > 820) {
        menuDown = true;
    } else {
        menuDown = false;
    }
    setMenuState();
}