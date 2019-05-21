$(document).ready(function() {
  $(".clickable").click(function(){
    $(".axolotl-showing").toggle();
    $(".axolotl-hidden").toggle();
  });
});

$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});
$(document).ready(function() {
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
    $("button#light").toggle();
    $("button#dark").toggle();
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
    $("body").addClass("darkfont");
    $("button#dark").toggle();
    $("button#light").toggle();
    // $("button#light").btn color(white);
  });
});
