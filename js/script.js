'use strict';

$(function(){
  /* ================= theme change  ================= */
  $('#btn__dark').click(function(){
    $(this).hide();
    $('body').addClass('dark-theme');
    $('#btn__basic').show();
  });
  $('#btn__basic').click(function(){
    $('body').removeClass('dark-theme');
    $('#btn__dark').show();
    $(this).hide();
  });

 /* ================= skills  ================= */
  $('.skills__header').click(function(){
    $(this).children('.skill__icon--arrow').toggleClass('active');
    $(this).siblings('.skill__data').stop().slideToggle();
  });
  /* ================= portfolio slider  ================= */
  $('.portfolio__slider').slick({
    dots:true,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
  });
  
  /* ================= portfolio modal  ================= */
    var $modalImg = $('.modal__img');
    var $portOverlay = $('.portfolio__overlay');
    $modalImg.click(function(){
        var src = $(this).children('img').attr('src');
        var $portmodalImg = $('.portfolio__modal img');
        console.log(src);
        // modal에 있는 img 엘리먼트 src에 이미지 주소를 세팅
        $portmodalImg.attr('src', src);
        $portOverlay.show();
    });
    $portOverlay.click(function(e){
        if(e.target == e.currentTarget){
            $(this).fadeOut();
        }
    });
    var $kakaoBtn = $('.kakao__btn');
    var $kakaoImg = $('.kakao__img');
    var $kakaoOverlay = $('.kakao__overlay');
    $kakaoBtn.click(function(){
      $kakaoOverlay.show();
    });
    $kakaoImg.click(function(){
      var src = $(this).children('img').attr('src');
      var $kakaomodalImg = $('.kakao__modal img');
      console.log(src);
      // modal에 있는 img 엘리먼트 src에 이미지 주소를 세팅
      $kakaomodalImg.attr('src', src);
      $kakaoOverlay.show();
    });

  $kakaoOverlay.click(function(e){
      if(e.target == e.currentTarget){
          $(this).fadeOut();
      }
    });
});
/* ================= scroll up ================= */
var portfolioDistance = $(".portfolio").offset().top;
var $scrollUp = $(".scrollup");
$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();
  if (scrollTop > portfolioDistance) {
    $scrollUp.addClass("visible");
  } else {
    $scrollUp.removeClass("visible");
  }
});
$scrollUp.click(function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 });
});
  