const ham = document.querySelector('.ham-icon');
const links = document.querySelector('.menu-links');
const bars = document.querySelectorAll('.ham-icon span')

ham.addEventListener('click', () => {
    links.classList.toggle("active");
    bars.forEach(child => {child.classList.toggle("animated")});
})

