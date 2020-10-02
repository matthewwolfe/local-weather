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
/* harmony import */ var _WeekList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WeekList */ "./src/components/WeekList/WeekList.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks */ "./src/hooks/index.js");
var _jsxFileName = "C:\\Users\\matth\\Projects\\local-weather\\src\\components\\WeekList\\WeekListContainer.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function WeekListContainer() {
  _s();

  var _useApp = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useApp"])(),
      setSelectedDay = _useApp.setSelectedDay;

  var _useWeather = Object(_hooks__WEBPACK_IMPORTED_MODULE_2__["useWeather"])(),
      dailyData = _useWeather.dailyData;

  var dayOfWeek = dailyData.dayOfWeek,
      narrative = dailyData.narrative,
      temperatureMax = dailyData.temperatureMax,
      temperatureMin = dailyData.temperatureMin;
  console.log(setSelectedDay);
  return __jsx(_WeekList__WEBPACK_IMPORTED_MODULE_1__["default"], {
    dayOfWeek: dayOfWeek,
    narrative: narrative,
    setSelectedDay: setSelectedDay,
    temperatureMax: temperatureMax,
    temperatureMin: temperatureMin,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  });
}

_s(WeekListContainer, "RNirimTJExggBq/nm9ZScSQxmGc=", false, function () {
  return [_hooks__WEBPACK_IMPORTED_MODULE_2__["useApp"], _hooks__WEBPACK_IMPORTED_MODULE_2__["useWeather"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XZWVrTGlzdC9XZWVrTGlzdENvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJXZWVrTGlzdENvbnRhaW5lciIsInVzZUFwcCIsInNldFNlbGVjdGVkRGF5IiwidXNlV2VhdGhlciIsImRhaWx5RGF0YSIsImRheU9mV2VlayIsIm5hcnJhdGl2ZSIsInRlbXBlcmF0dXJlTWF4IiwidGVtcGVyYXR1cmVNaW4iLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsaUJBQVQsR0FBNkI7QUFBQTs7QUFBQSxnQkFDQUMscURBQU0sRUFETjtBQUFBLE1BQ25CQyxjQURtQixXQUNuQkEsY0FEbUI7O0FBQUEsb0JBRUxDLHlEQUFVLEVBRkw7QUFBQSxNQUVuQkMsU0FGbUIsZUFFbkJBLFNBRm1COztBQUFBLE1BR25CQyxTQUhtQixHQUdzQ0QsU0FIdEMsQ0FHbkJDLFNBSG1CO0FBQUEsTUFHUkMsU0FIUSxHQUdzQ0YsU0FIdEMsQ0FHUkUsU0FIUTtBQUFBLE1BR0dDLGNBSEgsR0FHc0NILFNBSHRDLENBR0dHLGNBSEg7QUFBQSxNQUdtQkMsY0FIbkIsR0FHc0NKLFNBSHRDLENBR21CSSxjQUhuQjtBQUszQkMsU0FBTyxDQUFDQyxHQUFSLENBQVlSLGNBQVo7QUFFQSxTQUNFLE1BQUMsaURBQUQ7QUFDRSxhQUFTLEVBQUVHLFNBRGI7QUFFRSxhQUFTLEVBQUVDLFNBRmI7QUFHRSxrQkFBYyxFQUFFSixjQUhsQjtBQUlFLGtCQUFjLEVBQUVLLGNBSmxCO0FBS0Usa0JBQWMsRUFBRUMsY0FMbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBU0Q7O0dBaEJRUixpQjtVQUNvQkMsNkMsRUFDTEUsaUQ7OztLQUZmSCxpQjtBQWtCTUEsZ0ZBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjFjZTUzMjI4NGNiYmUwODc4MzgzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgV2Vla0xpc3QgZnJvbSAnLi9XZWVrTGlzdCc7XHJcbmltcG9ydCB7IHVzZUFwcCwgdXNlV2VhdGhlciB9IGZyb20gJy4uLy4uL2hvb2tzJztcclxuXHJcbmZ1bmN0aW9uIFdlZWtMaXN0Q29udGFpbmVyKCkge1xyXG4gIGNvbnN0IHsgc2V0U2VsZWN0ZWREYXkgfSA9IHVzZUFwcCgpO1xyXG4gIGNvbnN0IHsgZGFpbHlEYXRhIH0gPSB1c2VXZWF0aGVyKCk7XHJcbiAgY29uc3QgeyBkYXlPZldlZWssIG5hcnJhdGl2ZSwgdGVtcGVyYXR1cmVNYXgsIHRlbXBlcmF0dXJlTWluIH0gPSBkYWlseURhdGE7XHJcblxyXG4gIGNvbnNvbGUubG9nKHNldFNlbGVjdGVkRGF5KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxXZWVrTGlzdFxyXG4gICAgICBkYXlPZldlZWs9e2RheU9mV2Vla31cclxuICAgICAgbmFycmF0aXZlPXtuYXJyYXRpdmV9XHJcbiAgICAgIHNldFNlbGVjdGVkRGF5PXtzZXRTZWxlY3RlZERheX1cclxuICAgICAgdGVtcGVyYXR1cmVNYXg9e3RlbXBlcmF0dXJlTWF4fVxyXG4gICAgICB0ZW1wZXJhdHVyZU1pbj17dGVtcGVyYXR1cmVNaW59XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlZWtMaXN0Q29udGFpbmVyO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9