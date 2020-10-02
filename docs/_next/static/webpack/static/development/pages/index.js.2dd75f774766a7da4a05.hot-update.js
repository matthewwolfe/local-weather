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
      narrative = _ref.narrative,
      temperatureMax = _ref.temperatureMax,
      temperatureMin = _ref.temperatureMin;
  return __jsx(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["MenuItem"], {
    component: next_link__WEBPACK_IMPORTED_MODULE_2___default.a,
    href: "/day",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XZWVrTGlzdC9EYXkuanMiXSwibmFtZXMiOlsiRGF5IiwiZGF5IiwibmFycmF0aXZlIiwidGVtcGVyYXR1cmVNYXgiLCJ0ZW1wZXJhdHVyZU1pbiIsIkxpbmsiLCJ3aGl0ZVNwYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxHQUFULE9BQWlFO0FBQUEsTUFBbERDLEdBQWtELFFBQWxEQSxHQUFrRDtBQUFBLE1BQTdDQyxTQUE2QyxRQUE3Q0EsU0FBNkM7QUFBQSxNQUFsQ0MsY0FBa0MsUUFBbENBLGNBQWtDO0FBQUEsTUFBbEJDLGNBQWtCLFFBQWxCQSxjQUFrQjtBQUMvRCxTQUNFLE1BQUMsMERBQUQ7QUFBVSxhQUFTLEVBQUVDLGdEQUFyQjtBQUEyQixRQUFJLEVBQUMsTUFBaEM7QUFBdUMsU0FBSyxFQUFFO0FBQUNDLGdCQUFVLEVBQUU7QUFBYixLQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxxREFBRDtBQUNFLFdBQU8sRUFBQyxNQURWO0FBRUUsaUJBQWEsRUFBRSxDQUFDLFFBQUQsRUFBVyxRQUFYLEVBQXFCLEtBQXJCLENBRmpCO0FBR0UsTUFBRSxFQUFFLENBSE47QUFJRSxTQUFLLEVBQUUsQ0FKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBS0UsTUFBQyxxREFBRDtBQUFLLFNBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sSUFBSSxDQUFYLENBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2QkwsR0FBN0IsQ0FERixFQUVFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2QkMsU0FBN0IsQ0FGRixDQUxGLEVBVUUsTUFBQyxxREFBRDtBQUNFLFdBQU8sRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLEtBQWpCLENBRFg7QUFFRSxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FGTjtBQUdFLFNBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sSUFBSSxDQUFYLENBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUtFLE1BQUMscURBQUQ7QUFBSyxTQUFLLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLElBQUksQ0FBWCxDQUFaO0FBQTJCLGFBQVMsRUFBRSxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLFFBQWpCLENBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR0MsY0FBYyxJQUNiLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2QkEsY0FBN0IsVUFGSixDQUxGLEVBVUUsTUFBQyxxREFBRDtBQUFLLFNBQUssRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sSUFBSSxDQUFYLENBQVo7QUFBMkIsYUFBUyxFQUFFLENBQUMsTUFBRCxFQUFTLE1BQVQsRUFBaUIsUUFBakIsQ0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNERBQUQ7QUFBWSxXQUFPLEVBQUMsT0FBcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUE2QkMsY0FBN0IsVUFERixDQVZGLENBVkYsQ0FERixDQURGO0FBNkJEOztLQTlCUUosRztBQWdDTUEsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjJkZDc1Zjc3NDc2NmE3ZGE0YTA1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIE1lbnVJdGVtLCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuZnVuY3Rpb24gRGF5KHsgZGF5LCBuYXJyYXRpdmUsIHRlbXBlcmF0dXJlTWF4LCB0ZW1wZXJhdHVyZU1pbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51SXRlbSBjb21wb25lbnQ9e0xpbmt9IGhyZWY9XCIvZGF5XCIgc3R5bGU9e3t3aGl0ZVNwYWNlOiAnbm9ybWFsJ319PlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgZGlzcGxheT1cImZsZXhcIlxyXG4gICAgICAgIGZsZXhEaXJlY3Rpb249e1snY29sdW1uJywgJ2NvbHVtbicsICdyb3cnXX1cclxuICAgICAgICBwdD17Nn1cclxuICAgICAgICB3aWR0aD17MX0+XHJcbiAgICAgICAgPEJveCB3aWR0aD17WzEsIDEsIDIgLyAzXX0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj57ZGF5fTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiPntuYXJyYXRpdmV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvQm94PlxyXG5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBkaXNwbGF5PXtbJ2ZsZXgnLCAnZmxleCcsICdib3gnXX1cclxuICAgICAgICAgIG10PXtbNCwgNCwgMF19XHJcbiAgICAgICAgICB3aWR0aD17WzEsIDEsIDEgLyAzXX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Qm94IHdpZHRoPXtbMSwgMSwgMSAvIDJdfSB0ZXh0QWxpZ249e1snbGVmdCcsICdsZWZ0JywgJ2NlbnRlciddfT5cclxuICAgICAgICAgICAge3RlbXBlcmF0dXJlTWF4ICYmIChcclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTFcIj57dGVtcGVyYXR1cmVNYXh9JmRlZztGPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IHdpZHRoPXtbMSwgMSwgMSAvIDJdfSB0ZXh0QWxpZ249e1snbGVmdCcsICdsZWZ0JywgJ2NlbnRlciddfT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkxXCI+e3RlbXBlcmF0dXJlTWlufSZkZWc7RjwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvTWVudUl0ZW0+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGF5O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9