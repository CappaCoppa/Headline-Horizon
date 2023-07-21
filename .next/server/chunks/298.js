exports.id = 298;
exports.ids = [298];
exports.modules = {

/***/ 6295:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7977, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 8469))

/***/ }),

/***/ 4914:
/***/ (() => {



/***/ }),

/***/ 8469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ClientComp: () => (/* binding */ ClientComp)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@reduxjs/toolkit/dist/redux-toolkit.cjs.production.min.js
var redux_toolkit_cjs_production_min = __webpack_require__(668);
;// CONCATENATED MODULE: ./src/redux/menuSlice.js

const menuSlice = (0,redux_toolkit_cjs_production_min.createSlice)({
    name: "menu",
    initialState: {
        isOpen: false
    },
    reducers: {
        toggle: (state)=>{
            state.isOpen = !state.isOpen;
        }
    }
});
const { toggle } = menuSlice.actions;
const selectIsOpen = (state)=>state.menu.isOpen;
/* harmony default export */ const redux_menuSlice = (menuSlice.reducer);

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(1560);
;// CONCATENATED MODULE: ./src/components/Hamburger.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Hamburger() {
    const dispatch = (0,lib.useDispatch)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            onClick: ()=>dispatch(toggle()),
            className: "",
            width: "40",
            height: "40",
            viewBox: "0 0 40 40",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M8.33331 28.3333H31.6666",
                    stroke: "#F3F3F3",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M8.33331 20H31.6666",
                    stroke: "#F3F3F3",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M8.33331 11.6667H31.6666",
                    stroke: "#F3F3F3",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/react-redux/es/hooks/useSelector.js + 3 modules
var useSelector = __webpack_require__(797);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Close.js
/* __next_internal_client_entry_do_not_use__ Close auto */ 



const Close = ()=>{
    const dispatch = (0,lib.useDispatch)();
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
            width: "32",
            height: "32",
            viewBox: "0 0 32 32",
            fill: "none",
            onClick: ()=>dispatch(toggle()),
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M27.9999 27.9999L4 4",
                    stroke: "white",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M28 4L3.99994 28.0001",
                    stroke: "white",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/MobileMenu.js
/* __next_internal_client_entry_do_not_use__ MobileMenu auto */ 







const MobileMenu = ({ categories })=>{
    const selector = (0,useSelector/* useSelector */.v9)(selectIsOpen);
    const dispatch = (0,lib.useDispatch)();
    const mappedContent = categories.map((title, index)=>/*#__PURE__*/ jsx_runtime_.jsx("p", {
            className: "text-h5 py-8",
            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                onClick: ()=>dispatch(toggle()),
                href: `/${title}`,
                children: title
            })
        }, index));
    (0,react_.useEffect)(()=>{
        // Disables scrolling when the menu is open
        if (selector) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }
        // Re-enables scrolling when the component unmounts
        return ()=>{
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [
        selector
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `bg-primary border-2 border-r-secondary menu-hidden ${selector ? "menu-shown" : ""}`,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-full h-full flex flex-row",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "px-16 py-16",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "border-b-[1px] border-b-black-25 pb-16 flex justify-between align-middle items-center ",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "invisible",
                                    children: [
                                        " ",
                                        "",
                                        " "
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Close, {})
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "font-antic uppercase text-black-5",
                            children: mappedContent
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "w-[4px] bg-secondary text-secondary overflow-hidden",
                    children: " "
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/redux/store.js


/* harmony default export */ const store = ((0,redux_toolkit_cjs_production_min.configureStore)({
    reducer: {
        menu: redux_menuSlice
    }
}));

;// CONCATENATED MODULE: ./src/components/Overlay.js
"yse client";





const Overlay = ()=>{
    const dispatch = (0,lib.useDispatch)();
    const selector = (0,lib.useSelector)(selectIsOpen);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `overlay ${selector ? "overlay-show" : ""}`,
        onClick: ()=>dispatch(toggle()),
        children: ""
    });
};

;// CONCATENATED MODULE: ./src/components/ClientComp.js
/* __next_internal_client_entry_do_not_use__ ClientComp auto */ 






const ClientComp = ({ categories })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "xl:hidden",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(lib.Provider, {
            store: store,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Hamburger, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(MobileMenu, {
                    className: "absolute top-0 right-0",
                    categories: categories
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Overlay, {})
            ]
        })
    });
};


/***/ }),

/***/ 7869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(5553);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(4834);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7887);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(1313);
;// CONCATENATED MODULE: ./src/components/ClientComp.js

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\lukva\Desktop\projects\Headline-Horizon\src\components\ClientComp.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["ClientComp"];

;// CONCATENATED MODULE: ./src/app/Header.js




const Header = ()=>{
    const categories = [
        "U.S.",
        "World",
        "Politics",
        "Entertainment",
        "Business",
        "Lifestyle",
        "Science",
        "Tech",
        "Health"
    ];
    const mappedCategories = categories.map((title, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: `${title}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-h6 tracking-wider text-black-5 font-antic uppercase cursor-pointer transition-all duration-300 hover:text-black-25",
                children: title
            })
        }, index));
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "bg-primary px-16 md:px-32 xl:px-64 py-0 flex justify-between items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                        href: process.env.API_URL,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: " text-h2 cursor-pointer font-antic p-0 m-0 uppercase text-black-5 xl:hidden",
                                children: "H H"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: " text-h2 cursor-pointer font-antic p-0 m-0 uppercase text-black-5 hidden xl:block",
                                children: "Headline Horizon"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(e0, {
                                categories: categories
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "hidden xl:flex flex-row gap-8",
                                children: mappedCategories
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-[5px] bg-secondary"
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/utils/lib/categories/categories.js
var categories_categories = __webpack_require__(6261);
;// CONCATENATED MODULE: ./src/app/Footer.js




const Footer = async ()=>{
    const categories = await (0,categories_categories/* getCategories */.C)();
    const mappingCategories = categories.map((category, index)=>{
        const subCategories = category.sub_category.map((subCategory, index1)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `${process.env.API_URL}/${encodeURIComponent(category.category.title)}/${encodeURIComponent(subCategory.title)}`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "cursor-pointer text-black-25 font-semibold my-1 py-1 transition-all duration-300 hover:opacity-50 shadow-black-5 text-left",
                    children: subCategory.title
                })
            }, index1));
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "justify-self-auto",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: `${process.env.API_URL}/${encodeURIComponent(category.category.title)}`,
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                            className: " cursor-pointer font-antic  text-black-5 transition-all duration-300 hover:opacity-50 text-left",
                            children: category.category.title
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "border-b-[1px] mb-8 text-black-5 text"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: subCategories
                    })
                ]
            })
        }, index);
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-primary py-32 px-32 lg:px-192 grid grid-cols-2 md:grid-cols-3 gap-16",
        children: mappingCategories
    });
};

;// CONCATENATED MODULE: ./src/app/layout.js




const metadata = {
    title: {
        default: "HH",
        template: "HH - %s"
    },
    description: "yoo whats uppp"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
            className: "overflow-x-hidden w-[100%]",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
                children,
                /*#__PURE__*/ jsx_runtime_.jsx(Footer, {})
            ]
        })
    });
}


/***/ }),

/***/ 2516:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

async function Loading() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "h-full border-2 border-gray-200 rounded-lg overflow-hidden",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "p-6",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                            className: "bg-gray-400 animate-pulse h-4 w-1/4 mb-2",
                            children: [
                                " ",
                                "Loading..."
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "w-1/2 mb-4 h-6 animate-pulse bg-gray-500"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            className: "leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center flex-wrap ",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


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


/***/ }),

/***/ 2819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 5553:
/***/ (() => {



/***/ })

};
;