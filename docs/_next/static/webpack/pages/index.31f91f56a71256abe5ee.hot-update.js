self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TodayOverview/TodayOverview.tsx":
/*!********************************************************!*\
  !*** ./src/components/TodayOverview/TodayOverview.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var components_ConditionsChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ConditionsChart */ "./src/components/ConditionsChart/index.ts");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Matthew\\Projects\\local-weather\\src\\components\\TodayOverview\\TodayOverview.tsx";



function TodayOverview(_ref) {
  var cloudCover = _ref.cloudCover,
      precipChance = _ref.precipChance,
      relativeHumidity = _ref.relativeHumidity,
      selectedTab = _ref.selectedTab,
      setSelectedTab = _ref.setSelectedTab,
      temperature = _ref.temperature,
      validTimeLocal = _ref.validTimeLocal,
      windSpeed = _ref.windSpeed,
      wxPhraseLong = _ref.wxPhraseLong;
  var currentTemperature = temperature[0];
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
      mt: 10,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
        textAlign: "center",
        mb: 5,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "h4",
          children: "Today"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "subtitle1",
          children: new Date().toLocaleString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
        textAlign: "center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "h1",
          children: [currentTemperature, "\xB0"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "h6",
          children: wxPhraseLong
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "body2",
          children: ["Wind: ", windSpeed, "mph"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
      display: "flex",
      justifyContent: "center",
      width: 1,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
        value: selectedTab,
        onChange: function onChange(e, newSelectedTab) {
          setSelectedTab(newSelectedTab);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Tab, {
          label: "Conditions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Tab, {
          label: "Temperature"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
      height: "40vh",
      width: 1,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ConditionsChart__WEBPACK_IMPORTED_MODULE_1__.ConditionsChart, {
        cloudCover: cloudCover,
        precipChance: precipChance,
        relativeHumidity: relativeHumidity,
        validTimeLocal: validTimeLocal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

_c = TodayOverview;
/* harmony default export */ __webpack_exports__["default"] = (TodayOverview);

var _c;

$RefreshReg$(_c, "TodayOverview");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9kYXlPdmVydmlldy9Ub2RheU92ZXJ2aWV3LnRzeCJdLCJuYW1lcyI6WyJUb2RheU92ZXJ2aWV3IiwiY2xvdWRDb3ZlciIsInByZWNpcENoYW5jZSIsInJlbGF0aXZlSHVtaWRpdHkiLCJzZWxlY3RlZFRhYiIsInNldFNlbGVjdGVkVGFiIiwidGVtcGVyYXR1cmUiLCJ2YWxpZFRpbWVMb2NhbCIsIndpbmRTcGVlZCIsInd4UGhyYXNlTG9uZyIsImN1cnJlbnRUZW1wZXJhdHVyZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIndlZWtkYXkiLCJtb250aCIsImRheSIsImUiLCJuZXdTZWxlY3RlZFRhYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUlBLFNBQVNBLGFBQVQsT0FVdUI7QUFBQSxNQVRyQkMsVUFTcUIsUUFUckJBLFVBU3FCO0FBQUEsTUFSckJDLFlBUXFCLFFBUnJCQSxZQVFxQjtBQUFBLE1BUHJCQyxnQkFPcUIsUUFQckJBLGdCQU9xQjtBQUFBLE1BTnJCQyxXQU1xQixRQU5yQkEsV0FNcUI7QUFBQSxNQUxyQkMsY0FLcUIsUUFMckJBLGNBS3FCO0FBQUEsTUFKckJDLFdBSXFCLFFBSnJCQSxXQUlxQjtBQUFBLE1BSHJCQyxjQUdxQixRQUhyQkEsY0FHcUI7QUFBQSxNQUZyQkMsU0FFcUIsUUFGckJBLFNBRXFCO0FBQUEsTUFEckJDLFlBQ3FCLFFBRHJCQSxZQUNxQjtBQUNyQixNQUFNQyxrQkFBa0IsR0FBR0osV0FBVyxDQUFDLENBQUQsQ0FBdEM7QUFFQSxzQkFDRSw4REFBQyxrREFBRDtBQUFLLFdBQU8sRUFBQyxNQUFiO0FBQW9CLGlCQUFhLEVBQUMsUUFBbEM7QUFBMkMsa0JBQWMsRUFBQyxlQUExRDtBQUEwRSxVQUFNLEVBQUMsTUFBakY7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFLLFFBQUUsRUFBRSxFQUFUO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBd0IsVUFBRSxFQUFFLENBQTVCO0FBQUEsZ0NBQ0UsOERBQUMseURBQUQ7QUFBWSxpQkFBTyxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMseURBQUQ7QUFBWSxpQkFBTyxFQUFDLFdBQXBCO0FBQUEsb0JBQ0csSUFBSUssSUFBSixHQUFXQyxjQUFYLENBQTBCLE9BQTFCLEVBQW1DO0FBQ2xDQyxtQkFBTyxFQUFFLE1BRHlCO0FBRWxDQyxpQkFBSyxFQUFFLE1BRjJCO0FBR2xDQyxlQUFHLEVBQUU7QUFINkIsV0FBbkM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBWUUsOERBQUMsa0RBQUQ7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSxnQ0FDRSw4REFBQyx5REFBRDtBQUFZLGlCQUFPLEVBQUMsSUFBcEI7QUFBQSxxQkFBMEJMLGtCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSw4REFBQyx5REFBRDtBQUFZLGlCQUFPLEVBQUMsSUFBcEI7QUFBQSxvQkFBMEJEO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRSw4REFBQyx5REFBRDtBQUFZLGlCQUFPLEVBQUMsT0FBcEI7QUFBQSwrQkFBbUNELFNBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQW9CRSw4REFBQyxrREFBRDtBQUFLLGFBQU8sRUFBQyxNQUFiO0FBQW9CLG9CQUFjLEVBQUMsUUFBbkM7QUFBNEMsV0FBSyxFQUFFLENBQW5EO0FBQUEsNkJBQ0UsOERBQUMsbURBQUQ7QUFDRSxhQUFLLEVBQUVKLFdBRFQ7QUFFRSxnQkFBUSxFQUFFLGtCQUFDWSxDQUFELEVBQVdDLGNBQVgsRUFBMkM7QUFDbkRaLHdCQUFjLENBQUNZLGNBQUQsQ0FBZDtBQUNELFNBSkg7QUFBQSxnQ0FNRSw4REFBQyxrREFBRDtBQUFLLGVBQUssRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsZUFPRSw4REFBQyxrREFBRDtBQUFLLGVBQUssRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRixlQWdDRSw4REFBQyxrREFBRDtBQUFLLFlBQU0sRUFBQyxNQUFaO0FBQW1CLFdBQUssRUFBRSxDQUExQjtBQUFBLDZCQUNFLDhEQUFDLHVFQUFEO0FBQ0Usa0JBQVUsRUFBRWhCLFVBRGQ7QUFFRSxvQkFBWSxFQUFFQyxZQUZoQjtBQUdFLHdCQUFnQixFQUFFQyxnQkFIcEI7QUFJRSxzQkFBYyxFQUFFSTtBQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJDRDs7S0F4RFFQLGE7QUEwRFQsK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMzFmOTFmNTZhNzEyNTZhYmU1ZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgVGFiLCBUYWJzLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25kaXRpb25zQ2hhcnQgfSBmcm9tICdjb21wb25lbnRzL0NvbmRpdGlvbnNDaGFydCc7XHJcblxyXG5pbXBvcnQgeyBQcm9wcywgU2VsZWN0ZWRUYWIgfSBmcm9tICcuL3RvZGF5T3ZlcnZpZXcudHlwZXMnO1xyXG5cclxuZnVuY3Rpb24gVG9kYXlPdmVydmlldyh7XHJcbiAgY2xvdWRDb3ZlcixcclxuICBwcmVjaXBDaGFuY2UsXHJcbiAgcmVsYXRpdmVIdW1pZGl0eSxcclxuICBzZWxlY3RlZFRhYixcclxuICBzZXRTZWxlY3RlZFRhYixcclxuICB0ZW1wZXJhdHVyZSxcclxuICB2YWxpZFRpbWVMb2NhbCxcclxuICB3aW5kU3BlZWQsXHJcbiAgd3hQaHJhc2VMb25nLFxyXG59OiBQcm9wcyk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCBjdXJyZW50VGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZVswXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgaGVpZ2h0PVwiMTAwJVwiPlxyXG4gICAgICA8Qm94IG10PXsxMH0+XHJcbiAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtYj17NX0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5Ub2RheTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5cclxuICAgICAgICAgICAge25ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge1xyXG4gICAgICAgICAgICAgIHdlZWtkYXk6ICdsb25nJyxcclxuICAgICAgICAgICAgICBtb250aDogJ2xvbmcnLFxyXG4gICAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiPntjdXJyZW50VGVtcGVyYXR1cmV9JmRlZzs8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57d3hQaHJhc2VMb25nfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPldpbmQ6IHt3aW5kU3BlZWR9bXBoPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIHdpZHRoPXsxfT5cclxuICAgICAgICA8VGFic1xyXG4gICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVGFifVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlOiBFdmVudCwgbmV3U2VsZWN0ZWRUYWI6IFNlbGVjdGVkVGFiKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVGFiKG5ld1NlbGVjdGVkVGFiKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRhYiBsYWJlbD1cIkNvbmRpdGlvbnNcIiAvPlxyXG4gICAgICAgICAgPFRhYiBsYWJlbD1cIlRlbXBlcmF0dXJlXCIgLz5cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAgPEJveCBoZWlnaHQ9XCI0MHZoXCIgd2lkdGg9ezF9PlxyXG4gICAgICAgIDxDb25kaXRpb25zQ2hhcnRcclxuICAgICAgICAgIGNsb3VkQ292ZXI9e2Nsb3VkQ292ZXJ9XHJcbiAgICAgICAgICBwcmVjaXBDaGFuY2U9e3ByZWNpcENoYW5jZX1cclxuICAgICAgICAgIHJlbGF0aXZlSHVtaWRpdHk9e3JlbGF0aXZlSHVtaWRpdHl9XHJcbiAgICAgICAgICB2YWxpZFRpbWVMb2NhbD17dmFsaWRUaW1lTG9jYWx9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RheU92ZXJ2aWV3O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9