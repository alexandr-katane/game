
document.querySelectorAll('a[href^="#"').forEach(link => {

    link.addEventListener('click', function (e) {

        e.preventDefault();
        document.body.classList.remove('_lock');
        iconMenu.classList.remove('_active');
        menuBody.classList.remove('_active');
        let href = this.getAttribute('href').substring(1);
        const scrollTarget = document.getElementById(href);
        const topOffset = document.querySelector('.header__fixed').offsetHeight;
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        let offsetPosition;
        if (document.body.clientWidth >= 767) {
            offsetPosition = elementPosition - topOffset;
        } else {
            offsetPosition = elementPosition;
        }
        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
});

