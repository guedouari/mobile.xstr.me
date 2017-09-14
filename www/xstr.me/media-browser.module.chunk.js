webpackJsonp(["media-browser.module"],{

/***/ "../../../../../src/app/media-browser/episode/episode.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/media-browser/episode/episode.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  episode works!\n</p>\n<p>\n  {{info}}\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/media-browser/episode/episode.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EpisodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EpisodeComponent = (function () {
    function EpisodeComponent(route) {
        this.route = route;
        this.info = 'Episode ID = ';
    }
    EpisodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var epId = '';
        this.sub = this.route.params.subscribe(function (params) {
            _this.se = params['ep'];
            if (!!params['ep']) {
                epId = params['ep'];
                // console.log('jckpjkpjkljkkjjkpjkjkj,k,');
            }
        });
        this.info += epId; // this.mediaService.activeMedia.mediaInfo;
    };
    EpisodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'xstr-episode',
            template: __webpack_require__("../../../../../src/app/media-browser/episode/episode.component.html"),
            styles: [__webpack_require__("../../../../../src/app/media-browser/episode/episode.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
    ], EpisodeComponent);
    return EpisodeComponent;
    var _a;
}());

//# sourceMappingURL=episode.component.js.map

/***/ }),

/***/ "../../../../../src/app/media-browser/guards/episode-is-valid.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EpisodeIsValidGuard; });
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


var EpisodeIsValidGuard = (function () {
    function EpisodeIsValidGuard(router) {
        this.router = router;
    }
    EpisodeIsValidGuard.prototype.canActivate = function (next, state) {
        console.log('EpisodeIsValidGuard =>');
        console.log('params.ep = ' + next.params.ep + ' isValid = ' + !isNaN(+next.params.ep));
        if (isNaN(+next.params.ep)) {
            this.router.navigate(['/404']);
            return false;
        }
        return true;
    };
    EpisodeIsValidGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
    ], EpisodeIsValidGuard);
    return EpisodeIsValidGuard;
    var _a;
}());

//# sourceMappingURL=episode-is-valid.guard.js.map

/***/ }),

/***/ "../../../../../src/app/media-browser/guards/media-is-valid.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaIsValidGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__media_browser_service__ = __webpack_require__("../../../../../src/app/media-browser/media-browser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MediaIsValidGuard = (function () {
    function MediaIsValidGuard(router, mediaBrowserService) {
        this.router = router;
        this.mediaBrowserService = mediaBrowserService;
    }
    /* istanbul ignore next */
    MediaIsValidGuard.prototype.canActivate = function (next, state) {
        if (!next || !state) {
            return false;
        }
        var isValid = true;
        var mtype;
        var id;
        console.log('guard checked');
        mtype = next.params.mtype;
        id = next.params.id;
        // isValid = !!next.params.mtype && !isNaN(+next.params.id);
        isValid = !!next.params.mtype && mtype.length === 2;
        isValid = isValid && !isNaN(+id);
        console.log(mtype);
        console.log(id);
        if (isValid) {
            this.mediaBrowserService.setActiveMedia(mtype, 'Generic', +id);
            return true;
        }
        this.router.navigate(['/404']);
        return false;
    };
    MediaIsValidGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__media_browser_service__["a" /* MediaBrowserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__media_browser_service__["a" /* MediaBrowserService */]) === "function" && _b || Object])
    ], MediaIsValidGuard);
    return MediaIsValidGuard;
    var _a, _b;
}());

//# sourceMappingURL=media-is-valid.guard.js.map

/***/ }),

/***/ "../../../../../src/app/media-browser/guards/season-is-valid.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeasonIsValidGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__media_browser_service__ = __webpack_require__("../../../../../src/app/media-browser/media-browser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SeasonIsValidGuard = (function () {
    function SeasonIsValidGuard(router, mediaBrowserService) {
        this.router = router;
        this.mediaBrowserService = mediaBrowserService;
    }
    SeasonIsValidGuard.prototype.canActivate = function (next, state) {
        if (isNaN(+next.params.se)) {
            this.router.navigate(['/404']);
            return false;
        }
        this.mediaBrowserService.setSeason(next.params.se);
        console.log('seasonGuard sets season ');
        console.log(this.mediaBrowserService.activeMedia.getMediaInfo());
        return true;
    };
    SeasonIsValidGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__media_browser_service__["a" /* MediaBrowserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__media_browser_service__["a" /* MediaBrowserService */]) === "function" && _b || Object])
    ], SeasonIsValidGuard);
    return SeasonIsValidGuard;
    var _a, _b;
}());

//# sourceMappingURL=season-is-valid.guard.js.map

/***/ }),

/***/ "../../../../../src/app/media-browser/media-browser.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/media-browser/media-browser.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n    <!-- {{showInfo()}} --> \n</p>\n\n<nav md-tab-nav-bar>\n  <a md-tab-link\n     *ngFor=\"let link of sublinks\"\n     [routerLink]=\"link.routerlink\"\n     [active]=isActivated(link.routerlink)>\n    {{link.title}}\n  </a>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/media-browser/media-browser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaBrowserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__media_browser_service__ = __webpack_require__("../../../../../src/app/media-browser/media-browser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MediaBrowserComponent = (function () {
    /* waiting for fix */
    /* istanbul ignore branch */
    function MediaBrowserComponent(router, route, mediaBrowserService) {
        this.router = router;
        this.route = route;
        this.mediaBrowserService = mediaBrowserService;
        this.mediaType = 'default';
        this.id = 'default';
        this.se = 'default';
        this.sublinks = [
            new Sublink('.', 'Overview'),
            new Sublink('w', 'Watch'),
            new Sublink('seasons', 'Seasons'),
            new Sublink('reviews', 'Reviews')
        ];
    }
    MediaBrowserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.mediaType = params['mtype'];
            _this.id = params['id'];
            _this.se = params['se'];
            // console.log('Season de => ' + this.se);
            /* if (!this.media-browserService.createMediaBrowser(this.media-browserType, this.id)) {
                this.router.navigateByUrl('/404');
            } */
        });
        // this.sublinks.push(new Sublink('w', 'dgdgdg'));
    };
    MediaBrowserComponent.prototype.isActivated = function (routerlink) {
        var linkurl = '/' + this.mediaType + '/' + this.id;
        if (!routerlink.endsWith('.')) {
            linkurl = linkurl + '/' + routerlink;
        }
        // console.log('routeIsActive : ' + routerlink + ' => ' + this.router.isActive(routerlink, false));
        return this.router.isActive(linkurl, true);
    };
    MediaBrowserComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    MediaBrowserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'xstr-media-browser',
            template: __webpack_require__("../../../../../src/app/media-browser/media-browser.component.html"),
            styles: [__webpack_require__("../../../../../src/app/media-browser/media-browser.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__media_browser_service__["a" /* MediaBrowserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__media_browser_service__["a" /* MediaBrowserService */]) === "function" && _c || Object])
    ], MediaBrowserComponent);
    return MediaBrowserComponent;
    var _a, _b, _c;
}());

var Sublink = (function () {
    function Sublink(routerlink, title) {
        this.routerlink = routerlink;
        this.title = title;
        this.routerlink = routerlink;
        this.title = title;
    }
    return Sublink;
}());
//# sourceMappingURL=media-browser.component.js.map

/***/ }),

/***/ "../../../../../src/app/media-browser/media-browser.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaBrowserModule", function() { return MediaBrowserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_media_is_valid_guard__ = __webpack_require__("../../../../../src/app/media-browser/guards/media-is-valid.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__episode_episode_component__ = __webpack_require__("../../../../../src/app/media-browser/episode/episode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__media_browser_routing__ = __webpack_require__("../../../../../src/app/media-browser/media-browser.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__media_browser_component__ = __webpack_require__("../../../../../src/app/media-browser/media-browser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__over_view_over_view_component__ = __webpack_require__("../../../../../src/app/media-browser/over-view/over-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__watch_watch_component__ = __webpack_require__("../../../../../src/app/media-browser/watch/watch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reviews_reviews_component__ = __webpack_require__("../../../../../src/app/media-browser/reviews/reviews.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__media_browser_service__ = __webpack_require__("../../../../../src/app/media-browser/media-browser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__seasons_seasons_component__ = __webpack_require__("../../../../../src/app/media-browser/seasons/seasons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__season_season_component__ = __webpack_require__("../../../../../src/app/media-browser/season/season.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__guards_season_is_valid_guard__ = __webpack_require__("../../../../../src/app/media-browser/guards/season-is-valid.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__guards_episode_is_valid_guard__ = __webpack_require__("../../../../../src/app/media-browser/guards/episode-is-valid.guard.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var MediaBrowserModule = (function () {
    function MediaBrowserModule() {
    }
    MediaBrowserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__media_browser_routing__["a" /* MediaBrowserRouting */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MdButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MdTabsModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__media_browser_component__["a" /* MediaBrowserComponent */], __WEBPACK_IMPORTED_MODULE_7__over_view_over_view_component__["a" /* OverViewComponent */],
                __WEBPACK_IMPORTED_MODULE_8__watch_watch_component__["a" /* WatchComponent */], __WEBPACK_IMPORTED_MODULE_9__reviews_reviews_component__["a" /* ReviewsComponent */], __WEBPACK_IMPORTED_MODULE_11__seasons_seasons_component__["a" /* SeasonsComponent */], __WEBPACK_IMPORTED_MODULE_12__season_season_component__["a" /* SeasonComponent */], __WEBPACK_IMPORTED_MODULE_1__episode_episode_component__["a" /* EpisodeComponent */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__media_browser_service__["a" /* MediaBrowserService */], __WEBPACK_IMPORTED_MODULE_0__guards_media_is_valid_guard__["a" /* MediaIsValidGuard */], __WEBPACK_IMPORTED_MODULE_13__guards_season_is_valid_guard__["a" /* SeasonIsValidGuard */], __WEBPACK_IMPORTED_MODULE_14__guards_episode_is_valid_guard__["a" /* EpisodeIsValidGuard */]]
        })
    ], MediaBrowserModule);
    return MediaBrowserModule;
}());

//# sourceMappingURL=media-browser.module.js.map

/***/ }),

/***/ "../../../../../src/app/media-browser/media-browser.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaBrowserRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__guards_episode_is_valid_guard__ = __webpack_require__("../../../../../src/app/media-browser/guards/episode-is-valid.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_season_is_valid_guard__ = __webpack_require__("../../../../../src/app/media-browser/guards/season-is-valid.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_media_is_valid_guard__ = __webpack_require__("../../../../../src/app/media-browser/guards/media-is-valid.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__episode_episode_component__ = __webpack_require__("../../../../../src/app/media-browser/episode/episode.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__season_season_component__ = __webpack_require__("../../../../../src/app/media-browser/season/season.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__seasons_seasons_component__ = __webpack_require__("../../../../../src/app/media-browser/seasons/seasons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__media_browser_component__ = __webpack_require__("../../../../../src/app/media-browser/media-browser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__watch_watch_component__ = __webpack_require__("../../../../../src/app/media-browser/watch/watch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__over_view_over_view_component__ = __webpack_require__("../../../../../src/app/media-browser/over-view/over-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reviews_reviews_component__ = __webpack_require__("../../../../../src/app/media-browser/reviews/reviews.component.ts");











var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_7__media_browser_component__["a" /* MediaBrowserComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_media_is_valid_guard__["a" /* MediaIsValidGuard */]],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_9__over_view_over_view_component__["a" /* OverViewComponent */],
                pathMatch: 'full'
            },
            {
                path: 'w',
                component: __WEBPACK_IMPORTED_MODULE_8__watch_watch_component__["a" /* WatchComponent */]
            },
            {
                path: 'reviews',
                component: __WEBPACK_IMPORTED_MODULE_10__reviews_reviews_component__["a" /* ReviewsComponent */]
            },
            {
                path: 'seasons',
                component: __WEBPACK_IMPORTED_MODULE_5__seasons_seasons_component__["a" /* SeasonsComponent */]
            },
            {
                path: ':se',
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_season_is_valid_guard__["a" /* SeasonIsValidGuard */]],
                children: [
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_4__season_season_component__["a" /* SeasonComponent */],
                        pathMatch: 'full'
                    },
                    {
                        path: 'w',
                        component: __WEBPACK_IMPORTED_MODULE_8__watch_watch_component__["a" /* WatchComponent */]
                    },
                    {
                        path: 'reviews',
                        component: __WEBPACK_IMPORTED_MODULE_10__reviews_reviews_component__["a" /* ReviewsComponent */]
                    },
                    {
                        path: ':ep',
                        canActivate: [__WEBPACK_IMPORTED_MODULE_0__guards_episode_is_valid_guard__["a" /* EpisodeIsValidGuard */]],
                        children: [
                            {
                                path: '',
                                component: __WEBPACK_IMPORTED_MODULE_3__episode_episode_component__["a" /* EpisodeComponent */],
                                pathMatch: 'full'
                            },
                            {
                                path: 'w',
                                component: __WEBPACK_IMPORTED_MODULE_8__watch_watch_component__["a" /* WatchComponent */]
                            },
                            {
                                path: 'reviews',
                                component: __WEBPACK_IMPORTED_MODULE_10__reviews_reviews_component__["a" /* ReviewsComponent */]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
var MediaBrowserRouting = __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* RouterModule */].forChild(routes);
//# sourceMappingURL=media-browser.routing.js.map

/***/ }),

/***/ "../../../../../src/app/media-browser/media-browser.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MediaBrowserService; });
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

var MediaBrowserService = (function () {
    function MediaBrowserService() {
        this.mediaTypes = new Array();
        this.mediaTypes.push(new MediaType('mv', 'Movies'));
        this.mediaTypes.push(new MediaType('tv', 'TV Shows'));
        this.mediaTypes.push(new MediaType('an', 'Anime'));
        this.mediaTypes.push(new MediaType('sm', 'Short Movies'));
    }
    MediaBrowserService.prototype.setActiveMedia = function (routeUrl, genreName, id) {
        console.log('*************      new media Created');
        this.activeMedia = new ActiveMedia(new MediaType(routeUrl, genreName), id);
    };
    MediaBrowserService.prototype.setSeason = function (id) {
        this.activeMedia.setSeasonID(id);
    };
    MediaBrowserService.prototype.setEpisode = function (id) {
        this.activeMedia.setEpisodeID(id);
    };
    MediaBrowserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MediaBrowserService);
    return MediaBrowserService;
}());

var MediaType = (function () {
    function MediaType(routeUrl, name) {
        this.routeUrl = routeUrl;
        this.name = name;
        this.routeUrl = routeUrl;
        this.name = name;
    }
    return MediaType;
}());
var ActiveMedia = (function () {
    function ActiveMedia(mediaType, id) {
        this.mediaType = mediaType;
        this.id = id;
        this.mediaInfo = mediaType.name + ' --- url = ' + mediaType.routeUrl + ' --- id = ' + this.id;
    }
    ActiveMedia.prototype.setSeasonID = function (seasonID) {
        this.seasonID = seasonID;
    };
    ActiveMedia.prototype.setEpisodeID = function (episodeID) {
        this.episodeID = episodeID;
    };
    ActiveMedia.prototype.getMediaInfo = function () {
        var info = this.mediaInfo;
        if (this.seasonID) {
            info += ' --- se = ' + this.seasonID;
        }
        if (this.episodeID) {
            info += ' --- ep = ' + this.episodeID;
        }
        return info;
    };
    return ActiveMedia;
}());
//# sourceMappingURL=media-browser.service.js.map

/***/ }),

/***/ "../../../../../src/app/media-browser/over-view/over-view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/media-browser/over-view/over-view.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  over-view works!\n</p>\n<p>\n  {{info}}\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/media-browser/over-view/over-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverViewComponent; });
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

var OverViewComponent = (function () {
    function OverViewComponent() {
        this.info = 'AAAA'; // this.mediaService.activeMedia.mediaInfo;
    }
    OverViewComponent.prototype.ngOnInit = function () {
        // this.info = this.mediaService.activeMedia.mediaInfo;
    };
    OverViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'xstr-over-view',
            template: __webpack_require__("../../../../../src/app/media-browser/over-view/over-view.component.html"),
            styles: [__webpack_require__("../../../../../src/app/media-browser/over-view/over-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OverViewComponent);
    return OverViewComponent;
}());

//# sourceMappingURL=over-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/media-browser/reviews/reviews.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/media-browser/reviews/reviews.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  reviews works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/media-browser/reviews/reviews.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsComponent; });
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

var ReviewsComponent = (function () {
    function ReviewsComponent() {
    }
    ReviewsComponent.prototype.ngOnInit = function () {
    };
    ReviewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'xstr-reviews',
            template: __webpack_require__("../../../../../src/app/media-browser/reviews/reviews.component.html"),
            styles: [__webpack_require__("../../../../../src/app/media-browser/reviews/reviews.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReviewsComponent);
    return ReviewsComponent;
}());

//# sourceMappingURL=reviews.component.js.map

/***/ }),

/***/ "../../../../../src/app/media-browser/season/season.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/media-browser/season/season.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  season works!\n</p>\n<p>\n  {{info}}\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/media-browser/season/season.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeasonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SeasonComponent = (function () {
    /* istanbul ignore next */
    function SeasonComponent(route) {
        this.route = route;
        this.info = 'Season ID = ';
    }
    SeasonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.se = params['se'];
        });
        this.info += this.se;
    };
    SeasonComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
            selector: 'xstr-season',
            template: __webpack_require__("../../../../../src/app/media-browser/season/season.component.html"),
            styles: [__webpack_require__("../../../../../src/app/media-browser/season/season.component.css")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
    ], SeasonComponent);
    return SeasonComponent;
    var _a;
}());

//# sourceMappingURL=season.component.js.map

/***/ }),

/***/ "../../../../../src/app/media-browser/seasons/seasons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/media-browser/seasons/seasons.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  seasons works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/media-browser/seasons/seasons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeasonsComponent; });
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

var SeasonsComponent = (function () {
    function SeasonsComponent() {
    }
    SeasonsComponent.prototype.ngOnInit = function () {
    };
    SeasonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'xstr-seasons',
            template: __webpack_require__("../../../../../src/app/media-browser/seasons/seasons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/media-browser/seasons/seasons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SeasonsComponent);
    return SeasonsComponent;
}());

//# sourceMappingURL=seasons.component.js.map

/***/ }),

/***/ "../../../../../src/app/media-browser/watch/watch.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/media-browser/watch/watch.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  watch works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/media-browser/watch/watch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatchComponent; });
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

var WatchComponent = (function () {
    function WatchComponent() {
    }
    WatchComponent.prototype.ngOnInit = function () {
    };
    WatchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'xstr-watch',
            template: __webpack_require__("../../../../../src/app/media-browser/watch/watch.component.html"),
            styles: [__webpack_require__("../../../../../src/app/media-browser/watch/watch.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WatchComponent);
    return WatchComponent;
}());

//# sourceMappingURL=watch.component.js.map

/***/ })

});
//# sourceMappingURL=media-browser.module.chunk.js.map