webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/CoordsProvider/CoordsProvider.js":
/*!*********************************************************!*\
  !*** ./src/components/CoordsProvider/CoordsProvider.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ErrorFallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorFallback */ \"./src/components/ErrorFallback/index.js\");\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Loader */ \"./src/components/Loader/index.js\");\n/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts */ \"./src/contexts/index.js\");\n/* harmony import */ var _utils_sessionStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/sessionStorage */ \"./src/utils/sessionStorage.js\");\nvar _jsxFileName = \"/Users/cn182266/Personal/local-weather/src/components/CoordsProvider/CoordsProvider.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction CoordsProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      coords = _useState[0],\n      setCoords = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      error = _useState2[0],\n      setError = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var savedCoords = _utils_sessionStorage__WEBPACK_IMPORTED_MODULE_4__[\"storage\"].getItem('coords');\n    console.log(savedCoords);\n\n    if (savedCoords) {\n      setCoords(savedCoords);\n      return;\n    }\n\n    navigator.geolocation.getCurrentPosition(function (_ref2) {\n      var coords = _ref2.coords;\n      setCoords(coords);\n      _utils_sessionStorage__WEBPACK_IMPORTED_MODULE_4__[\"storage\"].setItem('coords', {\n        latitude: coords.latitude,\n        longitude: coords.longitude\n      });\n    }, function (geoError) {\n      setError(geoError);\n    });\n  }, []);\n\n  if (error) {\n    return __jsx(_ErrorFallback__WEBPACK_IMPORTED_MODULE_1__[\"ErrorFallback\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 12\n      }\n    });\n  }\n\n  if (!coords) {\n    return __jsx(_Loader__WEBPACK_IMPORTED_MODULE_2__[\"Loader\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 12\n      }\n    });\n  }\n\n  return __jsx(_contexts__WEBPACK_IMPORTED_MODULE_3__[\"CoordsContext\"].Provider, {\n    value: {\n      coords: coords,\n      error: error\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, children);\n}\n\n_s(CoordsProvider, \"H9cCDzu4sTpG1PqhQYWqxbE6NVQ=\");\n\n_c = CoordsProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoordsProvider);\n\nvar _c;\n\n$RefreshReg$(_c, \"CoordsProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db29yZHNQcm92aWRlci9Db29yZHNQcm92aWRlci5qcz8xMTgwIl0sIm5hbWVzIjpbIkNvb3Jkc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImNvb3JkcyIsInNldENvb3JkcyIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VFZmZlY3QiLCJzYXZlZENvb3JkcyIsInN0b3JhZ2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwic2V0SXRlbSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwiZ2VvRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsY0FBVCxPQUFzQztBQUFBOztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFBQSxrQkFDUkMsc0RBQVEsQ0FBQyxJQUFELENBREE7QUFBQSxNQUM3QkMsTUFENkI7QUFBQSxNQUNyQkMsU0FEcUI7O0FBQUEsbUJBRVZGLHNEQUFRLENBQUMsSUFBRCxDQUZFO0FBQUEsTUFFN0JHLEtBRjZCO0FBQUEsTUFFdEJDLFFBRnNCOztBQUlwQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsV0FBVyxHQUFHQyw2REFBTyxDQUFDQyxPQUFSLENBQWdCLFFBQWhCLENBQXBCO0FBRUFDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSixXQUFaOztBQUVBLFFBQUlBLFdBQUosRUFBaUI7QUFDZkosZUFBUyxDQUFDSSxXQUFELENBQVQ7QUFDQTtBQUNEOztBQUVESyxhQUFTLENBQUNDLFdBQVYsQ0FBc0JDLGtCQUF0QixDQUNFLGlCQUFnQjtBQUFBLFVBQWJaLE1BQWEsU0FBYkEsTUFBYTtBQUNkQyxlQUFTLENBQUNELE1BQUQsQ0FBVDtBQUNBTSxtRUFBTyxDQUFDTyxPQUFSLENBQWdCLFFBQWhCLEVBQTBCO0FBQ3hCQyxnQkFBUSxFQUFFZCxNQUFNLENBQUNjLFFBRE87QUFFeEJDLGlCQUFTLEVBQUVmLE1BQU0sQ0FBQ2U7QUFGTSxPQUExQjtBQUlELEtBUEgsRUFRRSxVQUFDQyxRQUFELEVBQWM7QUFDWmIsY0FBUSxDQUFDYSxRQUFELENBQVI7QUFDRCxLQVZIO0FBWUQsR0F0QlEsRUFzQk4sRUF0Qk0sQ0FBVDs7QUF3QkEsTUFBSWQsS0FBSixFQUFXO0FBQ1QsV0FBTyxNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNEOztBQUVELE1BQUksQ0FBQ0YsTUFBTCxFQUFhO0FBQ1gsV0FBTyxNQUFDLDhDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBUDtBQUNEOztBQUVELFNBQ0UsTUFBQyx1REFBRCxDQUFlLFFBQWY7QUFBd0IsU0FBSyxFQUFFO0FBQUVBLFlBQU0sRUFBTkEsTUFBRjtBQUFVRSxXQUFLLEVBQUxBO0FBQVYsS0FBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSixRQURILENBREY7QUFLRDs7R0F6Q1FELGM7O0tBQUFBLGM7QUEyQ01BLDZFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQ29vcmRzUHJvdmlkZXIvQ29vcmRzUHJvdmlkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRXJyb3JGYWxsYmFjayB9IGZyb20gJy4uL0Vycm9yRmFsbGJhY2snO1xuaW1wb3J0IHsgTG9hZGVyIH0gZnJvbSAnLi4vTG9hZGVyJztcbmltcG9ydCB7IENvb3Jkc0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cyc7XG5pbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Vzc2lvblN0b3JhZ2UnO1xuXG5mdW5jdGlvbiBDb29yZHNQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgY29uc3QgW2Nvb3Jkcywgc2V0Q29vcmRzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3Qgc2F2ZWRDb29yZHMgPSBzdG9yYWdlLmdldEl0ZW0oJ2Nvb3JkcycpO1xuXG4gICAgY29uc29sZS5sb2coc2F2ZWRDb29yZHMpO1xuXG4gICAgaWYgKHNhdmVkQ29vcmRzKSB7XG4gICAgICBzZXRDb29yZHMoc2F2ZWRDb29yZHMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAoeyBjb29yZHMgfSkgPT4ge1xuICAgICAgICBzZXRDb29yZHMoY29vcmRzKTtcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKCdjb29yZHMnLCB7XG4gICAgICAgICAgbGF0aXR1ZGU6IGNvb3Jkcy5sYXRpdHVkZSxcbiAgICAgICAgICBsb25naXR1ZGU6IGNvb3Jkcy5sb25naXR1ZGUsXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIChnZW9FcnJvcikgPT4ge1xuICAgICAgICBzZXRFcnJvcihnZW9FcnJvcik7XG4gICAgICB9LFxuICAgICk7XG4gIH0sIFtdKTtcblxuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4gPEVycm9yRmFsbGJhY2sgLz47XG4gIH1cblxuICBpZiAoIWNvb3Jkcykge1xuICAgIHJldHVybiA8TG9hZGVyIC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29vcmRzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjb29yZHMsIGVycm9yIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ29vcmRzQ29udGV4dC5Qcm92aWRlcj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29vcmRzUHJvdmlkZXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CoordsProvider/CoordsProvider.js\n");

/***/ }),

/***/ "./src/utils/sessionStorage.js":
/*!*************************************!*\
  !*** ./src/utils/sessionStorage.js ***!
  \*************************************/
/*! exports provided: storage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storage\", function() { return storage; });\nfunction getItem(key) {\n  var item = window.sessionStorage.getItem(key);\n\n  if (item) {\n    return JSON.stringify(item);\n  }\n\n  return null;\n}\n\nfunction setItem(key, value) {\n  window.sessionStorage.setItem(key, JSON.stringify(value));\n}\n\nvar storage = {\n  getItem: getItem,\n  setItem: setItem\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2Vzc2lvblN0b3JhZ2UuanM/NjdlMiJdLCJuYW1lcyI6WyJnZXRJdGVtIiwia2V5IiwiaXRlbSIsIndpbmRvdyIsInNlc3Npb25TdG9yYWdlIiwiSlNPTiIsInN0cmluZ2lmeSIsInNldEl0ZW0iLCJ2YWx1ZSIsInN0b3JhZ2UiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQSxTQUFTQSxPQUFULENBQWlCQyxHQUFqQixFQUFzQjtBQUNwQixNQUFNQyxJQUFJLEdBQUdDLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkosT0FBdEIsQ0FBOEJDLEdBQTlCLENBQWI7O0FBRUEsTUFBSUMsSUFBSixFQUFVO0FBQ1IsV0FBT0csSUFBSSxDQUFDQyxTQUFMLENBQWVKLElBQWYsQ0FBUDtBQUNEOztBQUVELFNBQU8sSUFBUDtBQUNEOztBQUVELFNBQVNLLE9BQVQsQ0FBaUJOLEdBQWpCLEVBQXNCTyxLQUF0QixFQUE2QjtBQUMzQkwsUUFBTSxDQUFDQyxjQUFQLENBQXNCRyxPQUF0QixDQUE4Qk4sR0FBOUIsRUFBbUNJLElBQUksQ0FBQ0MsU0FBTCxDQUFlRSxLQUFmLENBQW5DO0FBQ0Q7O0FBRU0sSUFBTUMsT0FBTyxHQUFHO0FBQ3JCVCxTQUFPLEVBQVBBLE9BRHFCO0FBRXJCTyxTQUFPLEVBQVBBO0FBRnFCLENBQWhCIiwiZmlsZSI6Ii4vc3JjL3V0aWxzL3Nlc3Npb25TdG9yYWdlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2V0SXRlbShrZXkpIHtcbiAgY29uc3QgaXRlbSA9IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGtleSk7XG5cbiAgaWYgKGl0ZW0pIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoaXRlbSk7XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZnVuY3Rpb24gc2V0SXRlbShrZXksIHZhbHVlKSB7XG4gIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbn1cblxuZXhwb3J0IGNvbnN0IHN0b3JhZ2UgPSB7XG4gIGdldEl0ZW0sXG4gIHNldEl0ZW0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/sessionStorage.js\n");

/***/ })

})