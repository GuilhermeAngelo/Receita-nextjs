"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/receita_3/movies",{

/***/ "./pages/receita_3/movies.js":
/*!***********************************!*\
  !*** ./pages/receita_3/movies.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Query\": function() { return /* binding */ Query; },\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nvar __N_SSP = true;\nfunction Movies(param) {\n    var data = param.data;\n    var _this = this;\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"carregando...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n            lineNumber: 5,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Query, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data.Search.map(function(m) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            m.Title,\n                            \" --- \",\n                            m.Year\n                        ]\n                    }, m.imdbID, true, {\n                        fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n                        lineNumber: 15,\n                        columnNumber: 38\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n};\n_c = Movies;\nfunction Query() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        method: \"get\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"pesquisa\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"submit\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_c1 = Query;\nvar _c, _c1;\n$RefreshReg$(_c, \"Movies\");\n$RefreshReg$(_c1, \"Query\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWNlaXRhXzMvbW92aWVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7O0FBQWUsU0FBU0EsTUFBTSxDQUFDLEtBQU0sRUFBQztRQUFQLElBQUssR0FBTCxLQUFNLENBQUxDLElBQUk7O0lBQ2hDLElBQUcsQ0FBQ0EsSUFBSSxFQUFDO1FBQ0wscUJBQ0ksOERBQUNDLEtBQUc7c0JBQUMsZUFFTDs7Ozs7Z0JBQU0sQ0FDVDtLQUNKO0lBQ0QscUJBQ0ksOERBQUNBLEtBQUc7OzBCQUNBLDhEQUFDQyxLQUFLOzs7O29CQUFFOzBCQUNSLDhEQUFDRCxLQUFHOzBCQUVIRCxJQUFJLENBQUNHLE1BQU0sQ0FBQ0MsR0FBRyxDQUFFLFNBQUNDLENBQUM7eUNBQUssOERBQUNKLEtBQUc7OzRCQUFrQkksQ0FBQyxDQUFDQyxLQUFLOzRCQUFDLE9BQUs7NEJBQUNELENBQUMsQ0FBQ0UsSUFBSTs7dUJBQWhDRixDQUFDLENBQUNHLE1BQU07Ozs7NkJBQStCO2lCQUFBLENBQUc7Ozs7O29CQUV2RTs7Ozs7O1lBRUosQ0FFVDtDQUVKO0FBckJ1QlQsS0FBQUEsTUFBTTtBQTBDdkIsU0FBU0csS0FBSyxHQUFFO0lBQ25CLHFCQUNJLDhEQUFDTyxNQUFJO1FBQUNDLE1BQU0sRUFBQyxLQUFLOzswQkFDZCw4REFBQ0MsT0FBSztnQkFBQ0MsSUFBSSxFQUFDLFVBQVU7Ozs7O29CQUNkOzBCQUNSLDhEQUFDRCxPQUFLO2dCQUFDRSxJQUFJLEVBQUMsUUFBUTs7Ozs7b0JBQVM7Ozs7OztZQUMxQixDQUNWO0NBQ0o7QUFSZVgsTUFBQUEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWNlaXRhXzMvbW92aWVzLmpzPzViNGMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMoe2RhdGF9KXtcbiAgICBpZighZGF0YSl7XG4gICAgICAgIHJldHVybihcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgY2FycmVnYW5kby4uLlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxRdWVyeS8+XG4gICAgICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICB7ZGF0YS5TZWFyY2gubWFwKCAobSkgPT4gPGRpdiBrZXk9e20uaW1kYklEfSA+e20uVGl0bGV9IC0tLSB7bS5ZZWFyfTwvZGl2PiAgKX0gICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG5cbn1cblxuIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCl7XG4gICAgY29uc3Qge3Blc3F1aXNhfSA9IGNvbnRleHQucXVlcnlcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PWRjNDE3ZTI0JnM9JHtwZXNxdWlzYX1gKVxuICAgIGNvbnNvbGUubG9nKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9ZGM0MTdlMjQmcz0ke3Blc3F1aXNhfWApXG4gIFxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gIFxuICAgIHJldHVybiB7XG4gIFxuICAgICAgICBwcm9wczoge1xuICBcbiAgICAgICAgICAgIGRhdGFcbiAgXG4gICAgICAgIH1cbiAgXG4gICAgfVxuICBcbiAgfVxuXG5leHBvcnQgZnVuY3Rpb24gUXVlcnkoKXtcbiAgICByZXR1cm4oXG4gICAgICAgIDxmb3JtIG1ldGhvZD1cImdldFwiPlxuICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJwZXNxdWlzYVwiPlxuICAgICAgICAgICAgPC9pbnB1dD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCI+PC9pbnB1dD5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn0iXSwibmFtZXMiOlsiTW92aWVzIiwiZGF0YSIsImRpdiIsIlF1ZXJ5IiwiU2VhcmNoIiwibWFwIiwibSIsIlRpdGxlIiwiWWVhciIsImltZGJJRCIsImZvcm0iLCJtZXRob2QiLCJpbnB1dCIsIm5hbWUiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/receita_3/movies.js\n");

/***/ })

});