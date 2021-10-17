$(document).ready(function () {
    $('header nav ul li .company-name').removeClass('color-white');
    $('header nav').addClass('color-black');

    // Accordian Click Functionality for image change
    $('#entity-annotation').click(() => {
        if ($("#use-case-hero-img").attr('src') !== './../images/solutions_page/text_annotation/usecases/Entity Annotation.png') {
            $("#use-case-hero-img").attr('src', './../images/solutions_page/text_annotation/usecases/Entity Annotation.png');
        }
    });
    $('#text-classification').click(() => {
        if ($("#use-case-hero-img").attr('src') !== './../images/solutions_page/text_annotation/usecases/Text Classification.png') {
            $("#use-case-hero-img").attr('src', './../images/solutions_page/text_annotation/usecases/Text Classification.png');
        }
    });
    $('#sentiment-analysis').click(() => {
        if ($("#use-case-hero-img").attr('src') !== './../images/solutions_page/text_annotation/usecases/Sentiment Analysis.png') {
            $("#use-case-hero-img").attr('src', './../images/solutions_page/text_annotation/usecases/Sentiment Analysis.png');
        }
    });
    $('#linguistic-annotation').click(() => {
        if ($("#use-case-hero-img").attr('src') !== './../images/solutions_page/text_annotation/usecases/Linguistic Annotation.png') {
            $("#use-case-hero-img").attr('src', './../images/solutions_page/text_annotation/usecases/Linguistic Annotation.png');
        }
    });


});