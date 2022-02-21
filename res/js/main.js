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

//////// Drop Menu ////////////////
const serviceMenu = document.getElementById('head-sercive-menu');
const dropMenu = document.querySelector('.drop-menu');

serviceMenu.addEventListener('click', () => {
    dropMenu.style.display('block')
    console.log("Hello");
})

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
    document.location.href = String( document.location.href ).replace( "#/", "" );
    // htmlbody.style.scrollBehavior = "smooth";
});

// console.log(window.pageYOffset);

//////////////////// Services Expand Box ///////////////////////
let serviceBox1 = document.getElementById('service-box1');
let serviceBox2 = document.getElementById('service-box2');
let serviceBox3 = document.getElementById('service-box3');

serviceBox1.addEventListener('click', () => {
    serviceBox1.classList.toggle('ex-box-open')
    serviceBox2.classList.remove('ex-box-open')
    serviceBox3.classList.remove('ex-box-open')
})
serviceBox2.addEventListener('click', () => {
    serviceBox2.classList.toggle('ex-box-open')
    serviceBox1.classList.remove('ex-box-open')
    serviceBox3.classList.remove('ex-box-open')
})
serviceBox3.addEventListener('click', () => {
    serviceBox3.classList.toggle('ex-box-open')
    serviceBox1.classList.remove('ex-box-open')
    serviceBox2.classList.remove('ex-box-open')
})

// var path = window.location.pathname;
// var page = path.split("/").pop();
// console.log( page );

// console.log(window.pageYOffset);

///////////////////// Porjects Filter /////////////////////
// let allFilt = document.getElementById("all-filter");
// let webFilt = document.getElementById("website-filter");
// let portalFilt = document.getElementById("portals-filter");
// let appsFilt = document.getElementById("apps-filter");

// let websiteGrid = document.querySelector('.proj-webs-wraps');
// let portalGrid = document.querySelector('.proj-portals-wraps');
// let appsGrid = document.querySelector('.proj-apps-wraps');

// allFilt.addEventListener('click', () =>{
//     // console.log("Hello");
//     websiteGrid.style.display = 'grid';
//     portalGrid.style.display = 'grid';
//     appsGrid.style.display = 'grid';
// });
// webFilt.addEventListener('click', () =>{
//     // console.log("Hello");
//     websiteGrid.style.display = 'grid';
//     portalGrid.style.display = 'none';
//     appsGrid.style.display = 'none';
// });
// portalFilt.addEventListener('click', () =>{
//     // console.log("Hello");
//     websiteGrid.style.display = 'none';
//     portalGrid.style.display = 'grid';
//     appsGrid.style.display = 'none';
// });
// appsFilt.addEventListener('click', () =>{
//     // console.log("Hello");
//     websiteGrid.style.display = 'none';
//     portalGrid.style.display = 'none';
//     appsGrid.style.display = 'grid';
// });
