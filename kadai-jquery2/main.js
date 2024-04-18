// #buttonをクリックしたら
$('#button').on('click', function() {

  // 文字色を赤色に変更
  $('.text').css('color', 'red');

  // クリックイベントが反応しているか確認する用のコード
  console.log('ボタンをクリックしました');

})