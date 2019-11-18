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

    $('.holder__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="./images/arrow-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="./images/arrow-right.svg" alt="">',
    });
    $('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });


});