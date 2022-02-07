$(document).ready(function () {
    $('.gallery__categorie').click(function () {
        $(this).addClass('_active').siblings().removeClass('_active');
        let filter = $(this).attr('data-filter');
        if (filter == 'all') {
            $('.item-gallery').show(400);
        } else {
            $('.item-gallery').not('.' + filter).hide(200);
            $('.item-gallery').filter('.' + filter).show(400);
        }
    });

    $('.blog-item').not('.' + $('.blogs__categorie').attr('data-filter')).hide(200);
    $('.blogs__categorie').click(function () {
        $(this).addClass('_active').siblings().removeClass('_active');
        let filter = $(this).attr('data-filter');
        $('.blog-item').not('.' + filter).hide(200);
        $('.blog-item').filter('.' + filter).show(400);
    });
});