exports.id = 845;
exports.ids = [845];
exports.modules = {

/***/ 5219:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 1522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3100, 23))

/***/ }),

/***/ 292:
/***/ ((__unused_webpack_module, exports) => {

exports.X = async (category, sub_category)=>{
    try {
        const res = await fetch(`${process.env.API_URL}/api/articles/${category}/${sub_category}`, {
            cache: "force-cache"
        });
        return await res.json();
    } catch (err) {
        console.log(`An error occured while fetching data from the server: ${err}`);
    }
};


/***/ })

};
;