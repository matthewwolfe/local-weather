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
        yAxes: [{
          ticks: {
            stepSize: 10,
            suggestedMin: 0,
            suggestedMax: 100
          }
        }]
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


/***/ }),

/***/ "./src/components/ConditionsChart/index.ts":
/*!*************************************************!*\
  !*** ./src/components/ConditionsChart/index.ts ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConditionsChart": function() { return /* reexport safe */ _ConditionsChart__WEBPACK_IMPORTED_MODULE_0__.default; }
/* harmony export */ });
/* harmony import */ var _ConditionsChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ConditionsChart */ "./src/components/ConditionsChart/ConditionsChart.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);


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


/***/ }),

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
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Tab, {
          label: "Conditions"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.Tab, {
          label: "Temperature"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
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
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_ConditionsChart__WEBPACK_IMPORTED_MODULE_1__.default, {
        cloudCover: cloudCover,
        precipChance: precipChance,
        relativeHumidity: relativeHumidity,
        validTimeLocal: validTimeLocal
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
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


/***/ }),

/***/ "./src/components/TodayOverview/TodayOverviewContainer.tsx":
/*!*****************************************************************!*\
  !*** ./src/components/TodayOverview/TodayOverviewContainer.tsx ***!
  \*****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Matthew_Projects_local_weather_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hooks */ "./src/hooks/index.ts");
/* harmony import */ var _TodayOverview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TodayOverview */ "./src/components/TodayOverview/TodayOverview.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Matthew\\Projects\\local-weather\\src\\components\\TodayOverview\\TodayOverviewContainer.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Matthew_Projects_local_weather_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





function TodayOverviewContainer() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('conditions'),
      selectedTab = _useState[0],
      setSelectedTab = _useState[1];

  var data = (0,hooks__WEBPACK_IMPORTED_MODULE_3__.useTodayHourlyData)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_TodayOverview__WEBPACK_IMPORTED_MODULE_4__.default, _objectSpread({
    selectedTab: selectedTab,
    setSelectedTab: setSelectedTab
  }, data), void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 10
  }, this);
}

_s(TodayOverviewContainer, "Q6/9oJWvUUraIIuMJJluYNLpREs=", false, function () {
  return [hooks__WEBPACK_IMPORTED_MODULE_3__.useTodayHourlyData];
});

_c = TodayOverviewContainer;
/* harmony default export */ __webpack_exports__["default"] = (TodayOverviewContainer);

var _c;

$RefreshReg$(_c, "TodayOverviewContainer");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQ29uZGl0aW9uc0NoYXJ0L0NvbmRpdGlvbnNDaGFydC50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NvbmRpdGlvbnNDaGFydC9pbmRleC50cyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9kYXlPdmVydmlldy9Ub2RheU92ZXJ2aWV3LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9kYXlPdmVydmlldy9Ub2RheU92ZXJ2aWV3Q29udGFpbmVyLnRzeCJdLCJuYW1lcyI6WyJDb25kaXRpb25zQ2hhcnQiLCJjbG91ZENvdmVyIiwicHJlY2lwQ2hhbmNlIiwicmVsYXRpdmVIdW1pZGl0eSIsInZhbGlkVGltZUxvY2FsIiwidGltZUxhYmVscyIsInVzZU1lbW8iLCJtYXAiLCJkYXRlIiwiRGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiaG91ciIsIm1pbnV0ZSIsImxhYmVscyIsImRhdGFzZXRzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyQ29sb3IiLCJkYXRhIiwiZmlsbCIsImxhYmVsIiwicG9pbnRCYWNrZ3JvdW5kQ29sb3IiLCJwb2ludEJvcmRlckNvbG9yIiwicG9pbnRIb3ZlckJhY2tncm91bmRDb2xvciIsInBvaW50SG92ZXJCb3JkZXJDb2xvciIsInNob3dMaW5lIiwibWFpbnRhaW5Bc3BlY3RSYXRpbyIsInNjYWxlcyIsInlBeGVzIiwidGlja3MiLCJzdGVwU2l6ZSIsInN1Z2dlc3RlZE1pbiIsInN1Z2dlc3RlZE1heCIsIlRvZGF5T3ZlcnZpZXciLCJ0ZW1wZXJhdHVyZSIsIndpbmRTcGVlZCIsInd4UGhyYXNlTG9uZyIsImN1cnJlbnRUZW1wZXJhdHVyZSIsIndlZWtkYXkiLCJtb250aCIsImRheSIsIlRvZGF5T3ZlcnZpZXdDb250YWluZXIiLCJ1c2VTdGF0ZSIsInNlbGVjdGVkVGFiIiwic2V0U2VsZWN0ZWRUYWIiLCJ1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QUFJQSxTQUFTUSxzQkFBVCxHQUErQztBQUFBOztBQUFBLGtCQUNQQywrQ0FBUSxDQUFjLFlBQWQsQ0FERDtBQUFBLE1BQ3RDQyxXQURzQztBQUFBLE1BQ3pCQyxjQUR5Qjs7QUFFN0MsTUFBTTFCLElBQUksR0FBRzJCLHlEQUFrQixFQUEvQjtBQUVBLHNCQUFPLDhEQUFDLG1EQUFEO0FBQWUsZUFBVyxFQUFFRixXQUE1QjtBQUF5QyxrQkFBYyxFQUFFQztBQUF6RCxLQUE2RTFCLElBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztHQUxRdUIsc0I7VUFFTUkscUQ7OztLQUZOSixzQjtBQU9ULCtEQUFlQSxzQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iNGJkY2NlZTVjOTIzMjI4ZjhkMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTGluZSB9IGZyb20gJ3JlYWN0LWNoYXJ0anMtMic7XHJcblxyXG5pbXBvcnQgeyBXZWF0aGVyQXBpSG91cmx5IH0gZnJvbSAndHlwZXMvd2VhdGhlcic7XHJcblxyXG5pbnRlcmZhY2UgUHJvcHNcclxuICBleHRlbmRzIFBpY2s8XHJcbiAgICBXZWF0aGVyQXBpSG91cmx5LFxyXG4gICAgJ2Nsb3VkQ292ZXInIHwgJ3ByZWNpcENoYW5jZScgfCAncmVsYXRpdmVIdW1pZGl0eScgfCAndmFsaWRUaW1lTG9jYWwnXHJcbiAgPiB7fVxyXG5cclxuZnVuY3Rpb24gQ29uZGl0aW9uc0NoYXJ0KHtcclxuICBjbG91ZENvdmVyLFxyXG4gIHByZWNpcENoYW5jZSxcclxuICByZWxhdGl2ZUh1bWlkaXR5LFxyXG4gIHZhbGlkVGltZUxvY2FsLFxyXG59OiBQcm9wcyk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCB0aW1lTGFiZWxzOiBBcnJheTxzdHJpbmc+ID0gdXNlTWVtbyhcclxuICAgICgpID0+XHJcbiAgICAgIHZhbGlkVGltZUxvY2FsLm1hcCgoZGF0ZTogc3RyaW5nKSA9PlxyXG4gICAgICAgIG5ldyBEYXRlKGRhdGUpLnRvTG9jYWxlU3RyaW5nKCdlbi1VUycsIHtcclxuICAgICAgICAgIGhvdXI6ICdudW1lcmljJyxcclxuICAgICAgICAgIG1pbnV0ZTogJzItZGlnaXQnLFxyXG4gICAgICAgIH0pLFxyXG4gICAgICApLFxyXG4gICAgW3ZhbGlkVGltZUxvY2FsXSxcclxuICApO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpbmVcclxuICAgICAgdHlwZT1cImxpbmVcIlxyXG4gICAgICBkYXRhPXt7XHJcbiAgICAgICAgbGFiZWxzOiB0aW1lTGFiZWxzLFxyXG4gICAgICAgIGRhdGFzZXRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWVlZWUnLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyNlZWVlZWUnLFxyXG4gICAgICAgICAgICBkYXRhOiBjbG91ZENvdmVyLFxyXG4gICAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgbGFiZWw6ICdDbG91ZCBDb3ZlcicsXHJcbiAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnI2VlZWVlZScsXHJcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjZWVlZWVlJyxcclxuICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyNlZWVlZWUnLFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICcjZWVlZWVlJyxcclxuICAgICAgICAgICAgc2hvd0xpbmU6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNTViYWU3JyxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6ICcjNTViYWU3JyxcclxuICAgICAgICAgICAgZGF0YTogcHJlY2lwQ2hhbmNlLFxyXG4gICAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgbGFiZWw6ICdQcmVjaXBpdGF0aW9uJyxcclxuICAgICAgICAgICAgcG9pbnRCYWNrZ3JvdW5kQ29sb3I6ICcjNTViYWU3JyxcclxuICAgICAgICAgICAgcG9pbnRCb3JkZXJDb2xvcjogJyM1NWJhZTcnLFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQmFja2dyb3VuZENvbG9yOiAnIzU1YmFlNycsXHJcbiAgICAgICAgICAgIHBvaW50SG92ZXJCb3JkZXJDb2xvcjogJyM1NWJhZTcnLFxyXG4gICAgICAgICAgICBzaG93TGluZTogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM1NTZiZTcnLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyM1NTZiZTcnLFxyXG4gICAgICAgICAgICBkYXRhOiByZWxhdGl2ZUh1bWlkaXR5LFxyXG4gICAgICAgICAgICBmaWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgbGFiZWw6ICdIdW1pZGl0eScsXHJcbiAgICAgICAgICAgIHBvaW50QmFja2dyb3VuZENvbG9yOiAnIzU1NmJlNycsXHJcbiAgICAgICAgICAgIHBvaW50Qm9yZGVyQ29sb3I6ICcjNTU2YmU3JyxcclxuICAgICAgICAgICAgcG9pbnRIb3ZlckJhY2tncm91bmRDb2xvcjogJyM1NTZiZTcnLFxyXG4gICAgICAgICAgICBwb2ludEhvdmVyQm9yZGVyQ29sb3I6ICcjNTU2YmU3JyxcclxuICAgICAgICAgICAgc2hvd0xpbmU6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH19XHJcbiAgICAgIG9wdGlvbnM9e3tcclxuICAgICAgICBtYWludGFpbkFzcGVjdFJhdGlvOiBmYWxzZSxcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgIHlBeGVzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgc3RlcFNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgc3VnZ2VzdGVkTWluOiAwLFxyXG4gICAgICAgICAgICAgICAgc3VnZ2VzdGVkTWF4OiAxMDAsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIF0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfX1cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29uZGl0aW9uc0NoYXJ0O1xyXG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIENvbmRpdGlvbnNDaGFydCB9IGZyb20gJy4vQ29uZGl0aW9uc0NoYXJ0JztcclxuIiwiaW1wb3J0IHsgQm94LCBUYWIsIFRhYnMsIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBDb25kaXRpb25zQ2hhcnQgZnJvbSAnY29tcG9uZW50cy9Db25kaXRpb25zQ2hhcnQnO1xyXG5cclxuaW1wb3J0IHsgSG91cmx5RGF0YSB9IGZyb20gJ3R5cGVzL3dlYXRoZXInO1xyXG5cclxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSG91cmx5RGF0YSB7fVxyXG5cclxuZnVuY3Rpb24gVG9kYXlPdmVydmlldyh7XHJcbiAgY2xvdWRDb3ZlcixcclxuICBwcmVjaXBDaGFuY2UsXHJcbiAgcmVsYXRpdmVIdW1pZGl0eSxcclxuICB0ZW1wZXJhdHVyZSxcclxuICB2YWxpZFRpbWVMb2NhbCxcclxuICB3aW5kU3BlZWQsXHJcbiAgd3hQaHJhc2VMb25nLFxyXG59OiBQcm9wcyk6IEpTWC5FbGVtZW50IHtcclxuICBjb25zdCBjdXJyZW50VGVtcGVyYXR1cmUgPSB0ZW1wZXJhdHVyZVswXTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBmbGV4RGlyZWN0aW9uPVwiY29sdW1uXCIganVzdGlmeUNvbnRlbnQ9XCJzcGFjZS1iZXR3ZWVuXCIgaGVpZ2h0PVwiMTAwJVwiPlxyXG4gICAgICA8Qm94IG10PXsxMH0+XHJcbiAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIiBtYj17NX0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIj5Ub2RheTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJzdWJ0aXRsZTFcIj5cclxuICAgICAgICAgICAge25ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywge1xyXG4gICAgICAgICAgICAgIHdlZWtkYXk6ICdsb25nJyxcclxuICAgICAgICAgICAgICBtb250aDogJ2xvbmcnLFxyXG4gICAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPEJveCB0ZXh0QWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoMVwiPntjdXJyZW50VGVtcGVyYXR1cmV9JmRlZzs8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57d3hQaHJhc2VMb25nfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPldpbmQ6IHt3aW5kU3BlZWR9bXBoPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIDxCb3ggZGlzcGxheT1cImZsZXhcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIHdpZHRoPXsxfT5cclxuICAgICAgICA8VGFicz5cclxuICAgICAgICAgIDxUYWIgbGFiZWw9XCJDb25kaXRpb25zXCIgLz5cclxuICAgICAgICAgIDxUYWIgbGFiZWw9XCJUZW1wZXJhdHVyZVwiIC8+XHJcbiAgICAgICAgPC9UYWJzPlxyXG4gICAgICA8L0JveD5cclxuXHJcbiAgICAgIDxCb3ggaGVpZ2h0PVwiNDB2aFwiIHdpZHRoPXsxfT5cclxuICAgICAgICA8Q29uZGl0aW9uc0NoYXJ0XHJcbiAgICAgICAgICBjbG91ZENvdmVyPXtjbG91ZENvdmVyfVxyXG4gICAgICAgICAgcHJlY2lwQ2hhbmNlPXtwcmVjaXBDaGFuY2V9XHJcbiAgICAgICAgICByZWxhdGl2ZUh1bWlkaXR5PXtyZWxhdGl2ZUh1bWlkaXR5fVxyXG4gICAgICAgICAgdmFsaWRUaW1lTG9jYWw9e3ZhbGlkVGltZUxvY2FsfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kYXlPdmVydmlldztcclxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVRvZGF5SG91cmx5RGF0YSB9IGZyb20gJ2hvb2tzJztcclxuaW1wb3J0IFRvZGF5T3ZlcnZpZXcgZnJvbSAnLi9Ub2RheU92ZXJ2aWV3JztcclxuXHJcbmltcG9ydCB7IFNlbGVjdGVkVGFiIH0gZnJvbSAnLi90b2RheU92ZXJ2aWV3LnR5cGVzJztcclxuXHJcbmZ1bmN0aW9uIFRvZGF5T3ZlcnZpZXdDb250YWluZXIoKTogSlNYLkVsZW1lbnQge1xyXG4gIGNvbnN0IFtzZWxlY3RlZFRhYiwgc2V0U2VsZWN0ZWRUYWJdID0gdXNlU3RhdGU8U2VsZWN0ZWRUYWI+KCdjb25kaXRpb25zJyk7XHJcbiAgY29uc3QgZGF0YSA9IHVzZVRvZGF5SG91cmx5RGF0YSgpO1xyXG5cclxuICByZXR1cm4gPFRvZGF5T3ZlcnZpZXcgc2VsZWN0ZWRUYWI9e3NlbGVjdGVkVGFifSBzZXRTZWxlY3RlZFRhYj17c2V0U2VsZWN0ZWRUYWJ9IHsuLi5kYXRhfSAvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kYXlPdmVydmlld0NvbnRhaW5lcjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==