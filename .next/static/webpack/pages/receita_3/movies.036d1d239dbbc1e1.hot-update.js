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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": function() { return /* binding */ Button; },\n/* harmony export */   \"Movies\": function() { return /* binding */ Movies; },\n/* harmony export */   \"Read\": function() { return /* binding */ Read; },\n/* harmony export */   \"default\": function() { return /* binding */ main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction main() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Read, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n            lineNumber: 4,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, this);\n};\nfunction Movies(param) {\n    var data = param.data;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: data.Search.map(function(m) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        m.Title,\n                        \" --- \",\n                        m.Year,\n                        \" --- \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: m.Poster,\n                            width: \"200\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n                            lineNumber: 14,\n                            columnNumber: 74\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n                    lineNumber: 14,\n                    columnNumber: 42\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_c = Movies;\nfunction Read() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"pesquisa\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n        lineNumber: 24,\n        columnNumber: 12\n    }, this);\n}\n_c1 = Read;\nfunction Button() {\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: getServerSideProps(context)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n} // export async function getServerSideProps(context,propriedades,){\n //     const res = await fetch(`http://www.omdbapi.com/?apikey=dc417e24&${propriedades.tipo}=${propriedades.pesquisa}`)\n //     const data = await res.json()\n //     return {\n //         props: {\n //             data\n //         }\n //     }\n //   }\n_c2 = Button;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Movies\");\n$RefreshReg$(_c1, \"Read\");\n$RefreshReg$(_c2, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWNlaXRhXzMvbW92aWVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQWUsU0FBU0EsSUFBSSxHQUFFO0lBQzFCLHFCQUNJLDhEQUFDQyxLQUFHO2tCQUNBLDRFQUFDQyxJQUFJOzs7O2dCQUFFOzs7OztZQUNMLENBQ1Q7Q0FDSjtBQUdNLFNBQVNDLE1BQU0sQ0FBQyxLQUFNLEVBQUM7UUFBUCxJQUFLLEdBQUwsS0FBTSxDQUFMQyxJQUFJOztJQUN4QixxQkFDSSw4REFBQ0gsS0FBRztrQkFDQSw0RUFBQ0EsS0FBRztzQkFDQ0csSUFBSSxDQUFDQyxNQUFNLENBQUNDLEdBQUcsQ0FBRSxTQUFDQyxDQUFDO3FDQUFLLDhEQUFDTixLQUFHOzt3QkFBRU0sQ0FBQyxDQUFDQyxLQUFLO3dCQUFDLE9BQUs7d0JBQUNELENBQUMsQ0FBQ0UsSUFBSTt3QkFBQyxPQUFLO3NDQUFBLDhEQUFDQyxLQUFHOzRCQUFDQyxHQUFHLEVBQUVKLENBQUMsQ0FBQ0ssTUFBTTs0QkFBRUMsS0FBSyxFQUFDLEtBQUs7Ozs7O2lDQUFPOzs7Ozs7eUJBQU07YUFBQSxDQUFDOzs7OztnQkFDcEc7Ozs7O1lBQ0osQ0FFVDtDQUVKO0FBVmVWLEtBQUFBLE1BQU07QUFZZixTQUFTRCxJQUFJLEdBQUU7SUFFbEIscUJBQU8sOERBQUNZLE9BQUs7UUFBQ0MsRUFBRSxFQUFDLFVBQVU7Ozs7O1lBQVMsQ0FBQztDQUN4QztBQUhlYixNQUFBQSxJQUFJO0FBS2IsU0FBU2MsTUFBTSxHQUFFO2tCQUNwQiw4REFBQ0MsUUFBTTtRQUFDQyxPQUFPLEVBQUVDLGtCQUFrQixDQUFDQyxPQUFPLENBQUU7Ozs7O1lBQVc7Q0FDM0QsQ0FFRCxtRUFBbUU7Q0FHbkUsdUhBQXVIO0NBRXZILG9DQUFvQztDQUVwQyxlQUFlO0NBRWYsbUJBQW1CO0NBRW5CLG1CQUFtQjtDQUNuQixZQUFZO0NBQ1osUUFBUTtDQUNSLE1BQU07QUFsQlVKLE1BQUFBLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcmVjZWl0YV8zL21vdmllcy5qcz81YjRjIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1haW4oKXtcbiAgICByZXR1cm4oXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8UmVhZC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gTW92aWVzKHtkYXRhfSl7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAge2RhdGEuU2VhcmNoLm1hcCggKG0pID0+IDxkaXY+e20uVGl0bGV9IC0tLSB7bS5ZZWFyfSAtLS0gPGltZyBzcmM9e20uUG9zdGVyfSB3aWR0aD1cIjIwMFwiPjwvaW1nPjwvZGl2Pil9ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFJlYWQoKXtcbiAgICBcbiAgICByZXR1cm4oPGlucHV0IGlkPVwicGVzcXVpc2FcIj48L2lucHV0Pilcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIEJ1dHRvbigpe1xuICAgIDxidXR0b24gb25DbGljaz17Z2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQsKX0+PC9idXR0b24+XG59XG5cbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCxwcm9wcmllZGFkZXMsKXtcblxuICAgIFxuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9ZGM0MTdlMjQmJHtwcm9wcmllZGFkZXMudGlwb309JHtwcm9wcmllZGFkZXMucGVzcXVpc2F9YClcbiAgXG4vLyAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcbiAgXG4vLyAgICAgcmV0dXJuIHtcbiAgXG4vLyAgICAgICAgIHByb3BzOiB7XG4gIFxuLy8gICAgICAgICAgICAgZGF0YVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICB9XG4iXSwibmFtZXMiOlsibWFpbiIsImRpdiIsIlJlYWQiLCJNb3ZpZXMiLCJkYXRhIiwiU2VhcmNoIiwibWFwIiwibSIsIlRpdGxlIiwiWWVhciIsImltZyIsInNyYyIsIlBvc3RlciIsIndpZHRoIiwiaW5wdXQiLCJpZCIsIkJ1dHRvbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/receita_3/movies.js\n");

/***/ })

});