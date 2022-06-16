/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var gCanvas = document.querySelector('.my-canvas');
var gCtx = gCanvas.getContext('2d');
gCanvas.width = 1024; //innerWidth - 5

gCanvas.height = 576; //innerHeight - 10

var gravity = 1.5;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.pos = {
      x: 100,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 30;
    this.height = 30;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      gCtx.fillStyle = 'red';
      gCtx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.pos.y += this.velocity.y;
      this.pos.x += this.velocity.x;
      if (this.pos.y + this.height + this.velocity.y <= gCanvas.height) this.velocity.y += gravity; // else this.velocity.y = 0
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image;

    _classCallCheck(this, Platform);

    this.pos = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      gCtx.fillStyle = 'blue'; // gCtx.fillRect(this.pos.x, this.pos.y, this.width, this.height)

      gCtx.drawImage(this.image, this.pos.x, this.pos.y);
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _classCallCheck(this, GenericObject);

    this.pos = {
      x: x,
      y: y
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _createClass(GenericObject, [{
    key: "draw",
    value: function draw() {
      gCtx.fillStyle = 'blue'; // gCtx.fillRect(this.pos.x, this.pos.y, this.width, this.height)

      gCtx.drawImage(this.image, this.pos.x, this.pos.y);
    }
  }]);

  return GenericObject;
}();

function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}

var platfromimage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
var player = new Player();
var platforms = [new Platform({
  x: 0,
  y: 470,
  image: platfromimage
}), new Platform({
  x: platfromimage.width - 3,
  y: 470,
  image: platfromimage
}), new Platform({
  x: platfromimage.width * 2 + 100,
  y: 470,
  image: platfromimage
})];
var genericObjects = [new GenericObject({
  x: 0,
  y: 0,
  image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
}), new GenericObject({
  x: 0,
  y: 0,
  image: createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
})];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;

function init() {
  platfromimage = createImage(_img_platform_png__WEBPACK_IMPORTED_MODULE_0__["default"]);
  player = new Player();
  platforms = [new Platform({
    x: 0,
    y: 470,
    image: platfromimage
  }), new Platform({
    x: platfromimage.width - 3,
    y: 470,
    image: platfromimage
  }), new Platform({
    x: platfromimage.width * 2 + 100,
    y: 470,
    image: platfromimage
  })];
  genericObjects = [new GenericObject({
    x: 0,
    y: 0,
    image: createImage(_img_background_png__WEBPACK_IMPORTED_MODULE_2__["default"])
  }), new GenericObject({
    x: 0,
    y: 0,
    image: createImage(_img_hills_png__WEBPACK_IMPORTED_MODULE_1__["default"])
  })];
  scrollOffset = 0;
}

function animate() {
  requestAnimationFrame(animate);
  gCtx.fillStyle = 'white';
  gCtx.fillRect(0, 0, gCanvas.width, gCanvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.draw();
  });
  platforms.forEach(function (platform) {
    platform.draw();
  });
  player.update();

  if (keys.right.pressed && player.pos.x < 400) {
    player.velocity.x = 5;
  } else if (keys.left.pressed && player.pos.x > 100) {
    player.velocity.x = -5;
  } else {
    player.velocity.x = 0;

    if (keys.right.pressed) {
      scrollOffset += 5;
      platforms.forEach(function (platform) {
        platform.pos.x -= 5;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.pos.x -= 3;
      });
    } else if (keys.left.pressed) {
      scrollOffset -= 5;
      platforms.forEach(function (platform) {
        platform.pos.x += 5;
      });
      genericObjects.forEach(function (genericObject) {
        genericObject.pos.x += 3;
      });
    }
  } //platform collision detaction


  platforms.forEach(function (platform) {
    if (player.pos.y + player.height <= platform.pos.y && player.pos.y + player.height + player.velocity.y >= platform.pos.y && player.pos.x + player.width >= platform.pos.x && player.pos.x + player.width >= platform.pos.x && player.pos.x <= platform.pos.x + platform.width) player.velocity.y = 0;
  }); // win condition

  if (scrollOffset > 2000) console.log('you win'); //lose condition

  if (player.pos.y > gCanvas.height) {
    init();
  }
}

animate();
addEventListener('keydown', function (_ref3) {
  var key = _ref3.key;
  console.log('key down', key);

  switch (key) {
    case 'a':
      console.log('left');
      keys.left.pressed = true;
      break;

    case 's':
      console.log('down');
      break;

    case 'd':
      console.log('right');
      keys.right.pressed = true;
      break;

    case 'w':
      console.log('up');
      player.velocity.y -= 26;
      break;
  }
});
addEventListener('keyup', function (_ref4) {
  var key = _ref4.key;
  console.log('key up', key);

  switch (key) {
    case 'a':
      console.log('left');
      keys.left.pressed = false;
      break;

    case 's':
      console.log('down');
      break;

    case 'd':
      console.log('right');
      keys.right.pressed = false;
      break;

    case 'w':
      console.log('up');
      player.velocity.y = 0;
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map