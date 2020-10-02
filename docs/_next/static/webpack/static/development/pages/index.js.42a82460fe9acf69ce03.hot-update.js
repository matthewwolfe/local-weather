webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./src/components/WeekList/Day.js":
/*!****************************************!*\
  !*** ./src/components/WeekList/Day.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\matth\\Projects\\local-weather\\src\\components\\WeekList\\Day.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Day(_ref) {
  var day = _ref.day,
      onClick = _ref.onClick,
      narrative = _ref.narrative,
      temperatureMax = _ref.temperatureMax,
      temperatureMin = _ref.temperatureMin;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    onClick: onClick,
    style: {
      whiteSpace: 'normal'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: "flex",
    flexDirection: ['column', 'column', 'row'],
    pt: 6,
    width: 1,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [1, 1, 2 / 3],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }, day), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }, narrative)), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    display: ['flex', 'flex', 'box'],
    mt: [4, 4, 0],
    width: [1, 1, 1 / 3],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [1, 1, 1 / 2],
    textAlign: ['left', 'left', 'center'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, temperatureMax && __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, temperatureMax, "\xB0F")), __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    width: [1, 1, 1 / 2],
    textAlign: ['left', 'left', 'center'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["Typography"], {
    variant: "body1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, temperatureMin, "\xB0F")))));
}

_c = Day;
/* harmony default export */ __webpack_exports__["default"] = (Day);

var _c;

$RefreshReg$(_c, "Day");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XZWVrTGlzdC9EYXkuanMiXSwibmFtZXMiOlsiRGF5IiwiZGF5Iiwib25DbGljayIsIm5hcnJhdGl2ZSIsInRlbXBlcmF0dXJlTWF4IiwidGVtcGVyYXR1cmVNaW4iLCJ3aGl0ZVNwYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxHQUFULE9BQTBFO0FBQUEsTUFBM0RDLEdBQTJELFFBQTNEQSxHQUEyRDtBQUFBLE1BQXREQyxPQUFzRCxRQUF0REEsT0FBc0Q7QUFBQSxNQUE3Q0MsU0FBNkMsUUFBN0NBLFNBQTZDO0FBQUEsTUFBbENDLGNBQWtDLFFBQWxDQSxjQUFrQztBQUFBLE1BQWxCQyxjQUFrQixRQUFsQkEsY0FBa0I7QUFDeEUsU0FDRSxNQUFDLDBEQUFEO0FBQVUsV0FBTyxFQUFFSCxPQUFuQjtBQUE0QixTQUFLLEVBQUU7QUFBQ0ksZ0JBQVUsRUFBRTtBQUFiLEtBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHFEQUFEO0FBQ0UsV0FBTyxFQUFDLE1BRFY7QUFFRSxpQkFBYSxFQUFFLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsS0FBckIsQ0FGakI7QUFHRSxNQUFFLEVBQUUsQ0FITjtBQUlFLFNBQUssRUFBRSxDQUpUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FLRSxNQUFDLHFEQUFEO0FBQUssU0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxJQUFJLENBQVgsQ0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZCTCxHQUE3QixDQURGLEVBRUUsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZCRSxTQUE3QixDQUZGLENBTEYsRUFVRSxNQUFDLHFEQUFEO0FBQ0UsV0FBTyxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsS0FBakIsQ0FEWDtBQUVFLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZOO0FBR0UsU0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxJQUFJLENBQVgsQ0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyxxREFBRDtBQUFLLFNBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sSUFBSSxDQUFYLENBQVo7QUFBMkIsYUFBUyxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsUUFBakIsQ0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHQyxjQUFjLElBQ2IsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZCQSxjQUE3QixVQUZKLENBTEYsRUFVRSxNQUFDLHFEQUFEO0FBQUssU0FBSyxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxJQUFJLENBQVgsQ0FBWjtBQUEyQixhQUFTLEVBQUUsQ0FBQyxNQUFELEVBQVMsTUFBVCxFQUFpQixRQUFqQixDQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw0REFBRDtBQUFZLFdBQU8sRUFBQyxPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQTZCQyxjQUE3QixVQURGLENBVkYsQ0FWRixDQURGLENBREY7QUE2QkQ7O0tBOUJRTCxHO0FBZ0NNQSxrRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNDJhODI0NjBmZTlhY2Y2OWNlMDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgTWVudUl0ZW0sIFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5mdW5jdGlvbiBEYXkoeyBkYXksIG9uQ2xpY2ssIG5hcnJhdGl2ZSwgdGVtcGVyYXR1cmVNYXgsIHRlbXBlcmF0dXJlTWluIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1lbnVJdGVtIG9uQ2xpY2s9e29uQ2xpY2t9IHN0eWxlPXt7d2hpdGVTcGFjZTogJ25vcm1hbCd9fT5cclxuICAgICAgPEJveFxyXG4gICAgICAgIGRpc3BsYXk9XCJmbGV4XCJcclxuICAgICAgICBmbGV4RGlyZWN0aW9uPXtbJ2NvbHVtbicsICdjb2x1bW4nLCAncm93J119XHJcbiAgICAgICAgcHQ9ezZ9XHJcbiAgICAgICAgd2lkdGg9ezF9PlxyXG4gICAgICAgIDxCb3ggd2lkdGg9e1sxLCAxLCAyIC8gM119PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+e2RheX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIj57bmFycmF0aXZlfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgZGlzcGxheT17WydmbGV4JywgJ2ZsZXgnLCAnYm94J119XHJcbiAgICAgICAgICBtdD17WzQsIDQsIDBdfVxyXG4gICAgICAgICAgd2lkdGg9e1sxLCAxLCAxIC8gM119XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEJveCB3aWR0aD17WzEsIDEsIDEgLyAyXX0gdGV4dEFsaWduPXtbJ2xlZnQnLCAnbGVmdCcsICdjZW50ZXInXX0+XHJcbiAgICAgICAgICAgIHt0ZW1wZXJhdHVyZU1heCAmJiAoXHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+e3RlbXBlcmF0dXJlTWF4fSZkZWc7RjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveCB3aWR0aD17WzEsIDEsIDEgLyAyXX0gdGV4dEFsaWduPXtbJ2xlZnQnLCAnbGVmdCcsICdjZW50ZXInXX0+XHJcbiAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MVwiPnt0ZW1wZXJhdHVyZU1pbn0mZGVnO0Y8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L01lbnVJdGVtPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERheTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==