self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TemperatureChart/TemperatureChart.tsx":
/*!**************************************************************!*\
  !*** ./src/components/TemperatureChart/TemperatureChart.tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/dist/index.modern.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Matthew\\Projects\\local-weather\\src\\components\\TemperatureChart\\TemperatureChart.tsx",
    _s = $RefreshSig$();




function TemperatureChart(_ref) {
  _s();

  var temperature = _ref.temperature,
      validTimeLocal = _ref.validTimeLocal;
  var timeLabels = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return validTimeLocal.map(function (date) {
      return new Date(date).toLocaleString('en-US', {
        hour: 'numeric',
        minute: '2-digit'
      });
    });
  }, [validTimeLocal]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__.Line, {
    type: "line",
    data: {
      labels: timeLabels,
      datasets: [{
        backgroundColor: '#eeeeee',
        borderColor: '#eeeeee',
        data: temperature,
        fill: false,
        label: 'Temperature',
        pointBackgroundColor: '#eeeeee',
        pointBorderColor: '#eeeeee',
        pointHoverBackgroundColor: '#eeeeee',
        pointHoverBorderColor: '#eeeeee',
        showLine: true
      }]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 10,
            suggestedMin: 0,
            suggestedMax: 100
          }
        }]
      }
    }
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

_s(TemperatureChart, "BCFPJGdNnIZg7S2Cto55NcMlgGw=");

_c = TemperatureChart;
/* harmony default export */ __webpack_exports__["default"] = (TemperatureChart);

var _c;

$RefreshReg$(_c, "TemperatureChart");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVtcGVyYXR1cmVDaGFydC9UZW1wZXJhdHVyZUNoYXJ0LnRzeCJdLCJuYW1lcyI6WyJUZW1wZXJhdHVyZUNoYXJ0IiwidGVtcGVyYXR1cmUiLCJ2YWxpZFRpbWVMb2NhbCIsInRpbWVMYWJlbHMiLCJ1c2VNZW1vIiwibWFwIiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImhvdXIiLCJtaW51dGUiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiZGF0YSIsImZpbGwiLCJsYWJlbCIsInBvaW50QmFja2dyb3VuZENvbG9yIiwicG9pbnRCb3JkZXJDb2xvciIsInBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyQ29sb3IiLCJzaG93TGluZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJzY2FsZXMiLCJ5QXhlcyIsInRpY2tzIiwic3RlcFNpemUiLCJzdWdnZXN0ZWRNaW4iLCJzdWdnZXN0ZWRNYXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBTUEsU0FBU0EsZ0JBQVQsT0FBK0U7QUFBQTs7QUFBQSxNQUFuREMsV0FBbUQsUUFBbkRBLFdBQW1EO0FBQUEsTUFBdENDLGNBQXNDLFFBQXRDQSxjQUFzQztBQUM3RSxNQUFNQyxVQUF5QixHQUFHQyw4Q0FBTyxDQUN2QztBQUFBLFdBQ0VGLGNBQWMsQ0FBQ0csR0FBZixDQUFtQixVQUFDQyxJQUFEO0FBQUEsYUFDakIsSUFBSUMsSUFBSixDQUFTRCxJQUFULEVBQWVFLGNBQWYsQ0FBOEIsT0FBOUIsRUFBdUM7QUFDckNDLFlBQUksRUFBRSxTQUQrQjtBQUVyQ0MsY0FBTSxFQUFFO0FBRjZCLE9BQXZDLENBRGlCO0FBQUEsS0FBbkIsQ0FERjtBQUFBLEdBRHVDLEVBUXZDLENBQUNSLGNBQUQsQ0FSdUMsQ0FBekM7QUFXQSxzQkFDRSw4REFBQyxpREFBRDtBQUNFLFFBQUksRUFBQyxNQURQO0FBRUUsUUFBSSxFQUFFO0FBQ0pTLFlBQU0sRUFBRVIsVUFESjtBQUVKUyxjQUFRLEVBQUUsQ0FDUjtBQUNFQyx1QkFBZSxFQUFFLFNBRG5CO0FBRUVDLG1CQUFXLEVBQUUsU0FGZjtBQUdFQyxZQUFJLEVBQUVkLFdBSFI7QUFJRWUsWUFBSSxFQUFFLEtBSlI7QUFLRUMsYUFBSyxFQUFFLGFBTFQ7QUFNRUMsNEJBQW9CLEVBQUUsU0FOeEI7QUFPRUMsd0JBQWdCLEVBQUUsU0FQcEI7QUFRRUMsaUNBQXlCLEVBQUUsU0FSN0I7QUFTRUMsNkJBQXFCLEVBQUUsU0FUekI7QUFVRUMsZ0JBQVEsRUFBRTtBQVZaLE9BRFE7QUFGTixLQUZSO0FBbUJFLFdBQU8sRUFBRTtBQUNQQyx5QkFBbUIsRUFBRSxLQURkO0FBRVBDLFlBQU0sRUFBRTtBQUNOQyxhQUFLLEVBQUUsQ0FDTDtBQUNFQyxlQUFLLEVBQUU7QUFDTEMsb0JBQVEsRUFBRSxFQURMO0FBRUxDLHdCQUFZLEVBQUUsQ0FGVDtBQUdMQyx3QkFBWSxFQUFFO0FBSFQ7QUFEVCxTQURLO0FBREQ7QUFGRDtBQW5CWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQ0Q7O0dBaERRN0IsZ0I7O0tBQUFBLGdCO0FBa0RULCtEQUFlQSxnQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hYTNmZTY3MzIyMmU0MDE4ODdkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcblxyXG5pbXBvcnQgeyBXZWF0aGVyQXBpSG91cmx5IH0gZnJvbSAndHlwZXMvd2VhdGhlcic7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBQaWNrPFdlYXRoZXJBcGlIb3VybHksICd0ZW1wZXJhdHVyZScgfCAndmFsaWRUaW1lTG9jYWwnPiB7fVxyXG5cclxuZnVuY3Rpb24gVGVtcGVyYXR1cmVDaGFydCh7IHRlbXBlcmF0dXJlLCB2YWxpZFRpbWVMb2NhbCB9OiBQcm9wcyk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCB0aW1lTGFiZWxzOiBBcnJheTxzdHJpbmc+ID0gdXNlTWVtbyhcclxuICAgICgpID0+XHJcbiAgICAgIHZhbGlkVGltZUxvY2FsLm1hcCgoZGF0ZTogc3RyaW5nKSA9PlxyXG4gICAgICAgIG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcclxuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcclxuICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgW3ZhbGlkVGltZUxvY2FsXSxcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpbmVcclxuICAgICAgdHlwZT1cImxpbmVcIlxyXG4gICAgICBkYXRhPXt7XHJcbiAgICAgICAgbGFiZWxzOiB0aW1lTGFiZWxzLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWVlZWUnLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyNlZWVlZWUnLFxyXG4gICAgICAgICAgICBkYXRhOiB0ZW1wZXJhdHVyZSxcclxuICAgICAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnVGVtcGVyYXR1cmUnLFxyXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyNlZWVlZWUnLFxyXG4gICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAnI2VlZWVlZScsXHJcbiAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICcjZWVlZWVlJyxcclxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAnI2VlZWVlZScsXHJcbiAgICAgICAgICAgIHNob3dMaW5lOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9fVxyXG4gICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICB5QXhlczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgIHN0ZXBTaXplOiAxMCxcclxuICAgICAgICAgICAgICAgIHN1Z2dlc3RlZE1pbjogMCxcclxuICAgICAgICAgICAgICAgIHN1Z2dlc3RlZE1heDogMTAwLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlbXBlcmF0dXJlQ2hhcnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=