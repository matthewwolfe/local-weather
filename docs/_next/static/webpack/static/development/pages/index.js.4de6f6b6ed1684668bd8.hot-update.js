webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/hooks/useReverseLookup.js":
/*!***************************************!*\
  !*** ./src/hooks/useReverseLookup.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _useCurrentCoords__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useCurrentCoords */ \"./src/hooks/useCurrentCoords.js\");\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/fetcher */ \"./src/utils/fetcher.js\");\n/* harmony import */ var _utils_localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/localStorage */ \"./src/utils/localStorage.js\");\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction useReverseLookup() {\n  _s();\n\n  var _useCurrentCoords = Object(_useCurrentCoords__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(),\n      coords = _useCurrentCoords.coords;\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(generateUrl(coords), _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__[\"fetcher\"], {\n    onError: function onError() {\n      console.log('error');\n      _utils_localStorage__WEBPACK_IMPORTED_MODULE_5__[\"localStorage\"].removeItem('address');\n    },\n    onSuccess: function onSuccess(_ref) {\n      var address = _ref.address;\n      _utils_localStorage__WEBPACK_IMPORTED_MODULE_5__[\"localStorage\"].setItem('address', address);\n    }\n  }),\n      data = _useSWR.data,\n      error = _useSWR.error;\n\n  return {\n    data: data,\n    error: error || data && data.error,\n    loading: !data && !error\n  };\n}\n\n_s(useReverseLookup, \"h0jip0sI0pYvdlrEC0PvzPsVDs0=\", false, function () {\n  return [_useCurrentCoords__WEBPACK_IMPORTED_MODULE_2__[\"default\"], swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\nfunction generateUrl(_ref2) {\n  var latitude = _ref2.latitude,\n      longitude = _ref2.longitude;\n  return \"\".concat(_config_constants__WEBPACK_IMPORTED_MODULE_3__[\"REVERSE_GEOCODE_URL\"], \"&lat=\").concat(latitude, \"&lon=\").concat(longitude);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useReverseLookup);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlUmV2ZXJzZUxvb2t1cC5qcz83YzA2Il0sIm5hbWVzIjpbInVzZVJldmVyc2VMb29rdXAiLCJ1c2VDdXJyZW50Q29vcmRzIiwiY29vcmRzIiwidXNlU1dSIiwiZ2VuZXJhdGVVcmwiLCJmZXRjaGVyIiwib25FcnJvciIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwib25TdWNjZXNzIiwiYWRkcmVzcyIsInNldEl0ZW0iLCJkYXRhIiwiZXJyb3IiLCJsb2FkaW5nIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJSRVZFUlNFX0dFT0NPREVfVVJMIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGdCQUFULEdBQTRCO0FBQUE7O0FBQUEsMEJBQ1BDLGlFQUFnQixFQURUO0FBQUEsTUFDbEJDLE1BRGtCLHFCQUNsQkEsTUFEa0I7O0FBQUEsZ0JBRUZDLG1EQUFNLENBQUNDLFdBQVcsQ0FBQ0YsTUFBRCxDQUFaLEVBQXNCRyxzREFBdEIsRUFBK0I7QUFDM0RDLFdBRDJELHFCQUNqRDtBQUNSQyxhQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBQ0FDLHNFQUFZLENBQUNDLFVBQWIsQ0FBd0IsU0FBeEI7QUFDRCxLQUowRDtBQUszREMsYUFMMkQsMkJBS3BDO0FBQUEsVUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQ3JCSCxzRUFBWSxDQUFDSSxPQUFiLENBQXFCLFNBQXJCLEVBQWdDRCxPQUFoQztBQUNEO0FBUDBELEdBQS9CLENBRko7QUFBQSxNQUVsQkUsSUFGa0IsV0FFbEJBLElBRmtCO0FBQUEsTUFFWkMsS0FGWSxXQUVaQSxLQUZZOztBQVkxQixTQUFPO0FBQ0xELFFBQUksRUFBSkEsSUFESztBQUVMQyxTQUFLLEVBQUVBLEtBQUssSUFBS0QsSUFBSSxJQUFJQSxJQUFJLENBQUNDLEtBRnpCO0FBR0xDLFdBQU8sRUFBRSxDQUFDRixJQUFELElBQVMsQ0FBQ0M7QUFIZCxHQUFQO0FBS0Q7O0dBakJRZixnQjtVQUNZQyx5RCxFQUNLRSwyQzs7O0FBaUIxQixTQUFTQyxXQUFULFFBQThDO0FBQUEsTUFBdkJhLFFBQXVCLFNBQXZCQSxRQUF1QjtBQUFBLE1BQWJDLFNBQWEsU0FBYkEsU0FBYTtBQUM1QyxtQkFBVUMscUVBQVYsa0JBQXFDRixRQUFyQyxrQkFBcURDLFNBQXJEO0FBQ0Q7O0FBRWNsQiwrRUFBZiIsImZpbGUiOiIuL3NyYy9ob29rcy91c2VSZXZlcnNlTG9va3VwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB1c2VTV1IgZnJvbSAnc3dyJztcbmltcG9ydCB1c2VDdXJyZW50Q29vcmRzIGZyb20gJy4vdXNlQ3VycmVudENvb3Jkcyc7XG5pbXBvcnQgeyBSRVZFUlNFX0dFT0NPREVfVVJMIH0gZnJvbSAnLi4vY29uZmlnL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnLi4vdXRpbHMvZmV0Y2hlcic7XG5pbXBvcnQgeyBsb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi91dGlscy9sb2NhbFN0b3JhZ2UnO1xuXG5mdW5jdGlvbiB1c2VSZXZlcnNlTG9va3VwKCkge1xuICBjb25zdCB7IGNvb3JkcyB9ID0gdXNlQ3VycmVudENvb3JkcygpO1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IoZ2VuZXJhdGVVcmwoY29vcmRzKSwgZmV0Y2hlciwge1xuICAgIG9uRXJyb3IoKSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdhZGRyZXNzJyk7XG4gICAgfSxcbiAgICBvblN1Y2Nlc3MoeyBhZGRyZXNzIH0pIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhZGRyZXNzJywgYWRkcmVzcyk7XG4gICAgfSxcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBkYXRhLFxuICAgIGVycm9yOiBlcnJvciB8fCAoZGF0YSAmJiBkYXRhLmVycm9yKSxcbiAgICBsb2FkaW5nOiAhZGF0YSAmJiAhZXJyb3IsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVXJsKHsgbGF0aXR1ZGUsIGxvbmdpdHVkZSB9KSB7XG4gIHJldHVybiBgJHtSRVZFUlNFX0dFT0NPREVfVVJMfSZsYXQ9JHtsYXRpdHVkZX0mbG9uPSR7bG9uZ2l0dWRlfWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVJldmVyc2VMb29rdXA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/hooks/useReverseLookup.js\n");

/***/ })

})