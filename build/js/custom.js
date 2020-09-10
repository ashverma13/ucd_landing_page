$(document).ready(function(){
        $('.testimonials-slider').slick({
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                centerMode: true,
                centerPadding: '0',
                responsive: [
                        {
                                breakpoint: 768,
                                settings: {
                                        slidesToShow: 1
                                }
                        }
                ]
        });
});