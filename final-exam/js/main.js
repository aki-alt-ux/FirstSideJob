// クリックでカルーセルを停止
$('.cover-slick').on('click', function() {
  $(this).slick('slickPause');
});


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
  autoplaySpeed: 5000,
  fade: true
});

//タブ
$('#smarttab').smartTab({
  enableUrlHash: false
});

//フェードイン
//左から
$('.js-fadein-left').waypoint({
  handler: function(direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素に
       * fadeInLeftアニメーションを付けることで
       * アニメーションを開始
       */
      $(this.element)
        .addClass('animate__fadeInLeft');
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});

//右から
$('.js-fadein-right').waypoint({
  handler: function(direction) {
    // 要素が画面中央に来るとここが実行される
    if (direction === 'down') {
      /**
       * 下方向のスクロール
       * イベント発生元の要素に
       * fadeInLeftアニメーションを付けることで
       * アニメーションを開始
       */
      $(this.element)
        .addClass('animate__fadeInRight');
    }
  },

  // 要素が画面中央に来たらhandlerを実行
  offset: '50%',
});

// よくあるご質問 アコーディオン
$(document).ready(function() {
  $('.accordion-title').click(function() {
    var accordion_title = $(this);
    var accordion_content = accordion_title.find('.accordion-a');
    var accordion_switch = accordion_title.find('.accordion-switch');

    // アコーディオンのコンテンツを表示/非表示
    accordion_content.slideToggle();

    // スイッチを回転
    accordion_title.toggleClass('open');
  });
});