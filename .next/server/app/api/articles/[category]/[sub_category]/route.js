"use strict";
(() => {
var exports = {};
exports.id = 633;
exports.ids = [633];
exports.modules = {

/***/ 8013:
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ 7783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 8530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 4426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 6797:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/articles/[category]/[sub_category]/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(5387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./src/utils/db/connection.js
var connection = __webpack_require__(7216);
;// CONCATENATED MODULE: ./src/app/api/articles/[category]/[sub_category]/route.js

async function GET(req, { params }) {
    try {
        const subCategory = await params.sub_category;
        const client = await (0,connection/* default */.Z)();
        const db = await client.db("headline_horrizon");
        const collection = await db.collection("articles");
        const articles = await collection.find({
            sub_category: subCategory
        }).toArray();
        const response = JSON.stringify(articles);
        return new Response(response, {
            status: 200,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization"
            }
        });
    } catch (e) {
        console.log(e);
        return new Response(JSON.stringify(e), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type, Authorization"
            }
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Farticles%2F%5Bcategory%5D%2F%5Bsub_category%5D%2Froute&name=app%2Fapi%2Farticles%2F%5Bcategory%5D%2F%5Bsub_category%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Farticles%2F%5Bcategory%5D%2F%5Bsub_category%5D%2Froute.js&appDir=C%3A%5CUsers%5Clukva%5CDesktop%5Cprojects%5CHeadline-Horizon%5Csrc%5Capp&appPaths=%2Fapi%2Farticles%2F%5Bcategory%5D%2F%5Bsub_category%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/articles/[category]/[sub_category]/route","pathname":"/api/articles/[category]/[sub_category]","filename":"route","bundlePath":"app/api/articles/[category]/[sub_category]/route"},"resolvedPagePath":"C:\\Users\\lukva\\Desktop\\projects\\Headline-Horizon\\src\\app\\api\\articles\\[category]\\[sub_category]\\route.js","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/articles/[category]/[sub_category]/route"

    

/***/ }),

/***/ 7216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8013);
/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);

const db_connection = async ()=>{
    try {
        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
        return client;
    } catch (err) {
        console.log(err);
        return err;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db_connection);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [381,981], () => (__webpack_exec__(6797)));
module.exports = __webpack_exports__;

})();