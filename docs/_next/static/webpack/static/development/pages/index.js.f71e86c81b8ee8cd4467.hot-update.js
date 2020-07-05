webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/utils/getTodayHourlyData.js":
/*!*****************************************!*\
  !*** ./src/utils/getTodayHourlyData.js ***!
  \*****************************************/
/*! exports provided: getTodayHourlyData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTodayHourlyData\", function() { return getTodayHourlyData; });\nfunction getTodayHourlyData(hourlyData) {\n  var cloudCover = hourlyData.cloudCover,\n      dayOfWeek = hourlyData.dayOfWeek,\n      relativeHumidity = hourlyData.relativeHumidity,\n      precipChance = hourlyData.precipChance,\n      temperature = hourlyData.temperature,\n      validTimeLocal = hourlyData.validTimeLocal,\n      windSpeed = hourlyData.windSpeed,\n      wxPhraseLong = hourlyData.wxPhraseLong;\n  return {\n    cloudCover: cloudCover.slice(0, 18),\n    day: dayOfWeek[0],\n    dayOfWeek: dayOfWeek.slice(0, 18),\n    precipChance: precipChance.slice(0, 18),\n    relativeHumidity: relativeHumidity.slice(0, 18),\n    temperature: temperature.slice(0, 18),\n    validTimeLocal: validTimeLocal.slice(0, 18),\n    windSpeed: windSpeed[0],\n    wxPhraseLong: wxPhraseLong[0]\n  };\n}\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZ2V0VG9kYXlIb3VybHlEYXRhLmpzP2QyMTEiXSwibmFtZXMiOlsiZ2V0VG9kYXlIb3VybHlEYXRhIiwiaG91cmx5RGF0YSIsImNsb3VkQ292ZXIiLCJkYXlPZldlZWsiLCJyZWxhdGl2ZUh1bWlkaXR5IiwicHJlY2lwQ2hhbmNlIiwidGVtcGVyYXR1cmUiLCJ2YWxpZFRpbWVMb2NhbCIsIndpbmRTcGVlZCIsInd4UGhyYXNlTG9uZyIsInNsaWNlIiwiZGF5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQU8sU0FBU0Esa0JBQVQsQ0FBNEJDLFVBQTVCLEVBQXdDO0FBQUEsTUFFM0NDLFVBRjJDLEdBVXpDRCxVQVZ5QyxDQUUzQ0MsVUFGMkM7QUFBQSxNQUczQ0MsU0FIMkMsR0FVekNGLFVBVnlDLENBRzNDRSxTQUgyQztBQUFBLE1BSTNDQyxnQkFKMkMsR0FVekNILFVBVnlDLENBSTNDRyxnQkFKMkM7QUFBQSxNQUszQ0MsWUFMMkMsR0FVekNKLFVBVnlDLENBSzNDSSxZQUwyQztBQUFBLE1BTTNDQyxXQU4yQyxHQVV6Q0wsVUFWeUMsQ0FNM0NLLFdBTjJDO0FBQUEsTUFPM0NDLGNBUDJDLEdBVXpDTixVQVZ5QyxDQU8zQ00sY0FQMkM7QUFBQSxNQVEzQ0MsU0FSMkMsR0FVekNQLFVBVnlDLENBUTNDTyxTQVIyQztBQUFBLE1BUzNDQyxZQVQyQyxHQVV6Q1IsVUFWeUMsQ0FTM0NRLFlBVDJDO0FBWTdDLFNBQU87QUFDTFAsY0FBVSxFQUFFQSxVQUFVLENBQUNRLEtBQVgsQ0FBaUIsQ0FBakIsRUFBb0IsRUFBcEIsQ0FEUDtBQUVMQyxPQUFHLEVBQUVSLFNBQVMsQ0FBQyxDQUFELENBRlQ7QUFHTEEsYUFBUyxFQUFFQSxTQUFTLENBQUNPLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBbUIsRUFBbkIsQ0FITjtBQUlMTCxnQkFBWSxFQUFFQSxZQUFZLENBQUNLLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0IsRUFBdEIsQ0FKVDtBQUtMTixvQkFBZ0IsRUFBRUEsZ0JBQWdCLENBQUNNLEtBQWpCLENBQXVCLENBQXZCLEVBQTBCLEVBQTFCLENBTGI7QUFNTEosZUFBVyxFQUFFQSxXQUFXLENBQUNJLEtBQVosQ0FBa0IsQ0FBbEIsRUFBcUIsRUFBckIsQ0FOUjtBQU9MSCxrQkFBYyxFQUFFQSxjQUFjLENBQUNHLEtBQWYsQ0FBcUIsQ0FBckIsRUFBd0IsRUFBeEIsQ0FQWDtBQVFMRixhQUFTLEVBQUVBLFNBQVMsQ0FBQyxDQUFELENBUmY7QUFTTEMsZ0JBQVksRUFBRUEsWUFBWSxDQUFDLENBQUQ7QUFUckIsR0FBUDtBQVdEIiwiZmlsZSI6Ii4vc3JjL3V0aWxzL2dldFRvZGF5SG91cmx5RGF0YS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBnZXRUb2RheUhvdXJseURhdGEoaG91cmx5RGF0YSkge1xuICBjb25zdCB7XG4gICAgY2xvdWRDb3ZlcixcbiAgICBkYXlPZldlZWssXG4gICAgcmVsYXRpdmVIdW1pZGl0eSxcbiAgICBwcmVjaXBDaGFuY2UsXG4gICAgdGVtcGVyYXR1cmUsXG4gICAgdmFsaWRUaW1lTG9jYWwsXG4gICAgd2luZFNwZWVkLFxuICAgIHd4UGhyYXNlTG9uZyxcbiAgfSA9IGhvdXJseURhdGE7XG5cbiAgcmV0dXJuIHtcbiAgICBjbG91ZENvdmVyOiBjbG91ZENvdmVyLnNsaWNlKDAsIDE4KSxcbiAgICBkYXk6IGRheU9mV2Vla1swXSxcbiAgICBkYXlPZldlZWs6IGRheU9mV2Vlay5zbGljZSgwLCAxOCksXG4gICAgcHJlY2lwQ2hhbmNlOiBwcmVjaXBDaGFuY2Uuc2xpY2UoMCwgMTgpLFxuICAgIHJlbGF0aXZlSHVtaWRpdHk6IHJlbGF0aXZlSHVtaWRpdHkuc2xpY2UoMCwgMTgpLFxuICAgIHRlbXBlcmF0dXJlOiB0ZW1wZXJhdHVyZS5zbGljZSgwLCAxOCksXG4gICAgdmFsaWRUaW1lTG9jYWw6IHZhbGlkVGltZUxvY2FsLnNsaWNlKDAsIDE4KSxcbiAgICB3aW5kU3BlZWQ6IHdpbmRTcGVlZFswXSxcbiAgICB3eFBocmFzZUxvbmc6IHd4UGhyYXNlTG9uZ1swXSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/getTodayHourlyData.js\n");

/***/ })

})