$('.count-items__item').each(function (index) {
  $(this).find('.count-items__count').append(index + 1 + ".");
});