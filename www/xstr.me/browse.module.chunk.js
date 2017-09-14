webpackJsonp(["browse.module"],{

/***/ "../../../../../src/app/pages/browse/browse.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/browse/browse.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  browse works!\n</p>\n<p>\n  {{paramString}}\n</p>\n<ul>\n  <li><a routerLink=\"/mv/df\" >movie error</a></li>\n  <li><a routerLink=\"/mv/1\" >movie 1</a></li>\n  <li><a routerLink=\"/tv/df\" routerLinkActive=\"active\">tv error</a></li>\n  <li><a routerLink=\"/tv/1\" routerLinkActive=\"active\">tv 1</a></li>\n  <li><a routerLink=\"/tv/1/1\" routerLinkActive=\"active\">tv 1 season 1</a></li>\n  <li><a routerLink=\"/tv/1/1/1\" routerLinkActive=\"active\">tv 1 season 1 ep 1</a></li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/pages/browse/browse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BrowseComponent = (function () {
    function BrowseComponent(route) {
        var _this = this;
        this.route = route;
        this.paramString = 'test params =';
        this.route.queryParamMap.forEach(function (params) {
            // console.log('queryparam changed')
            params.keys.forEach(function (paramkey) {
                _this.paramString = _this.paramString + ' ' + paramkey + ' = ' + params.getAll(paramkey);
                // console.log('param found => ' + paramkey + ' = ' + params.get(paramkey));
            });
        });
    }
    BrowseComponent.prototype.ngOnInit = function () {
    };
    BrowseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'xstr-browse',
            template: __webpack_require__("../../../../../src/app/pages/browse/browse.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/browse/browse.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
    ], BrowseComponent);
    return BrowseComponent;
    var _a;
}());

//# sourceMappingURL=browse.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/browse/browse.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowseModule", function() { return BrowseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__browse_component__ = __webpack_require__("../../../../../src/app/pages/browse/browse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__browse_routing__ = __webpack_require__("../../../../../src/app/pages/browse/browse.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__browse_service__ = __webpack_require__("../../../../../src/app/pages/browse/browse.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// import { RouterModule } from '@angular/router';





var BrowseModule = (function () {
    function BrowseModule() {
    }
    BrowseModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__browse_routing__["a" /* BrowseRouting */],
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__browse_component__["a" /* BrowseComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__browse_service__["a" /* BrowseService */]]
        })
    ], BrowseModule);
    return BrowseModule;
}());

//# sourceMappingURL=browse.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/browse/browse.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__browse_component__ = __webpack_require__("../../../../../src/app/pages/browse/browse.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__browse_component__["a" /* BrowseComponent */]
    }
];
var BrowseRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forChild(routes);
//# sourceMappingURL=browse.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/browse/browse.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BrowseService = (function () {
    function BrowseService() {
    }
    BrowseService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], BrowseService);
    return BrowseService;
}());

//# sourceMappingURL=browse.service.js.map

/***/ })

});
//# sourceMappingURL=browse.module.chunk.js.map