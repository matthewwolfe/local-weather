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
          beginAtZero: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVtcGVyYXR1cmVDaGFydC9UZW1wZXJhdHVyZUNoYXJ0LnRzeCJdLCJuYW1lcyI6WyJUZW1wZXJhdHVyZUNoYXJ0IiwidGVtcGVyYXR1cmUiLCJ2YWxpZFRpbWVMb2NhbCIsInRpbWVMYWJlbHMiLCJ1c2VNZW1vIiwibWFwIiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImhvdXIiLCJtaW51dGUiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiZGF0YSIsImZpbGwiLCJsYWJlbCIsInBvaW50QmFja2dyb3VuZENvbG9yIiwicG9pbnRCb3JkZXJDb2xvciIsInBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyQ29sb3IiLCJzaG93TGluZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJzY2FsZXMiLCJ5IiwiYmVnaW5BdFplcm8iLCJ0aWNrcyIsInN0ZXBTaXplIiwibWluIiwibWF4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQU1BLFNBQVNBLGdCQUFULE9BQStFO0FBQUE7O0FBQUEsTUFBbkRDLFdBQW1ELFFBQW5EQSxXQUFtRDtBQUFBLE1BQXRDQyxjQUFzQyxRQUF0Q0EsY0FBc0M7QUFDN0UsTUFBTUMsVUFBeUIsR0FBR0MsOENBQU8sQ0FDdkM7QUFBQSxXQUNFRixjQUFjLENBQUNHLEdBQWYsQ0FBbUIsVUFBQ0MsSUFBRDtBQUFBLGFBQ2pCLElBQUlDLElBQUosQ0FBU0QsSUFBVCxFQUFlRSxjQUFmLENBQThCLE9BQTlCLEVBQXVDO0FBQ3JDQyxZQUFJLEVBQUUsU0FEK0I7QUFFckNDLGNBQU0sRUFBRTtBQUY2QixPQUF2QyxDQURpQjtBQUFBLEtBQW5CLENBREY7QUFBQSxHQUR1QyxFQVF2QyxDQUFDUixjQUFELENBUnVDLENBQXpDO0FBV0Esc0JBQ0UsOERBQUMsaURBQUQ7QUFDRSxRQUFJLEVBQUMsTUFEUDtBQUVFLFFBQUksRUFBRTtBQUNKUyxZQUFNLEVBQUVSLFVBREo7QUFFSlMsY0FBUSxFQUFFLENBQ1I7QUFDRUMsdUJBQWUsRUFBRSxTQURuQjtBQUVFQyxtQkFBVyxFQUFFLFNBRmY7QUFHRUMsWUFBSSxFQUFFZCxXQUhSO0FBSUVlLFlBQUksRUFBRSxLQUpSO0FBS0VDLGFBQUssRUFBRSxhQUxUO0FBTUVDLDRCQUFvQixFQUFFLFNBTnhCO0FBT0VDLHdCQUFnQixFQUFFLFNBUHBCO0FBUUVDLGlDQUF5QixFQUFFLFNBUjdCO0FBU0VDLDZCQUFxQixFQUFFLFNBVHpCO0FBVUVDLGdCQUFRLEVBQUU7QUFWWixPQURRO0FBRk4sS0FGUjtBQW1CRSxXQUFPLEVBQUU7QUFDUEMseUJBQW1CLEVBQUUsS0FEZDtBQUVQQyxZQUFNLEVBQUU7QUFDTkMsU0FBQyxFQUFFO0FBQ0RDLHFCQUFXLEVBQUUsSUFEWjtBQUVEQyxlQUFLLEVBQUU7QUFDTEMsb0JBQVEsRUFBRSxDQURMO0FBRUxDLGVBQUcsRUFBRSxDQUZBO0FBR0xDLGVBQUcsRUFBRTtBQUhBO0FBRk47QUFERztBQUZEO0FBbkJYO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1DRDs7R0EvQ1E5QixnQjs7S0FBQUEsZ0I7QUFpRFQsK0RBQWVBLGdCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjY0NTU5NWZlN2FlMWNhNjI1ZTUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBMaW5lIH0gZnJvbSAncmVhY3QtY2hhcnRqcy0yJztcclxuXHJcbmltcG9ydCB7IFdlYXRoZXJBcGlIb3VybHkgfSBmcm9tICd0eXBlcy93ZWF0aGVyJztcclxuXHJcbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFBpY2s8V2VhdGhlckFwaUhvdXJseSwgJ3RlbXBlcmF0dXJlJyB8ICd2YWxpZFRpbWVMb2NhbCc+IHt9XHJcblxyXG5mdW5jdGlvbiBUZW1wZXJhdHVyZUNoYXJ0KHsgdGVtcGVyYXR1cmUsIHZhbGlkVGltZUxvY2FsIH06IFByb3BzKTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IHRpbWVMYWJlbHM6IEFycmF5PHN0cmluZz4gPSB1c2VNZW1vKFxyXG4gICAgKCkgPT5cclxuICAgICAgdmFsaWRUaW1lTG9jYWwubWFwKChkYXRlOiBzdHJpbmcpID0+XHJcbiAgICAgICAgbmV3IERhdGUoZGF0ZSkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge1xyXG4gICAgICAgICAgaG91cjogJ251bWVyaWMnLFxyXG4gICAgICAgICAgbWludXRlOiAnMi1kaWdpdCcsXHJcbiAgICAgICAgfSksXHJcbiAgICAgICksXHJcbiAgICBbdmFsaWRUaW1lTG9jYWxdLFxyXG4gICk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGluZVxyXG4gICAgICB0eXBlPVwibGluZVwiXHJcbiAgICAgIGRhdGE9e3tcclxuICAgICAgICBsYWJlbHM6IHRpbWVMYWJlbHMsXHJcbiAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2VlZWVlZScsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2VlZWVlZScsXHJcbiAgICAgICAgICAgIGRhdGE6IHRlbXBlcmF0dXJlLFxyXG4gICAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgbGFiZWw6ICdUZW1wZXJhdHVyZScsXHJcbiAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2VlZWVlZScsXHJcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjZWVlZWVlJyxcclxuICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyNlZWVlZWUnLFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICcjZWVlZWVlJyxcclxuICAgICAgICAgICAgc2hvd0xpbmU6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH19XHJcbiAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgIHk6IHtcclxuICAgICAgICAgICAgYmVnaW5BdFplcm86IHRydWUsXHJcbiAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgc3RlcFNpemU6IDIsXHJcbiAgICAgICAgICAgICAgbWluOiAwLFxyXG4gICAgICAgICAgICAgIG1heDogMTAwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZW1wZXJhdHVyZUNoYXJ0O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9