$(document).ready(function () {

    var ovalShapeImageContent = "From 2D bounding boxes to pixel perfect semantic segmentation, Anmerkung continues to deliver high quality image annotation for varied industries and use cases including autonomous driving, defect detection, medical annotations, cataloguing etc.";
    var ovalShapeTextContent = "Text annotations are critical for all NLP research and models for eCommerce, Financial Services and other text processing use cases. Text annotations are typically high volume and require an eye for high quality annotations and classification at scale.";
    var ovalShapeVideoContent = "Covering the whole spectrum of classification, object detection and tracking, Anmerkung’s video annotation practise has scaled to the largest contributing offerings and supports some of the largest European OEMs with consistent data every single month.";
    var ovalShape3DFusionContent = "Sensors have taken over the world of computer vision. From short distance to long range lidars to radars with sophisticated set ups, Anmerkung has successfully been running annotation pipelines with 99% + SLA adherence. Anmerkung has specially designed workforce set up for all Lidar annotations.";
    var ovalShapeMappingContent = "Anmerkung has been supporting maps annotations for a long time with vector, semantic annotations and linking projects. Anmerkung prides itself on working with some of the largest names in the industry to contribute annotation pipelines every single day.";

    $('header nav').addClass('color-white');

    $("#use-cases-carousel").owlCarousel({
        goToFirst: true,
        navigation: false,
        items: 2,
        pagination: false,
        paginationNumbers: false,
        // margin: 120,
        slideSpeed: 750
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

    $("#img-container--1").hover(function () {
        $("#oval-shape-content--title").text("Text");
        $("#oval-shape-content").css({
            "left": "12%",
            "top": "41%",
            "transition": "all ease-in .2s",
            "text-align": 'left'
        });
        $("#oval-shape-content--description").text(ovalShapeTextContent);
        $("#oval-shape-images").attr('src', '../images/oval_shape_resources/Text.png');
    });
    
    $("#img-container--2").hover(function () {
        $("#oval-shape-content--title").text("Image");
        $("#oval-shape-content").css({
            "left": "32%",
            "top": "41%",
            "transition": "all ease-in .2s",
            "text-align": 'left'
        });
        $("#oval-shape-images").attr('src', '../images/oval_shape_resources/Image.png');
        $("#oval-shape-content--description").text(ovalShapeImageContent);
    });

    $("#img-container--3").hover(function () {
        $("#oval-shape-content--title").text("Video");
        $("#oval-shape-content").css({
            "left": "50%",
            "top": "41%",
            "transition": "all ease-in .2s",
            "text-align": 'left'
        });
        $("#oval-shape-images").attr('src', '../images/oval_shape_resources/Video.png');
        $("#oval-shape-content--description").text(ovalShapeVideoContent);
    });

    $("#img-container--4").hover(function () {
        $("#oval-shape-content--title").text("3D Sensor Fusion");
        $("#oval-shape-content").css({
            "left": "69%",
            "top": "41%",
            "transition": "all ease-in .2s",
            "text-align": 'left'
        });
        $("#oval-shape-images").attr('src', '../images/oval_shape_resources/3D.png');
        $("#oval-shape-content--description").text(ovalShape3DFusionContent);
    });

    $("#img-container--5").hover(function () {
        $("#oval-shape-content--title").text("Mapping");
        $("#oval-shape-content").css({
            "left": "65%",
            "top": "41%",
            "transition": "all ease-in .2s",
            "text-align": 'right'
        });
        $("#oval-shape-images").attr('src', '../images/oval_shape_resources/Map.png');
        $("#oval-shape-content--description").text(ovalShapeMappingContent);
    });

});