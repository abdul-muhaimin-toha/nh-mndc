var $element = $('.authority-button-wrapper');

$(document).ready(function () {
  $('.authority__cards').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    arrows: true,
    dots: false,
    appendArrows: $element,
    centerMode: true,
  });
});
