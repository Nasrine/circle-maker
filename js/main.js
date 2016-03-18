var $input = $('#ball');
var

$('#btn-right').on('click', function (){
  var newLeft = $ball.offset().left + 30;
  $ball.css('left', newLeft);
});

