webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/CoordsProvider/CoordsProvider.js":
/*!*********************************************************!*\
  !*** ./src/components/CoordsProvider/CoordsProvider.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contexts */ \"./src/contexts/index.js\");\nvar _jsxFileName = \"/Users/cn182266/Personal/local-weather/src/components/CoordsProvider/CoordsProvider.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction CoordsProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      coords = _useState[0],\n      setCoords = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(null),\n      error = _useState2[0],\n      setError = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    navigator.geolocation.getCurrentPosition(function (_ref2) {\n      var coords = _ref2.coords;\n      setCoords(coords);\n    }, function (geoError) {\n      setError(geoError);\n    });\n  }, []);\n  return __jsx(_contexts__WEBPACK_IMPORTED_MODULE_1__[\"CoordsContext\"].Provider, {\n    value: {\n      coords: coords,\n      error: error\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, children);\n}\n\n_s(CoordsProvider, \"H9cCDzu4sTpG1PqhQYWqxbE6NVQ=\");\n\n_c = CoordsProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoordsProvider);\n\nvar _c;\n\n$RefreshReg$(_c, \"CoordsProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db29yZHNQcm92aWRlci9Db29yZHNQcm92aWRlci5qcz8xMTgwIl0sIm5hbWVzIjpbIkNvb3Jkc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VTdGF0ZSIsImNvb3JkcyIsInNldENvb3JkcyIsImVycm9yIiwic2V0RXJyb3IiLCJ1c2VFZmZlY3QiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImdlb0Vycm9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLGNBQVQsT0FBc0M7QUFBQTs7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBQUEsa0JBQ1JDLHNEQUFRLENBQUMsSUFBRCxDQURBO0FBQUEsTUFDN0JDLE1BRDZCO0FBQUEsTUFDckJDLFNBRHFCOztBQUFBLG1CQUVWRixzREFBUSxDQUFDLElBQUQsQ0FGRTtBQUFBLE1BRTdCRyxLQUY2QjtBQUFBLE1BRXRCQyxRQUZzQjs7QUFJcENDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxhQUFTLENBQUNDLFdBQVYsQ0FBc0JDLGtCQUF0QixDQUNFLGlCQUFnQjtBQUFBLFVBQWJQLE1BQWEsU0FBYkEsTUFBYTtBQUNkQyxlQUFTLENBQUNELE1BQUQsQ0FBVDtBQUNELEtBSEgsRUFJRSxVQUFDUSxRQUFELEVBQWM7QUFDWkwsY0FBUSxDQUFDSyxRQUFELENBQVI7QUFDRCxLQU5IO0FBUUQsR0FUUSxFQVNOLEVBVE0sQ0FBVDtBQVdBLFNBQ0UsTUFBQyx1REFBRCxDQUFlLFFBQWY7QUFDRSxTQUFLLEVBQUU7QUFDTFIsWUFBTSxFQUFOQSxNQURLO0FBRUxFLFdBQUssRUFBTEE7QUFGSyxLQURUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FNR0osUUFOSCxDQURGO0FBVUQ7O0dBekJRRCxjOztLQUFBQSxjO0FBMkJNQSw2RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0Nvb3Jkc1Byb3ZpZGVyL0Nvb3Jkc1Byb3ZpZGVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IENvb3Jkc0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0cyc7XG5cbmZ1bmN0aW9uIENvb3Jkc1Byb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xuICBjb25zdCBbY29vcmRzLCBzZXRDb29yZHNdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKFxuICAgICAgKHsgY29vcmRzIH0pID0+IHtcbiAgICAgICAgc2V0Q29vcmRzKGNvb3Jkcyk7XG4gICAgICB9LFxuICAgICAgKGdlb0Vycm9yKSA9PiB7XG4gICAgICAgIHNldEVycm9yKGdlb0Vycm9yKTtcbiAgICAgIH0sXG4gICAgKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPENvb3Jkc0NvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGNvb3JkcyxcbiAgICAgICAgZXJyb3IsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0Nvb3Jkc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvb3Jkc1Byb3ZpZGVyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/CoordsProvider/CoordsProvider.js\n");

/***/ })

})