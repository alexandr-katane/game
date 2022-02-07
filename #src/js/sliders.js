
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-container')) {
            slider.classList.add('swiper-container');
        }

        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');
        }
    }
    sliders_build_callback();
}

function sliders_build_callback(params) { }

if (document.querySelector('.slider-testimonials__body')) {
    let mainSlider = new Swiper('.slider-testimonials__body', {
        slidesPerView: 1,
        speed: 800,
        loop: true,
        preloadImages: false,
        parallax: true,
        spaceBetween: 100,
        autoplay: {
            delay: 4200,
        },
        navigation: {
            nextEl: '.slider-controls__arrow_next',
            prevEl: '.slider-controls__arrow_prev',
        },
    });
}

