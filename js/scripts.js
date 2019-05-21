$(document).ready(function() {
  $(".clickable").click(function(){
    $(".axolotl-showing").slideDown();
    $(".axolotl-hidden").fadeToggle();
  });
});
