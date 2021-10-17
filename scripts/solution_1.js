$(document).ready(function () {
    $('header nav ul li .company-name').removeClass('color-white');
    $('header nav').addClass('color-black');

    // Accordian Click Functionality for image change

    // TEXT ANNOTATIONS
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

    // IMAGE ANNOTATIONS
    $('#object-detection').click(() => {
        if ($("#use-case-hero-img").attr('src') !== './../images/solutions_page/image_annotation/usecases/object_classification.png') {
            $("#use-case-hero-img").attr('src', './../images/solutions_page/image_annotation/usecases/object_classification.png');
        }
    });
    $('#classification').click(() => {
        if ($("#use-case-hero-img").attr('src') !== './../images/solutions_page/image_annotation/usecases/classification.png') {
            $("#use-case-hero-img").attr('src', './../images/solutions_page/image_annotation/usecases/classification.png');
        }
    });
    $('#supported-annotation-types').click(() => {
        if ($("#use-case-hero-img").attr('src') !== './../images/solutions_page/image_annotation/usecases/support_for_all_annotation_types.png') {
            $("#use-case-hero-img").attr('src', './../images/solutions_page/image_annotation/usecases/support_for_all_annotation_types.png');
        }
    });

    // VIDEO ANNOTATIONS
    $('#video-classification').click(() => {
        if ($("#use-case-hero-img").attr('src') !== './../images/solutions_page/video_annotation/usecases/classification.png') {
            $("#use-case-hero-img").attr('src', './../images/solutions_page/video_annotation/usecases/classification.png');
        }
    });
    $('#prediction-intent').click(() => {
        if ($("#use-case-hero-img").attr('src') !== './../images/solutions_page/video_annotation/usecases/prediction_and_intent.png') {
            $("#use-case-hero-img").attr('src', './../images/solutions_page/video_annotation/usecases/prediction_and_intent.png');
        }
    });

    $('#detection-tracking').click(() => {
        if ($("#use-case-hero-img").attr('src') !== './../images/solutions_page/video_annotation/usecases/detection_and_tracking.png') {
            $("#use-case-hero-img").attr('src', './../images/solutions_page/video_annotation/usecases/detection_and_tracking.png');
        }
    });

    // LIDAR + RADAR

    $('#d3-cuboids').click(() => {
        if ($("#use-case-hero-img").attr('src') !== './../images/solutions_page/lidar+radar/usecases/3d cuboids.png') {
            $("#use-case-hero-img").attr('src', './../images/solutions_page/lidar+radar/usecases/3d cuboids.png');
        }
    });
    $('#attributes').click(() => {
        if ($("#use-case-hero-img").attr('src') !== './../images/solutions_page/lidar+radar/usecases/Attributes.png') {
            $("#use-case-hero-img").attr('src', './../images/solutions_page/lidar+radar/usecases/Attributes.png');
        }
    });
    $('#other-use-cases').click(() => {
        if ($("#use-case-hero-img").attr('src') !== './../images/solutions_page/lidar+radar/usecases/others.png') {
            $("#use-case-hero-img").attr('src', './../images/solutions_page/lidar+radar/usecases/others.png');
        }
    });

    // MAP ANNOTATIONS
    $('#map-all-types').click(() => {
        if ($("#use-case-hero-img").attr('src') !== './../images/solutions_page/map_annotation/usecases/all_types.png') {
            $("#use-case-hero-img").attr('src', './../images/solutions_page/map_annotation/usecases/all_types.png');
        }
    });
    $('#map-attributes').click(() => {
        if ($("#use-case-hero-img").attr('src') !== './../images/solutions_page/map_annotation/usecases/Attributes.png') {
            $("#use-case-hero-img").attr('src', './../images/solutions_page/map_annotation/usecases/Attributes.png');
        }
    });
    $('#map-supported-types').click(() => {
        if ($("#use-case-hero-img").attr('src') !== './../images/solutions_page/map_annotation/usecases/supported_types.png') {
            $("#use-case-hero-img").attr('src', './../images/solutions_page/map_annotation/usecases/supported_types.png');
        }
    });



});