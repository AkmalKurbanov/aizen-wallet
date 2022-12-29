$('.col-wrap .col-wrap__col:first-child').addClass('fadeOut1');
$('.col-wrap .col-wrap__col:last-child').addClass('fadeOut2');
$('.section:not(.exception)').addClass('fade-scroll');
$('.count-items, .gradient-section, .comments, .hero-full-height .title, .hero-full-height p, .txt-img-blur').addClass('fadeOut1');
$('.gradient-section, .hero-full-height, .txt-img-blur').addClass('fade-scroll');

function isScrolledIntoView(elem) {
  var docViewTop = $(window).scrollTop();
  var docViewBottom = docViewTop + $(window).height();

  var elemTop = $(elem).offset().top;
  var elemBottom = elemTop + $(elem).height() / 2.5;
  return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$('.fadeOut1, .fadeOut2').each(function () {

  if (isScrolledIntoView(this) === true) {
    if ($(this).hasClass('fadeOut1')) {
      $(this).addClass('fadeIn1');
    } else {
      $(this).addClass('fadeIn2');
    }
  }
});




$(window).scroll(function () {
  $('.fadeOut1, .fadeOut2').each(function () {

    if (isScrolledIntoView(this) === true) {
      if ($(this).hasClass('fadeOut1')) {
        $(this).addClass('fadeIn1');
      } else {
        $(this).addClass('fadeIn2');
      }
    }
  });

});



$(function () {
  var documentEl = $(document),
    fadeElem = $('.fade-scroll');
  documentEl.on('scroll', function () {
    var currScrollPos = documentEl.scrollTop();
    fadeElem.each(function () {
      var $this = $(this),
        elemOffseTop = $this.offset().top;
      if (currScrollPos > elemOffseTop) {
        $this.css('opacity', 1 - (currScrollPos - elemOffseTop) / 400);

        if (window.matchMedia('(max-width: 767px)').matches) {
          $this.css('opacity', 1);
        }

      }

    })
  });
});
