webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/TodayOverview/TodayOverview.js":
/*!*******************************************************!*\
  !*** ./src/components/TodayOverview/TodayOverview.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ \"./node_modules/@material-ui/core/esm/index.js\");\n/* harmony import */ var _ConditionsChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ConditionsChart */ \"./src/components/TodayOverview/ConditionsChart.js\");\nvar _jsxFileName = \"/Users/cn182266/Personal/local-weather/src/components/TodayOverview/TodayOverview.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nfunction TodayOverview(_ref) {\n  var cloudCover = _ref.cloudCover,\n      day = _ref.day,\n      precipChance = _ref.precipChance,\n      relativeHumidity = _ref.relativeHumidity,\n      temperature = _ref.temperature,\n      validTimeLocal = _ref.validTimeLocal,\n      windSpeed = _ref.windSpeed;\n  var currentTemperature = temperature[0];\n  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    display: \"flex\",\n    flexDirection: \"column\",\n    justifyContent: \"space-between\",\n    height: \"100%\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    mt: 10,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    textAlign: \"center\",\n    mb: 5,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h4\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }, \"Today\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"subtitle1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }, new Date().toLocaleString('en-US', {\n    weekday: 'long',\n    month: 'long',\n    day: 'numeric'\n  }))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    textAlign: \"center\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"h1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }, currentTemperature, \"\\xB0\"), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Typography\"], {\n    variant: \"subtitle1\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 11\n    }\n  }, \"Wind Speed: \", windSpeed, \" MPH\"))), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__[\"Box\"], {\n    width: 1,\n    height: \"50vh\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 7\n    }\n  }, __jsx(_ConditionsChart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    cloudCover: cloudCover,\n    precipChance: precipChance,\n    relativeHumidity: relativeHumidity,\n    validTimeLocal: validTimeLocal,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 9\n    }\n  })));\n}\n\n_c = TodayOverview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodayOverview);\n\nvar _c;\n\n$RefreshReg$(_c, \"TodayOverview\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Ub2RheU92ZXJ2aWV3L1RvZGF5T3ZlcnZpZXcuanM/ZTVmZCJdLCJuYW1lcyI6WyJUb2RheU92ZXJ2aWV3IiwiY2xvdWRDb3ZlciIsImRheSIsInByZWNpcENoYW5jZSIsInJlbGF0aXZlSHVtaWRpdHkiLCJ0ZW1wZXJhdHVyZSIsInZhbGlkVGltZUxvY2FsIiwid2luZFNwZWVkIiwiY3VycmVudFRlbXBlcmF0dXJlIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsIm1vbnRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxhQUFULE9BUUc7QUFBQSxNQVBEQyxVQU9DLFFBUERBLFVBT0M7QUFBQSxNQU5EQyxHQU1DLFFBTkRBLEdBTUM7QUFBQSxNQUxEQyxZQUtDLFFBTERBLFlBS0M7QUFBQSxNQUpEQyxnQkFJQyxRQUpEQSxnQkFJQztBQUFBLE1BSERDLFdBR0MsUUFIREEsV0FHQztBQUFBLE1BRkRDLGNBRUMsUUFGREEsY0FFQztBQUFBLE1BRERDLFNBQ0MsUUFEREEsU0FDQztBQUNELE1BQU1DLGtCQUFrQixHQUFHSCxXQUFXLENBQUMsQ0FBRCxDQUF0QztBQUVBLFNBQ0UsTUFBQyxxREFBRDtBQUNFLFdBQU8sRUFBQyxNQURWO0FBRUUsaUJBQWEsRUFBQyxRQUZoQjtBQUdFLGtCQUFjLEVBQUMsZUFIakI7QUFJRSxVQUFNLEVBQUMsTUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBTUUsTUFBQyxxREFBRDtBQUFLLE1BQUUsRUFBRSxFQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBd0IsTUFBRSxFQUFFLENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDREQUFEO0FBQVksV0FBTyxFQUFDLElBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsV0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLElBQUlJLElBQUosR0FBV0MsY0FBWCxDQUEwQixPQUExQixFQUFtQztBQUNsQ0MsV0FBTyxFQUFFLE1BRHlCO0FBRWxDQyxTQUFLLEVBQUUsTUFGMkI7QUFHbENWLE9BQUcsRUFBRTtBQUg2QixHQUFuQyxDQURILENBRkYsQ0FERixFQVlFLE1BQUMscURBQUQ7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxJQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTBCTSxrQkFBMUIsU0FERixFQUVFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsV0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFDZUQsU0FEZixTQUZGLENBWkYsQ0FORixFQTBCRSxNQUFDLHFEQUFEO0FBQUssU0FBSyxFQUFFLENBQVo7QUFBZSxVQUFNLEVBQUMsTUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsd0RBQUQ7QUFDRSxjQUFVLEVBQUVOLFVBRGQ7QUFFRSxnQkFBWSxFQUFFRSxZQUZoQjtBQUdFLG9CQUFnQixFQUFFQyxnQkFIcEI7QUFJRSxrQkFBYyxFQUFFRSxjQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0ExQkYsQ0FERjtBQXFDRDs7S0FoRFFOLGE7QUFrRE1BLDRFQUFmIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvVG9kYXlPdmVydmlldy9Ub2RheU92ZXJ2aWV3LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcbmltcG9ydCBDb25kaXRpb25zQ2hhcnQgZnJvbSAnLi9Db25kaXRpb25zQ2hhcnQnO1xuXG5mdW5jdGlvbiBUb2RheU92ZXJ2aWV3KHtcbiAgY2xvdWRDb3ZlcixcbiAgZGF5LFxuICBwcmVjaXBDaGFuY2UsXG4gIHJlbGF0aXZlSHVtaWRpdHksXG4gIHRlbXBlcmF0dXJlLFxuICB2YWxpZFRpbWVMb2NhbCxcbiAgd2luZFNwZWVkLFxufSkge1xuICBjb25zdCBjdXJyZW50VGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZVswXTtcblxuICByZXR1cm4gKFxuICAgIDxCb3hcbiAgICAgIGRpc3BsYXk9XCJmbGV4XCJcbiAgICAgIGZsZXhEaXJlY3Rpb249XCJjb2x1bW5cIlxuICAgICAganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCJcbiAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgID5cbiAgICAgIDxCb3ggbXQ9ezEwfT5cbiAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtYj17NX0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCI+VG9kYXk8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPlxuICAgICAgICAgICAge25ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge1xuICAgICAgICAgICAgICB3ZWVrZGF5OiAnbG9uZycsXG4gICAgICAgICAgICAgIG1vbnRoOiAnbG9uZycsXG4gICAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94IHRleHRBbGlnbj1cImNlbnRlclwiPlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiPntjdXJyZW50VGVtcGVyYXR1cmV9JmRlZzs8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInN1YnRpdGxlMVwiPlxuICAgICAgICAgICAgV2luZCBTcGVlZDoge3dpbmRTcGVlZH0gTVBIXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IHdpZHRoPXsxfSBoZWlnaHQ9XCI1MHZoXCI+XG4gICAgICAgIDxDb25kaXRpb25zQ2hhcnRcbiAgICAgICAgICBjbG91ZENvdmVyPXtjbG91ZENvdmVyfVxuICAgICAgICAgIHByZWNpcENoYW5jZT17cHJlY2lwQ2hhbmNlfVxuICAgICAgICAgIHJlbGF0aXZlSHVtaWRpdHk9e3JlbGF0aXZlSHVtaWRpdHl9XG4gICAgICAgICAgdmFsaWRUaW1lTG9jYWw9e3ZhbGlkVGltZUxvY2FsfVxuICAgICAgICAvPlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZGF5T3ZlcnZpZXc7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/TodayOverview/TodayOverview.js\n");

/***/ })

})