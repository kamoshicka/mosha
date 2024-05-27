$(function () {
  $('#js-slider-8').slick({
    arrows: false, 
    dots: false, 
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1300, 
    slidesToShow: 3,
    variableWidth: true, 
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    swipe: false,
    swipeToSlide: false,
    touchMove: false,
    slidesToScroll: 1
  });
});

$(function () {
  $('.js-slider-1').slick({
    arrows: false, // 前・次のボタンを表示しない
    dots: false, // ドットナビゲーションを表示しない
    autoplay: true,
    autoplaySpeed: 0,
    speed: 8000, // スライドさせるスピード（ミリ秒）
    cssEase: 'linear',
    slidesToShow: 1, // 表示させるスライド数
    variableWidth: true, // スライド幅の自動計算を無効化
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    swipe: false,
    swipeToSlide: false,
    touchMove: false,
  });
});

$(function () {
  $('.js-slider-interview').slick ({
    autoplay: true,
    fade: true,
    cssEase: 'linear',
    speed: 300,
    arrows: false,
    dots: true,
    infinite: true,
  });
});

// modal
$(".openbtn1").click(function () {
  $(this).toggleClass('active');
});
