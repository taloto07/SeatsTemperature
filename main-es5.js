(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n\n      <a class=\"navbar-brand\" routerLink=\"/\">Seats Warmer</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n\n    <div class=\"collapse navbar-collapse dual-collapse2\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\" >\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/seats\" routerLinkActive=\"active\">Seats</a>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"collapse navbar-collapse dual-collapse2\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\" *ngIf=\"!_auth.isLogIn()\">Login</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" *ngIf=\"_auth.isLogIn()\" style=\"cursor:pointer\" (click)=\"_auth.logOut()\">Logout</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n\n\n  <router-outlet></router-outlet>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n  This is for testing purpose only!\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n  <div class=\"row justify-content-center\" *ngIf=\"loginMessage != ''\" >\n    <div class=\"alert alert-danger col-4\" role=\"alert\">\n      {{ loginMessage }}\n    </div>\n  </div>\n  <div class=\"row justify-content-center\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\" class=\"col-4\">\n      <div class=\"form-group\">\n        <label for=\"formGroupExampleInput\">username</label>\n        <input type=\"text\" formControlName=\"email\" class=\"form-control\" />\n      </div>\n      <div class=\"form-group\">\n        <label for=\"formGroupExampleInput\">password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" />\n      </div>\n\n      <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"btn btn-primary\">Login</button>\n\n    </form>\n  </div>\n\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/seats/seat-item/seat-item.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/seats/seat-item/seat-item.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div>\n  {{seat.name}}<br/>\n  <button class=\"btn btn-lg\"\n          (click)=\"increaseLevel()\"\n          [ngClass]=\"seat.level > 0 ? 'btn-danger' : 'btn-secondary'\"\n          [disabled]=\"disableSeats\">\n    {{ seat.level }}\n  </button>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/seats/seats.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/seats/seats.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"containr text-center\">\n  <div class=\"row pt-4 justify-content-sm-center\">\n    <div clss=\"col-sm-12\">\n      {{ errorMessage }}\n    </div>\n  </div>\n  <div class=\"row pt-4 justify-content-sm-center\">\n    <div class=\"col-sm-1\">\n      <app-seat-item [seat]=\"frontLeftSeat\" [disableSeat]=\"disableSeats\" [vehicleId]=\"vehicleId\"></app-seat-item>\n    </div>\n    <div class=\"col-sm-1\">\n      <app-seat-item [seat]=\"frontRightSeat\" [disableSeat]=\"disableSeats\" [vehicleId]=\"vehicleId\"></app-seat-item>\n    </div>\n  </div>\n  <div class=\"row pt-4 justify-content-sm-center\">\n    <div class=\"col-sm-1\">\n      <app-seat-item [seat]=\"rearLeftSeat\" [disableSeat]=\"disableSeats\" [vehicleId]=\"vehicleId\"></app-seat-item>\n    </div>\n    <div class=\"col-sm-1\">\n      <app-seat-item [seat]=\"rearCenterSeat\" [disableSeat]=\"disableSeats\" [vehicleId]=\"vehicleId\"></app-seat-item>\n    </div>\n    <div class=\"col-sm-1\">\n      <app-seat-item [seat]=\"rearRightSeat\" [disableSeat]=\"disableSeats\" [vehicleId]=\"vehicleId\"></app-seat-item>\n    </div>\n  </div>\n  <div class=\"row pt-4 justify-content-sm-center\">\n    <div class=\"col-sm-2\">\n      <button class=\"btn-info\" (click)=\"wakeUpVehicle()\" [disabled]=\"disabled\">Refresh Data</button>\n    </div>\n\n    <div class=\"col-sm-2\">\n      <button (click)=\"toggleClimate()\" [disabled]=\"climate.disabled\" ngClass=\"climate.state ? 'btn-primary' : 'btn-secondary' \">\n        {{ climate.state ? \"Turn Off Climate\" : \"Turn On Climate\" }}\n      </button>\n    </div>\n\n    <div class=\"col-sm-2\">\n      <button class=\"btn-info\" (click)=\"getVehicleClimateState()\">Get Vehicle Climate State</button>\n    </div>\n  </div>\n</div>\n\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
            /* harmony import */ var _components_seats_seats_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/seats/seats.component */ "./src/app/components/seats/seats.component.ts");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
            var routes = [
                {
                    path: 'login',
                    component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
                },
                {
                    path: 'seats',
                    component: _components_seats_seats_component__WEBPACK_IMPORTED_MODULE_4__["SeatsComponent"],
                    canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
                },
                {
                    path: '',
                    component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
                }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(_auth, _router) {
                    this._auth = _auth;
                    this._router = _router;
                    this.title = 'SeatsWarmer';
                }
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
            /* harmony import */ var _components_seats_seats_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/seats/seats.component */ "./src/app/components/seats/seats.component.ts");
            /* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
            /* harmony import */ var _components_seats_seat_item_seat_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/seats/seat-item/seat-item.component */ "./src/app/components/seats/seat-item/seat-item.component.ts");
            /* harmony import */ var _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/token-interceptor.service */ "./src/app/services/token-interceptor.service.ts");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
            /* harmony import */ var _services_command_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/command.service */ "./src/app/services/command.service.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                        _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                        _components_seats_seats_component__WEBPACK_IMPORTED_MODULE_8__["SeatsComponent"],
                        _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                        _components_seats_seat_item_seat_item_component__WEBPACK_IMPORTED_MODULE_10__["SeatItemComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
                    ],
                    providers: [
                        _services_auth_service__WEBPACK_IMPORTED_MODULE_12__["AuthService"],
                        _guards_auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"],
                        _services_command_service__WEBPACK_IMPORTED_MODULE_14__["CommandService"],
                        {
                            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
                            useClass: _services_token_interceptor_service__WEBPACK_IMPORTED_MODULE_11__["TokenInterceptorService"],
                            multi: true
                        }
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/components/home/home.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/home/home.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/home/home.component.ts ***!
          \***************************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                }
                HomeComponent.prototype.ngOnInit = function () {
                };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/components/login/login.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/components/login/login.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/login/login.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/login/login.component.ts ***!
          \*****************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var credentialsIncorrectErrorMessage = "Credentials are incorrect!";
            var crossOriginErrorMessage = "Cross origin restriction!";
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(_auth, _router) {
                    this._auth = _auth;
                    this._router = _router;
                    this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                        email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
                        password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
                    });
                    this.loginMessage = "";
                }
                LoginComponent.prototype.ngOnInit = function () {
                };
                LoginComponent.prototype.login = function () {
                    var _this = this;
                    var email = this.loginForm.controls.email.value;
                    var password = this.loginForm.controls.password.value;
                    this._auth.login(email, password)
                        .subscribe(function (res) {
                        _this._auth.saveToken(res.access_token);
                        _this._router.navigateByUrl(_this._auth.redirectUrl);
                        _this._auth.redirectUrl = "/";
                    }, function (err) {
                        if (err.status == 401) {
                            _this.loginMessage = credentialsIncorrectErrorMessage;
                        }
                        else {
                            _this.loginMessage = crossOriginErrorMessage;
                        }
                    });
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-login',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/components/seats/seat-item/seat-item.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/components/seats/seat-item/seat-item.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhdHMvc2VhdC1pdGVtL3NlYXQtaXRlbS5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/seats/seat-item/seat-item.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/components/seats/seat-item/seat-item.component.ts ***!
          \*******************************************************************/
        /*! exports provided: SeatItemComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeatItemComponent", function () { return SeatItemComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_command_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/command.service */ "./src/app/services/command.service.ts");
            var SeatItemComponent = /** @class */ (function () {
                function SeatItemComponent(command) {
                    this.command = command;
                    this.seatPropertyNames = ["seat_heater_left", "seat_heater_right"];
                }
                Object.defineProperty(SeatItemComponent.prototype, "disableSeat", {
                    set: function (disableSeats) {
                        var _this = this;
                        this._disableSeat = disableSeats;
                        // climate control is off, set seat level to 0
                        if (disableSeats) {
                            this.seat.level = 0;
                            return;
                        }
                        // Climate control is turn on sync seat level for front seats and set seat level to 0 for rear seats
                        if (this.isFrontSeat(this.seat.number)) {
                            this.command.getVehicleState(this.vehicleId).subscribe(function (res) {
                                var seatLevel = res.response.climate_state[_this.seatPropertyNames[_this.seat.number]];
                                _this.seat.level = seatLevel;
                            }, function (err) {
                                console.log(_this.seat.number, err);
                            });
                        }
                        else {
                            this.command.setSeatHeater(this.seat.number, 0, this.vehicleId).subscribe(function (data) {
                                _this.seat.level = 0;
                            }, function (err) {
                                console.log(_this.seat.number, err);
                            });
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SeatItemComponent.prototype, "disableSeats", {
                    get: function () {
                        return this._disableSeat;
                    },
                    enumerable: true,
                    configurable: true
                });
                SeatItemComponent.prototype.ngOnInit = function () {
                };
                SeatItemComponent.prototype.increaseLevel = function () {
                    var _this = this;
                    var seatLevel = (this.seat.level + 1) % 4;
                    console.log(seatLevel);
                    this._disableSeat = true;
                    this.command.setSeatHeater(this.seat.number, seatLevel, this.vehicleId).subscribe(function (data) {
                        console.log(seatLevel);
                        _this._disableSeat = false;
                        _this.seat.level = seatLevel;
                    }, function (err) {
                        console.log("set seat error", err);
                        _this._disableSeat = false;
                    });
                };
                SeatItemComponent.prototype.isFrontSeat = function (seatNumber) {
                    return seatNumber === 0 || seatNumber === 1;
                };
                return SeatItemComponent;
            }());
            SeatItemComponent.ctorParameters = function () { return [
                { type: _services_command_service__WEBPACK_IMPORTED_MODULE_2__["CommandService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], SeatItemComponent.prototype, "seat", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], SeatItemComponent.prototype, "vehicleId", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], SeatItemComponent.prototype, "disableSeat", null);
            SeatItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-seat-item',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./seat-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/seats/seat-item/seat-item.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./seat-item.component.css */ "./src/app/components/seats/seat-item/seat-item.component.css")).default]
                })
            ], SeatItemComponent);
            /***/ 
        }),
        /***/ "./src/app/components/seats/seats.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/components/seats/seats.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2VhdHMvc2VhdHMuY29tcG9uZW50LmNzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/components/seats/seats.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/seats/seats.component.ts ***!
          \*****************************************************/
        /*! exports provided: SeatsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeatsComponent", function () { return SeatsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_command_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/command.service */ "./src/app/services/command.service.ts");
            /* harmony import */ var _models_seat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/seat */ "./src/app/models/seat.ts");
            var SeatsComponent = /** @class */ (function () {
                function SeatsComponent(command) {
                    this.command = command;
                    this.errorMessage = "error message display here";
                    this.disabled = true;
                    this.frontLeftSeat = new _models_seat__WEBPACK_IMPORTED_MODULE_3__["Seat"]("Driver", 0, 0);
                    this.frontRightSeat = new _models_seat__WEBPACK_IMPORTED_MODULE_3__["Seat"]("Passenger", 1, 0);
                    this.rearLeftSeat = new _models_seat__WEBPACK_IMPORTED_MODULE_3__["Seat"]("Rear Left", 2, 0);
                    this.rearCenterSeat = new _models_seat__WEBPACK_IMPORTED_MODULE_3__["Seat"]("Reat Center", 4, 0);
                    this.rearRightSeat = new _models_seat__WEBPACK_IMPORTED_MODULE_3__["Seat"]("Rear Right", 5, 0);
                    this.disableSeats = true;
                    this.climate = {
                        disabled: true,
                        state: false,
                    };
                }
                SeatsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    // get vehicle's id.
                    // if vehicle is not online, wakeup vehicle.
                    this.command.getVehicles().subscribe(function (res) {
                        _this.vehicleId = res.response[0].id_s;
                        _this.name = res.response[0].display_name;
                        _this.command.getVehicleState(_this.vehicleId).subscribe(function (res) {
                            console.log(res);
                            var climateState = res.response.climate_state.is_climate_on;
                            if (climateState) {
                                _this.climate.state = climateState;
                                _this.disableSeats = false;
                            }
                            _this.climate.disabled = false;
                        }, function (err) {
                            _this.climate.disabled = false;
                            console.log(err);
                            _this.setErrorMessage("error getting vehicle's state!");
                        });
                    }, function (err) {
                        console.log(err);
                        _this.setErrorMessage("can not get vehicle's info!");
                    });
                };
                SeatsComponent.prototype.isOnline = function (state) {
                    return "online" === state;
                };
                SeatsComponent.prototype.toggleClimate = function () {
                    // disable button
                    this.climate.disabled = true;
                    // if it is on, turn it off
                    if (this.climate.state) {
                        this.stopClimateControl();
                    }
                    else { // turn if on
                        this.startClimateControl();
                    }
                };
                SeatsComponent.prototype.startClimateControl = function () {
                    var _this = this;
                    this.command.startClimateControlSystem(this.vehicleId).subscribe(function (res) {
                        console.log(res);
                        _this.climate.disabled = false;
                        _this.climate.state = true;
                        _this.disableSeats = false;
                    }, function (err) {
                        console.log(err);
                        _this.climate.disabled = false;
                    });
                };
                SeatsComponent.prototype.stopClimateControl = function () {
                    var _this = this;
                    this.command.stopClimateControlSystem(this.vehicleId).subscribe(function (res) {
                        console.log(res);
                        _this.climate.disabled = false;
                        _this.climate.state = false;
                        _this.disableSeats = true;
                    }, function (err) {
                        console.log(err);
                        _this.climate.disabled = false;
                    });
                };
                SeatsComponent.prototype.getVehicleClimateState = function () {
                    this.command.getVehicleState(this.vehicleId).subscribe(function (res) {
                        console.log("vehicle state", res.response);
                        console.log("climate state: ", res.response.climate_state);
                    }, function (err) {
                        console.log(err);
                    });
                };
                SeatsComponent.prototype.wakeUpVehicle = function () {
                    var _this = this;
                    this.disableRefreshButton();
                    this.command.getVehicleState(this.vehicleId).subscribe(function (res) {
                        if (_this.isOnline(res.response.state)) {
                            console.log("vehicle is online");
                            _this.enableRefreshButton();
                            return;
                        }
                        console.log("vehicle is offline, going to wakeup vehicle!");
                        // this.command.wakeUpVehicle(this.vehicleId).subscribe(
                        //   res => {
                        //     console.log(res);
                        //   }, err => {
                        //     console.log(err);
                        //   }
                        // );
                    }, function (err) {
                        _this.enableRefreshButton();
                        console.log(err);
                    });
                };
                SeatsComponent.prototype.disableRefreshButton = function () {
                    this.disabled = true;
                };
                SeatsComponent.prototype.enableRefreshButton = function () {
                    this.disabled = false;
                };
                SeatsComponent.prototype.setErrorMessage = function (message) {
                    this.errorMessage = message;
                };
                return SeatsComponent;
            }());
            SeatsComponent.ctorParameters = function () { return [
                { type: _services_command_service__WEBPACK_IMPORTED_MODULE_2__["CommandService"] }
            ]; };
            SeatsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-seats',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./seats.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/seats/seats.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./seats.component.css */ "./src/app/components/seats/seats.component.css")).default]
                })
            ], SeatsComponent);
            /***/ 
        }),
        /***/ "./src/app/guards/auth.guard.ts": 
        /*!**************************************!*\
          !*** ./src/app/guards/auth.guard.ts ***!
          \**************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(_authService, _router) {
                    this._authService = _authService;
                    this._router = _router;
                }
                AuthGuard.prototype.canActivate = function (route, state) {
                    if (this._authService.isLogIn()) {
                        return true;
                    }
                    else {
                        this._authService.redirectUrl = state.url;
                        this._router.navigate(['/login']);
                        return false;
                    }
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/models/seat.ts": 
        /*!********************************!*\
          !*** ./src/app/models/seat.ts ***!
          \********************************/
        /*! exports provided: Seat */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Seat", function () { return Seat; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            var Seat = /** @class */ (function () {
                function Seat(name, number, level) {
                    this.name = name;
                    this.number = number;
                    this.level = level;
                }
                return Seat;
            }());
            /***/ 
        }),
        /***/ "./src/app/services/auth.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/auth.service.ts ***!
          \******************************************/
        /*! exports provided: AuthService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function () { return AuthService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            // header don't need this to login
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json'
                })
            };
            var baseUrl = "https://owner-api.teslamotors.com";
            var clientId = "81527cff06843c8634fdc09e8ac0abefb46ac849f38fe1e431c2ef2106796384";
            var clientSecret = "c7257eb71a564034f9419ee651c7d0e5f7aa6bfbd18bafb5c5c033b093bb2fa3";
            var AuthService = /** @class */ (function () {
                function AuthService(_http, _router) {
                    this._http = _http;
                    this._router = _router;
                    this.redirectUrl = "/";
                }
                AuthService.prototype.login = function (email, password) {
                    var login = "oauth/token";
                    var url = baseUrl + "/" + login;
                    var data = {
                        "grant_type": "password",
                        "client_id": clientId,
                        "client_secret": clientSecret,
                        "email": email,
                        "password": password
                    };
                    return this._http.post(url, data);
                };
                AuthService.prototype.saveToken = function (token) {
                    localStorage.setItem("token", token);
                };
                AuthService.prototype.isLogIn = function () {
                    return !!localStorage.getItem("token");
                };
                AuthService.prototype.logOut = function () {
                    this.redirectUrl = "/";
                    localStorage.removeItem("token");
                    this._router.navigateByUrl(this.redirectUrl);
                };
                return AuthService;
            }());
            AuthService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthService);
            /***/ 
        }),
        /***/ "./src/app/services/command.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/services/command.service.ts ***!
          \*********************************************/
        /*! exports provided: CommandService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommandService", function () { return CommandService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var CommandService = /** @class */ (function () {
                function CommandService(http) {
                    this.http = http;
                    this.baseUrl = "https://owner-api.teslamotors.com";
                    this.vehiclesUrl = "api/1/vehicles";
                    this.clientId = "81527cff06843c8634fdc09e8ac0abefb46ac849f38fe1e431c2ef2106796384";
                    this.clientSecret = "c7257eb71a564034f9419ee651c7d0e5f7aa6bfbd18bafb5c5c033b093bb2fa3";
                }
                CommandService.prototype.getVehicles = function () {
                    var url = this.baseUrl + "/" + this.vehiclesUrl;
                    return this.http.get(url);
                };
                CommandService.prototype.wakeUpVehicle = function (id) {
                    var wakeUrl = this.baseUrl + "/" + this.vehiclesUrl + "/" + id + "/wake_up";
                    return this.http.post(wakeUrl, {});
                };
                CommandService.prototype.getVehicleState = function (id) {
                    var stateUrl = this.baseUrl + "/" + this.vehiclesUrl + "/" + id + "/vehicle_data";
                    return this.http.get(stateUrl);
                };
                CommandService.prototype.setSeatHeater = function (seatNumber, level, id) {
                    var url = this.baseUrl + "/" + this.vehiclesUrl + "/" + id + "/command/remote_seat_heater_request";
                    var data = {
                        heater: seatNumber,
                        level: level
                    };
                    return this.http.post(url, data);
                };
                CommandService.prototype.startClimateControlSystem = function (id) {
                    var url = this.baseUrl + "/" + this.vehiclesUrl + "/" + id + "/command/auto_conditioning_start";
                    return this.http.post(url, {});
                };
                CommandService.prototype.stopClimateControlSystem = function (id) {
                    var url = this.baseUrl + "/" + this.vehiclesUrl + "/" + id + "/command/auto_conditioning_stop";
                    return this.http.post(url, {});
                };
                return CommandService;
            }());
            CommandService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            CommandService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], CommandService);
            /***/ 
        }),
        /***/ "./src/app/services/token-interceptor.service.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/services/token-interceptor.service.ts ***!
          \*******************************************************/
        /*! exports provided: TokenInterceptorService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptorService", function () { return TokenInterceptorService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var TokenInterceptorService = /** @class */ (function () {
                function TokenInterceptorService() {
                }
                TokenInterceptorService.prototype.intercept = function (req, next) {
                    var tokenizedReq = req.clone({
                        setHeaders: {
                            Authorization: "Bearer " + localStorage.getItem("token")
                        }
                    });
                    return next.handle(tokenizedReq);
                };
                return TokenInterceptorService;
            }());
            TokenInterceptorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TokenInterceptorService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false
            };
            /*
             * For easier debugging in development mode, you can import the following file
             * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
             *
             * This import should be commented out in production mode because it will have a negative impact
             * on performance if an error is thrown.
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /Users/clim877/projects/SeatsWarmer/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map