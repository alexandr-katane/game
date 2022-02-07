@@include('functions.js');
@@include('gallery.js');
@@include('swiper.min.js');
@@include('sliders.js');
@@include('inputmask.js');
@@include('form.js');
@@include('scroll.js');

const headerFixed = document.querySelector(".header__fixed");
const headerText = document.querySelector(".header__text");

window.addEventListener('scroll', function (e) {
    if (headerText.getBoundingClientRect().bottom < 10) {
        headerFixed.classList.add("_active");
    } else {
        headerFixed.classList.remove("_active");
    }
});


