"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/receita_3/movies";
exports.ids = ["pages/receita_3/movies"];
exports.modules = {

/***/ "./pages/receita_3/movies.js":
/*!***********************************!*\
  !*** ./pages/receita_3/movies.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Query\": () => (/* binding */ Query),\n/* harmony export */   \"default\": () => (/* binding */ Movies),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Movies({ data  }) {\n    if (!data) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"carregando...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n            lineNumber: 5,\n            columnNumber: 13\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Query, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n                lineNumber: 12,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            m.Title,\n                            \" --- \",\n                            m.Year\n                        ]\n                    }, m.imdbID, true, {\n                        fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n                        lineNumber: 15,\n                        columnNumber: 38\n                    }, this)\n                )\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n};\nasync function getServerSideProps(context) {\n    const { pesquisa  } = context.query;\n    const res = await fetch(`http://www.omdbapi.com/?apikey=dc417e24&s=${pesquisa}`);\n    console.log(`http://www.omdbapi.com/?apikey=dc417e24&s=${pesquisa}`);\n    const data = await res.json();\n    return {\n        props: {\n            data\n        }\n    };\n}\nfunction Query() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        method: \"get\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"pesquisa\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"submit\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_3\\\\movies.js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWNlaXRhXzMvbW92aWVzLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ0E7QUFBZSxTQUFTQSxNQUFNLENBQUMsRUFBQ0MsSUFBSSxHQUFDLEVBQUM7SUFDbEMsSUFBRyxDQUFDQSxJQUFJLEVBQUM7UUFDTCxxQkFDSSw4REFBQ0MsS0FBRztzQkFBQyxlQUVMOzs7OztnQkFBTSxDQUNUO0tBQ0o7SUFDRCxxQkFDSSw4REFBQ0EsS0FBRzs7MEJBQ0EsOERBQUNDLEtBQUs7Ozs7b0JBQUU7MEJBQ1IsOERBQUNELEtBQUc7MEJBRUhELElBQUksQ0FBQ0csTUFBTSxDQUFDQyxHQUFHLENBQUUsQ0FBQ0MsQ0FBQyxpQkFBSyw4REFBQ0osS0FBRzs7NEJBQWtCSSxDQUFDLENBQUNDLEtBQUs7NEJBQUMsT0FBSzs0QkFBQ0QsQ0FBQyxDQUFDRSxJQUFJOzt1QkFBaENGLENBQUMsQ0FBQ0csTUFBTTs7Ozs0QkFBK0I7Z0JBQUEsQ0FBRzs7Ozs7b0JBRXZFOzs7Ozs7WUFFSixDQUVUO0NBRUo7QUFFTyxlQUFlQyxrQkFBa0IsQ0FBQ0MsT0FBTyxFQUFDO0lBQzlDLE1BQU0sRUFBQ0MsUUFBUSxHQUFDLEdBQUdELE9BQU8sQ0FBQ0UsS0FBSztJQUNoQyxNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDLENBQUMsMENBQTBDLEVBQUVILFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDaEZJLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQUMsMENBQTBDLEVBQUVMLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFcEUsTUFBTVgsSUFBSSxHQUFHLE1BQU1hLEdBQUcsQ0FBQ0ksSUFBSSxFQUFFO0lBRTdCLE9BQU87UUFFSEMsS0FBSyxFQUFFO1lBRUhsQixJQUFJO1NBRVA7S0FFSjtDQUVGO0FBRUksU0FBU0UsS0FBSyxHQUFFO0lBQ25CLHFCQUNJLDhEQUFDaUIsTUFBSTtRQUFDQyxNQUFNLEVBQUMsS0FBSzs7MEJBQ2QsOERBQUNDLE9BQUs7Z0JBQUNDLElBQUksRUFBQyxVQUFVOzs7OztvQkFDZDswQkFDUiw4REFBQ0QsT0FBSztnQkFBQ0UsSUFBSSxFQUFDLFFBQVE7Ozs7O29CQUFTOzs7Ozs7WUFDMUIsQ0FDVjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcmVjZWl0YV8zL21vdmllcy5qcz81YjRjIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW92aWVzKHtkYXRhfSl7XG4gICAgaWYoIWRhdGEpe1xuICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIGNhcnJlZ2FuZG8uLi5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8UXVlcnkvPlxuICAgICAgICAgICAgPGRpdj5cblxuICAgICAgICAgICAge2RhdGEuU2VhcmNoLm1hcCggKG0pID0+IDxkaXYga2V5PXttLmltZGJJRH0gPnttLlRpdGxlfSAtLS0ge20uWWVhcn08L2Rpdj4gICl9ICAgICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxuXG59XG5cbiBleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpe1xuICAgIGNvbnN0IHtwZXNxdWlzYX0gPSBjb250ZXh0LnF1ZXJ5XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1kYzQxN2UyNCZzPSR7cGVzcXVpc2F9YClcbiAgICBjb25zb2xlLmxvZyhgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PWRjNDE3ZTI0JnM9JHtwZXNxdWlzYX1gKVxuICBcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuICBcbiAgICByZXR1cm4ge1xuICBcbiAgICAgICAgcHJvcHM6IHtcbiAgXG4gICAgICAgICAgICBkYXRhXG4gIFxuICAgICAgICB9XG4gIFxuICAgIH1cbiAgXG4gIH1cblxuZXhwb3J0IGZ1bmN0aW9uIFF1ZXJ5KCl7XG4gICAgcmV0dXJuKFxuICAgICAgICA8Zm9ybSBtZXRob2Q9XCJnZXRcIj5cbiAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicGVzcXVpc2FcIj5cbiAgICAgICAgICAgIDwvaW5wdXQ+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiPjwvaW5wdXQ+XG4gICAgICAgIDwvZm9ybT5cbiAgICApXG59Il0sIm5hbWVzIjpbIk1vdmllcyIsImRhdGEiLCJkaXYiLCJRdWVyeSIsIlNlYXJjaCIsIm1hcCIsIm0iLCJUaXRsZSIsIlllYXIiLCJpbWRiSUQiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJjb250ZXh0IiwicGVzcXVpc2EiLCJxdWVyeSIsInJlcyIsImZldGNoIiwiY29uc29sZSIsImxvZyIsImpzb24iLCJwcm9wcyIsImZvcm0iLCJtZXRob2QiLCJpbnB1dCIsIm5hbWUiLCJ0eXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/receita_3/movies.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/receita_3/movies.js"));
module.exports = __webpack_exports__;

})();