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
exports.id = "pages/receita_5/exercicio1/movies";
exports.ids = ["pages/receita_5/exercicio1/movies"];
exports.modules = {

/***/ "./pages/receita_5/exercicio1/movies.js":
/*!**********************************************!*\
  !*** ./pages/receita_5/exercicio1/movies.js ***!
  \**********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TheLink\": () => (/* binding */ TheLink),\n/* harmony export */   \"TheMovies\": () => (/* binding */ TheMovies),\n/* harmony export */   \"default\": () => (/* binding */ Movies3)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"swr\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swr__WEBPACK_IMPORTED_MODULE_1__]);\nswr__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction Movies3() {\n    const { 0: url , 1: setUrl  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(url, theFetcher);\n    const onClickHandler = (e)=>{\n        const link = e.target.id;\n        e.preventDefault();\n        if (url === \"\") setUrl(link);\n        else setUrl(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheLink, {\n                url: url,\n                link: \"https://www.omdbapi.com/?apikey=a85a78d&s=bagdad\",\n                handler: onClickHandler\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_5\\\\exercicio1\\\\movies.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheLink, {\n                url: url,\n                link: \"https://www.omdbapi.com/?apikey=a85a78d&s=2012\",\n                handler: onClickHandler\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_5\\\\exercicio1\\\\movies.js\",\n                lineNumber: 23,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheMovies, {\n                data: error ? {\n                    error: \"Erro na pesquisa\"\n                } : data ? data : {\n                    Search: \"\"\n                },\n                show: url !== \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_5\\\\exercicio1\\\\movies.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_5\\\\exercicio1\\\\movies.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, this);\n};\nasync function theFetcher(url) {\n    if (url === null || url === \"\") return {\n        Search: \"\"\n    };\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nfunction TheMovies({ data , show  }) {\n    if (!show) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_5\\\\exercicio1\\\\movies.js\",\n        lineNumber: 42,\n        columnNumber: 24\n    }, this);\n    if (data.error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_5\\\\exercicio1\\\\movies.js\",\n        lineNumber: 44,\n        columnNumber: 29\n    }, this);\n    if (data.Search === \"\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_5\\\\exercicio1\\\\movies.js\",\n        lineNumber: 46,\n        columnNumber: 38\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: data.Search.map((m, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    m.Title,\n                    \" --- \",\n                    m.Year\n                ]\n            }, i, true, {\n                fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_5\\\\exercicio1\\\\movies.js\",\n                lineNumber: 51,\n                columnNumber: 42\n            }, this)\n        )\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_5\\\\exercicio1\\\\movies.js\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}\nfunction TheLink({ url , handler , link  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n            href: \"/receitas/receita5/exercicio1/movies.js\",\n            id: link,\n            onClick: handler,\n            children: [\n                \" \",\n                url === \"\" ? \"Mostrar\" : \"Ocultar\",\n                \" \"\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_5\\\\exercicio1\\\\movies.js\",\n            lineNumber: 65,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\guilh\\\\Downloads\\\\next0\\\\pages\\\\receita_5\\\\exercicio1\\\\movies.js\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZWNlaXRhXzUvZXhlcmNpY2lvMS9tb3ZpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF3QjtBQUNNO0FBRWYsU0FBU0UsT0FBTyxHQUFFO0lBRTdCLE1BQU0sRUFMVixHQUtXQyxHQUFHLEdBTGQsR0FLZ0JDLE1BQU0sTUFBSUgsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFDbEMsTUFBTSxFQUFDSSxJQUFJLEdBQUVDLEtBQUssR0FBQyxHQUFHTiwrQ0FBTSxDQUFDRyxHQUFHLEVBQUVJLFVBQVUsQ0FBQztJQUU3QyxNQUFNQyxjQUFjLEdBQUcsQ0FBQ0MsQ0FBQyxHQUFLO1FBQzFCLE1BQU1DLElBQUksR0FBR0QsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLEVBQUU7UUFFeEJILENBQUMsQ0FBQ0ksY0FBYyxFQUFFO1FBQ2xCLElBQUlWLEdBQUcsS0FBSyxFQUFFLEVBQUVDLE1BQU0sQ0FBQ00sSUFBSSxDQUFDO2FBRXZCTixNQUFNLENBQUMsRUFBRSxDQUFDO0tBRWxCO0lBRUQscUJBRUksOERBQUNVLEtBQUc7OzBCQUNBLDhEQUFDQyxPQUFPO2dCQUFDWixHQUFHLEVBQUVBLEdBQUc7Z0JBQUVPLElBQUksRUFBRSxrREFBa0Q7Z0JBQUVNLE9BQU8sRUFBRVIsY0FBYzs7Ozs7b0JBQUc7MEJBQ3ZHLDhEQUFDTyxPQUFPO2dCQUFDWixHQUFHLEVBQUVBLEdBQUc7Z0JBQUVPLElBQUksRUFBRSxnREFBZ0Q7Z0JBQUVNLE9BQU8sRUFBRVIsY0FBYzs7Ozs7b0JBQUk7MEJBQ3RHLDhEQUFDUyxTQUFTO2dCQUFDWixJQUFJLEVBQUdDLEtBQUssR0FBQztvQkFBQ0EsS0FBSyxFQUFDLGtCQUFrQjtpQkFBQyxHQUFFRCxJQUFJLEdBQUdBLElBQUksR0FBRTtvQkFBQ2EsTUFBTSxFQUFDLEVBQUU7aUJBQUM7Z0JBQUdDLElBQUksRUFBRWhCLEdBQUcsS0FBSyxFQUFFOzs7OztvQkFBRzs7Ozs7O1lBQ2hHLENBRVQ7Q0FFSjtBQUVELGVBQWVJLFVBQVUsQ0FBQ0osR0FBRyxFQUFFO0lBRTNCLElBQUlBLEdBQUcsS0FBSyxJQUFJLElBQUlBLEdBQUcsS0FBSyxFQUFFLEVBQUUsT0FBTztRQUFDZSxNQUFNLEVBQUMsRUFBRTtLQUFDO0lBQ2xELE1BQU1FLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUNsQixHQUFHLENBQUM7SUFDNUIsTUFBTW1CLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNFLElBQUksRUFBRTtJQUM3QixPQUFPQSxJQUFJLENBQUM7Q0FFZjtBQUVNLFNBQVNMLFNBQVMsQ0FBQyxFQUFDWixJQUFJLEdBQUNjLElBQUksR0FBQyxFQUFDO0lBRWxDLElBQUksQ0FBQ0EsSUFBSSxFQUFFLHFCQUFRLDhEQUFDTCxLQUFHOzs7O1lBQU8sQ0FBQztJQUUvQixJQUFJVCxJQUFJLENBQUNDLEtBQUssRUFBRSxxQkFBUSw4REFBQ1EsS0FBRztrQkFBQywyQkFBbUI7Ozs7O1lBQU0sQ0FBQztJQUV2RCxJQUFJVCxJQUFJLENBQUNhLE1BQU0sS0FBSyxFQUFFLEVBQUcscUJBQVEsOERBQUNKLEtBQUc7a0JBQUMsZUFBYTs7Ozs7WUFBTSxDQUFDO0lBRTFELHFCQUVJLDhEQUFDQSxLQUFHO2tCQUNFVCxJQUFJLENBQUNhLE1BQU0sQ0FBQ0ssR0FBRyxDQUFFLENBQUNDLENBQUMsRUFBRUMsQ0FBQyxpQkFBSyw4REFBQ1gsS0FBRzs7b0JBQVVVLENBQUMsQ0FBQ0UsS0FBSztvQkFBQyxPQUFLO29CQUFDRixDQUFDLENBQUNHLElBQUk7O2VBQXhCRixDQUFDOzs7O29CQUE4QjtRQUFBLENBQUc7Ozs7O1lBRXZFLENBRVQ7Q0FFSjtBQUVNLFNBQVNWLE9BQU8sQ0FBQyxFQUFDWixHQUFHLEdBQUVhLE9BQU8sR0FBRU4sSUFBSSxHQUFDLEVBQUM7SUFFekMscUJBRUksOERBQUNJLEtBQUc7a0JBRUEsNEVBQUNjLEdBQUM7WUFBQ0MsSUFBSSxFQUFDLHlDQUF5QztZQUFDakIsRUFBRSxFQUFFRixJQUFJO1lBQUVvQixPQUFPLEVBQUVkLE9BQU87O2dCQUFFLEdBQUM7Z0JBQUNiLEdBQUcsS0FBSyxFQUFFLEdBQUcsU0FBUyxHQUFHLFNBQVM7Z0JBQUMsR0FBQzs7Ozs7O2dCQUFJOzs7OztZQUV0SCxDQUVUO0NBRUoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWNlaXRhXzUvZXhlcmNpY2lvMS9tb3ZpZXMuanM/NzYyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMzKCl7XG5cbiAgICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoJycpXG4gICAgY29uc3Qge2RhdGEsIGVycm9yfSA9IHVzZVNXUih1cmwsIHRoZUZldGNoZXIpXG5cbiAgICBjb25zdCBvbkNsaWNrSGFuZGxlciA9IChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBlLnRhcmdldC5pZFxuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICBpZiAodXJsID09PSAnJykgc2V0VXJsKGxpbmspXG5cbiAgICAgICAgZWxzZSBzZXRVcmwoJycpXG5cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8VGhlTGluayB1cmw9e3VybH0gbGluaz17J2h0dHBzOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9YTg1YTc4ZCZzPWJhZ2RhZCd9IGhhbmRsZXI9e29uQ2xpY2tIYW5kbGVyfS8+XG4gICAgICAgICAgICA8VGhlTGluayB1cmw9e3VybH0gbGluaz17J2h0dHBzOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9YTg1YTc4ZCZzPTIwMTInfSBoYW5kbGVyPXtvbkNsaWNrSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxUaGVNb3ZpZXMgZGF0YT17IGVycm9yP3tlcnJvcjonRXJybyBuYSBwZXNxdWlzYSd9OiBkYXRhID8gZGF0YToge1NlYXJjaDonJ30gfSBzaG93PXt1cmwgIT09ICcnfS8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxuXG59XG5cbmFzeW5jIGZ1bmN0aW9uIHRoZUZldGNoZXIodXJsKSB7XG5cbiAgICBpZiAodXJsID09PSBudWxsIHx8IHVybCA9PT0gJycpIHJldHVybiB7U2VhcmNoOicnfVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgcmV0dXJuIGpzb247XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFRoZU1vdmllcyh7ZGF0YSxzaG93fSl7XG5cbiAgICBpZiAoIXNob3cpIHJldHVybiAoPGRpdj48L2Rpdj4pICAgIFxuXG4gICAgaWYgKGRhdGEuZXJyb3IpIHJldHVybiAoPGRpdj5mYWxoYSBuYSByZXF1aXNpw6fDo288L2Rpdj4pXG5cbiAgICBpZiAoZGF0YS5TZWFyY2ggPT09ICcnICkgcmV0dXJuICg8ZGl2PmNhcnJlZ2FuZG8uLi48L2Rpdj4pXG5cbiAgICByZXR1cm4gKFxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7IGRhdGEuU2VhcmNoLm1hcCggKG0sIGkpID0+IDxkaXYga2V5PXtpfT57bS5UaXRsZX0gLS0tIHttLlllYXJ9PC9kaXY+ICApIH0gICAgICAgICAgICBcblxuICAgICAgICA8L2Rpdj5cblxuICAgIClcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gVGhlTGluayh7dXJsLCBoYW5kbGVyLCBsaW5rfSl7ICAgIFxuXG4gICAgcmV0dXJuIChcblxuICAgICAgICA8ZGl2PlxuXG4gICAgICAgICAgICA8YSBocmVmPVwiL3JlY2VpdGFzL3JlY2VpdGE1L2V4ZXJjaWNpbzEvbW92aWVzLmpzXCIgaWQ9e2xpbmt9IG9uQ2xpY2s9e2hhbmRsZXJ9PiB7dXJsID09PSAnJyA/ICdNb3N0cmFyJyA6ICdPY3VsdGFyJ30gPC9hPlxuXG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxuXG59XG4iXSwibmFtZXMiOlsidXNlU1dSIiwidXNlU3RhdGUiLCJNb3ZpZXMzIiwidXJsIiwic2V0VXJsIiwiZGF0YSIsImVycm9yIiwidGhlRmV0Y2hlciIsIm9uQ2xpY2tIYW5kbGVyIiwiZSIsImxpbmsiLCJ0YXJnZXQiLCJpZCIsInByZXZlbnREZWZhdWx0IiwiZGl2IiwiVGhlTGluayIsImhhbmRsZXIiLCJUaGVNb3ZpZXMiLCJTZWFyY2giLCJzaG93IiwicmVzIiwiZmV0Y2giLCJqc29uIiwibWFwIiwibSIsImkiLCJUaXRsZSIsIlllYXIiLCJhIiwiaHJlZiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/receita_5/exercicio1/movies.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/receita_5/exercicio1/movies.js"));
module.exports = __webpack_exports__;

})();