self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/ConditionsChart/ConditionsChart.tsx":
/*!************************************************************!*\
  !*** ./src/components/ConditionsChart/ConditionsChart.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-chartjs-2 */ "./node_modules/react-chartjs-2/dist/index.modern.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Matthew\\Projects\\local-weather\\src\\components\\ConditionsChart\\ConditionsChart.tsx",
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
        backgroundColor: '#eeeeee',
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
        y: {
          suggestedMin: 0,
          suggestedMax: 100,
          ticks: {
            stepSize: 10
          }
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29uZGl0aW9uc0NoYXJ0L0NvbmRpdGlvbnNDaGFydC50c3giXSwibmFtZXMiOlsiQ29uZGl0aW9uc0NoYXJ0IiwiY2xvdWRDb3ZlciIsInByZWNpcENoYW5jZSIsInJlbGF0aXZlSHVtaWRpdHkiLCJ2YWxpZFRpbWVMb2NhbCIsInRpbWVMYWJlbHMiLCJ1c2VNZW1vIiwibWFwIiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsImhvdXIiLCJtaW51dGUiLCJsYWJlbHMiLCJkYXRhc2V0cyIsImJhY2tncm91bmRDb2xvciIsImJvcmRlckNvbG9yIiwiZGF0YSIsImZpbGwiLCJsYWJlbCIsInBvaW50QmFja2dyb3VuZENvbG9yIiwicG9pbnRCb3JkZXJDb2xvciIsInBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEhvdmVyQm9yZGVyQ29sb3IiLCJzaG93TGluZSIsIm1haW50YWluQXNwZWN0UmF0aW8iLCJzY2FsZXMiLCJ5Iiwic3VnZ2VzdGVkTWluIiwic3VnZ2VzdGVkTWF4IiwidGlja3MiLCJzdGVwU2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFVQSxTQUFTQSxlQUFULE9BS3VCO0FBQUE7O0FBQUEsTUFKckJDLFVBSXFCLFFBSnJCQSxVQUlxQjtBQUFBLE1BSHJCQyxZQUdxQixRQUhyQkEsWUFHcUI7QUFBQSxNQUZyQkMsZ0JBRXFCLFFBRnJCQSxnQkFFcUI7QUFBQSxNQURyQkMsY0FDcUIsUUFEckJBLGNBQ3FCO0FBQ3JCLE1BQU1DLFVBQXlCLEdBQUdDLDhDQUFPLENBQ3ZDO0FBQUEsV0FDRUYsY0FBYyxDQUFDRyxHQUFmLENBQW1CLFVBQUNDLElBQUQ7QUFBQSxhQUNqQixJQUFJQyxJQUFKLENBQVNELElBQVQsRUFBZUUsY0FBZixDQUE4QixPQUE5QixFQUF1QztBQUNyQ0MsWUFBSSxFQUFFLFNBRCtCO0FBRXJDQyxjQUFNLEVBQUU7QUFGNkIsT0FBdkMsQ0FEaUI7QUFBQSxLQUFuQixDQURGO0FBQUEsR0FEdUMsRUFRdkMsQ0FBQ1IsY0FBRCxDQVJ1QyxDQUF6QztBQVdBLHNCQUNFLDhEQUFDLGlEQUFEO0FBQ0UsUUFBSSxFQUFDLE1BRFA7QUFFRSxRQUFJLEVBQUU7QUFDSlMsWUFBTSxFQUFFUixVQURKO0FBRUpTLGNBQVEsRUFBRSxDQUNSO0FBQ0VDLHVCQUFlLEVBQUUsU0FEbkI7QUFFRUMsbUJBQVcsRUFBRSxTQUZmO0FBR0VDLFlBQUksRUFBRWhCLFVBSFI7QUFJRWlCLFlBQUksRUFBRSxLQUpSO0FBS0VDLGFBQUssRUFBRSxhQUxUO0FBTUVDLDRCQUFvQixFQUFFLFNBTnhCO0FBT0VDLHdCQUFnQixFQUFFLFNBUHBCO0FBUUVDLGlDQUF5QixFQUFFLFNBUjdCO0FBU0VDLDZCQUFxQixFQUFFLFNBVHpCO0FBVUVDLGdCQUFRLEVBQUU7QUFWWixPQURRLEVBYVI7QUFDRVQsdUJBQWUsRUFBRSxTQURuQjtBQUVFQyxtQkFBVyxFQUFFLFNBRmY7QUFHRUMsWUFBSSxFQUFFZixZQUhSO0FBSUVnQixZQUFJLEVBQUUsS0FKUjtBQUtFQyxhQUFLLEVBQUUsZUFMVDtBQU1FQyw0QkFBb0IsRUFBRSxTQU54QjtBQU9FQyx3QkFBZ0IsRUFBRSxTQVBwQjtBQVFFQyxpQ0FBeUIsRUFBRSxTQVI3QjtBQVNFQyw2QkFBcUIsRUFBRSxTQVR6QjtBQVVFQyxnQkFBUSxFQUFFO0FBVlosT0FiUSxFQXlCUjtBQUNFVCx1QkFBZSxFQUFFLFNBRG5CO0FBRUVDLG1CQUFXLEVBQUUsU0FGZjtBQUdFQyxZQUFJLEVBQUVkLGdCQUhSO0FBSUVlLFlBQUksRUFBRSxLQUpSO0FBS0VDLGFBQUssRUFBRSxVQUxUO0FBTUVDLDRCQUFvQixFQUFFLFNBTnhCO0FBT0VDLHdCQUFnQixFQUFFLFNBUHBCO0FBUUVDLGlDQUF5QixFQUFFLFNBUjdCO0FBU0VDLDZCQUFxQixFQUFFLFNBVHpCO0FBVUVDLGdCQUFRLEVBQUU7QUFWWixPQXpCUTtBQUZOLEtBRlI7QUEyQ0UsV0FBTyxFQUFFO0FBQ1BDLHlCQUFtQixFQUFFLEtBRGQ7QUFFUEMsWUFBTSxFQUFFO0FBQ05DLFNBQUMsRUFBRTtBQUNEQyxzQkFBWSxFQUFFLENBRGI7QUFFREMsc0JBQVksRUFBRSxHQUZiO0FBR0RDLGVBQUssRUFBRTtBQUNMQyxvQkFBUSxFQUFFO0FBREw7QUFITjtBQURHO0FBRkQ7QUEzQ1g7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEREOztHQTNFUS9CLGU7O0tBQUFBLGU7QUE2RVQsK0RBQWVBLGVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDY0ZWZkYzNiYWYwODZjNmRhMjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IExpbmUgfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xyXG5cclxuaW1wb3J0IHsgV2VhdGhlckFwaUhvdXJseSB9IGZyb20gJ3R5cGVzL3dlYXRoZXInO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzXHJcbiAgZXh0ZW5kcyBQaWNrPFxyXG4gICAgV2VhdGhlckFwaUhvdXJseSxcclxuICAgICdjbG91ZENvdmVyJyB8ICdwcmVjaXBDaGFuY2UnIHwgJ3JlbGF0aXZlSHVtaWRpdHknIHwgJ3ZhbGlkVGltZUxvY2FsJ1xyXG4gID4ge31cclxuXHJcbmZ1bmN0aW9uIENvbmRpdGlvbnNDaGFydCh7XHJcbiAgY2xvdWRDb3ZlcixcclxuICBwcmVjaXBDaGFuY2UsXHJcbiAgcmVsYXRpdmVIdW1pZGl0eSxcclxuICB2YWxpZFRpbWVMb2NhbCxcclxufTogUHJvcHMpOiBKU1guRWxlbWVudCB7XHJcbiAgY29uc3QgdGltZUxhYmVsczogQXJyYXk8c3RyaW5nPiA9IHVzZU1lbW8oXHJcbiAgICAoKSA9PlxyXG4gICAgICB2YWxpZFRpbWVMb2NhbC5tYXAoKGRhdGU6IHN0cmluZykgPT5cclxuICAgICAgICBuZXcgRGF0ZShkYXRlKS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XHJcbiAgICAgICAgICBob3VyOiAnbnVtZXJpYycsXHJcbiAgICAgICAgICBtaW51dGU6ICcyLWRpZ2l0JyxcclxuICAgICAgICB9KSxcclxuICAgICAgKSxcclxuICAgIFt2YWxpZFRpbWVMb2NhbF0sXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5lXHJcbiAgICAgIHR5cGU9XCJsaW5lXCJcclxuICAgICAgZGF0YT17e1xyXG4gICAgICAgIGxhYmVsczogdGltZUxhYmVscyxcclxuICAgICAgICBkYXRhc2V0czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlZWVlJyxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjZWVlZWVlJyxcclxuICAgICAgICAgICAgZGF0YTogY2xvdWRDb3ZlcixcclxuICAgICAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnQ2xvdWQgQ292ZXInLFxyXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyNlZWVlZWUnLFxyXG4gICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAnI2VlZWVlZScsXHJcbiAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICcjZWVlZWVlJyxcclxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAnI2VlZWVlZScsXHJcbiAgICAgICAgICAgIHNob3dMaW5lOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzU1YmFlNycsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzU1YmFlNycsXHJcbiAgICAgICAgICAgIGRhdGE6IHByZWNpcENoYW5jZSxcclxuICAgICAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnUHJlY2lwaXRhdGlvbicsXHJcbiAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnIzU1YmFlNycsXHJcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjNTViYWU3JyxcclxuICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyM1NWJhZTcnLFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICcjNTViYWU3JyxcclxuICAgICAgICAgICAgc2hvd0xpbmU6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNTU2YmU3JyxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjNTU2YmU3JyxcclxuICAgICAgICAgICAgZGF0YTogcmVsYXRpdmVIdW1pZGl0eSxcclxuICAgICAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxhYmVsOiAnSHVtaWRpdHknLFxyXG4gICAgICAgICAgICBwb2ludEJhY2tncm91bmRDb2xvcjogJyM1NTZiZTcnLFxyXG4gICAgICAgICAgICBwb2ludEJvcmRlckNvbG9yOiAnIzU1NmJlNycsXHJcbiAgICAgICAgICAgIHBvaW50SG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICcjNTU2YmU3JyxcclxuICAgICAgICAgICAgcG9pbnRIb3ZlckJvcmRlckNvbG9yOiAnIzU1NmJlNycsXHJcbiAgICAgICAgICAgIHNob3dMaW5lOiB0cnVlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9fVxyXG4gICAgICBvcHRpb25zPXt7XHJcbiAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICAgICAgc2NhbGVzOiB7XHJcbiAgICAgICAgICB5OiB7XHJcbiAgICAgICAgICAgIHN1Z2dlc3RlZE1pbjogMCxcclxuICAgICAgICAgICAgc3VnZ2VzdGVkTWF4OiAxMDAsXHJcbiAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgc3RlcFNpemU6IDEwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9fVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb25kaXRpb25zQ2hhcnQ7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=