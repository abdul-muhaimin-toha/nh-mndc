var $elementAuthorityBtn = $('.authority-button-wrapper');

var $elementTeachersBtn = $('.teachers-button-wrapper');

var $elementGalleryBtn = $('.gallery-button-wrapper');

var $elementHerBtn = $('.hero__arrows');

var $elementHeroMobileBtns = $('.hero-mobile__btns');

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

$('.hero__sliders').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  variableWidth: true,
  arrows: true,
  centerMode: true,
  appendArrows: $elementHerBtn,
});

$('.hero-mobile__sliders').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  variableWidth: true,
  arrows: true,
  centerMode: true,
  appendArrows: $elementHeroMobileBtns,
});

$('.notices__container').slick({
  slidesToShow: 5,
  slidesToScroll: 2,
  arrows: false,
  dots: false,
  vertical: true,
  verticalSwiping: true,
  autoplay: true,
  autoplaySpeed: 1000,
});

let blocked = false;
let blockTimeout = null;
let prevDeltaY = 0;

$('.notices__container').on('mousewheel DOMMouseScroll wheel', function (e) {
  let deltaY = e.originalEvent.deltaY;
  e.preventDefault();
  e.stopPropagation();

  clearTimeout(blockTimeout);
  blockTimeout = setTimeout(function () {
    blocked = false;
  }, 50);

  if (
    (deltaY > 0 && deltaY > prevDeltaY) ||
    (deltaY < 0 && deltaY < prevDeltaY) ||
    !blocked
  ) {
    blocked = true;
    prevDeltaY = deltaY;

    if (deltaY > 0) {
      $(this).slick('slickNext');
    } else {
      $(this).slick('slickPrev');
    }
  }
});
