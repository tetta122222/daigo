var $right_door = $('.right_door');
var $right_doa_mobile = $('.right_doa_mobile');
var $button = $('.button');

$button.on('click', function(){
  $right_door.toggleClass('active');
  $right_doa_mobile.toggleClass('active');
  // setTimeout('location.href = "https://www.youtube.com/";', 1500);
  
});