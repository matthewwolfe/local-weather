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
      width: 1,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9kYXlPdmVydmlldy9Ub2RheU92ZXJ2aWV3LnRzeCJdLCJuYW1lcyI6WyJUb2RheU92ZXJ2aWV3IiwiY2xvdWRDb3ZlciIsInByZWNpcENoYW5jZSIsInJlbGF0aXZlSHVtaWRpdHkiLCJzZWxlY3RlZFRhYiIsInNldFNlbGVjdGVkVGFiIiwidGVtcGVyYXR1cmUiLCJ2YWxpZFRpbWVMb2NhbCIsIndpbmRTcGVlZCIsInd4UGhyYXNlTG9uZyIsImN1cnJlbnRUZW1wZXJhdHVyZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIndlZWtkYXkiLCJtb250aCIsImRheSIsImUiLCJuZXdTZWxlY3RlZFRhYiIsIlNlbGVjdGVkVGFiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsYUFBVCxPQVV1QjtBQUFBLE1BVHJCQyxVQVNxQixRQVRyQkEsVUFTcUI7QUFBQSxNQVJyQkMsWUFRcUIsUUFSckJBLFlBUXFCO0FBQUEsTUFQckJDLGdCQU9xQixRQVByQkEsZ0JBT3FCO0FBQUEsTUFOckJDLFdBTXFCLFFBTnJCQSxXQU1xQjtBQUFBLE1BTHJCQyxjQUtxQixRQUxyQkEsY0FLcUI7QUFBQSxNQUpyQkMsV0FJcUIsUUFKckJBLFdBSXFCO0FBQUEsTUFIckJDLGNBR3FCLFFBSHJCQSxjQUdxQjtBQUFBLE1BRnJCQyxTQUVxQixRQUZyQkEsU0FFcUI7QUFBQSxNQURyQkMsWUFDcUIsUUFEckJBLFlBQ3FCO0FBQ3JCLE1BQU1DLGtCQUFrQixHQUFHSixXQUFXLENBQUMsQ0FBRCxDQUF0QztBQUVBLHNCQUNFLDhEQUFDLGtEQUFEO0FBQUssV0FBTyxFQUFDLE1BQWI7QUFBb0IsaUJBQWEsRUFBQyxRQUFsQztBQUEyQyxrQkFBYyxFQUFDLGVBQTFEO0FBQTBFLFVBQU0sRUFBQyxNQUFqRjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUF3QixVQUFFLEVBQUUsQ0FBNUI7QUFBQSxnQ0FDRSw4REFBQyx5REFBRDtBQUFZLGlCQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSw4REFBQyx5REFBRDtBQUFZLGlCQUFPLEVBQUMsV0FBcEI7QUFBQSxvQkFDRyxJQUFJSyxJQUFKLEdBQVdDLGNBQVgsQ0FBMEIsT0FBMUIsRUFBbUM7QUFDbENDLG1CQUFPLEVBQUUsTUFEeUI7QUFFbENDLGlCQUFLLEVBQUUsTUFGMkI7QUFHbENDLGVBQUcsRUFBRTtBQUg2QixXQUFuQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFZRSw4REFBQyxrREFBRDtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLGdDQUNFLDhEQUFDLHlEQUFEO0FBQVksaUJBQU8sRUFBQyxJQUFwQjtBQUFBLHFCQUEwQkwsa0JBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLDhEQUFDLHlEQUFEO0FBQVksaUJBQU8sRUFBQyxJQUFwQjtBQUFBLG9CQUEwQkQ7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFLDhEQUFDLHlEQUFEO0FBQVksaUJBQU8sRUFBQyxPQUFwQjtBQUFBLCtCQUFtQ0QsU0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBb0JFLDhEQUFDLGtEQUFEO0FBQUssYUFBTyxFQUFDLE1BQWI7QUFBb0Isb0JBQWMsRUFBQyxRQUFuQztBQUE0QyxXQUFLLEVBQUUsQ0FBbkQ7QUFBQSw2QkFDRSw4REFBQyxtREFBRDtBQUNFLGFBQUssRUFBRUosV0FEVDtBQUVFLGdCQUFRLEVBQUUsa0JBQUNZLENBQUQsRUFBSUMsY0FBSixFQUFvQztBQUM1Q1osd0JBQWMsQ0FBQ1ksY0FBRCxDQUFkO0FBQ0QsU0FKSDtBQUFBLGdDQU1FLDhEQUFDLGtEQUFEO0FBQUssZUFBSyxFQUFDLFlBQVg7QUFBd0IsZUFBSyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTkYsZUFPRSw4REFBQyxrREFBRDtBQUFLLGVBQUssRUFBQyxhQUFYO0FBQXlCLGVBQUssRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFwQkYsZUFnQ0UsOERBQUMsa0RBQUQ7QUFBSyxZQUFNLEVBQUMsTUFBWjtBQUFtQixXQUFLLEVBQUUsQ0FBMUI7QUFBQSxpQkFDR2IsV0FBVyxLQUFLYyx3RUFBaEIsaUJBQ0MsOERBQUMsdUVBQUQ7QUFDRSxrQkFBVSxFQUFFakIsVUFEZDtBQUVFLG9CQUFZLEVBQUVDLFlBRmhCO0FBR0Usd0JBQWdCLEVBQUVDLGdCQUhwQjtBQUlFLHNCQUFjLEVBQUVJO0FBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixFQVVHSCxXQUFXLEtBQUtjLHlFQUFoQixpQkFDQyw4REFBQyx5RUFBRDtBQUFrQixtQkFBVyxFQUFFWixXQUEvQjtBQUE0QyxzQkFBYyxFQUFFQztBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUREOztLQTlEUVAsYTtBQWdFVCwrREFBZUEsYUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hMjFjMzA4MjU1ZDFkZjdlODAwMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUYWIsIFRhYnMsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IENvbmRpdGlvbnNDaGFydCB9IGZyb20gJ2NvbXBvbmVudHMvQ29uZGl0aW9uc0NoYXJ0JztcclxuaW1wb3J0IHsgVGVtcGVyYXR1cmVDaGFydCB9IGZyb20gJ2NvbXBvbmVudHMvVGVtcGVyYXR1cmVDaGFydCc7XHJcblxyXG5pbXBvcnQgeyBQcm9wcywgU2VsZWN0ZWRUYWIgfSBmcm9tICcuL3RvZGF5T3ZlcnZpZXcudHlwZXMnO1xyXG5cclxuZnVuY3Rpb24gVG9kYXlPdmVydmlldyh7XHJcbiAgY2xvdWRDb3ZlcixcclxuICBwcmVjaXBDaGFuY2UsXHJcbiAgcmVsYXRpdmVIdW1pZGl0eSxcclxuICBzZWxlY3RlZFRhYixcclxuICBzZXRTZWxlY3RlZFRhYixcclxuICB0ZW1wZXJhdHVyZSxcclxuICB2YWxpZFRpbWVMb2NhbCxcclxuICB3aW5kU3BlZWQsXHJcbiAgd3hQaHJhc2VMb25nLFxyXG59OiBQcm9wcyk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCBjdXJyZW50VGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZVswXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgaGVpZ2h0PVwiMTAwJVwiPlxyXG4gICAgICA8Qm94IG10PXsxMH0+XHJcbiAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtYj17NX0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5Ub2RheTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5cclxuICAgICAgICAgICAge25ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge1xyXG4gICAgICAgICAgICAgIHdlZWtkYXk6ICdsb25nJyxcclxuICAgICAgICAgICAgICBtb250aDogJ2xvbmcnLFxyXG4gICAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiPntjdXJyZW50VGVtcGVyYXR1cmV9JmRlZzs8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57d3hQaHJhc2VMb25nfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPldpbmQ6IHt3aW5kU3BlZWR9bXBoPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIHdpZHRoPXsxfT5cclxuICAgICAgICA8VGFic1xyXG4gICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVGFifVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlLCBuZXdTZWxlY3RlZFRhYjogU2VsZWN0ZWRUYWIpID0+IHtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRUYWIobmV3U2VsZWN0ZWRUYWIpO1xyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8VGFiIGxhYmVsPVwiQ29uZGl0aW9uc1wiIHZhbHVlPVwiY29uZGl0aW9uc1wiIC8+XHJcbiAgICAgICAgICA8VGFiIGxhYmVsPVwiVGVtcGVyYXR1cmVcIiB2YWx1ZT1cInRlbXBlcmF0dXJlXCIgLz5cclxuICAgICAgICA8L1RhYnM+XHJcbiAgICAgIDwvQm94PlxyXG5cclxuICAgICAgPEJveCBoZWlnaHQ9XCI0MHZoXCIgd2lkdGg9ezF9PlxyXG4gICAgICAgIHtzZWxlY3RlZFRhYiA9PT0gU2VsZWN0ZWRUYWIuQ29uZGl0aW9ucyAmJiAoXHJcbiAgICAgICAgICA8Q29uZGl0aW9uc0NoYXJ0XHJcbiAgICAgICAgICAgIGNsb3VkQ292ZXI9e2Nsb3VkQ292ZXJ9XHJcbiAgICAgICAgICAgIHByZWNpcENoYW5jZT17cHJlY2lwQ2hhbmNlfVxyXG4gICAgICAgICAgICByZWxhdGl2ZUh1bWlkaXR5PXtyZWxhdGl2ZUh1bWlkaXR5fVxyXG4gICAgICAgICAgICB2YWxpZFRpbWVMb2NhbD17dmFsaWRUaW1lTG9jYWx9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcblxyXG4gICAgICAgIHtzZWxlY3RlZFRhYiA9PT0gU2VsZWN0ZWRUYWIuVGVtcGVyYXR1cmUgJiYgKFxyXG4gICAgICAgICAgPFRlbXBlcmF0dXJlQ2hhcnQgdGVtcGVyYXR1cmU9e3RlbXBlcmF0dXJlfSB2YWxpZFRpbWVMb2NhbD17dmFsaWRUaW1lTG9jYWx9IC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb2RheU92ZXJ2aWV3O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9