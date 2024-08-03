var $elementAuthorityBtn = $('.authority-button-wrapper');

var $elementTeachersBtn = $('.teachers-button-wrapper');

var $elementGalleryBtn = $('.gallery-button-wrapper');

$(document).ready(function () {
  $('.authority__cards').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    arrows: true,
    dots: false,
    appendArrows: $elementAuthorityBtn,
    centerMode: true,
  });
});

$(document).ready(function () {
  $('.teachers__cards').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    arrows: true,
    dots: false,
    appendArrows: $elementTeachersBtn,
    centerMode: true,
  });
});

$(document).ready(function () {
  $('.gallery__images').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    variableWidth: true,
    arrows: true,
    dots: false,
    appendArrows: $elementGalleryBtn,
    centerMode: true,
  });
});
