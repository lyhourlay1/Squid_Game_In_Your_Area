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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_example__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/example */ \"./src/scripts/example.js\");\n/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game_view */ \"./src/scripts/game_view.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n\n\n\nwindow.addEventListener('DOMContentLoaded', function (event) {\n  //v.start(ctx)\n  console.log(\"webpack is working!\");\n  var main = document.getElementById(\"main\");\n  var exam = new _scripts_example__WEBPACK_IMPORTED_MODULE_0__[\"default\"](main);\n  var canvas = document.getElementById(\"game-canvas\");\n  canvas.width = _scripts_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DIM_X;\n  canvas.height = _scripts_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"].DIM_Y;\n  var canvasEl = canvas.getContext('2d');\n  var game = new _scripts_game__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n  var v = new _scripts_game_view__WEBPACK_IMPORTED_MODULE_1__[\"default\"](game, canvasEl);\n  v.start();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBRyxNQUFNLENBQUNDLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxVQUFVQyxLQUFWLEVBQWlCO0FBRXpEO0FBQ0FDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaO0FBQ0EsTUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FBYjtBQUNBLE1BQU1DLElBQUksR0FBRyxJQUFJWCx3REFBSixDQUFZUSxJQUFaLENBQWI7QUFFQSxNQUFNSSxNQUFNLEdBQUdILFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFmO0FBQ0FFLEVBQUFBLE1BQU0sQ0FBQ0MsS0FBUCxHQUFlWCwyREFBZjtBQUNBVSxFQUFBQSxNQUFNLENBQUNHLE1BQVAsR0FBZ0JiLDJEQUFoQjtBQUNBLE1BQU1lLFFBQVEsR0FBR0wsTUFBTSxDQUFDTSxVQUFQLENBQWtCLElBQWxCLENBQWpCO0FBRUEsTUFBTUMsSUFBSSxHQUFHLElBQUlqQixxREFBSixFQUFiO0FBQ0EsTUFBTWtCLENBQUMsR0FBRyxJQUFJbkIsMERBQUosQ0FBYWtCLElBQWIsRUFBa0JGLFFBQWxCLENBQVY7QUFDQUcsRUFBQUEsQ0FBQyxDQUFDQyxLQUFGO0FBQ0gsQ0FmRCIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXhhbXBsZSBmcm9tIFwiLi9zY3JpcHRzL2V4YW1wbGVcIlxuaW1wb3J0IEdhbWVWaWV3IGZyb20gXCIuL3NjcmlwdHMvZ2FtZV92aWV3XCJcbmltcG9ydCBHYW1lIGZyb20gXCIuL3NjcmlwdHMvZ2FtZVwiXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgXG4gICAgLy92LnN0YXJ0KGN0eClcbiAgICBjb25zb2xlLmxvZyhcIndlYnBhY2sgaXMgd29ya2luZyFcIilcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpXG4gICAgY29uc3QgZXhhbSA9IG5ldyBFeGFtcGxlKG1haW4pXG5cbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWUtY2FudmFzXCIpXG4gICAgY2FudmFzLndpZHRoID0gR2FtZS5ESU1fWDtcbiAgICBjYW52YXMuaGVpZ2h0ID0gR2FtZS5ESU1fWTtcbiAgICBjb25zdCBjYW52YXNFbCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIFxuICAgIGNvbnN0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICAgIGNvbnN0IHYgPSBuZXcgR2FtZVZpZXcoZ2FtZSxjYW52YXNFbCk7XG4gICAgdi5zdGFydCgpXG59KSJdLCJuYW1lcyI6WyJFeGFtcGxlIiwiR2FtZVZpZXciLCJHYW1lIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZXhhbSIsImNhbnZhcyIsIndpZHRoIiwiRElNX1giLCJoZWlnaHQiLCJESU1fWSIsImNhbnZhc0VsIiwiZ2V0Q29udGV4dCIsImdhbWUiLCJ2Iiwic3RhcnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/Game.js":
/*!*****************************!*\
  !*** ./src/scripts/Game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Game = function Game() {\n  _classCallCheck(this, Game);\n};\n\nGame.prototype.isOver = function () {\n  if (this.win || this.lose) console.log('Game Over');\n};\n\nGame.prototype.win = function (params) {};\n\nGame.prototype.lose = function (params) {};\n\nGame.DIM_X = 1000;\nGame.DIM_Y = 600;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9HYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7OztJQUNNQSxPQUNGLGdCQUFjO0FBQUE7QUFFYjs7QUFHTEEsSUFBSSxDQUFDQyxTQUFMLENBQWVDLE1BQWYsR0FBd0IsWUFBWTtBQUNoQyxNQUFHLEtBQUtDLEdBQUwsSUFBWSxLQUFLQyxJQUFwQixFQUEwQkMsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUU3QixDQUhEOztBQUtBTixJQUFJLENBQUNDLFNBQUwsQ0FBZUUsR0FBZixHQUFxQixVQUFVSSxNQUFWLEVBQWtCLENBRXRDLENBRkQ7O0FBR0FQLElBQUksQ0FBQ0MsU0FBTCxDQUFlRyxJQUFmLEdBQXNCLFVBQVVHLE1BQVYsRUFBa0IsQ0FFdkMsQ0FGRDs7QUFPQVAsSUFBSSxDQUFDUSxLQUFMLEdBQWEsSUFBYjtBQUNBUixJQUFJLENBQUNTLEtBQUwsR0FBYSxHQUFiO0FBR0EsK0RBQWVULElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvR2FtZS5qcz85Nzc0Il0sInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gIFxuICAgIH1cbn1cblxuR2FtZS5wcm90b3R5cGUuaXNPdmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKHRoaXMud2luIHx8IHRoaXMubG9zZSkgY29uc29sZS5sb2coJ0dhbWUgT3ZlcicpXG4gICAgXG59XG5cbkdhbWUucHJvdG90eXBlLndpbiA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBcbn1cbkdhbWUucHJvdG90eXBlLmxvc2UgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgXG59XG5cblxuXG5cbkdhbWUuRElNX1ggPSAxMDAwO1xuR2FtZS5ESU1fWSA9IDYwMDtcblxuXG5leHBvcnQgZGVmYXVsdCBHYW1lIl0sIm5hbWVzIjpbIkdhbWUiLCJwcm90b3R5cGUiLCJpc092ZXIiLCJ3aW4iLCJsb3NlIiwiY29uc29sZSIsImxvZyIsInBhcmFtcyIsIkRJTV9YIiwiRElNX1kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/Game.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Game = function Game() {\n  _classCallCheck(this, Game);\n};\n\nGame.prototype.isOver = function () {\n  if (this.win || this.lose) console.log('Game Over');\n};\n\nGame.prototype.win = function (params) {};\n\nGame.prototype.lose = function (params) {};\n\nGame.DIM_X = 1000;\nGame.DIM_Y = 600;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzLmpzIiwibWFwcGluZ3MiOiI7OztJQUNNQSxPQUNGLGdCQUFjO0FBQUE7QUFFYjs7QUFHTEEsSUFBSSxDQUFDQyxTQUFMLENBQWVDLE1BQWYsR0FBd0IsWUFBWTtBQUNoQyxNQUFHLEtBQUtDLEdBQUwsSUFBWSxLQUFLQyxJQUFwQixFQUEwQkMsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWjtBQUU3QixDQUhEOztBQUtBTixJQUFJLENBQUNDLFNBQUwsQ0FBZUUsR0FBZixHQUFxQixVQUFVSSxNQUFWLEVBQWtCLENBRXRDLENBRkQ7O0FBR0FQLElBQUksQ0FBQ0MsU0FBTCxDQUFlRyxJQUFmLEdBQXNCLFVBQVVHLE1BQVYsRUFBa0IsQ0FFdkMsQ0FGRDs7QUFPQVAsSUFBSSxDQUFDUSxLQUFMLEdBQWEsSUFBYjtBQUNBUixJQUFJLENBQUNTLEtBQUwsR0FBYSxHQUFiO0FBR0EsK0RBQWVULElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvZ2FtZS5qcz9jZGMwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gIFxuICAgIH1cbn1cblxuR2FtZS5wcm90b3R5cGUuaXNPdmVyID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKHRoaXMud2luIHx8IHRoaXMubG9zZSkgY29uc29sZS5sb2coJ0dhbWUgT3ZlcicpXG4gICAgXG59XG5cbkdhbWUucHJvdG90eXBlLndpbiA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICBcbn1cbkdhbWUucHJvdG90eXBlLmxvc2UgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gICAgXG59XG5cblxuXG5cbkdhbWUuRElNX1ggPSAxMDAwO1xuR2FtZS5ESU1fWSA9IDYwMDtcblxuXG5leHBvcnQgZGVmYXVsdCBHYW1lIl0sIm5hbWVzIjpbIkdhbWUiLCJwcm90b3R5cGUiLCJpc092ZXIiLCJ3aW4iLCJsb3NlIiwiY29uc29sZSIsImxvZyIsInBhcmFtcyIsIkRJTV9YIiwiRElNX1kiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/game_view.js":
/*!**********************************!*\
  !*** ./src/scripts/game_view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n/* harmony import */ var _rock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rock */ \"./src/scripts/rock.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Game = __webpack_require__(/*! ./Game */ \"./src/scripts/Game.js\"); // const Pieces = require(\"./pieces\")\n\n\n\n\nvar speed = 3;\nvar canvaWidth = 1000;\nvar canvaHeight = 600;\nvar startingPoint = 40;\n\nvar GameView = function GameView(game, canvas) {\n  _classCallCheck(this, GameView);\n\n  this.game = game;\n  this.canvas = canvas;\n  this.rocks = [];\n  this.addFinishLine(canvas);\n  this.addRocks(canvas);\n  this.addDoll(canvas);\n};\n\nGameView.prototype.keyHandler = function (player) {\n  var _this = this;\n\n  player.draw([500, 540], this.canvas);\n  window.addEventListener('keydown', function (event) {\n    if (event.key === 'ArrowDown') {\n      if (_this.isValidMove([0, speed], player)) {\n        _this.move([0, speed], player);\n      }\n    } else if (event.key === 'ArrowUp') {\n      if (_this.isValidMove([0, -1 * speed], player)) {\n        _this.move([0, -1 * speed], player);\n      }\n    } else if (event.key === 'ArrowRight') {\n      if (_this.isValidMove([speed, 0], player)) _this.move([speed, 0], player);\n    } else if (event.key === 'ArrowLeft') {\n      if (_this.isValidMove([-1 * speed, 0], player)) _this.move([-1 * speed, 0], player);\n    }\n  });\n};\n\nGameView.prototype.isValidMove = function (dir, player) {\n  // let result =true\n  var maxWidth = player.size[0];\n  var maxHeight = player.size[1];\n  var newPos = [player.position[0] + dir[0], player.position[1] + dir[1]]; // console.log(newPos[1] + maxHeight)\n  // console.log(this.canvas)\n\n  if (newPos[0] + maxWidth > canvaWidth || newPos[1] + maxHeight > canvaHeight || newPos[0] < 0 || newPos[1] < 0) return false;\n\n  for (var i = 0; i < this.rocks.length; i++) {\n    maxHeight = player.size[1];\n    var rockX = this.rocks[i].position[0];\n    var rockY = this.rocks[i].position[1];\n    if (rockY < player.position[1]) maxHeight = this.rocks[i].size[1];\n    if (Math.abs(newPos[1] - rockY) < maxHeight && Math.abs(newPos[0] - rockX) < maxWidth) return false;\n  }\n\n  return true;\n};\n\nGameView.prototype.move = function (dir, player) {\n  this.canvas.clearRect(player.position[0], player.position[1], player.size[0], player.size[1]);\n  player.position = [player.position[0] + dir[0], player.position[1] + dir[1]];\n  player.draw(player.position, this.canvas);\n};\n\nGameView.prototype.start = function (ctx) {\n  //console.log(Player)\n  var player = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"]([500, 540]);\n  this.keyHandler(player);\n};\n\nGameView.prototype.addDoll = function (canvas) {\n  var imageRock = new Image();\n  imageRock.addEventListener('load', function () {\n    canvas.drawImage(imageRock, 500, 0, imageRock.width * 0.03, imageRock.height * 0.03);\n  }, false);\n  imageRock.src = \"../pics/doll.png\";\n};\n\nGameView.prototype.addFinishLine = function (canvas) {\n  canvas.beginPath();\n  canvas.moveTo(0, 30);\n  canvas.lineTo(1000, 30);\n  canvas.stroke();\n};\n\nGameView.prototype.addRocks = function (canvas) {\n  // generate 100  postions \n  var posArr = [];\n  var i = 0;\n\n  while (i < 15) {\n    var x = 1000 * Math.random();\n    var y = (600 - 100) * Math.random() + startingPoint;\n    var rock = new _rock__WEBPACK_IMPORTED_MODULE_1__[\"default\"]([x, y]);\n    rock.draw([x, y], this.canvas);\n    this.rocks.push(rock);\n    i++;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixJQUFBQSxDQUFDO0FBQ0o7QUFDSixDQVpEOztBQWFBLCtEQUFldkIsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvc2NyaXB0cy9nYW1lX3ZpZXcuanM/ODBlZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBHYW1lID0gcmVxdWlyZShcIi4vR2FtZVwiKVxuLy8gY29uc3QgUGllY2VzID0gcmVxdWlyZShcIi4vcGllY2VzXCIpXG5cbmltcG9ydCBQbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCJcbmltcG9ydCBSb2NrIGZyb20gXCIuL3JvY2tcIlxuY29uc3Qgc3BlZWQgPSAzXG5jb25zdCBjYW52YVdpZHRoID0gMTAwMFxuY29uc3QgY2FudmFIZWlnaHQgPTYwMFxuY29uc3Qgc3RhcnRpbmdQb2ludCA9IDQwXG5jbGFzcyBHYW1lVmlldyB7XG4gICAgY29uc3RydWN0b3IoZ2FtZSwgY2FudmFzKSB7XG4gICAgICAgdGhpcy5nYW1lID0gZ2FtZVxuICAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzXG4gICAgICAgdGhpcy5yb2NrcyA9W11cbiAgICAgICB0aGlzLmFkZEZpbmlzaExpbmUoY2FudmFzKVxuICAgICAgIHRoaXMuYWRkUm9ja3MoY2FudmFzKVxuICAgICAgIHRoaXMuYWRkRG9sbChjYW52YXMpXG4gICAgfVxufVxuXG5HYW1lVmlldy5wcm90b3R5cGUua2V5SGFuZGxlcj0gZnVuY3Rpb24gKHBsYXllcikge1xuICAgIHBsYXllci5kcmF3KFs1MDAsNTQwXSwgdGhpcy5jYW52YXMpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93RG93bicpe1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZE1vdmUoWzAsIHNwZWVkXSwgcGxheWVyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZShbMCwgc3BlZWRdLCBwbGF5ZXIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dVcCcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWRNb3ZlKFswLCAtMSpzcGVlZF0sIHBsYXllcikpe1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZShbMCwgLTEqc3BlZWRdLCBwbGF5ZXIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgICAgIGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnKSB7XG4gICAgICAgICAgICBpZih0aGlzLmlzVmFsaWRNb3ZlKFtzcGVlZCwgMF0scGxheWVyKSkgdGhpcy5tb3ZlKFtzcGVlZCwwXSxwbGF5ZXIpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0Jykge1xuICAgICAgICAgICAgaWYodGhpcy5pc1ZhbGlkTW92ZShbLTEqc3BlZWQsIDBdLCBwbGF5ZXIpKSB0aGlzLm1vdmUoWy0xICogc3BlZWQsMF0scGxheWVyKVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuR2FtZVZpZXcucHJvdG90eXBlLmlzVmFsaWRNb3ZlID0gZnVuY3Rpb24oZGlyLCBwbGF5ZXIpe1xuICAgIC8vIGxldCByZXN1bHQgPXRydWVcbiAgICBsZXQgbWF4V2lkdGg9IHBsYXllci5zaXplWzBdXG4gICAgbGV0IG1heEhlaWdodD0gcGxheWVyLnNpemVbMV1cbiAgICBsZXQgbmV3UG9zID0gW3BsYXllci5wb3NpdGlvblswXSArIGRpclswXSwgcGxheWVyLnBvc2l0aW9uWzFdICsgZGlyWzFdXVxuICAgIC8vIGNvbnNvbGUubG9nKG5ld1Bvc1sxXSArIG1heEhlaWdodClcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNhbnZhcylcbiAgICBpZiAoKG5ld1Bvc1swXSArIG1heFdpZHRoKSA+IGNhbnZhV2lkdGggfHwgKG5ld1Bvc1sxXSArIG1heEhlaWdodCkgPiBjYW52YUhlaWdodCB8fCBuZXdQb3NbMF08IDAgfHwgbmV3UG9zWzFdPDApIHJldHVybiBmYWxzZVxuICAgIGZvcihsZXQgaT0wOyBpPCB0aGlzLnJvY2tzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgbWF4SGVpZ2h0ID0gcGxheWVyLnNpemVbMV1cbiAgICAgICAgbGV0IHJvY2tYID0gdGhpcy5yb2Nrc1tpXS5wb3NpdGlvblswXVxuICAgICAgICBsZXQgcm9ja1kgPSB0aGlzLnJvY2tzW2ldLnBvc2l0aW9uWzFdXG4gICAgICAgIGlmIChyb2NrWSA8IHBsYXllci5wb3NpdGlvblsxXSkgbWF4SGVpZ2h0ID0gdGhpcy5yb2Nrc1tpXS5zaXplWzFdIFxuICAgICAgICBpZiAoTWF0aC5hYnMobmV3UG9zWzFdIC0gcm9ja1kpIDwgbWF4SGVpZ2h0ICYmIE1hdGguYWJzKG5ld1Bvc1swXSAtIHJvY2tYKSA8IG1heFdpZHRoKSAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB0cnVlXG59XG5HYW1lVmlldy5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uIChkaXIsIHBsYXllcikge1xuICAgIHRoaXMuY2FudmFzLmNsZWFyUmVjdChwbGF5ZXIucG9zaXRpb25bMF0sIHBsYXllci5wb3NpdGlvblsxXSwgcGxheWVyLnNpemVbMF0gLCBwbGF5ZXIuc2l6ZVsxXSApXG4gICAgcGxheWVyLnBvc2l0aW9uID0gW3BsYXllci5wb3NpdGlvblswXSArIGRpclswXSwgcGxheWVyLnBvc2l0aW9uWzFdICsgZGlyWzFdXVxuICAgIHBsYXllci5kcmF3KHBsYXllci5wb3NpdGlvbiwgdGhpcy5jYW52YXMpXG59XG5cbkdhbWVWaWV3LnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uIChjdHgpIHtcbiAgICAvL2NvbnNvbGUubG9nKFBsYXllcilcbiAgICBjb25zdCBwbGF5ZXIgPSBuZXcgUGxheWVyKFs1MDAsNTQwXSlcbiAgICB0aGlzLmtleUhhbmRsZXIocGxheWVyKVxuICAgIFxufVxuXG5HYW1lVmlldy5wcm90b3R5cGUuYWRkRG9sbCA9IGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgICBsZXQgaW1hZ2VSb2NrID0gbmV3IEltYWdlKClcbiAgICBpbWFnZVJvY2suYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FudmFzLmRyYXdJbWFnZShpbWFnZVJvY2ssIDUwMCwgMCwgaW1hZ2VSb2NrLndpZHRoICogMC4wMywgaW1hZ2VSb2NrLmhlaWdodCAqIDAuMDMpXG4gICAgfSwgZmFsc2UpXG4gICAgaW1hZ2VSb2NrLnNyYyA9IFwiLi4vcGljcy9kb2xsLnBuZ1wiXG59XG5HYW1lVmlldy5wcm90b3R5cGUuYWRkRmluaXNoTGluZSA9IGZ1bmN0aW9uIChjYW52YXMpIHtcbiAgICBjYW52YXMuYmVnaW5QYXRoKCk7XG4gICAgY2FudmFzLm1vdmVUbygwLCAzMCk7XG4gICAgY2FudmFzLmxpbmVUbygxMDAwLCAzMCk7XG4gICAgY2FudmFzLnN0cm9rZSgpO1xufVxuR2FtZVZpZXcucHJvdG90eXBlLmFkZFJvY2tzID0gZnVuY3Rpb24gKGNhbnZhcykge1xuICAgIC8vIGdlbmVyYXRlIDEwMCAgcG9zdGlvbnMgXG4gICAgbGV0IHBvc0FyciA9IFtdXG4gICAgbGV0IGk9MFxuICAgIHdoaWxlKGk8IDE1KXtcbiAgICAgICAgbGV0IHggPSAxMDAwICogTWF0aC5yYW5kb20oKVxuICAgICAgICBsZXQgeSA9ICg2MDAtMTAwKSAqIE1hdGgucmFuZG9tKCkgKyBzdGFydGluZ1BvaW50XG4gICAgICAgIGxldCByb2NrID0gbmV3IFJvY2soW3gseV0pXG4gICAgICAgIHJvY2suZHJhdyhbeCx5XSAsIHRoaXMuY2FudmFzKVxuICAgICAgICB0aGlzLnJvY2tzLnB1c2gocm9jaylcbiAgICAgICAgaSsrXG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgR2FtZVZpZXciXSwibmFtZXMiOlsiR2FtZSIsInJlcXVpcmUiLCJQbGF5ZXIiLCJSb2NrIiwic3BlZWQiLCJjYW52YVdpZHRoIiwiY2FudmFIZWlnaHQiLCJzdGFydGluZ1BvaW50IiwiR2FtZVZpZXciLCJnYW1lIiwiY2FudmFzIiwicm9ja3MiLCJhZGRGaW5pc2hMaW5lIiwiYWRkUm9ja3MiLCJhZGREb2xsIiwicHJvdG90eXBlIiwia2V5SGFuZGxlciIsInBsYXllciIsImRyYXciLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJrZXkiLCJpc1ZhbGlkTW92ZSIsIm1vdmUiLCJkaXIiLCJtYXhXaWR0aCIsInNpemUiLCJtYXhIZWlnaHQiLCJuZXdQb3MiLCJwb3NpdGlvbiIsImkiLCJsZW5ndGgiLCJyb2NrWCIsInJvY2tZIiwiTWF0aCIsImFicyIsImNsZWFyUmVjdCIsInN0YXJ0IiwiY3R4IiwiaW1hZ2VSb2NrIiwiSW1hZ2UiLCJkcmF3SW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImJlZ2luUGF0aCIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsInBvc0FyciIsIngiLCJyYW5kb20iLCJ5Iiwicm9jayIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/game_view.js\n");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Player = function Player(pos) {\n  _classCallCheck(this, Player);\n\n  this.position = pos;\n  var bodyImage = new Image();\n  bodyImage.src = \"../pics/body.png\";\n  this.size = [bodyImage.width * 0.2, bodyImage.height * 0.2];\n};\n\nPlayer.prototype.draw = function (pos, canvas) {\n  var imageRock = new Image();\n  imageRock.addEventListener('load', function () {\n    canvas.drawImage(imageRock, pos[0], pos[1], imageRock.width * 0.2, imageRock.height * 0.2);\n  }, false);\n  imageRock.src = \"../pics/body.png\";\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Player);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7O0lBQU1BLFNBQ0YsZ0JBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFDYixPQUFLQyxRQUFMLEdBQWdCRCxHQUFoQjtBQUNBLE1BQUlFLFNBQVMsR0FBRyxJQUFJQyxLQUFKLEVBQWhCO0FBQ0FELEVBQUFBLFNBQVMsQ0FBQ0UsR0FBVixHQUFnQixrQkFBaEI7QUFDQSxPQUFLQyxJQUFMLEdBQVksQ0FBQ0gsU0FBUyxDQUFDSSxLQUFWLEdBQWtCLEdBQW5CLEVBQXdCSixTQUFTLENBQUNLLE1BQVYsR0FBbUIsR0FBM0MsQ0FBWjtBQUNIOztBQUVMUixNQUFNLENBQUNTLFNBQVAsQ0FBaUJDLElBQWpCLEdBQXVCLFVBQVNULEdBQVQsRUFBYVUsTUFBYixFQUFxQjtBQUN4QyxNQUFJQyxTQUFTLEdBQUcsSUFBSVIsS0FBSixFQUFoQjtBQUNBUSxFQUFBQSxTQUFTLENBQUNDLGdCQUFWLENBQTJCLE1BQTNCLEVBQW1DLFlBQVk7QUFDM0NGLElBQUFBLE1BQU0sQ0FBQ0csU0FBUCxDQUFpQkYsU0FBakIsRUFBNEJYLEdBQUcsQ0FBQyxDQUFELENBQS9CLEVBQW9DQSxHQUFHLENBQUMsQ0FBRCxDQUF2QyxFQUE0Q1csU0FBUyxDQUFDTCxLQUFWLEdBQWtCLEdBQTlELEVBQW1FSyxTQUFTLENBQUNKLE1BQVYsR0FBbUIsR0FBdEY7QUFDSCxHQUZELEVBRUcsS0FGSDtBQUdBSSxFQUFBQSxTQUFTLENBQUNQLEdBQVYsR0FBZ0Isa0JBQWhCO0FBQ0gsQ0FORDs7QUFRQSwrREFBZUwsTUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL2pzX3Byb2plY3QvLi9zcmMvc2NyaXB0cy9wbGF5ZXIuanM/NjQ3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBvcykge1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gcG9zXG4gICAgICAgIGxldCBib2R5SW1hZ2UgPSBuZXcgSW1hZ2UoKVxuICAgICAgICBib2R5SW1hZ2Uuc3JjID0gXCIuLi9waWNzL2JvZHkucG5nXCJcbiAgICAgICAgdGhpcy5zaXplID0gW2JvZHlJbWFnZS53aWR0aCAqIDAuMiwgYm9keUltYWdlLmhlaWdodCAqIDAuMl1cbiAgICB9XG59XG5QbGF5ZXIucHJvdG90eXBlLmRyYXcgPWZ1bmN0aW9uKHBvcyxjYW52YXMpIHtcbiAgICBsZXQgaW1hZ2VSb2NrID0gbmV3IEltYWdlKClcbiAgICBpbWFnZVJvY2suYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FudmFzLmRyYXdJbWFnZShpbWFnZVJvY2ssIHBvc1swXSwgcG9zWzFdLCBpbWFnZVJvY2sud2lkdGggKiAwLjIsIGltYWdlUm9jay5oZWlnaHQgKiAwLjIpXG4gICAgfSwgZmFsc2UpXG4gICAgaW1hZ2VSb2NrLnNyYyA9IFwiLi4vcGljcy9ib2R5LnBuZ1wiXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllciJdLCJuYW1lcyI6WyJQbGF5ZXIiLCJwb3MiLCJwb3NpdGlvbiIsImJvZHlJbWFnZSIsIkltYWdlIiwic3JjIiwic2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwicHJvdG90eXBlIiwiZHJhdyIsImNhbnZhcyIsImltYWdlUm9jayIsImFkZEV2ZW50TGlzdGVuZXIiLCJkcmF3SW1hZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/player.js\n");

/***/ }),

/***/ "./src/scripts/rock.js":
/*!*****************************!*\
  !*** ./src/scripts/rock.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Rock = function Rock(pos) {\n  _classCallCheck(this, Rock);\n\n  this.position = pos;\n  var imageRock = new Image();\n  imageRock.src = \"../pics/rock.png\";\n  this.size = [imageRock.width * 0.01, imageRock.height * 0.01];\n};\n\nRock.prototype.draw = function (pos, canvas) {\n  var imageRock = new Image();\n  imageRock.addEventListener('load', function () {\n    canvas.drawImage(imageRock, pos[0], pos[1], imageRock.width * 0.01, imageRock.height * 0.01);\n  }, false);\n  imageRock.src = \"../pics/rock.png\";\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rock);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9yb2NrLmpzLmpzIiwibWFwcGluZ3MiOiI7OztJQUFNQSxPQUNGLGNBQVlDLEdBQVosRUFBZ0I7QUFBQTs7QUFDWixPQUFLQyxRQUFMLEdBQWdCRCxHQUFoQjtBQUNBLE1BQUlFLFNBQVMsR0FBRyxJQUFJQyxLQUFKLEVBQWhCO0FBQ0FELEVBQUFBLFNBQVMsQ0FBQ0UsR0FBVixHQUFnQixrQkFBaEI7QUFDQSxPQUFLQyxJQUFMLEdBQVksQ0FBQ0gsU0FBUyxDQUFDSSxLQUFWLEdBQWtCLElBQW5CLEVBQXlCSixTQUFTLENBQUNLLE1BQVYsR0FBbUIsSUFBNUMsQ0FBWjtBQUNIOztBQUdMUixJQUFJLENBQUNTLFNBQUwsQ0FBZUMsSUFBZixHQUFzQixVQUFVVCxHQUFWLEVBQWVVLE1BQWYsRUFBd0I7QUFDMUMsTUFBSVIsU0FBUyxHQUFHLElBQUlDLEtBQUosRUFBaEI7QUFDQUQsRUFBQUEsU0FBUyxDQUFDUyxnQkFBVixDQUEyQixNQUEzQixFQUFtQyxZQUFZO0FBQzNDRCxJQUFBQSxNQUFNLENBQUNFLFNBQVAsQ0FBaUJWLFNBQWpCLEVBQTRCRixHQUFHLENBQUMsQ0FBRCxDQUEvQixFQUFvQ0EsR0FBRyxDQUFDLENBQUQsQ0FBdkMsRUFBNENFLFNBQVMsQ0FBQ0ksS0FBVixHQUFrQixJQUE5RCxFQUFvRUosU0FBUyxDQUFDSyxNQUFWLEdBQW1CLElBQXZGO0FBQ0gsR0FGRCxFQUVHLEtBRkg7QUFHQUwsRUFBQUEsU0FBUyxDQUFDRSxHQUFWLEdBQWdCLGtCQUFoQjtBQUNILENBTkQ7O0FBT0EsK0RBQWVMLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qc19wcm9qZWN0Ly4vc3JjL3NjcmlwdHMvcm9jay5qcz80YzA2Il0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFJvY2sge1xuICAgIGNvbnN0cnVjdG9yKHBvcyl7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NcbiAgICAgICAgbGV0IGltYWdlUm9jayA9IG5ldyBJbWFnZSgpXG4gICAgICAgIGltYWdlUm9jay5zcmMgPSBcIi4uL3BpY3Mvcm9jay5wbmdcIlxuICAgICAgICB0aGlzLnNpemUgPSBbaW1hZ2VSb2NrLndpZHRoICogMC4wMSwgaW1hZ2VSb2NrLmhlaWdodCAqIDAuMDFdXG4gICAgfVxuXG59XG5Sb2NrLnByb3RvdHlwZS5kcmF3ID0gZnVuY3Rpb24gKHBvcywgY2FudmFzICkge1xuICAgIGxldCBpbWFnZVJvY2sgPSBuZXcgSW1hZ2UoKVxuICAgIGltYWdlUm9jay5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBjYW52YXMuZHJhd0ltYWdlKGltYWdlUm9jaywgcG9zWzBdLCBwb3NbMV0sIGltYWdlUm9jay53aWR0aCAqIDAuMDEsIGltYWdlUm9jay5oZWlnaHQgKiAwLjAxKVxuICAgIH0sIGZhbHNlKVxuICAgIGltYWdlUm9jay5zcmMgPSBcIi4uL3BpY3Mvcm9jay5wbmdcIlxufVxuZXhwb3J0IGRlZmF1bHQgUm9jayJdLCJuYW1lcyI6WyJSb2NrIiwicG9zIiwicG9zaXRpb24iLCJpbWFnZVJvY2siLCJJbWFnZSIsInNyYyIsInNpemUiLCJ3aWR0aCIsImhlaWdodCIsInByb3RvdHlwZSIsImRyYXciLCJjYW52YXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZHJhd0ltYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/rock.js\n");

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