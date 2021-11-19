// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8PNK5":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "c9b2bbcd379dd93c";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"hD4hw":[function(require,module,exports) {
// import gsap from "gsap";
// // or get other plugins:
// import ScrollTrigger from "gsap/ScrollTrigger";
// import CSSRulePlugin from "gsap/CSSRulePlugin";
// // import { gsap, ScrollTrigger, Draggable, MotionPathPlugin } from "gsap/all";
// gsap.registerPlugin(ScrollTrigger, CSSRulePlugin);
gsap.from(".hero__image", {
    scale: 8,
    transformOrigin: "center center",
    ease: "expo",
    scrollTrigger: {
        trigger: ".hero__image",
        start: "center center",
        end: "center top",
        pin: true,
        scrub: 0.5
    }
});
gsap.to(".ring--right", {
    scale: 5,
    ease: "power4",
    transformOrigin: "center",
    scrollTrigger: {
        trigger: ".ring--right",
        start: "top center",
        end: "bottom+=300 200px",
        pin: true,
        scrub: 0.25
    }
});
gsap.to(".ring--left", {
    scale: 3,
    ease: "power4",
    transformOrigin: "center center",
    scrollTrigger: {
        trigger: ".ring--left",
        start: "center+=100% center",
        end: "bottom+=300 top",
        pin: true,
        scrub: 0.25
    }
});
gsap.to(".hero__title--1", {
    xPercent: -50,
    scrollTrigger: {
        trigger: ".hero__title--1",
        start: "center center",
        pin: true,
        scrub: 0.5
    }
});
gsap.to(".hero__title--2", {
    xPercent: 50,
    scrollTrigger: {
        trigger: ".hero__title--2",
        start: "center center",
        pin: true,
        scrub: 0.5
    }
});
gsap.to(".hero__copy", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".hero__copy",
        start: "top 60%",
        end: "+=60 60%",
        pin: false,
        scrub: 0.5
    }
});
gsap.to(".cross-1", {
    rotate: "+=360",
    scrollTrigger: {
        trigger: ".cross-1",
        start: "bottom bottom",
        end: "bottom top",
        pin: false,
        scrub: 0.5
    }
});
gsap.to(".cross-2", {
    rotate: 1440,
    scrollTrigger: {
        trigger: ".cross-2",
        start: "bottom bottom",
        end: "bottom top",
        pin: false,
        scrub: 0.5
    }
});
gsap.to(".box", {
    y: 500,
    x: "-10vw",
    ease: "power.in",
    scrollTrigger: {
        trigger: ".box",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    }
});
gsap.from(".line", {
    scaleX: 0,
    transformOrigin: "left center",
    ease: "power.in",
    scrollTrigger: {
        trigger: ".line",
        start: "center 75%",
        end: "bottom 10%",
        scrub: 0.5,
        pin: false
    }
});
gsap.to(".big", {
    x: "-130vw",
    transformOrigin: "center center",
    scrollTrigger: {
        trigger: ".big",
        start: "top 62%",
        end: "bottom top-=200",
        pin: true,
        scrub: 1.75
    }
});
gsap.to(".cards", {
    scale: 1.75,
    scrollTrigger: {
        trigger: ".cards",
        start: "center center",
        end: "bottom top",
        pin: true,
        scrub: true
    }
});
gsap.to(".card-1", {
    rotate: -20,
    scale: 0.75,
    x: -200,
    transformOrigin: "bottom center",
    scrollTrigger: {
        trigger: ".cards",
        start: "center center",
        end: "bottom top",
        pin: true,
        scrub: true
    }
});
gsap.to(".card-3", {
    rotate: 20,
    scale: 0.75,
    x: 200,
    transformOrigin: "bottom center",
    scrollTrigger: {
        trigger: ".cards",
        start: "center center",
        end: "bottom top",
        pin: true,
        scrub: true
    }
});
// gsap.from(".hero__image", {
//   opacity: 0,
//   duration: 1,
//   y: 40,
//   delay: 0.5,
//   ease: "power2.inOut"
// });
gsap.from(".hero__copy span", {
    opacity: 0,
    duration: 1,
    y: 40,
    delay: 0.5,
    ease: "power2.inOut"
});
// let titleOne = new SplitText(".hero__title--1", {
//   type: "words"
// });
// let oneWords = titleOne.words;
// gsap.from(oneWords, {
//   opacity: 0,
//   duration: 1.5,
//   y: 80,
//   ease: "power4",
//   stagger: {
//     each: 0.15
//   }
// });
// let titleTwo = new SplitText(".hero__title--2", {
//   type: "words"
// });
// let twoWords = titleTwo.words;
// gsap.from(twoWords, {
//   opacity: 0,
//   duration: 1.5,
//   y: 80,
//   delay: 0.25,
//   ease: "power4",
//   stagger: {
//     each: 0.15
//   }
// });
gsap.to(".cross-3", {
    rotate: 720,
    y: 150,
    scrollTrigger: {
        scrub: 0.5,
        start: "bottom bottom",
        end: "bottom -300px",
        trigger: ".cross-3",
        pin: false
    }
});
let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".footer__link",
        start: "top 75%"
    }
});
tl.from(".footer__link", {
    opacity: 0,
    y: 90,
    duration: 2,
    ease: "expo.out"
}).from(".footer__copy", {
    opacity: 0,
    y: 90,
    duration: 2,
    ease: "expo.out"
}, "-=1.75").from(".footer__button", {
    opacity: 0,
    y: 90,
    duration: 2,
    ease: "power3.out"
}, "-=1.75");
ScrollTrigger.addEventListener("scrollEnd", ()=>{
    document.querySelector('.cross-1').classList.add('scroll-end');
});
ScrollTrigger.addEventListener("scrollStart", ()=>{
    document.querySelector('.cross-1').classList.remove('scroll-end');
});
gsap.fromTo(".hero__image", {
    opacity: 0,
    objectPosition: "center 0%",
    y: 100
}, {
    opacity: 1,
    duration: 2,
    objectPosition: "center 15%",
    y: 0,
    ease: "expo.inOut"
});
// letstalk
gsap.set(".magic", {
    rotate: -4
});
let textWidth = document.querySelector(".text").offsetWidth;
window.addEventListener("resize", ()=>{
    textWidth = document.querySelector(".text").offsetWidth;
    startMarquee();
});
startMarquee();
function startMarquee() {
    gsap.to(".text, .text-clone", {
        repeat: -1,
        x: -(textWidth / 2),
        duration: 8,
        ease: "none"
    });
}
// letstals end
gsap.set(".cursor", {
    force3D: true
});
document.addEventListener("mousemove", (e)=>{
    let x = e.clientX;
    let y = e.clientY;
    gsap.to(".cursor", {
        x: x - 16,
        y: y - 16,
        ease: "power3"
    });
});
document.body.addEventListener("mouseleave", ()=>{
    gsap.to(".cursor", {
        scale: 0,
        duration: 0.1,
        ease: "none"
    });
});
document.body.addEventListener("mouseenter", ()=>{
    gsap.to(".cursor", {
        scale: 1,
        duration: 0.1,
        ease: "none"
    });
});
let hoverCursors = document.querySelectorAll('[data-cursor="hover"]');
hoverCursors.forEach(function(cursor) {
    cursor.addEventListener("mouseenter", ()=>{
        gsap.to(".cursor", {
            scale: 2.5
        });
    });
    cursor.addEventListener("mouseleave", ()=>{
        gsap.to(".cursor", {
            scale: 1
        });
    });
});

},{}]},["8PNK5","hD4hw"], "hD4hw", "parcelRequire3e9f")

//# sourceMappingURL=projects.379dd93c.js.map
