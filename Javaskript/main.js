
const openmenubtn = document.querySelector("#menu-open");
const closemenubtn = document.querySelector("#menu-close");
const menu = document.querySelector(".menu");

function openMenu(event){
    console.log("open on click");
    menu.style.display = "flex";
    openmenubtn.style.display = "none";
}
openmenubtn.addEventListener("click", openMenu);

function closeMenu(event){
    console.log("close on click");
    menu.style.display = "none";
    openmenubtn.style.display = "block";
}
closemenubtn.addEventListener("click", closeMenu);
