$(document).ready(function () {


    $('header nav').addClass('color-white');

    $("#use-cases-carousel").owlCarousel({
        goToFirst: true,
        navigation: false,
        items: 2,
        pagination: false,
        paginationNumbers: true
    });

    $("#resources-carousel").owlCarousel({
        goToFirst: true,
        navigation: false,
        items: 2,
        pagination: false,
        paginationNumbers: true
    });

    var useCasesOwlCarousel = $("#use-cases-carousel").data('owlCarousel');
    var resourcesOwlCarousel = $("#resources-carousel").data('owlCarousel');

    $('#use-cases-carousel-left').click(function () {
        useCasesOwlCarousel.prev();
    });

    $('#use-cases-carousel-right').click(function () {
        useCasesOwlCarousel.next();
    });
    $('#resources-carousel-left').click(function () {
        resourcesOwlCarousel.prev();
    });

    $('#resources-carousel-right').click(function () {
        resourcesOwlCarousel.next();
    });

});