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