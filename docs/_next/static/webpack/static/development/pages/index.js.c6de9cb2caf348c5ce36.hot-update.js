webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/WeatherProvider/WeatherProvider.js":
/*!***********************************************************!*\
  !*** ./src/components/WeatherProvider/WeatherProvider.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts */ \"./src/contexts/index.js\");\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.js\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hooks */ \"./src/hooks/index.js\");\n/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/fetcher */ \"./src/utils/fetcher.js\");\nvar _jsxFileName = \"/Users/cn182266/Personal/local-weather/src/components/WeatherProvider/WeatherProvider.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction WeatherProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(getDailyForecastUrl({\n    lat: latitude,\n    \"long\": longitude\n  }), _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"fetcher\"]),\n      dailyData = _useSWR.data,\n      dailyError = _useSWR.error;\n\n  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(getHourlyForecastUrl({\n    lat: latitude,\n    \"long\": longitude\n  }), _utils_fetcher__WEBPACK_IMPORTED_MODULE_5__[\"fetcher\"]),\n      hourlyData = _useSWR2.data,\n      hourlyError = _useSWR2.error;\n\n  if (coordsLoading || !dailyData || !hourlyData) {\n    return null;\n  }\n\n  if (coordsError || dailyError || hourlyError) {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 12\n      }\n    }, \"Something went wrong :(\");\n  }\n\n  return __jsx(_contexts__WEBPACK_IMPORTED_MODULE_2__[\"WeatherContext\"].Provider, {\n    value: {\n      dailyData: dailyData,\n      hourlyData: hourlyData\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, children);\n}\n\n_s(WeatherProvider, \"BqC7ItGxyVyMY3BDiP7AQgbVxCw=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"], swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c = WeatherProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WeatherProvider);\n\nvar _c;\n\n$RefreshReg$(_c, \"WeatherProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XZWF0aGVyUHJvdmlkZXIvV2VhdGhlclByb3ZpZGVyLmpzPzMwYjkiXSwibmFtZXMiOlsiV2VhdGhlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTV1IiLCJnZXREYWlseUZvcmVjYXN0VXJsIiwibGF0IiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJmZXRjaGVyIiwiZGFpbHlEYXRhIiwiZGF0YSIsImRhaWx5RXJyb3IiLCJlcnJvciIsImdldEhvdXJseUZvcmVjYXN0VXJsIiwiaG91cmx5RGF0YSIsImhvdXJseUVycm9yIiwiY29vcmRzTG9hZGluZyIsImNvb3Jkc0Vycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTs7QUFFQSxTQUFTQSxlQUFULE9BQXVDO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLGdCQUNVQyxtREFBTSxDQUNuREMsbUJBQW1CLENBQUM7QUFDbEJDLE9BQUcsRUFBRUMsUUFEYTtBQUVsQixZQUFNQztBQUZZLEdBQUQsQ0FEZ0MsRUFLbkRDLHNEQUxtRCxDQURoQjtBQUFBLE1BQ3ZCQyxTQUR1QixXQUM3QkMsSUFENkI7QUFBQSxNQUNMQyxVQURLLFdBQ1pDLEtBRFk7O0FBQUEsaUJBUVlULG1EQUFNLENBQ3JEVSxvQkFBb0IsQ0FBQztBQUNuQlIsT0FBRyxFQUFFQyxRQURjO0FBRW5CLFlBQU1DO0FBRmEsR0FBRCxDQURpQyxFQUtyREMsc0RBTHFELENBUmxCO0FBQUEsTUFRdkJNLFVBUnVCLFlBUTdCSixJQVI2QjtBQUFBLE1BUUpLLFdBUkksWUFRWEgsS0FSVzs7QUFnQnJDLE1BQUlJLGFBQWEsSUFBSSxDQUFDUCxTQUFsQixJQUErQixDQUFDSyxVQUFwQyxFQUFnRDtBQUM5QyxXQUFPLElBQVA7QUFDRDs7QUFFRCxNQUFJRyxXQUFXLElBQUlOLFVBQWYsSUFBNkJJLFdBQWpDLEVBQThDO0FBQzVDLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBUDtBQUNEOztBQUVELFNBQ0UsTUFBQyx3REFBRCxDQUFnQixRQUFoQjtBQUF5QixTQUFLLEVBQUU7QUFBRU4sZUFBUyxFQUFUQSxTQUFGO0FBQWFLLGdCQUFVLEVBQVZBO0FBQWIsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHWixRQURILENBREY7QUFLRDs7R0E3QlFELGU7VUFDd0NFLDJDLEVBT0VBLDJDOzs7S0FSMUNGLGU7QUErQk1BLDhFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvV2VhdGhlclByb3ZpZGVyL1dlYXRoZXJQcm92aWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCB7IFdlYXRoZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMnO1xuaW1wb3J0IHtcbiAgREFJTFlfRk9SRUNBU1RfVVJMLFxuICBIT1VSTFlfRk9SRUNBU1RfVVJMLFxufSBmcm9tICcuLi8uLi9jb25maWcvY29uc3RhbnRzJztcbmltcG9ydCB7IHVzZUdldEZvcmVjYXN0IH0gZnJvbSAnLi4vLi4vaG9va3MnO1xuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoZXInO1xuXG5mdW5jdGlvbiBXZWF0aGVyUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IHsgZGF0YTogZGFpbHlEYXRhLCBlcnJvcjogZGFpbHlFcnJvciB9ID0gdXNlU1dSKFxuICAgIGdldERhaWx5Rm9yZWNhc3RVcmwoe1xuICAgICAgbGF0OiBsYXRpdHVkZSxcbiAgICAgIGxvbmc6IGxvbmdpdHVkZSxcbiAgICB9KSxcbiAgICBmZXRjaGVyLFxuICApO1xuICBjb25zdCB7IGRhdGE6IGhvdXJseURhdGEsIGVycm9yOiBob3VybHlFcnJvciB9ID0gdXNlU1dSKFxuICAgIGdldEhvdXJseUZvcmVjYXN0VXJsKHtcbiAgICAgIGxhdDogbGF0aXR1ZGUsXG4gICAgICBsb25nOiBsb25naXR1ZGUsXG4gICAgfSksXG4gICAgZmV0Y2hlcixcbiAgKTtcblxuICBpZiAoY29vcmRzTG9hZGluZyB8fCAhZGFpbHlEYXRhIHx8ICFob3VybHlEYXRhKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoY29vcmRzRXJyb3IgfHwgZGFpbHlFcnJvciB8fCBob3VybHlFcnJvcikge1xuICAgIHJldHVybiA8ZGl2PlNvbWV0aGluZyB3ZW50IHdyb25nIDooPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8V2VhdGhlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgZGFpbHlEYXRhLCBob3VybHlEYXRhIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvV2VhdGhlckNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXJQcm92aWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/WeatherProvider/WeatherProvider.js\n");

/***/ })

})