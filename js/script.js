$(function () {
  'use strict';
  //  count down start+++++++++++++++++++++++++++++
  $(function () {
    $('#countdown').countdown({
      year: 2026, // YYYY Format
      month: 1, // 1-12
      day: 1, // 1-31
      hour: 0, // 24 hour format 0-23
      minute: 0, // 0-59
      second: 0, // 0-59
    });
  });
  //  count down end+++++++++++++++++++++++++++++
  //  top rated mixitup start+++++++++++++++++++++++++++++
  var containerEl = document.querySelector('.mixitip');

  var mixer = mixitup(containerEl);
  //  top rated mixitup end+++++++++++++++++++++++++++++
  //  testmonial slider start+++++++++++++++++++++++++++++

  $('.test_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: '<i class="fas fa-long-arrow-alt-left prevv"></i>',
    nextArrow: '<i class="fas fa-long-arrow-alt-right nextt"></i>'
  });
  //  testmonial slider end+++++++++++++++++++++++++++++
  //  manu fixed start+++++++++++++++++++++++++++++
  var manu = $('.main_manu').offset().top;

  $(window).scroll(function () {

    var fixed = $(this).scrollTop();

    if (fixed > manu) {
      $('.main_manu').addClass('fixedd');
    } else {
      $('.main_manu').removeClass('fixedd');

    }
  });
  //  manu fixed end+++++++++++++++++++++++++++++
  //  back to top start+++++++++++++++++++++++++++++
  $('.back_top').click(function () {
    $('html, body').animate({
      scrollTop: 0,
    }, 1000);
  });



  $(window).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > 300) {
      $('.back_top').fadeIn();
    } else {
      $('.back_top').fadeOut();

    }
  });
  //  back to top end+++++++++++++++++++++++++++++
  

})