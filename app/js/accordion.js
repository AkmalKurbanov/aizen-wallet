$('.accordion__title').on('click', function () {
  $(this).next('.accordion__desc').slideToggle();
  $(this).parent().toggleClass('active');
});