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


var _jsxFileName = "C:\\Users\\Matthew\\Projects\\local-weather\\src\\components\\TodayOverview\\TodayOverview.tsx",
    _s = $RefreshSig$();



var useStyles = (0,_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.makeStyles)({
  root: {
    textTransform: 'uppercase'
  }
});

function TodayOverview(_ref) {
  _s();

  var cloudCover = _ref.cloudCover,
      precipChance = _ref.precipChance,
      relativeHumidity = _ref.relativeHumidity,
      selectedTab = _ref.selectedTab,
      setSelectedTab = _ref.setSelectedTab,
      temperature = _ref.temperature,
      validTimeLocal = _ref.validTimeLocal,
      windSpeed = _ref.windSpeed,
      wxPhraseLong = _ref.wxPhraseLong;
  var classes = useStyles();
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
          lineNumber: 30,
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
          lineNumber: 31,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
        textAlign: "center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "h1",
          children: [currentTemperature, "\xB0"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "h6",
          children: wxPhraseLong
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "body2",
          children: ["Wind: ", windSpeed, "mph"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
      display: "flex",
      justifyContent: "center",
      width: 1,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
        classes: classes.root,
        value: selectedTab,
        onChange: function onChange(e, newSelectedTab) {
          setSelectedTab(newSelectedTab);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Tab, {
          label: "Conditions",
          value: "conditions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Tab, {
          label: "Temperature",
          value: "temperature"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
      height: "40vh",
      width: 1,
      children: selectedTab === 'conditions' && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ConditionsChart__WEBPACK_IMPORTED_MODULE_1__.ConditionsChart, {
        cloudCover: cloudCover,
        precipChance: precipChance,
        relativeHumidity: relativeHumidity,
        validTimeLocal: validTimeLocal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

_s(TodayOverview, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9kYXlPdmVydmlldy9Ub2RheU92ZXJ2aWV3LnRzeCJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsInRleHRUcmFuc2Zvcm0iLCJUb2RheU92ZXJ2aWV3IiwiY2xvdWRDb3ZlciIsInByZWNpcENoYW5jZSIsInJlbGF0aXZlSHVtaWRpdHkiLCJzZWxlY3RlZFRhYiIsInNldFNlbGVjdGVkVGFiIiwidGVtcGVyYXR1cmUiLCJ2YWxpZFRpbWVMb2NhbCIsIndpbmRTcGVlZCIsInd4UGhyYXNlTG9uZyIsImNsYXNzZXMiLCJjdXJyZW50VGVtcGVyYXR1cmUiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJ3ZWVrZGF5IiwibW9udGgiLCJkYXkiLCJlIiwibmV3U2VsZWN0ZWRUYWIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUlBLElBQU1BLFNBQVMsR0FBR0MsNkRBQVUsQ0FBQztBQUMzQkMsTUFBSSxFQUFFO0FBQ0pDLGlCQUFhLEVBQUU7QUFEWDtBQURxQixDQUFELENBQTVCOztBQU1BLFNBQVNDLGFBQVQsT0FVdUI7QUFBQTs7QUFBQSxNQVRyQkMsVUFTcUIsUUFUckJBLFVBU3FCO0FBQUEsTUFSckJDLFlBUXFCLFFBUnJCQSxZQVFxQjtBQUFBLE1BUHJCQyxnQkFPcUIsUUFQckJBLGdCQU9xQjtBQUFBLE1BTnJCQyxXQU1xQixRQU5yQkEsV0FNcUI7QUFBQSxNQUxyQkMsY0FLcUIsUUFMckJBLGNBS3FCO0FBQUEsTUFKckJDLFdBSXFCLFFBSnJCQSxXQUlxQjtBQUFBLE1BSHJCQyxjQUdxQixRQUhyQkEsY0FHcUI7QUFBQSxNQUZyQkMsU0FFcUIsUUFGckJBLFNBRXFCO0FBQUEsTUFEckJDLFlBQ3FCLFFBRHJCQSxZQUNxQjtBQUNyQixNQUFNQyxPQUFPLEdBQUdkLFNBQVMsRUFBekI7QUFDQSxNQUFNZSxrQkFBa0IsR0FBR0wsV0FBVyxDQUFDLENBQUQsQ0FBdEM7QUFFQSxzQkFDRSw4REFBQyxrREFBRDtBQUFLLFdBQU8sRUFBQyxNQUFiO0FBQW9CLGlCQUFhLEVBQUMsUUFBbEM7QUFBMkMsa0JBQWMsRUFBQyxlQUExRDtBQUEwRSxVQUFNLEVBQUMsTUFBakY7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFLLFFBQUUsRUFBRSxFQUFUO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBd0IsVUFBRSxFQUFFLENBQTVCO0FBQUEsZ0NBQ0UsOERBQUMseURBQUQ7QUFBWSxpQkFBTyxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMseURBQUQ7QUFBWSxpQkFBTyxFQUFDLFdBQXBCO0FBQUEsb0JBQ0csSUFBSU0sSUFBSixHQUFXQyxjQUFYLENBQTBCLE9BQTFCLEVBQW1DO0FBQ2xDQyxtQkFBTyxFQUFFLE1BRHlCO0FBRWxDQyxpQkFBSyxFQUFFLE1BRjJCO0FBR2xDQyxlQUFHLEVBQUU7QUFINkIsV0FBbkM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBWUUsOERBQUMsa0RBQUQ7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSxnQ0FDRSw4REFBQyx5REFBRDtBQUFZLGlCQUFPLEVBQUMsSUFBcEI7QUFBQSxxQkFBMEJMLGtCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSw4REFBQyx5REFBRDtBQUFZLGlCQUFPLEVBQUMsSUFBcEI7QUFBQSxvQkFBMEJGO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRSw4REFBQyx5REFBRDtBQUFZLGlCQUFPLEVBQUMsT0FBcEI7QUFBQSwrQkFBbUNELFNBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQW9CRSw4REFBQyxrREFBRDtBQUFLLGFBQU8sRUFBQyxNQUFiO0FBQW9CLG9CQUFjLEVBQUMsUUFBbkM7QUFBNEMsV0FBSyxFQUFFLENBQW5EO0FBQUEsNkJBQ0UsOERBQUMsbURBQUQ7QUFDRSxlQUFPLEVBQUVFLE9BQU8sQ0FBQ1osSUFEbkI7QUFFRSxhQUFLLEVBQUVNLFdBRlQ7QUFHRSxnQkFBUSxFQUFFLGtCQUFDYSxDQUFELEVBQUlDLGNBQUosRUFBb0M7QUFDNUNiLHdCQUFjLENBQUNhLGNBQUQsQ0FBZDtBQUNELFNBTEg7QUFBQSxnQ0FPRSw4REFBQyxrREFBRDtBQUFLLGVBQUssRUFBQyxZQUFYO0FBQXdCLGVBQUssRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGLGVBUUUsOERBQUMsa0RBQUQ7QUFBSyxlQUFLLEVBQUMsYUFBWDtBQUF5QixlQUFLLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEJGLGVBaUNFLDhEQUFDLGtEQUFEO0FBQUssWUFBTSxFQUFDLE1BQVo7QUFBbUIsV0FBSyxFQUFFLENBQTFCO0FBQUEsZ0JBQ0dkLFdBQVcsS0FBSyxZQUFoQixpQkFDQyw4REFBQyx1RUFBRDtBQUNFLGtCQUFVLEVBQUVILFVBRGQ7QUFFRSxvQkFBWSxFQUFFQyxZQUZoQjtBQUdFLHdCQUFnQixFQUFFQyxnQkFIcEI7QUFJRSxzQkFBYyxFQUFFSTtBQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQThDRDs7R0E1RFFQLGE7VUFXU0osUzs7O0tBWFRJLGE7QUE4RFQsK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTMwZmU0YmU0OThlMTUyNTE1YTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgbWFrZVN0eWxlcywgVGFiLCBUYWJzLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25kaXRpb25zQ2hhcnQgfSBmcm9tICdjb21wb25lbnRzL0NvbmRpdGlvbnNDaGFydCc7XHJcblxyXG5pbXBvcnQgeyBQcm9wcywgU2VsZWN0ZWRUYWIgfSBmcm9tICcuL3RvZGF5T3ZlcnZpZXcudHlwZXMnO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XHJcbiAgcm9vdDoge1xyXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgfSxcclxufSk7XHJcblxyXG5mdW5jdGlvbiBUb2RheU92ZXJ2aWV3KHtcclxuICBjbG91ZENvdmVyLFxyXG4gIHByZWNpcENoYW5jZSxcclxuICByZWxhdGl2ZUh1bWlkaXR5LFxyXG4gIHNlbGVjdGVkVGFiLFxyXG4gIHNldFNlbGVjdGVkVGFiLFxyXG4gIHRlbXBlcmF0dXJlLFxyXG4gIHZhbGlkVGltZUxvY2FsLFxyXG4gIHdpbmRTcGVlZCxcclxuICB3eFBocmFzZUxvbmcsXHJcbn06IFByb3BzKTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBjdXJyZW50VGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZVswXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgaGVpZ2h0PVwiMTAwJVwiPlxyXG4gICAgICA8Qm94IG10PXsxMH0+XHJcbiAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtYj17NX0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5Ub2RheTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5cclxuICAgICAgICAgICAge25ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge1xyXG4gICAgICAgICAgICAgIHdlZWtkYXk6ICdsb25nJyxcclxuICAgICAgICAgICAgICBtb250aDogJ2xvbmcnLFxyXG4gICAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiPntjdXJyZW50VGVtcGVyYXR1cmV9JmRlZzs8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57d3hQaHJhc2VMb25nfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPldpbmQ6IHt3aW5kU3BlZWR9bXBoPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIHdpZHRoPXsxfT5cclxuICAgICAgICA8VGFic1xyXG4gICAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlcy5yb290fVxyXG4gICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVGFifVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdTZWxlY3RlZFRhYjogU2VsZWN0ZWRUYWIpID0+IHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRUYWIobmV3U2VsZWN0ZWRUYWIpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VGFiIGxhYmVsPVwiQ29uZGl0aW9uc1wiIHZhbHVlPVwiY29uZGl0aW9uc1wiIC8+XHJcbiAgICAgICAgICA8VGFiIGxhYmVsPVwiVGVtcGVyYXR1cmVcIiB2YWx1ZT1cInRlbXBlcmF0dXJlXCIgLz5cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAgPEJveCBoZWlnaHQ9XCI0MHZoXCIgd2lkdGg9ezF9PlxyXG4gICAgICAgIHtzZWxlY3RlZFRhYiA9PT0gJ2NvbmRpdGlvbnMnICYmIChcclxuICAgICAgICAgIDxDb25kaXRpb25zQ2hhcnRcclxuICAgICAgICAgICAgY2xvdWRDb3Zlcj17Y2xvdWRDb3Zlcn1cclxuICAgICAgICAgICAgcHJlY2lwQ2hhbmNlPXtwcmVjaXBDaGFuY2V9XHJcbiAgICAgICAgICAgIHJlbGF0aXZlSHVtaWRpdHk9e3JlbGF0aXZlSHVtaWRpdHl9XHJcbiAgICAgICAgICAgIHZhbGlkVGltZUxvY2FsPXt2YWxpZFRpbWVMb2NhbH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RheU92ZXJ2aWV3O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9