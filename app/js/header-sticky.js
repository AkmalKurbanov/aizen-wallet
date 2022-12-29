$(window).scroll(function () {
  var sticky = $('.header');
  var headerHeight = sticky.outerHeight();
    scroll = $(window).scrollTop();

  if (scroll >= headerHeight) {
    sticky.addClass('sticky');
  } else {
    sticky.removeClass('sticky');
  }
});