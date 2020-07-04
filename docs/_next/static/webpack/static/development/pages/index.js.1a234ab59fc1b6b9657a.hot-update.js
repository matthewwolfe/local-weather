webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/CoordsProvider/CoordsProvider.js":
/*!*********************************************************!*\
  !*** ./src/components/CoordsProvider/CoordsProvider.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ErrorFallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorFallback */ \"./src/components/ErrorFallback/index.js\");\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Loader */ \"./src/components/Loader/index.js\");\n/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts */ \"./src/contexts/index.js\");\nvar _jsxFileName = \"/Users/cn182266/Personal/local-weather/src/components/CoordsProvider/CoordsProvider.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\nfunction CoordsProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      coords = _useState[0],\n      setCoords = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      error = _useState2[0],\n      setError = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    navigator.geolocation.getCurrentPosition(function (_ref2) {\n      var coords = _ref2.coords;\n      setCoords(coords);\n    }, function (geoError) {\n      setError(geoError);\n    });\n  }, []);\n\n  if (error) {\n    return __jsx(_ErrorFallback__WEBPACK_IMPORTED_MODULE_1__[\"ErrorFallback\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 12\n      }\n    });\n  }\n\n  if (!coords) {\n    return __jsx(_Loader__WEBPACK_IMPORTED_MODULE_2__[\"Loader\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 12\n      }\n    });\n  }\n\n  return __jsx(_contexts__WEBPACK_IMPORTED_MODULE_3__[\"CoordsContext\"].Provider, {\n    value: {\n      coords: coords,\n      error: error\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 5\n    }\n  }, children);\n}\n\n_s(CoordsProvider, \"H9cCDzu4sTpG1PqhQYWqxbE6NVQ=\");\n\n_c = CoordsProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoordsProvider);\n\nvar _c;\n\n$RefreshReg$(_c, \"CoordsProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db29yZHNQcm92aWRlci9Db29yZHNQcm92aWRlci5qcz8xMTgwIl0sIm5hbWVzIjpbIkNvb3Jkc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImNvb3JkcyIsInNldENvb3JkcyIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VFZmZlY3QiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImdlb0Vycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsT0FBc0M7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBQ1JDLHNEQUFRLENBQUMsSUFBRCxDQURBO0FBQUEsTUFDN0JDLE1BRDZCO0FBQUEsTUFDckJDLFNBRHFCOztBQUFBLG1CQUVWRixzREFBUSxDQUFDLElBQUQsQ0FGRTtBQUFBLE1BRTdCRyxLQUY2QjtBQUFBLE1BRXRCQyxRQUZzQjs7QUFJcENDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxhQUFTLENBQUNDLFdBQVYsQ0FBc0JDLGtCQUF0QixDQUNFLGlCQUFnQjtBQUFBLFVBQWJQLE1BQWEsU0FBYkEsTUFBYTtBQUNkQyxlQUFTLENBQUNELE1BQUQsQ0FBVDtBQUNELEtBSEgsRUFJRSxVQUFDUSxRQUFELEVBQWM7QUFDWkwsY0FBUSxDQUFDSyxRQUFELENBQVI7QUFDRCxLQU5IO0FBUUQsR0FUUSxFQVNOLEVBVE0sQ0FBVDs7QUFXQSxNQUFJTixLQUFKLEVBQVc7QUFDVCxXQUFPLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0Q7O0FBRUQsTUFBSSxDQUFDRixNQUFMLEVBQWE7QUFDWCxXQUFPLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0Q7O0FBRUQsU0FDRSxNQUFDLHVEQUFELENBQWUsUUFBZjtBQUF3QixTQUFLLEVBQUU7QUFBRUEsWUFBTSxFQUFOQSxNQUFGO0FBQVVFLFdBQUssRUFBTEE7QUFBVixLQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dKLFFBREgsQ0FERjtBQUtEOztHQTVCUUQsYzs7S0FBQUEsYztBQThCTUEsNkVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db29yZHNQcm92aWRlci9Db29yZHNQcm92aWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBFcnJvckZhbGxiYWNrIH0gZnJvbSAnLi4vRXJyb3JGYWxsYmFjayc7XG5pbXBvcnQgeyBMb2FkZXIgfSBmcm9tICcuLi9Mb2FkZXInO1xuaW1wb3J0IHsgQ29vcmRzQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzJztcblxuZnVuY3Rpb24gQ29vcmRzUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtjb29yZHMsIHNldENvb3Jkc10gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAoeyBjb29yZHMgfSkgPT4ge1xuICAgICAgICBzZXRDb29yZHMoY29vcmRzKTtcbiAgICAgIH0sXG4gICAgICAoZ2VvRXJyb3IpID0+IHtcbiAgICAgICAgc2V0RXJyb3IoZ2VvRXJyb3IpO1xuICAgICAgfSxcbiAgICApO1xuICB9LCBbXSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxFcnJvckZhbGxiYWNrIC8+O1xuICB9XG5cbiAgaWYgKCFjb29yZHMpIHtcbiAgICByZXR1cm4gPExvYWRlciAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvb3Jkc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY29vcmRzLCBlcnJvciB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0Nvb3Jkc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvb3Jkc1Byb3ZpZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/CoordsProvider/CoordsProvider.js\n");

/***/ }),

/***/ "./src/components/ErrorFallback/ErrorFallback.js":
/*!*******************************************************!*\
  !*** ./src/components/ErrorFallback/ErrorFallback.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\nvar _jsxFileName = \"/Users/cn182266/Personal/local-weather/src/components/ErrorFallback/ErrorFallback.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction ErrorFallback() {\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    p: 5,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, \"Something went wrong. Either the API could not be reached, or permission to access location was not granted.\"));\n}\n\n_c = ErrorFallback;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorFallback);\n\nvar _c;\n\n$RefreshReg$(_c, \"ErrorFallback\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FcnJvckZhbGxiYWNrL0Vycm9yRmFsbGJhY2suanM/NDg0NCJdLCJuYW1lcyI6WyJFcnJvckZhbGxiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsYUFBVCxHQUF5QjtBQUN2QixTQUNFLE1BQUMscURBQUQ7QUFBSyxLQUFDLEVBQUUsQ0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9IQURGLENBREY7QUFRRDs7S0FUUUEsYTtBQVdNQSw0RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0Vycm9yRmFsbGJhY2svRXJyb3JGYWxsYmFjay5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuZnVuY3Rpb24gRXJyb3JGYWxsYmFjaygpIHtcbiAgcmV0dXJuIChcbiAgICA8Qm94IHA9ezV9PlxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+XG4gICAgICAgIFNvbWV0aGluZyB3ZW50IHdyb25nLiBFaXRoZXIgdGhlIEFQSSBjb3VsZCBub3QgYmUgcmVhY2hlZCwgb3IgcGVybWlzc2lvblxuICAgICAgICB0byBhY2Nlc3MgbG9jYXRpb24gd2FzIG5vdCBncmFudGVkLlxuICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgIDwvQm94PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBFcnJvckZhbGxiYWNrO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ErrorFallback/ErrorFallback.js\n");

/***/ }),

/***/ "./src/components/ErrorFallback/index.js":
/*!***********************************************!*\
  !*** ./src/components/ErrorFallback/index.js ***!
  \***********************************************/
/*! exports provided: ErrorFallback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _ErrorFallback__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorFallback */ \"./src/components/ErrorFallback/ErrorFallback.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ErrorFallback\", function() { return _ErrorFallback__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9FcnJvckZhbGxiYWNrL2luZGV4LmpzPzEyOGQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0Vycm9yRmFsbGJhY2svaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBkZWZhdWx0IGFzIEVycm9yRmFsbGJhY2sgfSBmcm9tICcuL0Vycm9yRmFsbGJhY2snO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ErrorFallback/index.js\n");

/***/ }),

/***/ "./src/components/WeatherProvider/WeatherProvider.js":
/*!***********************************************************!*\
  !*** ./src/components/WeatherProvider/WeatherProvider.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ErrorFallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorFallback */ \"./src/components/ErrorFallback/index.js\");\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Loader */ \"./src/components/Loader/index.js\");\n/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts */ \"./src/contexts/index.js\");\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.js\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks */ \"./src/hooks/index.js\");\n/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/fetcher */ \"./src/utils/fetcher.js\");\nvar _jsxFileName = \"/Users/cn182266/Personal/local-weather/src/components/WeatherProvider/WeatherProvider.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n\nfunction WeatherProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useGetForecast = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useGetForecast\"])(_config_constants__WEBPACK_IMPORTED_MODULE_4__[\"DAILY_FORECAST_URL\"]),\n      dailyData = _useGetForecast.data,\n      dailyError = _useGetForecast.error;\n\n  var _useGetForecast2 = Object(_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useGetForecast\"])(_config_constants__WEBPACK_IMPORTED_MODULE_4__[\"HOURLY_FORECAST_URL\"]),\n      hourlyData = _useGetForecast2.data,\n      hourlyError = _useGetForecast2.error;\n\n  if (dailyError || hourlyError) {\n    return __jsx(_ErrorFallback__WEBPACK_IMPORTED_MODULE_1__[\"ErrorFallback\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 21,\n        columnNumber: 12\n      }\n    });\n  }\n\n  if (!dailyData || !hourlyData) {\n    return __jsx(_Loader__WEBPACK_IMPORTED_MODULE_2__[\"Loader\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 12\n      }\n    });\n  }\n\n  return __jsx(_contexts__WEBPACK_IMPORTED_MODULE_3__[\"WeatherContext\"].Provider, {\n    value: {\n      dailyData: dailyData,\n      hourlyData: hourlyData\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 5\n    }\n  }, children);\n}\n\n_s(WeatherProvider, \"U+WxBXWx6AfIJBYST7fNlPCOG00=\", false, function () {\n  return [_hooks__WEBPACK_IMPORTED_MODULE_5__[\"useGetForecast\"], _hooks__WEBPACK_IMPORTED_MODULE_5__[\"useGetForecast\"]];\n});\n\n_c = WeatherProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WeatherProvider);\n\nvar _c;\n\n$RefreshReg$(_c, \"WeatherProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XZWF0aGVyUHJvdmlkZXIvV2VhdGhlclByb3ZpZGVyLmpzPzMwYjkiXSwibmFtZXMiOlsiV2VhdGhlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VHZXRGb3JlY2FzdCIsIkRBSUxZX0ZPUkVDQVNUX1VSTCIsImRhaWx5RGF0YSIsImRhdGEiLCJkYWlseUVycm9yIiwiZXJyb3IiLCJIT1VSTFlfRk9SRUNBU1RfVVJMIiwiaG91cmx5RGF0YSIsImhvdXJseUVycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7QUFFQSxTQUFTQSxlQUFULE9BQXVDO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZOztBQUFBLHdCQUNVQyw2REFBYyxDQUMzREMsb0VBRDJELENBRHhCO0FBQUEsTUFDdkJDLFNBRHVCLG1CQUM3QkMsSUFENkI7QUFBQSxNQUNMQyxVQURLLG1CQUNaQyxLQURZOztBQUFBLHlCQUtZTCw2REFBYyxDQUM3RE0scUVBRDZELENBTDFCO0FBQUEsTUFLdkJDLFVBTHVCLG9CQUs3QkosSUFMNkI7QUFBQSxNQUtKSyxXQUxJLG9CQUtYSCxLQUxXOztBQVNyQyxNQUFJRCxVQUFVLElBQUlJLFdBQWxCLEVBQStCO0FBQzdCLFdBQU8sTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDRDs7QUFFRCxNQUFJLENBQUNOLFNBQUQsSUFBYyxDQUFDSyxVQUFuQixFQUErQjtBQUM3QixXQUFPLE1BQUMsOENBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFQO0FBQ0Q7O0FBRUQsU0FDRSxNQUFDLHdEQUFELENBQWdCLFFBQWhCO0FBQXlCLFNBQUssRUFBRTtBQUFFTCxlQUFTLEVBQVRBLFNBQUY7QUFBYUssZ0JBQVUsRUFBVkE7QUFBYixLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dSLFFBREgsQ0FERjtBQUtEOztHQXRCUUQsZTtVQUN3Q0UscUQsRUFJRUEscUQ7OztLQUwxQ0YsZTtBQXdCTUEsOEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9XZWF0aGVyUHJvdmlkZXIvV2VhdGhlclByb3ZpZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXJyb3JGYWxsYmFjayB9IGZyb20gJy4uL0Vycm9yRmFsbGJhY2snO1xuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vTG9hZGVyJztcbmltcG9ydCB7IFdlYXRoZXJDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMnO1xuaW1wb3J0IHtcbiAgREFJTFlfRk9SRUNBU1RfVVJMLFxuICBIT1VSTFlfRk9SRUNBU1RfVVJMLFxufSBmcm9tICcuLi8uLi9jb25maWcvY29uc3RhbnRzJztcbmltcG9ydCB7IHVzZUdldEZvcmVjYXN0IH0gZnJvbSAnLi4vLi4vaG9va3MnO1xuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoZXInO1xuXG5mdW5jdGlvbiBXZWF0aGVyUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IHsgZGF0YTogZGFpbHlEYXRhLCBlcnJvcjogZGFpbHlFcnJvciB9ID0gdXNlR2V0Rm9yZWNhc3QoXG4gICAgREFJTFlfRk9SRUNBU1RfVVJMLFxuICApO1xuXG4gIGNvbnN0IHsgZGF0YTogaG91cmx5RGF0YSwgZXJyb3I6IGhvdXJseUVycm9yIH0gPSB1c2VHZXRGb3JlY2FzdChcbiAgICBIT1VSTFlfRk9SRUNBU1RfVVJMLFxuICApO1xuXG4gIGlmIChkYWlseUVycm9yIHx8IGhvdXJseUVycm9yKSB7XG4gICAgcmV0dXJuIDxFcnJvckZhbGxiYWNrIC8+O1xuICB9XG5cbiAgaWYgKCFkYWlseURhdGEgfHwgIWhvdXJseURhdGEpIHtcbiAgICByZXR1cm4gPExvYWRlciAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFdlYXRoZXJDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGRhaWx5RGF0YSwgaG91cmx5RGF0YSB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1dlYXRoZXJDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyUHJvdmlkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/WeatherProvider/WeatherProvider.js\n");

/***/ })

})