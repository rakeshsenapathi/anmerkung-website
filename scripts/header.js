$(document).ready(function () {
    $('.nav-icon').click(function () {
        document.getElementById("mobile-navigation-sidenav").style.width = "320px";
    });
    $('.mobile-nav-close').click(function () {
        document.getElementById("mobile-navigation-sidenav").style.width = "0px";
    });

    $('#mob-nav-solutions-header').click(function () {
        // document.getElementById("mobile-navigation-sidenav").style.width = "0px";
        document.getElementById("solutions-sidenav").style.width = "320px";
    });
    $('.mobile-nav-solutions-close').click(function () {
        document.getElementById("solutions-sidenav").style.width = "0px";
    });


});