webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/hooks/index.js":
/*!****************************!*\
  !*** ./src/hooks/index.js ***!
  \****************************/
/*! exports provided: useApp, useCurrentCoords, useGetForecast, useReverseLookup, useTodayHourlyData, useWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _useApp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useApp */ \"./src/hooks/useApp.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useApp\", function() { return _useApp__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _useCurrentCoords__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useCurrentCoords */ \"./src/hooks/useCurrentCoords.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useCurrentCoords\", function() { return _useCurrentCoords__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _useGetForecast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useGetForecast */ \"./src/hooks/useGetForecast.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useGetForecast\", function() { return _useGetForecast__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _useReverseLookup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useReverseLookup */ \"./src/hooks/useReverseLookup.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useReverseLookup\", function() { return _useReverseLookup__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _useTodayHourlyData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useTodayHourlyData */ \"./src/hooks/useTodayHourlyData.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useTodayHourlyData\", function() { return _useTodayHourlyData__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _useWeather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useWeather */ \"./src/hooks/useWeather.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useWeather\", function() { return _useWeather__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n\n\n\n\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvaW5kZXguanM/ODA2YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9ob29rcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlQXBwIH0gZnJvbSAnLi91c2VBcHAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VDdXJyZW50Q29vcmRzIH0gZnJvbSAnLi91c2VDdXJyZW50Q29vcmRzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlR2V0Rm9yZWNhc3QgfSBmcm9tICcuL3VzZUdldEZvcmVjYXN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlUmV2ZXJzZUxvb2t1cCB9IGZyb20gJy4vdXNlUmV2ZXJzZUxvb2t1cCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVRvZGF5SG91cmx5RGF0YSB9IGZyb20gJy4vdXNlVG9kYXlIb3VybHlEYXRhJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlV2VhdGhlciB9IGZyb20gJy4vdXNlV2VhdGhlcic7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/index.js\n");

/***/ }),

/***/ "./src/hooks/useReverseLookup.js":
/*!***************************************!*\
  !*** ./src/hooks/useReverseLookup.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/fetcher */ \"./src/utils/fetcher.js\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction useReverseLookup() {\n  _s();\n\n  var _useCurrentCoords = useCurrentCoords(),\n      coords = _useCurrentCoords.coords;\n\n  return Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(generateUrl(coords), _utils_fetcher__WEBPACK_IMPORTED_MODULE_3__[\"fetcher\"]);\n}\n\n_s(useReverseLookup, \"crfN8VjbsXiPNpNqPhrBCM9oVdA=\", true, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\nfunction generateUrl(_ref) {\n  var latitude = _ref.latitude,\n      longitude = _ref.longitude;\n  return \"\".concat(_config_constants__WEBPACK_IMPORTED_MODULE_2__[\"REVERSE_GEOCODE_URL\"], \"&lat=\").concat(latitude, \"&lon=\").concat(longitude);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useGetForecast);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlUmV2ZXJzZUxvb2t1cC5qcz83YzA2Il0sIm5hbWVzIjpbInVzZVJldmVyc2VMb29rdXAiLCJ1c2VDdXJyZW50Q29vcmRzIiwiY29vcmRzIiwidXNlU1dSIiwiZ2VuZXJhdGVVcmwiLCJmZXRjaGVyIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJSRVZFUlNFX0dFT0NPREVfVVJMIiwidXNlR2V0Rm9yZWNhc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsZ0JBQVQsR0FBNEI7QUFBQTs7QUFBQSwwQkFDUEMsZ0JBQWdCLEVBRFQ7QUFBQSxNQUNsQkMsTUFEa0IscUJBQ2xCQSxNQURrQjs7QUFFMUIsU0FBT0MsbURBQU0sQ0FBQ0MsV0FBVyxDQUFDRixNQUFELENBQVosRUFBc0JHLHNEQUF0QixDQUFiO0FBQ0Q7O0dBSFFMLGdCO1VBRUFHLDJDOzs7QUFHVCxTQUFTQyxXQUFULE9BQThDO0FBQUEsTUFBdkJFLFFBQXVCLFFBQXZCQSxRQUF1QjtBQUFBLE1BQWJDLFNBQWEsUUFBYkEsU0FBYTtBQUM1QyxtQkFBVUMscUVBQVYsa0JBQXFDRixRQUFyQyxrQkFBcURDLFNBQXJEO0FBQ0Q7O0FBRWNFLDZFQUFmIiwiZmlsZSI6Ii4vc3JjL2hvb2tzL3VzZVJldmVyc2VMb29rdXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IHsgUkVWRVJTRV9HRU9DT0RFX1VSTCB9IGZyb20gJy4uL2NvbmZpZy9jb25zdGFudHMnO1xuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJy4uL3V0aWxzL2ZldGNoZXInO1xuXG5mdW5jdGlvbiB1c2VSZXZlcnNlTG9va3VwKCkge1xuICBjb25zdCB7IGNvb3JkcyB9ID0gdXNlQ3VycmVudENvb3JkcygpO1xuICByZXR1cm4gdXNlU1dSKGdlbmVyYXRlVXJsKGNvb3JkcyksIGZldGNoZXIpO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVVybCh7IGxhdGl0dWRlLCBsb25naXR1ZGUgfSkge1xuICByZXR1cm4gYCR7UkVWRVJTRV9HRU9DT0RFX1VSTH0mbGF0PSR7bGF0aXR1ZGV9Jmxvbj0ke2xvbmdpdHVkZX1gO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VHZXRGb3JlY2FzdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/hooks/useReverseLookup.js\n");

/***/ })

})