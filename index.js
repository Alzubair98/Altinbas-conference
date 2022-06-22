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



const featureCards = `
<div class="first-2-cards">
                    <div class="first-card">
                        <div class="images">
                            <img class="square-img" src="images/squers.jpg" alt="backgroundimg">
                            <img class="presenter-img" src="images/oguz-ata.jpg" alt="presenter-img">
                        </div>
                        <div class="card-text">
                            <h2 class="presenter-name">Oğuz ata</h2>
                            <p class="presenter-descreption">Head of IT department at altinbas university</p>
                            <hr class="text-divider">
                            <p class="presenter-infromation">he is founder of the IT department in altinbas</p>
                        </div>
                    </div>
                    <div class="first-card">
                        <div class="images">
                            <img class="square-img" src="images/squers.jpg" alt="backgroundimg">
                            <img class="presenter-img" src="images/sefer.jpg" alt="presenter-img">
                        </div>
                        <div class="card-text">
                            <h2 class="presenter-name">Sefer Kurnaz</h2>
                            <p class="presenter-descreption">Dr.sefer. faculaty of Engineering and Architecture</p>
                            <hr class="text-divider">
                            <p class="presenter-infromation">One of Altinbas Doctors Stuff </p>
                        </div>
                    </div>
                </div>
                <div class="first-2-cards">
                    <div class="first-card">
                        <div class="images">
                            <img class="square-img" src="images/squers.jpg" alt="backgroundimg">
                            <img class="presenter-img" src="images/abdo.jpg" alt="presenter-img">
                        </div>
                        <div class="card-text">
                            <h2 class="presenter-name">Abdullahi Ibrahim</h2>
                            <p class="presenter-descreption">Dr.Abdullahi. faculaty of Engineering and Architecture</p>
                            <hr class="text-divider">
                            <p class="presenter-infromation">One of Altinbas Doctors Stuff</p>
                        </div>
                    </div>
                    <div class="first-card">
                        <div class="images">
                            <img class="square-img" src="images/squers.jpg" alt="backgroundimg">
                            <img class="presenter-img" src="images/mohammed.jpg" alt="presenter-img">
                        </div>
                        <div class="card-text">
                            <h2 class="presenter-name">Mohammed Elias</h2>
                            <p class="presenter-descreption">Dr.Mohammed. faculaty of Engineering and Architecture</p>
                            <hr class="text-divider">
                            <p class="presenter-infromation">One of Altinbas Doctors Stuff</p>
                        </div>
                    </div>
                </div>
                <div class="first-2-cards">
                    <div class="first-card">
                        <div class="images">
                            <img class="square-img" src="images/squers.jpg" alt="backgroundimg">
                            <img class="presenter-img" src="images/timur1.png" alt="presenter-img">
                        </div>
                        <div class="card-text">
                            <h2 class="presenter-name">Timur Inan</h2>
                            <p class="presenter-descreption">Dr.Timur. faculaty of Engineering and Architecture</p>
                            <hr class="text-divider">
                            <p class="presenter-infromation">One of Altinbas Doctors Stuff</p>
                        </div>
                    </div>
                    <div class="first-card">
                        <div class="images">
                            <img class="square-img" src="images/squers.jpg" alt="backgroundimg">
                            <img class="presenter-img galip-img" src="images/galip1.jpg" alt="presenter-img">
                        </div>
                        <div class="card-text">
                            <h2 class="presenter-name">Galip Cansever</h2>
                            <p class="presenter-descreption">Dr.Timur. faculaty of Engineering and Architecture</p>
                            <hr class="text-divider">
                            <p class="presenter-infromation">One of Altinbas Doctors Stuff</p>
                        </div>
                    </div>
                </div>`


const cardContiner = document.querySelector(".all-feature-speakers-cards");


window.addEventListener("load", () => {
    cardContiner.innerHTML = featureCards
})

