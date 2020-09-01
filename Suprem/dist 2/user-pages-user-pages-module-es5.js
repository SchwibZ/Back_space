(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-pages-user-pages-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/user-pages/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-pages/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-center auth px-0\">\n  <div class=\"row w-100 mx-0\">\n    <div class=\"col-lg-4 mx-auto\">\n      <div class=\"auth-form-light text-left py-5 px-4 px-sm-5\">\n        <div class=\"brand-logo\">\n          <img src=\"assets/images/logo.svg\" alt=\"logo\">\n        </div>\n        <h6 class=\"font-weight-light\">Sign in to continue.</h6>\n        <form class=\"pt-3\">\n          <div class=\"form-group\">\n            <input type=\"email\" class=\"form-control form-control-lg\" id=\"exampleInputEmail1\" placeholder=\"Username\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control form-control-lg\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n          </div>\n          <div class=\"mt-3\">\n            <a class=\"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn\" routerLink=\"/dashboard\">SIGN IN</a>\n          </div>\n          <div class=\"my-2 d-flex justify-content-between align-items-center\">\n            <div class=\"form-check\">\n              <label class=\"form-check-label text-muted\">\n                <input type=\"checkbox\" class=\"form-check-input\">\n                <i class=\"input-helper\"></i>\n                Keep me signed in\n              </label>\n            </div>\n            <a href=\"javascript:(void)\" class=\"auth-link text-black\">Forgot password?</a>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>  "

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/user-pages/register/register.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/user-pages/register/register.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-center auth px-0\">\n  <div class=\"row w-100 mx-0\">\n    <div class=\"col-lg-4 mx-auto\">\n      <div class=\"auth-form-light text-left py-5 px-4 px-sm-5\">\n        <div class=\"brand-logo\">\n          <img src=\"assets/images/logo.svg\" alt=\"logo\">\n        </div>\n        <h4>New here?</h4>\n        <h6 class=\"font-weight-light\">Signing up is easy. It only takes a few steps</h6>\n        <form class=\"pt-3\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control form-control-lg\" id=\"exampleInputUsername1\" placeholder=\"Username\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"email\" class=\"form-control form-control-lg\" id=\"exampleInputEmail1\" placeholder=\"Email\">\n          </div>\n          <div class=\"form-group\">\n            <select class=\"form-control form-control-lg\" id=\"exampleFormControlSelect2\">\n              <option>Country</option>\n              <option>United States of America</option>\n              <option>United Kingdom</option>\n              <option>India</option>\n              <option>Germany</option>\n              <option>Argentina</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control form-control-lg\" id=\"exampleInputPassword1\" placeholder=\"Password\">\n          </div>\n          <div class=\"mb-4\">\n            <div class=\"form-check\">\n              <label class=\"form-check-label text-muted\">\n                <input type=\"checkbox\" class=\"form-check-input\">\n                <i class=\"input-helper\"></i>\n                I agree to all Terms & Conditions\n              </label>\n            </div>\n          </div>\n          <div class=\"mt-3\">\n            <a class=\"btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn\" routerLink=\"/dashboard\">SIGN UP</a>\n          </div>\n          <div class=\"text-center mt-4 font-weight-light\">\n            Already have an account? <a routerLink=\"/login\" class=\"text-primary\">Login</a>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/user-pages/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/user-pages/login/login.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user-pages/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user-pages/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/user-pages/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/user-pages/register/register.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/user-pages/register/register.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcGFnZXMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/user-pages/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user-pages/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/user-pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/user-pages/register/register.component.scss")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user-pages/user-pages.module.ts":
/*!*************************************************!*\
  !*** ./src/app/user-pages/user-pages.module.ts ***!
  \*************************************************/
/*! exports provided: LoginComponent, UserPagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserPagesModule", function() { return UserPagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/user-pages/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/user-pages/register/register.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]; });








var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
];
var UserPagesModule = /** @class */ (function () {
    function UserPagesModule() {
    }
    UserPagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes)
            ]
        })
    ], UserPagesModule);
    return UserPagesModule;
}());



/***/ })

}]);
//# sourceMappingURL=user-pages-user-pages-module-es5.js.map