// function GotoMap() { window.open('map.html') }
// function GotoAtlas() { window.open('atlas.html') }

$( document ).load(function() {
  $(window).scrollTop(0);
})

var section = $('.intro-text');

section.mouseover(function () {

  $(this).css("color", "white"); $("#header a").css("color", "white"); $("marquee").css("color", "white");
  $("#header").css("mix-blend-mode", "difference");
  $("marquee").css("mix-blend-mode", "difference");

  var index = $(this).parent().index() + 1;
  var imagepath = "url('assets/img/home" + index + ".gif')"

if (index < 5) {
  $(this).css("mix-blend-mode", "difference");
  $("#bg-container").css("background-image", imagepath);
 }

  if (index == 4) {
   $(this).css("opacity", "0");
   $(".intro-hidden-text").css("opacity", "1");
 }

 if (index == 5) {
   if ($(this).is("#hover-left")) {
     $(this).css("background-image", "url('assets/img/home1.gif')");
   } else if ($(this).is("#hover-right")) {
     $(this).css("background-image", "url('assets/img/home2.gif')");
   }

   $(this).siblings().css("background-image", "none")
   $(this).children().css("mix-blend-mode", "difference");
   }
})


section.mouseout(function() {
  $(this).css("color", "black"); $("#header a").css("color", "black"); $("marquee").css("color", "black");
  $(this).css("mix-blend-mode", "initial");
  $("#header").css("mix-blend-mode", "initial");
  $("marquee").css("mix-blend-mode", "initial");
  $("#bg-container").css("background-image", "none");

  $(this).css("opacity", "1");
  $(".intro-hidden-text").css("opacity", "0");
})
