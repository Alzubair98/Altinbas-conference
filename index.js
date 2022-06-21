const navMenu = document.querySelector(".hamburger-button");
const hiddenMenu = document.querySelector(".hidden-menu");
const xbutton = document.querySelector(".menu-hamburger-button");
const fullBody = document.body;


navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    hiddenMenu.classList.toggle("active")
    fullBody.classList.toggle("active")
})

xbutton.addEventListener("click", ()=>  {
    navMenu.classList.toggle("active")
    hiddenMenu.classList.toggle("active")
    fullBody.classList.toggle("active")
})