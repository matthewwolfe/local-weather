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
      justifyContent: ['center', 'center', 'space-between'],
      width: [1, 1, 1 / 2],
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
          lineNumber: 52,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__.Tab, {
          label: "Temperature",
          value: "temperature"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
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
        lineNumber: 59,
        columnNumber: 11
      }, this), selectedTab === _todayOverview_types__WEBPACK_IMPORTED_MODULE_3__.SelectedTab.Temperature && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_TemperatureChart__WEBPACK_IMPORTED_MODULE_2__.TemperatureChart, {
        temperature: temperature,
        validTimeLocal: validTimeLocal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9kYXlPdmVydmlldy9Ub2RheU92ZXJ2aWV3LnRzeCJdLCJuYW1lcyI6WyJUb2RheU92ZXJ2aWV3IiwiY2xvdWRDb3ZlciIsInByZWNpcENoYW5jZSIsInJlbGF0aXZlSHVtaWRpdHkiLCJzZWxlY3RlZFRhYiIsInNldFNlbGVjdGVkVGFiIiwidGVtcGVyYXR1cmUiLCJ2YWxpZFRpbWVMb2NhbCIsIndpbmRTcGVlZCIsInd4UGhyYXNlTG9uZyIsImN1cnJlbnRUZW1wZXJhdHVyZSIsIkRhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIndlZWtkYXkiLCJtb250aCIsImRheSIsImUiLCJuZXdTZWxlY3RlZFRhYiIsIlNlbGVjdGVkVGFiIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0EsYUFBVCxPQVV1QjtBQUFBLE1BVHJCQyxVQVNxQixRQVRyQkEsVUFTcUI7QUFBQSxNQVJyQkMsWUFRcUIsUUFSckJBLFlBUXFCO0FBQUEsTUFQckJDLGdCQU9xQixRQVByQkEsZ0JBT3FCO0FBQUEsTUFOckJDLFdBTXFCLFFBTnJCQSxXQU1xQjtBQUFBLE1BTHJCQyxjQUtxQixRQUxyQkEsY0FLcUI7QUFBQSxNQUpyQkMsV0FJcUIsUUFKckJBLFdBSXFCO0FBQUEsTUFIckJDLGNBR3FCLFFBSHJCQSxjQUdxQjtBQUFBLE1BRnJCQyxTQUVxQixRQUZyQkEsU0FFcUI7QUFBQSxNQURyQkMsWUFDcUIsUUFEckJBLFlBQ3FCO0FBQ3JCLE1BQU1DLGtCQUFrQixHQUFHSixXQUFXLENBQUMsQ0FBRCxDQUF0QztBQUVBLHNCQUNFLDhEQUFDLGtEQUFEO0FBQUssV0FBTyxFQUFDLE1BQWI7QUFBb0IsaUJBQWEsRUFBQyxRQUFsQztBQUEyQyxrQkFBYyxFQUFDLGVBQTFEO0FBQTBFLFVBQU0sRUFBQyxNQUFqRjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUssUUFBRSxFQUFFLEVBQVQ7QUFBQSw4QkFDRSw4REFBQyxrREFBRDtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUF3QixVQUFFLEVBQUUsQ0FBNUI7QUFBQSxnQ0FDRSw4REFBQyx5REFBRDtBQUFZLGlCQUFPLEVBQUMsSUFBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSw4REFBQyx5REFBRDtBQUFZLGlCQUFPLEVBQUMsV0FBcEI7QUFBQSxvQkFDRyxJQUFJSyxJQUFKLEdBQVdDLGNBQVgsQ0FBMEIsT0FBMUIsRUFBbUM7QUFDbENDLG1CQUFPLEVBQUUsTUFEeUI7QUFFbENDLGlCQUFLLEVBQUUsTUFGMkI7QUFHbENDLGVBQUcsRUFBRTtBQUg2QixXQUFuQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFZRSw4REFBQyxrREFBRDtBQUFLLGlCQUFTLEVBQUMsUUFBZjtBQUFBLGdDQUNFLDhEQUFDLHlEQUFEO0FBQVksaUJBQU8sRUFBQyxJQUFwQjtBQUFBLHFCQUEwQkwsa0JBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFLDhEQUFDLHlEQUFEO0FBQVksaUJBQU8sRUFBQyxJQUFwQjtBQUFBLG9CQUEwQkQ7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRixlQUdFLDhEQUFDLHlEQUFEO0FBQVksaUJBQU8sRUFBQyxPQUFwQjtBQUFBLCtCQUFtQ0QsU0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBb0JFLDhEQUFDLGtEQUFEO0FBQ0UsYUFBTyxFQUFDLE1BRFY7QUFFRSxvQkFBYyxFQUFFLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsZUFBckIsQ0FGbEI7QUFHRSxXQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLElBQUksQ0FBWCxDQUhUO0FBQUEsNkJBS0UsOERBQUMsbURBQUQ7QUFDRSxhQUFLLEVBQUVKLFdBRFQ7QUFFRSxnQkFBUSxFQUFFLGtCQUFDWSxDQUFELEVBQUlDLGNBQUosRUFBb0M7QUFDNUNaLHdCQUFjLENBQUNZLGNBQUQsQ0FBZDtBQUNELFNBSkg7QUFBQSxnQ0FNRSw4REFBQyxrREFBRDtBQUFLLGVBQUssRUFBQyxZQUFYO0FBQXdCLGVBQUssRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQU5GLGVBT0UsOERBQUMsa0RBQUQ7QUFBSyxlQUFLLEVBQUMsYUFBWDtBQUF5QixlQUFLLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcEJGLGVBb0NFLDhEQUFDLGtEQUFEO0FBQUssWUFBTSxFQUFDLE1BQVo7QUFBbUIsV0FBSyxFQUFFLENBQTFCO0FBQUEsaUJBQ0diLFdBQVcsS0FBS2Msd0VBQWhCLGlCQUNDLDhEQUFDLHVFQUFEO0FBQ0Usa0JBQVUsRUFBRWpCLFVBRGQ7QUFFRSxvQkFBWSxFQUFFQyxZQUZoQjtBQUdFLHdCQUFnQixFQUFFQyxnQkFIcEI7QUFJRSxzQkFBYyxFQUFFSTtBQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosRUFVR0gsV0FBVyxLQUFLYyx5RUFBaEIsaUJBQ0MsOERBQUMseUVBQUQ7QUFBa0IsbUJBQVcsRUFBRVosV0FBL0I7QUFBNEMsc0JBQWMsRUFBRUM7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXFERDs7S0FsRVFQLGE7QUFvRVQsK0RBQWVBLGFBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2UyNzYzMjZkZTNhMGQ1YjEzZmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgVGFiLCBUYWJzLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBDb25kaXRpb25zQ2hhcnQgfSBmcm9tICdjb21wb25lbnRzL0NvbmRpdGlvbnNDaGFydCc7XHJcbmltcG9ydCB7IFRlbXBlcmF0dXJlQ2hhcnQgfSBmcm9tICdjb21wb25lbnRzL1RlbXBlcmF0dXJlQ2hhcnQnO1xyXG5cclxuaW1wb3J0IHsgUHJvcHMsIFNlbGVjdGVkVGFiIH0gZnJvbSAnLi90b2RheU92ZXJ2aWV3LnR5cGVzJztcclxuXHJcbmZ1bmN0aW9uIFRvZGF5T3ZlcnZpZXcoe1xyXG4gIGNsb3VkQ292ZXIsXHJcbiAgcHJlY2lwQ2hhbmNlLFxyXG4gIHJlbGF0aXZlSHVtaWRpdHksXHJcbiAgc2VsZWN0ZWRUYWIsXHJcbiAgc2V0U2VsZWN0ZWRUYWIsXHJcbiAgdGVtcGVyYXR1cmUsXHJcbiAgdmFsaWRUaW1lTG9jYWwsXHJcbiAgd2luZFNwZWVkLFxyXG4gIHd4UGhyYXNlTG9uZyxcclxufTogUHJvcHMpOiBKU1guRWxlbWVudCB7XHJcbiAgY29uc3QgY3VycmVudFRlbXBlcmF0dXJlID0gdGVtcGVyYXR1cmVbMF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgPEJveCBtdD17MTB9PlxyXG4gICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCIgbWI9ezV9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+VG9kYXk8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+XHJcbiAgICAgICAgICAgIHtuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcclxuICAgICAgICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXHJcbiAgICAgICAgICAgICAgbW9udGg6ICdsb25nJyxcclxuICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIj57Y3VycmVudFRlbXBlcmF0dXJlfSZkZWc7PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+e3d4UGhyYXNlTG9uZ308L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5XaW5kOiB7d2luZFNwZWVkfW1waDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50PXtbJ2NlbnRlcicsICdjZW50ZXInLCAnc3BhY2UtYmV0d2VlbiddfVxyXG4gICAgICAgIHdpZHRoPXtbMSwgMSwgMSAvIDJdfVxyXG4gICAgICA+XHJcbiAgICAgICAgPFRhYnNcclxuICAgICAgICAgIHZhbHVlPXtzZWxlY3RlZFRhYn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSwgbmV3U2VsZWN0ZWRUYWI6IFNlbGVjdGVkVGFiKSA9PiB7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVGFiKG5ld1NlbGVjdGVkVGFiKTtcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPFRhYiBsYWJlbD1cIkNvbmRpdGlvbnNcIiB2YWx1ZT1cImNvbmRpdGlvbnNcIiAvPlxyXG4gICAgICAgICAgPFRhYiBsYWJlbD1cIlRlbXBlcmF0dXJlXCIgdmFsdWU9XCJ0ZW1wZXJhdHVyZVwiIC8+XHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIDxCb3ggaGVpZ2h0PVwiNDB2aFwiIHdpZHRoPXsxfT5cclxuICAgICAgICB7c2VsZWN0ZWRUYWIgPT09IFNlbGVjdGVkVGFiLkNvbmRpdGlvbnMgJiYgKFxyXG4gICAgICAgICAgPENvbmRpdGlvbnNDaGFydFxyXG4gICAgICAgICAgICBjbG91ZENvdmVyPXtjbG91ZENvdmVyfVxyXG4gICAgICAgICAgICBwcmVjaXBDaGFuY2U9e3ByZWNpcENoYW5jZX1cclxuICAgICAgICAgICAgcmVsYXRpdmVIdW1pZGl0eT17cmVsYXRpdmVIdW1pZGl0eX1cclxuICAgICAgICAgICAgdmFsaWRUaW1lTG9jYWw9e3ZhbGlkVGltZUxvY2FsfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICB7c2VsZWN0ZWRUYWIgPT09IFNlbGVjdGVkVGFiLlRlbXBlcmF0dXJlICYmIChcclxuICAgICAgICAgIDxUZW1wZXJhdHVyZUNoYXJ0IHRlbXBlcmF0dXJlPXt0ZW1wZXJhdHVyZX0gdmFsaWRUaW1lTG9jYWw9e3ZhbGlkVGltZUxvY2FsfSAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kYXlPdmVydmlldztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==