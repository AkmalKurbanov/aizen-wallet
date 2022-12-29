$('.show-pass').on('click', function () {
  $(this).hide();
  $('.hide-pass').css('display', 'flex');
  $("#pass").attr('type', 'text');
});
$('.hide-pass').on('click', function () {
  $(this).hide();
  $('.show-pass').css('display', 'flex');
  $("#pass").attr('type', 'password');
});
