webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/App/App.js":
/*!***********************************!*\
  !*** ./src/components/App/App.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _AppProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppProvider */ "./src/components/AppProvider/index.js");
/* harmony import */ var _CoordsProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CoordsProvider */ "./src/components/CoordsProvider/index.js");
/* harmony import */ var _DayDetailView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DayDetailView */ "./src/components/DayDetailView/index.js");
/* harmony import */ var _LeftPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../LeftPanel */ "./src/components/LeftPanel/index.js");
/* harmony import */ var _RightPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../RightPanel */ "./src/components/RightPanel/index.js");
/* harmony import */ var _WeatherProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../WeatherProvider */ "./src/components/WeatherProvider/index.js");
var _jsxFileName = "C:\\Users\\matth\\Projects\\local-weather\\src\\components\\App\\App.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function App(_ref) {
  var selectedDay = _ref.selectedDay;
  return __jsx(_AppProvider__WEBPACK_IMPORTED_MODULE_2__["AppProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, __jsx(_CoordsProvider__WEBPACK_IMPORTED_MODULE_3__["CoordsProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx(_WeatherProvider__WEBPACK_IMPORTED_MODULE_7__["WeatherProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    flexDirection: ['column-reverse', 'column-reverse', 'row'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, selectedDay === null && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_LeftPanel__WEBPACK_IMPORTED_MODULE_5__["LeftPanel"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }), __jsx(_RightPanel__WEBPACK_IMPORTED_MODULE_6__["RightPanel"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  })), selectedDay !== null && __jsx(_DayDetailView__WEBPACK_IMPORTED_MODULE_4__["DayDetailView"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 38
    }
  })))));
}

_c = App;
/* harmony default export */ __webpack_exports__["default"] = (App);

var _c;

$RefreshReg$(_c, "App");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
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
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9BcHAvQXBwLmpzIl0sIm5hbWVzIjpbIkFwcCIsInNlbGVjdGVkRGF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLEdBQVQsT0FBNEI7QUFBQSxNQUFkQyxXQUFjLFFBQWRBLFdBQWM7QUFDMUIsU0FDRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQ0UsV0FBTyxFQUFDLE1BRFY7QUFFRSxpQkFBYSxFQUFFLENBQUMsZ0JBQUQsRUFBbUIsZ0JBQW5CLEVBQXFDLEtBQXJDLENBRmpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJR0EsV0FBVyxLQUFLLElBQWhCLElBQ0MsbUVBQ0UsTUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLHNEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixDQUxKLEVBV0dBLFdBQVcsS0FBSyxJQUFoQixJQUF3QixNQUFDLDREQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFYM0IsQ0FERixDQURGLENBREYsQ0FERjtBQXFCRDs7S0F0QlFELEc7QUF3Qk1BLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy40YmE0MTQzMWI2NTBiNWQ1Y2JjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgeyBBcHBQcm92aWRlciB9IGZyb20gJy4uL0FwcFByb3ZpZGVyJztcclxuaW1wb3J0IHsgQ29vcmRzUHJvdmlkZXIgfSBmcm9tICcuLi9Db29yZHNQcm92aWRlcic7XHJcbmltcG9ydCB7IERheURldGFpbFZpZXcgfSBmcm9tICcuLi9EYXlEZXRhaWxWaWV3JztcclxuaW1wb3J0IHsgTGVmdFBhbmVsIH0gZnJvbSAnLi4vTGVmdFBhbmVsJztcclxuaW1wb3J0IHsgUmlnaHRQYW5lbCB9IGZyb20gJy4uL1JpZ2h0UGFuZWwnO1xyXG5pbXBvcnQgeyBXZWF0aGVyUHJvdmlkZXIgfSBmcm9tICcuLi9XZWF0aGVyUHJvdmlkZXInO1xyXG5cclxuZnVuY3Rpb24gQXBwKHtzZWxlY3RlZERheX0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEFwcFByb3ZpZGVyPlxyXG4gICAgICA8Q29vcmRzUHJvdmlkZXI+XHJcbiAgICAgICAgPFdlYXRoZXJQcm92aWRlcj5cclxuICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPXtbJ2NvbHVtbi1yZXZlcnNlJywgJ2NvbHVtbi1yZXZlcnNlJywgJ3JvdyddfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c2VsZWN0ZWREYXkgPT09IG51bGwgJiZcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPExlZnRQYW5lbCAvPlxyXG4gICAgICAgICAgICAgICAgPFJpZ2h0UGFuZWwgLz5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAge3NlbGVjdGVkRGF5ICE9PSBudWxsICYmIDxEYXlEZXRhaWxWaWV3IC8+fVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9XZWF0aGVyUHJvdmlkZXI+XHJcbiAgICAgIDwvQ29vcmRzUHJvdmlkZXI+XHJcbiAgICA8L0FwcFByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==