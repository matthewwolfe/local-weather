self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TodayOverview/ConditionsChart.tsx":
/*!**********************************************************!*\
  !*** ./src/components/TodayOverview/ConditionsChart.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/dist/index.modern.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Matthew\\Projects\\local-weather\\src\\components\\TodayOverview\\ConditionsChart.tsx",
    _s = $RefreshSig$();




function ConditionsChart(_ref) {
  _s();

  var cloudCover = _ref.cloudCover,
      precipChance = _ref.precipChance,
      relativeHumidity = _ref.relativeHumidity,
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
        borderColor: '#eeeeee',
        data: cloudCover,
        fill: false,
        label: 'Cloud Cover',
        pointBackgroundColor: '#eeeeee',
        pointBorderColor: '#eeeeee',
        pointHoverBackgroundColor: '#eeeeee',
        pointHoverBorderColor: '#eeeeee',
        showLine: true
      }, {
        backgroundColor: '#55bae7',
        borderColor: '#55bae7',
        data: precipChance,
        fill: false,
        label: 'Precipitation',
        pointBackgroundColor: '#55bae7',
        pointBorderColor: '#55bae7',
        pointHoverBackgroundColor: '#55bae7',
        pointHoverBorderColor: '#55bae7',
        showLine: true
      }, {
        backgroundColor: '#556be7',
        borderColor: '#556be7',
        data: relativeHumidity,
        fill: false,
        label: 'Humidity',
        pointBackgroundColor: '#556be7',
        pointBorderColor: '#556be7',
        pointHoverBackgroundColor: '#556be7',
        pointHoverBorderColor: '#556be7',
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
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

_s(ConditionsChart, "BCFPJGdNnIZg7S2Cto55NcMlgGw=");

_c = ConditionsChart;
/* harmony default export */ __webpack_exports__["default"] = (ConditionsChart);

var _c;

$RefreshReg$(_c, "ConditionsChart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9kYXlPdmVydmlldy9Db25kaXRpb25zQ2hhcnQudHN4Il0sIm5hbWVzIjpbIkNvbmRpdGlvbnNDaGFydCIsImNsb3VkQ292ZXIiLCJwcmVjaXBDaGFuY2UiLCJyZWxhdGl2ZUh1bWlkaXR5IiwidmFsaWRUaW1lTG9jYWwiLCJ0aW1lTGFiZWxzIiwidXNlTWVtbyIsIm1hcCIsImRhdGUiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJob3VyIiwibWludXRlIiwibGFiZWxzIiwiZGF0YXNldHMiLCJib3JkZXJDb2xvciIsImRhdGEiLCJmaWxsIiwibGFiZWwiLCJwb2ludEJhY2tncm91bmRDb2xvciIsInBvaW50Qm9yZGVyQ29sb3IiLCJwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yIiwicG9pbnRIb3ZlckJvcmRlckNvbG9yIiwic2hvd0xpbmUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwic2NhbGVzIiwieUF4ZXMiLCJ0aWNrcyIsInN0ZXBTaXplIiwic3VnZ2VzdGVkTWluIiwic3VnZ2VzdGVkTWF4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQVVBLFNBQVNBLGVBQVQsT0FLdUI7QUFBQTs7QUFBQSxNQUpyQkMsVUFJcUIsUUFKckJBLFVBSXFCO0FBQUEsTUFIckJDLFlBR3FCLFFBSHJCQSxZQUdxQjtBQUFBLE1BRnJCQyxnQkFFcUIsUUFGckJBLGdCQUVxQjtBQUFBLE1BRHJCQyxjQUNxQixRQURyQkEsY0FDcUI7QUFDckIsTUFBTUMsVUFBeUIsR0FBR0MsOENBQU8sQ0FDdkM7QUFBQSxXQUNFRixjQUFjLENBQUNHLEdBQWYsQ0FBbUIsVUFBQ0MsSUFBRDtBQUFBLGFBQ2pCLElBQUlDLElBQUosQ0FBU0QsSUFBVCxFQUFlRSxjQUFmLENBQThCLE9BQTlCLEVBQXVDO0FBQ3JDQyxZQUFJLEVBQUUsU0FEK0I7QUFFckNDLGNBQU0sRUFBRTtBQUY2QixPQUF2QyxDQURpQjtBQUFBLEtBQW5CLENBREY7QUFBQSxHQUR1QyxFQVF2QyxDQUFDUixjQUFELENBUnVDLENBQXpDO0FBV0Esc0JBQ0UsOERBQUMsaURBQUQ7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLFFBQUksRUFBRTtBQUNKUyxZQUFNLEVBQUVSLFVBREo7QUFFSlMsY0FBUSxFQUFFLENBQ1I7QUFDRUMsbUJBQVcsRUFBRSxTQURmO0FBRUVDLFlBQUksRUFBRWYsVUFGUjtBQUdFZ0IsWUFBSSxFQUFFLEtBSFI7QUFJRUMsYUFBSyxFQUFFLGFBSlQ7QUFLRUMsNEJBQW9CLEVBQUUsU0FMeEI7QUFNRUMsd0JBQWdCLEVBQUUsU0FOcEI7QUFPRUMsaUNBQXlCLEVBQUUsU0FQN0I7QUFRRUMsNkJBQXFCLEVBQUUsU0FSekI7QUFTRUMsZ0JBQVEsRUFBRTtBQVRaLE9BRFEsRUFZUjtBQUNFQyx1QkFBZSxFQUFFLFNBRG5CO0FBRUVULG1CQUFXLEVBQUUsU0FGZjtBQUdFQyxZQUFJLEVBQUVkLFlBSFI7QUFJRWUsWUFBSSxFQUFFLEtBSlI7QUFLRUMsYUFBSyxFQUFFLGVBTFQ7QUFNRUMsNEJBQW9CLEVBQUUsU0FOeEI7QUFPRUMsd0JBQWdCLEVBQUUsU0FQcEI7QUFRRUMsaUNBQXlCLEVBQUUsU0FSN0I7QUFTRUMsNkJBQXFCLEVBQUUsU0FUekI7QUFVRUMsZ0JBQVEsRUFBRTtBQVZaLE9BWlEsRUF3QlI7QUFDRUMsdUJBQWUsRUFBRSxTQURuQjtBQUVFVCxtQkFBVyxFQUFFLFNBRmY7QUFHRUMsWUFBSSxFQUFFYixnQkFIUjtBQUlFYyxZQUFJLEVBQUUsS0FKUjtBQUtFQyxhQUFLLEVBQUUsVUFMVDtBQU1FQyw0QkFBb0IsRUFBRSxTQU54QjtBQU9FQyx3QkFBZ0IsRUFBRSxTQVBwQjtBQVFFQyxpQ0FBeUIsRUFBRSxTQVI3QjtBQVNFQyw2QkFBcUIsRUFBRSxTQVR6QjtBQVVFQyxnQkFBUSxFQUFFO0FBVlosT0F4QlE7QUFGTixLQUZSO0FBMENFLFdBQU8sRUFBRTtBQUNQRSx5QkFBbUIsRUFBRSxLQURkO0FBRVBDLFlBQU0sRUFBRTtBQUNOQyxhQUFLLEVBQUUsQ0FDTDtBQUNFQyxlQUFLLEVBQUU7QUFDTEMsb0JBQVEsRUFBRSxFQURMO0FBRUxDLHdCQUFZLEVBQUUsQ0FGVDtBQUdMQyx3QkFBWSxFQUFFO0FBSFQ7QUFEVCxTQURLO0FBREQ7QUFGRDtBQTFDWDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEyREQ7O0dBNUVRL0IsZTs7S0FBQUEsZTtBQThFVCwrREFBZUEsZUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43OGFkZmIwNjI0NDgzMjQ0OTA2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcblxyXG5pbXBvcnQgeyBXZWF0aGVyQXBpSG91cmx5IH0gZnJvbSAndHlwZXMvd2VhdGhlcic7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHNcclxuICBleHRlbmRzIFBpY2s8XHJcbiAgICBXZWF0aGVyQXBpSG91cmx5LFxyXG4gICAgJ2Nsb3VkQ292ZXInIHwgJ3ByZWNpcENoYW5jZScgfCAncmVsYXRpdmVIdW1pZGl0eScgfCAndmFsaWRUaW1lTG9jYWwnXHJcbiAgPiB7fVxyXG5cclxuZnVuY3Rpb24gQ29uZGl0aW9uc0NoYXJ0KHtcclxuICBjbG91ZENvdmVyLFxyXG4gIHByZWNpcENoYW5jZSxcclxuICByZWxhdGl2ZUh1bWlkaXR5LFxyXG4gIHZhbGlkVGltZUxvY2FsLFxyXG59OiBQcm9wcyk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCB0aW1lTGFiZWxzOiBBcnJheTxzdHJpbmc+ID0gdXNlTWVtbyhcclxuICAgICgpID0+XHJcbiAgICAgIHZhbGlkVGltZUxvY2FsLm1hcCgoZGF0ZTogc3RyaW5nKSA9PlxyXG4gICAgICAgIG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcclxuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcclxuICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgW3ZhbGlkVGltZUxvY2FsXSxcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpbmVcclxuICAgICAgdHlwZT1cImxpbmVcIlxyXG4gICAgICBkYXRhPXt7XHJcbiAgICAgICAgbGFiZWxzOiB0aW1lTGFiZWxzLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2VlZWVlZScsXHJcbiAgICAgICAgICAgIGRhdGE6IGNsb3VkQ292ZXIsXHJcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICBsYWJlbDogJ0Nsb3VkIENvdmVyJyxcclxuICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjZWVlZWVlJyxcclxuICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJyNlZWVlZWUnLFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnI2VlZWVlZScsXHJcbiAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJyNlZWVlZWUnLFxyXG4gICAgICAgICAgICBzaG93TGluZTogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM1NWJhZTcnLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyM1NWJhZTcnLFxyXG4gICAgICAgICAgICBkYXRhOiBwcmVjaXBDaGFuY2UsXHJcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICBsYWJlbDogJ1ByZWNpcGl0YXRpb24nLFxyXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyM1NWJhZTcnLFxyXG4gICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAnIzU1YmFlNycsXHJcbiAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICcjNTViYWU3JyxcclxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAnIzU1YmFlNycsXHJcbiAgICAgICAgICAgIHNob3dMaW5lOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzU1NmJlNycsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzU1NmJlNycsXHJcbiAgICAgICAgICAgIGRhdGE6IHJlbGF0aXZlSHVtaWRpdHksXHJcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICBsYWJlbDogJ0h1bWlkaXR5JyxcclxuICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjNTU2YmU3JyxcclxuICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJyM1NTZiZTcnLFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnIzU1NmJlNycsXHJcbiAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJyM1NTZiZTcnLFxyXG4gICAgICAgICAgICBzaG93TGluZTogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfX1cclxuICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgeUF4ZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICBzdGVwU2l6ZTogMTAsXHJcbiAgICAgICAgICAgICAgICBzdWdnZXN0ZWRNaW46IDAsXHJcbiAgICAgICAgICAgICAgICBzdWdnZXN0ZWRNYXg6IDEwMCxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25zQ2hhcnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=