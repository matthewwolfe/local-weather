webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/utils/getCoords.js":
/*!********************************!*\
  !*** ./src/utils/getCoords.js ***!
  \********************************/
/*! exports provided: getCoords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCoords\", function() { return getCoords; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ \"./src/utils/localStorage.js\");\n\n\n\n\nfunction getCoords() {\n  return _getCoords.apply(this, arguments);\n}\n\nfunction _getCoords() {\n  _getCoords = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            return _context.abrupt(\"return\", new Promise(function (resolve, reject) {\n              navigator.geolocation.getCurrentPosition(function (_ref) {\n                var coords = _ref.coords;\n                _localStorage__WEBPACK_IMPORTED_MODULE_2__[\"localStorage\"].setItem('coords', {\n                  latitude: coords.latitude,\n                  longitude: coords.longitude\n                });\n                console.log(coords);\n                resolve(coords);\n              }, function (error) {\n                reject(error);\n              }, {\n                timeout: 5000\n              });\n            }));\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getCoords.apply(this, arguments);\n}\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvZ2V0Q29vcmRzLmpzPzQ0ZjYiXSwibmFtZXMiOlsiZ2V0Q29vcmRzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImNvb3JkcyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsInRpbWVvdXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O1NBRWVBLFM7Ozs7O2dNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FDUyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyx1QkFBUyxDQUFDQyxXQUFWLENBQXNCQyxrQkFBdEIsQ0FDRSxnQkFBZ0I7QUFBQSxvQkFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQ2RDLDBFQUFZLENBQUNDLE9BQWIsQ0FBcUIsUUFBckIsRUFBK0I7QUFDN0JDLDBCQUFRLEVBQUVILE1BQU0sQ0FBQ0csUUFEWTtBQUU3QkMsMkJBQVMsRUFBRUosTUFBTSxDQUFDSTtBQUZXLGlCQUEvQjtBQUtBQyx1QkFBTyxDQUFDQyxHQUFSLENBQVlOLE1BQVo7QUFFQUwsdUJBQU8sQ0FBQ0ssTUFBRCxDQUFQO0FBQ0QsZUFWSCxFQVdFLFVBQUNPLEtBQUQsRUFBVztBQUNUWCxzQkFBTSxDQUFDVyxLQUFELENBQU47QUFDRCxlQWJILEVBY0U7QUFBRUMsdUJBQU8sRUFBRTtBQUFYLGVBZEY7QUFnQkQsYUFqQk0sQ0FEVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBcUJBIiwiZmlsZSI6Ii4vc3JjL3V0aWxzL2dldENvb3Jkcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvY2FsU3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcblxuYXN5bmMgZnVuY3Rpb24gZ2V0Q29vcmRzKCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXG4gICAgICAoeyBjb29yZHMgfSkgPT4ge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29vcmRzJywge1xuICAgICAgICAgIGxhdGl0dWRlOiBjb29yZHMubGF0aXR1ZGUsXG4gICAgICAgICAgbG9uZ2l0dWRlOiBjb29yZHMubG9uZ2l0dWRlLFxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZyhjb29yZHMpO1xuXG4gICAgICAgIHJlc29sdmUoY29vcmRzKTtcbiAgICAgIH0sXG4gICAgICAoZXJyb3IpID0+IHtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgIH0sXG4gICAgICB7IHRpbWVvdXQ6IDUwMDAgfSxcbiAgICApO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgZ2V0Q29vcmRzIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/utils/getCoords.js\n");

/***/ })

})