$(function(){

 $('.fairy-rail__slider').slick({
     prevArrow: '<button type="button" class="arrow slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
  nextArrow: '<button type="button" class="arrow slick-next"><img src="images/arrow-right.svg" alt=""></button>',
     fade: true,

 })
    $('.our-trip__slider').slick({
        prevArrow: '<button type="button" class="arrow slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="arrow slick-next"><img src="images/arrow-right.svg" alt=""></button>',
        fade: true,
    })

    $('.menu').on('click', 'a', function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1000)
    })

    $('.our-trip__container').on('click', 'a', function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body, html').animate({scrollTop: top}, 1000)
    })

});