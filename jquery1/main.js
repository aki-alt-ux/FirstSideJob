var value = $('#test').val();

$('.mylink').on('click', function(e) {
  // hrefのリンク先に飛ばないようにする
  e.preventDefault();

  alert('どろん！');
});

$('.my-button').on('click', function(e) {
  // .my-buttonがクリックされると実行される
  $(e.target)
    .next()
    .css({ 'background-color': '#ff6666' });
});