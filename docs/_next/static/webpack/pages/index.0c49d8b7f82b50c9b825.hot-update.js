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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var components_ConditionsChart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/ConditionsChart */ "./src/components/ConditionsChart/index.ts");
/* harmony import */ var components_TemperatureChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/TemperatureChart */ "./src/components/TemperatureChart/index.ts");
/* harmony import */ var _todayOverview_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todayOverview.types */ "./src/components/TodayOverview/todayOverview.types.ts");
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
      mt: 10,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
        textAlign: "center",
        mb: 5,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
          variant: "h4",
          children: "Today"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
          variant: "subtitle1",
          children: new Date().toLocaleString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric'
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
        textAlign: "center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
          variant: "h1",
          children: [currentTemperature, "\xB0"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
          variant: "h6",
          children: wxPhraseLong
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Typography, {
          variant: "body2",
          children: ["Wind: ", windSpeed, "mph"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
      display: "flex",
      justifyContent: "center",
      width: 1,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Tabs, {
        value: selectedTab,
        onChange: function onChange(e, newSelectedTab) {
          setSelectedTab(newSelectedTab);
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Tab, {
          label: "Conditions",
          value: "conditions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Tab, {
          label: "Temperature",
          value: "temperature"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Box, {
      height: "40vh",
      width: [1, 1, 1 / 2],
      children: [selectedTab === _todayOverview_types__WEBPACK_IMPORTED_MODULE_3__.SelectedTab.Conditions && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ConditionsChart__WEBPACK_IMPORTED_MODULE_1__.ConditionsChart, {
        cloudCover: cloudCover,
        precipChance: precipChance,
        relativeHumidity: relativeHumidity,
        validTimeLocal: validTimeLocal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }, this), selectedTab === _todayOverview_types__WEBPACK_IMPORTED_MODULE_3__.SelectedTab.Temperature && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_TemperatureChart__WEBPACK_IMPORTED_MODULE_2__.TemperatureChart, {
        temperature: temperature,
        validTimeLocal: validTimeLocal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 21,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9kYXlPdmVydmlldy9Ub2RheU92ZXJ2aWV3LnRzeCJdLCJuYW1lcyI6WyJUb2RheU92ZXJ2aWV3IiwiY2xvdWRDb3ZlciIsInByZWNpcENoYW5jZSIsInJlbGF0aXZlSHVtaWRpdHkiLCJzZWxlY3RlZFRhYiIsInNldFNlbGVjdGVkVGFiIiwidGVtcGVyYXR1cmUiLCJ2YWxpZFRpbWVMb2NhbCIsIndpbmRTcGVlZCIsInd4UGhyYXNlTG9uZyIsImN1cnJlbnRUZW1wZXJhdHVyZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIndlZWtkYXkiLCJtb250aCIsImRheSIsImUiLCJuZXdTZWxlY3RlZFRhYiIsIlNlbGVjdGVkVGFiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsYUFBVCxPQVV1QjtBQUFBLE1BVHJCQyxVQVNxQixRQVRyQkEsVUFTcUI7QUFBQSxNQVJyQkMsWUFRcUIsUUFSckJBLFlBUXFCO0FBQUEsTUFQckJDLGdCQU9xQixRQVByQkEsZ0JBT3FCO0FBQUEsTUFOckJDLFdBTXFCLFFBTnJCQSxXQU1xQjtBQUFBLE1BTHJCQyxjQUtxQixRQUxyQkEsY0FLcUI7QUFBQSxNQUpyQkMsV0FJcUIsUUFKckJBLFdBSXFCO0FBQUEsTUFIckJDLGNBR3FCLFFBSHJCQSxjQUdxQjtBQUFBLE1BRnJCQyxTQUVxQixRQUZyQkEsU0FFcUI7QUFBQSxNQURyQkMsWUFDcUIsUUFEckJBLFlBQ3FCO0FBQ3JCLE1BQU1DLGtCQUFrQixHQUFHSixXQUFXLENBQUMsQ0FBRCxDQUF0QztBQUVBLHNCQUNFLDhEQUFDLGtEQUFEO0FBQUssV0FBTyxFQUFDLE1BQWI7QUFBb0IsaUJBQWEsRUFBQyxRQUFsQztBQUEyQyxrQkFBYyxFQUFDLGVBQTFEO0FBQTBFLFVBQU0sRUFBQyxNQUFqRjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUF3QixVQUFFLEVBQUUsQ0FBNUI7QUFBQSxnQ0FDRSw4REFBQyx5REFBRDtBQUFZLGlCQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSw4REFBQyx5REFBRDtBQUFZLGlCQUFPLEVBQUMsV0FBcEI7QUFBQSxvQkFDRyxJQUFJSyxJQUFKLEdBQVdDLGNBQVgsQ0FBMEIsT0FBMUIsRUFBbUM7QUFDbENDLG1CQUFPLEVBQUUsTUFEeUI7QUFFbENDLGlCQUFLLEVBQUUsTUFGMkI7QUFHbENDLGVBQUcsRUFBRTtBQUg2QixXQUFuQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFZRSw4REFBQyxrREFBRDtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLGdDQUNFLDhEQUFDLHlEQUFEO0FBQVksaUJBQU8sRUFBQyxJQUFwQjtBQUFBLHFCQUEwQkwsa0JBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLDhEQUFDLHlEQUFEO0FBQVksaUJBQU8sRUFBQyxJQUFwQjtBQUFBLG9CQUEwQkQ7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFLDhEQUFDLHlEQUFEO0FBQVksaUJBQU8sRUFBQyxPQUFwQjtBQUFBLCtCQUFtQ0QsU0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBb0JFLDhEQUFDLGtEQUFEO0FBQUssYUFBTyxFQUFDLE1BQWI7QUFBb0Isb0JBQWMsRUFBQyxRQUFuQztBQUE0QyxXQUFLLEVBQUUsQ0FBbkQ7QUFBQSw2QkFDRSw4REFBQyxtREFBRDtBQUNFLGFBQUssRUFBRUosV0FEVDtBQUVFLGdCQUFRLEVBQUUsa0JBQUNZLENBQUQsRUFBSUMsY0FBSixFQUFvQztBQUM1Q1osd0JBQWMsQ0FBQ1ksY0FBRCxDQUFkO0FBQ0QsU0FKSDtBQUFBLGdDQU1FLDhEQUFDLGtEQUFEO0FBQUssZUFBSyxFQUFDLFlBQVg7QUFBd0IsZUFBSyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsZUFPRSw4REFBQyxrREFBRDtBQUFLLGVBQUssRUFBQyxhQUFYO0FBQXlCLGVBQUssRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkYsZUFnQ0UsOERBQUMsa0RBQUQ7QUFBSyxZQUFNLEVBQUMsTUFBWjtBQUFtQixXQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLElBQUksQ0FBWCxDQUExQjtBQUFBLGlCQUNHYixXQUFXLEtBQUtjLHdFQUFoQixpQkFDQyw4REFBQyx1RUFBRDtBQUNFLGtCQUFVLEVBQUVqQixVQURkO0FBRUUsb0JBQVksRUFBRUMsWUFGaEI7QUFHRSx3QkFBZ0IsRUFBRUMsZ0JBSHBCO0FBSUUsc0JBQWMsRUFBRUk7QUFKbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLEVBVUdILFdBQVcsS0FBS2MseUVBQWhCLGlCQUNDLDhEQUFDLHlFQUFEO0FBQWtCLG1CQUFXLEVBQUVaLFdBQS9CO0FBQTRDLHNCQUFjLEVBQUVDO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFoQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpREQ7O0tBOURRUCxhO0FBZ0VULCtEQUFlQSxhQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBjNDlkOGI3ZjgyYjUwYzliODI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFRhYiwgVGFicywgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcclxuaW1wb3J0IHsgQ29uZGl0aW9uc0NoYXJ0IH0gZnJvbSAnY29tcG9uZW50cy9Db25kaXRpb25zQ2hhcnQnO1xyXG5pbXBvcnQgeyBUZW1wZXJhdHVyZUNoYXJ0IH0gZnJvbSAnY29tcG9uZW50cy9UZW1wZXJhdHVyZUNoYXJ0JztcclxuXHJcbmltcG9ydCB7IFByb3BzLCBTZWxlY3RlZFRhYiB9IGZyb20gJy4vdG9kYXlPdmVydmlldy50eXBlcyc7XHJcblxyXG5mdW5jdGlvbiBUb2RheU92ZXJ2aWV3KHtcclxuICBjbG91ZENvdmVyLFxyXG4gIHByZWNpcENoYW5jZSxcclxuICByZWxhdGl2ZUh1bWlkaXR5LFxyXG4gIHNlbGVjdGVkVGFiLFxyXG4gIHNldFNlbGVjdGVkVGFiLFxyXG4gIHRlbXBlcmF0dXJlLFxyXG4gIHZhbGlkVGltZUxvY2FsLFxyXG4gIHdpbmRTcGVlZCxcclxuICB3eFBocmFzZUxvbmcsXHJcbn06IFByb3BzKTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IGN1cnJlbnRUZW1wZXJhdHVyZSA9IHRlbXBlcmF0dXJlWzBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIiBqdXN0aWZ5Q29udGVudD1cInNwYWNlLWJldHdlZW5cIiBoZWlnaHQ9XCIxMDAlXCI+XHJcbiAgICAgIDxCb3ggbXQ9ezEwfT5cclxuICAgICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiIG1iPXs1fT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiPlRvZGF5PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPlxyXG4gICAgICAgICAgICB7bmV3IERhdGUoKS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCB7XHJcbiAgICAgICAgICAgICAgd2Vla2RheTogJ2xvbmcnLFxyXG4gICAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsXHJcbiAgICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgxXCI+e2N1cnJlbnRUZW1wZXJhdHVyZX0mZGVnOzwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPnt3eFBocmFzZUxvbmd9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCI+V2luZDoge3dpbmRTcGVlZH1tcGg8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAgPEJveCBkaXNwbGF5PVwiZmxleFwiIGp1c3RpZnlDb250ZW50PVwiY2VudGVyXCIgd2lkdGg9ezF9PlxyXG4gICAgICAgIDxUYWJzXHJcbiAgICAgICAgICB2YWx1ZT17c2VsZWN0ZWRUYWJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUsIG5ld1NlbGVjdGVkVGFiOiBTZWxlY3RlZFRhYikgPT4ge1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFRhYihuZXdTZWxlY3RlZFRhYik7XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxUYWIgbGFiZWw9XCJDb25kaXRpb25zXCIgdmFsdWU9XCJjb25kaXRpb25zXCIgLz5cclxuICAgICAgICAgIDxUYWIgbGFiZWw9XCJUZW1wZXJhdHVyZVwiIHZhbHVlPVwidGVtcGVyYXR1cmVcIiAvPlxyXG4gICAgICAgIDwvVGFicz5cclxuICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICA8Qm94IGhlaWdodD1cIjQwdmhcIiB3aWR0aD17WzEsIDEsIDEgLyAyXX0+XHJcbiAgICAgICAge3NlbGVjdGVkVGFiID09PSBTZWxlY3RlZFRhYi5Db25kaXRpb25zICYmIChcclxuICAgICAgICAgIDxDb25kaXRpb25zQ2hhcnRcclxuICAgICAgICAgICAgY2xvdWRDb3Zlcj17Y2xvdWRDb3Zlcn1cclxuICAgICAgICAgICAgcHJlY2lwQ2hhbmNlPXtwcmVjaXBDaGFuY2V9XHJcbiAgICAgICAgICAgIHJlbGF0aXZlSHVtaWRpdHk9e3JlbGF0aXZlSHVtaWRpdHl9XHJcbiAgICAgICAgICAgIHZhbGlkVGltZUxvY2FsPXt2YWxpZFRpbWVMb2NhbH1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgKX1cclxuXHJcbiAgICAgICAge3NlbGVjdGVkVGFiID09PSBTZWxlY3RlZFRhYi5UZW1wZXJhdHVyZSAmJiAoXHJcbiAgICAgICAgICA8VGVtcGVyYXR1cmVDaGFydCB0ZW1wZXJhdHVyZT17dGVtcGVyYXR1cmV9IHZhbGlkVGltZUxvY2FsPXt2YWxpZFRpbWVMb2NhbH0gLz5cclxuICAgICAgICApfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZGF5T3ZlcnZpZXc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=