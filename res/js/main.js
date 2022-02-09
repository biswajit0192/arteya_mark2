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

////////// To Top Btn ////////////
const topBtn = document.getElementById('to-top-btn');
const htmlbody = document.getElementsByTagName("body");

window.addEventListener('scroll', () => {
    if(window.scrollY >= 800) {
        topBtn.style.opacity = "1";
    }
    else {
        topBtn.style.opacity = "0";
    }
})

topBtn.addEventListener('click', () => {
    window.scrollTo(0, 0);
    // htmlbody.style.scrollBehavior = "smooth";
});