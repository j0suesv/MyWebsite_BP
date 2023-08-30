const ham = document.querySelector('.ham-icon');
const links = document.querySelector('.menu-links');
const bars = document.querySelectorAll('.ham-icon span');
const aboutLink = document.querySelector(".link1");
const favSportLink = document.querySelector(".link2");
const favTeamsLink = document.querySelector(".link3");
const favPlayersLinks = document.querySelector(".link4");


ham.addEventListener('click', () => {
    links.classList.toggle("active");
    bars.forEach(child => {child.classList.toggle("animated")});
});

aboutLink.addEventListener('click', () => {
    links.classList.toggle("active");
    bars.forEach(child => {child.classList.toggle("animated")});
});
favSportLink.addEventListener('click', () => {
    links.classList.toggle("active");
    bars.forEach(child => {child.classList.toggle("animated")});
});
favTeamsLink.addEventListener('click', () => {
    links.classList.toggle("active");
    bars.forEach(child => {child.classList.toggle("animated")});
});
favPlayersLinks.addEventListener('click', () => {
    links.classList.toggle("active");
    bars.forEach(child => {child.classList.toggle("animated")});
});

