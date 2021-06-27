/* $('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  }); */

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
 $(function(){
   // 이미지를 클릭했을때
   var $modalImg = $('.modal__img');
   var $portOverlay = $('.portfolio__overlay');
   $modalImg.click(function(){

     //   $("modalImg").css({
     //     "top": (($(window).height()-$("modalImg").outerHeight())/2+$(window).scrollTop())+"px",
     //     "left": (($(window).width()-$("modalImg").outerWidth())/2+$(window).scrollLeft())+"px"
     //     //팝업창을 가운데로 띄우기 위해 현재 화면의 가운데 값과 스크롤 값을 계산하여 팝업창 CSS 설정
     //  }); 

       var src = $(this).children('img').attr('src');
       var $portmodalImg = $('.portfolio__modal img');
       console.log(src);
       // modal에 있는 img 엘리먼트 src에 이미지 주소를 세팅
       $portmodalImg.attr('src', src);
       $portOverlay.show();
   })

   $portOverlay.click(function(e){
       if(e.target == e.currentTarget){
           $(this).fadeOut();
       }
   })
})

$(function(){
 // 이미지를 클릭했을때
 var $kakaoBtn = $('.kakao__btn');
 var $kakaoImg = $('.kakao__img');
 var $kakaoOverlay = $('.kakao__overlay');
 $kakaoBtn.click(function(){
   $kakaoOverlay.show();
 });
 $kakaoImg.click(function(){

   //   $("modalImg").css({
   //     "top": (($(window).height()-$("modalImg").outerHeight())/2+$(window).scrollTop())+"px",
   //     "left": (($(window).width()-$("modalImg").outerWidth())/2+$(window).scrollLeft())+"px"
   //     //팝업창을 가운데로 띄우기 위해 현재 화면의 가운데 값과 스크롤 값을 계산하여 팝업창 CSS 설정
   //  }); 

     var src = $(this).children('img').attr('src');
     var $kakaomodalImg = $('.kakao__modal img');
     console.log(src);
     // modal에 있는 img 엘리먼트 src에 이미지 주소를 세팅
     $kakaomodalImg.attr('src', src);
     $kakaoOverlay.show();
 })

 $kakaoOverlay.click(function(e){
     if(e.target == e.currentTarget){
         $(this).fadeOut();
     }
 })
})

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
 