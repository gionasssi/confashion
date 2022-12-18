// function GotoMap() { window.open('map.html') }
// function GotoAtlas() { window.open('atlas.html') }

$( document ).load(function() {
  $(window).scrollTop(0);
})

var section = $('.intro-text');

section.mouseover(function () {

  var index = $(this).parent().index() + 1;
  var imagepath = "url('assets/img/home" + index + ".gif')"

if (index < 4) {
  $(this).css("color", "white");
  $(this).css("mix-blend-mode", "difference");
  $(this).parent().css("background", "none");
  $("#bg-container").css("background-image", imagepath);
 }

 if (index == 5) {
   if ($(this).is("#hover-left")) {
     $(this).css("background-image", "url('assets/img/home1.gif')");
   } else if ($(this).is("#hover-right")) {
     $(this).css("background-image", "url('assets/img/home2.gif')");
   }

   $(this).css("color", "white");
   $(this).siblings().css("background-image", "none")
   $(this).children().css("mix-blend-mode", "difference");
   }


     console.log(index)
})


section.mouseout(function() {
  $(this).css("color", "black"); $("#header a").css("color", "black"); $("marquee").css("color", "black");
  $(this).css("mix-blend-mode", "initial");
  $("#bg-container").css("background-image", "none");

// if (index == 3) {
//   $(this).parent().css("background-color", "var(--grey)");
// }
})
