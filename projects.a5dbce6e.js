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
})({"fdy8k":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "d7845f32a5dbce6e";
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

},{}],"9kpAy":[function(require,module,exports) {
const store = {
    ww: window.innerWidth,
    wh: window.innerHeight,
    isDevice: navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)
};
class Slider {
    constructor(el, opts = {
    }){
        this.bindAll();
        this.el = el;
        this.opts = Object.assign({
            speed: 2,
            threshold: 50,
            ease: 0.075
        }, opts);
        this.ui = {
            items: this.el.querySelectorAll('.js-slide'),
            titles: document.querySelectorAll('.js-title'),
            lines: document.querySelectorAll('.js-progress-line')
        };
        this.state = {
            target: 0,
            current: 0,
            currentRounded: 0,
            y: 0,
            on: {
                x: 0,
                y: 0
            },
            off: 0,
            progress: 0,
            diff: 0,
            max: 0,
            min: 0,
            snap: {
                points: []
            },
            flags: {
                dragging: false
            }
        };
        this.items = [];
        this.events = {
            move: store.isDevice ? 'touchmove' : 'mousemove',
            up: store.isDevice ? 'touchend' : 'mouseup',
            down: store.isDevice ? 'touchstart' : 'mousedown'
        };
        this.init();
    }
    bindAll() {
        [
            'onDown',
            'onMove',
            'onUp'
        ].forEach((fn)=>this[fn] = this[fn].bind(this)
        );
    }
    init() {
        return gsap.utils.pipe(this.setup(), this.on());
    }
    destroy() {
        this.off();
        this.state = null;
        this.items = null;
        this.opts = null;
        this.ui = null;
    }
    on() {
        const { move , up , down  } = this.events;
        window.addEventListener(down, this.onDown);
        window.addEventListener(move, this.onMove);
        window.addEventListener(up, this.onUp);
    }
    off() {
        const { move , up , down  } = this.events;
        window.removeEventListener(down, this.onDown);
        window.removeEventListener(move, this.onMove);
        window.removeEventListener(up, this.onUp);
    }
    setup() {
        const { ww  } = store;
        const state = this.state;
        const { items , titles  } = this.ui;
        const { width: wrapWidth , left: wrapDiff  } = this.el.getBoundingClientRect();
        // Set bounding
        state.max = -(items[items.length - 1].getBoundingClientRect().right - wrapWidth - wrapDiff);
        state.min = 0;
        // Global timeline
        this.tl = gsap.timeline({
            paused: true,
            defaults: {
                duration: 1,
                ease: 'linear'
            }
        }).fromTo('.js-progress-line-2', {
            scaleX: 1
        }, {
            scaleX: 0,
            duration: 0.5,
            ease: 'power3'
        }, 0).fromTo('.js-titles', {
            yPercent: 0
        }, {
            yPercent: -(100 - 100 / titles.length)
        }, 0).fromTo('.js-progress-line', {
            scaleX: 0
        }, {
            scaleX: 1
        }, 0);
        // Cache stuff
        for(let i = 0; i < items.length; i++){
            const el = items[i];
            const { left , right , width  } = el.getBoundingClientRect();
            // Create webgl plane
            const plane = new Plane();
            plane.init(el);
            // Timeline that plays when visible
            const tl = gsap.timeline({
                paused: true
            }).fromTo(plane.mat.uniforms.uScale, {
                value: 0.65
            }, {
                value: 1,
                duration: 1,
                ease: 'linear'
            });
            // Push to cache
            this.items.push({
                el,
                plane,
                left,
                right,
                width,
                min: left < ww ? ww * 0.775 : -(ww * 0.225 - wrapWidth * 0.2),
                max: left > ww ? state.max - ww * 0.775 : state.max + (ww * 0.225 - wrapWidth * 0.2),
                tl,
                out: false
            });
        }
    }
    calc() {
        const state = this.state;
        state.current += (state.target - state.current) * this.opts.ease;
        state.currentRounded = Math.round(state.current * 100) / 100;
        state.diff = (state.target - state.current) * 0.0005;
        state.progress = gsap.utils.wrap(0, 1, state.currentRounded / state.max);
        this.tl && this.tl.progress(state.progress);
    }
    render() {
        this.calc();
        this.transformItems();
    }
    transformItems() {
        const { flags  } = this.state;
        for(let i = 0; i < this.items.length; i++){
            const item = this.items[i];
            const { translate , isVisible , progress  } = this.isVisible(item);
            item.plane.updateX(translate);
            item.plane.mat.uniforms.uVelo.value = this.state.diff;
            if (!item.out && item.tl) item.tl.progress(progress);
            if (isVisible || flags.resize) item.out = false;
            else if (!item.out) item.out = true;
        }
    }
    isVisible({ left , right , width , min , max  }) {
        const { ww  } = store;
        const { currentRounded  } = this.state;
        const translate = gsap.utils.wrap(min, max, currentRounded);
        console.log(translate);
        const threshold = this.opts.threshold;
        const start = left + translate;
        const end = right + translate;
        const isVisible = start < threshold + ww && end > -threshold;
        const progress = gsap.utils.clamp(0, 1, 1 - (translate + left + width) / (ww + width));
        return {
            translate,
            isVisible,
            progress
        };
    }
    clampTarget() {
        const state = this.state;
        state.target = gsap.utils.clamp(state.max, 0, state.target);
    }
    getPos({ changedTouches , clientX , clientY , target  }) {
        const x = changedTouches ? changedTouches[0].clientX : clientX;
        const y = changedTouches ? changedTouches[0].clientY : clientY;
        return {
            x,
            y,
            target
        };
    }
    onDown(e) {
        const { x , y  } = this.getPos(e);
        const { flags , on  } = this.state;
        flags.dragging = true;
        on.x = x;
        on.y = y;
    }
    onUp() {
        const state = this.state;
        state.flags.dragging = false;
        state.off = state.target;
    }
    onMove(e1) {
        const { x , y  } = this.getPos(e1);
        const state = this.state;
        if (!state.flags.dragging) return;
        const { off , on  } = state;
        const moveX = x - on.x;
        const moveY = y - on.y;
        if (Math.abs(moveX) > Math.abs(moveY) && e1.cancelable) {
            e1.preventDefault();
            e1.stopPropagation();
        }
        state.target = off + moveX * this.opts.speed;
    }
}
/***/ /*** GL STUFF ****/ /***/ const backgroundCoverUv = `
  vec2 backgroundCoverUv(vec2 screenSize, vec2 imageSize, vec2 uv) {
    float screenRatio = screenSize.x / screenSize.y;
    float imageRatio = imageSize.x / imageSize.y;
  
    vec2 newSize = screenRatio < imageRatio 
        ? vec2(imageSize.x * screenSize.y / imageSize.y, screenSize.y)
        : vec2(screenSize.x, imageSize.y * screenSize.x / imageSize.x);
  
    vec2 newOffset = (screenRatio < imageRatio 
        ? vec2((newSize.x - screenSize.x) / 2.0, 0.0) 
        : vec2(0.0, (newSize.y - screenSize.y) / 2.0)) / newSize;
  
    return uv * screenSize / newSize + newOffset;
  }
  `;
const vertexShader = `
  precision mediump float;
  
  uniform float uVelo;
  
  varying vec2 vUv;
  
  #define M_PI 3.1415926535897932384626433832795
  
  void main(){
    vec3 pos = position;
    pos.x = pos.x + ((sin(uv.y * M_PI) * uVelo) * 0.125);
  
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
  }
  `;
const fragmentShader = `
  precision mediump float;
  
  ${backgroundCoverUv}
  
  uniform sampler2D uTexture;
  
  uniform vec2 uMeshSize;
  uniform vec2 uImageSize;
  
  uniform float uVelo;
  uniform float uScale;
  
  varying vec2 vUv;
  
  void main() {
    vec2 uv = vUv;
  
    vec2 texCenter = vec2(0.5);
    vec2 texUv = backgroundCoverUv(uMeshSize, uImageSize, uv);
    vec2 texScale = (texUv - texCenter) * uScale + texCenter;
    vec4 texture = texture2D(uTexture, texScale);
  
    texScale.x += 0.15 * uVelo;
    if(uv.x < 1.) texture.g = texture2D(uTexture, texScale).g;
  
    texScale.x += 0.10 * uVelo;
    if(uv.x < 1.) texture.b = texture2D(uTexture, texScale).b;
  
    gl_FragColor = texture;
  }
  `;
const loader = new THREE.TextureLoader();
loader.crossOrigin = 'Access-Control-Allow-Origin';
class Gl {
    constructor(){
        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(store.ww / -2, store.ww / 2, store.wh / 2, store.wh / -2, 1, 10);
        this.camera.lookAt(this.scene.position);
        this.camera.position.z = 1;
        this.renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true
        });
        this.renderer.setPixelRatio(1.5);
        this.renderer.setSize(store.ww, store.wh);
        this.renderer.setClearColor(16777215, 0);
        this.init();
    }
    render() {
        this.renderer.render(this.scene, this.camera);
    }
    init() {
        const domEl = this.renderer.domElement;
        domEl.classList.add('dom-gl');
        document.body.appendChild(domEl);
    }
}
class GlObject extends THREE.Object3D {
    init(el1) {
        this.el = el1;
        this.resize();
    }
    resize() {
        this.rect = this.el.getBoundingClientRect();
        const { left , top , width , height  } = this.rect;
        this.pos = {
            x: left + width / 2 - store.ww / 2,
            y: top + height / 2 - store.wh / 2
        };
        this.position.y = this.pos.y;
        this.position.x = this.pos.x;
        this.updateX();
    }
    updateX(current) {
        current && (this.position.x = current + this.pos.x);
    }
}
const planeGeo = new THREE.PlaneBufferGeometry(1, 1, 32, 32);
const planeMat = new THREE.ShaderMaterial({
    transparent: true,
    fragmentShader,
    vertexShader
});
class Plane extends GlObject {
    init(el2) {
        super.init(el2);
        this.geo = planeGeo;
        this.mat = planeMat.clone();
        this.mat.uniforms = {
            uTime: {
                value: 0
            },
            uTexture: {
                value: 0
            },
            uMeshSize: {
                value: new THREE.Vector2(this.rect.width, this.rect.height)
            },
            uImageSize: {
                value: new THREE.Vector2(0, 0)
            },
            uScale: {
                value: 0.75
            },
            uVelo: {
                value: 0
            }
        };
        this.img = this.el.querySelector('img');
        this.texture = loader.load(this.img.src, (texture)=>{
            texture.minFilter = THREE.LinearFilter;
            texture.generateMipmaps = false;
            this.mat.uniforms.uTexture.value = texture;
            this.mat.uniforms.uImageSize.value = [
                this.img.naturalWidth,
                this.img.naturalHeight
            ];
        });
        this.mesh = new THREE.Mesh(this.geo, this.mat);
        this.mesh.scale.set(this.rect.width, this.rect.height, 1);
        this.add(this.mesh);
        gl.scene.add(this);
    }
}
/***/ /*** INIT STUFF ****/ /***/ const gl = new Gl();
const slider = new Slider(document.querySelector('.js-slider'));
const tick = ()=>{
    gl.render();
    slider.render();
};
gsap.ticker.add(tick); // const store = {
 //     ww: window.innerWidth,
 //     wh: window.innerHeight,
 //     isDevice: navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)
 // };
 // class Slider {
 //     constructor(el, opts = {}) {
 //         this.bindAll();
 //         this.el = el;
 //         this.opts = Object.assign({
 //             speed: 2,
 //             threshold: 50,
 //             ease: 0.075
 //         }, opts);
 //         this.ui = {
 //             items: this.el.querySelectorAll(".js-slide"),
 //             titles: document.querySelectorAll(".js-title"),
 //             lines: document.querySelectorAll(".js-progress-line")
 //         };
 //         this.state = {
 //             target: 0,
 //             current: 0,
 //             currentRounded: 0,
 //             y: 0,
 //             on: {
 //                 x: 0,
 //                 y: 0
 //             },
 //             off: 0,
 //             progress: 0,
 //             diff: 0,
 //             max: 0,
 //             min: 0,
 //             snap: {
 //                 points: []
 //             },
 //             flags: {
 //                 dragging: false
 //             }
 //         };
 //         this.items = [];
 //         this.events = {
 //             move: store.isDevice ? "touchmove" : "mousemove",
 //             up: store.isDevice ? "touchend" : "mouseup",
 //             down: store.isDevice ? "touchstart" : "mousedown"
 //         };
 //         this.init();
 //     }
 //     bindAll() {
 //         ["onDown", "onMove", "onUp"].forEach(fn => this[fn] = this[fn].bind(this));
 //     }
 //     init() {
 //         return gsap.utils.pipe(this.setup(), this.on());
 //     }
 //     destroy() {
 //         this.off();
 //         this.state = null;
 //         this.items = null;
 //         this.opts = null;
 //         this.ui = null;
 //     }
 //     on() {
 //         const {
 //             move,
 //             up,
 //             down
 //         } = this.events;
 //         window.addEventListener(down, this.onDown);
 //         window.addEventListener(move, this.onMove);
 //         window.addEventListener(up, this.onUp);
 //     }
 //     off() {
 //         const {
 //             move,
 //             up,
 //             down
 //         } = this.events;
 //         window.removeEventListener(down, this.onDown);
 //         window.removeEventListener(move, this.onMove);
 //         window.removeEventListener(up, this.onUp);
 //     }
 //     setup() {
 //         const {
 //             ww
 //         } = store;
 //         const state = this.state;
 //         const {
 //             items,
 //             titles
 //         } = this.ui;
 //         const {
 //             width: wrapWidth,
 //             left: wrapDiff
 //         } = this.el.getBoundingClientRect(); // Set bounding
 //         state.max = -(items[items.length - 1].getBoundingClientRect().right - wrapWidth - wrapDiff);
 //         state.min = 0; // Global timeline
 //         this.tl = gsap.timeline({
 //             paused: true,
 //             defaults: {
 //                 duration: 1,
 //                 ease: "linear"
 //             }
 //         }).fromTo(".js-progress-line-2", {
 //             scaleX: 1
 //         }, {
 //             scaleX: 0,
 //             duration: 0.5,
 //             ease: "power3"
 //         }, 0).fromTo(".js-titles", {
 //             yPercent: 0
 //         }, {
 //             yPercent: -(100 - 100 / titles.length)
 //         }, 0).fromTo(".js-progress-line", {
 //             scaleX: 0
 //         }, {
 //             scaleX: 1
 //         }, 0); // Cache stuff
 //         for (let i = 0; i < items.length; i++) {
 //             const el = items[i];
 //             const {
 //                 left,
 //                 right,
 //                 width
 //             } = el.getBoundingClientRect(); // Create webgl plane
 //             const plane = new Plane();
 //             plane.init(el); // Timeline that plays when visible
 //             const tl = gsap.timeline({
 //                 paused: true
 //             }).fromTo(plane.mat.uniforms.uScale, {
 //                 value: 0.65
 //             }, {
 //                 value: 1,
 //                 duration: 1,
 //                 ease: "linear"
 //             }); // Push to cache
 //             this.items.push({
 //                 el,
 //                 plane,
 //                 left,
 //                 right,
 //                 width,
 //                 min: left < ww ? ww * 0.775 : -(ww * 0.225 - wrapWidth * 0.2),
 //                 max: left > ww ? state.max - ww * 0.775 : state.max + (ww * 0.225 - wrapWidth * 0.2),
 //                 tl,
 //                 out: false
 //             });
 //         }
 //     }
 //     calc() {
 //         const state = this.state;
 //         state.current += (state.target - state.current) * this.opts.ease;
 //         state.currentRounded = Math.round(state.current * 100) / 100;
 //         state.diff = (state.target - state.current) * 0.0005;
 //         state.progress = gsap.utils.wrap(0, 1, state.currentRounded / state.max);
 //         this.tl && this.tl.progress(state.progress);
 //     }
 //     render() {
 //         this.calc();
 //         this.transformItems();
 //     }
 //     transformItems() {
 //         const {
 //             flags
 //         } = this.state;
 //         for (let i = 0; i < this.items.length; i++) {
 //             const item = this.items[i];
 //             const {
 //                 translate,
 //                 isVisible,
 //                 progress
 //             } = this.isVisible(item);
 //             item.plane.updateX(translate);
 //             item.plane.mat.uniforms.uVelo.value = this.state.diff;
 //             if (!item.out && item.tl) {
 //                 item.tl.progress(progress);
 //             }
 //             if (isVisible || flags.resize) {
 //                 item.out = false;
 //             } else if (!item.out) {
 //                 item.out = true;
 //             }
 //         }
 //     }
 //     isVisible({
 //         left,
 //         right,
 //         width,
 //         min,
 //         max
 //     }) {
 //         const {
 //             ww
 //         } = store;
 //         const {
 //             currentRounded
 //         } = this.state;
 //         const translate = gsap.utils.wrap(min, max, currentRounded);
 //         const threshold = this.opts.threshold;
 //         const start = left + translate;
 //         const end = right + translate;
 //         const isVisible = start < threshold + ww && end > -threshold;
 //         const progress = gsap.utils.clamp(0, 1, 1 - (translate + left + width) / (ww + width));
 //         return {
 //             translate,
 //             isVisible,
 //             progress
 //         };
 //     }
 //     clampTarget() {
 //         const state = this.state;
 //         state.target = gsap.utils.clamp(state.max, 0, state.target);
 //     }
 //     getPos({
 //         changedTouches,
 //         clientX,
 //         clientY,
 //         target
 //     }) {
 //         const x = changedTouches ? changedTouches[0].clientX : clientX;
 //         const y = changedTouches ? changedTouches[0].clientY : clientY;
 //         return {
 //             x,
 //             y,
 //             target
 //         };
 //     }
 //     onDown(e) {
 //         const {
 //             x,
 //             y
 //         } = this.getPos(e);
 //         const {
 //             flags,
 //             on
 //         } = this.state;
 //         flags.dragging = true;
 //         on.x = x;
 //         on.y = y;
 //     }
 //     onUp() {
 //         const state = this.state;
 //         state.flags.dragging = false;
 //         state.off = state.target;
 //     }
 //     onMove(e) {
 //         const {
 //             x,
 //             y
 //         } = this.getPos(e);
 //         const state = this.state;
 //         if (!state.flags.dragging) return;
 //         const {
 //             off,
 //             on
 //         } = state;
 //         const moveX = x - on.x;
 //         const moveY = y - on.y;
 //         if (Math.abs(moveX) > Math.abs(moveY) && e.cancelable) {
 //             e.preventDefault();
 //             e.stopPropagation();
 //         }
 //         state.target = off + moveX * this.opts.speed;
 //     }
 // }
 // /***/
 // /*** GL STUFF ****/
 // /***/
 // const backgroundCoverUv = `
 // vec2 backgroundCoverUv(vec2 screenSize, vec2 imageSize, vec2 uv) {
 // float screenRatio = screenSize.x / screenSize.y;
 // float imageRatio = imageSize.x / imageSize.y;
 // vec2 newSize = screenRatio < imageRatio 
 // ? vec2(imageSize.x * screenSize.y / imageSize.y, screenSize.y)
 // : vec2(screenSize.x, imageSize.y * screenSize.x / imageSize.x);
 // vec2 newOffset = (screenRatio < imageRatio 
 // ? vec2((newSize.x - screenSize.x) / 2.0, 0.0) 
 // : vec2(0.0, (newSize.y - screenSize.y) / 2.0)) / newSize;
 // return uv * screenSize / newSize + newOffset;
 // }
 // `;
 // const vertexShader = `
 // precision mediump float;
 // uniform float uVelo;
 // varying vec2 vUv;
 // #define M_PI 3.1415926535897932384626433832795
 // void main(){
 // vec3 pos = position;
 // pos.x = pos.x + ((sin(uv.y * M_PI) * uVelo) * 0.125);
 // vUv = uv;
 // gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
 // }
 // `;
 // const fragmentShader = `
 // precision mediump float;
 // ${backgroundCoverUv}
 // uniform sampler2D uTexture;
 // uniform vec2 uMeshSize;
 // uniform vec2 uImageSize;
 // uniform float uVelo;
 // uniform float uScale;
 // varying vec2 vUv;
 // void main() {
 // vec2 uv = vUv;
 // vec2 texCenter = vec2(0.5);
 // vec2 texUv = backgroundCoverUv(uMeshSize, uImageSize, uv);
 // vec2 texScale = (texUv - texCenter) * uScale + texCenter;
 // vec4 texture = texture2D(uTexture, texScale);
 // texScale.x += 0.15 * uVelo;
 // if(uv.x < 1.) texture.g = texture2D(uTexture, texScale).g;
 // texScale.x += 0.10 * uVelo;
 // if(uv.x < 1.) texture.b = texture2D(uTexture, texScale).b;
 // gl_FragColor = texture;
 // }
 // `;
 // const loader = new THREE.TextureLoader();
 // loader.crossOrigin = "anonymous";
 // class Gl {
 //     constructor() {
 //         this.scene = new THREE.Scene();
 //         this.camera = new THREE.OrthographicCamera(store.ww / -2, store.ww / 2, store.wh / 2, store.wh / -2, 1, 10);
 //         this.camera.lookAt(this.scene.position);
 //         this.camera.position.z = 1;
 //         this.renderer = new THREE.WebGLRenderer({
 //             alpha: true,
 //             antialias: true
 //         });
 //         this.renderer.setPixelRatio(1.5);
 //         this.renderer.setSize(store.ww, store.wh);
 //         this.renderer.setClearColor(0xffffff, 0);
 //         this.init();
 //     }
 //     render() {
 //         this.renderer.render(this.scene, this.camera);
 //     }
 //     init() {
 //         const domEl = this.renderer.domElement;
 //         domEl.classList.add("dom-gl");
 //         document.body.appendChild(domEl);
 //     }
 // }
 // class GlObject extends THREE.Object3D {
 //     init(el) {
 //         this.el = el;
 //         this.resize();
 //     }
 //     resize() {
 //         this.rect = this.el.getBoundingClientRect();
 //         const {
 //             left,
 //             top,
 //             width,
 //             height
 //         } = this.rect;
 //         this.pos = {
 //             x: left + width / 2 - store.ww / 2,
 //             y: top + height / 2 - store.wh / 2
 //         };
 //         this.position.y = this.pos.y;
 //         this.position.x = this.pos.x;
 //         this.updateX();
 //     }
 //     updateX(current) {
 //         current && (this.position.x = current + this.pos.x);
 //     }
 // }
 // const planeGeo = new THREE.PlaneBufferGeometry(1, 1, 32, 32);
 // const planeMat = new THREE.ShaderMaterial({
 //     transparent: true,
 //     fragmentShader,
 //     vertexShader
 // });
 // class Plane extends GlObject {
 //     init(el) {
 //         super.init(el);
 //         this.geo = planeGeo;
 //         this.mat = planeMat.clone();
 //         this.mat.uniforms = {
 //             uTime: {
 //                 value: 0
 //             },
 //             uTexture: {
 //                 value: 0
 //             },
 //             uMeshSize: {
 //                 value: new THREE.Vector2(this.rect.width, this.rect.height)
 //             },
 //             uImageSize: {
 //                 value: new THREE.Vector2(0, 0)
 //             },
 //             uScale: {
 //                 value: 0.75
 //             },
 //             uVelo: {
 //                 value: 0
 //             }
 //         };
 //         this.img = this.el.querySelector("img");
 //         this.texture = loader.load(this.img.src, texture => {
 //             texture.minFilter = THREE.LinearFilter;
 //             texture.generateMipmaps = false;
 //             this.mat.uniforms.uTexture.value = texture;
 //             this.mat.uniforms.uImageSize.value = [this.img.naturalWidth, this.img.naturalHeight];
 //         });
 //         this.mesh = new THREE.Mesh(this.geo, this.mat);
 //         this.mesh.scale.set(this.rect.width, this.rect.height, 1);
 //         this.add(this.mesh);
 //         gl.scene.add(this);
 //     }
 // }
 // /***/
 // /*** INIT STUFF ****/
 // /***/
 // const gl = new Gl();
 // const slider = new Slider(document.querySelector(".js-slider"));
 // const tick = () => {
 //     gl.render();
 //     slider.render();
 // };
 // gsap.ticker.add(tick);
 // // jQuery
 // $('.slider__inner').imagesLoaded({
 //     // options here
 // }, function () {
 //     // do something after loaded
 // });
 // // Vanilla JavaScript
 // imagesLoaded(document.querySelector('.slider__inner'), {
 //     // options here
 // }, function () {
 //     // do something after loaded
 // });
 // $('#slid').imagesLoaded()
 //     .always(function (instance) {
 //         console.log('all images loaded');
 //     })
 //     .done(function (instance) {
 //         console.log('all images successfully loaded');
 //     })
 //     .fail(function () {
 //         console.log('all images loaded, at least one is broken');
 //     })
 //     .progress(function (instance, image) {
 //         var result = image.isLoaded ? 'loaded' : 'broken';
 //         console.log('image is ' + result + ' for ' + image.img.src );
 //     });
 // // jQuery
 // $('.slider__inner').imagesLoaded({
 //     background: true
 // }, function () {
 //     // do something after loaded
 // });
 // // Vanilla JavaScript
 // imagesLoaded(document.querySelector('.slider__inner'), {
 //     background: true
 // }, function () {
 //     // do something after loaded
 // });
 // // jQuery
 // $('.slider__inner').imagesLoaded()
 //     .always(function (instance) {
 //         // fired after all images are loaded
 //     })
 //     .done(function (instance) {
 //         // fired after all images are successfully loaded
 //     })
 //     .fail(function () {
 //         // fired after all images are loaded, at least one is broken
 //     })
 //     .progress(function (instance, image) {
 //         var result = image.isLoaded ? 'loaded' : 'broken';
 //         console.log('image is ' + result + ' for ' + image.img.src);
 //     });
 // // Vanilla JavaScript
 // imagesLoaded(document.querySelector('.slider__inner'))
 // on('always', function (instance) {
 //     // fired after all images are loaded
 // })
 // on('done', function (instance) {
 //     // fired after all images are successfully loaded
 // })
 // on('fail', function (instance) {
 //     // fired after all images are loaded, at least one is broken
 // })
 // on('progress', function (instance, image) {
 //     var result = image.isLoaded ? 'loaded' : 'broken';
 //     console.log('image is ' + result + ' for ' + image.img.src);
 // });

},{}]},["fdy8k","9kpAy"], "9kpAy", "parcelRequire3e9f")

//# sourceMappingURL=projects.a5dbce6e.js.map
