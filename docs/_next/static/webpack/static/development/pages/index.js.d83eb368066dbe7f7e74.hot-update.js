webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/TodayOverview/ConditionsChart.js":
/*!*********************************************************!*\
  !*** ./src/components/TodayOverview/ConditionsChart.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/es/index.js\");\nvar _jsxFileName = \"/Users/cn182266/Personal/local-weather/src/components/TodayOverview/ConditionsChart.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction ConditionsChart(_ref) {\n  _s();\n\n  var cloudCover = _ref.cloudCover,\n      precipChance = _ref.precipChance,\n      relativeHumidity = _ref.relativeHumidity,\n      validTimeLocal = _ref.validTimeLocal;\n  var timeLabels = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useMemo\"])(function () {\n    return validTimeLocal.map(function (date) {\n      return new Date(date).toLocaleString('en-US', {\n        hour: 'numeric',\n        minute: '2-digit'\n      });\n    });\n  }, [validTimeLocal]);\n  return __jsx(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__[\"Line\"], {\n    data: {\n      labels: timeLabels,\n      datasets: [{\n        borderColor: '#eeeeee',\n        data: cloudCover,\n        fill: false,\n        label: 'Cloud Cover',\n        pointBackgroundColor: '#eeeeee',\n        pointBorderColor: '#eeeeee',\n        pointHoverBackgroundColor: '#eeeeee',\n        pointHoverBorderColor: '#eeeeee',\n        showLine: true\n      }, {\n        borderColor: '#55bae7',\n        data: precipChance,\n        fill: false,\n        label: 'Precipitation',\n        pointBackgroundColor: '#55bae7',\n        pointBorderColor: '#55bae7',\n        pointHoverBackgroundColor: '#55bae7',\n        pointHoverBorderColor: '#55bae7',\n        showLine: true\n      }, {\n        borderColor: '#556be7',\n        data: relativeHumidity,\n        fill: false,\n        label: 'Humidity',\n        pointBackgroundColor: '#556be7',\n        pointBorderColor: '#556be7',\n        pointHoverBackgroundColor: '#556be7',\n        pointHoverBorderColor: '#556be7',\n        showLine: true\n      }]\n    },\n    options: {\n      maintainAspectRatio: false,\n      scales: {\n        yAxes: [{\n          ticks: {\n            stepSize: 10,\n            suggestedMin: 0,\n            suggestedMax: 100\n          }\n        }]\n      }\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 5\n    }\n  });\n}\n\n_s(ConditionsChart, \"LSyyKIG7JFYevIhHnwZW59BJHrc=\");\n\n_c = ConditionsChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ConditionsChart);\n\nvar _c;\n\n$RefreshReg$(_c, \"ConditionsChart\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub2RheU92ZXJ2aWV3L0NvbmRpdGlvbnNDaGFydC5qcz9jYzU5Il0sIm5hbWVzIjpbIkNvbmRpdGlvbnNDaGFydCIsImNsb3VkQ292ZXIiLCJwcmVjaXBDaGFuY2UiLCJyZWxhdGl2ZUh1bWlkaXR5IiwidmFsaWRUaW1lTG9jYWwiLCJ0aW1lTGFiZWxzIiwidXNlTWVtbyIsIm1hcCIsImRhdGUiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJob3VyIiwibWludXRlIiwibGFiZWxzIiwiZGF0YXNldHMiLCJib3JkZXJDb2xvciIsImRhdGEiLCJmaWxsIiwibGFiZWwiLCJwb2ludEJhY2tncm91bmRDb2xvciIsInBvaW50Qm9yZGVyQ29sb3IiLCJwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yIiwicG9pbnRIb3ZlckJvcmRlckNvbG9yIiwic2hvd0xpbmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwic2NhbGVzIiwieUF4ZXMiLCJ0aWNrcyIsInN0ZXBTaXplIiwic3VnZ2VzdGVkTWluIiwic3VnZ2VzdGVkTWF4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLGVBQVQsT0FLRztBQUFBOztBQUFBLE1BSkRDLFVBSUMsUUFKREEsVUFJQztBQUFBLE1BSERDLFlBR0MsUUFIREEsWUFHQztBQUFBLE1BRkRDLGdCQUVDLFFBRkRBLGdCQUVDO0FBQUEsTUFEREMsY0FDQyxRQUREQSxjQUNDO0FBQ0QsTUFBTUMsVUFBVSxHQUFHQyxxREFBTyxDQUN4QjtBQUFBLFdBQ0VGLGNBQWMsQ0FBQ0csR0FBZixDQUFtQixVQUFDQyxJQUFEO0FBQUEsYUFDakIsSUFBSUMsSUFBSixDQUFTRCxJQUFULEVBQWVFLGNBQWYsQ0FBOEIsT0FBOUIsRUFBdUM7QUFDckNDLFlBQUksRUFBRSxTQUQrQjtBQUVyQ0MsY0FBTSxFQUFFO0FBRjZCLE9BQXZDLENBRGlCO0FBQUEsS0FBbkIsQ0FERjtBQUFBLEdBRHdCLEVBUXhCLENBQUNSLGNBQUQsQ0FSd0IsQ0FBMUI7QUFXQSxTQUNFLE1BQUMsb0RBQUQ7QUFDRSxRQUFJLEVBQUU7QUFDSlMsWUFBTSxFQUFFUixVQURKO0FBR0pTLGNBQVEsRUFBRSxDQUNSO0FBQ0VDLG1CQUFXLEVBQUUsU0FEZjtBQUVFQyxZQUFJLEVBQUVmLFVBRlI7QUFHRWdCLFlBQUksRUFBRSxLQUhSO0FBSUVDLGFBQUssRUFBRSxhQUpUO0FBS0VDLDRCQUFvQixFQUFFLFNBTHhCO0FBTUVDLHdCQUFnQixFQUFFLFNBTnBCO0FBT0VDLGlDQUF5QixFQUFFLFNBUDdCO0FBUUVDLDZCQUFxQixFQUFFLFNBUnpCO0FBU0VDLGdCQUFRLEVBQUU7QUFUWixPQURRLEVBWVI7QUFDRVIsbUJBQVcsRUFBRSxTQURmO0FBRUVDLFlBQUksRUFBRWQsWUFGUjtBQUdFZSxZQUFJLEVBQUUsS0FIUjtBQUlFQyxhQUFLLEVBQUUsZUFKVDtBQUtFQyw0QkFBb0IsRUFBRSxTQUx4QjtBQU1FQyx3QkFBZ0IsRUFBRSxTQU5wQjtBQU9FQyxpQ0FBeUIsRUFBRSxTQVA3QjtBQVFFQyw2QkFBcUIsRUFBRSxTQVJ6QjtBQVNFQyxnQkFBUSxFQUFFO0FBVFosT0FaUSxFQXVCUjtBQUNFUixtQkFBVyxFQUFFLFNBRGY7QUFFRUMsWUFBSSxFQUFFYixnQkFGUjtBQUdFYyxZQUFJLEVBQUUsS0FIUjtBQUlFQyxhQUFLLEVBQUUsVUFKVDtBQUtFQyw0QkFBb0IsRUFBRSxTQUx4QjtBQU1FQyx3QkFBZ0IsRUFBRSxTQU5wQjtBQU9FQyxpQ0FBeUIsRUFBRSxTQVA3QjtBQVFFQyw2QkFBcUIsRUFBRSxTQVJ6QjtBQVNFQyxnQkFBUSxFQUFFO0FBVFosT0F2QlE7QUFITixLQURSO0FBd0NFLFdBQU8sRUFBRTtBQUNQQyx5QkFBbUIsRUFBRSxLQURkO0FBRVBDLFlBQU0sRUFBRTtBQUNOQyxhQUFLLEVBQUUsQ0FDTDtBQUNFQyxlQUFLLEVBQUU7QUFDTEMsb0JBQVEsRUFBRSxFQURMO0FBRUxDLHdCQUFZLEVBQUUsQ0FGVDtBQUdMQyx3QkFBWSxFQUFFO0FBSFQ7QUFEVCxTQURLO0FBREQ7QUFGRCxLQXhDWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREY7QUF5REQ7O0dBMUVROUIsZTs7S0FBQUEsZTtBQTRFTUEsOEVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ub2RheU92ZXJ2aWV3L0NvbmRpdGlvbnNDaGFydC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcblxuZnVuY3Rpb24gQ29uZGl0aW9uc0NoYXJ0KHtcbiAgY2xvdWRDb3ZlcixcbiAgcHJlY2lwQ2hhbmNlLFxuICByZWxhdGl2ZUh1bWlkaXR5LFxuICB2YWxpZFRpbWVMb2NhbCxcbn0pIHtcbiAgY29uc3QgdGltZUxhYmVscyA9IHVzZU1lbW8oXG4gICAgKCkgPT5cbiAgICAgIHZhbGlkVGltZUxvY2FsLm1hcCgoZGF0ZSkgPT5cbiAgICAgICAgbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge1xuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcbiAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcbiAgICAgICAgfSksXG4gICAgICApLFxuICAgIFt2YWxpZFRpbWVMb2NhbF0sXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8TGluZVxuICAgICAgZGF0YT17e1xuICAgICAgICBsYWJlbHM6IHRpbWVMYWJlbHMsXG5cbiAgICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyNlZWVlZWUnLFxuICAgICAgICAgICAgZGF0YTogY2xvdWRDb3ZlcixcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxuICAgICAgICAgICAgbGFiZWw6ICdDbG91ZCBDb3ZlcicsXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyNlZWVlZWUnLFxuICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJyNlZWVlZWUnLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyNlZWVlZWUnLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAnI2VlZWVlZScsXG4gICAgICAgICAgICBzaG93TGluZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzU1YmFlNycsXG4gICAgICAgICAgICBkYXRhOiBwcmVjaXBDaGFuY2UsXG4gICAgICAgICAgICBmaWxsOiBmYWxzZSxcbiAgICAgICAgICAgIGxhYmVsOiAnUHJlY2lwaXRhdGlvbicsXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyM1NWJhZTcnLFxuICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJyM1NWJhZTcnLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyM1NWJhZTcnLFxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAnIzU1YmFlNycsXG4gICAgICAgICAgICBzaG93TGluZTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzU1NmJlNycsXG4gICAgICAgICAgICBkYXRhOiByZWxhdGl2ZUh1bWlkaXR5LFxuICAgICAgICAgICAgZmlsbDogZmFsc2UsXG4gICAgICAgICAgICBsYWJlbDogJ0h1bWlkaXR5JyxcbiAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnIzU1NmJlNycsXG4gICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAnIzU1NmJlNycsXG4gICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnIzU1NmJlNycsXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICcjNTU2YmU3JyxcbiAgICAgICAgICAgIHNob3dMaW5lOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9fVxuICAgICAgb3B0aW9ucz17e1xuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcbiAgICAgICAgc2NhbGVzOiB7XG4gICAgICAgICAgeUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICBzdGVwU2l6ZTogMTAsXG4gICAgICAgICAgICAgICAgc3VnZ2VzdGVkTWluOiAwLFxuICAgICAgICAgICAgICAgIHN1Z2dlc3RlZE1heDogMTAwLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICAvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25zQ2hhcnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TodayOverview/ConditionsChart.js\n");

/***/ })

})