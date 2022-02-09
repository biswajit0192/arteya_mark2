///////// Mobile Menu //////////
const menuIcon = document.getElementById('mobile-menu-icon');
const menuClose = document.getElementById('menu-close-icon');
const mobMenu = document.getElementById('mob-menu-div');

menuIcon.addEventListener('click', () => {
    mobMenu.style.display = 'block';
});
menuClose.addEventListener('click', () => {
    mobMenu.style.display = 'none';
});