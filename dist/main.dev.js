"use strict";

var _bounds = _interopRequireDefault(require("./node_modules/bounds.js/dist/bounds"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var boundary = (0, _bounds["default"])({
  margins: {
    bottom: 0
  }
});
var image = document.querySelector('.imgg');

var whenImageEnters = function whenImageEnters() {
  image.src = image.dataset.src;
  image.classList.add('reveal');
  boundary.unWatch(image);
  console.log('show');
};

boundary.watch(image, whenImageEnters);

function updateList() {
  var titles = _toConsumableArray(document.querySelectorAll('h1, h2')).sort(function (a, b) {
    return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
  });

  document.querySelectorAll(".selected-circle").forEach(function (c) {
    return c.classList.remove("selected-circle");
  });

  document.querySelectorAll(".nav-dot")[_toConsumableArray(document.querySelectorAll('h1, h2')).indexOf(titles[0])].classList.add("selected-circle");
}

updateList();
window.addEventListener('scroll', function () {
  updateList();
});