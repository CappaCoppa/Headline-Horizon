(() => {
var exports = {};
exports.id = 717;
exports.ids = [717];
exports.modules = {

/***/ 7783:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 8530:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 4426:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 252:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 2196:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/ua-parser-js");

/***/ }),

/***/ 4021:
/***/ ((module) => {

"use strict";
module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 4144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

// NAMESPACE OBJECT: ./src/app/sitemap.js
var sitemap_namespaceObject = {};
__webpack_require__.r(sitemap_namespaceObject);
__webpack_require__.d(sitemap_namespaceObject, {
  "default": () => (sitemap)
});

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Fsitemap.xml%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/sitemap.js?__next_metadata__
var sitemap_next_metadata_namespaceObject = {};
__webpack_require__.r(sitemap_next_metadata_namespaceObject);
__webpack_require__.d(sitemap_next_metadata_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(5387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(4664);
// EXTERNAL MODULE: ./src/utils/lib/articles/articles.js
var articles_articles = __webpack_require__(6073);
// EXTERNAL MODULE: ./src/utils/lib/categories/categories.js
var categories_categories = __webpack_require__(6261);
;// CONCATENATED MODULE: ./src/app/sitemap.js


async function sitemap() {
    const categories = await (0,categories_categories/* getCategories */.C)();
    const articles = await (0,articles_articles/* getArticles */.Z)();
    const allArticles = articles.map((article)=>{
        try {
            const trimed = article.sub_category.trim();
            return {
                url: `${process.env.API_URL}/${article.category}/${encodeURIComponent(trimed)}/${article._id}`,
                lastModified: article.date
            };
        } catch (e) {
            console.log(e);
        }
    });
    const allCategories = categories.map((category)=>{
        try {
            return {
                url: `${process.env.API_URL}/${category.category.title}`,
                lastModified: new Date()
            };
        } catch (e) {
            console.log("this is the error for allCategories <++++++++++++++++= " + e);
        }
    });
    const allSubCategories = categories.map((category)=>{
        try {
            return category.sub_category.map((sub_category)=>{
                const trimed = sub_category.title.trim();
                return {
                    url: `${process.env.API_URL}/${category.category.title}/${encodeURIComponent(trimed)}`,
                    lastModified: new Date()
                };
            });
        } catch (e) {
            console.log(`this is the thired console.log for and error: ${e}`);
        }
    });
    return [
        {
            url: `${process.env.API_URL}`,
            lastModified: new Date()
        },
        ...allCategories,
        ...allSubCategories.flat(1),
        ...allArticles
    ];
}

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/metadata/resolve-route-data.js
var resolve_route_data = __webpack_require__(9334);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Fsitemap.xml%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!./src/app/sitemap.js?__next_metadata__




const sitemapModule = { ...sitemap_namespaceObject }
const handler = sitemapModule.default
const generateSitemaps = sitemapModule.generateSitemaps
const contentType = "application/xml"
const fileType = "sitemap"

async function GET(_, ctx) {
  const { __metadata_id__ = [], ...params } = ctx.params || {}
  const targetId = __metadata_id__[0]
  let id = undefined
  const sitemaps = generateSitemaps ? await generateSitemaps() : null

  if (sitemaps) {
    id = sitemaps.find((item) => {
      if (false) {}
      return item.id.toString() === targetId
    })?.id
    if (id == null) {
      return new server.NextResponse('Not Found', {
        status: 404,
      })
    }
  }

  const data = await handler({ id })
  const content = (0,resolve_route_data.resolveRouteData)(data, fileType)

  return new server.NextResponse(content, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}



;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fsitemap.xml%2Froute&name=app%2Fsitemap.xml%2Froute&pagePath=private-next-app-dir%2Fsitemap.js&appDir=C%3A%5CUsers%5Clukva%5CDesktop%5Cprojects%5CHeadline-Horizon%5Csrc%5Capp&appPaths=%2Fsitemap&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/sitemap.xml/route","pathname":"/sitemap.xml","filename":"sitemap","bundlePath":"app/sitemap.xml/route"},"resolvedPagePath":"next-metadata-route-loader?page=%2Fsitemap.xml%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js!C:\\Users\\lukva\\Desktop\\projects\\Headline-Horizon\\src\\app\\sitemap.js?__next_metadata__","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: sitemap_next_metadata_namespaceObject,
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

    const originalPathname = "/sitemap.xml/route"

    

/***/ }),

/***/ 6073:
/***/ ((__unused_webpack_module, exports) => {

exports.Z = async ()=>{
    try {
        const res = await fetch(`${process.env.API_URL}/api/articles`, {
            cache: "force-cache"
        });
        // If the fetch request fails, throw an error
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        // Check if data is an array
        if (!Array.isArray(data)) {
            console.error("Data is not an array: ", data);
            return []; // Return an empty array if data is not an array
        }
        return data;
    } catch (err) {
        console.error(err); // Use console.error to log errors
        // If anything goes wrong, return an empty array to prevent map function errors
        return [];
    }
};


/***/ }),

/***/ 6261:
/***/ ((__unused_webpack_module, exports) => {

exports.C = async ()=>{
    try {
        const res = await fetch(`${process.env.API_URL}/api/categories`, {
            cache: "force-cache"
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [381,981,664,334], () => (__webpack_exec__(4144)));
module.exports = __webpack_exports__;

})();