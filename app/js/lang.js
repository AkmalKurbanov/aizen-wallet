$(".header__lang-dropdown, .header__lang-seleced").on({
  mouseenter: function () {
    $(this).parent().addClass('open');
  },
  mouseleave: function () {
    $(this).parent().removeClass('open');
  }
});


$('document').mouseup(function (e) {
  var div = $(".header__lang");
  if (!div.is(e.target) &&
    div.has(e.target).length === 0) {
    div.removeClass('open');
  }
});

$('.footer__lang-active').on('click', function () {
  $(this).parent().find('.footer__lang-dropdown').slideToggle();
});


$(document).mouseup(function (e) {
  var div = $(".header__lang-seleced, .header__lang-dropdown, .footer__lang-active");
  if (!div.is(e.target) &&
    div.has(e.target).length === 0) {
    $('.header__lang').removeClass('open');
    $('.footer__lang-dropdown').slideUp();
  }
});








// const length = document.getElementById('check').getTotalLength();
// console.log(length);
