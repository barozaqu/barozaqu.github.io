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
  
  
  // $(document).ready(function(){
    $(function(){
      // <!-- 작업순서 -->
      // <!-- 1. 초기 상태 -->
      // <!-- 2. 실행 시 구현 -->
    
          // 초기 상태 세팅 : 안보이게
          var $interviewItem = $('.interview__item');
          var $skillsItem = $('.skills__item');
          var $skillsThink = $('.skills__think');
          
          // 0 - > 1 
          $skillsThink.hide();
          $skillsItem.on('click', function(){
            // console.log($(this));
            // console.log($(this).siblings());
            // siblings() 메서드는 형제 요소를 선택한다
            // 태그, 아이디, 클래스명으로 요소 검색 가능
            // () 없으면 전체 선택
            
            
            
            $skillsThink.stop().slideUp();
            $(".skills__progressbar .skills__think").stop().slideToggle();
            console.log($(this).children());

                  // 셀렉터 this 다음에 어떻게!

                  // $skillsIcon.toggleClass('visible');
                  // 우측 아이콘 방향 돌아가는 액션
              });
          var $interviewItem = $('.interview__item');
          var $interviewQuestion = $('.interview__question');
          var $interviewAnswer = $('.interview__answer');
          
          // 0 - > 1 
          $interviewAnswer.hide();
              $interviewQuestion.on('click', function(){
                  // console.log($(this));
                  // console.log($(this).siblings());
                  // siblings() 메서드는 형제 요소를 선택한다
                  // 태그, 아이디, 클래스명으로 요소 검색 가능
                  // () 없으면 전체 선택
      
                  $interviewAnswer.stop().slideUp();


                  $(this).siblings().stop().slideToggle();
                  // $skillsIcon.toggleClass('visible');
                  // 우측 아이콘 방향 돌아가는 액션
              });
          
      
      $('.test').slick({
      })
      // 여기 할 거 집어넣으면 된다
     /*  $('.center').slick({
        // setting-name: setting-value
        // autoplay: true,
        infinite: true,
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
  });

