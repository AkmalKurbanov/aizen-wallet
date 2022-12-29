$('.hamburger').on('click', function () {
  $('body').toggleClass('no-scroll')
  $(this).toggleClass('open');
  $('.slide-menu').toggleClass('open');
});