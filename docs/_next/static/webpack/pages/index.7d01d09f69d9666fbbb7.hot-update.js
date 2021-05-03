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
/* harmony import */ var C_Users_Matthew_Projects_local_weather_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/dist/index.modern.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Matthew\\Projects\\local-weather\\src\\components\\TemperatureChart\\TemperatureChart.tsx",
    _s = $RefreshSig$();




function TemperatureChart(_ref) {
  _s();

  var temperature = _ref.temperature,
      validTimeLocal = _ref.validTimeLocal;
  var timeLabels = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return validTimeLocal.map(function (date) {
      return new Date(date).toLocaleString('en-US', {
        hour: 'numeric',
        minute: '2-digit'
      });
    });
  }, [validTimeLocal]);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Line, {
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
          suggestedMin: Math.min.apply(Math, (0,C_Users_Matthew_Projects_local_weather_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(temperature)) - 5,
          suggestedMax: Math.max.apply(Math, (0,C_Users_Matthew_Projects_local_weather_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(temperature)) + 5,
          ticks: {
            stepSize: 2
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGVtcGVyYXR1cmVDaGFydC9UZW1wZXJhdHVyZUNoYXJ0LnRzeCJdLCJuYW1lcyI6WyJUZW1wZXJhdHVyZUNoYXJ0IiwidGVtcGVyYXR1cmUiLCJ2YWxpZFRpbWVMb2NhbCIsInRpbWVMYWJlbHMiLCJ1c2VNZW1vIiwibWFwIiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImhvdXIiLCJtaW51dGUiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiZGF0YSIsImZpbGwiLCJsYWJlbCIsInBvaW50QmFja2dyb3VuZENvbG9yIiwicG9pbnRCb3JkZXJDb2xvciIsInBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyQ29sb3IiLCJzaG93TGluZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJzY2FsZXMiLCJ5Iiwic3VnZ2VzdGVkTWluIiwiTWF0aCIsIm1pbiIsInN1Z2dlc3RlZE1heCIsIm1heCIsInRpY2tzIiwic3RlcFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFNQSxTQUFTQSxnQkFBVCxPQUErRTtBQUFBOztBQUFBLE1BQW5EQyxXQUFtRCxRQUFuREEsV0FBbUQ7QUFBQSxNQUF0Q0MsY0FBc0MsUUFBdENBLGNBQXNDO0FBQzdFLE1BQU1DLFVBQXlCLEdBQUdDLDhDQUFPLENBQ3ZDO0FBQUEsV0FDRUYsY0FBYyxDQUFDRyxHQUFmLENBQW1CLFVBQUNDLElBQUQ7QUFBQSxhQUNqQixJQUFJQyxJQUFKLENBQVNELElBQVQsRUFBZUUsY0FBZixDQUE4QixPQUE5QixFQUF1QztBQUNyQ0MsWUFBSSxFQUFFLFNBRCtCO0FBRXJDQyxjQUFNLEVBQUU7QUFGNkIsT0FBdkMsQ0FEaUI7QUFBQSxLQUFuQixDQURGO0FBQUEsR0FEdUMsRUFRdkMsQ0FBQ1IsY0FBRCxDQVJ1QyxDQUF6QztBQVdBLHNCQUNFLDhEQUFDLGlEQUFEO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxRQUFJLEVBQUU7QUFDSlMsWUFBTSxFQUFFUixVQURKO0FBRUpTLGNBQVEsRUFBRSxDQUNSO0FBQ0VDLHVCQUFlLEVBQUUsU0FEbkI7QUFFRUMsbUJBQVcsRUFBRSxTQUZmO0FBR0VDLFlBQUksRUFBRWQsV0FIUjtBQUlFZSxZQUFJLEVBQUUsS0FKUjtBQUtFQyxhQUFLLEVBQUUsYUFMVDtBQU1FQyw0QkFBb0IsRUFBRSxTQU54QjtBQU9FQyx3QkFBZ0IsRUFBRSxTQVBwQjtBQVFFQyxpQ0FBeUIsRUFBRSxTQVI3QjtBQVNFQyw2QkFBcUIsRUFBRSxTQVR6QjtBQVVFQyxnQkFBUSxFQUFFO0FBVlosT0FEUTtBQUZOLEtBRlI7QUFtQkUsV0FBTyxFQUFFO0FBQ1BDLHlCQUFtQixFQUFFLEtBRGQ7QUFFUEMsWUFBTSxFQUFFO0FBQ05DLFNBQUMsRUFBRTtBQUNEQyxzQkFBWSxFQUFFQyxJQUFJLENBQUNDLEdBQUwsT0FBQUQsSUFBSSw2SkFBUTFCLFdBQVIsRUFBSixHQUEyQixDQUR4QztBQUVENEIsc0JBQVksRUFBRUYsSUFBSSxDQUFDRyxHQUFMLE9BQUFILElBQUksNkpBQVExQixXQUFSLEVBQUosR0FBMkIsQ0FGeEM7QUFHRDhCLGVBQUssRUFBRTtBQUNMQyxvQkFBUSxFQUFFO0FBREw7QUFITjtBQURHO0FBRkQ7QUFuQlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0NEOztHQTlDUWhDLGdCOztLQUFBQSxnQjtBQWdEVCwrREFBZUEsZ0JBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2QwMWQwOWY2OWQ5NjY2ZmJiYjcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmUgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5cclxuaW1wb3J0IHsgV2VhdGhlckFwaUhvdXJseSB9IGZyb20gJ3R5cGVzL3dlYXRoZXInO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgUGljazxXZWF0aGVyQXBpSG91cmx5LCAndGVtcGVyYXR1cmUnIHwgJ3ZhbGlkVGltZUxvY2FsJz4ge31cclxuXHJcbmZ1bmN0aW9uIFRlbXBlcmF0dXJlQ2hhcnQoeyB0ZW1wZXJhdHVyZSwgdmFsaWRUaW1lTG9jYWwgfTogUHJvcHMpOiBKU1guRWxlbWVudCB7XHJcbiAgY29uc3QgdGltZUxhYmVsczogQXJyYXk8c3RyaW5nPiA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PlxyXG4gICAgICB2YWxpZFRpbWVMb2NhbC5tYXAoKGRhdGU6IHN0cmluZykgPT5cclxuICAgICAgICBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XHJcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcclxuICAgICAgICB9KSxcclxuICAgICAgKSxcclxuICAgIFt2YWxpZFRpbWVMb2NhbF0sXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5lXHJcbiAgICAgIHR5cGU9XCJsaW5lXCJcclxuICAgICAgZGF0YT17e1xyXG4gICAgICAgIGxhYmVsczogdGltZUxhYmVscyxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlZWVlJyxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZWVlZWVlJyxcclxuICAgICAgICAgICAgZGF0YTogdGVtcGVyYXR1cmUsXHJcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICBsYWJlbDogJ1RlbXBlcmF0dXJlJyxcclxuICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjZWVlZWVlJyxcclxuICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJyNlZWVlZWUnLFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnI2VlZWVlZScsXHJcbiAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJyNlZWVlZWUnLFxyXG4gICAgICAgICAgICBzaG93TGluZTogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfX1cclxuICAgICAgb3B0aW9ucz17e1xyXG4gICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxyXG4gICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgeToge1xyXG4gICAgICAgICAgICBzdWdnZXN0ZWRNaW46IE1hdGgubWluKC4uLnRlbXBlcmF0dXJlKSAtIDUsXHJcbiAgICAgICAgICAgIHN1Z2dlc3RlZE1heDogTWF0aC5tYXgoLi4udGVtcGVyYXR1cmUpICsgNSxcclxuICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICBzdGVwU2l6ZTogMixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfX1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVtcGVyYXR1cmVDaGFydDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==