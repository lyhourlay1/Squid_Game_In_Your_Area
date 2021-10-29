/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game_view */ \"./src/scripts/game_view.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\n\n\nwindow.addEventListener('DOMContentLoaded', function (event) {\n  //v.start(ctx)\n  console.log(\"webpack is working!\");\n  var main = document.getElementById(\"main\");\n  var exam = new _scripts_example__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n  var canvas = document.getElementById(\"game-canvas\");\n  canvas.width = _scripts_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DIM_X;\n  canvas.height = _scripts_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DIM_Y;\n  var canvasEl = canvas.getContext('2d');\n  var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  var v = new _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, canvasEl);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBRyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxVQUFVQyxLQUFWLEVBQWlCO0FBRXpEO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYjtBQUNBLE1BQU1DLElBQUksR0FBRyxJQUFJWCx3REFBSixDQUFZUSxJQUFaLENBQWI7QUFFQSxNQUFNSSxNQUFNLEdBQUdILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFmO0FBQ0FFLEVBQUFBLE1BQU0sQ0FBQ0MsS0FBUCxHQUFlWCwyREFBZjtBQUNBVSxFQUFBQSxNQUFNLENBQUNHLE1BQVAsR0FBZ0JiLDJEQUFoQjtBQUNBLE1BQU1lLFFBQVEsR0FBR0wsTUFBTSxDQUFDTSxVQUFQLENBQWtCLElBQWxCLENBQWpCO0FBRUEsTUFBTUMsSUFBSSxHQUFHLElBQUlqQixxREFBSixFQUFiO0FBQ0EsTUFBTWtCLENBQUMsR0FBRyxJQUFJbkIsMERBQUosQ0FBYWtCLElBQWIsRUFBa0JGLFFBQWxCLENBQVY7QUFDSCxDQWREIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFeGFtcGxlIGZyb20gXCIuL3NjcmlwdHMvZXhhbXBsZVwiXG5pbXBvcnQgR2FtZVZpZXcgZnJvbSBcIi4vc2NyaXB0cy9nYW1lX3ZpZXdcIlxuaW1wb3J0IEdhbWUgZnJvbSBcIi4vc2NyaXB0cy9nYW1lXCJcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBcbiAgICAvL3Yuc3RhcnQoY3R4KVxuICAgIGNvbnNvbGUubG9nKFwid2VicGFjayBpcyB3b3JraW5nIVwiKVxuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIilcbiAgICBjb25zdCBleGFtID0gbmV3IEV4YW1wbGUobWFpbilcblxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZS1jYW52YXNcIilcbiAgICBjYW52YXMud2lkdGggPSBHYW1lLkRJTV9YO1xuICAgIGNhbnZhcy5oZWlnaHQgPSBHYW1lLkRJTV9ZO1xuICAgIGNvbnN0IGNhbnZhc0VsID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgXG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgY29uc3QgdiA9IG5ldyBHYW1lVmlldyhnYW1lLGNhbnZhc0VsKTtcbn0pIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJHYW1lVmlldyIsIkdhbWUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwibWFpbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJleGFtIiwiY2FudmFzIiwid2lkdGgiLCJESU1fWCIsImhlaWdodCIsIkRJTV9ZIiwiY2FudmFzRWwiLCJnZXRDb250ZXh0IiwiZ2FtZSIsInYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/Game.js":
/*!*****************************!*\
  !*** ./src/scripts/Game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Game = function Game(canva) {\n  _classCallCheck(this, Game);\n\n  this.dim_x = DEFAULTS.DIM_X;\n  this.dim_y = DEFAULTS.DIM_Y;\n};\n\nGame.DIM_X = 1000;\nGame.DIM_Y = 600;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9HYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7OztJQUNNQSxPQUNGLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFDZixPQUFLQyxLQUFMLEdBQWFDLFFBQVEsQ0FBQ0MsS0FBdEI7QUFDQSxPQUFLQyxLQUFMLEdBQWFGLFFBQVEsQ0FBQ0csS0FBdEI7QUFDSDs7QUFHTE4sSUFBSSxDQUFDSSxLQUFMLEdBQWEsSUFBYjtBQUNBSixJQUFJLENBQUNNLEtBQUwsR0FBYSxHQUFiO0FBR0EsK0RBQWVOLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvR2FtZS5qcz85Nzc0Il0sInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoY2FudmEpIHtcbiAgICAgICAgdGhpcy5kaW1feCA9IERFRkFVTFRTLkRJTV9YO1xuICAgICAgICB0aGlzLmRpbV95ID0gREVGQVVMVFMuRElNX1k7XG4gICAgfVxuICAgIFxufVxuR2FtZS5ESU1fWCA9IDEwMDA7XG5HYW1lLkRJTV9ZID0gNjAwXG5cblxuZXhwb3J0IGRlZmF1bHQgR2FtZSJdLCJuYW1lcyI6WyJHYW1lIiwiY2FudmEiLCJkaW1feCIsIkRFRkFVTFRTIiwiRElNX1giLCJkaW1feSIsIkRJTV9ZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/Game.js\n");

/***/ }),

/***/ "./src/scripts/example.js":
/*!********************************!*\
  !*** ./src/scripts/example.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Example = /*#__PURE__*/function () {\n  function Example(ele) {\n    var _this = this;\n\n    _classCallCheck(this, Example);\n\n    this.ele = ele;\n    this.ele.innerHTML = \"<h1> Squid Game!</h1>\";\n    this.ele.addEventListener(\"click\", function () {\n      return _this.handleClick();\n    });\n  }\n\n  _createClass(Example, [{\n    key: \"handleClick\",\n    value: function handleClick() {\n      this.ele.children[0].innerText = \"Red Line Green!\";\n    }\n  }]);\n\n  return Example;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Example);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9leGFtcGxlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7SUFBTUE7QUFDRixtQkFBWUMsR0FBWixFQUFnQjtBQUFBOztBQUFBOztBQUNaLFNBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNBLFNBQUtBLEdBQUwsQ0FBU0MsU0FBVCxHQUFxQix1QkFBckI7QUFDQSxTQUFLRCxHQUFMLENBQVNFLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DO0FBQUEsYUFBSyxLQUFJLENBQUNDLFdBQUwsRUFBTDtBQUFBLEtBQW5DO0FBQ0g7Ozs7V0FDRCx1QkFBYTtBQUNULFdBQUtILEdBQUwsQ0FBU0ksUUFBVCxDQUFrQixDQUFsQixFQUFxQkMsU0FBckIsR0FBaUMsaUJBQWpDO0FBQ0g7Ozs7OztBQUVMLCtEQUFlTixPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vanNfcHJvamVjdC8uL3NyYy9zY3JpcHRzL2V4YW1wbGUuanM/ZmNlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBFeGFtcGxlIHtcbiAgICBjb25zdHJ1Y3RvcihlbGUpe1xuICAgICAgICB0aGlzLmVsZSA9IGVsZTtcbiAgICAgICAgdGhpcy5lbGUuaW5uZXJIVE1MID0gXCI8aDE+IFNxdWlkIEdhbWUhPC9oMT5cIlxuICAgICAgICB0aGlzLmVsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PiB0aGlzLmhhbmRsZUNsaWNrKCkpXG4gICAgfVxuICAgIGhhbmRsZUNsaWNrKCl7XG4gICAgICAgIHRoaXMuZWxlLmNoaWxkcmVuWzBdLmlubmVyVGV4dCA9IFwiUmVkIExpbmUgR3JlZW4hXCJcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBFeGFtcGxlIl0sIm5hbWVzIjpbIkV4YW1wbGUiLCJlbGUiLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlQ2xpY2siLCJjaGlsZHJlbiIsImlubmVyVGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/example.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Game = function Game() {\n  _classCallCheck(this, Game);\n};\n\nGame.DIM_X = 1000;\nGame.DIM_Y = 600;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7OztJQUNNQSxPQUNGLGdCQUFjO0FBQUE7QUFDYjs7QUFHTEEsSUFBSSxDQUFDQyxLQUFMLEdBQWEsSUFBYjtBQUNBRCxJQUFJLENBQUNFLEtBQUwsR0FBYSxHQUFiO0FBR0EsK0RBQWVGLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuICAgIFxufVxuR2FtZS5ESU1fWCA9IDEwMDA7XG5HYW1lLkRJTV9ZID0gNjAwXG5cblxuZXhwb3J0IGRlZmF1bHQgR2FtZSJdLCJuYW1lcyI6WyJHYW1lIiwiRElNX1giLCJESU1fWSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Game = __webpack_require__(/*! ./Game */ \"./src/scripts/Game.js\");\n\nvar GameView = function GameView(game, canvas) {\n  _classCallCheck(this, GameView);\n\n  this.game = game;\n}; // GameView.prototype.start = function (ctx) {\n//     setInterval(() => { this.game.moveObjects(ctx) }, 20)\n// }\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxtQkFBTyxDQUFDLHFDQUFELENBQXBCOztJQUVNQyxXQUNGLGtCQUFZQyxJQUFaLEVBQWtCQyxNQUFsQixFQUEwQjtBQUFBOztBQUN2QixPQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDRixHQUdMO0FBQ0E7QUFDQTs7O0FBRUEsK0RBQWVELFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZ2FtZV92aWV3LmpzPzgwZWUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgR2FtZSA9IHJlcXVpcmUoXCIuL0dhbWVcIilcblxuY2xhc3MgR2FtZVZpZXcge1xuICAgIGNvbnN0cnVjdG9yKGdhbWUsIGNhbnZhcykge1xuICAgICAgIHRoaXMuZ2FtZSA9IGdhbWVcbiAgICB9XG5cbn1cbi8vIEdhbWVWaWV3LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIChjdHgpIHtcbi8vICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7IHRoaXMuZ2FtZS5tb3ZlT2JqZWN0cyhjdHgpIH0sIDIwKVxuLy8gfVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lVmlldyJdLCJuYW1lcyI6WyJHYW1lIiwicmVxdWlyZSIsIkdhbWVWaWV3IiwiZ2FtZSIsImNhbnZhcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL2luZGV4LnNjc3M/OTc0NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;