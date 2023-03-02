
// 인트로
$(document).on('click', '.intro_img', function(){
  var timer;
  $('.intro_img').fadeOut();
  $('.load_wrap').css('opacity',(1));
  timer = setTimeout(function(){
    location.href = 'main.html';
  },3000);
});

// 메인비쥬얼 타이핑
let $text = document.querySelector(".main_txt h2");

// 글자 모음
let letters = [
  "Park Dong Eun"
];

// 글자 입력 속도
let speed = 100;
let i = 0;

// 타이핑 효과
let typing = async () => {  
  let letter = letters[i].split("");
  
  while (letter.length) {
    await wait(speed);
    $text.innerHTML += letter.shift(); 
  }
  
  // 잠시 대기
  await wait(5000);
  
  // 지우는 효과
  remove();

}
// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}
setTimeout(typing, 500);

let remove = async () => {
  let letter = letters[i].split("");
  
  while (letter.length) {
    await wait(speed);
    
    letter.pop();
    $text.innerHTML = letter.join(""); 
  }
  
  // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
  i = !letters[i+1] ? 0 : i + 1;
  typing();
}

// 딜레이 기능 ( 마이크로초 )
function wait(ms) {
  return new Promise(res => setTimeout(res, ms))
}





let skhtml = $('.html')
let skcss = $('.css')
let skjs = $('.js')
let sk3d = $('.max')
let skpho = $('.photo')
let skillu = $('.ill')
let $win = $(window);

// 스크롤이벤트
$win.scroll(function(){
  let top = $('.sec01').offset().top;
  let $h2 = $('.sec01 h2')
  // console.log(top);
  // 네비게이션,어바웃미제목,pg_up
  if ($win.scrollTop() >= top ) {
    $('nav').css('opacity','1');
    $h2.css('opacity','1');
    $('.pg_up').css('opacity','1')

    $h2.css('animation','sec01 1s')
  } else {
    $('nav').css('opacity','0');
    $h2.css('opacity','0');
    $('.pg_up').css('opacity','0')

    $h2.css('animation','none');
  };

  
  // sec02
  let sec02 = $('.sec02').offset().top;
  let sec02h2 = $('.sec02 h2')
  let pro01 = $('.html .skill_bar')
  let pro02 = $('.css .skill_bar')
  let pro03 = $('.js .skill_bar')
  let pro04 = $('.max .skill_bar')
  let pro05 = $('.photo .skill_bar')
  let pro06 = $('.ill .skill_bar')
    
  // 프로그레스
  $(function(){
    var bar01 = new ProgressBar.Circle('.pro01', {
      strokeWidth: 6,
      easing: 'easeInOut',
      duration: 1400,
      color: '#f6899c',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: null
    });
    var bar02 = new ProgressBar.Circle('.pro02', {
      strokeWidth: 6,
      easing: 'easeInOut',
      duration: 1400,
      color: '#f6899c',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: null
    });
    var bar03 = new ProgressBar.Circle('.pro03', {
      strokeWidth: 6,
      easing: 'easeInOut',
      duration: 1400,
      color: '#f6899c',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: null
    });
    var bar04 = new ProgressBar.Circle('.pro04', {
      strokeWidth: 6,
      easing: 'easeInOut',
      duration: 1400,
      color: '#f6899c',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: null
    });
    var bar05 = new ProgressBar.Circle('.pro05', {
      strokeWidth: 6,
      easing: 'easeInOut',
      duration: 1400,
      color: '#f6899c',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: null
    });
    var bar06 = new ProgressBar.Circle('.pro06', {
      strokeWidth: 6,
      easing: 'easeInOut',
      duration: 1400,
      color: '#f6899c',
      trailColor: '#eee',
      trailWidth: 1,
      svgStyle: null
    });
  
    bar01.animate(0.9);  // Number from 0.0 to 1.0
    bar02.animate(0.9);
    bar03.animate(0.8);
    bar04.animate(0.8);
    bar05.animate(0.9);
    bar06.animate(0.9);
  })

  // sec02 gnb제외 전체
  if ($win.scrollTop() == sec02) {
    // 스킬 프로그레스 on
    pro01.addClass('pro01')
    pro02.addClass('pro02')
    pro03.addClass('pro03')
    pro04.addClass('pro04')
    pro05.addClass('pro05')
    pro06.addClass('pro06')


      // sec02 숫자 카운트
    var count0 = count1 = count2 = count3 = count4 = count5 = 0;

    timeCounter();

    function timeCounter() {

      id0 = setInterval(count0Fn, 11.1111);
      function count0Fn() {
        count0++;
        if (count0 > 90) {
          clearInterval(id0);
        } else {
          $("strong").eq(0).text(count0);
        }

      }
      id1 = setInterval(count1Fn, 11.1111);
      function count1Fn() {
        count1++;
        if (count1 > 90) {
          clearInterval(id1);
        } else {
          $("strong").eq(1).text(count1);
        }
      }
      id2 = setInterval(count2Fn, 12.5);
      function count2Fn() {
        count2++;
        if (count2 > 80) {
          clearInterval(id2);
        } else {
          $("strong").eq(2).text(count2);
        }
      }
      id3 = setInterval(count3Fn, 12.5);
      function count3Fn() {
        count3++;
        if (count3 > 80) {
          clearInterval(id3);
        } else {
          $("strong").eq(3).text(count3);
        }
      }
      id4 = setInterval(count4Fn, 11.1111);
      function count4Fn() {
        count4++;
        if (count4 > 90) {
          clearInterval(id4);
        } else {
          $("strong").eq(4).text(count4);
        }
      }
      id5 = setInterval(count5Fn, 11.1111);
      function count5Fn() {
        count5++;
        if (count5 > 90) {
          clearInterval(id5);
        } else {
          $("strong").eq(5).text(count5);
        }
      }
    }

    // sec02타이핑
    // let $txt01 = document.querySelector(".html strong")
    //      $txt02 = document.querySelector(".css strong")
    //      $txt03 = document.querySelector(".js strong")
    //      $txt04 = document.querySelector(".max b")
    //      $txt05 = document.querySelector(".photo strong")
    //      $txt06 = document.querySelector(".ill strong");

    // // 글자 모음
    // const letters01 = ["HTML5"]
    //           letters02 = ["CSS3"]
    //           letters03 = ["JAVAscript"]
    //           letters04 = ["3DSmax"]
    //           letters05 = ["PHOTOSHOP"]
    //           letters06 = ["ILLUSTRATOR"];

    // // 글자 입력 속도
    // let speed = 100;
    // let i = 0;

    // // html
    // let typing = async () => {  
    //   var letter01 = letters01[i].split("")
    //         letter02 = letters02[i].split("")
    //         letter03 = letters03[i].split("")
    //         letter04 = letters04[i].split("")
    //         letter05 = letters05[i].split("")
    //         letter06 = letters06[i].split("");
      
    //   while (letter01.length) {
    //     await wait(speed);
    //     $txt01.innerHTML += letter01.shift(); 
    //   }
    //   while (letter02.length) {
    //     await wait(speed);
    //     $txt02.innerHTML += letter02.shift(); 
    //   }
    //     while (letter03.length) {
    //     await wait(speed);
    //     $txt03.innerHTML += letter03.shift(); 
    //   }
    //     while (letter04.length) {
    //     await wait(speed);
    //     $txt04.innerHTML += letter04.shift(); 
    //   }
    //     while (letter05.length) {
    //     await wait(speed);
    //     $txt05.innerHTML += letter05.shift(); 
    //   }
    //     while (letter06.length) {
    //     await wait(speed);
    //     $txt06.innerHTML += letter06.shift(); 
    //   }
    // }
    // setTimeout(typing, 1000);


    // 스킬 대제목
    sec02h2.css('animation','sec01 1s')
    sec02h2.css('opacity','1')

    // 스킬img  
    skhtml.css('animation','skill 1s')
    skcss.css('animation','skill 1s')
    skjs.css('animation','skill 1s')
    sk3d.css('animation','skill 1s')
    skpho.css('animation','skill 1s')
    skillu.css('animation','skill 1s')
    $('.skills div').css('opacity','1')
  } else {

        // 스킬 프로그래스 off
    pro01.removeClass('pro01')
    pro02.removeClass('pro02')
    pro03.removeClass('pro03')
    pro04.removeClass('pro04')
    pro05.removeClass('pro05')
    pro06.removeClass('pro06')
    

    // 스킬 대제목
    sec02h2.css('animation','none')
    sec02h2.css('opacity','0')

    // 스킬wrap
    skhtml.css('animation','none')
    skcss.css('animation','none')
    skjs.css('animation','none')
    sk3d.css('animation','none')
    skpho.css('animation','none')
    skillu.css('animation','none')
    $('.skills div').css('opacity','0')
    $('.skills div').css('transition','1s')


  };
  $('.skill_bar svg:not(:eq(0))').remove();
  $('.progressbar-text:not(:eq(0))').remove();
  $('.pro01 svg:eq(0)').remove();
  // console.log($('.pro01 svg:eq(1)'))



  // sec03
  let sec03 = $('.sec03').offset().top;
  let sec03h2 = $('.sec03 h2')

  if ($win.scrollTop() >= sec03 ) {
    // 스킬 대제목
    sec03h2.css('animation','sec01 1s')
    sec03h2.css('opacity','1')
  }else{
    sec03h2.css('animation','none')
    sec03h2.css('opacity','0')


  };

  // sec04
  let sec04 = $('.sec04').offset().top;
  let sec04h2 = $('.sec04 h2')

  if ($win.scrollTop() >= sec04 ) {
    // 스킬 대제목
    sec04h2.css('animation','sec01 1s')
    sec04h2.css('opacity','1')
  }else{
    sec04h2.css('animation','none')
    sec04h2.css('opacity','0')
  };

  // footer
  let footer = $('footer').offset().top;
  let footerH2 = $('footer h2')

  if ($win.scrollTop() >= footer ) {
    // 스킬 대제목
    footerH2.css('animation','sec01 1s')
    footerH2.css('opacity','1')
  }else{
    footerH2.css('animation','none')
    footerH2.css('opacity','0')


  };



  //////////////////////////////////
});

// 섹션 이동시 메뉴 색상 변경
let $menu = $('.outer li')
$(window).scroll(function(){
  // each():제이쿼리 객체에 포함된 각 요소에 개별적인 작업 실행

  // $('선택자').each(function(){
  //   $(this) 또는
  //   $('선택자').eq(index) 또는
  //   $('선택자:eq(index)')
  // })
  
  $('.move').each(function(){
    if($(this).offset().top <= $(window).scrollTop()){
      let index = $(this).index()-1;
      $menu.removeClass('on')
      $menu.eq(index).addClass('on');

    }

  })
});
let $menu01 = $('.inner li')
$(window).scroll(function(){
  // each():제이쿼리 객체에 포함된 각 요소에 개별적인 작업 실행

  // $('선택자').each(function(){
  //   $(this) 또는
  //   $('선택자').eq(index) 또는
  //   $('선택자:eq(index)')
  // })
  
  $('.move').each(function(){
    if($(this).offset().top <= $(window).scrollTop()){
      let index = $(this).index()-1;
      $menu01.removeClass('on')
      $menu01.eq(index).addClass('on');

    }

  })
});

// 메뉴 클릭시 섹션 이동
$(document).on('click','.menu01',function(){
  var section01 = $('.sec01').offset().top;
  $('html, body').animate({scrollTop:section01},500)

})
$('.menu02').click(function(){
  var section02 = $('.sec02').offset().top;
  $('html').animate({scrollTop:section02},500)
})
$('.menu03').click(function(){
  var section03 = $('.sec03').offset().top;
  $('html').animate({scrollTop:section03},500)
})
$('.menu04').click(function(){
  var section04 = $('.sec04').offset().top;
  $('html').animate({scrollTop:section04},500)
})
$('.menu05').click(function(){
  var section04 = $('footer').offset().top;
  $('html').animate({scrollTop:section04},500)
})
$('.pg_up').click(function(){
  var header = $('header').offset().top;
  $('html').animate({scrollTop:header},500)
})
$('.mv_click').click(function(){
  var section01 = $('.sec01').offset().top;
  $('html, body').animate({scrollTop:section01},500)
})

// sec03 클릭
 let btn01 = $('.sec04_btn01')
 let innerBg = $('.visual_inner')
$(function(){
  btn01.on("click", function(){
    innerBg.css({opacity:'1', zIndex:'100'})
    $('header,section,footer').removeClass('mousewheel')
    $('script.mouse').remove()
  })
  $('.sec04_mv_close').click(function(){
    innerBg.css({opacity:'0', zIndex:'-9999'})
    $('header,section,footer').addClass('mousewheel')
  })
})


// sec03 슬라이드
$(function(){
  const progressCircle = document.querySelector(".autoplay-progress svg");
  const progressContent = document.querySelector(".autoplay-progress span");
  var swiper = new Swiper(".swiper",{
    slidesPerView: 'auto',
    spaceBetween: 50,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    breakpoints:{
      600:{
        spaceBetween: 100,
      }
    }
  })
  var swiper = new Swiper(".swiper1",{
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
  })
  var swiper = new Swiper(".swiper2", {
    watchSlidesProgress: true,
    slidesPerView: 1,
    loop: true,
    autoplay: {
      disableOnInteraction: false
    },
    breakpoints:{
      861:{
        slidesPerView: 5,
      },
      601:{
        slidesPerView: 3,
      },
    },
  });
})


//hbg 클릭
// $('.hbg>div').click(function(){
//   $('.inner').stop(true).slideToggle("slow")
// })
var burger = $('.menu-trigger');

burger.each(function(index){
  var $this = $(this);
  
  $this.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active-11');
    timer = setTimeout(function(){
      $('.inner').stop(true).slideToggle('slow');
    },1000)
  })
});
