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
          lineNumber: 21,
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
          lineNumber: 22,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
        textAlign: "center",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "h1",
          children: [currentTemperature, "\xB0"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "h6",
          children: wxPhraseLong
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Typography, {
          variant: "body2",
          children: ["Wind: ", windSpeed, "mph"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Box, {
      display: "flex",
      justifyContent: "center",
      width: 1,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Tabs, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Tab, {
          label: "Conditions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Tab, {
          label: "Temperature"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
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
        lineNumber: 46,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9kYXlPdmVydmlldy9Ub2RheU92ZXJ2aWV3LnRzeCJdLCJuYW1lcyI6WyJUb2RheU92ZXJ2aWV3IiwiY2xvdWRDb3ZlciIsInByZWNpcENoYW5jZSIsInJlbGF0aXZlSHVtaWRpdHkiLCJ0ZW1wZXJhdHVyZSIsInZhbGlkVGltZUxvY2FsIiwid2luZFNwZWVkIiwid3hQaHJhc2VMb25nIiwiY3VycmVudFRlbXBlcmF0dXJlIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsIm1vbnRoIiwiZGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBSUEsU0FBU0EsYUFBVCxPQVF1QjtBQUFBLE1BUHJCQyxVQU9xQixRQVByQkEsVUFPcUI7QUFBQSxNQU5yQkMsWUFNcUIsUUFOckJBLFlBTXFCO0FBQUEsTUFMckJDLGdCQUtxQixRQUxyQkEsZ0JBS3FCO0FBQUEsTUFKckJDLFdBSXFCLFFBSnJCQSxXQUlxQjtBQUFBLE1BSHJCQyxjQUdxQixRQUhyQkEsY0FHcUI7QUFBQSxNQUZyQkMsU0FFcUIsUUFGckJBLFNBRXFCO0FBQUEsTUFEckJDLFlBQ3FCLFFBRHJCQSxZQUNxQjtBQUNyQixNQUFNQyxrQkFBa0IsR0FBR0osV0FBVyxDQUFDLENBQUQsQ0FBdEM7QUFFQSxzQkFDRSw4REFBQyxrREFBRDtBQUFLLFdBQU8sRUFBQyxNQUFiO0FBQW9CLGlCQUFhLEVBQUMsUUFBbEM7QUFBMkMsa0JBQWMsRUFBQyxlQUExRDtBQUEwRSxVQUFNLEVBQUMsTUFBakY7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFLLFFBQUUsRUFBRSxFQUFUO0FBQUEsOEJBQ0UsOERBQUMsa0RBQUQ7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBd0IsVUFBRSxFQUFFLENBQTVCO0FBQUEsZ0NBQ0UsOERBQUMseURBQUQ7QUFBWSxpQkFBTyxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUUsOERBQUMseURBQUQ7QUFBWSxpQkFBTyxFQUFDLFdBQXBCO0FBQUEsb0JBQ0csSUFBSUssSUFBSixHQUFXQyxjQUFYLENBQTBCLE9BQTFCLEVBQW1DO0FBQ2xDQyxtQkFBTyxFQUFFLE1BRHlCO0FBRWxDQyxpQkFBSyxFQUFFLE1BRjJCO0FBR2xDQyxlQUFHLEVBQUU7QUFINkIsV0FBbkM7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBWUUsOERBQUMsa0RBQUQ7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSxnQ0FDRSw4REFBQyx5REFBRDtBQUFZLGlCQUFPLEVBQUMsSUFBcEI7QUFBQSxxQkFBMEJMLGtCQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSw4REFBQyx5REFBRDtBQUFZLGlCQUFPLEVBQUMsSUFBcEI7QUFBQSxvQkFBMEJEO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkYsZUFHRSw4REFBQyx5REFBRDtBQUFZLGlCQUFPLEVBQUMsT0FBcEI7QUFBQSwrQkFBbUNELFNBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQW9CRSw4REFBQyxrREFBRDtBQUFLLGFBQU8sRUFBQyxNQUFiO0FBQW9CLG9CQUFjLEVBQUMsUUFBbkM7QUFBNEMsV0FBSyxFQUFFLENBQW5EO0FBQUEsNkJBQ0UsOERBQUMsbURBQUQ7QUFBQSxnQ0FDRSw4REFBQyxrREFBRDtBQUFLLGVBQUssRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFFRSw4REFBQyxrREFBRDtBQUFLLGVBQUssRUFBQztBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBCRixlQTJCRSw4REFBQyxrREFBRDtBQUFLLFlBQU0sRUFBQyxNQUFaO0FBQW1CLFdBQUssRUFBRSxDQUExQjtBQUFBLDZCQUNFLDhEQUFDLHVFQUFEO0FBQ0Usa0JBQVUsRUFBRUwsVUFEZDtBQUVFLG9CQUFZLEVBQUVDLFlBRmhCO0FBR0Usd0JBQWdCLEVBQUVDLGdCQUhwQjtBQUlFLHNCQUFjLEVBQUVFO0FBSmxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBc0NEOztLQWpEUUwsYTtBQW1EVCwrREFBZUEsYUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kODAwZDE3M2VmYzY4MGUxMThiYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBUYWIsIFRhYnMsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCB7IENvbmRpdGlvbnNDaGFydCB9IGZyb20gJ2NvbXBvbmVudHMvQ29uZGl0aW9uc0NoYXJ0JztcclxuXHJcbmltcG9ydCB7IFByb3BzIH0gZnJvbSAnLi90b2RheU92ZXJ2aWV3LnR5cGVzJztcclxuXHJcbmZ1bmN0aW9uIFRvZGF5T3ZlcnZpZXcoe1xyXG4gIGNsb3VkQ292ZXIsXHJcbiAgcHJlY2lwQ2hhbmNlLFxyXG4gIHJlbGF0aXZlSHVtaWRpdHksXHJcbiAgdGVtcGVyYXR1cmUsXHJcbiAgdmFsaWRUaW1lTG9jYWwsXHJcbiAgd2luZFNwZWVkLFxyXG4gIHd4UGhyYXNlTG9uZyxcclxufTogUHJvcHMpOiBKU1guRWxlbWVudCB7XHJcbiAgY29uc3QgY3VycmVudFRlbXBlcmF0dXJlID0gdGVtcGVyYXR1cmVbMF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGp1c3RpZnlDb250ZW50PVwic3BhY2UtYmV0d2VlblwiIGhlaWdodD1cIjEwMCVcIj5cclxuICAgICAgPEJveCBtdD17MTB9PlxyXG4gICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCIgbWI9ezV9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+VG9kYXk8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwic3VidGl0bGUxXCI+XHJcbiAgICAgICAgICAgIHtuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcclxuICAgICAgICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXHJcbiAgICAgICAgICAgICAgbW9udGg6ICdsb25nJyxcclxuICAgICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgIDxCb3ggdGV4dEFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDFcIj57Y3VycmVudFRlbXBlcmF0dXJlfSZkZWc7PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+e3d4UGhyYXNlTG9uZ308L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj5XaW5kOiB7d2luZFNwZWVkfW1waDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICA8Qm94IGRpc3BsYXk9XCJmbGV4XCIganVzdGlmeUNvbnRlbnQ9XCJjZW50ZXJcIiB3aWR0aD17MX0+XHJcbiAgICAgICAgPFRhYnM+XHJcbiAgICAgICAgICA8VGFiIGxhYmVsPVwiQ29uZGl0aW9uc1wiIC8+XHJcbiAgICAgICAgICA8VGFiIGxhYmVsPVwiVGVtcGVyYXR1cmVcIiAvPlxyXG4gICAgICAgIDwvVGFicz5cclxuICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICA8Qm94IGhlaWdodD1cIjQwdmhcIiB3aWR0aD17MX0+XHJcbiAgICAgICAgPENvbmRpdGlvbnNDaGFydFxyXG4gICAgICAgICAgY2xvdWRDb3Zlcj17Y2xvdWRDb3Zlcn1cclxuICAgICAgICAgIHByZWNpcENoYW5jZT17cHJlY2lwQ2hhbmNlfVxyXG4gICAgICAgICAgcmVsYXRpdmVIdW1pZGl0eT17cmVsYXRpdmVIdW1pZGl0eX1cclxuICAgICAgICAgIHZhbGlkVGltZUxvY2FsPXt2YWxpZFRpbWVMb2NhbH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvZGF5T3ZlcnZpZXc7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=