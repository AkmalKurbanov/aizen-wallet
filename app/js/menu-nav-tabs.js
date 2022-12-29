
$(document).ready(function () {

  (function ($) {
    $('.tab .tabs').addClass('active').find('> .tab-item:eq(0)').addClass('current');

    var tabFuction = function (g) {
      var tab = $(this).closest('.tab'),
        index = $(this).closest('.tab-item').index();

      tab.find('.tabs > .tab-item').removeClass('current');
      $(this).closest('.tab-item').addClass('current');


      tab.find('.tab-content').find('div.tab-content-item').not('div.tab-content-item:eq(' + index + ')').hide();
      tab.find('.tab-content').find('div.tab-content-item:eq(' + index + ')').css('display', 'flex');
      g.preventDefault();
    }

    $('.header__menu-item .tab .tab-item a').hover(tabFuction);
    $('.transfer .tab .tab-item a').click(tabFuction);

  })(jQuery);


  $('.header__menu-item').each(function (index) {
    if ($(this).find('.header__item-content,.header__item-dropdown').length !== 0) {
      $(this).addClass('has-attachment');
      $(this).find('span, a').first().append('<svg class="icon icon--stroke"><use xlink:href="#angle"></use></svg>')
    }
  });

  $('.attachment-trigger-js:not(.attachment-trigger-js--hover)').on('click', function () {
    $('.attachment-trigger-js').not(this).parent().removeClass('open');
    $(this).parent().toggleClass('open');
  })



  $(".attachment-trigger-js--hover, .header__item-dropdown").on({
    mouseenter: function () {
      $('.attachment-trigger-js').not(this).parent().removeClass('open');
      $(this).parent().addClass('open');
    },
    mouseleave: function () {
      $('.attachment-trigger-js').not(this).parent().removeClass('open');
      $(this).parent().removeClass('open');
    }
  });



  $(document).mouseup(function (e) {
    var div = $(".attachment-trigger-js, .header__item-content");
    if (!div.is(e.target) &&
      div.has(e.target).length === 0) {
      $('.has-attachment').removeClass('open');
    }
  });
});



