webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/WeekList/WeekListContainer.js":
/*!******************************************************!*\
  !*** ./src/components/WeekList/WeekListContainer.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WeekList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WeekList */ "./src/components/WeekList/WeekList.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hooks */ "./src/hooks/index.js");
var _jsxFileName = "C:\\Users\\matth\\Projects\\local-weather\\src\\components\\WeekList\\WeekListContainer.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function WeekListContainer() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();

  var _useWeather = Object(_hooks__WEBPACK_IMPORTED_MODULE_3__["useWeather"])(),
      dailyData = _useWeather.dailyData;

  var dayOfWeek = dailyData.dayOfWeek,
      narrative = dailyData.narrative,
      temperatureMax = dailyData.temperatureMax,
      temperatureMin = dailyData.temperatureMin;
  console.log(router);
  return __jsx(_WeekList__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dayOfWeek: dayOfWeek,
    narrative: narrative,
    temperatureMax: temperatureMax,
    temperatureMin: temperatureMin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  });
}

_s(WeekListContainer, "ebsUSqDwRtZC9UE/FiQ3axZBYvQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"], _hooks__WEBPACK_IMPORTED_MODULE_3__["useWeather"]];
});

_c = WeekListContainer;
/* harmony default export */ __webpack_exports__["default"] = (WeekListContainer);

var _c;

$RefreshReg$(_c, "WeekListContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XZWVrTGlzdC9XZWVrTGlzdENvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJXZWVrTGlzdENvbnRhaW5lciIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVdlYXRoZXIiLCJkYWlseURhdGEiLCJkYXlPZldlZWsiLCJuYXJyYXRpdmUiLCJ0ZW1wZXJhdHVyZU1heCIsInRlbXBlcmF0dXJlTWluIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxpQkFBVCxHQUE2QjtBQUFBOztBQUMzQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUQyQixvQkFFTEMseURBQVUsRUFGTDtBQUFBLE1BRW5CQyxTQUZtQixlQUVuQkEsU0FGbUI7O0FBQUEsTUFHbkJDLFNBSG1CLEdBR3NDRCxTQUh0QyxDQUduQkMsU0FIbUI7QUFBQSxNQUdSQyxTQUhRLEdBR3NDRixTQUh0QyxDQUdSRSxTQUhRO0FBQUEsTUFHR0MsY0FISCxHQUdzQ0gsU0FIdEMsQ0FHR0csY0FISDtBQUFBLE1BR21CQyxjQUhuQixHQUdzQ0osU0FIdEMsQ0FHbUJJLGNBSG5CO0FBSzNCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWVQsTUFBWjtBQUVBLFNBQ0UsTUFBQyxpREFBRDtBQUNFLGFBQVMsRUFBRUksU0FEYjtBQUVFLGFBQVMsRUFBRUMsU0FGYjtBQUdFLGtCQUFjLEVBQUVDLGNBSGxCO0FBSUUsa0JBQWMsRUFBRUMsY0FKbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBUUQ7O0dBZlFSLGlCO1VBQ1FFLHFELEVBQ09DLGlEOzs7S0FGZkgsaUI7QUFpQk1BLGdGQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5lNjI5MWM1YWZkYTYwZjEzZDQ5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgV2Vla0xpc3QgZnJvbSAnLi9XZWVrTGlzdCc7XHJcbmltcG9ydCB7IHVzZVdlYXRoZXIgfSBmcm9tICcuLi8uLi9ob29rcyc7XHJcblxyXG5mdW5jdGlvbiBXZWVrTGlzdENvbnRhaW5lcigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGRhaWx5RGF0YSB9ID0gdXNlV2VhdGhlcigpO1xyXG4gIGNvbnN0IHsgZGF5T2ZXZWVrLCBuYXJyYXRpdmUsIHRlbXBlcmF0dXJlTWF4LCB0ZW1wZXJhdHVyZU1pbiB9ID0gZGFpbHlEYXRhO1xyXG5cclxuICBjb25zb2xlLmxvZyhyb3V0ZXIpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFdlZWtMaXN0XHJcbiAgICAgIGRheU9mV2Vlaz17ZGF5T2ZXZWVrfVxyXG4gICAgICBuYXJyYXRpdmU9e25hcnJhdGl2ZX1cclxuICAgICAgdGVtcGVyYXR1cmVNYXg9e3RlbXBlcmF0dXJlTWF4fVxyXG4gICAgICB0ZW1wZXJhdHVyZU1pbj17dGVtcGVyYXR1cmVNaW59XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlZWtMaXN0Q29udGFpbmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9