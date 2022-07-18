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
exports.id = "pages/receita_4/movies2";
exports.ids = ["pages/receita_4/movies2"];
exports.modules = {

/***/ "./pages/receita_4/movies2.js":
/*!************************************!*\
  !*** ./pages/receita_4/movies2.js ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies2)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Movies2() {\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(`http://www.omdbapi.com/?apikey=dc417e24&s=bagdad`, fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_4\\\\movies2.js\",\n        lineNumber: 6,\n        columnNumber: 23\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_4\\\\movies2.js\",\n        lineNumber: 7,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    m.Title,\n                    \" --- \",\n                    m.Year\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_4\\\\movies2.js\",\n                lineNumber: 13,\n                columnNumber: 39\n            }, this)\n        )\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_4\\\\movies2.js\",\n        lineNumber: 11,\n        columnNumber: 9\n    }, this);\n};\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWNlaXRhXzQvbW92aWVzMi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF3QjtBQUVULFNBQVNDLE9BQU8sR0FBRTtJQUU3QixNQUFNLEVBQUNDLElBQUksR0FBRUMsS0FBSyxHQUFDLEdBQUdILCtDQUFNLENBQUMsQ0FBQyxnREFBZ0QsQ0FBQyxFQUFFSSxPQUFPLENBQUM7SUFDekYsSUFBSUQsS0FBSyxFQUFFLHFCQUFPLDhEQUFDRSxLQUFHO2tCQUFDLDhCQUFzQjs7Ozs7WUFBTTtJQUNuRCxJQUFJLENBQUNILElBQUksRUFBRSxxQkFBTyw4REFBQ0csS0FBRztrQkFBQyxlQUFhOzs7OztZQUFNO0lBRTFDLHFCQUVJLDhEQUFDQSxLQUFHO2tCQUVFSCxJQUFJLENBQUNJLE1BQU0sQ0FBQ0MsR0FBRyxDQUFFLENBQUNDLENBQUMsaUJBQUssOERBQUNILEtBQUc7O29CQUFFRyxDQUFDLENBQUNDLEtBQUs7b0JBQUMsT0FBSztvQkFBQ0QsQ0FBQyxDQUFDRSxJQUFJOzs7Ozs7b0JBQU87UUFBQSxDQUFHOzs7OztZQUU1RCxDQUVUO0NBRUo7QUFFRCxlQUFlTixPQUFPLENBQUNPLEdBQUcsRUFBRTtJQUV4QixNQUFNQyxHQUFHLEdBQUcsTUFBTUMsS0FBSyxDQUFDRixHQUFHLENBQUM7SUFFNUIsTUFBTUcsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0UsSUFBSSxFQUFFO0lBRTdCLE9BQU9BLElBQUk7Q0FFZCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3JlY2VpdGFfNC9tb3ZpZXMyLmpzPzEzNjciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllczIoKXtcblxuICAgIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IoYGh0dHA6Ly93d3cub21kYmFwaS5jb20vP2FwaWtleT1kYzQxN2UyNCZzPWJhZ2RhZGAsIGZldGNoZXIpICAgIFxuICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+ZmFsaGEgbmEgcmVxdWlzacOnw6NvLi4uPC9kaXY+XG4gICAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5jYXJyZWdhbmRvLi4uPC9kaXY+XG4gICAgXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICB7IGRhdGEuU2VhcmNoLm1hcCggKG0pID0+IDxkaXY+e20uVGl0bGV9IC0tLSB7bS5ZZWFyfTwvZGl2PiAgKSB9XG5cbiAgICAgICAgPC9kaXY+XG5cbiAgICApICAgIFxuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGZldGNoZXIodXJsKSB7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpXG5cbiAgICBjb25zdCBqc29uID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgcmV0dXJuIGpzb25cblxufVxuIl0sIm5hbWVzIjpbInVzZVNXUiIsIk1vdmllczIiLCJkYXRhIiwiZXJyb3IiLCJmZXRjaGVyIiwiZGl2IiwiU2VhcmNoIiwibWFwIiwibSIsIlRpdGxlIiwiWWVhciIsInVybCIsInJlcyIsImZldGNoIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/receita_4/movies2.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "swr":
/*!**********************!*\
  !*** external "swr" ***!
  \**********************/
/***/ ((module) => {

module.exports = import("swr");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/receita_4/movies2.js"));
module.exports = __webpack_exports__;

})();