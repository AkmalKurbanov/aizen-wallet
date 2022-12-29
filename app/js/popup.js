$('.forget-pass-js').on('click', function () {
  $('#forget-pass').addClass('open');
  $('body').addClass('no-scroll');
});

$('.popup-close-js').on('click', function () {
  $('.popup').removeClass('open');
  $('body').removeClass('no-scroll');
});


$('#submit-inquiry').on('click', function () {
  $('#code').addClass('open');
  $('body').addClass('no-scroll');
});



$('.popup__pincode input').keydown(function (e) {
  $(this).val('');
});

$('.popup__pincode input').keyup(function (e) {
  var $wrap = $(this).closest('.popup__pincode');
  var $inputs = $wrap.find('input[type="number"]');

  if (e.keyCode == 8) {
    $inputs.eq($inputs.index(this) - 1).focus();
  }
  
  if ($inputs.index(this) == 0) {
    $inputs.eq($inputs.index(this) ).focus();
  }
  

});

$('.popup__pincode input').keyup(function (e) {
  var $wrap = $(this).closest('.popup__pincode');
  var $inputs = $wrap.find('input[type="number"]');
  var val = $(this).val();

  // Ввод только цифр
  if (val == val.replace(/[0-9]/, '')) {
    $(this).val('');
    return false;
  }

  // Передача фокуса следующему innput
  $inputs.eq($inputs.index(this) + 1).focus();




  // Заполнение input hidden
  var fullval = '';
  $inputs.each(function () {
    fullval = fullval + (parseInt($(this).val()) || '0');
  });
  $wrap.find('input[type="hidden"]').val(fullval);
});




