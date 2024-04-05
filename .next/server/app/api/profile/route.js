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
exports.id = "app/api/profile/route";
exports.ids = ["app/api/profile/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=C%3A%5CUsers%5CKIIT%5CDesktop%5CNextp%5Cfood_del%5Cfood_delivery%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKIIT%5CDesktop%5CNextp%5Cfood_del%5Cfood_delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=C%3A%5CUsers%5CKIIT%5CDesktop%5CNextp%5Cfood_del%5Cfood_delivery%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKIIT%5CDesktop%5CNextp%5Cfood_del%5Cfood_delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_KIIT_Desktop_Nextp_food_del_food_delivery_src_app_api_profile_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/profile/route.js */ \"(rsc)/./src/app/api/profile/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/profile/route\",\n        pathname: \"/api/profile\",\n        filename: \"route\",\n        bundlePath: \"app/api/profile/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\KIIT\\\\Desktop\\\\Nextp\\\\food_del\\\\food_delivery\\\\src\\\\app\\\\api\\\\profile\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_KIIT_Desktop_Nextp_food_del_food_delivery_src_app_api_profile_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/profile/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZwcm9maWxlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZwcm9maWxlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcHJvZmlsZSUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNLSUlUJTVDRGVza3RvcCU1Q05leHRwJTVDZm9vZF9kZWwlNUNmb29kX2RlbGl2ZXJ5JTVDc3JjJTVDYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj1DJTNBJTVDVXNlcnMlNUNLSUlUJTVDRGVza3RvcCU1Q05leHRwJTVDZm9vZF9kZWwlNUNmb29kX2RlbGl2ZXJ5JmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PSZwcmVmZXJyZWRSZWdpb249Jm1pZGRsZXdhcmVDb25maWc9ZTMwJTNEISIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzBDO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdUdBQXVHO0FBQy9HO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDNko7O0FBRTdKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZF9kZWxpdmVyeS8/N2YxZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxLSUlUXFxcXERlc2t0b3BcXFxcTmV4dHBcXFxcZm9vZF9kZWxcXFxcZm9vZF9kZWxpdmVyeVxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxwcm9maWxlXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9wcm9maWxlL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcHJvZmlsZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvcHJvZmlsZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXEtJSVRcXFxcRGVza3RvcFxcXFxOZXh0cFxcXFxmb29kX2RlbFxcXFxmb29kX2RlbGl2ZXJ5XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXHByb2ZpbGVcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvcHJvZmlsZS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBoZWFkZXJIb29rcywgc3RhdGljR2VuZXJhdGlvbkJhaWxvdXQsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=C%3A%5CUsers%5CKIIT%5CDesktop%5CNextp%5Cfood_del%5Cfood_delivery%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKIIT%5CDesktop%5CNextp%5Cfood_del%5Cfood_delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   isAdmin: () => (/* binding */ isAdmin)\n/* harmony export */ });\n/* harmony import */ var _libs_mongoConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/mongoConnect */ \"(rsc)/./src/libs/mongoConnect.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/User */ \"(rsc)/./src/models/User.js\");\n/* harmony import */ var _models_UserInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/UserInfo */ \"(rsc)/./src/models/UserInfo.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n\n\n\n\n\n\n\n\n\nconst authOptions = {\n    secret: \"asdflakisdflkjasdlkfias\",\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_8__.MongoDBAdapter)(_libs_mongoConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n            clientId: \"436111477292-objbbnon4mnl5581rl4vjih17r5q26os.apps.googleusercontent.com\",\n            clientSecret: \"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\"\n        }),\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({\n            name: \"Credentials\",\n            id: \"credentials\",\n            credentials: {\n                username: {\n                    label: \"Email\",\n                    type: \"email\",\n                    placeholder: \"test@example.com\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                const email = credentials?.email;\n                const password = credentials?.password;\n                mongoose__WEBPACK_IMPORTED_MODULE_2__.connect(\"mongodb+srv://subham:KfR0jVvk9bwPE8vY@cluster0.vznbg6c.mongodb.net/food-ordering\");\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_3__.User.findOne({\n                    email\n                });\n                const passwordOk = user && bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compareSync(password, user.password);\n                if (passwordOk) {\n                    return user;\n                }\n                return null;\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60 // 30 days\n    }\n};\nasync function isAdmin() {\n    const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_5__.getServerSession)(authOptions);\n    const userEmail = session?.user?.email;\n    if (!userEmail) {\n        return false;\n    }\n    const userInfo = await _models_UserInfo__WEBPACK_IMPORTED_MODULE_4__.UserInfo.findOne({\n        email: userEmail\n    });\n    if (!userInfo) {\n        return false;\n    }\n    return userInfo.admin;\n}\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_5___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUNuQjtBQUNTO0FBQ087QUFDVTtBQUNEO0FBQ2E7QUFDVjtBQUNEO0FBRWhELE1BQU1VLGNBQWM7SUFDekJDLFFBQVE7SUFDUkMsU0FBU0gscUVBQWNBLENBQUNULDBEQUFhQTtJQUNyQ2EsV0FBVztRQUNUTCxzRUFBY0EsQ0FBQztZQUNiTSxVQUFVO1lBQ1ZDLGNBQWM7UUFDaEI7UUFDQVIsMkVBQW1CQSxDQUFDO1lBQ2xCUyxNQUFNO1lBQ05DLElBQUk7WUFDSkMsYUFBYTtnQkFDWEMsVUFBVTtvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtvQkFBU0MsYUFBYTtnQkFBbUI7Z0JBQzNFQyxVQUFVO29CQUFFSCxPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBRUEsTUFBTUcsV0FBVU4sV0FBVyxFQUFFTyxHQUFHO2dCQUM5QixNQUFNQyxRQUFRUixhQUFhUTtnQkFDM0IsTUFBTUgsV0FBV0wsYUFBYUs7Z0JBRTlCckIsNkNBQWdCLENBQUM7Z0JBQ2pCLE1BQU0wQixPQUFPLE1BQU16Qiw4Q0FBSUEsQ0FBQzBCLE9BQU8sQ0FBQztvQkFBQ0g7Z0JBQUs7Z0JBQ3RDLE1BQU1JLGFBQWFGLFFBQVEzQix5REFBa0IsQ0FBQ3NCLFVBQVVLLEtBQUtMLFFBQVE7Z0JBRXJFLElBQUdPLFlBQVc7b0JBQ1osT0FBT0Y7Z0JBQ1Q7Z0JBQ0EsT0FBTztZQUdUO1FBQ0Y7S0FFRDtJQUNESSxTQUFTO1FBQ1BDLFVBQVU7UUFDVkMsUUFBUSxLQUFLLEtBQUssS0FBSyxHQUFHLFVBQVU7SUFDdEM7QUFDRixFQUFFO0FBS0ssZUFBZUM7SUFHcEIsTUFBTUgsVUFBVSxNQUFNMUIsMkRBQWdCQSxDQUFDSTtJQUN2QyxNQUFNMEIsWUFBWUosU0FBU0osTUFBTUY7SUFDakMsSUFBSSxDQUFDVSxXQUFXO1FBQ2QsT0FBTztJQUNUO0lBQ0EsTUFBTUMsV0FBVyxNQUFNakMsc0RBQVFBLENBQUN5QixPQUFPLENBQUM7UUFBRUgsT0FBT1U7SUFBVTtJQUMzRCxJQUFJLENBQUNDLFVBQVU7UUFDYixPQUFPO0lBQ1Q7SUFDQSxPQUFPQSxTQUFTQyxLQUFLO0FBRXZCO0FBSUEsTUFBTUMsVUFBVWxDLGdEQUFRQSxDQUFDSztBQUVpQiIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2RfZGVsaXZlcnkvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanM/MjMyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiQC9saWJzL21vbmdvQ29ubmVjdFwiXHJcbmltcG9ydCBiY3J5cHQgZnJvbSBcImJjcnlwdFwiO1xyXG5pbXBvcnQgKiBhcyBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHtVc2VyfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvVXNlcidcclxuaW1wb3J0IHsgVXNlckluZm8gfSBmcm9tICcuLi8uLi8uLi8uLi9tb2RlbHMvVXNlckluZm8nXHJcbmltcG9ydCBOZXh0QXV0aCwge2dldFNlcnZlclNlc3Npb259IGZyb20gXCJuZXh0LWF1dGhcIjtcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2dvb2dsZVwiO1xyXG5pbXBvcnQgeyBNb25nb0RCQWRhcHRlciB9IGZyb20gXCJAYXV0aC9tb25nb2RiLWFkYXB0ZXJcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoT3B0aW9ucyA9IHtcclxuICBzZWNyZXQ6IFwiYXNkZmxha2lzZGZsa2phc2Rsa2ZpYXNcIixcclxuICBhZGFwdGVyOiBNb25nb0RCQWRhcHRlcihjbGllbnRQcm9taXNlKSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIEdvb2dsZVByb3ZpZGVyKHtcclxuICAgICAgY2xpZW50SWQ6IFwiNDM2MTExNDc3MjkyLW9iamJibm9uNG1ubDU1ODFybDR2amloMTdyNXEyNm9zLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tXCIsXHJcbiAgICAgIGNsaWVudFNlY3JldDogXCJHT0NTUFgtSWQtQ3JYX1RRZWo5VGtJLUhuSmpPUUV2UmQ3dFwiLFxyXG4gICAgfSksXHJcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHsgICAgICAgICAgXHJcbiAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcclxuICAgICAgaWQ6ICdjcmVkZW50aWFscycsICAgICAgICAgIFxyXG4gICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgIHVzZXJuYW1lOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwiZW1haWxcIiwgcGxhY2Vob2xkZXI6IFwidGVzdEBleGFtcGxlLmNvbVwiIH0sXHJcbiAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIFxyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xyXG4gICAgICAgIGNvbnN0IGVtYWlsID0gY3JlZGVudGlhbHM/LmVtYWlsO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gY3JlZGVudGlhbHM/LnBhc3N3b3JkO1xyXG5cclxuICAgICAgICBtb25nb29zZS5jb25uZWN0KFwibW9uZ29kYitzcnY6Ly9zdWJoYW06S2ZSMGpWdms5YndQRTh2WUBjbHVzdGVyMC52em5iZzZjLm1vbmdvZGIubmV0L2Zvb2Qtb3JkZXJpbmdcIik7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7ZW1haWx9KTsgICAgICAgICAgICBcclxuICAgICAgICBjb25zdCBwYXNzd29yZE9rID0gdXNlciAmJiBiY3J5cHQuY29tcGFyZVN5bmMocGFzc3dvcmQsIHVzZXIucGFzc3dvcmQpO1xyXG5cclxuICAgICAgICBpZihwYXNzd29yZE9rKXtcclxuICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICB9ICBcclxuICAgIH0pXHJcbiAgICBcclxuICBdLFxyXG4gIHNlc3Npb246IHtcclxuICAgIHN0cmF0ZWd5OiBcImp3dFwiLFxyXG4gICAgbWF4QWdlOiAzMCAqIDI0ICogNjAgKiA2MCAvLyAzMCBkYXlzXHJcbiAgfSwgICBcclxufTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpc0FkbWluKCkge1xyXG5cclxuICBcclxuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2VydmVyU2Vzc2lvbihhdXRoT3B0aW9ucyk7XHJcbiAgY29uc3QgdXNlckVtYWlsID0gc2Vzc2lvbj8udXNlcj8uZW1haWw7XHJcbiAgaWYgKCF1c2VyRW1haWwpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbiAgY29uc3QgdXNlckluZm8gPSBhd2FpdCBVc2VySW5mby5maW5kT25lKHsgZW1haWw6IHVzZXJFbWFpbCB9KTtcclxuICBpZiAoIXVzZXJJbmZvKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHJldHVybiB1c2VySW5mby5hZG1pbjtcclxuICBcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xyXG5cclxuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9Il0sIm5hbWVzIjpbImNsaWVudFByb21pc2UiLCJiY3J5cHQiLCJtb25nb29zZSIsIlVzZXIiLCJVc2VySW5mbyIsIk5leHRBdXRoIiwiZ2V0U2VydmVyU2Vzc2lvbiIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJHb29nbGVQcm92aWRlciIsIk1vbmdvREJBZGFwdGVyIiwiYXV0aE9wdGlvbnMiLCJzZWNyZXQiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJjbGllbnRTZWNyZXQiLCJuYW1lIiwiaWQiLCJjcmVkZW50aWFscyIsInVzZXJuYW1lIiwibGFiZWwiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJwYXNzd29yZCIsImF1dGhvcml6ZSIsInJlcSIsImVtYWlsIiwiY29ubmVjdCIsInVzZXIiLCJmaW5kT25lIiwicGFzc3dvcmRPayIsImNvbXBhcmVTeW5jIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwibWF4QWdlIiwiaXNBZG1pbiIsInVzZXJFbWFpbCIsInVzZXJJbmZvIiwiYWRtaW4iLCJoYW5kbGVyIiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/app/api/profile/route.js":
/*!**************************************!*\
  !*** ./src/app/api/profile/route.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   PUT: () => (/* binding */ PUT)\n/* harmony export */ });\n/* harmony import */ var _auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../auth/[...nextauth]/route */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/User */ \"(rsc)/./src/models/User.js\");\n/* harmony import */ var _models_UserInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/UserInfo */ \"(rsc)/./src/models/UserInfo.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nasync function PUT(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_3___default().connect(\"mongodb+srv://subham:KfR0jVvk9bwPE8vY@cluster0.vznbg6c.mongodb.net/food-ordering\");\n    const data = await req.json();\n    const { _id, name, image, ...otherUserInfo } = data;\n    let filter = {};\n    if (_id) {\n        filter = {\n            _id\n        };\n    } else {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_4__.getServerSession)(_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n        const email = session.user.email;\n        filter = {\n            email\n        };\n    }\n    const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__.User.findOne(filter);\n    await _models_User__WEBPACK_IMPORTED_MODULE_1__.User.updateOne(filter, {\n        name,\n        image\n    });\n    await _models_UserInfo__WEBPACK_IMPORTED_MODULE_2__.UserInfo.findOneAndUpdate({\n        email: user.email\n    }, otherUserInfo, {\n        upsert: true\n    });\n    return Response.json(true);\n}\nasync function GET(req) {\n    mongoose__WEBPACK_IMPORTED_MODULE_3___default().connect(\"mongodb+srv://subham:KfR0jVvk9bwPE8vY@cluster0.vznbg6c.mongodb.net/food-ordering\");\n    const url = new URL(req.url);\n    const _id = url.searchParams.get(\"_id\");\n    let filterUser = {};\n    if (_id) {\n        filterUser = {\n            _id\n        };\n    } else {\n        const session = await (0,next_auth__WEBPACK_IMPORTED_MODULE_4__.getServerSession)(_auth_nextauth_route__WEBPACK_IMPORTED_MODULE_0__.authOptions);\n        const email = session?.user?.email;\n        if (!email) {\n            return Response.json({});\n        }\n        filterUser = {\n            email\n        };\n    }\n    const user = await _models_User__WEBPACK_IMPORTED_MODULE_1__.User.findOne(filterUser).lean();\n    const userInfo = await _models_UserInfo__WEBPACK_IMPORTED_MODULE_2__.UserInfo.findOne({\n        email: user.email\n    }).lean();\n    return Response.json({\n        ...user,\n        ...userInfo\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wcm9maWxlL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUEwRDtBQUNmO0FBQ1E7QUFDbkI7QUFDVztBQUVwQyxlQUFlSyxJQUFJQyxHQUFHO0lBQzNCSCx1REFBZ0IsQ0FBQztJQUNqQixNQUFNSyxPQUFPLE1BQU1GLElBQUlHLElBQUk7SUFDM0IsTUFBTSxFQUFDQyxHQUFHLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUdDLGVBQWMsR0FBR0w7SUFFN0MsSUFBSU0sU0FBUyxDQUFDO0lBQ2QsSUFBSUosS0FBSztRQUNQSSxTQUFTO1lBQUNKO1FBQUc7SUFDZixPQUFPO1FBQ0wsTUFBTUssVUFBVSxNQUFNWCwyREFBZ0JBLENBQUNKLDZEQUFXQTtRQUNsRCxNQUFNZ0IsUUFBUUQsUUFBUUUsSUFBSSxDQUFDRCxLQUFLO1FBQ2hDRixTQUFTO1lBQUNFO1FBQUs7SUFDakI7SUFFQSxNQUFNQyxPQUFPLE1BQU1oQiw4Q0FBSUEsQ0FBQ2lCLE9BQU8sQ0FBQ0o7SUFDaEMsTUFBTWIsOENBQUlBLENBQUNrQixTQUFTLENBQUNMLFFBQVE7UUFBQ0g7UUFBTUM7SUFBSztJQUN6QyxNQUFNVixzREFBUUEsQ0FBQ2tCLGdCQUFnQixDQUFDO1FBQUNKLE9BQU1DLEtBQUtELEtBQUs7SUFBQSxHQUFHSCxlQUFlO1FBQUNRLFFBQU87SUFBSTtJQUUvRSxPQUFPQyxTQUFTYixJQUFJLENBQUM7QUFDdkI7QUFFTyxlQUFlYyxJQUFJakIsR0FBRztJQUMzQkgsdURBQWdCLENBQUM7SUFFakIsTUFBTXFCLE1BQU0sSUFBSUMsSUFBSW5CLElBQUlrQixHQUFHO0lBQzNCLE1BQU1kLE1BQU1jLElBQUlFLFlBQVksQ0FBQ0MsR0FBRyxDQUFDO0lBRWpDLElBQUlDLGFBQWEsQ0FBQztJQUNsQixJQUFJbEIsS0FBSztRQUNQa0IsYUFBYTtZQUFDbEI7UUFBRztJQUNuQixPQUFPO1FBQ0wsTUFBTUssVUFBVSxNQUFNWCwyREFBZ0JBLENBQUNKLDZEQUFXQTtRQUNsRCxNQUFNZ0IsUUFBUUQsU0FBU0UsTUFBTUQ7UUFDN0IsSUFBSSxDQUFDQSxPQUFPO1lBQ1YsT0FBT00sU0FBU2IsSUFBSSxDQUFDLENBQUM7UUFDeEI7UUFDQW1CLGFBQWE7WUFBQ1o7UUFBSztJQUNyQjtJQUVBLE1BQU1DLE9BQU8sTUFBTWhCLDhDQUFJQSxDQUFDaUIsT0FBTyxDQUFDVSxZQUFZQyxJQUFJO0lBQ2hELE1BQU1DLFdBQVcsTUFBTTVCLHNEQUFRQSxDQUFDZ0IsT0FBTyxDQUFDO1FBQUNGLE9BQU1DLEtBQUtELEtBQUs7SUFBQSxHQUFHYSxJQUFJO0lBRWhFLE9BQU9QLFNBQVNiLElBQUksQ0FBQztRQUFDLEdBQUdRLElBQUk7UUFBRSxHQUFHYSxRQUFRO0lBQUE7QUFFNUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb29kX2RlbGl2ZXJ5Ly4vc3JjL2FwcC9hcGkvcHJvZmlsZS9yb3V0ZS5qcz8xMzY5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGF1dGhPcHRpb25zIH0gZnJvbSBcIi4uL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vbW9kZWxzL1VzZXInXHJcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSBcIi4uLy4uLy4uL21vZGVscy9Vc2VySW5mb1wiXHJcbmltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuaW1wb3J0IHtnZXRTZXJ2ZXJTZXNzaW9ufSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUFVUKHJlcSkge1xyXG4gIG1vbmdvb3NlLmNvbm5lY3QoXCJtb25nb2RiK3NydjovL3N1YmhhbTpLZlIwalZ2azlid1BFOHZZQGNsdXN0ZXIwLnZ6bmJnNmMubW9uZ29kYi5uZXQvZm9vZC1vcmRlcmluZ1wiKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVxLmpzb24oKTtcclxuICBjb25zdCB7X2lkLCBuYW1lLCBpbWFnZSwgLi4ub3RoZXJVc2VySW5mb30gPSBkYXRhO1xyXG5cclxuICBsZXQgZmlsdGVyID0ge307XHJcbiAgaWYgKF9pZCkge1xyXG4gICAgZmlsdGVyID0ge19pZH07XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcclxuICAgIGNvbnN0IGVtYWlsID0gc2Vzc2lvbi51c2VyLmVtYWlsO1xyXG4gICAgZmlsdGVyID0ge2VtYWlsfTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoZmlsdGVyKTtcclxuICBhd2FpdCBVc2VyLnVwZGF0ZU9uZShmaWx0ZXIsIHtuYW1lLCBpbWFnZX0pO1xyXG4gIGF3YWl0IFVzZXJJbmZvLmZpbmRPbmVBbmRVcGRhdGUoe2VtYWlsOnVzZXIuZW1haWx9LCBvdGhlclVzZXJJbmZvLCB7dXBzZXJ0OnRydWV9KTtcclxuXHJcbiAgcmV0dXJuIFJlc3BvbnNlLmpzb24odHJ1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxKSB7XHJcbiAgbW9uZ29vc2UuY29ubmVjdChcIm1vbmdvZGIrc3J2Oi8vc3ViaGFtOktmUjBqVnZrOWJ3UEU4dllAY2x1c3RlcjAudnpuYmc2Yy5tb25nb2RiLm5ldC9mb29kLW9yZGVyaW5nXCIpO1xyXG5cclxuICBjb25zdCB1cmwgPSBuZXcgVVJMKHJlcS51cmwpO1xyXG4gIGNvbnN0IF9pZCA9IHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdfaWQnKTtcclxuXHJcbiAgbGV0IGZpbHRlclVzZXIgPSB7fTtcclxuICBpZiAoX2lkKSB7XHJcbiAgICBmaWx0ZXJVc2VyID0ge19pZH07XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhPcHRpb25zKTtcclxuICAgIGNvbnN0IGVtYWlsID0gc2Vzc2lvbj8udXNlcj8uZW1haWw7XHJcbiAgICBpZiAoIWVtYWlsKSB7XHJcbiAgICAgIHJldHVybiBSZXNwb25zZS5qc29uKHt9KTtcclxuICAgIH1cclxuICAgIGZpbHRlclVzZXIgPSB7ZW1haWx9O1xyXG4gIH1cclxuXHJcbiAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZShmaWx0ZXJVc2VyKS5sZWFuKCk7XHJcbiAgY29uc3QgdXNlckluZm8gPSBhd2FpdCBVc2VySW5mby5maW5kT25lKHtlbWFpbDp1c2VyLmVtYWlsfSkubGVhbigpO1xyXG5cclxuICByZXR1cm4gUmVzcG9uc2UuanNvbih7Li4udXNlciwgLi4udXNlckluZm99KTtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImF1dGhPcHRpb25zIiwiVXNlciIsIlVzZXJJbmZvIiwibW9uZ29vc2UiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiUFVUIiwicmVxIiwiY29ubmVjdCIsImRhdGEiLCJqc29uIiwiX2lkIiwibmFtZSIsImltYWdlIiwib3RoZXJVc2VySW5mbyIsImZpbHRlciIsInNlc3Npb24iLCJlbWFpbCIsInVzZXIiLCJmaW5kT25lIiwidXBkYXRlT25lIiwiZmluZE9uZUFuZFVwZGF0ZSIsInVwc2VydCIsIlJlc3BvbnNlIiwiR0VUIiwidXJsIiwiVVJMIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiZmlsdGVyVXNlciIsImxlYW4iLCJ1c2VySW5mbyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/profile/route.js\n");

/***/ }),

/***/ "(rsc)/./src/libs/mongoConnect.js":
/*!**********************************!*\
  !*** ./src/libs/mongoConnect.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (false) {}\nconst uri = \"mongodb+srv://subham:KfR0jVvk9bwPE8vY@cluster0.vznbg6c.mongodb.net/food-ordering\";\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGlicy9tb25nb0Nvbm5lY3QuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXFDO0FBRXJDLElBQUksS0FBbUYsRUFBRSxFQUV4RjtBQUVELE1BQU1FLE1BQU07QUFDWixNQUFNQyxVQUFVLENBQUM7QUFFakIsSUFBSUM7QUFDSixJQUFJQztBQUdKLElBQUlDLElBQXNDLEVBQUU7SUFDMUMsK0RBQStEO0lBQy9ELDZFQUE2RTtJQUM3RSxJQUFJLENBQUNDLE9BQU9DLG1CQUFtQixFQUFFO1FBQy9CSixTQUFTLElBQUlKLGdEQUFXQSxDQUFDRSxLQUFLQztRQUM5QkksT0FBT0MsbUJBQW1CLEdBQUdKLE9BQU9LLE9BQU87SUFDN0M7SUFDQUosZ0JBQWdCRSxPQUFPQyxtQkFBbUI7QUFDNUMsT0FBTyxFQUlOO0FBRUQsaUVBQWlFO0FBQ2pFLDhEQUE4RDtBQUM5RCxpRUFBZUgsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2RfZGVsaXZlcnkvLi9zcmMvbGlicy9tb25nb0Nvbm5lY3QuanM/YzQwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCJcclxuXHJcbmlmICghXCJtb25nb2RiK3NydjovL3N1YmhhbTpLZlIwalZ2azlid1BFOHZZQGNsdXN0ZXIwLnZ6bmJnNmMubW9uZ29kYi5uZXQvZm9vZC1vcmRlcmluZ1wiKSB7XHJcbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkL01pc3NpbmcgZW52aXJvbm1lbnQgdmFyaWFibGU6IFwiTU9OR09EQl9VUklcIicpXHJcbn1cclxuXHJcbmNvbnN0IHVyaSA9IFwibW9uZ29kYitzcnY6Ly9zdWJoYW06S2ZSMGpWdms5YndQRTh2WUBjbHVzdGVyMC52em5iZzZjLm1vbmdvZGIubmV0L2Zvb2Qtb3JkZXJpbmdcIlxyXG5jb25zdCBvcHRpb25zID0ge31cclxuXHJcbmxldCBjbGllbnQ7XHJcbmxldCBjbGllbnRQcm9taXNlO1xyXG5cclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJkZXZlbG9wbWVudFwiKSB7XHJcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXHJcbiAgLy8gaXMgcHJlc2VydmVkIGFjcm9zcyBtb2R1bGUgcmVsb2FkcyBjYXVzZWQgYnkgSE1SIChIb3QgTW9kdWxlIFJlcGxhY2VtZW50KS5cclxuICBpZiAoIWdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlKSB7XHJcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxyXG4gICAgZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UgPSBjbGllbnQuY29ubmVjdCgpXHJcbiAgfVxyXG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZVxyXG59IGVsc2Uge1xyXG4gIC8vIEluIHByb2R1Y3Rpb24gbW9kZSwgaXQncyBiZXN0IHRvIG5vdCB1c2UgYSBnbG9iYWwgdmFyaWFibGUuXHJcbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcclxuICBjbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxyXG59XHJcblxyXG4vLyBFeHBvcnQgYSBtb2R1bGUtc2NvcGVkIE1vbmdvQ2xpZW50IHByb21pc2UuIEJ5IGRvaW5nIHRoaXMgaW4gYVxyXG4vLyBzZXBhcmF0ZSBtb2R1bGUsIHRoZSBjbGllbnQgY2FuIGJlIHNoYXJlZCBhY3Jvc3MgZnVuY3Rpb25zLlxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwiRXJyb3IiLCJ1cmkiLCJvcHRpb25zIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsInByb2Nlc3MiLCJnbG9iYWwiLCJfbW9uZ29DbGllbnRQcm9taXNlIiwiY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/libs/mongoConnect.js\n");

/***/ }),

/***/ "(rsc)/./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   User: () => (/* binding */ User)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    name: {\n        type: String\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String\n    },\n    image: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\nconst User = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.User || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"User\", UserSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWlEO0FBRWpELE1BQU1HLGFBQWEsSUFBSUQsNENBQU1BLENBQUM7SUFDNUJFLE1BQU07UUFBRUMsTUFBTUM7SUFBTztJQUNyQkMsT0FBTztRQUFFRixNQUFNQztRQUFRRSxVQUFVO1FBQU1DLFFBQVE7SUFBSztJQUNwREMsVUFBVTtRQUFFTCxNQUFNQztJQUFPO0lBQ3pCSyxPQUFPO1FBQUVOLE1BQU1DO0lBQU87QUFDeEIsR0FBRztJQUFFTSxZQUFZO0FBQUs7QUFFZixNQUFNQyxPQUFPWiw0Q0FBTUEsRUFBRVksUUFBUWIsK0NBQUtBLENBQUMsUUFBUUcsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL2Zvb2RfZGVsaXZlcnkvLi9zcmMvbW9kZWxzL1VzZXIuanM/N2QwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb2RlbCwgbW9kZWxzLCBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKHtcclxuICBuYW1lOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxyXG4gIHBhc3N3b3JkOiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gIGltYWdlOiB7IHR5cGU6IFN0cmluZyB9LFxyXG59LCB7IHRpbWVzdGFtcHM6IHRydWUgfSk7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlciA9IG1vZGVscz8uVXNlciB8fCBtb2RlbCgnVXNlcicsIFVzZXJTY2hlbWEpOyJdLCJuYW1lcyI6WyJtb2RlbCIsIm1vZGVscyIsIlNjaGVtYSIsIlVzZXJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsImVtYWlsIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJwYXNzd29yZCIsImltYWdlIiwidGltZXN0YW1wcyIsIlVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.js\n");

/***/ }),

/***/ "(rsc)/./src/models/UserInfo.js":
/*!********************************!*\
  !*** ./src/models/UserInfo.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserInfo: () => (/* binding */ UserInfo)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserInfoSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    email: {\n        type: String,\n        required: true\n    },\n    streetAddress: {\n        type: String\n    },\n    postalCode: {\n        type: String\n    },\n    city: {\n        type: String\n    },\n    country: {\n        type: String\n    },\n    phone: {\n        type: String\n    },\n    admin: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n});\nconst UserInfo = mongoose__WEBPACK_IMPORTED_MODULE_0__.models?.UserInfo || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)(\"UserInfo\", UserInfoSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXJJbmZvLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFpRDtBQUVqRCxNQUFNRyxpQkFBaUIsSUFBSUQsNENBQU1BLENBQUM7SUFDaENFLE9BQU87UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3RDQyxlQUFlO1FBQUVILE1BQU1DO0lBQU87SUFDOUJHLFlBQVk7UUFBRUosTUFBTUM7SUFBTztJQUMzQkksTUFBTTtRQUFFTCxNQUFNQztJQUFPO0lBQ3JCSyxTQUFTO1FBQUVOLE1BQU1DO0lBQU87SUFDeEJNLE9BQU87UUFBRVAsTUFBTUM7SUFBTztJQUN0Qk8sT0FBTztRQUFFUixNQUFNUztRQUFTQyxTQUFTO0lBQU07QUFDekMsR0FBRztJQUFFQyxZQUFZO0FBQUs7QUFFZixNQUFNQyxXQUFXaEIsNENBQU1BLEVBQUVnQixZQUFZakIsK0NBQUtBLENBQUMsWUFBWUcsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZm9vZF9kZWxpdmVyeS8uL3NyYy9tb2RlbHMvVXNlckluZm8uanM/ZGUyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtb2RlbCwgbW9kZWxzLCBTY2hlbWEgfSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IFVzZXJJbmZvU2NoZW1hID0gbmV3IFNjaGVtYSh7XHJcbiAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIHN0cmVldEFkZHJlc3M6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgcG9zdGFsQ29kZTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICBjaXR5OiB7IHR5cGU6IFN0cmluZyB9LFxyXG4gIGNvdW50cnk6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgcGhvbmU6IHsgdHlwZTogU3RyaW5nIH0sXHJcbiAgYWRtaW46IHsgdHlwZTogQm9vbGVhbiwgZGVmYXVsdDogZmFsc2UgfSxcclxufSwgeyB0aW1lc3RhbXBzOiB0cnVlIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJJbmZvID0gbW9kZWxzPy5Vc2VySW5mbyB8fCBtb2RlbCgnVXNlckluZm8nLCBVc2VySW5mb1NjaGVtYSk7Il0sIm5hbWVzIjpbIm1vZGVsIiwibW9kZWxzIiwiU2NoZW1hIiwiVXNlckluZm9TY2hlbWEiLCJlbWFpbCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsInN0cmVldEFkZHJlc3MiLCJwb3N0YWxDb2RlIiwiY2l0eSIsImNvdW50cnkiLCJwaG9uZSIsImFkbWluIiwiQm9vbGVhbiIsImRlZmF1bHQiLCJ0aW1lc3RhbXBzIiwiVXNlckluZm8iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/UserInfo.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/@auth","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fprofile%2Froute&page=%2Fapi%2Fprofile%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprofile%2Froute.js&appDir=C%3A%5CUsers%5CKIIT%5CDesktop%5CNextp%5Cfood_del%5Cfood_delivery%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKIIT%5CDesktop%5CNextp%5Cfood_del%5Cfood_delivery&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();