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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Button\": function() { return /* binding */ Button; },\n/* harmony export */   \"Movies\": function() { return /* binding */ Movies; },\n/* harmony export */   \"Read\": function() { return /* binding */ Read; },\n/* harmony export */   \"default\": function() { return /* binding */ main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction main() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Read, {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n            lineNumber: 4,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n        lineNumber: 3,\n        columnNumber: 9\n    }, this);\n};\nfunction Movies(param) {\n    var data = param.data;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: data.Search.map(function(m) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        m.Title,\n                        \" --- \",\n                        m.Year,\n                        \" --- \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: m.Poster,\n                            width: \"200\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n                            lineNumber: 14,\n                            columnNumber: 74\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n                    lineNumber: 14,\n                    columnNumber: 42\n                }, _this);\n            })\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n            lineNumber: 13,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n        lineNumber: 12,\n        columnNumber: 9\n    }, this);\n}\n_c = Movies;\nfunction Read() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n        id: \"pesquisa\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n        lineNumber: 24,\n        columnNumber: 12\n    }, this);\n}\n_c1 = Read;\nfunction Button() {\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: getServerSideProps(context, {\n            tipo: tipo\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n} // export async function getServerSideProps(context,propriedades,){\n //     const res = await fetch(`http://www.omdbapi.com/?apikey=dc417e24&${propriedades.tipo}=${propriedades.pesquisa}`)\n //     const data = await res.json()\n //     return {\n //         props: {\n //             data\n //         }\n //     }\n //   }\n_c2 = Button;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Movies\");\n$RefreshReg$(_c1, \"Read\");\n$RefreshReg$(_c2, \"Button\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWNlaXRhXzMvbW92aWVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQWUsU0FBU0EsSUFBSSxHQUFFO0lBQzFCLHFCQUNJLDhEQUFDQyxLQUFHO2tCQUNBLDRFQUFDQyxJQUFJOzs7O2dCQUFFOzs7OztZQUNMLENBQ1Q7Q0FDSjtBQUdNLFNBQVNDLE1BQU0sQ0FBQyxLQUFNLEVBQUM7UUFBUCxJQUFLLEdBQUwsS0FBTSxDQUFMQyxJQUFJOztJQUN4QixxQkFDSSw4REFBQ0gsS0FBRztrQkFDQSw0RUFBQ0EsS0FBRztzQkFDQ0csSUFBSSxDQUFDQyxNQUFNLENBQUNDLEdBQUcsQ0FBRSxTQUFDQyxDQUFDO3FDQUFLLDhEQUFDTixLQUFHOzt3QkFBRU0sQ0FBQyxDQUFDQyxLQUFLO3dCQUFDLE9BQUs7d0JBQUNELENBQUMsQ0FBQ0UsSUFBSTt3QkFBQyxPQUFLO3NDQUFBLDhEQUFDQyxLQUFHOzRCQUFDQyxHQUFHLEVBQUVKLENBQUMsQ0FBQ0ssTUFBTTs0QkFBRUMsS0FBSyxFQUFDLEtBQUs7Ozs7O2lDQUFPOzs7Ozs7eUJBQU07YUFBQSxDQUFDOzs7OztnQkFDcEc7Ozs7O1lBQ0osQ0FFVDtDQUVKO0FBVmVWLEtBQUFBLE1BQU07QUFZZixTQUFTRCxJQUFJLEdBQUU7SUFFbEIscUJBQU8sOERBQUNZLE9BQUs7UUFBQ0MsRUFBRSxFQUFDLFVBQVU7Ozs7O1lBQVMsQ0FBQztDQUN4QztBQUhlYixNQUFBQSxJQUFJO0FBS2IsU0FBU2MsTUFBTSxHQUFFO2tCQUNwQiw4REFBQ0MsUUFBTTtRQUFDQyxPQUFPLEVBQUVDLGtCQUFrQixDQUFDQyxPQUFPLEVBQUM7WUFBQ0MsSUFBSSxFQUFKQSxJQUFJO1NBQUMsQ0FBQzs7Ozs7WUFBVztDQUNqRSxDQUVELG1FQUFtRTtDQUduRSx1SEFBdUg7Q0FFdkgsb0NBQW9DO0NBRXBDLGVBQWU7Q0FFZixtQkFBbUI7Q0FFbkIsbUJBQW1CO0NBQ25CLFlBQVk7Q0FDWixRQUFRO0NBQ1IsTUFBTTtBQWxCVUwsTUFBQUEsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZWNlaXRhXzMvbW92aWVzLmpzPzViNGMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFpbigpe1xuICAgIHJldHVybihcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxSZWFkLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbmV4cG9ydCBmdW5jdGlvbiBNb3ZpZXMoe2RhdGF9KXtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7ZGF0YS5TZWFyY2gubWFwKCAobSkgPT4gPGRpdj57bS5UaXRsZX0gLS0tIHttLlllYXJ9IC0tLSA8aW1nIHNyYz17bS5Qb3N0ZXJ9IHdpZHRoPVwiMjAwXCI+PC9pbWc+PC9kaXY+KX0gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgIClcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gUmVhZCgpe1xuICAgIFxuICAgIHJldHVybig8aW5wdXQgaWQ9XCJwZXNxdWlzYVwiPjwvaW5wdXQ+KVxufVxuXG5leHBvcnQgZnVuY3Rpb24gQnV0dG9uKCl7XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCx7dGlwb30pfT48L2J1dHRvbj5cbn1cblxuLy8gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0LHByb3ByaWVkYWRlcywpe1xuXG4gICAgXG4vLyAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1kYzQxN2UyNCYke3Byb3ByaWVkYWRlcy50aXBvfT0ke3Byb3ByaWVkYWRlcy5wZXNxdWlzYX1gKVxuICBcbi8vICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICBcbi8vICAgICByZXR1cm4ge1xuICBcbi8vICAgICAgICAgcHJvcHM6IHtcbiAgXG4vLyAgICAgICAgICAgICBkYXRhXG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgIH1cbiJdLCJuYW1lcyI6WyJtYWluIiwiZGl2IiwiUmVhZCIsIk1vdmllcyIsImRhdGEiLCJTZWFyY2giLCJtYXAiLCJtIiwiVGl0bGUiLCJZZWFyIiwiaW1nIiwic3JjIiwiUG9zdGVyIiwid2lkdGgiLCJpbnB1dCIsImlkIiwiQnV0dG9uIiwiYnV0dG9uIiwib25DbGljayIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJ0aXBvIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/receita_3/movies.js\n");

/***/ })

});