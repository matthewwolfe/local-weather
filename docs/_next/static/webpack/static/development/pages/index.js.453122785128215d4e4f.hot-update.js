webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/CoordsProvider/CoordsProvider.js":
/*!*********************************************************!*\
  !*** ./src/components/CoordsProvider/CoordsProvider.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ErrorFallback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorFallback */ \"./src/components/ErrorFallback/index.js\");\n/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Loader */ \"./src/components/Loader/index.js\");\n/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts */ \"./src/contexts/index.js\");\n/* harmony import */ var _utils_sessionStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/sessionStorage */ \"./src/utils/sessionStorage.js\");\nvar _jsxFileName = \"/Users/cn182266/Personal/local-weather/src/components/CoordsProvider/CoordsProvider.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction CoordsProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      coords = _useState[0],\n      setCoords = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      error = _useState2[0],\n      setError = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var savedCoords = _utils_sessionStorage__WEBPACK_IMPORTED_MODULE_4__[\"sessionStorage\"].getItem('coords');\n    console.log(savedCoords);\n\n    if (savedCoords) {\n      setCoords(savedCoords);\n      return;\n    }\n\n    navigator.geolocation.getCurrentPosition(function (_ref2) {\n      var coords = _ref2.coords;\n      setCoords(coords);\n      _utils_sessionStorage__WEBPACK_IMPORTED_MODULE_4__[\"sessionStorage\"].setItem('coords', {\n        latitude: coords.latitude,\n        longitude: coords.longitude\n      });\n    }, function (geoError) {\n      setError(geoError);\n    });\n  }, []);\n\n  if (error) {\n    return __jsx(_ErrorFallback__WEBPACK_IMPORTED_MODULE_1__[\"ErrorFallback\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 12\n      }\n    });\n  }\n\n  if (!coords) {\n    return __jsx(_Loader__WEBPACK_IMPORTED_MODULE_2__[\"Loader\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 12\n      }\n    });\n  }\n\n  return __jsx(_contexts__WEBPACK_IMPORTED_MODULE_3__[\"CoordsContext\"].Provider, {\n    value: {\n      coords: coords,\n      error: error\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, children);\n}\n\n_s(CoordsProvider, \"H9cCDzu4sTpG1PqhQYWqxbE6NVQ=\");\n\n_c = CoordsProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoordsProvider);\n\nvar _c;\n\n$RefreshReg$(_c, \"CoordsProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db29yZHNQcm92aWRlci9Db29yZHNQcm92aWRlci5qcz8xMTgwIl0sIm5hbWVzIjpbIkNvb3Jkc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImNvb3JkcyIsInNldENvb3JkcyIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VFZmZlY3QiLCJzYXZlZENvb3JkcyIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInNldEl0ZW0iLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImdlb0Vycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsT0FBc0M7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBQ1JDLHNEQUFRLENBQUMsSUFBRCxDQURBO0FBQUEsTUFDN0JDLE1BRDZCO0FBQUEsTUFDckJDLFNBRHFCOztBQUFBLG1CQUVWRixzREFBUSxDQUFDLElBQUQsQ0FGRTtBQUFBLE1BRTdCRyxLQUY2QjtBQUFBLE1BRXRCQyxRQUZzQjs7QUFJcENDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFdBQVcsR0FBR0Msb0VBQWMsQ0FBQ0MsT0FBZixDQUF1QixRQUF2QixDQUFwQjtBQUVBQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUosV0FBWjs7QUFFQSxRQUFJQSxXQUFKLEVBQWlCO0FBQ2ZKLGVBQVMsQ0FBQ0ksV0FBRCxDQUFUO0FBQ0E7QUFDRDs7QUFFREssYUFBUyxDQUFDQyxXQUFWLENBQXNCQyxrQkFBdEIsQ0FDRSxpQkFBZ0I7QUFBQSxVQUFiWixNQUFhLFNBQWJBLE1BQWE7QUFDZEMsZUFBUyxDQUFDRCxNQUFELENBQVQ7QUFDQU0sMEVBQWMsQ0FBQ08sT0FBZixDQUF1QixRQUF2QixFQUFpQztBQUMvQkMsZ0JBQVEsRUFBRWQsTUFBTSxDQUFDYyxRQURjO0FBRS9CQyxpQkFBUyxFQUFFZixNQUFNLENBQUNlO0FBRmEsT0FBakM7QUFJRCxLQVBILEVBUUUsVUFBQ0MsUUFBRCxFQUFjO0FBQ1piLGNBQVEsQ0FBQ2EsUUFBRCxDQUFSO0FBQ0QsS0FWSDtBQVlELEdBdEJRLEVBc0JOLEVBdEJNLENBQVQ7O0FBd0JBLE1BQUlkLEtBQUosRUFBVztBQUNULFdBQU8sTUFBQyw0REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDRDs7QUFFRCxNQUFJLENBQUNGLE1BQUwsRUFBYTtBQUNYLFdBQU8sTUFBQyw4Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQVA7QUFDRDs7QUFFRCxTQUNFLE1BQUMsdURBQUQsQ0FBZSxRQUFmO0FBQXdCLFNBQUssRUFBRTtBQUFFQSxZQUFNLEVBQU5BLE1BQUY7QUFBVUUsV0FBSyxFQUFMQTtBQUFWLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0osUUFESCxDQURGO0FBS0Q7O0dBekNRRCxjOztLQUFBQSxjO0FBMkNNQSw2RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0Nvb3Jkc1Byb3ZpZGVyL0Nvb3Jkc1Byb3ZpZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEVycm9yRmFsbGJhY2sgfSBmcm9tICcuLi9FcnJvckZhbGxiYWNrJztcbmltcG9ydCB7IExvYWRlciB9IGZyb20gJy4uL0xvYWRlcic7XG5pbXBvcnQgeyBDb29yZHNDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dHMnO1xuaW1wb3J0IHsgc2Vzc2lvblN0b3JhZ2UgfSBmcm9tICcuLi8uLi91dGlscy9zZXNzaW9uU3RvcmFnZSc7XG5cbmZ1bmN0aW9uIENvb3Jkc1Byb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbY29vcmRzLCBzZXRDb29yZHNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzYXZlZENvb3JkcyA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2Nvb3JkcycpO1xuXG4gICAgY29uc29sZS5sb2coc2F2ZWRDb29yZHMpO1xuXG4gICAgaWYgKHNhdmVkQ29vcmRzKSB7XG4gICAgICBzZXRDb29yZHMoc2F2ZWRDb29yZHMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAoeyBjb29yZHMgfSkgPT4ge1xuICAgICAgICBzZXRDb29yZHMoY29vcmRzKTtcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnY29vcmRzJywge1xuICAgICAgICAgIGxhdGl0dWRlOiBjb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiBjb29yZHMubG9uZ2l0dWRlLFxuICAgICAgICB9KTtcbiAgICAgIH0sXG4gICAgICAoZ2VvRXJyb3IpID0+IHtcbiAgICAgICAgc2V0RXJyb3IoZ2VvRXJyb3IpO1xuICAgICAgfSxcbiAgICApO1xuICB9LCBbXSk7XG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIDxFcnJvckZhbGxiYWNrIC8+O1xuICB9XG5cbiAgaWYgKCFjb29yZHMpIHtcbiAgICByZXR1cm4gPExvYWRlciAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvb3Jkc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY29vcmRzLCBlcnJvciB9fT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0Nvb3Jkc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvb3Jkc1Byb3ZpZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/CoordsProvider/CoordsProvider.js\n");

/***/ })

})