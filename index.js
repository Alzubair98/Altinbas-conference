const navMenu = document.querySelector(".hamburger-button");
const hiddenMenu = document.querySelector(".hidden-menu");
const xbutton = document.querySelector(".menu-hamburger-button");


navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    hiddenMenu.classList.toggle("active")
})

xbutton.addEventListener("click", ()=>  {
    navMenu.classList.toggle("active")
    hiddenMenu.classList.toggle("active")
})