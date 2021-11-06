"use strict";

var cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", function (e) {
  TweenMax.setAttribute("style", "top: " + (e.pageY - 40) + "px; left: " + (e.pageX - 40) + "px;");
});
document.addEventListener("click", function (e) {
  console.log(e.target);
  cursor.classList.add("click");
  setTimeout(function () {
    cursor.classList.remove("click");
  }, 500);
});
var btn1 = document.querySelector(".btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
btn1.addEventListener("click", function () {
  cursor.classList.remove("style2");
  cursor.classList.remove("style3");
  cursor.classList.add("style1");
});
btn2.addEventListener("click", function (e) {
  cursor.classList.remove("style1");
  cursor.classList.remove("style3");
  cursor.classList.add("style2");
});
btn3.addEventListener("click", function (e) {
  cursor.classList.remove("style1");
  cursor.classList.remove("style2");
  cursor.classList.add("style3");
});