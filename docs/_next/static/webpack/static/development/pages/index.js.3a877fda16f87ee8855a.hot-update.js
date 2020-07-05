webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/TodayOverview/PrecipitationChart.js":
/*!************************************************************!*\
  !*** ./src/components/TodayOverview/PrecipitationChart.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/es/index.js\");\nvar _jsxFileName = \"/Users/cn182266/Personal/local-weather/src/components/TodayOverview/PrecipitationChart.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction PrecipitationChart(_ref) {\n  _s();\n\n  var precipChance = _ref.precipChance,\n      relativeHumidity = _ref.relativeHumidity,\n      validTimeLocal = _ref.validTimeLocal;\n  var timeLabels = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    return validTimeLocal.map(function (date) {\n      return new Date(date).toLocaleTimeString('en-US', {\n        hour: 'numeric',\n        minute: '2-digit'\n      });\n    });\n  }, [validTimeLocal]);\n  return __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__[\"Line\"], {\n    data: {\n      labels: timeLabels,\n      datasets: [{\n        backgroundColor: '#f00',\n        label: 'Humidity',\n        data: relativeHumidity,\n        full: true\n      }, {\n        backgroundColor: '#367ee9',\n        label: 'Precipitation',\n        data: precipChance,\n        fill: true\n      }]\n    },\n    options: {\n      scales: {\n        yAxes: [{\n          ticks: {\n            stepSize: 10,\n            suggestedMin: 0,\n            suggestedMax: 100\n          }\n        }]\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  });\n}\n\n_s(PrecipitationChart, \"LSyyKIG7JFYevIhHnwZW59BJHrc=\");\n\n_c = PrecipitationChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PrecipitationChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"PrecipitationChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub2RheU92ZXJ2aWV3L1ByZWNpcGl0YXRpb25DaGFydC5qcz9kZGI5Il0sIm5hbWVzIjpbIlByZWNpcGl0YXRpb25DaGFydCIsInByZWNpcENoYW5jZSIsInJlbGF0aXZlSHVtaWRpdHkiLCJ2YWxpZFRpbWVMb2NhbCIsInRpbWVMYWJlbHMiLCJ1c2VNZW1vIiwibWFwIiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJob3VyIiwibWludXRlIiwibGFiZWxzIiwiZGF0YXNldHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsYWJlbCIsImRhdGEiLCJmdWxsIiwiZmlsbCIsInNjYWxlcyIsInlBeGVzIiwidGlja3MiLCJzdGVwU2l6ZSIsInN1Z2dlc3RlZE1pbiIsInN1Z2dlc3RlZE1heCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxrQkFBVCxPQUlHO0FBQUE7O0FBQUEsTUFIREMsWUFHQyxRQUhEQSxZQUdDO0FBQUEsTUFGREMsZ0JBRUMsUUFGREEsZ0JBRUM7QUFBQSxNQUREQyxjQUNDLFFBRERBLGNBQ0M7QUFDRCxNQUFNQyxVQUFVLEdBQUdDLHFEQUFPLENBQ3hCO0FBQUEsV0FDRUYsY0FBYyxDQUFDRyxHQUFmLENBQW1CLFVBQUNDLElBQUQ7QUFBQSxhQUNqQixJQUFJQyxJQUFKLENBQVNELElBQVQsRUFBZUUsa0JBQWYsQ0FBa0MsT0FBbEMsRUFBMkM7QUFDekNDLFlBQUksRUFBRSxTQURtQztBQUV6Q0MsY0FBTSxFQUFFO0FBRmlDLE9BQTNDLENBRGlCO0FBQUEsS0FBbkIsQ0FERjtBQUFBLEdBRHdCLEVBUXhCLENBQUNSLGNBQUQsQ0FSd0IsQ0FBMUI7QUFXQSxTQUNFLE1BQUMsb0RBQUQ7QUFDRSxRQUFJLEVBQUU7QUFDSlMsWUFBTSxFQUFFUixVQURKO0FBR0pTLGNBQVEsRUFBRSxDQUNSO0FBQ0VDLHVCQUFlLEVBQUUsTUFEbkI7QUFFRUMsYUFBSyxFQUFFLFVBRlQ7QUFHRUMsWUFBSSxFQUFFZCxnQkFIUjtBQUlFZSxZQUFJLEVBQUU7QUFKUixPQURRLEVBT1I7QUFDRUgsdUJBQWUsRUFBRSxTQURuQjtBQUVFQyxhQUFLLEVBQUUsZUFGVDtBQUdFQyxZQUFJLEVBQUVmLFlBSFI7QUFJRWlCLFlBQUksRUFBRTtBQUpSLE9BUFE7QUFITixLQURSO0FBbUJFLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUU7QUFDTkMsYUFBSyxFQUFFLENBQ0w7QUFDRUMsZUFBSyxFQUFFO0FBQ0xDLG9CQUFRLEVBQUUsRUFETDtBQUVMQyx3QkFBWSxFQUFFLENBRlQ7QUFHTEMsd0JBQVksRUFBRTtBQUhUO0FBRFQsU0FESztBQUREO0FBREQsS0FuQlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGO0FBbUNEOztHQW5EUXhCLGtCOztLQUFBQSxrQjtBQXFETUEsaUZBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub2RheU92ZXJ2aWV3L1ByZWNpcGl0YXRpb25DaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcblxuZnVuY3Rpb24gUHJlY2lwaXRhdGlvbkNoYXJ0KHtcbiAgcHJlY2lwQ2hhbmNlLFxuICByZWxhdGl2ZUh1bWlkaXR5LFxuICB2YWxpZFRpbWVMb2NhbCxcbn0pIHtcbiAgY29uc3QgdGltZUxhYmVscyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIHZhbGlkVGltZUxvY2FsLm1hcCgoZGF0ZSkgPT5cbiAgICAgICAgbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVUaW1lU3RyaW5nKCdlbi1VUycsIHtcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXG4gICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXG4gICAgICAgIH0pLFxuICAgICAgKSxcbiAgICBbdmFsaWRUaW1lTG9jYWxdLFxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPExpbmVcbiAgICAgIGRhdGE9e3tcbiAgICAgICAgbGFiZWxzOiB0aW1lTGFiZWxzLFxuXG4gICAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2YwMCcsXG4gICAgICAgICAgICBsYWJlbDogJ0h1bWlkaXR5JyxcbiAgICAgICAgICAgIGRhdGE6IHJlbGF0aXZlSHVtaWRpdHksXG4gICAgICAgICAgICBmdWxsOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzM2N2VlOScsXG4gICAgICAgICAgICBsYWJlbDogJ1ByZWNpcGl0YXRpb24nLFxuICAgICAgICAgICAgZGF0YTogcHJlY2lwQ2hhbmNlLFxuICAgICAgICAgICAgZmlsbDogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfX1cbiAgICAgIG9wdGlvbnM9e3tcbiAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgeUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICBzdGVwU2l6ZTogMTAsXG4gICAgICAgICAgICAgICAgc3VnZ2VzdGVkTWluOiAwLFxuICAgICAgICAgICAgICAgIHN1Z2dlc3RlZE1heDogMTAwLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcmVjaXBpdGF0aW9uQ2hhcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TodayOverview/PrecipitationChart.js\n");

/***/ })

})