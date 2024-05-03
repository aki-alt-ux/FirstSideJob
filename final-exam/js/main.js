var hamburger = $('.hamburger-menu');

// ハンバーガーボタン
//-------------------------------------------//
// OPEN/CLOSEボタンをクリックしたら
$('.hamburger-button').on('click', function () {
  // console.log('click');

  // .hamburgerの表示・非表示を繰り返す
  hamburger.toggleClass('hamburger-menu-active');

});

// 画面幅のサイズが変わったら
$(window).on('resize', function () {
  // console.log('resize');

  // ハンバーガーメニューを閉じる
  hamburger.removeClass('hamburger-menu-active');
});




// カルーセル
$('.cover-slick').slick({
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true
});

// クリックでカルーセルを停止
$('.cover-slick').on('click', function() {
  $(this).slick('slickPause');
});