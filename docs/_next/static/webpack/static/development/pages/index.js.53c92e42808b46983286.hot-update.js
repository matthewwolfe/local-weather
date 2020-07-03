webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/components/WeatherProvider/WeatherProvider.js":
/*!***********************************************************!*\
  !*** ./src/components/WeatherProvider/WeatherProvider.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/esm/index.js\");\n/* harmony import */ var _contexts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../contexts */ \"./src/contexts/index.js\");\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.js\");\n/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/fetcher */ \"./src/utils/fetcher.js\");\nvar _jsxFileName = \"/Users/cn182266/Personal/local-weather/src/components/WeatherProvider/WeatherProvider.js\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\nfunction WeatherProvider(_ref) {\n  _s();\n\n  var children = _ref.children;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    navigator.geolocation.getCurrentPosition(function (position) {\n      return console.log(position);\n    });\n  }, []);\n\n  var _useSWR = Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_config_constants__WEBPACK_IMPORTED_MODULE_3__[\"DAILY_FORECAST_URL\"], _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__[\"fetcher\"]),\n      dailyData = _useSWR.data,\n      dailyError = _useSWR.error;\n\n  var _useSWR2 = Object(swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_config_constants__WEBPACK_IMPORTED_MODULE_3__[\"HOURLY_FORECAST_URL\"], _utils_fetcher__WEBPACK_IMPORTED_MODULE_4__[\"fetcher\"]),\n      hourlyData = _useSWR2.data,\n      hourlyError = _useSWR2.error;\n\n  if (!dailyData || !hourlyData) {\n    return null;\n  }\n\n  if (dailyError || hourlyError) {\n    return __jsx(\"div\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 12\n      }\n    }, \"Something went wrong :(\");\n  }\n\n  return __jsx(_contexts__WEBPACK_IMPORTED_MODULE_2__[\"WeatherContext\"].Provider, {\n    value: {\n      dailyData: dailyData,\n      hourlyData: hourlyData\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 5\n    }\n  }, children);\n}\n\n_s(WeatherProvider, \"XtQSX5HMwW7hipxPlHpbTnOsFSg=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"], swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n\n_c = WeatherProvider;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WeatherProvider);\n\nvar _c;\n\n$RefreshReg$(_c, \"WeatherProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9XZWF0aGVyUHJvdmlkZXIvV2VhdGhlclByb3ZpZGVyLmpzPzMwYjkiXSwibmFtZXMiOlsiV2VhdGhlclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VFZmZlY3QiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsInBvc2l0aW9uIiwiY29uc29sZSIsImxvZyIsInVzZVNXUiIsIkRBSUxZX0ZPUkVDQVNUX1VSTCIsImZldGNoZXIiLCJkYWlseURhdGEiLCJkYXRhIiwiZGFpbHlFcnJvciIsImVycm9yIiwiSE9VUkxZX0ZPUkVDQVNUX1VSTCIsImhvdXJseURhdGEiLCJob3VybHlFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTs7QUFFQSxTQUFTQSxlQUFULE9BQXVDO0FBQUE7O0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3JDQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsYUFBUyxDQUFDQyxXQUFWLENBQXNCQyxrQkFBdEIsQ0FBeUMsVUFBQ0MsUUFBRDtBQUFBLGFBQ3ZDQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWixDQUR1QztBQUFBLEtBQXpDO0FBR0QsR0FKUSxFQUlOLEVBSk0sQ0FBVDs7QUFEcUMsZ0JBT1VHLG1EQUFNLENBQ25EQyxvRUFEbUQsRUFFbkRDLHNEQUZtRCxDQVBoQjtBQUFBLE1BT3ZCQyxTQVB1QixXQU83QkMsSUFQNkI7QUFBQSxNQU9MQyxVQVBLLFdBT1pDLEtBUFk7O0FBQUEsaUJBV1lOLG1EQUFNLENBQ3JETyxxRUFEcUQsRUFFckRMLHNEQUZxRCxDQVhsQjtBQUFBLE1BV3ZCTSxVQVh1QixZQVc3QkosSUFYNkI7QUFBQSxNQVdKSyxXQVhJLFlBV1hILEtBWFc7O0FBZ0JyQyxNQUFJLENBQUNILFNBQUQsSUFBYyxDQUFDSyxVQUFuQixFQUErQjtBQUM3QixXQUFPLElBQVA7QUFDRDs7QUFFRCxNQUFJSCxVQUFVLElBQUlJLFdBQWxCLEVBQStCO0FBQzdCLFdBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FBUDtBQUNEOztBQUVELFNBQ0UsTUFBQyx3REFBRCxDQUFnQixRQUFoQjtBQUF5QixTQUFLLEVBQUU7QUFBRU4sZUFBUyxFQUFUQSxTQUFGO0FBQWFLLGdCQUFVLEVBQVZBO0FBQWIsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHaEIsUUFESCxDQURGO0FBS0Q7O0dBN0JRRCxlO1VBT3dDUywyQyxFQUlFQSwyQzs7O0tBWDFDVCxlO0FBK0JNQSw4RUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1dlYXRoZXJQcm92aWRlci9XZWF0aGVyUHJvdmlkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XG5pbXBvcnQgeyBXZWF0aGVyQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHRzJztcbmltcG9ydCB7XG4gIERBSUxZX0ZPUkVDQVNUX1VSTCxcbiAgSE9VUkxZX0ZPUkVDQVNUX1VSTCxcbn0gZnJvbSAnLi4vLi4vY29uZmlnL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZmV0Y2hlcic7XG5cbmZ1bmN0aW9uIFdlYXRoZXJQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKChwb3NpdGlvbikgPT5cbiAgICAgIGNvbnNvbGUubG9nKHBvc2l0aW9uKSxcbiAgICApO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgeyBkYXRhOiBkYWlseURhdGEsIGVycm9yOiBkYWlseUVycm9yIH0gPSB1c2VTV1IoXG4gICAgREFJTFlfRk9SRUNBU1RfVVJMLFxuICAgIGZldGNoZXIsXG4gICk7XG4gIGNvbnN0IHsgZGF0YTogaG91cmx5RGF0YSwgZXJyb3I6IGhvdXJseUVycm9yIH0gPSB1c2VTV1IoXG4gICAgSE9VUkxZX0ZPUkVDQVNUX1VSTCxcbiAgICBmZXRjaGVyLFxuICApO1xuXG4gIGlmICghZGFpbHlEYXRhIHx8ICFob3VybHlEYXRhKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAoZGFpbHlFcnJvciB8fCBob3VybHlFcnJvcikge1xuICAgIHJldHVybiA8ZGl2PlNvbWV0aGluZyB3ZW50IHdyb25nIDooPC9kaXY+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8V2VhdGhlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgZGFpbHlEYXRhLCBob3VybHlEYXRhIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvV2VhdGhlckNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXJQcm92aWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/WeatherProvider/WeatherProvider.js\n");

/***/ })

})