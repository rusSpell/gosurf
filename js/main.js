$(function () {

    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="./images/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="./images/arrow-right.svg" alt="">',
        asNavFor: '.slider-dotshead'
    })

    $('.slider-dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.header__slider',
        focusOnSelect: true
    });
    $('.surf__slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="./images/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="./images/arrow-right.svg" alt="">',
        asNavFor: '.slider-map'
    })
    $('.slider-map').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
       
        asNavFor: '.surf__slider',
        focusOnSelect: true
    });

    $('.travel__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="./images/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="./images/arrow-right.svg" alt="">',
    })


});