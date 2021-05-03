self["webpackHotUpdate_N_E"]("pages/index",{

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
/* harmony import */ var _todayOverview_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todayOverview.types */ "./src/components/TodayOverview/todayOverview.types.ts");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Matthew\\Projects\\local-weather\\src\\components\\TodayOverview\\TodayOverviewContainer.tsx",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Matthew_Projects_local_weather_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function TodayOverviewContainer() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(_todayOverview_types__WEBPACK_IMPORTED_MODULE_5__.SelectedTab.Conditions),
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

_s(TodayOverviewContainer, "vlb+knG1P3m/nLp3IjNzZcGYgng=", false, function () {
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


/***/ }),

/***/ "./src/components/TodayOverview/todayOverview.types.ts":
/*!*************************************************************!*\
  !*** ./src/components/TodayOverview/todayOverview.types.ts ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectedTab": function() { return /* binding */ SelectedTab; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var SelectedTab;

(function (SelectedTab) {
  SelectedTab["Conditions"] = "conditions";
  SelectedTab["Temperature"] = "temperature";
})(SelectedTab || (SelectedTab = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9kYXlPdmVydmlldy9Ub2RheU92ZXJ2aWV3Q29udGFpbmVyLnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVG9kYXlPdmVydmlldy90b2RheU92ZXJ2aWV3LnR5cGVzLnRzIl0sIm5hbWVzIjpbIlRvZGF5T3ZlcnZpZXdDb250YWluZXIiLCJ1c2VTdGF0ZSIsIlNlbGVjdGVkVGFiIiwic2VsZWN0ZWRUYWIiLCJzZXRTZWxlY3RlZFRhYiIsImRhdGEiLCJ1c2VUb2RheUhvdXJseURhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBRUEsU0FBU0Esc0JBQVQsR0FBK0M7QUFBQTs7QUFBQSxrQkFDUEMsK0NBQVEsQ0FBY0Msd0VBQWQsQ0FERDtBQUFBLE1BQ3RDQyxXQURzQztBQUFBLE1BQ3pCQyxjQUR5Qjs7QUFFN0MsTUFBTUMsSUFBSSxHQUFHQyx5REFBa0IsRUFBL0I7QUFFQSxzQkFBTyw4REFBQyxtREFBRDtBQUFlLGVBQVcsRUFBRUgsV0FBNUI7QUFBeUMsa0JBQWMsRUFBRUM7QUFBekQsS0FBNkVDLElBQTdFO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUNEOztHQUxRTCxzQjtVQUVNTSxxRDs7O0tBRk5OLHNCO0FBT1QsK0RBQWVBLHNCQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWE8sSUFBS0UsV0FBWjs7V0FBWUEsVztBQUFBQSxhO0FBQUFBLGE7R0FBQUEsVyxLQUFBQSxXIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ4YmZjMTBkMTA0Mzc0ZjIxZDUyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdXNlVG9kYXlIb3VybHlEYXRhIH0gZnJvbSAnaG9va3MnO1xyXG5pbXBvcnQgVG9kYXlPdmVydmlldyBmcm9tICcuL1RvZGF5T3ZlcnZpZXcnO1xyXG5cclxuaW1wb3J0IHsgU2VsZWN0ZWRUYWIgfSBmcm9tICcuL3RvZGF5T3ZlcnZpZXcudHlwZXMnO1xyXG5cclxuZnVuY3Rpb24gVG9kYXlPdmVydmlld0NvbnRhaW5lcigpOiBKU1guRWxlbWVudCB7XHJcbiAgY29uc3QgW3NlbGVjdGVkVGFiLCBzZXRTZWxlY3RlZFRhYl0gPSB1c2VTdGF0ZTxTZWxlY3RlZFRhYj4oU2VsZWN0ZWRUYWIuQ29uZGl0aW9ucyk7XHJcbiAgY29uc3QgZGF0YSA9IHVzZVRvZGF5SG91cmx5RGF0YSgpO1xyXG5cclxuICByZXR1cm4gPFRvZGF5T3ZlcnZpZXcgc2VsZWN0ZWRUYWI9e3NlbGVjdGVkVGFifSBzZXRTZWxlY3RlZFRhYj17c2V0U2VsZWN0ZWRUYWJ9IHsuLi5kYXRhfSAvPjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9kYXlPdmVydmlld0NvbnRhaW5lcjtcclxuIiwiaW1wb3J0IHsgSG91cmx5RGF0YSB9IGZyb20gJ3R5cGVzL3dlYXRoZXInO1xyXG5cclxuZXhwb3J0IGVudW0gU2VsZWN0ZWRUYWIge1xyXG4gIENvbmRpdGlvbnMgPSAnY29uZGl0aW9ucycsXHJcbiAgVGVtcGVyYXR1cmUgPSAndGVtcGVyYXR1cmUnLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgSG91cmx5RGF0YSB7XHJcbiAgc2VsZWN0ZWRUYWI6IFNlbGVjdGVkVGFiO1xyXG4gIHNldFNlbGVjdGVkVGFiOiAoc2VsZWN0ZWRUYWI6IFNlbGVjdGVkVGFiKSA9PiB2b2lkO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=