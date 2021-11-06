"use strict";

// {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.3/TweenMax.min.js"></script> */}
var $bigBall = document.querySelector(".cursor__ball--big");
var $smallBall = document.querySelector(".cursor__ball--small");
var $hoverables = document.querySelectorAll(".hoverable"); // Listeners

document.body.addEventListener("mousemove", onMouseMove);

for (var i = 0; i < $hoverables.length; i++) {
  if (window.CP.shouldStopExecution(0)) break;
  $hoverables[i].addEventListener("mouseenter", onMouseHover);
  $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
} // Move the cursor


window.CP.exitedLoop(0);

function onMouseMove(e) {
  TweenMax.to($bigBall, 0.5, {
    x: e.pageX - 15,
    y: e.pageY - 15
  });
  TweenMax.to($smallBall, 0.1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  });
} // Hover an element


function onMouseHover() {
  TweenMax.to($bigBall, 0.3, {
    scale: 4
  });
}

function onMouseHoverOut() {
  TweenMax.to($bigBall, 0.3, {
    scale: 1
  });
}