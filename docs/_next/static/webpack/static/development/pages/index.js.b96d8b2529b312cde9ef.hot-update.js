webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/LeftPanel/LeftPanelContainer.js":
/*!********************************************************!*\
  !*** ./src/components/LeftPanel/LeftPanelContainer.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _LeftPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeftPanel */ "./src/components/LeftPanel/LeftPanel.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks */ "./src/hooks/index.js");
var _jsxFileName = "C:\\Users\\matth\\Projects\\local-weather\\src\\components\\LeftPanel\\LeftPanelContainer.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function LeftPanelContainer() {
  _s();

  var _useApp = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useApp"])(),
      selectedDay = _useApp.selectedDay;

  console.log('selected day', selectedDay);

  if (selectedDay !== null) {
    return null;
  }

  return __jsx(_LeftPanel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 10
    }
  });
}

_s(LeftPanelContainer, "/3NpcWWeh7Z2524f7KVRqrwjbwo=", false, function () {
  return [_hooks__WEBPACK_IMPORTED_MODULE_2__["useApp"]];
});

_c = LeftPanelContainer;
/* harmony default export */ __webpack_exports__["default"] = (LeftPanelContainer);

var _c;

$RefreshReg$(_c, "LeftPanelContainer");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/components/LeftPanel/index.js":
/*!*******************************************!*\
  !*** ./src/components/LeftPanel/index.js ***!
  \*******************************************/
/*! exports provided: LeftPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _LeftPanelContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeftPanelContainer */ "./src/components/LeftPanel/LeftPanelContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LeftPanel", function() { return _LeftPanelContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MZWZ0UGFuZWwvTGVmdFBhbmVsQ29udGFpbmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0xlZnRQYW5lbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJMZWZ0UGFuZWxDb250YWluZXIiLCJ1c2VBcHAiLCJzZWxlY3RlZERheSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0Esa0JBQVQsR0FBOEI7QUFBQTs7QUFBQSxnQkFDSkMscURBQU0sRUFERjtBQUFBLE1BQ3BCQyxXQURvQixXQUNwQkEsV0FEb0I7O0FBRzVCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCRixXQUE1Qjs7QUFFQSxNQUFJQSxXQUFXLEtBQUssSUFBcEIsRUFBMEI7QUFDeEIsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FBTyxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBUDtBQUNEOztHQVZRRixrQjtVQUNpQkMsNkM7OztLQURqQkQsa0I7QUFZTUEsaUZBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuYjk2ZDhiMjUyOWIzMTJjZGU5ZWYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMZWZ0UGFuZWwgZnJvbSAnLi9MZWZ0UGFuZWwnO1xyXG5pbXBvcnQgeyB1c2VBcHAgfSBmcm9tICcuLi8uLi9ob29rcyc7XHJcblxyXG5mdW5jdGlvbiBMZWZ0UGFuZWxDb250YWluZXIoKSB7XHJcbiAgY29uc3QgeyBzZWxlY3RlZERheSB9ID0gdXNlQXBwKCk7XHJcblxyXG4gIGNvbnNvbGUubG9nKCdzZWxlY3RlZCBkYXknLCBzZWxlY3RlZERheSk7XHJcblxyXG4gIGlmIChzZWxlY3RlZERheSAhPT0gbnVsbCkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gPExlZnRQYW5lbCAvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGVmdFBhbmVsQ29udGFpbmVyO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIExlZnRQYW5lbCB9IGZyb20gJy4vTGVmdFBhbmVsQ29udGFpbmVyJztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==