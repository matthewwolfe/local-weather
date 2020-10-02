webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/WeekList/WeekList.js":
/*!*********************************************!*\
  !*** ./src/components/WeekList/WeekList.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Day__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Day */ "./src/components/WeekList/Day.js");
var _jsxFileName = "C:\\Users\\matth\\Projects\\local-weather\\src\\components\\WeekList\\WeekList.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function WeekList(_ref) {
  var _this = this;

  var dayOfWeek = _ref.dayOfWeek,
      narrative = _ref.narrative,
      router = _ref.router,
      temperatureMax = _ref.temperatureMax,
      temperatureMin = _ref.temperatureMin;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, dayOfWeek.slice(0, 8).map(function (day, index) {
    return __jsx(_Day__WEBPACK_IMPORTED_MODULE_1__["default"], {
      day: day,
      key: index,
      onClick: function onClick() {
        return router.push("/day/".concat(index));
      },
      narrative: narrative[index],
      temperatureMax: temperatureMax[index],
      temperatureMin: temperatureMin[index],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    });
  }));
}

_c = WeekList;
/* harmony default export */ __webpack_exports__["default"] = (WeekList);

var _c;

$RefreshReg$(_c, "WeekList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XZWVrTGlzdC9XZWVrTGlzdC5qcyJdLCJuYW1lcyI6WyJXZWVrTGlzdCIsImRheU9mV2VlayIsIm5hcnJhdGl2ZSIsInJvdXRlciIsInRlbXBlcmF0dXJlTWF4IiwidGVtcGVyYXR1cmVNaW4iLCJzbGljZSIsIm1hcCIsImRheSIsImluZGV4IiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxRQUFULE9BTUc7QUFBQTs7QUFBQSxNQUxEQyxTQUtDLFFBTERBLFNBS0M7QUFBQSxNQUpEQyxTQUlDLFFBSkRBLFNBSUM7QUFBQSxNQUhEQyxNQUdDLFFBSERBLE1BR0M7QUFBQSxNQUZEQyxjQUVDLFFBRkRBLGNBRUM7QUFBQSxNQUREQyxjQUNDLFFBRERBLGNBQ0M7QUFDRCxTQUNFLG1FQUNHSixTQUFTLENBQUNLLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0JDLEdBQXRCLENBQTBCLFVBQUNDLEdBQUQsRUFBTUMsS0FBTjtBQUFBLFdBQ3pCLE1BQUMsNENBQUQ7QUFDRSxTQUFHLEVBQUVELEdBRFA7QUFFRSxTQUFHLEVBQUVDLEtBRlA7QUFHRSxhQUFPLEVBQUU7QUFBQSxlQUFNTixNQUFNLENBQUNPLElBQVAsZ0JBQW9CRCxLQUFwQixFQUFOO0FBQUEsT0FIWDtBQUlFLGVBQVMsRUFBRVAsU0FBUyxDQUFDTyxLQUFELENBSnRCO0FBS0Usb0JBQWMsRUFBRUwsY0FBYyxDQUFDSyxLQUFELENBTGhDO0FBTUUsb0JBQWMsRUFBRUosY0FBYyxDQUFDSSxLQUFELENBTmhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEeUI7QUFBQSxHQUExQixDQURILENBREY7QUFjRDs7S0FyQlFULFE7QUF1Qk1BLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5lODNkZmE2ZGYyZjg5NGJkNTA3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERheSBmcm9tICcuL0RheSc7XHJcblxyXG5mdW5jdGlvbiBXZWVrTGlzdCh7XHJcbiAgZGF5T2ZXZWVrLFxyXG4gIG5hcnJhdGl2ZSxcclxuICByb3V0ZXIsXHJcbiAgdGVtcGVyYXR1cmVNYXgsXHJcbiAgdGVtcGVyYXR1cmVNaW5cclxufSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7ZGF5T2ZXZWVrLnNsaWNlKDAsIDgpLm1hcCgoZGF5LCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxEYXlcclxuICAgICAgICAgIGRheT17ZGF5fVxyXG4gICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvZGF5LyR7aW5kZXh9YCl9XHJcbiAgICAgICAgICBuYXJyYXRpdmU9e25hcnJhdGl2ZVtpbmRleF19XHJcbiAgICAgICAgICB0ZW1wZXJhdHVyZU1heD17dGVtcGVyYXR1cmVNYXhbaW5kZXhdfVxyXG4gICAgICAgICAgdGVtcGVyYXR1cmVNaW49e3RlbXBlcmF0dXJlTWluW2luZGV4XX1cclxuICAgICAgICAvPlxyXG4gICAgICApKX1cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlZWtMaXN0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9