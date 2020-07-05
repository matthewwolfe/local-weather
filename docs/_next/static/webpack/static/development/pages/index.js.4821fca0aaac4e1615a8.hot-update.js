webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/TodayOverview/PrecipitationChart.js":
/*!************************************************************!*\
  !*** ./src/components/TodayOverview/PrecipitationChart.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/es/index.js\");\nvar _jsxFileName = \"/Users/cn182266/Personal/local-weather/src/components/TodayOverview/PrecipitationChart.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction PrecipitationChart(_ref) {\n  _s();\n\n  var precipChance = _ref.precipChance,\n      relativeHumidity = _ref.relativeHumidity,\n      validTimeLocal = _ref.validTimeLocal;\n  var timeLabels = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    return validTimeLocal.map(function (date) {\n      return new Date(date).toLocaleTimeString('en-US', {\n        hour: 'numeric',\n        minute: '2-digit'\n      });\n    });\n  }, [validTimeLocal]);\n  return __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__[\"Line\"], {\n    data: {\n      labels: timeLabels,\n      datasets: [{\n        label: 'Precipitation',\n        data: precipChance,\n        showLine: true,\n        fill: false,\n        borderColor: '#55bae7',\n        borderDash: [0, 0],\n        pointBackgroundColor: '#55bae7',\n        pointBorderColor: '#55bae7',\n        pointHoverBackgroundColor: '#55bae7',\n        pointHoverBorderColor: '#55bae7'\n      }, {\n        showLine: true,\n        fill: false,\n        borderColor: '#556be7',\n        pointBackgroundColor: '#556be7',\n        pointBorderColor: '#556be7',\n        pointHoverBackgroundColor: '#556be7',\n        pointHoverBorderColor: '#556be7',\n        label: 'Humidity',\n        data: relativeHumidity\n      }]\n    },\n    options: {\n      scales: {\n        yAxes: [{\n          ticks: {\n            stepSize: 10,\n            suggestedMin: 0,\n            suggestedMax: 100\n          }\n        }]\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }\n  });\n}\n\n_s(PrecipitationChart, \"LSyyKIG7JFYevIhHnwZW59BJHrc=\");\n\n_c = PrecipitationChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PrecipitationChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"PrecipitationChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub2RheU92ZXJ2aWV3L1ByZWNpcGl0YXRpb25DaGFydC5qcz9kZGI5Il0sIm5hbWVzIjpbIlByZWNpcGl0YXRpb25DaGFydCIsInByZWNpcENoYW5jZSIsInJlbGF0aXZlSHVtaWRpdHkiLCJ2YWxpZFRpbWVMb2NhbCIsInRpbWVMYWJlbHMiLCJ1c2VNZW1vIiwibWFwIiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZVRpbWVTdHJpbmciLCJob3VyIiwibWludXRlIiwibGFiZWxzIiwiZGF0YXNldHMiLCJsYWJlbCIsImRhdGEiLCJzaG93TGluZSIsImZpbGwiLCJib3JkZXJDb2xvciIsImJvcmRlckRhc2giLCJwb2ludEJhY2tncm91bmRDb2xvciIsInBvaW50Qm9yZGVyQ29sb3IiLCJwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yIiwicG9pbnRIb3ZlckJvcmRlckNvbG9yIiwic2NhbGVzIiwieUF4ZXMiLCJ0aWNrcyIsInN0ZXBTaXplIiwic3VnZ2VzdGVkTWluIiwic3VnZ2VzdGVkTWF4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLGtCQUFULE9BSUc7QUFBQTs7QUFBQSxNQUhEQyxZQUdDLFFBSERBLFlBR0M7QUFBQSxNQUZEQyxnQkFFQyxRQUZEQSxnQkFFQztBQUFBLE1BRERDLGNBQ0MsUUFEREEsY0FDQztBQUNELE1BQU1DLFVBQVUsR0FBR0MscURBQU8sQ0FDeEI7QUFBQSxXQUNFRixjQUFjLENBQUNHLEdBQWYsQ0FBbUIsVUFBQ0MsSUFBRDtBQUFBLGFBQ2pCLElBQUlDLElBQUosQ0FBU0QsSUFBVCxFQUFlRSxrQkFBZixDQUFrQyxPQUFsQyxFQUEyQztBQUN6Q0MsWUFBSSxFQUFFLFNBRG1DO0FBRXpDQyxjQUFNLEVBQUU7QUFGaUMsT0FBM0MsQ0FEaUI7QUFBQSxLQUFuQixDQURGO0FBQUEsR0FEd0IsRUFReEIsQ0FBQ1IsY0FBRCxDQVJ3QixDQUExQjtBQVdBLFNBQ0UsTUFBQyxvREFBRDtBQUNFLFFBQUksRUFBRTtBQUNKUyxZQUFNLEVBQUVSLFVBREo7QUFHSlMsY0FBUSxFQUFFLENBQ1I7QUFDRUMsYUFBSyxFQUFFLGVBRFQ7QUFFRUMsWUFBSSxFQUFFZCxZQUZSO0FBR0VlLGdCQUFRLEVBQUUsSUFIWjtBQUlFQyxZQUFJLEVBQUUsS0FKUjtBQUtFQyxtQkFBVyxFQUFFLFNBTGY7QUFNRUMsa0JBQVUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBTmQ7QUFPRUMsNEJBQW9CLEVBQUUsU0FQeEI7QUFRRUMsd0JBQWdCLEVBQUUsU0FScEI7QUFTRUMsaUNBQXlCLEVBQUUsU0FUN0I7QUFVRUMsNkJBQXFCLEVBQUU7QUFWekIsT0FEUSxFQWFSO0FBQ0VQLGdCQUFRLEVBQUUsSUFEWjtBQUVFQyxZQUFJLEVBQUUsS0FGUjtBQUdFQyxtQkFBVyxFQUFFLFNBSGY7QUFJRUUsNEJBQW9CLEVBQUUsU0FKeEI7QUFLRUMsd0JBQWdCLEVBQUUsU0FMcEI7QUFNRUMsaUNBQXlCLEVBQUUsU0FON0I7QUFPRUMsNkJBQXFCLEVBQUUsU0FQekI7QUFRRVQsYUFBSyxFQUFFLFVBUlQ7QUFTRUMsWUFBSSxFQUFFYjtBQVRSLE9BYlE7QUFITixLQURSO0FBOEJFLFdBQU8sRUFBRTtBQUNQc0IsWUFBTSxFQUFFO0FBQ05DLGFBQUssRUFBRSxDQUNMO0FBQ0VDLGVBQUssRUFBRTtBQUNMQyxvQkFBUSxFQUFFLEVBREw7QUFFTEMsd0JBQVksRUFBRSxDQUZUO0FBR0xDLHdCQUFZLEVBQUU7QUFIVDtBQURULFNBREs7QUFERDtBQURELEtBOUJYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERjtBQThDRDs7R0E5RFE3QixrQjs7S0FBQUEsa0I7QUFnRU1BLGlGQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvVG9kYXlPdmVydmlldy9QcmVjaXBpdGF0aW9uQ2hhcnQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XG5cbmZ1bmN0aW9uIFByZWNpcGl0YXRpb25DaGFydCh7XG4gIHByZWNpcENoYW5jZSxcbiAgcmVsYXRpdmVIdW1pZGl0eSxcbiAgdmFsaWRUaW1lTG9jYWwsXG59KSB7XG4gIGNvbnN0IHRpbWVMYWJlbHMgPSB1c2VNZW1vKFxuICAgICgpID0+XG4gICAgICB2YWxpZFRpbWVMb2NhbC5tYXAoKGRhdGUpID0+XG4gICAgICAgIG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlVGltZVN0cmluZygnZW4tVVMnLCB7XG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxuICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgW3ZhbGlkVGltZUxvY2FsXSxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxMaW5lXG4gICAgICBkYXRhPXt7XG4gICAgICAgIGxhYmVsczogdGltZUxhYmVscyxcblxuICAgICAgICBkYXRhc2V0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnUHJlY2lwaXRhdGlvbicsXG4gICAgICAgICAgICBkYXRhOiBwcmVjaXBDaGFuY2UsXG4gICAgICAgICAgICBzaG93TGluZTogdHJ1ZSxcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjNTViYWU3JyxcbiAgICAgICAgICAgIGJvcmRlckRhc2g6IFswLCAwXSxcbiAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnIzU1YmFlNycsXG4gICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAnIzU1YmFlNycsXG4gICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnIzU1YmFlNycsXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICcjNTViYWU3JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNob3dMaW5lOiB0cnVlLFxuICAgICAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyM1NTZiZTcnLFxuICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjNTU2YmU3JyxcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjNTU2YmU3JyxcbiAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICcjNTU2YmU3JyxcbiAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJyM1NTZiZTcnLFxuICAgICAgICAgICAgbGFiZWw6ICdIdW1pZGl0eScsXG4gICAgICAgICAgICBkYXRhOiByZWxhdGl2ZUh1bWlkaXR5LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9fVxuICAgICAgb3B0aW9ucz17e1xuICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICB5QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgIHN0ZXBTaXplOiAxMCxcbiAgICAgICAgICAgICAgICBzdWdnZXN0ZWRNaW46IDAsXG4gICAgICAgICAgICAgICAgc3VnZ2VzdGVkTWF4OiAxMDAsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByZWNpcGl0YXRpb25DaGFydDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/TodayOverview/PrecipitationChart.js\n");

/***/ })

})