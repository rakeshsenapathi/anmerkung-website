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

    $("#img-container--1").hover(function(){
        $("#oval-shape-content--title").text("Image");
        $("#oval-shape-content").css({"left" : "12%", "top" : "41%", "transition" : "all ease-in .2s"});
        $("#oval-shape-content--description").text("Neque, a orci ut tincidunt. Eros, facilisi vulputate eu donec pharetra. Tempus sit lectus pharetra aliquet. Tortor aenean duis leo in.");
    });

    $("#img-container--2").hover(function(){
        $("#oval-shape-content--title").text("Text");
        $("#oval-shape-content").css({"left" : "32%", "top" : "41%", "transition" : "all ease-in .2s"});
        $("#oval-shape-content--description").text("Neque, a orci ut tincidunt. Eros, facilisi vulputate eu donec pharetra. Tempus sit lectus pharetra aliquet. Tortor aenean duis leo in.");
    });

    $("#img-container--3").hover(function(){
        $("#oval-shape-content--title").text("Video");
        $("#oval-shape-content").css({"left" : "50%", "top" : "41%", "transition" : "all ease-in .2s"});
        $("#oval-shape-content--description").text("Neque, a orci ut tincidunt. Eros, facilisi vulputate eu donec pharetra. Tempus sit lectus pharetra aliquet. Tortor aenean duis leo in.");
    });

    $("#img-container--4").hover(function(){
        $("#oval-shape-content--title").text("3D Sensor Fusion");
        $("#oval-shape-content").css({"left" : "69%", "top" : "41%", "transition" : "all ease-in .2s"});
        $("#oval-shape-content--description").text("Neque, a orci ut tincidunt. Eros, facilisi vulputate eu donec pharetra. Tempus sit lectus pharetra aliquet. Tortor aenean duis leo in.");
    });

    $("#img-container--5").hover(function(){
        $("#oval-shape-content--title").text("Mapping");
        $("#oval-shape-content").css({"left" : "80%", "top" : "41%", "transition" : "all ease-in .2s"});
        $("#oval-shape-content--description").text("Neque, a orci ut tincidunt. Eros, facilisi vulputate eu donec pharetra. Tempus sit lectus pharetra aliquet. Tortor aenean duis leo in.");
    });

});