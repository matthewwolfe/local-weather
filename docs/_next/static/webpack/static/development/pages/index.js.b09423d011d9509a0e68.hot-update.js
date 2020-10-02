webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/RightPanel/RightPanelContainer.js":
/*!**********************************************************!*\
  !*** ./src/components/RightPanel/RightPanelContainer.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _RightPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RightPanel */ "./src/components/RightPanel/RightPanel.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks */ "./src/hooks/index.js");
var _jsxFileName = "C:\\Users\\matth\\Projects\\local-weather\\src\\components\\RightPanel\\RightPanelContainer.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function RightPanelContainer() {
  _s();

  var _useApp = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useApp"])(),
      selectedDay = _useApp.selectedDay;

  if (selectedDay !== null) {
    return null;
  }

  return __jsx(_RightPanel__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 10
    }
  });
}

_s(RightPanelContainer, "/3NpcWWeh7Z2524f7KVRqrwjbwo=", false, function () {
  return [_hooks__WEBPACK_IMPORTED_MODULE_2__["useApp"]];
});

_c = RightPanelContainer;
/* harmony default export */ __webpack_exports__["default"] = (RightPanelContainer);

var _c;

$RefreshReg$(_c, "RightPanelContainer");

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

/***/ "./src/components/RightPanel/index.js":
/*!********************************************!*\
  !*** ./src/components/RightPanel/index.js ***!
  \********************************************/
/*! exports provided: RightPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _RightPanelContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RightPanelContainer */ "./src/components/RightPanel/RightPanelContainer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RightPanel", function() { return _RightPanelContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9SaWdodFBhbmVsL1JpZ2h0UGFuZWxDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmlnaHRQYW5lbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJSaWdodFBhbmVsQ29udGFpbmVyIiwidXNlQXBwIiwic2VsZWN0ZWREYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsbUJBQVQsR0FBK0I7QUFBQTs7QUFBQSxnQkFDTEMscURBQU0sRUFERDtBQUFBLE1BQ3JCQyxXQURxQixXQUNyQkEsV0FEcUI7O0FBRzdCLE1BQUlBLFdBQVcsS0FBSyxJQUFwQixFQUEwQjtBQUN4QixXQUFPLElBQVA7QUFDRDs7QUFFRCxTQUFPLE1BQUMsbURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ0Q7O0dBUlFGLG1CO1VBQ2lCQyw2Qzs7O0tBRGpCRCxtQjtBQVVNQSxrRkFBZjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLmIwOTQyM2QwMTFkOTUwOWEwZTY4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgUmlnaHRQYW5lbCBmcm9tICcuL1JpZ2h0UGFuZWwnO1xyXG5pbXBvcnQgeyB1c2VBcHAgfSBmcm9tICcuLi8uLi9ob29rcyc7XHJcblxyXG5mdW5jdGlvbiBSaWdodFBhbmVsQ29udGFpbmVyKCkge1xyXG4gIGNvbnN0IHsgc2VsZWN0ZWREYXkgfSA9IHVzZUFwcCgpO1xyXG5cclxuICBpZiAoc2VsZWN0ZWREYXkgIT09IG51bGwpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIDxSaWdodFBhbmVsIC8+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSaWdodFBhbmVsQ29udGFpbmVyO1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFJpZ2h0UGFuZWwgfSBmcm9tICcuL1JpZ2h0UGFuZWxDb250YWluZXInO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9