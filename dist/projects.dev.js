"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

console.clear();
var mousePos = {
  x: 0,
  y: 0
};
var mousePosCache = mousePos;
var direction = {
  x: mousePosCache.x - mousePos.x,
  y: mousePosCache.y - mousePos.y
};
var cursors = [];

var App = function App() {
  _classCallCheck(this, App);

  preloader(".menu__item").then(function () {
    Splitting();
    var menuEl = document.querySelector(".menu");
    new LocomotiveScroll({
      el: menuEl,
      smooth: true
    });
    new Menu(menuEl);
    cursors.push(new Cursor(document.querySelector(".cursor__small"), 0), new Cursor(document.querySelector(".cursor__large"), 0.4));
    window.addEventListener("mousemove", function (e) {
      mousePos = getMousePos(e);
      cursors.forEach(function (cursor) {
        cursor.update();
      });
    });
  });
};

var Menu =
/*#__PURE__*/
function () {
  function Menu(el) {
    var _this = this;

    _classCallCheck(this, Menu);

    this.el = el;
    this.menuItems = this.el.querySelectorAll(".menu__item");
    this.animatableProperties = {
      tx: {
        previous: 0,
        current: 0,
        amt: 0.1
      },
      ty: {
        previous: 0,
        current: 0,
        amt: 0.1
      },
      rotation: {
        previous: 0,
        current: 0,
        amt: 0.08
      },
      skewx: {
        previous: 0,
        current: 0,
        amt: 0.08
      },
      brightness: {
        previous: 1,
        current: 1,
        amt: 0.08
      },
      saturation: {
        previous: 0,
        current: 0,
        amt: 0.1
      }
    };
    this.menuItemInstances = [];

    _toConsumableArray(this.menuItems).forEach(function (item, pos) {
      return _this.menuItemInstances.push(new MenuItem(item, pos, _this.animatableProperties));
    });

    gsap.to(this.el, 0.1, {
      opacity: 1
    });
    this.showMenuItems();
  }

  _createClass(Menu, [{
    key: "showMenuItems",
    value: function showMenuItems() {
      gsap.fromTo(this.menuItemInstances.map(function (item) {
        return item.DOM.innerText;
      }), {
        rotation: function rotation(i) {
          return i % 2 == 0 ? 15 : -15;
        }
      }, {
        duration: 1.2,
        ease: "Expo.easeOut",
        transformOrigin: function transformOrigin(i) {
          return i % 2 == 0 ? "left bottom" : "right bottom";
        },
        y: 0,
        rotation: 0,
        delay: function delay(pos) {
          return 0.15 + pos * 0.06;
        }
      });
    }
  }]);

  return Menu;
}();

var MenuItem =
/*#__PURE__*/
function () {
  function MenuItem(el, menuItemIndex, animatableProps) {
    _classCallCheck(this, MenuItem);

    this.DOM = {
      el: el
    };
    this.DOM.innerText = this.DOM.el.querySelector(".menu__item-innertext");
    this.menuItemIndex = menuItemIndex;
    this.animatableProps = animatableProps;
    this.imageURL = this.DOM.el.getAttribute("data-img");
    this.layout();
    this.initEvents();
  }

  _createClass(MenuItem, [{
    key: "layout",
    value: function layout() {
      this.DOM.card = document.createElement("div");
      this.DOM.card.className = "image-card";
      this.DOM.cardInner = document.createElement("div");
      this.DOM.cardInner.className = "image-card__inner";
      this.DOM.cardImage = document.createElement("div");
      this.DOM.cardImage.className = "image-card__img";
      this.DOM.cardImage.style.backgroundImage = "url(".concat(this.imageURL, ")");
      this.DOM.cardInner.appendChild(this.DOM.cardImage);
      this.DOM.card.appendChild(this.DOM.cardInner);
      this.DOM.el.appendChild(this.DOM.card);
    }
  }, {
    key: "initEvents",
    value: function initEvents() {
      var _this2 = this;

      var onMouseEnter = function onMouseEnter() {
        _this2.showImage();

        _this2.firstRAFCycle = true;

        _this2.renderLoop();
      };

      var onMouseLeave = function onMouseLeave() {
        _this2.stopRender();

        _this2.hideImage();
      };

      this.DOM.el.addEventListener("mouseenter", onMouseEnter);
      this.DOM.el.addEventListener("mouseleave", onMouseLeave);
    }
  }, {
    key: "calcBounds",
    value: function calcBounds() {
      this.bounds = {
        el: this.DOM.el.getBoundingClientRect(),
        card: this.DOM.card.getBoundingClientRect(),
        cardImage: this.DOM.cardImage.getBoundingClientRect()
      };
    }
  }, {
    key: "showImage",
    value: function showImage() {
      var _this3 = this;

      gsap.killTweensOf(this.DOM.cardInner);
      gsap.killTweensOf(this.DOM.cardImage);
      gsap.timeline({
        onStart: function onStart() {
          _this3.DOM.el.style.zIndex = _this3.DOM.el.children.length;
        }
      }).to(this.DOM.cardInner, {
        duration: 0.8,
        ease: "elastic.out(1, 0.75)",
        transformOrigin: "50% ".concat(direction.y < 0 ? "-20%" : "120%"),
        startAt: {
          rotation: "".concat(direction.x < 0 ? "+" : "-", "25deg")
        },
        rotation: 0
      }).to(this.DOM.cardImage, {
        duration: 0.2,
        ease: "Sine.easeOut",
        startAt: {
          opacity: 0,
          scale: 0.6
        },
        opacity: 1,
        scale: 1
      }, 0);
    }
  }, {
    key: "hideImage",
    value: function hideImage() {
      var _this4 = this;

      gsap.killTweensOf(this.DOM.cardInner);
      gsap.killTweensOf(this.DOM.cardImage);
      gsap.timeline({
        onStart: function onStart() {
          _this4.DOM.el.style.zIndex = 1;
        }
      }).to(this.DOM.cardInner, {
        duration: 0.8,
        ease: "elastic.out(1, 0.75)",
        transformOrigin: "50% ".concat(direction.y < 0 ? "-20%" : "120%"),
        rotation: "".concat(direction.x < 0 ? "+" : "-", "25deg")
      }).to(this.DOM.cardImage, {
        duration: 0.2,
        ease: "Sine.easeOut",
        opacity: 0,
        scale: 0.6
      }, 0);
    }
  }, {
    key: "renderLoop",
    value: function renderLoop() {
      var _this5 = this;

      if (!this.requestId) {
        this.requestId = requestAnimationFrame(function () {
          return _this5.render();
        });
      }
    }
  }, {
    key: "stopRender",
    value: function stopRender() {
      if (this.requestId) {
        window.cancelAnimationFrame(this.requestId);
        this.requestId = undefined;
      }
    }
  }, {
    key: "render",
    value: function render() {
      this.requestId = undefined;

      if (this.firstRAFCycle) {
        this.calcBounds();
      }

      this.updateAnimatableProps();
      direction = {
        x: mousePosCache.x - mousePos.x,
        y: mousePosCache.y - mousePos.y
      };
      mousePosCache = mousePos;
      gsap.set(this.DOM.card, {
        x: this.animatableProps.tx.previous,
        y: this.animatableProps.ty.previous,
        rotation: this.animatableProps.rotation.previous,
        skewX: this.animatableProps.skewx.previous,
        filter: "brightness(".concat(this.animatableProps.brightness.previous, ") saturate(").concat(this.animatableProps.saturation.previous, ")")
      });
      this.firstRAFCycle = false;
      this.renderLoop();
    }
  }, {
    key: "updateAnimatableProps",
    value: function updateAnimatableProps() {
      var mouseDistanceX = clamp(Math.abs(mousePosCache.x - mousePos.x), 0, 100);
      this.animatableProps.tx.current = Math.abs(mousePos.x - this.bounds.el.left) - this.bounds.card.width / 2;
      this.animatableProps.ty.current = Math.abs(mousePos.y - this.bounds.el.top) - this.bounds.card.height / 2;
      this.animatableProps.rotation.current = this.firstRAFCycle ? 0 : map(mouseDistanceX, 0, 100, 0, direction.x < 0 ? 30 : -30);
      this.animatableProps.skewx.current = this.firstRAFCycle ? 0 : map(mouseDistanceX, 0, 100, 1, direction.x < 0 ? -60 : 60);
      this.animatableProps.brightness.current = this.firstRAFCycle ? 1 : map(mouseDistanceX, 0, 100, 1, 10);
      this.animatableProps.saturation.current = this.firstRAFCycle ? 1 : map(mouseDistanceX, 0, 100, 1, 8);

      for (var key in this.animatableProps) {
        this.animatableProps[key].previous = this.firstRAFCycle ? this.animatableProps[key].current : lerp(this.animatableProps[key].previous, this.animatableProps[key].current, this.animatableProps[key].amt);
      }
    }
  }]);

  return MenuItem;
}();

var Cursor =
/*#__PURE__*/
function () {
  function Cursor(el, duration) {
    _classCallCheck(this, Cursor);

    this.el = el;
    this.duration = duration;
    this.el.style.opacity = 0;
    this.bounds = this.el.getBoundingClientRect();
  }

  _createClass(Cursor, [{
    key: "update",
    value: function update() {
      gsap.to(this.el, {
        duration: this.duration,
        opacity: 1,
        x: mousePos.x - this.bounds.width / 2,
        y: mousePos.y - this.bounds.height / 2
      });
    }
  }]);

  return Cursor;
}(); // UTILITY FUNCTIONS


function preloader(selector) {
  return new Promise(function (resolve) {
    var imgwrap = document.createElement("div");
    imgwrap.style.visibility = "hidden";
    document.body.appendChild(imgwrap);

    _toConsumableArray(document.querySelectorAll(selector)).forEach(function (el) {
      var imgEl = document.createElement("img");
      imgEl.style.width = 0;
      imgEl.src = el.dataset.img;
      imgEl.className = "preload";
      imgwrap.appendChild(imgEl);
    });

    imagesLoaded(document.querySelectorAll(".preload"), function () {
      gsap.to(".loading__wrapper", {
        duration: 0.8,
        opacity: 0,
        pointerEvents: "none",
        onComplete: function onComplete() {
          imgwrap.parentNode.removeChild(imgwrap);
          document.body.classList.remove("loading");
          resolve();
        }
      });
    });
  });
} // Map number x from range [a, b] to [c, d]


function map(x, a, b, c, d) {
  return (x - a) * (d - c) / (b - a) + c;
} // Linear interpolation


function lerp(a, b, n) {
  return (1 - n) * a + n * b;
}

function clamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
} // Gets the mouse position


function getMousePos(e) {
  var posx = 0;
  var posy = 0;
  if (!e) e = window.event;

  if (e.pageX || e.pageY) {
    posx = e.pageX;
    posy = e.pageY;
  } else if (e.clientX || e.clientY) {
    posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
    posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
  }

  return {
    x: posx,
    y: posy
  };
} // INITIALIZE THE APP


var app = new App();