$('#box').text('Hello jQuery!');

console.log('こんにちは！');

$('#parent > div').prepend('子要素');
$('#parent div').text('子孫要素');
var element = '.grand_children';
$(element).text('ヤッホー');
$('div').html('<a href="test.html">置き換えた後</a>');
$('.box').remove();