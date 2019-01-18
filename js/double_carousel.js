$(document).ready(function(){

    var slider1 = $('.double_carousel1');
    slider1.owlCarousel({
        center: true,
        items: 1,
        nav: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause:true,
        smartSpeed: 1500,
        margin: 0,
        navText: ['<i class="fas fa-chevron-left trans_300"></i>','<i class="fas fa-chevron-right trans_300"></i>']
    });

    var slider2 = $('.double_carousel2');
    slider2.owlCarousel({
        center: true,
        items: 1,
        nav: true,
        loop: true,
        margin: 0
    });


});