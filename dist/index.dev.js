"use strict";

var _smoothScrollbar = _interopRequireDefault(require("./node_modules/smooth-scrollbar/dist/smooth-scrollbar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const image = document.querySelector('.imgg')
// const whenImageEnters = () => {
// 	image.src = image.dataset.src
// 	image.classList.add('reveal');
// 	boundary.unWatch(image)
// 	console.log('show')
// }
// boundary.watch(image, whenImageEnters)
_smoothScrollbar["default"].init(document.querySelector('#my-scrollbar'));