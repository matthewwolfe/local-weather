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
        y: {
          ticks: {
            stepSize: 2,
            min: 0,
            max: 100
          }
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVtcGVyYXR1cmVDaGFydC9UZW1wZXJhdHVyZUNoYXJ0LnRzeCJdLCJuYW1lcyI6WyJUZW1wZXJhdHVyZUNoYXJ0IiwidGVtcGVyYXR1cmUiLCJ2YWxpZFRpbWVMb2NhbCIsInRpbWVMYWJlbHMiLCJ1c2VNZW1vIiwibWFwIiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImhvdXIiLCJtaW51dGUiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiZGF0YSIsImZpbGwiLCJsYWJlbCIsInBvaW50QmFja2dyb3VuZENvbG9yIiwicG9pbnRCb3JkZXJDb2xvciIsInBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyQ29sb3IiLCJzaG93TGluZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJzY2FsZXMiLCJ5IiwidGlja3MiLCJzdGVwU2l6ZSIsIm1pbiIsIm1heCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFNQSxTQUFTQSxnQkFBVCxPQUErRTtBQUFBOztBQUFBLE1BQW5EQyxXQUFtRCxRQUFuREEsV0FBbUQ7QUFBQSxNQUF0Q0MsY0FBc0MsUUFBdENBLGNBQXNDO0FBQzdFLE1BQU1DLFVBQXlCLEdBQUdDLDhDQUFPLENBQ3ZDO0FBQUEsV0FDRUYsY0FBYyxDQUFDRyxHQUFmLENBQW1CLFVBQUNDLElBQUQ7QUFBQSxhQUNqQixJQUFJQyxJQUFKLENBQVNELElBQVQsRUFBZUUsY0FBZixDQUE4QixPQUE5QixFQUF1QztBQUNyQ0MsWUFBSSxFQUFFLFNBRCtCO0FBRXJDQyxjQUFNLEVBQUU7QUFGNkIsT0FBdkMsQ0FEaUI7QUFBQSxLQUFuQixDQURGO0FBQUEsR0FEdUMsRUFRdkMsQ0FBQ1IsY0FBRCxDQVJ1QyxDQUF6QztBQVdBLHNCQUNFLDhEQUFDLGlEQUFEO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxRQUFJLEVBQUU7QUFDSlMsWUFBTSxFQUFFUixVQURKO0FBRUpTLGNBQVEsRUFBRSxDQUNSO0FBQ0VDLHVCQUFlLEVBQUUsU0FEbkI7QUFFRUMsbUJBQVcsRUFBRSxTQUZmO0FBR0VDLFlBQUksRUFBRWQsV0FIUjtBQUlFZSxZQUFJLEVBQUUsS0FKUjtBQUtFQyxhQUFLLEVBQUUsYUFMVDtBQU1FQyw0QkFBb0IsRUFBRSxTQU54QjtBQU9FQyx3QkFBZ0IsRUFBRSxTQVBwQjtBQVFFQyxpQ0FBeUIsRUFBRSxTQVI3QjtBQVNFQyw2QkFBcUIsRUFBRSxTQVR6QjtBQVVFQyxnQkFBUSxFQUFFO0FBVlosT0FEUTtBQUZOLEtBRlI7QUFtQkUsV0FBTyxFQUFFO0FBQ1BDLHlCQUFtQixFQUFFLEtBRGQ7QUFFUEMsWUFBTSxFQUFFO0FBQ05DLFNBQUMsRUFBRTtBQUNEQyxlQUFLLEVBQUU7QUFDTEMsb0JBQVEsRUFBRSxDQURMO0FBRUxDLGVBQUcsRUFBRSxDQUZBO0FBR0xDLGVBQUcsRUFBRTtBQUhBO0FBRE47QUFERztBQUZEO0FBbkJYO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtDRDs7R0E5Q1E3QixnQjs7S0FBQUEsZ0I7QUFnRFQsK0RBQWVBLGdCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjQ3YTM1YmFmMmY0NzFlNjY1ZTk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuXHJcbmltcG9ydCB7IFdlYXRoZXJBcGlIb3VybHkgfSBmcm9tICd0eXBlcy93ZWF0aGVyJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFBpY2s8V2VhdGhlckFwaUhvdXJseSwgJ3RlbXBlcmF0dXJlJyB8ICd2YWxpZFRpbWVMb2NhbCc+IHt9XHJcblxyXG5mdW5jdGlvbiBUZW1wZXJhdHVyZUNoYXJ0KHsgdGVtcGVyYXR1cmUsIHZhbGlkVGltZUxvY2FsIH06IFByb3BzKTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IHRpbWVMYWJlbHM6IEFycmF5PHN0cmluZz4gPSB1c2VNZW1vKFxyXG4gICAgKCkgPT5cclxuICAgICAgdmFsaWRUaW1lTG9jYWwubWFwKChkYXRlOiBzdHJpbmcpID0+XHJcbiAgICAgICAgbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge1xyXG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICksXHJcbiAgICBbdmFsaWRUaW1lTG9jYWxdLFxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGluZVxyXG4gICAgICB0eXBlPVwibGluZVwiXHJcbiAgICAgIGRhdGE9e3tcclxuICAgICAgICBsYWJlbHM6IHRpbWVMYWJlbHMsXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2VlZWVlZScsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2VlZWVlZScsXHJcbiAgICAgICAgICAgIGRhdGE6IHRlbXBlcmF0dXJlLFxyXG4gICAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgbGFiZWw6ICdUZW1wZXJhdHVyZScsXHJcbiAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2VlZWVlZScsXHJcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjZWVlZWVlJyxcclxuICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyNlZWVlZWUnLFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICcjZWVlZWVlJyxcclxuICAgICAgICAgICAgc2hvd0xpbmU6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH19XHJcbiAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICBzdGVwU2l6ZTogMixcclxuICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgbWF4OiAxMDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH19XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlbXBlcmF0dXJlQ2hhcnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=