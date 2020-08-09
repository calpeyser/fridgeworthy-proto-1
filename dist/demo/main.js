(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/add-creation-thumbnail/add-creation-thumbnail.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/add-creation-thumbnail/add-creation-thumbnail.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n    <a data-toggle=\"modal\" href=\"#createCreationModal\">\r\n        <svg width=\"\" height=\"\" viewBox=\"0 0 16 16\" class=\"bi bi-cloud-upload\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\">\r\n            <path fill-rule=\"evenodd\" d=\"M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z\"/>\r\n            <path fill-rule=\"evenodd\" d=\"M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z\"/>\r\n        </svg>\r\n        <div class=\"overlay\">\r\n            <div class=\"overlay_text\">\r\n                Upload Creation\r\n            </div>\r\n        </div>\r\n    </a>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/comment-box/comment-box.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/comment-box/comment-box.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\r\n<div class=\"card\" style=\"width: 38rem;\">\r\n  <div class=\"card-body\">\r\n    <form [formGroup]=\"commentForm\" (ngSubmit)=\"onSubmit()\">\r\n      <div class=\"form-group\">\r\n        <textarea class=\"form-control\" id=\"commentContent\" placeholder=\"What do you think?\" formControlName=\"content\"></textarea>\r\n      </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n    </form>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/comment-section/comment-section.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/comment-section/comment-section.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <button (click)=\"addDummyComments()\">Add dummy comments</button>\r\n  <br>\r\n  <app-primary-comment *ngFor=\"let primaryComment of (creation | async).comments; let i = index\" \r\n    [primaryComment]=\"primaryComment\"\r\n    [primaryCommentIndex]=\"i\"\r\n    [creationId]=\"creationId\">\r\n  </app-primary-comment>\r\n  <app-comment-box (submittedComment)=\"this.commentIsSubmitted($event)\"></app-comment-box>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/connect-join/connect-join.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/connect-join/connect-join.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"visible\">\r\n  <form [formGroup]=\"joinForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"connectInputFirstName\">First Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"connectInputFirstName\" placeholder=\"John\" formControlName=\"firstName\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"connectInputLastName\">Last Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"connectInputLastName\" placeholder=\"Doe\" vformControlName=\"lastName\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"connectInputUsername\">Username</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"connectInputUsername\" placeholder=\"Username\" formControlName=\"username\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"connectInputPassword\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" id=\"connectInputPassword\" placeholder=\"Password\" formControlName=\"password\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"connectInputEmail\">Email address</label>\r\n      <input type=\"email\" class=\"form-control\" id=\"connectInputEmail\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" formControlName=\"email\">\r\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n  </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/create-creation-modal/create-creation-modal.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/create-creation-modal/create-creation-modal.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade\" id=\"createCreationModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered modal-xl\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h3 class=\"modal-title\" id=\"exampleModalLongTitle\">Add a New Creation</h3>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <app-modify-creation-form [creatorId]=\"creatorId\"></app-modify-creation-form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/creation-page/creation-page.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/creation-page/creation-page.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\r\n\r\n<div class=\"row\">\r\n    <div class=\"col-2\"></div>\r\n    <div class=\"col-8\">\r\n      <div class=\"jumbotron\" style=\"height: 500pt\">\r\n        <iframe width=\"100%\" height=\"100%\" [src]=\"creationUrl | async\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n      </div>\r\n\r\n    <h2 style=\"text-align: center\">{{(creation | async).title}}</h2>\r\n    <h3 style=\"text-align: center\"><a [routerLink]=\"['/creator', (creator | async).id]\">{{(creator | async).name}}</a></h3>\r\n    <br>\r\n    <p>{{(creation | async).description}}</p>\r\n    </div>\r\n    <div class=\"col-2\"></div>\r\n</div>\r\n<app-comment-section [creationId]=\"id\" [creation]=\"creation\"></app-comment-section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/creation-thumbnail/creation-thumbnail.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/creation-thumbnail/creation-thumbnail.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <a [routerLink]=\"['/creation', creation.id]\">\r\n      <img [src]=\"thumbnailUrl\" class=\"img-fluid\">\r\n      <div class=\"overlay\">\r\n        <div class=\"overlay_text\">\r\n          <h1>{{creation.title}}</h1>\r\n        </div>\r\n      </div>\r\n  </a>\r\n</div>\r\n\r\n<!--\r\n<div class=\"card\" style=\"width: 18rem;\">\r\n  <div class=\"card-body\">\r\n    <a [routerLink]=\"['/creation', creation.youtube_id]\">\r\n      <img [src]=\"thumbnailUrl\" class=\"img-fluid\">\r\n    </a>\r\n    <h5 class=\"card-title\">{{ creation.title }}</h5>\r\n    <p class=\"card-text\">{{ creation.creator }}</p>\r\n  </div>\r\n</div>\r\n-->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/creator-join/creator-join.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/creator-join/creator-join.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"visible\">\r\n  <form [formGroup]=\"joinForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"creatorInputFirstName\">First Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"creatorInputFirstName\" placeholder=\"John\" formControlName=\"firstName\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"creatorInputLastName\">Last Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"creatorInputLastName\" placeholder=\"Doe\" vformControlName=\"lastName\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"creatorInputUsername\">Username</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"creatorInputUsername\" placeholder=\"Username\" formControlName=\"username\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"creatorInputPassword\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" id=\"creatorInputPassword\" placeholder=\"Password\" formControlName=\"password\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"creatorInputEmail\">Email address</label>\r\n      <input type=\"email\" class=\"form-control\" id=\"creatorInputEmail\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" formControlName=\"email\">\r\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-8\">\r\n        <div class=\"form-group\">\r\n          <label for=\"creatorDescription\">Tell us a bit about yourself!</label>\r\n          <textarea class=\"form-control\" id=\"creatorDescription\" placeholder=\"\" formControlName=\"description\"></textarea>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-4\">\r\n        <div class=\"form-group\">\r\n          <label class=\"image-upload-container btn btn-bwm\">Upload Profile Image</label>\r\n          <input #imageInput type=\"file\" accept=\"image/*\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n  </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/creator-page/creator-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/creator-page/creator-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <br>\r\n  <div class=\"card text-center\" style=\"width: 80rem;\">\r\n    <div class=\"row no-gutters\">\r\n      <div class=\"col-md-4\">\r\n        <img [src]=\"(creator | async).img_path\" class=\"card-img\" alt=\"...\">\r\n      </div>\r\n      <div class=\"col-md-8\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{(creator | async).name}}</h5>\r\n          <p class=\"card-text\">{{(creator | async).bio}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <br>\r\n  <app-netflix-feed \r\n    [key]=\"(creator | async).id\"\r\n    [mode]=\"modes.BY_CREATOR\"\r\n    [carouselID]=\"10\"\r\n    [isCreatable]=true>\r\n  </app-netflix-feed>  \r\n</div>\r\n<app-create-creation-modal [creatorId]=\"(creator | async).id\"></app-create-creation-modal>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/join-modal/join-modal.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/join-modal/join-modal.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade\" id=\"{{modalId}}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-xl\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\" id=\"exampleModalLongTitle\">Our wonderful and weird community of animators and animation lovers awaits you!</h3>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <h4>What do you want to do on Fridgeworthy?</h4>\r\n        <br>\r\n        <div class=\"row\">\r\n          <div class=\"col-4 text-center\">\r\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"onDiscoverClicked()\">Discover</button>\r\n          </div>\r\n          <div class=\"col-4 text-center\">\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"onShareClicked()\">Share</button>\r\n          </div>\r\n          <div class=\"col-4 text-center\">\r\n            <button type=\"button\" class=\"btn btn-danger\" (click)=\"onConnectClicked()\">Connect</button>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <app-viewer-join [visible]=\"selectedForm == forms.DISCOVER\"></app-viewer-join>\r\n        <app-creator-join [visible]=\"selectedForm == forms.SHARE\"></app-creator-join>\r\n        <app-connect-join [visible]=\"selectedForm == forms.CONNECT\"></app-connect-join>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/landing-page/landing-page.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/landing-page/landing-page.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container overflow-auto\">\r\n  <div *ngFor=\"let category of categories.values(); let i = index\">\r\n    <h2>{{category.valueOf()}}</h2>\r\n    <br>\r\n    <app-netflix-feed\r\n      [key]=\"category.valueOf()\"\r\n      [carouselID]=\"i+1\"\r\n      [mode]=\"modes.BY_CATEGORY\">\r\n    </app-netflix-feed>\r\n    <br>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/login-form/login-form.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/login-form/login-form.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"form-group\">\r\n    <label for=\"loginUsername\">First Name</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"viewerInputFirstName\" placeholder=\"John\" formControlName=\"firstName\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"viewerInputPassword\">Password</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"viewerInputPassword\" placeholder=\"Password\" formControlName=\"password\">\r\n  </div>\r\n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/login-modal/login-modal.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/login-modal/login-modal.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade\" id=\"{{modalId}}\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered modal-xl\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h3 class=\"modal-title\" id=\"exampleModalLongTitle\">Login</h3>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <app-login-form></app-login-form>\r\n        <div class=\"text-center\">\r\n          <a href=\"/\">Forgot Username</a> | <a href=\"/\">Forgot Password</a>\r\n          <br>\r\n          New to FridgeWorthy? <button data-toggle=\"modal\" data-dismiss=\"modal\" data-target=\"#joinModal\">Join!</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modify-creation-form/modify-creation-form.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modify-creation-form/modify-creation-form.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"creationForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"viewerInputCreationTitle\">Creation Title</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"viewerInputCreationTitle\" placeholder=\"\" formControlName=\"title\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"viewerInputYoutubeLink\">Youtube Link</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"viewerInputYoutubeLink\" placeholder=\"\" formControlName=\"youtubeLink\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"viewerInputCategory\">Category</label>\r\n      <select class=\"custom-select\" formControlName=\"category\">\r\n        <option *ngFor=\"let category of categories.values()\" [ngValue]=\"category\">{{category}}</option>\r\n     </select>  \r\n    </div>\r\n    \r\n    <div class=\"form-group\">\r\n        <label for=\"viewerInputDescription\">Description</label>\r\n        <textarea class=\"form-control\" id=\"viewerInputDescription\" placeholder=\"\" formControlName=\"description\"></textarea>\r\n      </div>\r\n  <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n  </form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/navbar/navbar.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/navbar/navbar.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" routerLink=\"\">Fridgeworthy</a>\r\n\r\n    <button class=\"btn btn-outline-success my-2 my-sm-0 ml-auto\" type=\"submit\" data-toggle=\"modal\" data-target=\"#joinModal\">Join</button>\r\n    <button class=\"btn btn-outline-info my-2 my-sm-0 ml-3\" type=\"submit\" data-toggle=\"modal\" data-target=\"#loginModal\">Login</button>\r\n</nav>\r\n<app-join-modal [modalId]=\"'joinModal'\"></app-join-modal>\r\n<app-login-modal [modalId]=\"'loginModal'\"></app-login-modal>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/netflix-feed/netflix-feed.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/netflix-feed/netflix-feed.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"carousel_{{carouselID}}\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <div class=\"carousel-inner\">\r\n    <div class=\"container\">\r\n      <div\r\n        class=\"{{i == 0 ? 'carousel-item active' : 'carousel-item'}}\"\r\n        *ngFor=\"let creationSection of (getSectionsWithKey(key) | async); let i = index\">\r\n        <div class=\"row\">\r\n          <app-add-creation-thumbnail\r\n            class=\"col-3\"\r\n            *ngIf=\"isCreatable && i==0\">\r\n          </app-add-creation-thumbnail>\r\n          <app-creation-thumbnail\r\n            class=\"col-3\"\r\n            [creation]=\"creation\"\r\n            *ngFor=\"let creation of creationSection.creations\">\r\n          </app-creation-thumbnail>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <a class=\"carousel-control-prev\" href=\"#carousel_{{carouselID}}\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"carousel-control-next\" href=\"#carousel_{{carouselID}}\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/primary-comment/primary-comment.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/primary-comment/primary-comment.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\r\n<div class=\"card\" style=\"width: 38rem;\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">{{primaryComment.comment.author}}</h5>\r\n    <p class=\"card-text\">{{primaryComment.comment.content}}</p>\r\n    <div class=\"row\">\r\n      <div class=\"col-10\">\r\n      </div>\r\n      <div class=\"col-2\">\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"onReplyButtonClicked()\">Reply</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-secondary-comment *ngFor=\"let reply of primaryComment.replies\" [comment]=\"reply\"></app-secondary-comment>\r\n<div class=\"row\">\r\n  <div class=\"col-2\">\r\n  </div>\r\n  <div class=\"col-10\">\r\n    <app-comment-box *ngIf=\"replyButtonClicked\" (submittedComment)=\"this.commentIsSubmitted($event)\"></app-comment-box>\r\n  </div>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/secondary-comment/secondary-comment.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/secondary-comment/secondary-comment.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\r\n<div class=\"row\">\r\n  <div class=\"col-2\">\r\n  </div>\r\n  <div class=\"col-10\">\r\n    <div class=\"card\" style=\"width: 27rem;\">\r\n      <div class=\"card-body\">\r\n        <h5 class=\"card-title\">{{comment.author}}</h5>\r\n        <p class=\"card-text\">{{comment.content}}</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/topics-bar/topics-bar.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/topics-bar/topics-bar.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-dark\">\r\n      <button (click)=\"selectCategory('')\" class=\"btn btn-outline-success my-2 my-sm-0 mr-4\" type=\"submit\">All Categories</button>\r\n      <button (click)=\"selectCategory('Category 1')\" class=\"btn btn-outline-success my-2 my-sm-0 mr-4\" type=\"submit\">Category 1</button>\r\n      <button (click)=\"selectCategory('Category 2')\" class=\"btn btn-outline-success my-2 my-sm-0 mr-4\" type=\"submit\">Category 2</button>\r\n      <button (click)=\"selectCategory('Category 3')\" class=\"btn btn-outline-success my-2 my-sm-0 mr-4\" type=\"submit\">Category 3</button>\r\n      <button (click)=\"selectCategory('Category 4')\" class=\"btn btn-outline-success my-2 my-sm-0 mr-4\" type=\"submit\">Category 4</button>\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/viewer-join/viewer-join.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/viewer-join/viewer-join.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"visible\">\r\n  <form [formGroup]=\"joinForm\" (ngSubmit)=\"onSubmit()\">\r\n    <div class=\"form-group\">\r\n      <label for=\"viewerInputFirstName\">First Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"viewerInputFirstName\" placeholder=\"John\" formControlName=\"firstName\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"viewerInputLastName\">Last Name</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"viewerInputLastName\" placeholder=\"Doe\" vformControlName=\"lastName\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"viewerInputUsername\">Username</label>\r\n      <input type=\"text\" class=\"form-control\" id=\"viewerInputUsername\" placeholder=\"Username\" formControlName=\"username\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"viewerInputPassword\">Password</label>\r\n      <input type=\"password\" class=\"form-control\" id=\"viewerInputPassword\" placeholder=\"Password\" formControlName=\"password\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"viewerInputEmail\">Email address</label>\r\n      <input type=\"email\" class=\"form-control\" id=\"viewerInputEmail\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\" formControlName=\"email\">\r\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\r\n  </form>\r\n</div>");

/***/ }),

/***/ "./node_modules/zone.js/dist/zone.js":
/*!*******************************************!*\
  !*** ./node_modules/zone.js/dist/zone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
* @license Angular v9.1.0-next.4+61.sha-e552591.with-local-changes
* (c) 2010-2020 Google LLC. https://angular.io/
* License: MIT
*/
(function (factory) {
   true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(function () {
  'use strict';
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */

  var Zone$1 = function (global) {
    var performance = global['performance'];

    function mark(name) {
      performance && performance['mark'] && performance['mark'](name);
    }

    function performanceMeasure(name, label) {
      performance && performance['measure'] && performance['measure'](name, label);
    }

    mark('Zone'); // Initialize before it's accessed below.
    // __Zone_symbol_prefix global can be used to override the default zone
    // symbol prefix with a custom one if needed.

    var symbolPrefix = global['__Zone_symbol_prefix'] || '__zone_symbol__';

    function __symbol__(name) {
      return symbolPrefix + name;
    }

    var checkDuplicate = global[__symbol__('forceDuplicateZoneCheck')] === true;

    if (global['Zone']) {
      // if global['Zone'] already exists (maybe zone.js was already loaded or
      // some other lib also registered a global object named Zone), we may need
      // to throw an error, but sometimes user may not want this error.
      // For example,
      // we have two web pages, page1 includes zone.js, page2 doesn't.
      // and the 1st time user load page1 and page2, everything work fine,
      // but when user load page2 again, error occurs because global['Zone'] already exists.
      // so we add a flag to let user choose whether to throw this error or not.
      // By default, if existing Zone is from zone.js, we will not throw the error.
      if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
        throw new Error('Zone already loaded.');
      } else {
        return global['Zone'];
      }
    }

    var Zone =
    /** @class */
    function () {
      function Zone(parent, zoneSpec) {
        this._parent = parent;
        this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
        this._properties = zoneSpec && zoneSpec.properties || {};
        this._zoneDelegate = new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
      }

      Zone.assertZonePatched = function () {
        if (global['Promise'] !== patches['ZoneAwarePromise']) {
          throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' + 'has been overwritten.\n' + 'Most likely cause is that a Promise polyfill has been loaded ' + 'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' + 'If you must load one, do so before loading zone.js.)');
        }
      };

      Object.defineProperty(Zone, "root", {
        get: function get() {
          var zone = Zone.current;

          while (zone.parent) {
            zone = zone.parent;
          }

          return zone;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Zone, "current", {
        get: function get() {
          return _currentZoneFrame.zone;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Zone, "currentTask", {
        get: function get() {
          return _currentTask;
        },
        enumerable: true,
        configurable: true
      }); // tslint:disable-next-line:require-internal-with-underscore

      Zone.__load_patch = function (name, fn) {
        if (patches.hasOwnProperty(name)) {
          if (checkDuplicate) {
            throw Error('Already loaded patch: ' + name);
          }
        } else if (!global['__Zone_disable_' + name]) {
          var perfName = 'Zone:' + name;
          mark(perfName);
          patches[name] = fn(global, Zone, _api);
          performanceMeasure(perfName, perfName);
        }
      };

      Object.defineProperty(Zone.prototype, "parent", {
        get: function get() {
          return this._parent;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(Zone.prototype, "name", {
        get: function get() {
          return this._name;
        },
        enumerable: true,
        configurable: true
      });

      Zone.prototype.get = function (key) {
        var zone = this.getZoneWith(key);
        if (zone) return zone._properties[key];
      };

      Zone.prototype.getZoneWith = function (key) {
        var current = this;

        while (current) {
          if (current._properties.hasOwnProperty(key)) {
            return current;
          }

          current = current._parent;
        }

        return null;
      };

      Zone.prototype.fork = function (zoneSpec) {
        if (!zoneSpec) throw new Error('ZoneSpec required!');
        return this._zoneDelegate.fork(this, zoneSpec);
      };

      Zone.prototype.wrap = function (callback, source) {
        if (typeof callback !== 'function') {
          throw new Error('Expecting function got: ' + callback);
        }

        var _callback = this._zoneDelegate.intercept(this, callback, source);

        var zone = this;
        return function () {
          return zone.runGuarded(_callback, this, arguments, source);
        };
      };

      Zone.prototype.run = function (callback, applyThis, applyArgs, source) {
        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };

        try {
          return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
        } finally {
          _currentZoneFrame = _currentZoneFrame.parent;
        }
      };

      Zone.prototype.runGuarded = function (callback, applyThis, applyArgs, source) {
        if (applyThis === void 0) {
          applyThis = null;
        }

        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };

        try {
          try {
            return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
          } catch (error) {
            if (this._zoneDelegate.handleError(this, error)) {
              throw error;
            }
          }
        } finally {
          _currentZoneFrame = _currentZoneFrame.parent;
        }
      };

      Zone.prototype.runTask = function (task, applyThis, applyArgs) {
        if (task.zone != this) {
          throw new Error('A task can only be run in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
        } // https://github.com/angular/zone.js/issues/778, sometimes eventTask
        // will run in notScheduled(canceled) state, we should not try to
        // run such kind of task but just return


        if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
          return;
        }

        var reEntryGuard = task.state != running;
        reEntryGuard && task._transitionTo(running, scheduled);
        task.runCount++;
        var previousTask = _currentTask;
        _currentTask = task;
        _currentZoneFrame = {
          parent: _currentZoneFrame,
          zone: this
        };

        try {
          if (task.type == macroTask && task.data && !task.data.isPeriodic) {
            task.cancelFn = undefined;
          }

          try {
            return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
          } catch (error) {
            if (this._zoneDelegate.handleError(this, error)) {
              throw error;
            }
          }
        } finally {
          // if the task's state is notScheduled or unknown, then it has already been cancelled
          // we should not reset the state to scheduled
          if (task.state !== notScheduled && task.state !== unknown) {
            if (task.type == eventTask || task.data && task.data.isPeriodic) {
              reEntryGuard && task._transitionTo(scheduled, running);
            } else {
              task.runCount = 0;

              this._updateTaskCount(task, -1);

              reEntryGuard && task._transitionTo(notScheduled, running, notScheduled);
            }
          }

          _currentZoneFrame = _currentZoneFrame.parent;
          _currentTask = previousTask;
        }
      };

      Zone.prototype.scheduleTask = function (task) {
        if (task.zone && task.zone !== this) {
          // check if the task was rescheduled, the newZone
          // should not be the children of the original zone
          var newZone = this;

          while (newZone) {
            if (newZone === task.zone) {
              throw Error("can not reschedule task to " + this.name + " which is descendants of the original zone " + task.zone.name);
            }

            newZone = newZone.parent;
          }
        }

        task._transitionTo(scheduling, notScheduled);

        var zoneDelegates = [];
        task._zoneDelegates = zoneDelegates;
        task._zone = this;

        try {
          task = this._zoneDelegate.scheduleTask(this, task);
        } catch (err) {
          // should set task's state to unknown when scheduleTask throw error
          // because the err may from reschedule, so the fromState maybe notScheduled
          task._transitionTo(unknown, scheduling, notScheduled); // TODO: @JiaLiPassion, should we check the result from handleError?


          this._zoneDelegate.handleError(this, err);

          throw err;
        }

        if (task._zoneDelegates === zoneDelegates) {
          // we have to check because internally the delegate can reschedule the task.
          this._updateTaskCount(task, 1);
        }

        if (task.state == scheduling) {
          task._transitionTo(scheduled, scheduling);
        }

        return task;
      };

      Zone.prototype.scheduleMicroTask = function (source, callback, data, customSchedule) {
        return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
      };

      Zone.prototype.scheduleMacroTask = function (source, callback, data, customSchedule, customCancel) {
        return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
      };

      Zone.prototype.scheduleEventTask = function (source, callback, data, customSchedule, customCancel) {
        return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
      };

      Zone.prototype.cancelTask = function (task) {
        if (task.zone != this) throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' + (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');

        task._transitionTo(canceling, scheduled, running);

        try {
          this._zoneDelegate.cancelTask(this, task);
        } catch (err) {
          // if error occurs when cancelTask, transit the state to unknown
          task._transitionTo(unknown, canceling);

          this._zoneDelegate.handleError(this, err);

          throw err;
        }

        this._updateTaskCount(task, -1);

        task._transitionTo(notScheduled, canceling);

        task.runCount = 0;
        return task;
      };

      Zone.prototype._updateTaskCount = function (task, count) {
        var zoneDelegates = task._zoneDelegates;

        if (count == -1) {
          task._zoneDelegates = null;
        }

        for (var i = 0; i < zoneDelegates.length; i++) {
          zoneDelegates[i]._updateTaskCount(task.type, count);
        }
      };

      return Zone;
    }(); // tslint:disable-next-line:require-internal-with-underscore


    Zone.__symbol__ = __symbol__;
    var DELEGATE_ZS = {
      name: '',
      onHasTask: function onHasTask(delegate, _, target, hasTaskState) {
        return delegate.hasTask(target, hasTaskState);
      },
      onScheduleTask: function onScheduleTask(delegate, _, target, task) {
        return delegate.scheduleTask(target, task);
      },
      onInvokeTask: function onInvokeTask(delegate, _, target, task, applyThis, applyArgs) {
        return delegate.invokeTask(target, task, applyThis, applyArgs);
      },
      onCancelTask: function onCancelTask(delegate, _, target, task) {
        return delegate.cancelTask(target, task);
      }
    };

    var ZoneDelegate =
    /** @class */
    function () {
      function ZoneDelegate(zone, parentDelegate, zoneSpec) {
        this._taskCounts = {
          'microTask': 0,
          'macroTask': 0,
          'eventTask': 0
        };
        this.zone = zone;
        this._parentDelegate = parentDelegate;
        this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
        this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
        this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate._forkCurrZone);
        this._interceptZS = zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
        this._interceptDlgt = zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
        this._interceptCurrZone = zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate._interceptCurrZone);
        this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
        this._invokeDlgt = zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
        this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate._invokeCurrZone);
        this._handleErrorZS = zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
        this._handleErrorDlgt = zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
        this._handleErrorCurrZone = zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate._handleErrorCurrZone);
        this._scheduleTaskZS = zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
        this._scheduleTaskDlgt = zoneSpec && (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
        this._scheduleTaskCurrZone = zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate._scheduleTaskCurrZone);
        this._invokeTaskZS = zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
        this._invokeTaskDlgt = zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
        this._invokeTaskCurrZone = zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate._invokeTaskCurrZone);
        this._cancelTaskZS = zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
        this._cancelTaskDlgt = zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
        this._cancelTaskCurrZone = zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate._cancelTaskCurrZone);
        this._hasTaskZS = null;
        this._hasTaskDlgt = null;
        this._hasTaskDlgtOwner = null;
        this._hasTaskCurrZone = null;
        var zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
        var parentHasTask = parentDelegate && parentDelegate._hasTaskZS;

        if (zoneSpecHasTask || parentHasTask) {
          // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
          // a case all task related interceptors must go through this ZD. We can't short circuit it.
          this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
          this._hasTaskDlgt = parentDelegate;
          this._hasTaskDlgtOwner = this;
          this._hasTaskCurrZone = zone;

          if (!zoneSpec.onScheduleTask) {
            this._scheduleTaskZS = DELEGATE_ZS;
            this._scheduleTaskDlgt = parentDelegate;
            this._scheduleTaskCurrZone = this.zone;
          }

          if (!zoneSpec.onInvokeTask) {
            this._invokeTaskZS = DELEGATE_ZS;
            this._invokeTaskDlgt = parentDelegate;
            this._invokeTaskCurrZone = this.zone;
          }

          if (!zoneSpec.onCancelTask) {
            this._cancelTaskZS = DELEGATE_ZS;
            this._cancelTaskDlgt = parentDelegate;
            this._cancelTaskCurrZone = this.zone;
          }
        }
      }

      ZoneDelegate.prototype.fork = function (targetZone, zoneSpec) {
        return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) : new Zone(targetZone, zoneSpec);
      };

      ZoneDelegate.prototype.intercept = function (targetZone, callback, source) {
        return this._interceptZS ? this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) : callback;
      };

      ZoneDelegate.prototype.invoke = function (targetZone, callback, applyThis, applyArgs, source) {
        return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) : callback.apply(applyThis, applyArgs);
      };

      ZoneDelegate.prototype.handleError = function (targetZone, error) {
        return this._handleErrorZS ? this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) : true;
      };

      ZoneDelegate.prototype.scheduleTask = function (targetZone, task) {
        var returnTask = task;

        if (this._scheduleTaskZS) {
          if (this._hasTaskZS) {
            returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
          } // clang-format off


          returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task); // clang-format on

          if (!returnTask) returnTask = task;
        } else {
          if (task.scheduleFn) {
            task.scheduleFn(task);
          } else if (task.type == microTask) {
            scheduleMicroTask(task);
          } else {
            throw new Error('Task is missing scheduleFn.');
          }
        }

        return returnTask;
      };

      ZoneDelegate.prototype.invokeTask = function (targetZone, task, applyThis, applyArgs) {
        return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) : task.callback.apply(applyThis, applyArgs);
      };

      ZoneDelegate.prototype.cancelTask = function (targetZone, task) {
        var value;

        if (this._cancelTaskZS) {
          value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
        } else {
          if (!task.cancelFn) {
            throw Error('Task is not cancelable');
          }

          value = task.cancelFn(task);
        }

        return value;
      };

      ZoneDelegate.prototype.hasTask = function (targetZone, isEmpty) {
        // hasTask should not throw error so other ZoneDelegate
        // can still trigger hasTask callback
        try {
          this._hasTaskZS && this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
        } catch (err) {
          this.handleError(targetZone, err);
        }
      }; // tslint:disable-next-line:require-internal-with-underscore


      ZoneDelegate.prototype._updateTaskCount = function (type, count) {
        var counts = this._taskCounts;
        var prev = counts[type];
        var next = counts[type] = prev + count;

        if (next < 0) {
          throw new Error('More tasks executed then were scheduled.');
        }

        if (prev == 0 || next == 0) {
          var isEmpty = {
            microTask: counts['microTask'] > 0,
            macroTask: counts['macroTask'] > 0,
            eventTask: counts['eventTask'] > 0,
            change: type
          };
          this.hasTask(this.zone, isEmpty);
        }
      };

      return ZoneDelegate;
    }();

    var ZoneTask =
    /** @class */
    function () {
      function ZoneTask(type, source, callback, options, scheduleFn, cancelFn) {
        // tslint:disable-next-line:require-internal-with-underscore
        this._zone = null;
        this.runCount = 0; // tslint:disable-next-line:require-internal-with-underscore

        this._zoneDelegates = null; // tslint:disable-next-line:require-internal-with-underscore

        this._state = 'notScheduled';
        this.type = type;
        this.source = source;
        this.data = options;
        this.scheduleFn = scheduleFn;
        this.cancelFn = cancelFn;

        if (!callback) {
          throw new Error('callback is not defined');
        }

        this.callback = callback;
        var self = this; // TODO: @JiaLiPassion options should have interface

        if (type === eventTask && options && options.useG) {
          this.invoke = ZoneTask.invokeTask;
        } else {
          this.invoke = function () {
            return ZoneTask.invokeTask.call(global, self, this, arguments);
          };
        }
      }

      ZoneTask.invokeTask = function (task, target, args) {
        if (!task) {
          task = this;
        }

        _numberOfNestedTaskFrames++;

        try {
          task.runCount++;
          return task.zone.runTask(task, target, args);
        } finally {
          if (_numberOfNestedTaskFrames == 1) {
            drainMicroTaskQueue();
          }

          _numberOfNestedTaskFrames--;
        }
      };

      Object.defineProperty(ZoneTask.prototype, "zone", {
        get: function get() {
          return this._zone;
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(ZoneTask.prototype, "state", {
        get: function get() {
          return this._state;
        },
        enumerable: true,
        configurable: true
      });

      ZoneTask.prototype.cancelScheduleRequest = function () {
        this._transitionTo(notScheduled, scheduling);
      }; // tslint:disable-next-line:require-internal-with-underscore


      ZoneTask.prototype._transitionTo = function (toState, fromState1, fromState2) {
        if (this._state === fromState1 || this._state === fromState2) {
          this._state = toState;

          if (toState == notScheduled) {
            this._zoneDelegates = null;
          }
        } else {
          throw new Error(this.type + " '" + this.source + "': can not transition to '" + toState + "', expecting state '" + fromState1 + "'" + (fromState2 ? ' or \'' + fromState2 + '\'' : '') + ", was '" + this._state + "'.");
        }
      };

      ZoneTask.prototype.toString = function () {
        if (this.data && typeof this.data.handleId !== 'undefined') {
          return this.data.handleId.toString();
        } else {
          return Object.prototype.toString.call(this);
        }
      }; // add toJSON method to prevent cyclic error when
      // call JSON.stringify(zoneTask)


      ZoneTask.prototype.toJSON = function () {
        return {
          type: this.type,
          state: this.state,
          source: this.source,
          zone: this.zone.name,
          runCount: this.runCount
        };
      };

      return ZoneTask;
    }(); //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////


    var symbolSetTimeout = __symbol__('setTimeout');

    var symbolPromise = __symbol__('Promise');

    var symbolThen = __symbol__('then');

    var _microTaskQueue = [];
    var _isDrainingMicrotaskQueue = false;
    var nativeMicroTaskQueuePromise;

    function scheduleMicroTask(task) {
      // if we are not running in any task, and there has not been anything scheduled
      // we must bootstrap the initial task creation by manually scheduling the drain
      if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
        // We are not running in Task, so we need to kickstart the microtask queue.
        if (!nativeMicroTaskQueuePromise) {
          if (global[symbolPromise]) {
            nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
          }
        }

        if (nativeMicroTaskQueuePromise) {
          var nativeThen = nativeMicroTaskQueuePromise[symbolThen];

          if (!nativeThen) {
            // native Promise is not patchable, we need to use `then` directly
            // issue 1078
            nativeThen = nativeMicroTaskQueuePromise['then'];
          }

          nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
        } else {
          global[symbolSetTimeout](drainMicroTaskQueue, 0);
        }
      }

      task && _microTaskQueue.push(task);
    }

    function drainMicroTaskQueue() {
      if (!_isDrainingMicrotaskQueue) {
        _isDrainingMicrotaskQueue = true;

        while (_microTaskQueue.length) {
          var queue = _microTaskQueue;
          _microTaskQueue = [];

          for (var i = 0; i < queue.length; i++) {
            var task = queue[i];

            try {
              task.zone.runTask(task, null, null);
            } catch (error) {
              _api.onUnhandledError(error);
            }
          }
        }

        _api.microtaskDrainDone();

        _isDrainingMicrotaskQueue = false;
      }
    } //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////


    var NO_ZONE = {
      name: 'NO ZONE'
    };
    var notScheduled = 'notScheduled',
        scheduling = 'scheduling',
        scheduled = 'scheduled',
        running = 'running',
        canceling = 'canceling',
        unknown = 'unknown';
    var microTask = 'microTask',
        macroTask = 'macroTask',
        eventTask = 'eventTask';
    var patches = {};
    var _api = {
      symbol: __symbol__,
      currentZoneFrame: function currentZoneFrame() {
        return _currentZoneFrame;
      },
      onUnhandledError: noop,
      microtaskDrainDone: noop,
      scheduleMicroTask: scheduleMicroTask,
      showUncaughtError: function showUncaughtError() {
        return !Zone[__symbol__('ignoreConsoleErrorUncaughtError')];
      },
      patchEventTarget: function patchEventTarget() {
        return [];
      },
      patchOnProperties: noop,
      patchMethod: function patchMethod() {
        return noop;
      },
      bindArguments: function bindArguments() {
        return [];
      },
      patchThen: function patchThen() {
        return noop;
      },
      patchMacroTask: function patchMacroTask() {
        return noop;
      },
      setNativePromise: function setNativePromise(NativePromise) {
        // sometimes NativePromise.resolve static function
        // is not ready yet, (such as core-js/es6.promise)
        // so we need to check here.
        if (NativePromise && typeof NativePromise.resolve === 'function') {
          nativeMicroTaskQueuePromise = NativePromise.resolve(0);
        }
      },
      patchEventPrototype: function patchEventPrototype() {
        return noop;
      },
      isIEOrEdge: function isIEOrEdge() {
        return false;
      },
      getGlobalObjects: function getGlobalObjects() {
        return undefined;
      },
      ObjectDefineProperty: function ObjectDefineProperty() {
        return noop;
      },
      ObjectGetOwnPropertyDescriptor: function ObjectGetOwnPropertyDescriptor() {
        return undefined;
      },
      ObjectCreate: function ObjectCreate() {
        return undefined;
      },
      ArraySlice: function ArraySlice() {
        return [];
      },
      patchClass: function patchClass() {
        return noop;
      },
      wrapWithCurrentZone: function wrapWithCurrentZone() {
        return noop;
      },
      filterProperties: function filterProperties() {
        return [];
      },
      attachOriginToPatched: function attachOriginToPatched() {
        return noop;
      },
      _redefineProperty: function _redefineProperty() {
        return noop;
      },
      patchCallbacks: function patchCallbacks() {
        return noop;
      }
    };
    var _currentZoneFrame = {
      parent: null,
      zone: new Zone(null, null)
    };
    var _currentTask = null;
    var _numberOfNestedTaskFrames = 0;

    function noop() {}

    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
  }(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  Zone.__load_patch('ZoneAwarePromise', function (global, Zone, api) {
    var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var ObjectDefineProperty = Object.defineProperty;

    function readableObjectToString(obj) {
      if (obj && obj.toString === Object.prototype.toString) {
        var className = obj.constructor && obj.constructor.name;
        return (className ? className : '') + ': ' + JSON.stringify(obj);
      }

      return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }

    var __symbol__ = api.symbol;
    var _uncaughtPromiseErrors = [];
    var isDisableWrappingUncaughtPromiseRejection = global[__symbol__('DISABLE_WRAPPING_UNCAUGHT_PROMISE_REJECTION')] === true;

    var symbolPromise = __symbol__('Promise');

    var symbolThen = __symbol__('then');

    var creationTrace = '__creationTrace__';

    api.onUnhandledError = function (e) {
      if (api.showUncaughtError()) {
        var rejection = e && e.rejection;

        if (rejection) {
          console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
        } else {
          console.error(e);
        }
      }
    };

    api.microtaskDrainDone = function () {
      var _loop_1 = function _loop_1() {
        var uncaughtPromiseError = _uncaughtPromiseErrors.shift();

        try {
          uncaughtPromiseError.zone.runGuarded(function () {
            throw uncaughtPromiseError;
          });
        } catch (error) {
          handleUnhandledRejection(error);
        }
      };

      while (_uncaughtPromiseErrors.length) {
        _loop_1();
      }
    };

    var UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');

    function handleUnhandledRejection(e) {
      api.onUnhandledError(e);

      try {
        var handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];

        if (typeof handler === 'function') {
          handler.call(this, e);
        }
      } catch (err) {}
    }

    function isThenable(value) {
      return value && value.then;
    }

    function forwardResolution(value) {
      return value;
    }

    function forwardRejection(rejection) {
      return ZoneAwarePromise.reject(rejection);
    }

    var symbolState = __symbol__('state');

    var symbolValue = __symbol__('value');

    var symbolFinally = __symbol__('finally');

    var symbolParentPromiseValue = __symbol__('parentPromiseValue');

    var symbolParentPromiseState = __symbol__('parentPromiseState');

    var source = 'Promise.then';
    var UNRESOLVED = null;
    var RESOLVED = true;
    var REJECTED = false;
    var REJECTED_NO_CATCH = 0;

    function makeResolver(promise, state) {
      return function (v) {
        try {
          resolvePromise(promise, state, v);
        } catch (err) {
          resolvePromise(promise, false, err);
        } // Do not return value or you will break the Promise spec.

      };
    }

    var once = function once() {
      var wasCalled = false;
      return function wrapper(wrappedFunction) {
        return function () {
          if (wasCalled) {
            return;
          }

          wasCalled = true;
          wrappedFunction.apply(null, arguments);
        };
      };
    };

    var TYPE_ERROR = 'Promise resolved with itself';

    var CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace'); // Promise Resolution


    function resolvePromise(promise, state, value) {
      var onceWrapper = once();

      if (promise === value) {
        throw new TypeError(TYPE_ERROR);
      }

      if (promise[symbolState] === UNRESOLVED) {
        // should only get value.then once based on promise spec.
        var then = null;

        try {
          if (typeof value === 'object' || typeof value === 'function') {
            then = value && value.then;
          }
        } catch (err) {
          onceWrapper(function () {
            resolvePromise(promise, false, err);
          })();
          return promise;
        } // if (value instanceof ZoneAwarePromise) {


        if (state !== REJECTED && value instanceof ZoneAwarePromise && value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) && value[symbolState] !== UNRESOLVED) {
          clearRejectedNoCatch(value);
          resolvePromise(promise, value[symbolState], value[symbolValue]);
        } else if (state !== REJECTED && typeof then === 'function') {
          try {
            then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
          } catch (err) {
            onceWrapper(function () {
              resolvePromise(promise, false, err);
            })();
          }
        } else {
          promise[symbolState] = state;
          var queue = promise[symbolValue];
          promise[symbolValue] = value;

          if (promise[symbolFinally] === symbolFinally) {
            // the promise is generated by Promise.prototype.finally
            if (state === RESOLVED) {
              // the state is resolved, should ignore the value
              // and use parent promise value
              promise[symbolState] = promise[symbolParentPromiseState];
              promise[symbolValue] = promise[symbolParentPromiseValue];
            }
          } // record task information in value when error occurs, so we can
          // do some additional work such as render longStackTrace


          if (state === REJECTED && value instanceof Error) {
            // check if longStackTraceZone is here
            var trace = Zone.currentTask && Zone.currentTask.data && Zone.currentTask.data[creationTrace];

            if (trace) {
              // only keep the long stack trace into error when in longStackTraceZone
              ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, {
                configurable: true,
                enumerable: false,
                writable: true,
                value: trace
              });
            }
          }

          for (var i = 0; i < queue.length;) {
            scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
          }

          if (queue.length == 0 && state == REJECTED) {
            promise[symbolState] = REJECTED_NO_CATCH;
            var uncaughtPromiseError = value;

            if (!isDisableWrappingUncaughtPromiseRejection) {
              // If disable wrapping uncaught promise reject
              // and the rejected value is an Error object,
              // use the value instead of wrapping it.
              try {
                // Here we throws a new Error to print more readable error log
                // and if the value is not an error, zone.js builds an `Error`
                // Object here to attach the stack information.
                throw new Error('Uncaught (in promise): ' + readableObjectToString(value) + (value && value.stack ? '\n' + value.stack : ''));
              } catch (err) {
                uncaughtPromiseError = err;
              }
            }

            uncaughtPromiseError.rejection = value;
            uncaughtPromiseError.promise = promise;
            uncaughtPromiseError.zone = Zone.current;
            uncaughtPromiseError.task = Zone.currentTask;

            _uncaughtPromiseErrors.push(uncaughtPromiseError);

            api.scheduleMicroTask(); // to make sure that it is running
          }
        }
      } // Resolving an already resolved promise is a noop.


      return promise;
    }

    var REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');

    function clearRejectedNoCatch(promise) {
      if (promise[symbolState] === REJECTED_NO_CATCH) {
        // if the promise is rejected no catch status
        // and queue.length > 0, means there is a error handler
        // here to handle the rejected promise, we should trigger
        // windows.rejectionhandled eventHandler or nodejs rejectionHandled
        // eventHandler
        try {
          var handler = Zone[REJECTION_HANDLED_HANDLER];

          if (handler && typeof handler === 'function') {
            handler.call(this, {
              rejection: promise[symbolValue],
              promise: promise
            });
          }
        } catch (err) {}

        promise[symbolState] = REJECTED;

        for (var i = 0; i < _uncaughtPromiseErrors.length; i++) {
          if (promise === _uncaughtPromiseErrors[i].promise) {
            _uncaughtPromiseErrors.splice(i, 1);
          }
        }
      }
    }

    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
      clearRejectedNoCatch(promise);
      var promiseState = promise[symbolState];
      var delegate = promiseState ? typeof onFulfilled === 'function' ? onFulfilled : forwardResolution : typeof onRejected === 'function' ? onRejected : forwardRejection;
      zone.scheduleMicroTask(source, function () {
        try {
          var parentPromiseValue = promise[symbolValue];
          var isFinallyPromise = !!chainPromise && symbolFinally === chainPromise[symbolFinally];

          if (isFinallyPromise) {
            // if the promise is generated from finally call, keep parent promise's state and value
            chainPromise[symbolParentPromiseValue] = parentPromiseValue;
            chainPromise[symbolParentPromiseState] = promiseState;
          } // should not pass value to finally callback


          var value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ? [] : [parentPromiseValue]);
          resolvePromise(chainPromise, true, value);
        } catch (error) {
          // if error occurs, should always return this error
          resolvePromise(chainPromise, false, error);
        }
      }, chainPromise);
    }

    var ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';

    var noop = function noop() {};

    var ZoneAwarePromise =
    /** @class */
    function () {
      function ZoneAwarePromise(executor) {
        var promise = this;

        if (!(promise instanceof ZoneAwarePromise)) {
          throw new Error('Must be an instanceof Promise.');
        }

        promise[symbolState] = UNRESOLVED;
        promise[symbolValue] = []; // queue;

        try {
          executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
        } catch (error) {
          resolvePromise(promise, false, error);
        }
      }

      ZoneAwarePromise.toString = function () {
        return ZONE_AWARE_PROMISE_TO_STRING;
      };

      ZoneAwarePromise.resolve = function (value) {
        return resolvePromise(new this(null), RESOLVED, value);
      };

      ZoneAwarePromise.reject = function (error) {
        return resolvePromise(new this(null), REJECTED, error);
      };

      ZoneAwarePromise.race = function (values) {
        var resolve;
        var reject;
        var promise = new this(function (res, rej) {
          resolve = res;
          reject = rej;
        });

        function onResolve(value) {
          resolve(value);
        }

        function onReject(error) {
          reject(error);
        }

        for (var _i = 0, values_1 = values; _i < values_1.length; _i++) {
          var value = values_1[_i];

          if (!isThenable(value)) {
            value = this.resolve(value);
          }

          value.then(onResolve, onReject);
        }

        return promise;
      };

      ZoneAwarePromise.all = function (values) {
        return ZoneAwarePromise.allWithCallback(values);
      };

      ZoneAwarePromise.allSettled = function (values) {
        var P = this && this.prototype instanceof ZoneAwarePromise ? this : ZoneAwarePromise;
        return P.allWithCallback(values, {
          thenCallback: function thenCallback(value) {
            return {
              status: 'fulfilled',
              value: value
            };
          },
          errorCallback: function errorCallback(err) {
            return {
              status: 'rejected',
              reason: err
            };
          }
        });
      };

      ZoneAwarePromise.allWithCallback = function (values, callback) {
        var resolve;
        var reject;
        var promise = new this(function (res, rej) {
          resolve = res;
          reject = rej;
        }); // Start at 2 to prevent prematurely resolving if .then is called immediately.

        var unresolvedCount = 2;
        var valueIndex = 0;
        var resolvedValues = [];

        var _loop_2 = function _loop_2(value) {
          if (!isThenable(value)) {
            value = this_1.resolve(value);
          }

          var curValueIndex = valueIndex;

          try {
            value.then(function (value) {
              resolvedValues[curValueIndex] = callback ? callback.thenCallback(value) : value;
              unresolvedCount--;

              if (unresolvedCount === 0) {
                resolve(resolvedValues);
              }
            }, function (err) {
              if (!callback) {
                reject(err);
              } else {
                resolvedValues[curValueIndex] = callback.errorCallback(err);
                unresolvedCount--;

                if (unresolvedCount === 0) {
                  resolve(resolvedValues);
                }
              }
            });
          } catch (thenErr) {
            reject(thenErr);
          }

          unresolvedCount++;
          valueIndex++;
        };

        var this_1 = this;

        for (var _i = 0, values_2 = values; _i < values_2.length; _i++) {
          var value = values_2[_i];

          _loop_2(value);
        } // Make the unresolvedCount zero-based again.


        unresolvedCount -= 2;

        if (unresolvedCount === 0) {
          resolve(resolvedValues);
        }

        return promise;
      };

      Object.defineProperty(ZoneAwarePromise.prototype, Symbol.toStringTag, {
        get: function get() {
          return 'Promise';
        },
        enumerable: true,
        configurable: true
      });
      Object.defineProperty(ZoneAwarePromise.prototype, Symbol.species, {
        get: function get() {
          return ZoneAwarePromise;
        },
        enumerable: true,
        configurable: true
      });

      ZoneAwarePromise.prototype.then = function (onFulfilled, onRejected) {
        var C = this.constructor[Symbol.species];

        if (!C || typeof C !== 'function') {
          C = this.constructor || ZoneAwarePromise;
        }

        var chainPromise = new C(noop);
        var zone = Zone.current;

        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
        }

        return chainPromise;
      };

      ZoneAwarePromise.prototype.catch = function (onRejected) {
        return this.then(null, onRejected);
      };

      ZoneAwarePromise.prototype.finally = function (onFinally) {
        var C = this.constructor[Symbol.species];

        if (!C || typeof C !== 'function') {
          C = ZoneAwarePromise;
        }

        var chainPromise = new C(noop);
        chainPromise[symbolFinally] = symbolFinally;
        var zone = Zone.current;

        if (this[symbolState] == UNRESOLVED) {
          this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
        } else {
          scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
        }

        return chainPromise;
      };

      return ZoneAwarePromise;
    }(); // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.


    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    var NativePromise = global[symbolPromise] = global['Promise'];

    var ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');

    var desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');

    if (!desc || desc.configurable) {
      desc && delete desc.writable;
      desc && delete desc.value;

      if (!desc) {
        desc = {
          configurable: true,
          enumerable: true
        };
      }

      desc.get = function () {
        // if we already set ZoneAwarePromise, use patched one
        // otherwise return native one.
        return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
      };

      desc.set = function (NewNativePromise) {
        if (NewNativePromise === ZoneAwarePromise) {
          // if the NewNativePromise is ZoneAwarePromise
          // save to global
          global[ZONE_AWARE_PROMISE] = NewNativePromise;
        } else {
          // if the NewNativePromise is not ZoneAwarePromise
          // for example: after load zone.js, some library just
          // set es6-promise to global, if we set it to global
          // directly, assertZonePatched will fail and angular
          // will not loaded, so we just set the NewNativePromise
          // to global[symbolPromise], so the result is just like
          // we load ES6 Promise before zone.js
          global[symbolPromise] = NewNativePromise;

          if (!NewNativePromise.prototype[symbolThen]) {
            patchThen(NewNativePromise);
          }

          api.setNativePromise(NewNativePromise);
        }
      };

      ObjectDefineProperty(global, 'Promise', desc);
    }

    global['Promise'] = ZoneAwarePromise;

    var symbolThenPatched = __symbol__('thenPatched');

    function patchThen(Ctor) {
      var proto = Ctor.prototype;
      var prop = ObjectGetOwnPropertyDescriptor(proto, 'then');

      if (prop && (prop.writable === false || !prop.configurable)) {
        // check Ctor.prototype.then propertyDescriptor is writable or not
        // in meteor env, writable is false, we should ignore such case
        return;
      }

      var originalThen = proto.then; // Keep a reference to the original method.

      proto[symbolThen] = originalThen;

      Ctor.prototype.then = function (onResolve, onReject) {
        var _this = this;

        var wrapped = new ZoneAwarePromise(function (resolve, reject) {
          originalThen.call(_this, resolve, reject);
        });
        return wrapped.then(onResolve, onReject);
      };

      Ctor[symbolThenPatched] = true;
    }

    api.patchThen = patchThen;

    function zoneify(fn) {
      return function () {
        var resultPromise = fn.apply(this, arguments);

        if (resultPromise instanceof ZoneAwarePromise) {
          return resultPromise;
        }

        var ctor = resultPromise.constructor;

        if (!ctor[symbolThenPatched]) {
          patchThen(ctor);
        }

        return resultPromise;
      };
    }

    if (NativePromise) {
      patchThen(NativePromise);
      var fetch_1 = global['fetch'];

      if (typeof fetch_1 == 'function') {
        global[api.symbol('fetch')] = fetch_1;
        global['fetch'] = zoneify(fetch_1);
      }
    } // This is not part of public API, but it is useful for tests, so we expose it.


    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
  });
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */

  /**
   * Suppress closure compiler errors about unknown 'Zone' variable
   * @fileoverview
   * @suppress {undefinedVars,globalThis,missingRequire}
   */
  /// <reference types="node"/>
  // issue #989, to reduce bundle size, use short name

  /** Object.getOwnPropertyDescriptor */


  var ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  /** Object.defineProperty */

  var ObjectDefineProperty = Object.defineProperty;
  /** Object.getPrototypeOf */

  var ObjectGetPrototypeOf = Object.getPrototypeOf;
  /** Object.create */

  var ObjectCreate = Object.create;
  /** Array.prototype.slice */

  var ArraySlice = Array.prototype.slice;
  /** addEventListener string const */

  var ADD_EVENT_LISTENER_STR = 'addEventListener';
  /** removeEventListener string const */

  var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
  /** zoneSymbol addEventListener */

  var ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
  /** zoneSymbol removeEventListener */


  var ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
  /** true string const */


  var TRUE_STR = 'true';
  /** false string const */

  var FALSE_STR = 'false';
  /** Zone symbol prefix string const. */

  var ZONE_SYMBOL_PREFIX = Zone.__symbol__('');

  function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
  }

  function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
  }

  var zoneSymbol = Zone.__symbol__;
  var isWindowExists = typeof window !== 'undefined';
  var internalWindow = isWindowExists ? window : undefined;

  var _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;

  var REMOVE_ATTRIBUTE = 'removeAttribute';
  var NULL_ON_PROP_VALUE = [null];

  function bindArguments(args, source) {
    for (var i = args.length - 1; i >= 0; i--) {
      if (typeof args[i] === 'function') {
        args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
      }
    }

    return args;
  }

  function patchPrototype(prototype, fnNames) {
    var source = prototype.constructor['name'];

    var _loop_3 = function _loop_3(i) {
      var name_1 = fnNames[i];
      var delegate = prototype[name_1];

      if (delegate) {
        var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name_1);

        if (!isPropertyWritable(prototypeDesc)) {
          return "continue";
        }

        prototype[name_1] = function (delegate) {
          var patched = function patched() {
            return delegate.apply(this, bindArguments(arguments, source + '.' + name_1));
          };

          attachOriginToPatched(patched, delegate);
          return patched;
        }(delegate);
      }
    };

    for (var i = 0; i < fnNames.length; i++) {
      _loop_3(i);
    }
  }

  function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
      return true;
    }

    if (propertyDesc.writable === false) {
      return false;
    }

    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
  }

  var isWebWorker = typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope; // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
  // this code.

  var isNode = !('nw' in _global) && typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]';
  var isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']); // we are in electron of nw, so we are both browser and nodejs
  // Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
  // this code.

  var isMix = typeof _global.process !== 'undefined' && {}.toString.call(_global.process) === '[object process]' && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
  var zoneSymbolEventNames = {};

  var wrapFn = function wrapFn(event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;

    if (!event) {
      return;
    }

    var eventNameSymbol = zoneSymbolEventNames[event.type];

    if (!eventNameSymbol) {
      eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }

    var target = this || event.target || _global;
    var listener = target[eventNameSymbol];
    var result;

    if (isBrowser && target === internalWindow && event.type === 'error') {
      // window.onerror have different signiture
      // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
      // and onerror callback will prevent default when callback return true
      var errorEvent = event;
      result = listener && listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);

      if (result === true) {
        event.preventDefault();
      }
    } else {
      result = listener && listener.apply(this, arguments);

      if (result != undefined && !result) {
        event.preventDefault();
      }
    }

    return result;
  };

  function patchProperty(obj, prop, prototype) {
    var desc = ObjectGetOwnPropertyDescriptor(obj, prop);

    if (!desc && prototype) {
      // when patch window object, use prototype to check prop exist or not
      var prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);

      if (prototypeDesc) {
        desc = {
          enumerable: true,
          configurable: true
        };
      }
    } // if the descriptor not exists or is not configurable
    // just return


    if (!desc || !desc.configurable) {
      return;
    }

    var onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');

    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
      return;
    } // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified


    delete desc.writable;
    delete desc.value;
    var originalDescGet = desc.get;
    var originalDescSet = desc.set; // substr(2) cuz 'onclick' -> 'click', etc

    var eventName = prop.substr(2);
    var eventNameSymbol = zoneSymbolEventNames[eventName];

    if (!eventNameSymbol) {
      eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }

    desc.set = function (newValue) {
      // in some of windows's onproperty callback, this is undefined
      // so we need to check it
      var target = this;

      if (!target && obj === _global) {
        target = _global;
      }

      if (!target) {
        return;
      }

      var previousValue = target[eventNameSymbol];

      if (previousValue) {
        target.removeEventListener(eventName, wrapFn);
      } // issue #978, when onload handler was added before loading zone.js
      // we should remove it with originalDescSet


      if (originalDescSet) {
        originalDescSet.apply(target, NULL_ON_PROP_VALUE);
      }

      if (typeof newValue === 'function') {
        target[eventNameSymbol] = newValue;
        target.addEventListener(eventName, wrapFn, false);
      } else {
        target[eventNameSymbol] = null;
      }
    }; // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null


    desc.get = function () {
      // in some of windows's onproperty callback, this is undefined
      // so we need to check it
      var target = this;

      if (!target && obj === _global) {
        target = _global;
      }

      if (!target) {
        return null;
      }

      var listener = target[eventNameSymbol];

      if (listener) {
        return listener;
      } else if (originalDescGet) {
        // result will be null when use inline event attribute,
        // such as <button onclick="func();">OK</button>
        // because the onclick function is internal raw uncompiled handler
        // the onclick will be evaluated when first time event was triggered or
        // the property is accessed, https://github.com/angular/zone.js/issues/525
        // so we should use original native get to retrieve the handler
        var value = originalDescGet && originalDescGet.call(this);

        if (value) {
          desc.set.call(this, value);

          if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
            target.removeAttribute(prop);
          }

          return value;
        }
      }

      return null;
    };

    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
  }

  function patchOnProperties(obj, properties, prototype) {
    if (properties) {
      for (var i = 0; i < properties.length; i++) {
        patchProperty(obj, 'on' + properties[i], prototype);
      }
    } else {
      var onProperties = [];

      for (var prop in obj) {
        if (prop.substr(0, 2) == 'on') {
          onProperties.push(prop);
        }
      }

      for (var j = 0; j < onProperties.length; j++) {
        patchProperty(obj, onProperties[j], prototype);
      }
    }
  }

  var originalInstanceKey = zoneSymbol('originalInstance'); // wrap some native API on `window`

  function patchClass(className) {
    var OriginalClass = _global[className];
    if (!OriginalClass) return; // keep original class in global

    _global[zoneSymbol(className)] = OriginalClass;

    _global[className] = function () {
      var a = bindArguments(arguments, className);

      switch (a.length) {
        case 0:
          this[originalInstanceKey] = new OriginalClass();
          break;

        case 1:
          this[originalInstanceKey] = new OriginalClass(a[0]);
          break;

        case 2:
          this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
          break;

        case 3:
          this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
          break;

        case 4:
          this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
          break;

        default:
          throw new Error('Arg list too long.');
      }
    }; // attach original delegate to patched function


    attachOriginToPatched(_global[className], OriginalClass);
    var instance = new OriginalClass(function () {});
    var prop;

    for (prop in instance) {
      // https://bugs.webkit.org/show_bug.cgi?id=44721
      if (className === 'XMLHttpRequest' && prop === 'responseBlob') continue;

      (function (prop) {
        if (typeof instance[prop] === 'function') {
          _global[className].prototype[prop] = function () {
            return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
          };
        } else {
          ObjectDefineProperty(_global[className].prototype, prop, {
            set: function set(fn) {
              if (typeof fn === 'function') {
                this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop); // keep callback in wrapped function so we can
                // use it in Function.prototype.toString to return
                // the native one.

                attachOriginToPatched(this[originalInstanceKey][prop], fn);
              } else {
                this[originalInstanceKey][prop] = fn;
              }
            },
            get: function get() {
              return this[originalInstanceKey][prop];
            }
          });
        }
      })(prop);
    }

    for (prop in OriginalClass) {
      if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
        _global[className][prop] = OriginalClass[prop];
      }
    }
  }

  function copySymbolProperties(src, dest) {
    if (typeof Object.getOwnPropertySymbols !== 'function') {
      return;
    }

    var symbols = Object.getOwnPropertySymbols(src);
    symbols.forEach(function (symbol) {
      var desc = Object.getOwnPropertyDescriptor(src, symbol);
      Object.defineProperty(dest, symbol, {
        get: function get() {
          return src[symbol];
        },
        set: function set(value) {
          if (desc && (!desc.writable || typeof desc.set !== 'function')) {
            // if src[symbol] is not writable or not have a setter, just return
            return;
          }

          src[symbol] = value;
        },
        enumerable: desc ? desc.enumerable : true,
        configurable: desc ? desc.configurable : true
      });
    });
  }

  var shouldCopySymbolProperties = false;

  function patchMethod(target, name, patchFn) {
    var proto = target;

    while (proto && !proto.hasOwnProperty(name)) {
      proto = ObjectGetPrototypeOf(proto);
    }

    if (!proto && target[name]) {
      // somehow we did not find it, but we can see it. This happens on IE for Window properties.
      proto = target;
    }

    var delegateName = zoneSymbol(name);
    var delegate = null;

    if (proto && !(delegate = proto[delegateName])) {
      delegate = proto[delegateName] = proto[name]; // check whether proto[name] is writable
      // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob

      var desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);

      if (isPropertyWritable(desc)) {
        var patchDelegate_1 = patchFn(delegate, delegateName, name);

        proto[name] = function () {
          return patchDelegate_1(this, arguments);
        };

        attachOriginToPatched(proto[name], delegate);

        if (shouldCopySymbolProperties) {
          copySymbolProperties(delegate, proto[name]);
        }
      }
    }

    return delegate;
  } // TODO: @JiaLiPassion, support cancel task later if necessary


  function patchMacroTask(obj, funcName, metaCreator) {
    var setNative = null;

    function scheduleTask(task) {
      var data = task.data;

      data.args[data.cbIdx] = function () {
        task.invoke.apply(this, arguments);
      };

      setNative.apply(data.target, data.args);
      return task;
    }

    setNative = patchMethod(obj, funcName, function (delegate) {
      return function (self, args) {
        var meta = metaCreator(self, args);

        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
          return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        } else {
          // cause an error by calling it directly.
          return delegate.apply(self, args);
        }
      };
    });
  }

  function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
  }

  var isDetectedIEOrEdge = false;
  var ieOrEdge = false;

  function isIE() {
    try {
      var ua = internalWindow.navigator.userAgent;

      if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
        return true;
      }
    } catch (error) {}

    return false;
  }

  function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
      return ieOrEdge;
    }

    isDetectedIEOrEdge = true;

    try {
      var ua = internalWindow.navigator.userAgent;

      if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
        ieOrEdge = true;
      }
    } catch (error) {}

    return ieOrEdge;
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
  // override Function.prototype.toString to make zone.js patched function
  // look like native function


  Zone.__load_patch('toString', function (global) {
    // patch Func.prototype.toString to let them look like native
    var originalFunctionToString = Function.prototype.toString;
    var ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    var PROMISE_SYMBOL = zoneSymbol('Promise');
    var ERROR_SYMBOL = zoneSymbol('Error');

    var newFunctionToString = function toString() {
      if (typeof this === 'function') {
        var originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];

        if (originalDelegate) {
          if (typeof originalDelegate === 'function') {
            return originalFunctionToString.call(originalDelegate);
          } else {
            return Object.prototype.toString.call(originalDelegate);
          }
        }

        if (this === Promise) {
          var nativePromise = global[PROMISE_SYMBOL];

          if (nativePromise) {
            return originalFunctionToString.call(nativePromise);
          }
        }

        if (this === Error) {
          var nativeError = global[ERROR_SYMBOL];

          if (nativeError) {
            return originalFunctionToString.call(nativeError);
          }
        }
      }

      return originalFunctionToString.call(this);
    };

    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString; // patch Object.prototype.toString to let them look like native

    var originalObjectToString = Object.prototype.toString;
    var PROMISE_OBJECT_TO_STRING = '[object Promise]';

    Object.prototype.toString = function () {
      if (this instanceof Promise) {
        return PROMISE_OBJECT_TO_STRING;
      }

      return originalObjectToString.call(this);
    };
  });
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  var passiveSupported = false;

  if (typeof window !== 'undefined') {
    try {
      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          passiveSupported = true;
        }
      });
      window.addEventListener('test', options, options);
      window.removeEventListener('test', options, options);
    } catch (err) {
      passiveSupported = false;
    }
  } // an identifier to tell ZoneTask do not create a new invoke closure


  var OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
  };
  var zoneSymbolEventNames$1 = {};
  var globalSources = {};
  var EVENT_NAME_SYMBOL_REGX = new RegExp('^' + ZONE_SYMBOL_PREFIX + '(\\w+)(true|false)$');
  var IMMEDIATE_PROPAGATION_SYMBOL = zoneSymbol('propagationStopped');

  function prepareEventNames(eventName, eventNameToString) {
    var falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
    var trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
    var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
    var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
    zoneSymbolEventNames$1[eventName] = {};
    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
  }

  function patchEventTarget(_global, apis, patchOptions) {
    var ADD_EVENT_LISTENER = patchOptions && patchOptions.add || ADD_EVENT_LISTENER_STR;
    var REMOVE_EVENT_LISTENER = patchOptions && patchOptions.rm || REMOVE_EVENT_LISTENER_STR;
    var LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.listeners || 'eventListeners';
    var REMOVE_ALL_LISTENERS_EVENT_LISTENER = patchOptions && patchOptions.rmAll || 'removeAllListeners';
    var zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    var ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    var PREPEND_EVENT_LISTENER = 'prependListener';
    var PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';

    var invokeTask = function invokeTask(task, target, event) {
      // for better performance, check isRemoved which is set
      // by removeEventListener
      if (task.isRemoved) {
        return;
      }

      var delegate = task.callback;

      if (typeof delegate === 'object' && delegate.handleEvent) {
        // create the bind version of handleEvent when invoke
        task.callback = function (event) {
          return delegate.handleEvent(event);
        };

        task.originalDelegate = delegate;
      } // invoke static task.invoke


      task.invoke(task, target, [event]);
      var options = task.options;

      if (options && typeof options === 'object' && options.once) {
        // if options.once is true, after invoke once remove listener here
        // only browser need to do this, nodejs eventEmitter will cal removeListener
        // inside EventEmitter.once
        var delegate_1 = task.originalDelegate ? task.originalDelegate : task.callback;
        target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate_1, options);
      }
    }; // global shared zoneAwareCallback to handle all event callback with capture = false


    var globalZoneAwareCallback = function globalZoneAwareCallback(event) {
      // https://github.com/angular/zone.js/issues/911, in IE, sometimes
      // event will be undefined, so we need to use window.event
      event = event || _global.event;

      if (!event) {
        return;
      } // event.target is needed for Samsung TV and SourceBuffer
      // || global is needed https://github.com/angular/zone.js/issues/190


      var target = this || event.target || _global;
      var tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];

      if (tasks) {
        // invoke all tasks which attached to current target with given event.type and capture = false
        // for performance concern, if task.length === 1, just invoke
        if (tasks.length === 1) {
          invokeTask(tasks[0], target, event);
        } else {
          // https://github.com/angular/zone.js/issues/836
          // copy the tasks array before invoke, to avoid
          // the callback will remove itself or other listener
          var copyTasks = tasks.slice();

          for (var i = 0; i < copyTasks.length; i++) {
            if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
              break;
            }

            invokeTask(copyTasks[i], target, event);
          }
        }
      }
    }; // global shared zoneAwareCallback to handle all event callback with capture = true


    var globalZoneAwareCaptureCallback = function globalZoneAwareCaptureCallback(event) {
      // https://github.com/angular/zone.js/issues/911, in IE, sometimes
      // event will be undefined, so we need to use window.event
      event = event || _global.event;

      if (!event) {
        return;
      } // event.target is needed for Samsung TV and SourceBuffer
      // || global is needed https://github.com/angular/zone.js/issues/190


      var target = this || event.target || _global;
      var tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];

      if (tasks) {
        // invoke all tasks which attached to current target with given event.type and capture = false
        // for performance concern, if task.length === 1, just invoke
        if (tasks.length === 1) {
          invokeTask(tasks[0], target, event);
        } else {
          // https://github.com/angular/zone.js/issues/836
          // copy the tasks array before invoke, to avoid
          // the callback will remove itself or other listener
          var copyTasks = tasks.slice();

          for (var i = 0; i < copyTasks.length; i++) {
            if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
              break;
            }

            invokeTask(copyTasks[i], target, event);
          }
        }
      }
    };

    function patchEventTargetMethods(obj, patchOptions) {
      if (!obj) {
        return false;
      }

      var useGlobalCallback = true;

      if (patchOptions && patchOptions.useG !== undefined) {
        useGlobalCallback = patchOptions.useG;
      }

      var validateHandler = patchOptions && patchOptions.vh;
      var checkDuplicate = true;

      if (patchOptions && patchOptions.chkDup !== undefined) {
        checkDuplicate = patchOptions.chkDup;
      }

      var returnTarget = false;

      if (patchOptions && patchOptions.rt !== undefined) {
        returnTarget = patchOptions.rt;
      }

      var proto = obj;

      while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
        proto = ObjectGetPrototypeOf(proto);
      }

      if (!proto && obj[ADD_EVENT_LISTENER]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = obj;
      }

      if (!proto) {
        return false;
      }

      if (proto[zoneSymbolAddEventListener]) {
        return false;
      }

      var eventNameToString = patchOptions && patchOptions.eventNameToString; // a shared global taskData to pass data for scheduleEventTask
      // so we do not need to create a new object just for pass some data

      var taskData = {};
      var nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
      var nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] = proto[REMOVE_EVENT_LISTENER];
      var nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] = proto[LISTENERS_EVENT_LISTENER];
      var nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] = proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
      var nativePrependEventListener;

      if (patchOptions && patchOptions.prepend) {
        nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] = proto[patchOptions.prepend];
      }
      /**
       * This util function will build an option object with passive option
       * to handle all possible input from the user.
       */


      function buildEventListenerOptions(options, passive) {
        if (!passiveSupported && typeof options === 'object' && options) {
          // doesn't support passive but user want to pass an object as options.
          // this will not work on some old browser, so we just pass a boolean
          // as useCapture parameter
          return !!options.capture;
        }

        if (!passiveSupported || !passive) {
          return options;
        }

        if (typeof options === 'boolean') {
          return {
            capture: options,
            passive: true
          };
        }

        if (!options) {
          return {
            passive: true
          };
        }

        if (typeof options === 'object' && options.passive !== false) {
          return Object.assign(Object.assign({}, options), {
            passive: true
          });
        }

        return options;
      }

      var customScheduleGlobal = function customScheduleGlobal(task) {
        // if there is already a task for the eventName + capture,
        // just return, because we use the shared globalZoneAwareCallback here.
        if (taskData.isExisting) {
          return;
        }

        return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
      };

      var customCancelGlobal = function customCancelGlobal(task) {
        // if task is not marked as isRemoved, this call is directly
        // from Zone.prototype.cancelTask, we should remove the task
        // from tasksList of target first
        if (!task.isRemoved) {
          var symbolEventNames = zoneSymbolEventNames$1[task.eventName];
          var symbolEventName = void 0;

          if (symbolEventNames) {
            symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
          }

          var existingTasks = symbolEventName && task.target[symbolEventName];

          if (existingTasks) {
            for (var i = 0; i < existingTasks.length; i++) {
              var existingTask = existingTasks[i];

              if (existingTask === task) {
                existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

                task.isRemoved = true;

                if (existingTasks.length === 0) {
                  // all tasks for the eventName + capture have gone,
                  // remove globalZoneAwareCallback and remove the task cache from target
                  task.allRemoved = true;
                  task.target[symbolEventName] = null;
                }

                break;
              }
            }
          }
        } // if all tasks for the eventName + capture have gone,
        // we will really remove the global event callback,
        // if not, return


        if (!task.allRemoved) {
          return;
        }

        return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
      };

      var customScheduleNonGlobal = function customScheduleNonGlobal(task) {
        return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
      };

      var customSchedulePrepend = function customSchedulePrepend(task) {
        return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
      };

      var customCancelNonGlobal = function customCancelNonGlobal(task) {
        return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
      };

      var customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
      var customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;

      var compareTaskCallbackVsDelegate = function compareTaskCallbackVsDelegate(task, delegate) {
        var typeOfDelegate = typeof delegate;
        return typeOfDelegate === 'function' && task.callback === delegate || typeOfDelegate === 'object' && task.originalDelegate === delegate;
      };

      var compare = patchOptions && patchOptions.diff ? patchOptions.diff : compareTaskCallbackVsDelegate;
      var blackListedEvents = Zone[zoneSymbol('BLACK_LISTED_EVENTS')];

      var passiveEvents = _global[zoneSymbol('PASSIVE_EVENTS')];

      var makeAddListener = function makeAddListener(nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget, prepend) {
        if (returnTarget === void 0) {
          returnTarget = false;
        }

        if (prepend === void 0) {
          prepend = false;
        }

        return function () {
          var target = this || _global;
          var eventName = arguments[0];

          if (patchOptions && patchOptions.transferEventName) {
            eventName = patchOptions.transferEventName(eventName);
          }

          var delegate = arguments[1];

          if (!delegate) {
            return nativeListener.apply(this, arguments);
          }

          if (isNode && eventName === 'uncaughtException') {
            // don't patch uncaughtException of nodejs to prevent endless loop
            return nativeListener.apply(this, arguments);
          } // don't create the bind delegate function for handleEvent
          // case here to improve addEventListener performance
          // we will create the bind delegate when invoke


          var isHandleEvent = false;

          if (typeof delegate !== 'function') {
            if (!delegate.handleEvent) {
              return nativeListener.apply(this, arguments);
            }

            isHandleEvent = true;
          }

          if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
            return;
          }

          var passive = passiveSupported && !!passiveEvents && passiveEvents.indexOf(eventName) !== -1;
          var options = buildEventListenerOptions(arguments[2], passive);

          if (blackListedEvents) {
            // check black list
            for (var i = 0; i < blackListedEvents.length; i++) {
              if (eventName === blackListedEvents[i]) {
                if (passive) {
                  return nativeListener.call(target, eventName, delegate, options);
                } else {
                  return nativeListener.apply(this, arguments);
                }
              }
            }
          }

          var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
          var once = options && typeof options === 'object' ? options.once : false;
          var zone = Zone.current;
          var symbolEventNames = zoneSymbolEventNames$1[eventName];

          if (!symbolEventNames) {
            prepareEventNames(eventName, eventNameToString);
            symbolEventNames = zoneSymbolEventNames$1[eventName];
          }

          var symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
          var existingTasks = target[symbolEventName];
          var isExisting = false;

          if (existingTasks) {
            // already have task registered
            isExisting = true;

            if (checkDuplicate) {
              for (var i = 0; i < existingTasks.length; i++) {
                if (compare(existingTasks[i], delegate)) {
                  // same callback, same capture, same event name, just return
                  return;
                }
              }
            }
          } else {
            existingTasks = target[symbolEventName] = [];
          }

          var source;
          var constructorName = target.constructor['name'];
          var targetSource = globalSources[constructorName];

          if (targetSource) {
            source = targetSource[eventName];
          }

          if (!source) {
            source = constructorName + addSource + (eventNameToString ? eventNameToString(eventName) : eventName);
          } // do not create a new object as task.data to pass those things
          // just use the global shared one


          taskData.options = options;

          if (once) {
            // if addEventListener with once options, we don't pass it to
            // native addEventListener, instead we keep the once setting
            // and handle ourselves.
            taskData.options.once = false;
          }

          taskData.target = target;
          taskData.capture = capture;
          taskData.eventName = eventName;
          taskData.isExisting = isExisting;
          var data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined; // keep taskData into data to allow onScheduleEventTask to access the task information

          if (data) {
            data.taskData = taskData;
          }

          var task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn); // should clear taskData.target to avoid memory leak
          // issue, https://github.com/angular/angular/issues/20442

          taskData.target = null; // need to clear up taskData because it is a global object

          if (data) {
            data.taskData = null;
          } // have to save those information to task in case
          // application may call task.zone.cancelTask() directly


          if (once) {
            options.once = true;
          }

          if (!(!passiveSupported && typeof task.options === 'boolean')) {
            // if not support passive, and we pass an option object
            // to addEventListener, we should save the options to task
            task.options = options;
          }

          task.target = target;
          task.capture = capture;
          task.eventName = eventName;

          if (isHandleEvent) {
            // save original delegate for compare to check duplicate
            task.originalDelegate = delegate;
          }

          if (!prepend) {
            existingTasks.push(task);
          } else {
            existingTasks.unshift(task);
          }

          if (returnTarget) {
            return target;
          }
        };
      };

      proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);

      if (nativePrependEventListener) {
        proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
      }

      proto[REMOVE_EVENT_LISTENER] = function () {
        var target = this || _global;
        var eventName = arguments[0];

        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }

        var options = arguments[2];
        var capture = !options ? false : typeof options === 'boolean' ? true : options.capture;
        var delegate = arguments[1];

        if (!delegate) {
          return nativeRemoveEventListener.apply(this, arguments);
        }

        if (validateHandler && !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
          return;
        }

        var symbolEventNames = zoneSymbolEventNames$1[eventName];
        var symbolEventName;

        if (symbolEventNames) {
          symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
        }

        var existingTasks = symbolEventName && target[symbolEventName];

        if (existingTasks) {
          for (var i = 0; i < existingTasks.length; i++) {
            var existingTask = existingTasks[i];

            if (compare(existingTask, delegate)) {
              existingTasks.splice(i, 1); // set isRemoved to data for faster invokeTask check

              existingTask.isRemoved = true;

              if (existingTasks.length === 0) {
                // all tasks for the eventName + capture have gone,
                // remove globalZoneAwareCallback and remove the task cache from target
                existingTask.allRemoved = true;
                target[symbolEventName] = null; // in the target, we have an event listener which is added by on_property
                // such as target.onclick = function() {}, so we need to clear this internal
                // property too if all delegates all removed

                if (typeof eventName === 'string') {
                  var onPropertySymbol = ZONE_SYMBOL_PREFIX + 'ON_PROPERTY' + eventName;
                  target[onPropertySymbol] = null;
                }
              }

              existingTask.zone.cancelTask(existingTask);

              if (returnTarget) {
                return target;
              }

              return;
            }
          }
        } // issue 930, didn't find the event name or callback
        // from zone kept existingTasks, the callback maybe
        // added outside of zone, we need to call native removeEventListener
        // to try to remove it.


        return nativeRemoveEventListener.apply(this, arguments);
      };

      proto[LISTENERS_EVENT_LISTENER] = function () {
        var target = this || _global;
        var eventName = arguments[0];

        if (patchOptions && patchOptions.transferEventName) {
          eventName = patchOptions.transferEventName(eventName);
        }

        var listeners = [];
        var tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);

        for (var i = 0; i < tasks.length; i++) {
          var task = tasks[i];
          var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
          listeners.push(delegate);
        }

        return listeners;
      };

      proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
        var target = this || _global;
        var eventName = arguments[0];

        if (!eventName) {
          var keys = Object.keys(target);

          for (var i = 0; i < keys.length; i++) {
            var prop = keys[i];
            var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
            var evtName = match && match[1]; // in nodejs EventEmitter, removeListener event is
            // used for monitoring the removeListener call,
            // so just keep removeListener eventListener until
            // all other eventListeners are removed

            if (evtName && evtName !== 'removeListener') {
              this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
            }
          } // remove removeListener listener finally


          this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
        } else {
          if (patchOptions && patchOptions.transferEventName) {
            eventName = patchOptions.transferEventName(eventName);
          }

          var symbolEventNames = zoneSymbolEventNames$1[eventName];

          if (symbolEventNames) {
            var symbolEventName = symbolEventNames[FALSE_STR];
            var symbolCaptureEventName = symbolEventNames[TRUE_STR];
            var tasks = target[symbolEventName];
            var captureTasks = target[symbolCaptureEventName];

            if (tasks) {
              var removeTasks = tasks.slice();

              for (var i = 0; i < removeTasks.length; i++) {
                var task = removeTasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
              }
            }

            if (captureTasks) {
              var removeTasks = captureTasks.slice();

              for (var i = 0; i < removeTasks.length; i++) {
                var task = removeTasks[i];
                var delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
              }
            }
          }
        }

        if (returnTarget) {
          return this;
        }
      }; // for native toString patch


      attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
      attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);

      if (nativeRemoveAllListeners) {
        attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
      }

      if (nativeListeners) {
        attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
      }

      return true;
    }

    var results = [];

    for (var i = 0; i < apis.length; i++) {
      results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }

    return results;
  }

  function findEventTasks(target, eventName) {
    if (!eventName) {
      var foundTasks = [];

      for (var prop in target) {
        var match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        var evtName = match && match[1];

        if (evtName && (!eventName || evtName === eventName)) {
          var tasks = target[prop];

          if (tasks) {
            for (var i = 0; i < tasks.length; i++) {
              foundTasks.push(tasks[i]);
            }
          }
        }
      }

      return foundTasks;
    }

    var symbolEventName = zoneSymbolEventNames$1[eventName];

    if (!symbolEventName) {
      prepareEventNames(eventName);
      symbolEventName = zoneSymbolEventNames$1[eventName];
    }

    var captureFalseTasks = target[symbolEventName[FALSE_STR]];
    var captureTrueTasks = target[symbolEventName[TRUE_STR]];

    if (!captureFalseTasks) {
      return captureTrueTasks ? captureTrueTasks.slice() : [];
    } else {
      return captureTrueTasks ? captureFalseTasks.concat(captureTrueTasks) : captureFalseTasks.slice();
    }
  }

  function patchEventPrototype(global, api) {
    var Event = global['Event'];

    if (Event && Event.prototype) {
      api.patchMethod(Event.prototype, 'stopImmediatePropagation', function (delegate) {
        return function (self, args) {
          self[IMMEDIATE_PROPAGATION_SYMBOL] = true; // we need to call the native stopImmediatePropagation
          // in case in some hybrid application, some part of
          // application will be controlled by zone, some are not

          delegate && delegate.apply(self, args);
        };
      });
    }
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function patchCallbacks(api, target, targetName, method, callbacks) {
    var symbol = Zone.__symbol__(method);

    if (target[symbol]) {
      return;
    }

    var nativeDelegate = target[symbol] = target[method];

    target[method] = function (name, opts, options) {
      if (opts && opts.prototype) {
        callbacks.forEach(function (callback) {
          var source = targetName + "." + method + "::" + callback;
          var prototype = opts.prototype;

          if (prototype.hasOwnProperty(callback)) {
            var descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);

            if (descriptor && descriptor.value) {
              descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);

              api._redefineProperty(opts.prototype, callback, descriptor);
            } else if (prototype[callback]) {
              prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
            }
          } else if (prototype[callback]) {
            prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
          }
        });
      }

      return nativeDelegate.call(target, name, opts, options);
    };

    api.attachOriginToPatched(target[method], nativeDelegate);
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  var globalEventHandlersEventNames = ['abort', 'animationcancel', 'animationend', 'animationiteration', 'auxclick', 'beforeinput', 'blur', 'cancel', 'canplay', 'canplaythrough', 'change', 'compositionstart', 'compositionupdate', 'compositionend', 'cuechange', 'click', 'close', 'contextmenu', 'curechange', 'dblclick', 'drag', 'dragend', 'dragenter', 'dragexit', 'dragleave', 'dragover', 'drop', 'durationchange', 'emptied', 'ended', 'error', 'focus', 'focusin', 'focusout', 'gotpointercapture', 'input', 'invalid', 'keydown', 'keypress', 'keyup', 'load', 'loadstart', 'loadeddata', 'loadedmetadata', 'lostpointercapture', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'mousewheel', 'orientationchange', 'pause', 'play', 'playing', 'pointercancel', 'pointerdown', 'pointerenter', 'pointerleave', 'pointerlockchange', 'mozpointerlockchange', 'webkitpointerlockerchange', 'pointerlockerror', 'mozpointerlockerror', 'webkitpointerlockerror', 'pointermove', 'pointout', 'pointerover', 'pointerup', 'progress', 'ratechange', 'reset', 'resize', 'scroll', 'seeked', 'seeking', 'select', 'selectionchange', 'selectstart', 'show', 'sort', 'stalled', 'submit', 'suspend', 'timeupdate', 'volumechange', 'touchcancel', 'touchmove', 'touchstart', 'touchend', 'transitioncancel', 'transitionend', 'waiting', 'wheel'];
  var documentEventNames = ['afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange', 'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror', 'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange', 'visibilitychange', 'resume'];
  var windowEventNames = ['absolutedeviceorientation', 'afterinput', 'afterprint', 'appinstalled', 'beforeinstallprompt', 'beforeprint', 'beforeunload', 'devicelight', 'devicemotion', 'deviceorientation', 'deviceorientationabsolute', 'deviceproximity', 'hashchange', 'languagechange', 'message', 'mozbeforepaint', 'offline', 'online', 'paint', 'pageshow', 'pagehide', 'popstate', 'rejectionhandled', 'storage', 'unhandledrejection', 'unload', 'userproximity', 'vrdisplayconnected', 'vrdisplaydisconnected', 'vrdisplaypresentchange'];
  var htmlElementEventNames = ['beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend', 'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend', 'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'];
  var mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
  var ieElementEventNames = ['activate', 'afterupdate', 'ariarequest', 'beforeactivate', 'beforedeactivate', 'beforeeditfocus', 'beforeupdate', 'cellchange', 'controlselect', 'dataavailable', 'datasetchanged', 'datasetcomplete', 'errorupdate', 'filterchange', 'layoutcomplete', 'losecapture', 'move', 'moveend', 'movestart', 'propertychange', 'resizeend', 'resizestart', 'rowenter', 'rowexit', 'rowsdelete', 'rowsinserted', 'command', 'compassneedscalibration', 'deactivate', 'help', 'mscontentzoom', 'msmanipulationstatechanged', 'msgesturechange', 'msgesturedoubletap', 'msgestureend', 'msgesturehold', 'msgesturestart', 'msgesturetap', 'msgotpointercapture', 'msinertiastart', 'mslostpointercapture', 'mspointercancel', 'mspointerdown', 'mspointerenter', 'mspointerhover', 'mspointerleave', 'mspointermove', 'mspointerout', 'mspointerover', 'mspointerup', 'pointerout', 'mssitemodejumplistitemremoved', 'msthumbnailclick', 'stop', 'storagecommit'];
  var webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
  var formEventNames = ['autocomplete', 'autocompleteerror'];
  var detailEventNames = ['toggle'];
  var frameEventNames = ['load'];
  var frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
  var marqueeEventNames = ['bounce', 'finish', 'start'];
  var XMLHttpRequestEventNames = ['loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend', 'readystatechange'];
  var IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
  var websocketEventNames = ['close', 'error', 'open', 'message'];
  var workerEventNames = ['error', 'message'];
  var eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);

  function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
      return onProperties;
    }

    var tip = ignoreProperties.filter(function (ip) {
      return ip.target === target;
    });

    if (!tip || tip.length === 0) {
      return onProperties;
    }

    var targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(function (op) {
      return targetIgnoreProperties.indexOf(op) === -1;
    });
  }

  function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
      return;
    }

    var filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
  }

  function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
      return;
    }

    if (Zone[api.symbol('patchEvents')]) {
      // events are already been patched by legacy patch.
      return;
    }

    var supportsWebSocket = typeof WebSocket !== 'undefined';
    var ignoreProperties = _global['__Zone_ignore_on_properties']; // for browsers that we can patch the descriptor:  Chrome & Firefox

    if (isBrowser) {
      var internalWindow_1 = window;
      var ignoreErrorProperties = isIE ? [{
        target: internalWindow_1,
        ignoreProperties: ['error']
      }] : []; // in IE/Edge, onProp not exist in window object, but in WindowPrototype
      // so we need to pass WindowPrototype to check onProp exist or not

      patchFilteredProperties(internalWindow_1, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow_1));
      patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);

      if (typeof internalWindow_1['SVGElement'] !== 'undefined') {
        patchFilteredProperties(internalWindow_1['SVGElement'].prototype, eventNames, ignoreProperties);
      }

      patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
      patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
      patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
      patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
      patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
      patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
      patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
      var HTMLMarqueeElement_1 = internalWindow_1['HTMLMarqueeElement'];

      if (HTMLMarqueeElement_1) {
        patchFilteredProperties(HTMLMarqueeElement_1.prototype, marqueeEventNames, ignoreProperties);
      }

      var Worker_1 = internalWindow_1['Worker'];

      if (Worker_1) {
        patchFilteredProperties(Worker_1.prototype, workerEventNames, ignoreProperties);
      }
    }

    var XMLHttpRequest = _global['XMLHttpRequest'];

    if (XMLHttpRequest) {
      // XMLHttpRequest is not available in ServiceWorker, so we need to check here
      patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }

    var XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];

    if (XMLHttpRequestEventTarget) {
      patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }

    if (typeof IDBIndex !== 'undefined') {
      patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
      patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
      patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
      patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
      patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
      patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
    }

    if (supportsWebSocket) {
      patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
    }
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  Zone.__load_patch('util', function (global, Zone, api) {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask; // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
    // define which events will not be patched by `Zone.js`.
    // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
    // the name consistent with angular repo.
    // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
    // backwards compatibility.

    var SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');

    var SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');

    if (global[SYMBOL_UNPATCHED_EVENTS]) {
      global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
    }

    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
      Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] = global[SYMBOL_BLACK_LISTED_EVENTS];
    }

    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = Object.defineProperty;
    api.patchCallbacks = patchCallbacks;

    api.getGlobalObjects = function () {
      return {
        globalSources: globalSources,
        zoneSymbolEventNames: zoneSymbolEventNames$1,
        eventNames: eventNames,
        isBrowser: isBrowser,
        isMix: isMix,
        isNode: isNode,
        TRUE_STR: TRUE_STR,
        FALSE_STR: FALSE_STR,
        ZONE_SYMBOL_PREFIX: ZONE_SYMBOL_PREFIX,
        ADD_EVENT_LISTENER_STR: ADD_EVENT_LISTENER_STR,
        REMOVE_EVENT_LISTENER_STR: REMOVE_EVENT_LISTENER_STR
      };
    };
  });
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */

  /*
   * This is necessary for Chrome and Chrome mobile, to enable
   * things like redefining `createdCallback` on an element.
   */


  var zoneSymbol$1;

  var _defineProperty;

  var _getOwnPropertyDescriptor;

  var _create;

  var unconfigurablesKey;

  function propertyPatch() {
    zoneSymbol$1 = Zone.__symbol__;
    _defineProperty = Object[zoneSymbol$1('defineProperty')] = Object.defineProperty;
    _getOwnPropertyDescriptor = Object[zoneSymbol$1('getOwnPropertyDescriptor')] = Object.getOwnPropertyDescriptor;
    _create = Object.create;
    unconfigurablesKey = zoneSymbol$1('unconfigurables');

    Object.defineProperty = function (obj, prop, desc) {
      if (isUnconfigurable(obj, prop)) {
        throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
      }

      var originalConfigurableFlag = desc.configurable;

      if (prop !== 'prototype') {
        desc = rewriteDescriptor(obj, prop, desc);
      }

      return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };

    Object.defineProperties = function (obj, props) {
      Object.keys(props).forEach(function (prop) {
        Object.defineProperty(obj, prop, props[prop]);
      });
      return obj;
    };

    Object.create = function (obj, proto) {
      if (typeof proto === 'object' && !Object.isFrozen(proto)) {
        Object.keys(proto).forEach(function (prop) {
          proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
        });
      }

      return _create(obj, proto);
    };

    Object.getOwnPropertyDescriptor = function (obj, prop) {
      var desc = _getOwnPropertyDescriptor(obj, prop);

      if (desc && isUnconfigurable(obj, prop)) {
        desc.configurable = false;
      }

      return desc;
    };
  }

  function _redefineProperty(obj, prop, desc) {
    var originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
  }

  function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
  }

  function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
      desc.configurable = true;
    }

    if (!desc.configurable) {
      // issue-927, if the obj is frozen, don't try to set the desc to obj
      if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
        _defineProperty(obj, unconfigurablesKey, {
          writable: true,
          value: {}
        });
      }

      if (obj[unconfigurablesKey]) {
        obj[unconfigurablesKey][prop] = true;
      }
    }

    return desc;
  }

  function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
      return _defineProperty(obj, prop, desc);
    } catch (error) {
      if (desc.configurable) {
        // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
        // retry with the original flag value
        if (typeof originalConfigurableFlag == 'undefined') {
          delete desc.configurable;
        } else {
          desc.configurable = originalConfigurableFlag;
        }

        try {
          return _defineProperty(obj, prop, desc);
        } catch (error) {
          var descJson = null;

          try {
            descJson = JSON.stringify(desc);
          } catch (error) {
            descJson = desc.toString();
          }

          console.log("Attempting to configure '" + prop + "' with descriptor '" + descJson + "' on object '" + obj + "' and got error, giving up: " + error);
        }
      } else {
        throw error;
      }
    }
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function eventTargetLegacyPatch(_global, api) {
    var _a = api.getGlobalObjects(),
        eventNames = _a.eventNames,
        globalSources = _a.globalSources,
        zoneSymbolEventNames = _a.zoneSymbolEventNames,
        TRUE_STR = _a.TRUE_STR,
        FALSE_STR = _a.FALSE_STR,
        ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX;

    var WTF_ISSUE_555 = 'Anchor,Area,Audio,BR,Base,BaseFont,Body,Button,Canvas,Content,DList,Directory,Div,Embed,FieldSet,Font,Form,Frame,FrameSet,HR,Head,Heading,Html,IFrame,Image,Input,Keygen,LI,Label,Legend,Link,Map,Marquee,Media,Menu,Meta,Meter,Mod,OList,Object,OptGroup,Option,Output,Paragraph,Pre,Progress,Quote,Script,Select,Source,Span,Style,TableCaption,TableCell,TableCol,Table,TableRow,TableSection,TextArea,Title,Track,UList,Unknown,Video';
    var NO_EVENT_TARGET = 'ApplicationCache,EventSource,FileReader,InputMethodContext,MediaController,MessagePort,Node,Performance,SVGElementInstance,SharedWorker,TextTrack,TextTrackCue,TextTrackList,WebKitNamedFlow,Window,Worker,WorkerGlobalScope,XMLHttpRequest,XMLHttpRequestEventTarget,XMLHttpRequestUpload,IDBRequest,IDBOpenDBRequest,IDBDatabase,IDBTransaction,IDBCursor,DBIndex,WebSocket'.split(',');
    var EVENT_TARGET = 'EventTarget';
    var apis = [];
    var isWtf = _global['wtf'];
    var WTF_ISSUE_555_ARRAY = WTF_ISSUE_555.split(',');

    if (isWtf) {
      // Workaround for: https://github.com/google/tracing-framework/issues/555
      apis = WTF_ISSUE_555_ARRAY.map(function (v) {
        return 'HTML' + v + 'Element';
      }).concat(NO_EVENT_TARGET);
    } else if (_global[EVENT_TARGET]) {
      apis.push(EVENT_TARGET);
    } else {
      // Note: EventTarget is not available in all browsers,
      // if it's not available, we instead patch the APIs in the IDL that inherit from EventTarget
      apis = NO_EVENT_TARGET;
    }

    var isDisableIECheck = _global['__Zone_disable_IE_check'] || false;
    var isEnableCrossContextCheck = _global['__Zone_enable_cross_context_check'] || false;
    var ieOrEdge = api.isIEOrEdge();
    var ADD_EVENT_LISTENER_SOURCE = '.addEventListener:';
    var FUNCTION_WRAPPER = '[object FunctionWrapper]';
    var BROWSER_TOOLS = 'function __BROWSERTOOLS_CONSOLE_SAFEFUNC() { [native code] }';
    var pointerEventsMap = {
      'MSPointerCancel': 'pointercancel',
      'MSPointerDown': 'pointerdown',
      'MSPointerEnter': 'pointerenter',
      'MSPointerHover': 'pointerhover',
      'MSPointerLeave': 'pointerleave',
      'MSPointerMove': 'pointermove',
      'MSPointerOut': 'pointerout',
      'MSPointerOver': 'pointerover',
      'MSPointerUp': 'pointerup'
    }; //  predefine all __zone_symbol__ + eventName + true/false string

    for (var i = 0; i < eventNames.length; i++) {
      var eventName = eventNames[i];
      var falseEventName = eventName + FALSE_STR;
      var trueEventName = eventName + TRUE_STR;
      var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
      var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
      zoneSymbolEventNames[eventName] = {};
      zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
      zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    } //  predefine all task.source string


    for (var i = 0; i < WTF_ISSUE_555_ARRAY.length; i++) {
      var target = WTF_ISSUE_555_ARRAY[i];
      var targets = globalSources[target] = {};

      for (var j = 0; j < eventNames.length; j++) {
        var eventName = eventNames[j];
        targets[eventName] = target + ADD_EVENT_LISTENER_SOURCE + eventName;
      }
    }

    var checkIEAndCrossContext = function checkIEAndCrossContext(nativeDelegate, delegate, target, args) {
      if (!isDisableIECheck && ieOrEdge) {
        if (isEnableCrossContextCheck) {
          try {
            var testString = delegate.toString();

            if (testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS) {
              nativeDelegate.apply(target, args);
              return false;
            }
          } catch (error) {
            nativeDelegate.apply(target, args);
            return false;
          }
        } else {
          var testString = delegate.toString();

          if (testString === FUNCTION_WRAPPER || testString == BROWSER_TOOLS) {
            nativeDelegate.apply(target, args);
            return false;
          }
        }
      } else if (isEnableCrossContextCheck) {
        try {
          delegate.toString();
        } catch (error) {
          nativeDelegate.apply(target, args);
          return false;
        }
      }

      return true;
    };

    var apiTypes = [];

    for (var i = 0; i < apis.length; i++) {
      var type = _global[apis[i]];
      apiTypes.push(type && type.prototype);
    } // vh is validateHandler to check event handler
    // is valid or not(for security check)


    api.patchEventTarget(_global, apiTypes, {
      vh: checkIEAndCrossContext,
      transferEventName: function transferEventName(eventName) {
        var pointerEventName = pointerEventsMap[eventName];
        return pointerEventName || eventName;
      }
    });
    Zone[api.symbol('patchEventTarget')] = !!_global[EVENT_TARGET];
    return true;
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */
  // we have to patch the instance since the proto is non-configurable


  function apply(api, _global) {
    var _a = api.getGlobalObjects(),
        ADD_EVENT_LISTENER_STR = _a.ADD_EVENT_LISTENER_STR,
        REMOVE_EVENT_LISTENER_STR = _a.REMOVE_EVENT_LISTENER_STR;

    var WS = _global.WebSocket; // On Safari window.EventTarget doesn't exist so need to patch WS add/removeEventListener
    // On older Chrome, no need since EventTarget was already patched

    if (!_global.EventTarget) {
      api.patchEventTarget(_global, [WS.prototype]);
    }

    _global.WebSocket = function (x, y) {
      var socket = arguments.length > 1 ? new WS(x, y) : new WS(x);
      var proxySocket;
      var proxySocketProto; // Safari 7.0 has non-configurable own 'onmessage' and friends properties on the socket instance

      var onmessageDesc = api.ObjectGetOwnPropertyDescriptor(socket, 'onmessage');

      if (onmessageDesc && onmessageDesc.configurable === false) {
        proxySocket = api.ObjectCreate(socket); // socket have own property descriptor 'onopen', 'onmessage', 'onclose', 'onerror'
        // but proxySocket not, so we will keep socket as prototype and pass it to
        // patchOnProperties method

        proxySocketProto = socket;
        [ADD_EVENT_LISTENER_STR, REMOVE_EVENT_LISTENER_STR, 'send', 'close'].forEach(function (propName) {
          proxySocket[propName] = function () {
            var args = api.ArraySlice.call(arguments);

            if (propName === ADD_EVENT_LISTENER_STR || propName === REMOVE_EVENT_LISTENER_STR) {
              var eventName = args.length > 0 ? args[0] : undefined;

              if (eventName) {
                var propertySymbol = Zone.__symbol__('ON_PROPERTY' + eventName);

                socket[propertySymbol] = proxySocket[propertySymbol];
              }
            }

            return socket[propName].apply(socket, args);
          };
        });
      } else {
        // we can patch the real socket
        proxySocket = socket;
      }

      api.patchOnProperties(proxySocket, ['close', 'error', 'message', 'open'], proxySocketProto);
      return proxySocket;
    };

    var globalWebSocket = _global['WebSocket'];

    for (var prop in WS) {
      globalWebSocket[prop] = WS[prop];
    }
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function propertyDescriptorLegacyPatch(api, _global) {
    var _a = api.getGlobalObjects(),
        isNode = _a.isNode,
        isMix = _a.isMix;

    if (isNode && !isMix) {
      return;
    }

    if (!canPatchViaPropertyDescriptor(api, _global)) {
      var supportsWebSocket = typeof WebSocket !== 'undefined'; // Safari, Android browsers (Jelly Bean)

      patchViaCapturingAllTheEvents(api);
      api.patchClass('XMLHttpRequest');

      if (supportsWebSocket) {
        apply(api, _global);
      }

      Zone[api.symbol('patchEvents')] = true;
    }
  }

  function canPatchViaPropertyDescriptor(api, _global) {
    var _a = api.getGlobalObjects(),
        isBrowser = _a.isBrowser,
        isMix = _a.isMix;

    if ((isBrowser || isMix) && !api.ObjectGetOwnPropertyDescriptor(HTMLElement.prototype, 'onclick') && typeof Element !== 'undefined') {
      // WebKit https://bugs.webkit.org/show_bug.cgi?id=134364
      // IDL interface attributes are not configurable
      var desc = api.ObjectGetOwnPropertyDescriptor(Element.prototype, 'onclick');
      if (desc && !desc.configurable) return false; // try to use onclick to detect whether we can patch via propertyDescriptor
      // because XMLHttpRequest is not available in service worker

      if (desc) {
        api.ObjectDefineProperty(Element.prototype, 'onclick', {
          enumerable: true,
          configurable: true,
          get: function get() {
            return true;
          }
        });
        var div = document.createElement('div');
        var result = !!div.onclick;
        api.ObjectDefineProperty(Element.prototype, 'onclick', desc);
        return result;
      }
    }

    var XMLHttpRequest = _global['XMLHttpRequest'];

    if (!XMLHttpRequest) {
      // XMLHttpRequest is not available in service worker
      return false;
    }

    var ON_READY_STATE_CHANGE = 'onreadystatechange';
    var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
    var xhrDesc = api.ObjectGetOwnPropertyDescriptor(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE); // add enumerable and configurable here because in opera
    // by default XMLHttpRequest.prototype.onreadystatechange is undefined
    // without adding enumerable and configurable will cause onreadystatechange
    // non-configurable
    // and if XMLHttpRequest.prototype.onreadystatechange is undefined,
    // we should set a real desc instead a fake one

    if (xhrDesc) {
      api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return true;
        }
      });
      var req = new XMLHttpRequest();
      var result = !!req.onreadystatechange; // restore original desc

      api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, xhrDesc || {});
      return result;
    } else {
      var SYMBOL_FAKE_ONREADYSTATECHANGE_1 = api.symbol('fake');
      api.ObjectDefineProperty(XMLHttpRequestPrototype, ON_READY_STATE_CHANGE, {
        enumerable: true,
        configurable: true,
        get: function get() {
          return this[SYMBOL_FAKE_ONREADYSTATECHANGE_1];
        },
        set: function set(value) {
          this[SYMBOL_FAKE_ONREADYSTATECHANGE_1] = value;
        }
      });
      var req = new XMLHttpRequest();

      var detectFunc = function detectFunc() {};

      req.onreadystatechange = detectFunc;
      var result = req[SYMBOL_FAKE_ONREADYSTATECHANGE_1] === detectFunc;
      req.onreadystatechange = null;
      return result;
    }
  } // Whenever any eventListener fires, we check the eventListener target and all parents
  // for `onwhatever` properties and replace them with zone-bound functions
  // - Chrome (for now)


  function patchViaCapturingAllTheEvents(api) {
    var eventNames = api.getGlobalObjects().eventNames;
    var unboundKey = api.symbol('unbound');

    var _loop_4 = function _loop_4(i) {
      var property = eventNames[i];
      var onproperty = 'on' + property;
      self.addEventListener(property, function (event) {
        var elt = event.target,
            bound,
            source;

        if (elt) {
          source = elt.constructor['name'] + '.' + onproperty;
        } else {
          source = 'unknown.' + onproperty;
        }

        while (elt) {
          if (elt[onproperty] && !elt[onproperty][unboundKey]) {
            bound = api.wrapWithCurrentZone(elt[onproperty], source);
            bound[unboundKey] = elt[onproperty];
            elt[onproperty] = bound;
          }

          elt = elt.parentElement;
        }
      }, true);
    };

    for (var i = 0; i < eventNames.length; i++) {
      _loop_4(i);
    }
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function registerElementPatch(_global, api) {
    var _a = api.getGlobalObjects(),
        isBrowser = _a.isBrowser,
        isMix = _a.isMix;

    if (!isBrowser && !isMix || !('registerElement' in _global.document)) {
      return;
    }

    var callbacks = ['createdCallback', 'attachedCallback', 'detachedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, document, 'Document', 'registerElement', callbacks);
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  (function (_global) {
    var symbolPrefix = _global['__Zone_symbol_prefix'] || '__zone_symbol__';

    function __symbol__(name) {
      return symbolPrefix + name;
    }

    _global[__symbol__('legacyPatch')] = function () {
      var Zone = _global['Zone'];

      Zone.__load_patch('defineProperty', function (global, Zone, api) {
        api._redefineProperty = _redefineProperty;
        propertyPatch();
      });

      Zone.__load_patch('registerElement', function (global, Zone, api) {
        registerElementPatch(global, api);
      });

      Zone.__load_patch('EventTargetLegacy', function (global, Zone, api) {
        eventTargetLegacyPatch(global, api);
        propertyDescriptorLegacyPatch(api, global);
      });
    };
  })(typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {});
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  var taskSymbol = zoneSymbol('zoneTask');

  function patchTimer(window, setName, cancelName, nameSuffix) {
    var setNative = null;
    var clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    var tasksByHandleId = {};

    function scheduleTask(task) {
      var data = task.data;

      function timer() {
        try {
          task.invoke.apply(this, arguments);
        } finally {
          // issue-934, task will be cancelled
          // even it is a periodic task such as
          // setInterval
          if (!(task.data && task.data.isPeriodic)) {
            if (typeof data.handleId === 'number') {
              // in non-nodejs env, we remove timerId
              // from local cache
              delete tasksByHandleId[data.handleId];
            } else if (data.handleId) {
              // Node returns complex objects as handleIds
              // we remove task reference from timer object
              data.handleId[taskSymbol] = null;
            }
          }
        }
      }

      data.args[0] = timer;
      data.handleId = setNative.apply(window, data.args);
      return task;
    }

    function clearTask(task) {
      return clearNative(task.data.handleId);
    }

    setNative = patchMethod(window, setName, function (delegate) {
      return function (self, args) {
        if (typeof args[0] === 'function') {
          var options = {
            isPeriodic: nameSuffix === 'Interval',
            delay: nameSuffix === 'Timeout' || nameSuffix === 'Interval' ? args[1] || 0 : undefined,
            args: args
          };
          var task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);

          if (!task) {
            return task;
          } // Node.js must additionally support the ref and unref functions.


          var handle = task.data.handleId;

          if (typeof handle === 'number') {
            // for non nodejs env, we save handleId: task
            // mapping in local cache for clearTimeout
            tasksByHandleId[handle] = task;
          } else if (handle) {
            // for nodejs env, we save task
            // reference in timerId Object for clearTimeout
            handle[taskSymbol] = task;
          } // check whether handle is null, because some polyfill or browser
          // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame


          if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' && typeof handle.unref === 'function') {
            task.ref = handle.ref.bind(handle);
            task.unref = handle.unref.bind(handle);
          }

          if (typeof handle === 'number' || handle) {
            return handle;
          }

          return task;
        } else {
          // cause an error by calling it directly.
          return delegate.apply(window, args);
        }
      };
    });
    clearNative = patchMethod(window, cancelName, function (delegate) {
      return function (self, args) {
        var id = args[0];
        var task;

        if (typeof id === 'number') {
          // non nodejs env.
          task = tasksByHandleId[id];
        } else {
          // nodejs env.
          task = id && id[taskSymbol]; // other environments.

          if (!task) {
            task = id;
          }
        }

        if (task && typeof task.type === 'string') {
          if (task.state !== 'notScheduled' && (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
            if (typeof id === 'number') {
              delete tasksByHandleId[id];
            } else if (id) {
              id[taskSymbol] = null;
            } // Do not cancel already canceled functions


            task.zone.cancelTask(task);
          }
        } else {
          // cause an error by calling it directly.
          delegate.apply(window, args);
        }
      };
    });
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function patchCustomElements(_global, api) {
    var _a = api.getGlobalObjects(),
        isBrowser = _a.isBrowser,
        isMix = _a.isMix;

    if (!isBrowser && !isMix || !_global['customElements'] || !('customElements' in _global)) {
      return;
    }

    var callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  function eventTargetPatch(_global, api) {
    if (Zone[api.symbol('patchEventTarget')]) {
      // EventTarget is already patched.
      return;
    }

    var _a = api.getGlobalObjects(),
        eventNames = _a.eventNames,
        zoneSymbolEventNames = _a.zoneSymbolEventNames,
        TRUE_STR = _a.TRUE_STR,
        FALSE_STR = _a.FALSE_STR,
        ZONE_SYMBOL_PREFIX = _a.ZONE_SYMBOL_PREFIX; //  predefine all __zone_symbol__ + eventName + true/false string


    for (var i = 0; i < eventNames.length; i++) {
      var eventName = eventNames[i];
      var falseEventName = eventName + FALSE_STR;
      var trueEventName = eventName + TRUE_STR;
      var symbol = ZONE_SYMBOL_PREFIX + falseEventName;
      var symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
      zoneSymbolEventNames[eventName] = {};
      zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
      zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }

    var EVENT_TARGET = _global['EventTarget'];

    if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
      return;
    }

    api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
    return true;
  }

  function patchEvent(global, api) {
    api.patchEventPrototype(global, api);
  }
  /**
   * @license
   * Copyright Google Inc. All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   */


  Zone.__load_patch('legacy', function (global) {
    var legacyPatch = global[Zone.__symbol__('legacyPatch')];

    if (legacyPatch) {
      legacyPatch();
    }
  });

  Zone.__load_patch('timers', function (global) {
    var set = 'set';
    var clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
  });

  Zone.__load_patch('requestAnimationFrame', function (global) {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
  });

  Zone.__load_patch('blocking', function (global, Zone) {
    var blockingMethods = ['alert', 'prompt', 'confirm'];

    for (var i = 0; i < blockingMethods.length; i++) {
      var name_2 = blockingMethods[i];
      patchMethod(global, name_2, function (delegate, symbol, name) {
        return function (s, args) {
          return Zone.current.run(delegate, global, args, name);
        };
      });
    }
  });

  Zone.__load_patch('EventTarget', function (global, Zone, api) {
    patchEvent(global, api);
    eventTargetPatch(global, api); // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener

    var XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];

    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
      api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }

    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
  });

  Zone.__load_patch('on_property', function (global, Zone, api) {
    propertyDescriptorPatch(api, global);
  });

  Zone.__load_patch('customElements', function (global, Zone, api) {
    patchCustomElements(global, api);
  });

  Zone.__load_patch('XHR', function (global, Zone) {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    var XHR_TASK = zoneSymbol('xhrTask');
    var XHR_SYNC = zoneSymbol('xhrSync');
    var XHR_LISTENER = zoneSymbol('xhrListener');
    var XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    var XHR_URL = zoneSymbol('xhrURL');
    var XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');

    function patchXHR(window) {
      var XMLHttpRequest = window['XMLHttpRequest'];

      if (!XMLHttpRequest) {
        // XMLHttpRequest is not available in service worker
        return;
      }

      var XMLHttpRequestPrototype = XMLHttpRequest.prototype;

      function findPendingTask(target) {
        return target[XHR_TASK];
      }

      var oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
      var oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];

      if (!oriAddListener) {
        var XMLHttpRequestEventTarget_1 = window['XMLHttpRequestEventTarget'];

        if (XMLHttpRequestEventTarget_1) {
          var XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget_1.prototype;
          oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }
      }

      var READY_STATE_CHANGE = 'readystatechange';
      var SCHEDULED = 'scheduled';

      function scheduleTask(task) {
        var data = task.data;
        var target = data.target;
        target[XHR_SCHEDULED] = false;
        target[XHR_ERROR_BEFORE_SCHEDULED] = false; // remove existing event listener

        var listener = target[XHR_LISTENER];

        if (!oriAddListener) {
          oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
          oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        }

        if (listener) {
          oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
        }

        var newListener = target[XHR_LISTENER] = function () {
          if (target.readyState === target.DONE) {
            // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
            // readyState=4 multiple times, so we need to check task state here
            if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
              // check whether the xhr has registered onload listener
              // if that is the case, the task should invoke after all
              // onload listeners finish.
              var loadTasks = target[Zone.__symbol__('loadfalse')];

              if (loadTasks && loadTasks.length > 0) {
                var oriInvoke_1 = task.invoke;

                task.invoke = function () {
                  // need to load the tasks again, because in other
                  // load listener, they may remove themselves
                  var loadTasks = target[Zone.__symbol__('loadfalse')];

                  for (var i = 0; i < loadTasks.length; i++) {
                    if (loadTasks[i] === task) {
                      loadTasks.splice(i, 1);
                    }
                  }

                  if (!data.aborted && task.state === SCHEDULED) {
                    oriInvoke_1.call(task);
                  }
                };

                loadTasks.push(task);
              } else {
                task.invoke();
              }
            } else if (!data.aborted && target[XHR_SCHEDULED] === false) {
              // error occurs when xhr.send()
              target[XHR_ERROR_BEFORE_SCHEDULED] = true;
            }
          }
        };

        oriAddListener.call(target, READY_STATE_CHANGE, newListener);
        var storedTask = target[XHR_TASK];

        if (!storedTask) {
          target[XHR_TASK] = task;
        }

        sendNative.apply(target, data.args);
        target[XHR_SCHEDULED] = true;
        return task;
      }

      function placeholderCallback() {}

      function clearTask(task) {
        var data = task.data; // Note - ideally, we would call data.target.removeEventListener here, but it's too late
        // to prevent it from firing. So instead, we store info for the event listener.

        data.aborted = true;
        return abortNative.apply(data.target, data.args);
      }

      var openNative = patchMethod(XMLHttpRequestPrototype, 'open', function () {
        return function (self, args) {
          self[XHR_SYNC] = args[2] == false;
          self[XHR_URL] = args[1];
          return openNative.apply(self, args);
        };
      });
      var XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
      var fetchTaskAborting = zoneSymbol('fetchTaskAborting');
      var fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
      var sendNative = patchMethod(XMLHttpRequestPrototype, 'send', function () {
        return function (self, args) {
          if (Zone.current[fetchTaskScheduling] === true) {
            // a fetch is scheduling, so we are using xhr to polyfill fetch
            // and because we already schedule macroTask for fetch, we should
            // not schedule a macroTask for xhr again
            return sendNative.apply(self, args);
          }

          if (self[XHR_SYNC]) {
            // if the XHR is sync there is no task to schedule, just execute the code.
            return sendNative.apply(self, args);
          } else {
            var options = {
              target: self,
              url: self[XHR_URL],
              isPeriodic: false,
              args: args,
              aborted: false
            };
            var task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);

            if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted && task.state === SCHEDULED) {
              // xhr request throw error when send
              // we should invoke task instead of leaving a scheduled
              // pending macroTask
              task.invoke();
            }
          }
        };
      });
      var abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', function () {
        return function (self, args) {
          var task = findPendingTask(self);

          if (task && typeof task.type == 'string') {
            // If the XHR has already completed, do nothing.
            // If the XHR has already been aborted, do nothing.
            // Fix #569, call abort multiple times before done will cause
            // macroTask task count be negative number
            if (task.cancelFn == null || task.data && task.data.aborted) {
              return;
            }

            task.zone.cancelTask(task);
          } else if (Zone.current[fetchTaskAborting] === true) {
            // the abort is called from fetch polyfill, we need to call native abort of XHR.
            return abortNative.apply(self, args);
          } // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
          // task
          // to cancel. Do nothing.

        };
      });
    }
  });

  Zone.__load_patch('geolocation', function (global) {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
      patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
  });

  Zone.__load_patch('PromiseRejectionEvent', function (global, Zone) {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
      return function (e) {
        var eventTasks = findEventTasks(global, evtName);
        eventTasks.forEach(function (eventTask) {
          // windows has added unhandledrejection event listener
          // trigger the event listener
          var PromiseRejectionEvent = global['PromiseRejectionEvent'];

          if (PromiseRejectionEvent) {
            var evt = new PromiseRejectionEvent(evtName, {
              promise: e.promise,
              reason: e.rejection
            });
            eventTask.invoke(evt);
          }
        });
      };
    }

    if (global['PromiseRejectionEvent']) {
      Zone[zoneSymbol('unhandledPromiseRejectionHandler')] = findPromiseRejectionHandler('unhandledrejection');
      Zone[zoneSymbol('rejectionHandledHandler')] = findPromiseRejectionHandler('rejectionhandled');
    }
  });
});

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/add-creation-thumbnail/add-creation-thumbnail.component.css":
/*!*************************************************************************!*\
  !*** ./src/add-creation-thumbnail/add-creation-thumbnail.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\r\n    text-align: center;\r\n    font-size: 0.75vw;\r\n  }\r\n  \r\n  h2 {\r\n    text-align: center;\r\n    font-size: 0.50vw;\r\n  }\r\n  \r\n  img {\r\n    height: 200px;\r\n  }\r\n  \r\n  .container {\r\n    position: relative;\r\n    color: black;\r\n    padding-top: 0px;\r\n    padding-right: 0px;\r\n    padding-bottom: 0px;\r\n    padding-left: 0px;\r\n  }\r\n  \r\n  .overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    opacity: 0;\r\n    transition: .5s ease;\r\n    background-color: black;\r\n  }\r\n  \r\n  .container:hover .overlay {\r\n    opacity: 0.75;\r\n  }\r\n  \r\n  .overlay_text {\r\n    color: white;\r\n    font-size: 20px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hZGQtY3JlYXRpb24tdGh1bWJuYWlsL2FkZC1jcmVhdGlvbi10aHVtYm5haWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCxPQUFPO0lBQ1AsUUFBUTtJQUNSLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsdUJBQXVCO0VBQ3pCOztFQUVBO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsb0NBQW9DO0VBQ3RDIiwiZmlsZSI6InNyYy9hZGQtY3JlYXRpb24tdGh1bWJuYWlsL2FkZC1jcmVhdGlvbi10aHVtYm5haWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC43NXZ3O1xyXG4gIH1cclxuICBcclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuNTB2dztcclxuICB9XHJcbiAgXHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWluZXI6aG92ZXIgLm92ZXJsYXkge1xyXG4gICAgb3BhY2l0eTogMC43NTtcclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXlfdGV4dCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/add-creation-thumbnail/add-creation-thumbnail.component.ts":
/*!************************************************************************!*\
  !*** ./src/add-creation-thumbnail/add-creation-thumbnail.component.ts ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.AddCreationThumbnailComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var AddCreationThumbnailComponent = /** @class */ (function () {
    function AddCreationThumbnailComponent() {
    }
    AddCreationThumbnailComponent.prototype.ngOnInit = function () {
    };
    AddCreationThumbnailComponent.ctorParameters = function () { return []; };
    AddCreationThumbnailComponent = __decorate([
        core_1.Component({
            selector: 'app-add-creation-thumbnail',
            template: __importDefault(__webpack_require__(/*! raw-loader!./add-creation-thumbnail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/add-creation-thumbnail/add-creation-thumbnail.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./add-creation-thumbnail.component.css */ "./src/add-creation-thumbnail/add-creation-thumbnail.component.css"))["default"]]
        })
    ], AddCreationThumbnailComponent);
    return AddCreationThumbnailComponent;
}());
exports.AddCreationThumbnailComponent = AddCreationThumbnailComponent;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var landing_page_component_1 = __webpack_require__(/*! ../landing-page/landing-page.component */ "./src/landing-page/landing-page.component.ts");
var creation_page_component_1 = __webpack_require__(/*! ../creation-page/creation-page.component */ "./src/creation-page/creation-page.component.ts");
var creator_page_component_1 = __webpack_require__(/*! ../creator-page/creator-page.component */ "./src/creator-page/creator-page.component.ts");
var routes = [
    { path: '', component: landing_page_component_1.LandingPageComponent },
    { path: 'creation/:id', component: creation_page_component_1.CreationPageComponent },
    { path: 'creator/:id', component: creator_page_component_1.CreatorPageComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.actions.ts":
/*!********************************!*\
  !*** ./src/app/app.actions.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.initialize_state = void 0;
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
exports.initialize_state = store_1.createAction('[App Root] Initialize State');


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p {\r\n  font-family: Lato;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xyXG4gIGZvbnQtZmFtaWx5OiBMYXRvO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
var ComponentActions = __webpack_require__(/*! ./app.actions */ "./src/app/app.actions.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
        this.name = 'Angular ' + core_1.VERSION.major;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.store.dispatch(ComponentActions.initialize_state());
    };
    AppComponent.ctorParameters = function () { return [
        { type: store_1.Store }
    ]; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css"))["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
var creationReducer = __webpack_require__(/*! ../creation/creation.reducer */ "./src/creation/creation.reducer.ts");
var creatorReducer = __webpack_require__(/*! ../creator/creator.reducer */ "./src/creator/creator.reducer.ts");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var app_routing_module_1 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
var hello_component_1 = __webpack_require__(/*! ./hello.component */ "./src/app/hello.component.ts");
var navbar_component_1 = __webpack_require__(/*! ../navbar/navbar.component */ "./src/navbar/navbar.component.ts");
var landing_page_component_1 = __webpack_require__(/*! ../landing-page/landing-page.component */ "./src/landing-page/landing-page.component.ts");
var topics_bar_component_1 = __webpack_require__(/*! ../topics-bar/topics-bar.component */ "./src/topics-bar/topics-bar.component.ts");
var creation_page_component_1 = __webpack_require__(/*! ../creation-page/creation-page.component */ "./src/creation-page/creation-page.component.ts");
var creation_thumbnail_component_1 = __webpack_require__(/*! ../creation-thumbnail/creation-thumbnail.component */ "./src/creation-thumbnail/creation-thumbnail.component.ts");
var creator_page_component_1 = __webpack_require__(/*! ../creator-page/creator-page.component */ "./src/creator-page/creator-page.component.ts");
var netflix_feed_component_1 = __webpack_require__(/*! ../netflix-feed/netflix-feed.component */ "./src/netflix-feed/netflix-feed.component.ts");
var join_modal_component_1 = __webpack_require__(/*! ../join-modal/join-modal.component */ "./src/join-modal/join-modal.component.ts");
var viewer_join_component_1 = __webpack_require__(/*! ../viewer-join/viewer-join.component */ "./src/viewer-join/viewer-join.component.ts");
var creator_join_component_1 = __webpack_require__(/*! ../creator-join/creator-join.component */ "./src/creator-join/creator-join.component.ts");
var connect_join_component_1 = __webpack_require__(/*! ../connect-join/connect-join.component */ "./src/connect-join/connect-join.component.ts");
var login_modal_component_1 = __webpack_require__(/*! ../login-modal/login-modal.component */ "./src/login-modal/login-modal.component.ts");
var login_form_component_1 = __webpack_require__(/*! ../login-form/login-form.component */ "./src/login-form/login-form.component.ts");
var comment_section_component_1 = __webpack_require__(/*! ../comment-section/comment-section.component */ "./src/comment-section/comment-section.component.ts");
var primary_comment_component_1 = __webpack_require__(/*! ../primary-comment/primary-comment.component */ "./src/primary-comment/primary-comment.component.ts");
var comment_box_component_1 = __webpack_require__(/*! ../comment-box/comment-box.component */ "./src/comment-box/comment-box.component.ts");
var secondary_comment_component_1 = __webpack_require__(/*! ../secondary-comment/secondary-comment.component */ "./src/secondary-comment/secondary-comment.component.ts");
var add_creation_thumbnail_component_1 = __webpack_require__(/*! ../add-creation-thumbnail/add-creation-thumbnail.component */ "./src/add-creation-thumbnail/add-creation-thumbnail.component.ts");
var create_creation_modal_component_1 = __webpack_require__(/*! ../create-creation-modal/create-creation-modal.component */ "./src/create-creation-modal/create-creation-modal.component.ts");
var modify_creation_form_component_1 = __webpack_require__(/*! ../modify-creation-form/modify-creation-form.component */ "./src/modify-creation-form/modify-creation-form.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                app_routing_module_1.AppRoutingModule,
                store_1.StoreModule.forRoot({
                    creation: creationReducer.reducer,
                    creator: creatorReducer.reducer
                }),
            ],
            declarations: [
                app_component_1.AppComponent,
                hello_component_1.HelloComponent,
                navbar_component_1.NavbarComponent,
                landing_page_component_1.LandingPageComponent,
                topics_bar_component_1.TopicsBarComponent,
                creation_page_component_1.CreationPageComponent,
                creation_thumbnail_component_1.CreationThumbnailComponent,
                creator_page_component_1.CreatorPageComponent,
                netflix_feed_component_1.NetflixFeedComponent,
                join_modal_component_1.JoinModalComponent,
                viewer_join_component_1.ViewerJoinComponent,
                creator_join_component_1.CreatorJoinComponent,
                connect_join_component_1.ConnectJoinComponent,
                login_modal_component_1.LoginModalComponent,
                login_form_component_1.LoginFormComponent,
                comment_section_component_1.CommentSectionComponent,
                primary_comment_component_1.PrimaryCommentComponent,
                comment_box_component_1.CommentBoxComponent,
                secondary_comment_component_1.SecondaryCommentComponent,
                add_creation_thumbnail_component_1.AddCreationThumbnailComponent,
                create_creation_modal_component_1.CreateCreationModalComponent,
                modify_creation_form_component_1.ModifyCreationFormComponent,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/hello.component.ts":
/*!************************************!*\
  !*** ./src/app/hello.component.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HelloComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var HelloComponent = /** @class */ (function () {
    function HelloComponent() {
    }
    HelloComponent.propDecorators = {
        name: [{ type: core_1.Input }]
    };
    HelloComponent = __decorate([
        core_1.Component({
            selector: 'hello',
            template: "<h1>Hello {{name}}!</h1>",
            styles: ["h1 { font-family: Lato; }"]
        })
    ], HelloComponent);
    return HelloComponent;
}());
exports.HelloComponent = HelloComponent;


/***/ }),

/***/ "./src/comment-box/comment-box.component.css":
/*!***************************************************!*\
  !*** ./src/comment-box/comment-box.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tbWVudC1ib3gvY29tbWVudC1ib3guY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/comment-box/comment-box.component.ts":
/*!**************************************************!*\
  !*** ./src/comment-box/comment-box.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.CommentBoxComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
var CommentBoxComponent = /** @class */ (function () {
    function CommentBoxComponent() {
        this.submittedComment = new core_1.EventEmitter();
        this.commentForm = new forms_1.FormGroup({
            content: new forms_1.FormControl('')
        });
    }
    CommentBoxComponent.prototype.ngOnInit = function () {
    };
    CommentBoxComponent.prototype.onSubmit = function () {
        var comment = {
            author: 'dummy_author',
            content: this.commentForm.value['content']
        };
        this.submittedComment.emit(comment);
        this.commentForm.reset();
    };
    CommentBoxComponent.ctorParameters = function () { return []; };
    CommentBoxComponent.propDecorators = {
        submittedComment: [{ type: core_1.Output }]
    };
    CommentBoxComponent = __decorate([
        core_1.Component({
            selector: 'app-comment-box',
            template: __importDefault(__webpack_require__(/*! raw-loader!./comment-box.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/comment-box/comment-box.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./comment-box.component.css */ "./src/comment-box/comment-box.component.css"))["default"]]
        })
    ], CommentBoxComponent);
    return CommentBoxComponent;
}());
exports.CommentBoxComponent = CommentBoxComponent;


/***/ }),

/***/ "./src/comment-section/comment-section.actions.ts":
/*!********************************************************!*\
  !*** ./src/comment-section/comment-section.actions.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.add_primary_comment = exports.add_dummy_comments = void 0;
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
exports.add_dummy_comments = store_1.createAction('[Comment Section] add dummy comments', store_1.props());
exports.add_primary_comment = store_1.createAction('[Comment Section] add primary comment', store_1.props());


/***/ }),

/***/ "./src/comment-section/comment-section.component.css":
/*!***********************************************************!*\
  !*** ./src/comment-section/comment-section.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29tbWVudC1zZWN0aW9uL2NvbW1lbnQtc2VjdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/comment-section/comment-section.component.ts":
/*!**********************************************************!*\
  !*** ./src/comment-section/comment-section.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.CommentSectionComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
var ComponentActions = __webpack_require__(/*! ./comment-section.actions */ "./src/comment-section/comment-section.actions.ts");
var CommentSectionComponent = /** @class */ (function () {
    function CommentSectionComponent(store) {
        this.store = store;
    }
    CommentSectionComponent.prototype.ngOnInit = function () {
    };
    CommentSectionComponent.prototype.addDummyComments = function () {
        this.store.dispatch(ComponentActions.add_dummy_comments({
            'creationId': this.creationId
        }));
    };
    CommentSectionComponent.prototype.commentIsSubmitted = function (event) {
        var submittedComment = {
            comment: event,
            replies: []
        };
        this.store.dispatch(ComponentActions.add_primary_comment({
            'creationId': this.creationId,
            'comment': submittedComment
        }));
    };
    CommentSectionComponent.ctorParameters = function () { return [
        { type: store_1.Store }
    ]; };
    CommentSectionComponent.propDecorators = {
        creationId: [{ type: core_1.Input }],
        creation: [{ type: core_1.Input }]
    };
    CommentSectionComponent = __decorate([
        core_1.Component({
            selector: 'app-comment-section',
            template: __importDefault(__webpack_require__(/*! raw-loader!./comment-section.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/comment-section/comment-section.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./comment-section.component.css */ "./src/comment-section/comment-section.component.css"))["default"]]
        })
    ], CommentSectionComponent);
    return CommentSectionComponent;
}());
exports.CommentSectionComponent = CommentSectionComponent;


/***/ }),

/***/ "./src/connect-join/connect-join.component.css":
/*!*****************************************************!*\
  !*** ./src/connect-join/connect-join.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY29ubmVjdC1qb2luL2Nvbm5lY3Qtam9pbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/connect-join/connect-join.component.ts":
/*!****************************************************!*\
  !*** ./src/connect-join/connect-join.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ConnectJoinComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
var ConnectJoinComponent = /** @class */ (function () {
    function ConnectJoinComponent() {
        this.joinForm = new forms_1.FormGroup({
            firstName: new forms_1.FormControl(''),
            lastName: new forms_1.FormControl(''),
            email: new forms_1.FormControl(''),
            username: new forms_1.FormControl(''),
            password: new forms_1.FormControl('')
        });
    }
    ConnectJoinComponent.prototype.ngOnInit = function () {
    };
    ConnectJoinComponent.prototype.onSubmit = function () {
        var message = "Submitted, first name: " + this.joinForm.value['firstName'];
        alert(message);
    };
    ConnectJoinComponent.ctorParameters = function () { return []; };
    ConnectJoinComponent.propDecorators = {
        visible: [{ type: core_1.Input }]
    };
    ConnectJoinComponent = __decorate([
        core_1.Component({
            selector: 'app-connect-join',
            template: __importDefault(__webpack_require__(/*! raw-loader!./connect-join.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/connect-join/connect-join.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./connect-join.component.css */ "./src/connect-join/connect-join.component.css"))["default"]]
        })
    ], ConnectJoinComponent);
    return ConnectJoinComponent;
}());
exports.ConnectJoinComponent = ConnectJoinComponent;


/***/ }),

/***/ "./src/create-creation-modal/create-creation-modal.component.css":
/*!***********************************************************************!*\
  !*** ./src/create-creation-modal/create-creation-modal.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY3JlYXRlLWNyZWF0aW9uLW1vZGFsL2NyZWF0ZS1jcmVhdGlvbi1tb2RhbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/create-creation-modal/create-creation-modal.component.ts":
/*!**********************************************************************!*\
  !*** ./src/create-creation-modal/create-creation-modal.component.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.CreateCreationModalComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var CreateCreationModalComponent = /** @class */ (function () {
    function CreateCreationModalComponent() {
    }
    CreateCreationModalComponent.prototype.ngOnInit = function () {
    };
    CreateCreationModalComponent.ctorParameters = function () { return []; };
    CreateCreationModalComponent.propDecorators = {
        creatorId: [{ type: core_1.Input }]
    };
    CreateCreationModalComponent = __decorate([
        core_1.Component({
            selector: 'app-create-creation-modal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./create-creation-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/create-creation-modal/create-creation-modal.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./create-creation-modal.component.css */ "./src/create-creation-modal/create-creation-modal.component.css"))["default"]]
        })
    ], CreateCreationModalComponent);
    return CreateCreationModalComponent;
}());
exports.CreateCreationModalComponent = CreateCreationModalComponent;


/***/ }),

/***/ "./src/creation-page/creation-page.component.css":
/*!*******************************************************!*\
  !*** ./src/creation-page/creation-page.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY3JlYXRpb24tcGFnZS9jcmVhdGlvbi1wYWdlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/creation-page/creation-page.component.ts":
/*!******************************************************!*\
  !*** ./src/creation-page/creation-page.component.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.CreationPageComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
var CreationSelectors = __webpack_require__(/*! ../creation/creation.selector */ "./src/creation/creation.selector.ts");
var CreatorSelectors = __webpack_require__(/*! ../creator/creator.selector */ "./src/creator/creator.selector.ts");
var CreationPageComponent = /** @class */ (function () {
    function CreationPageComponent(store, route, sanitizer) {
        this.store = store;
        this.route = route;
        this.sanitizer = sanitizer;
    }
    CreationPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.id = Number(params.get('id'));
            _this.creation = _this.store.pipe(store_1.select(CreationSelectors.selectCreationById, { creationId: _this.id }));
            _this.creator = _this.creation.pipe(operators_1.flatMap(function (cr) {
                return _this.store.pipe(store_1.select(CreatorSelectors.selectCreationById, { creatorId: cr.creator_id }));
            }));
            _this.creationUrl = _this.creation
                .pipe(operators_1.map(function (c) { return _this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + c.youtube_id); }));
        });
    };
    CreationPageComponent.ctorParameters = function () { return [
        { type: store_1.Store },
        { type: router_1.ActivatedRoute },
        { type: platform_browser_1.DomSanitizer }
    ]; };
    CreationPageComponent = __decorate([
        core_1.Component({
            selector: 'app-creation-page',
            template: __importDefault(__webpack_require__(/*! raw-loader!./creation-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/creation-page/creation-page.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./creation-page.component.css */ "./src/creation-page/creation-page.component.css"))["default"]]
        })
    ], CreationPageComponent);
    return CreationPageComponent;
}());
exports.CreationPageComponent = CreationPageComponent;


/***/ }),

/***/ "./src/creation-thumbnail/creation-thumbnail.component.css":
/*!*****************************************************************!*\
  !*** ./src/creation-thumbnail/creation-thumbnail.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\r\n  text-align: center;\r\n  font-size: 0.75vw;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  font-size: 0.50vw;\r\n}\r\n\r\nimg {\r\n  height: 200px;\r\n}\r\n\r\n.container {\r\n  position: relative;\r\n  color: black;\r\n  padding-top: 0px;\r\n  padding-right: 0px;\r\n  padding-bottom: 0px;\r\n  padding-left: 0px;\r\n}\r\n\r\n.overlay {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  opacity: 0;\r\n  transition: .5s ease;\r\n  background-color: black;\r\n}\r\n\r\n.container:hover .overlay {\r\n  opacity: 0.75;\r\n}\r\n\r\n.overlay_text {\r\n  color: white;\r\n  font-size: 20px;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jcmVhdGlvbi10aHVtYm5haWwvY3JlYXRpb24tdGh1bWJuYWlsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixVQUFVO0VBQ1Ysb0JBQW9CO0VBQ3BCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLG9DQUFvQztBQUN0QyIsImZpbGUiOiJzcmMvY3JlYXRpb24tdGh1bWJuYWlsL2NyZWF0aW9uLXRodW1ibmFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuNzV2dztcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuNTB2dztcclxufVxyXG5cclxuaW1nIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jb250YWluZXI6aG92ZXIgLm92ZXJsYXkge1xyXG4gIG9wYWNpdHk6IDAuNzU7XHJcbn1cclxuXHJcbi5vdmVybGF5X3RleHQge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/creation-thumbnail/creation-thumbnail.component.ts":
/*!****************************************************************!*\
  !*** ./src/creation-thumbnail/creation-thumbnail.component.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.CreationThumbnailComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
var CreationThumbnailComponent = /** @class */ (function () {
    function CreationThumbnailComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    CreationThumbnailComponent.prototype.ngOnInit = function () {
        this.thumbnailUrl = this.sanitizer.bypassSecurityTrustResourceUrl("https://img.youtube.com/vi/" + this.creation.youtube_id + "/0.jpg");
    };
    CreationThumbnailComponent.ctorParameters = function () { return [
        { type: platform_browser_1.DomSanitizer }
    ]; };
    CreationThumbnailComponent.propDecorators = {
        creation: [{ type: core_1.Input }]
    };
    CreationThumbnailComponent = __decorate([
        core_1.Component({
            selector: 'app-creation-thumbnail',
            template: __importDefault(__webpack_require__(/*! raw-loader!./creation-thumbnail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/creation-thumbnail/creation-thumbnail.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./creation-thumbnail.component.css */ "./src/creation-thumbnail/creation-thumbnail.component.css"))["default"]]
        })
    ], CreationThumbnailComponent);
    return CreationThumbnailComponent;
}());
exports.CreationThumbnailComponent = CreationThumbnailComponent;


/***/ }),

/***/ "./src/creation/creation.reducer.ts":
/*!******************************************!*\
  !*** ./src/creation/creation.reducer.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.reducer = void 0;
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
var AppRootActions = __webpack_require__(/*! ../app/app.actions */ "./src/app/app.actions.ts");
var CommentSectionActions = __webpack_require__(/*! ../comment-section/comment-section.actions */ "./src/comment-section/comment-section.actions.ts");
var PrimaryCommentActions = __webpack_require__(/*! ../primary-comment/primary-comment.actions */ "./src/primary-comment/primary-comment.actions.ts");
var ModifyCreationFormActions = __webpack_require__(/*! ../modify-creation-form/modify-creation-form.actions */ "./src/modify-creation-form/modify-creation-form.actions.ts");
var creation_1 = __webpack_require__(/*! ./creation */ "./src/creation/creation.ts");
var silly_animation_videos_1 = __webpack_require__(/*! ./silly_animation_videos */ "./src/creation/silly_animation_videos.ts");
function addDummyCommentsHandler(state, props) {
    var comment1 = {
        comment: {
            author: 'author1',
            content: 'I think such and such'
        },
        replies: []
    };
    var comment2 = {
        comment: {
            author: 'author2',
            content: 'oh yea? well that is crazy'
        },
        replies: [{
                author: 'author3',
                content: 'Yea, you\'re nuts'
            }, {
                author: 'author4',
                content: 'Guys, give him a break.'
            }]
    };
    var comment3 = {
        comment: {
            author: 'author1',
            content: 'I still think such and such'
        },
        replies: []
    };
    var creations = state.creations;
    return { creations: creations.map(function (creation) {
            if (creation.id == props.creationId) {
                var updated = {
                    id: creation.id,
                    title: creation.title,
                    creator_id: creation.creator_id,
                    youtube_id: creation.youtube_id,
                    description: creation.description,
                    category: creation.category,
                    comments: [comment1, comment2, comment3]
                };
                return updated;
            }
            else {
                return creation;
            }
        })
    };
}
function addPrimaryCommentHandler(state, props) {
    var creations = state.creations;
    return { creations: creations.map(function (creation) {
            if (creation.id == props.creationId) {
                var updated = {
                    id: creation.id,
                    title: creation.title,
                    creator_id: creation.creator_id,
                    youtube_id: creation.youtube_id,
                    description: creation.description,
                    category: creation.category,
                    comments: creation.comments.concat([props.comment])
                };
                return updated;
            }
            else {
                return creation;
            }
        })
    };
}
function addReplyHandler(state, props) {
    var creations = state.creations;
    return { creations: creations.map(function (creation) {
            if (creation.id == props.creationId) {
                var updatedComments = creation.comments.map(function (comment, index) {
                    if (index == props.primaryCommentIndex) {
                        var updatedComment = {
                            comment: comment.comment,
                            replies: comment.replies.concat([props.reply])
                        };
                        return updatedComment;
                    }
                    else {
                        return comment;
                    }
                });
                var updated = {
                    id: creation.id,
                    title: creation.title,
                    creator_id: creation.creator_id,
                    youtube_id: creation.youtube_id,
                    description: creation.description,
                    category: creation.category,
                    comments: updatedComments
                };
                return updated;
            }
            else {
                return creation;
            }
        }) };
}
function modifyCreationHandler(state, props) {
    // Addition of new creation
    if (props['creationId'] == null) {
        var creationId = Math.floor(Math.random() * 1000000000);
        var newCreation = {
            id: creationId,
            creator_id: props['creatorId'],
            title: props['title'],
            description: props['description'],
            youtube_id: props['youtubeId'],
            category: props['category'],
            comments: []
        };
        console.log(newCreation);
        return { creations: __spreadArrays(state.creations, [newCreation]) };
    }
    // Modification not yet supported
    console.log('modifyCreation called with id ' + props['creationId'] + ' but creation modification is unsupported');
}
var appRootReducer = store_1.createReducer(creation_1.initialState, store_1.on(AppRootActions.initialize_state, function (state) { return ({ creations: silly_animation_videos_1.SILLY_ANIMATION_VIDEOS }); }), store_1.on(CommentSectionActions.add_dummy_comments, addDummyCommentsHandler), store_1.on(CommentSectionActions.add_primary_comment, addPrimaryCommentHandler), store_1.on(PrimaryCommentActions.add_reply, addReplyHandler), store_1.on(ModifyCreationFormActions.modify_creation, modifyCreationHandler));
function reducer(state, action) {
    return appRootReducer(state, action);
}
exports.reducer = reducer;


/***/ }),

/***/ "./src/creation/creation.selector.ts":
/*!*******************************************!*\
  !*** ./src/creation/creation.selector.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.selectCreationById = exports.selectCreationsByCreatorId = exports.selectCreationsByCategory = void 0;
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
function creationsFromAppState(state) {
    return state.creation.creations;
}
function creationsByCategoryFilter(creations, props) {
    var category = props.category;
    if (category == null) {
        console.log('creationsByCategoryFilter called with no category');
        return [];
    }
    else if (creations == null) {
        console.log('creationsByCategoryFilter called with null creations');
        return [];
    }
    else {
        var res = creations.filter(function (creation) { return creation.category == category; });
        return res;
    }
}
exports.selectCreationsByCategory = store_1.createSelector(creationsFromAppState, creationsByCategoryFilter);
function creationsByCreatorId(creations, props) {
    var creatorId = props.creatorId;
    if (creatorId == null) {
        console.log('creationsByCreatorId called with no creatorId');
        return [];
    }
    else if (creations == null) {
        console.log('creationsByCreatorId called with null creations');
        return [];
    }
    else {
        return creations.filter(function (creation) { return creation.creator_id == creatorId; });
    }
}
exports.selectCreationsByCreatorId = store_1.createSelector(creationsFromAppState, creationsByCreatorId);
function creationById(creations, props) {
    var creationId = props.creationId;
    if (creationId == null) {
        console.log('creationById called with no creationId');
        return null;
    }
    else if (creations == null) {
        console.log('creationById called with null creations');
        return null;
    }
    else {
        var res = creations.filter(function (creation) { return creation.id == creationId; });
        if (res.length == 0) {
            console.log('No creation found with ID ' + creationId);
            return null;
        }
        else if (res.length > 1) {
            console.log('More than one creation found with ID ' + creationId);
            return null;
        }
        return res[0];
    }
}
exports.selectCreationById = store_1.createSelector(creationsFromAppState, creationById);


/***/ }),

/***/ "./src/creation/creation.ts":
/*!**********************************!*\
  !*** ./src/creation/creation.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.initialState = exports.Category = void 0;
var Category;
(function (Category) {
    Category["JOYFUL"] = "Joyful";
    Category["HORRIFYING"] = "Horrifying";
    Category["FUNNY"] = "Funny";
    Category["HEARTFELT"] = "Heartfelt";
    Category["MISC"] = "Miscellaneous Awesomeness";
    Category["EXCITING"] = "Exciting";
})(Category = exports.Category || (exports.Category = {}));
(function (Category) {
    function values() {
        return [
            Category.JOYFUL,
            Category.HORRIFYING,
            Category.FUNNY,
            Category.HEARTFELT,
            Category.MISC,
            Category.EXCITING
        ];
    }
    Category.values = values;
})(Category = exports.Category || (exports.Category = {}));
exports.initialState = {
    creations: []
};


/***/ }),

/***/ "./src/creation/silly_animation_videos.ts":
/*!************************************************!*\
  !*** ./src/creation/silly_animation_videos.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.SILLY_ANIMATION_VIDEOS = void 0;
var creation_1 = __webpack_require__(/*! ./creation */ "./src/creation/creation.ts");
exports.SILLY_ANIMATION_VIDEOS = [
    {
        id: 1,
        title: 'Funny videos : Funny Cartoons -  Try not to laugh or grin',
        creator_id: 4,
        youtube_id: 'sra_H9o7pjA',
        description: 'Funny videos : Funny Cartoons - Try not to laugh or grin .We update videos once a day for you to get your laughs! IKE, COMMENT ...',
        category: creation_1.Category.JOYFUL,
        comments: []
    },
    {
        id: 2,
        title: 'CRACKÉ - UPSET STOMACH | Funny Videos For Kids | Videos For Kids | WildBrain Cartoons',
        creator_id: 7,
        youtube_id: 'kdwRWC5yc20',
        description: 'Ed must save his eggs from inside a crocodile.SUBSCRIBE for more Cracké: http://bit.ly/2zcmQxbMore about Cracké: http ...',
        category: creation_1.Category.JOYFUL,
        comments: []
    },
    {
        id: 3,
        title: 'Three Little Pigs Cartoon | Silly Crocodile Fairy Tales & Bedtime Stories for Kids | 3 Little Pigs',
        creator_id: 7,
        youtube_id: 'WhlLUvWr7Ng',
        description: 'Three Little Pigs!  Three Little Pigs!  Here’s a silly crocodile cartoon about your fairy tale Three Little Pigs story! OK ...',
        category: creation_1.Category.JOYFUL,
        comments: []
    },
    {
        id: 4,
        title: 'Silly Symphony Lambert The Sheepish Lion',
        creator_id: 7,
        youtube_id: 'NCfaBjdh5V4',
        description: 'Subscribe My Channel for More & New Cartoon videos ▻▻ https://goo.gl/UgQckA You will find nice cartoon videos, Cartoon for ...',
        category: creation_1.Category.JOYFUL,
        comments: []
    },
    {
        id: 5,
        title: 'Animation Silly Symphony Flowers And Trees Disney Movies   Movies For Kids   Animation6',
        creator_id: 7,
        youtube_id: 'rH-OTZm0Xtk',
        description: 'Subscribe My Channel for More & New Cartoon videos ▻▻ https://goo.gl/LcZxEu You will find nice cartoon videos, Cartoon for ...',
        category: creation_1.Category.JOYFUL,
        comments: []
    },
    {
        id: 6,
        title: "WORLD'S MOST HILARIOUS FORTNITE ANIMATIONS!",
        creator_id: 7,
        youtube_id: '85n_e9XVZAM',
        description: "WORLD'S MOST HILARIOUS FORTNITE ANIMATIONS!Videos reacted to:Hybrid & the Sunny Steps | The Squad (Fortnite Animation ...",
        category: creation_1.Category.JOYFUL,
        comments: []
    },
    {
        id: 7,
        title: 'FNaF FUNNY Try Not To Laugh Challenge 2020',
        creator_id: 3,
        youtube_id: 'f5JZTvGFgV8',
        description: 'FNaF FUNNY Try Not To Laugh Challenge 2020Can you get to the end of the funny fnaf video WITHOUT laughing? Let me know now in ...',
        category: creation_1.Category.JOYFUL,
        comments: []
    },
    {
        id: 8,
        title: 'Funny CGI 3d Animated Short Film ** BIG CATCH ** Hilarious CGI Animation Kids Cartoon by Moles Merlo',
        creator_id: 2,
        youtube_id: 'Anw_bhEzsys',
        description: 'Enjoy this super funny Kids CGI 3d Animated short film THE BIG CATCH, by Imerges Studios and Moles Merlo. Featured at ...',
        category: creation_1.Category.FUNNY,
        comments: []
    },
    {
        id: 9,
        title: 'Cartoon Box Catch Up 14 | The BEST of Cartoon Box | Hilarious Cartoon Compilation | Marilyn Monroe',
        creator_id: 0,
        youtube_id: 'KXrrocvk2k4',
        description: 'SUBSCRIBE for weekly NEW Episodes! 👉 https://goo.gl/XnUgLFThis is a funny cartoon box compilation. The BEST Cartoon Box ...',
        category: creation_1.Category.FUNNY,
        comments: []
    },
    {
        id: 10,
        title: 'The Lion King  Silly Symphony Lambert | Disney Cartoon',
        creator_id: 9,
        youtube_id: 'VvY50vOIWl8',
        description: 'Watch The Lion King Silly Symphony Lambert | Disney Cartoon.',
        category: creation_1.Category.FUNNY,
        comments: []
    },
    {
        id: 11,
        title: 'Silly Symphony Flowers And Trees',
        creator_id: 9,
        youtube_id: 'gjnzlj5ihkY',
        description: 'Subscribe My Channel for More & New Cartoon videos ▻▻ https://goo.gl/UgQckA You will find nice cartoon videos, Cartoon for ...',
        category: creation_1.Category.FUNNY,
        comments: []
    },
    {
        id: 12,
        title: 'HILARIOUS ANIMATIONS To Watch When You WANT TO LAUGH!',
        creator_id: 1,
        youtube_id: 'QTiaaRz93c4',
        description: 'HILARIOUS ANIMATIONS To Watch When You WANT TO LAUGH!Welcome back to more hilarious animations! These hilarious animations ...',
        category: creation_1.Category.FUNNY,
        comments: []
    },
    {
        id: 13,
        title: 'Silly Symphonies - The Skeleton Dance',
        creator_id: 1,
        youtube_id: 'vOGhAV-84iI',
        description: 'As we hear the chimes at midnight and bats flutter from a belfry; as a hound howls at the full moon and black cats brawl on the ...',
        category: creation_1.Category.HEARTFELT,
        comments: []
    },
    {
        id: 14,
        title: 'Silly Symphony Little Hiawatha',
        creator_id: 7,
        youtube_id: 'PZ7D6kp8PIU',
        description: 'Subscribe My Channel for More & New Cartoon videos ▻▻ https://goo.gl/UgQckA You will find nice cartoon videos, Cartoon for ...',
        category: creation_1.Category.HEARTFELT,
        comments: []
    },
    {
        id: 15,
        title: 'HILARIOUS Minecraft Animation Which Will Make You CRY Of LAUGHTER!',
        creator_id: 2,
        youtube_id: 'FNApaFRSSyc',
        description: 'HILARIOUS Minecraft Animation Which Will Make You CRY Of LAUGHTER!This hilarious minecraft animation will make you cry of ...',
        category: creation_1.Category.HEARTFELT,
        comments: []
    },
    {
        id: 16,
        title: 'Animation Silly Symphony Lambert The Sheepish Lion Disney Movies   Movies For Kids   A6',
        creator_id: 0,
        youtube_id: 'D_gXvAUUdUQ',
        description: 'Subscribe My Channel for More & New Cartoon videos ▻▻ https://goo.gl/LcZxEu You will find nice cartoon videos, Cartoon for ...',
        category: creation_1.Category.HEARTFELT,
        comments: []
    },
    {
        id: 17,
        title: 'Try Watching This HILARIOUS Animation WITHOUT Laughing!',
        creator_id: 8,
        youtube_id: 'dJUhkXTjewM',
        description: 'Get the NEW merch! https://fanjoy.co/collections/KwebbelkopTry Watching This HILARIOUS Animation WITHOUT Laughing!Video ...',
        category: creation_1.Category.HEARTFELT,
        comments: []
    },
    {
        id: 19,
        title: 'MOANA | Funniest Hei Hei moments from the Disney Animated Movie',
        creator_id: 3,
        youtube_id: 'X9psEx5TNTU',
        description: "Watch our compilation of the funniest HEI HEI the chicken moments from Disney's MOANA. Keep up-to-date on the latest FAMILY ...",
        category: creation_1.Category.MISC,
        comments: []
    },
    {
        id: 20,
        title: 'Animation Silly Symphony Water Babies Disney Movies   Movies For Kids   Animation Movi6',
        creator_id: 8,
        youtube_id: '30OE97OtZ9E',
        description: 'Subscribe My Channel for More & New Cartoon videos ▻▻ https://goo.gl/LcZxEu You will find nice cartoon videos, Cartoon for ...',
        category: creation_1.Category.MISC,
        comments: []
    },
    {
        id: 21,
        title: 'Animation Silly Symphony Little Hiawatha Disney Movies   Movies For Kids   Animation M6',
        creator_id: 0,
        youtube_id: 'bulNsPAeLRQ',
        description: 'Subscribe My Channel for More & New Cartoon videos ▻▻ https://goo.gl/LcZxEu You will find nice cartoon videos, Cartoon for ...',
        category: creation_1.Category.MISC,
        comments: []
    }
];


/***/ }),

/***/ "./src/creator-join/creator-join.component.css":
/*!*****************************************************!*\
  !*** ./src/creator-join/creator-join.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY3JlYXRvci1qb2luL2NyZWF0b3Itam9pbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/creator-join/creator-join.component.ts":
/*!****************************************************!*\
  !*** ./src/creator-join/creator-join.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.CreatorJoinComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
var CreatorJoinComponent = /** @class */ (function () {
    function CreatorJoinComponent() {
        this.joinForm = new forms_1.FormGroup({
            firstName: new forms_1.FormControl(''),
            lastName: new forms_1.FormControl(''),
            email: new forms_1.FormControl(''),
            username: new forms_1.FormControl(''),
            password: new forms_1.FormControl(''),
            description: new forms_1.FormControl('')
        });
    }
    CreatorJoinComponent.prototype.ngOnInit = function () {
    };
    CreatorJoinComponent.prototype.onSubmit = function () {
        var message = "Submitted, first name: " + this.joinForm.value['firstName'];
        alert(message);
    };
    CreatorJoinComponent.ctorParameters = function () { return []; };
    CreatorJoinComponent.propDecorators = {
        visible: [{ type: core_1.Input }]
    };
    CreatorJoinComponent = __decorate([
        core_1.Component({
            selector: 'app-creator-join',
            template: __importDefault(__webpack_require__(/*! raw-loader!./creator-join.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/creator-join/creator-join.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./creator-join.component.css */ "./src/creator-join/creator-join.component.css"))["default"]]
        })
    ], CreatorJoinComponent);
    return CreatorJoinComponent;
}());
exports.CreatorJoinComponent = CreatorJoinComponent;


/***/ }),

/***/ "./src/creator-page/creator-page.component.css":
/*!*****************************************************!*\
  !*** ./src/creator-page/creator-page.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvY3JlYXRvci1wYWdlL2NyZWF0b3ItcGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/creator-page/creator-page.component.ts":
/*!****************************************************!*\
  !*** ./src/creator-page/creator-page.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.CreatorPageComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var router_1 = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
var CreatorSelectors = __webpack_require__(/*! ../creator/creator.selector */ "./src/creator/creator.selector.ts");
var netflix_feed_component_1 = __webpack_require__(/*! ../netflix-feed/netflix-feed.component */ "./src/netflix-feed/netflix-feed.component.ts");
var CreatorPageComponent = /** @class */ (function () {
    function CreatorPageComponent(store, route) {
        this.store = store;
        this.route = route;
        this.modes = netflix_feed_component_1.FeedMode;
    }
    CreatorPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap.subscribe(function (params) {
            _this.creator = _this.store.pipe(store_1.select(CreatorSelectors.selectCreationById, { creatorId: Number(params.get('id')) }));
        });
    };
    CreatorPageComponent.ctorParameters = function () { return [
        { type: store_1.Store },
        { type: router_1.ActivatedRoute }
    ]; };
    CreatorPageComponent = __decorate([
        core_1.Component({
            selector: 'app-creator-page',
            template: __importDefault(__webpack_require__(/*! raw-loader!./creator-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/creator-page/creator-page.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./creator-page.component.css */ "./src/creator-page/creator-page.component.css"))["default"]]
        })
    ], CreatorPageComponent);
    return CreatorPageComponent;
}());
exports.CreatorPageComponent = CreatorPageComponent;


/***/ }),

/***/ "./src/creator/creator.reducer.ts":
/*!****************************************!*\
  !*** ./src/creator/creator.reducer.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.reducer = void 0;
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
var creator_1 = __webpack_require__(/*! ./creator */ "./src/creator/creator.ts");
var AppRootActions = __webpack_require__(/*! ../app/app.actions */ "./src/app/app.actions.ts");
var creator_database_1 = __webpack_require__(/*! ./creator_database */ "./src/creator/creator_database.ts");
var appRootReducer = store_1.createReducer(creator_1.initialState, store_1.on(AppRootActions.initialize_state, function (state) { return ({ creators: creator_database_1.CREATOR_LIST }); }));
function reducer(state, action) {
    return appRootReducer(state, action);
}
exports.reducer = reducer;


/***/ }),

/***/ "./src/creator/creator.selector.ts":
/*!*****************************************!*\
  !*** ./src/creator/creator.selector.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.selectCreationById = void 0;
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
function creatorsFromAppState(state) {
    return state.creator.creators;
}
function creatorById(creators, props) {
    var creatorId = props.creatorId;
    if (creatorId == null) {
        console.log('creatorById called with no creatorId');
        return null;
    }
    else if (creators == null) {
        console.log('creatorById called with null creators');
        return null;
    }
    else {
        var res = creators.filter(function (creator) { return creator.id == creatorId; });
        if (res.length == 0) {
            console.log('No creator found with ID ' + creatorId);
            return null;
        }
        else if (res.length > 1) {
            console.log('More than one creator found with ID ' + creatorId);
            return null;
        }
        return res[0];
    }
}
exports.selectCreationById = store_1.createSelector(creatorsFromAppState, creatorById);


/***/ }),

/***/ "./src/creator/creator.ts":
/*!********************************!*\
  !*** ./src/creator/creator.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.initialState = void 0;
exports.initialState = {
    creators: []
};


/***/ }),

/***/ "./src/creator/creator_database.ts":
/*!*****************************************!*\
  !*** ./src/creator/creator_database.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.CREATOR_LIST = void 0;
exports.CREATOR_LIST = [
    {
        id: 0,
        name: 'Creator_0',
        img_path: 'https://www.yourdictionary.com/images/definitions/lg/10750.person.jpg',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean nec mi et orci imperdiet consectetur. Duis sagittis vulputate ipsum in consectetur. Ut convallis semper magna ac mollis. Donec gravida purus ac tortor iaculis mollis eget et lorem. In dictum lectus vitae commodo feugiat. Ut gravida, dui a feugiat luctus, ante enim rutrum turpis, sed laoreet leo risus sit amet diam. Aliquam erat volutpat. Aenean non urna ac augue ultrices tincidunt. Aliquam non turpis vestibulum, tempus ante ac, porttitor orci. Nunc sed quam at lorem pulvinar scelerisque semper et nunc. Nunc mi neque, sodales consectetur pretium ac, imperdiet nec ligula. Integer malesuada neque nec metus venenatis luctus. In hac habitasse platea dictumst. Fusce nunc nibh, dictum nec urna in, interdum eleifend diam. Donec mattis nec metus eu euismod.'
    },
    {
        id: 1,
        name: 'Creator_1',
        img_path: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/03/18/15/billgates.jpg',
        bio: 'Donec in tortor turpis. Vestibulum sollicitudin dui est, vel vestibulum nulla pharetra id. Aliquam purus enim, maximus eu consectetur ac, dictum quis eros. Integer consectetur erat in gravida tincidunt. Integer cursus aliquam nunc sed varius. Nulla iaculis, nulla sed sodales finibus, neque orci rhoncus urna, vel tempor nulla felis in ligula. In rhoncus est nec nulla dignissim congue. Pellentesque vulputate eleifend enim, vitae maximus purus efficitur eu.'
    },
    {
        id: 2,
        name: 'Creator_2',
        img_path: 'https://cdn2.lamag.com/wp-content/uploads/sites/6/2019/06/keanu-reeves-person-of-the-year-karwai-tang-getty-1068x717.jpg',
        bio: 'Morbi eget odio non libero vulputate ornare. Quisque non justo id justo accumsan iaculis posuere eget diam. Vivamus sit amet mauris turpis. Mauris non gravida ex. Nunc vel eleifend augue. Nulla sollicitudin elit risus, finibus semper enim interdum ut. Nulla facilisi. Integer ullamcorper ante quis purus congue, dignissim maximus augue laoreet. Ut maximus congue placerat. Morbi at enim risus. Morbi suscipit eros at nisl finibus bibendum. Fusce et neque sit amet dui dignissim faucibus vitae id odio. Suspendisse a aliquet diam.'
    },
    {
        id: 3,
        name: 'Creator_3',
        img_path: 'https://i1.wp.com/highlysensitiverefuge.com/wp-content/uploads/2018/08/what-is-highly-sensitive-person-meaning.jpg?resize=1150%2C701&ssl=1',
        bio: 'In id justo convallis, elementum felis sit amet, consectetur ante. Mauris aliquet dapibus diam, in gravida est mattis id. Aenean faucibus erat quam, ut molestie nunc semper vitae. Sed bibendum orci vitae pellentesque malesuada. Suspendisse aliquam lectus enim. Sed tincidunt orci quis mollis dictum. Pellentesque molestie, arcu at ultricies sollicitudin, odio lacus lobortis leo, non scelerisque tellus dolor ac sapien. Nullam et odio justo. Mauris consequat vel est id viverra. Nullam pretium justo non varius cursus. Nam egestas, augue non pharetra consequat, metus elit luctus purus, nec tincidunt orci elit nec augue. Proin interdum ligula vitae ornare venenatis. Quisque hendrerit lacinia cursus. Vivamus sodales sapien eget volutpat dictum.'
    },
    {
        id: 4,
        name: 'Creator_4',
        img_path: 'https://cdn.pixabay.com/photo/2017/08/25/21/43/frustrated-2681484_960_720.jpg',
        bio: 'Vestibulum cursus eros libero, sed semper odio hendrerit id. Nam eget tristique augue. Fusce blandit lacus quis sapien sollicitudin, eget dictum enim maximus. Maecenas faucibus enim sit amet malesuada fermentum. Vivamus et purus lectus. Sed posuere scelerisque facilisis. Duis nec interdum tellus, sed tincidunt est. Integer eget blandit ligula. Proin nec tortor ante. Duis est felis, pellentesque laoreet nisl sit amet, dapibus sagittis risus. Cras consectetur orci efficitur sem sodales, et pellentesque metus aliquam.'
    },
    {
        id: 5,
        name: 'Creator_5',
        img_path: 'https://play-images-prod-cms.tech.tvnz.co.nz/api/v1/web/image/content/dam/images/entertainment/shows/p/person-of-interest/personofinterest_coverimg.png.2017-03-08T11:21:33+13:00.jpg?width=960&height=540',
        bio: 'Donec suscipit luctus ante, non efficitur erat posuere eget. Morbi dui ipsum, dictum non aliquam ac, interdum eget ligula. Integer at diam ut sem pharetra ultricies. Etiam ut sem in eros mollis condimentum. Vestibulum arcu turpis, lobortis id porttitor et, imperdiet in orci. Sed a pellentesque diam. Aliquam risus augue, consequat consectetur sollicitudin nec, congue nec velit. Morbi vitae pharetra nisi, vitae tincidunt dolor.'
    },
    {
        id: 6,
        name: 'Creator_6',
        img_path: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alzheimers.org.uk%2Fget-support%2Fhelp-dementia-care%2Funderstanding-supporting-person-dementia&psig=AOvVaw19Dbmu1V3dLJrvsNo1of33&ust=1592419889631000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjuj8GAh-oCFQAAAAAdAAAAABBP',
        bio: 'Praesent malesuada lacus vel nunc congue, vel lacinia odio hendrerit. Nunc vel ligula a magna semper viverra. Donec in augue lectus. Mauris eu neque consequat urna ultrices viverra non vel urna. Sed tincidunt nisi quis vestibulum suscipit. Aenean lectus nisi, suscipit nec venenatis nec, ullamcorper in velit. Nam tellus ligula, maximus eleifend ornare a, vehicula quis ligula. Praesent id tempor velit, non tincidunt elit. Aenean porta, diam in cursus tempor, lorem dolor laoreet nibh, non ultricies justo leo a urna. Nunc augue velit, scelerisque vitae massa at, aliquet rhoncus augue. Morbi convallis enim sed erat venenatis interdum. Praesent pulvinar lorem tellus, id posuere ipsum tempus vitae. Quisque tincidunt maximus nisi, ac aliquam lectus placerat eget.'
    },
    {
        id: 7,
        name: 'Creator_7',
        img_path: 'https://post.healthline.com/wp-content/uploads/2019/02/How-to-Become-a-Better-Person-in-12-Steps_1200x628-facebook.jpg',
        bio: 'In ac est euismod velit consectetur viverra eget a ipsum. Ut a dolor eros. Suspendisse iaculis vel augue vitae mollis. Duis laoreet ex dui, id elementum nunc viverra sit amet. Nullam ac sapien eros. Morbi lorem augue, convallis in scelerisque eget, varius vitae est. Sed malesuada tellus ut velit rutrum pretium. Donec posuere sed ante ut tempor. In quis felis eget ligula auctor sodales. Curabitur lobortis finibus lacus quis lacinia. Donec accumsan gravida elit eu bibendum.'
    },
    {
        id: 8,
        name: 'Creator_8',
        img_path: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wbur.org%2Fnews%2F2019%2F07%2F23%2Fsteve-pemberton-ed-markey&psig=AOvVaw19Dbmu1V3dLJrvsNo1of33&ust=1592419889631000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjuj8GAh-oCFQAAAAAdAAAAABBa',
        bio: 'Nunc sit amet augue ut justo congue laoreet eget ut augue. Donec et placerat magna. Nunc nunc mauris, vulputate ut mollis sit amet, dignissim volutpat nisi. Pellentesque ultrices ullamcorper mi eu porta. Sed ipsum massa, consequat in sagittis ut, facilisis vel est. Vestibulum nec viverra eros, eget pellentesque nibh. Suspendisse leo odio, lacinia eu porttitor nec, pharetra id eros.'
    },
    {
        id: 9,
        name: 'Creator_9',
        img_path: 'https://cdn.cnn.com/cnnnext/dam/assets/191211130116-02-greta-thunberg-file-exlarge-169.jpg',
        bio: 'Nullam leo tellus, gravida nec nunc et, eleifend lacinia nisl. Proin in consectetur tortor, id viverra est. In hac habitasse platea dictumst. Aliquam erat volutpat. Nulla facilisi. Vivamus sapien leo, maximus eu tempor vitae, aliquet sed augue. Morbi aliquet tincidunt pulvinar. Pellentesque vitae turpis a lacus blandit luctus non ut est. Fusce sit amet erat a nibh mattis malesuada pellentesque ut eros. Duis nulla elit, tincidunt nec orci ac, semper rutrum elit.'
    }
];


/***/ }),

/***/ "./src/join-modal/join-modal.component.css":
/*!*************************************************!*\
  !*** ./src/join-modal/join-modal.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvam9pbi1tb2RhbC9qb2luLW1vZGFsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/join-modal/join-modal.component.ts":
/*!************************************************!*\
  !*** ./src/join-modal/join-modal.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.JoinModalComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var SelectedForm;
(function (SelectedForm) {
    SelectedForm[SelectedForm["NONE"] = 0] = "NONE";
    SelectedForm[SelectedForm["DISCOVER"] = 1] = "DISCOVER";
    SelectedForm[SelectedForm["SHARE"] = 2] = "SHARE";
    SelectedForm[SelectedForm["CONNECT"] = 3] = "CONNECT";
})(SelectedForm || (SelectedForm = {}));
var JoinModalComponent = /** @class */ (function () {
    function JoinModalComponent() {
        this.selectedForm = SelectedForm.NONE;
        this.forms = SelectedForm;
    }
    JoinModalComponent.prototype.ngOnInit = function () {
    };
    JoinModalComponent.prototype.onDiscoverClicked = function () {
        this.selectedForm = SelectedForm.DISCOVER;
    };
    JoinModalComponent.prototype.onShareClicked = function () {
        this.selectedForm = SelectedForm.SHARE;
    };
    JoinModalComponent.prototype.onConnectClicked = function () {
        this.selectedForm = SelectedForm.CONNECT;
    };
    JoinModalComponent.ctorParameters = function () { return []; };
    JoinModalComponent.propDecorators = {
        modalId: [{ type: core_1.Input }]
    };
    JoinModalComponent = __decorate([
        core_1.Component({
            selector: 'app-join-modal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./join-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/join-modal/join-modal.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./join-modal.component.css */ "./src/join-modal/join-modal.component.css"))["default"]]
        })
    ], JoinModalComponent);
    return JoinModalComponent;
}());
exports.JoinModalComponent = JoinModalComponent;


/***/ }),

/***/ "./src/landing-page/landing-page.component.css":
/*!*****************************************************!*\
  !*** ./src/landing-page/landing-page.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSIsImZpbGUiOiJzcmMvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/landing-page/landing-page.component.ts":
/*!****************************************************!*\
  !*** ./src/landing-page/landing-page.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.LandingPageComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var netflix_feed_component_1 = __webpack_require__(/*! ../netflix-feed/netflix-feed.component */ "./src/netflix-feed/netflix-feed.component.ts");
var creation_1 = __webpack_require__(/*! ../creation/creation */ "./src/creation/creation.ts");
var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
        this.categories = creation_1.Category;
        this.modes = netflix_feed_component_1.FeedMode;
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent.ctorParameters = function () { return []; };
    LandingPageComponent = __decorate([
        core_1.Component({
            selector: 'app-landing-page',
            template: __importDefault(__webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/landing-page/landing-page.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./landing-page.component.css */ "./src/landing-page/landing-page.component.css"))["default"]]
        })
    ], LandingPageComponent);
    return LandingPageComponent;
}());
exports.LandingPageComponent = LandingPageComponent;


/***/ }),

/***/ "./src/login-form/login-form.component.css":
/*!*************************************************!*\
  !*** ./src/login-form/login-form.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/login-form/login-form.component.ts":
/*!************************************************!*\
  !*** ./src/login-form/login-form.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.LoginFormComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent() {
        this.loginForm = new forms_1.FormGroup({
            email_username: new forms_1.FormControl(''),
            password: new forms_1.FormControl('')
        });
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.onSubmit = function () {
        alert("Login Submitted");
    };
    LoginFormComponent.ctorParameters = function () { return []; };
    LoginFormComponent = __decorate([
        core_1.Component({
            selector: 'app-login-form',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/login-form/login-form.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./login-form.component.css */ "./src/login-form/login-form.component.css"))["default"]]
        })
    ], LoginFormComponent);
    return LoginFormComponent;
}());
exports.LoginFormComponent = LoginFormComponent;


/***/ }),

/***/ "./src/login-modal/login-modal.component.css":
/*!***************************************************!*\
  !*** ./src/login-modal/login-modal.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbG9naW4tbW9kYWwvbG9naW4tbW9kYWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/login-modal/login-modal.component.ts":
/*!**************************************************!*\
  !*** ./src/login-modal/login-modal.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.LoginModalComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var LoginModalComponent = /** @class */ (function () {
    function LoginModalComponent() {
    }
    LoginModalComponent.prototype.ngOnInit = function () {
    };
    LoginModalComponent.ctorParameters = function () { return []; };
    LoginModalComponent.propDecorators = {
        modalId: [{ type: core_1.Input }]
    };
    LoginModalComponent = __decorate([
        core_1.Component({
            selector: 'app-login-modal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/login-modal/login-modal.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./login-modal.component.css */ "./src/login-modal/login-modal.component.css"))["default"]]
        })
    ], LoginModalComponent);
    return LoginModalComponent;
}());
exports.LoginModalComponent = LoginModalComponent;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
__webpack_require__(/*! ./polyfills */ "./src/polyfills.ts");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).then(function (ref) {
    // Ensure Angular destroys itself on hot reloads.
    if (window['ngRef']) {
        window['ngRef'].destroy();
    }
    window['ngRef'] = ref;
    // Otherwise, log the boot error
})["catch"](function (err) { return console.error(err); });


/***/ }),

/***/ "./src/modify-creation-form/modify-creation-form.actions.ts":
/*!******************************************************************!*\
  !*** ./src/modify-creation-form/modify-creation-form.actions.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.modify_creation = void 0;
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
exports.modify_creation = store_1.createAction('[modify-creation-form] Modify Creation', store_1.props());


/***/ }),

/***/ "./src/modify-creation-form/modify-creation-form.component.css":
/*!*********************************************************************!*\
  !*** ./src/modify-creation-form/modify-creation-form.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kaWZ5LWNyZWF0aW9uLWZvcm0vbW9kaWZ5LWNyZWF0aW9uLWZvcm0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/modify-creation-form/modify-creation-form.component.ts":
/*!********************************************************************!*\
  !*** ./src/modify-creation-form/modify-creation-form.component.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ModifyCreationFormComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
var creation_1 = __webpack_require__(/*! ../creation/creation */ "./src/creation/creation.ts");
var ComponentActions = __webpack_require__(/*! ./modify-creation-form.actions */ "./src/modify-creation-form/modify-creation-form.actions.ts");
var ModifyCreationFormComponent = /** @class */ (function () {
    function ModifyCreationFormComponent(store) {
        this.store = store;
        this.categories = creation_1.Category;
        this.creationForm = new forms_1.FormGroup({
            youtubeLink: new forms_1.FormControl(''),
            category: new forms_1.FormControl(),
            title: new forms_1.FormControl(''),
            description: new forms_1.FormControl('')
        });
    }
    ModifyCreationFormComponent.prototype.ngOnInit = function () {
    };
    ModifyCreationFormComponent.prototype.onSubmit = function () {
        var fullYoutubeLink = this.creationForm.controls['youtubeLink'].value;
        var youtubeId = fullYoutubeLink.split("=")[1];
        var props = {
            'youtubeId': youtubeId,
            'title': this.creationForm.controls['title'].value,
            'category': this.creationForm.controls['category'].value,
            'description': this.creationForm.controls['description'].value,
            'creatorId': this.creatorId,
            'creationId': null
        };
        this.store.dispatch(ComponentActions.modify_creation(props));
        this.creationForm.reset();
        var jq = $('#createCreationModal');
        jq.modal("hide");
    };
    ModifyCreationFormComponent.ctorParameters = function () { return [
        { type: store_1.Store }
    ]; };
    ModifyCreationFormComponent.propDecorators = {
        creatorId: [{ type: core_1.Input }]
    };
    ModifyCreationFormComponent = __decorate([
        core_1.Component({
            selector: 'app-modify-creation-form',
            template: __importDefault(__webpack_require__(/*! raw-loader!./modify-creation-form.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modify-creation-form/modify-creation-form.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./modify-creation-form.component.css */ "./src/modify-creation-form/modify-creation-form.component.css"))["default"]]
        })
    ], ModifyCreationFormComponent);
    return ModifyCreationFormComponent;
}());
exports.ModifyCreationFormComponent = ModifyCreationFormComponent;


/***/ }),

/***/ "./src/navbar/navbar.component.css":
/*!*****************************************!*\
  !*** ./src/navbar/navbar.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/navbar/navbar.component.ts":
/*!****************************************!*\
  !*** ./src/navbar/navbar.component.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.NavbarComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.ctorParameters = function () { return []; };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/navbar/navbar.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.css */ "./src/navbar/navbar.component.css"))["default"]]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "./src/netflix-feed/netflix-feed.component.css":
/*!*****************************************************!*\
  !*** ./src/netflix-feed/netflix-feed.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".carousel-control-prev-icon,\r\n.carousel-control-next-icon {\r\n  height: 100px;\r\n  width: 100px;\r\n  outline: black;\r\n  background-size: 100%, 100%;\r\n  border-radius: 50%;\r\n  border: 1px solid black;\r\n  background-image: none;\r\n}\r\n\r\n.col-3 {\r\n  padding-top: 0px;\r\n  padding-right: 5px;\r\n  padding-bottom: 0px;\r\n  padding-left: 5px;\r\n}\r\n\r\n.carousel-control-next-icon:after\r\n{\r\n  content: '>';\r\n  font-size: 55px;\r\n  color: black;\r\n}\r\n\r\n.carousel-control-prev-icon:after {\r\n  content: '<';\r\n  font-size: 55px;\r\n  color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9uZXRmbGl4LWZlZWQvbmV0ZmxpeC1mZWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjO0VBQ2QsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL25ldGZsaXgtZmVlZC9uZXRmbGl4LWZlZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbixcclxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uIHtcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICBvdXRsaW5lOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUsIDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7XHJcbn1cclxuXHJcbi5jb2wtMyB7XHJcbiAgcGFkZGluZy10b3A6IDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dC1pY29uOmFmdGVyXHJcbntcclxuICBjb250ZW50OiAnPic7XHJcbiAgZm9udC1zaXplOiA1NXB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNhcm91c2VsLWNvbnRyb2wtcHJldi1pY29uOmFmdGVyIHtcclxuICBjb250ZW50OiAnPCc7XHJcbiAgZm9udC1zaXplOiA1NXB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/netflix-feed/netflix-feed.component.ts":
/*!****************************************************!*\
  !*** ./src/netflix-feed/netflix-feed.component.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.NetflixFeedComponent = exports.FeedMode = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
var CreationSelectors = __webpack_require__(/*! ../creation/creation.selector */ "./src/creation/creation.selector.ts");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var CREATIONS_PER_SECTION = 4;
var FeedMode;
(function (FeedMode) {
    FeedMode[FeedMode["BY_CATEGORY"] = 0] = "BY_CATEGORY";
    FeedMode[FeedMode["BY_CREATOR"] = 1] = "BY_CREATOR";
})(FeedMode = exports.FeedMode || (exports.FeedMode = {}));
var CreationSection = /** @class */ (function () {
    function CreationSection() {
    }
    return CreationSection;
}());
var NetflixFeedComponent = /** @class */ (function () {
    function NetflixFeedComponent(store) {
        this.store = store;
        this.isCreatable = false;
    }
    NetflixFeedComponent.prototype.ngOnInit = function () {
    };
    NetflixFeedComponent.prototype.creationsPerSection = function (currentSectionNumber) {
        // If the feed isCreatable, we leave extra room for the creation thumbnail
        if (this.isCreatable) {
            if (this.mode != FeedMode.BY_CREATOR) {
                console.log("Feed isCreatable, but mode is " + this.mode);
                return CREATIONS_PER_SECTION;
            }
            else if (currentSectionNumber == 0) {
                return CREATIONS_PER_SECTION - 1;
            }
            else {
                return CREATIONS_PER_SECTION;
            }
        }
        else {
            return CREATIONS_PER_SECTION;
        }
    };
    NetflixFeedComponent.prototype.getSectionsWithKey = function (key) {
        var _this = this;
        var creationStream;
        if (this.mode == FeedMode.BY_CATEGORY) {
            creationStream = this.store.pipe(store_1.select(CreationSelectors.selectCreationsByCategory, { category: key }));
        }
        else if (this.mode == FeedMode.BY_CREATOR) {
            creationStream = this.store.pipe(store_1.select(CreationSelectors.selectCreationsByCreatorId, { creatorId: key }));
        }
        var splitCreations;
        // Fill sections
        splitCreations = creationStream.pipe(operators_1.map(function (creations) {
            var res = [];
            var currentSectionNumber = 0;
            var currentSection = new CreationSection();
            currentSection.creations = [];
            currentSection.section = currentSectionNumber;
            for (var _i = 0, creations_1 = creations; _i < creations_1.length; _i++) {
                var creation = creations_1[_i];
                if (currentSection.creations.length < _this.creationsPerSection(currentSectionNumber)) {
                    currentSection.creations.push(creation);
                }
                else {
                    res.push(currentSection);
                    currentSectionNumber++;
                    currentSection = new CreationSection();
                    currentSection.creations = [creation];
                }
            }
            if (currentSection.creations.length > 0) {
                res.push(currentSection);
            }
            // Set indexes of surrounding sections
            res.forEach(function (section, index) {
                section.section = index;
                if (index == 0) {
                    section.nextSection = (res.length == 1)
                        ? 0
                        : 1;
                    section.prevSection = res.length - 1;
                }
                else if (index == res.length - 1) {
                    section.nextSection = 0;
                    section.prevSection = (res.length == 1)
                        ? 0
                        : res.length - 2;
                }
                else {
                    section.nextSection = index + 1;
                    section.prevSection = index - 1;
                }
            });
            return res;
        }));
        return splitCreations;
    };
    NetflixFeedComponent.ctorParameters = function () { return [
        { type: store_1.Store }
    ]; };
    NetflixFeedComponent.propDecorators = {
        key: [{ type: core_1.Input }],
        mode: [{ type: core_1.Input }],
        carouselID: [{ type: core_1.Input }],
        isCreatable: [{ type: core_1.Input }]
    };
    NetflixFeedComponent = __decorate([
        core_1.Component({
            selector: 'app-netflix-feed',
            template: __importDefault(__webpack_require__(/*! raw-loader!./netflix-feed.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/netflix-feed/netflix-feed.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./netflix-feed.component.css */ "./src/netflix-feed/netflix-feed.component.css"))["default"]]
        })
    ], NetflixFeedComponent);
    return NetflixFeedComponent;
}());
exports.NetflixFeedComponent = NetflixFeedComponent;


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
exports.__esModule = true;
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** IE10 and IE11 requires the following to support `@angular/animation`. */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/** Evergreen browsers require these. **/
// import 'core-js/es6/reflect';
// import 'core-js/es7/reflect';
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
__webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone.js"); // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.


/***/ }),

/***/ "./src/primary-comment/primary-comment.actions.ts":
/*!********************************************************!*\
  !*** ./src/primary-comment/primary-comment.actions.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.add_reply = void 0;
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
exports.add_reply = store_1.createAction('[Primary Comment] add reply', store_1.props());


/***/ }),

/***/ "./src/primary-comment/primary-comment.component.css":
/*!***********************************************************!*\
  !*** ./src/primary-comment/primary-comment.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvcHJpbWFyeS1jb21tZW50L3ByaW1hcnktY29tbWVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/primary-comment/primary-comment.component.ts":
/*!**********************************************************!*\
  !*** ./src/primary-comment/primary-comment.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.PrimaryCommentComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var store_1 = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
var ComponentActions = __webpack_require__(/*! ./primary-comment.actions */ "./src/primary-comment/primary-comment.actions.ts");
var PrimaryCommentComponent = /** @class */ (function () {
    function PrimaryCommentComponent(store) {
        this.store = store;
        this.replyButtonClicked = false;
    }
    PrimaryCommentComponent.prototype.onReplyButtonClicked = function () {
        this.replyButtonClicked = true;
    };
    PrimaryCommentComponent.prototype.ngOnInit = function () {
    };
    PrimaryCommentComponent.prototype.commentIsSubmitted = function (event) {
        var submittedComment = event;
        this.store.dispatch(ComponentActions.add_reply({
            'creationId': this.creationId,
            'primaryCommentIndex': this.primaryCommentIndex,
            'reply': submittedComment
        }));
        this.replyButtonClicked = false;
    };
    PrimaryCommentComponent.ctorParameters = function () { return [
        { type: store_1.Store }
    ]; };
    PrimaryCommentComponent.propDecorators = {
        primaryComment: [{ type: core_1.Input }],
        primaryCommentIndex: [{ type: core_1.Input }],
        creationId: [{ type: core_1.Input }]
    };
    PrimaryCommentComponent = __decorate([
        core_1.Component({
            selector: 'app-primary-comment',
            template: __importDefault(__webpack_require__(/*! raw-loader!./primary-comment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/primary-comment/primary-comment.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./primary-comment.component.css */ "./src/primary-comment/primary-comment.component.css"))["default"]]
        })
    ], PrimaryCommentComponent);
    return PrimaryCommentComponent;
}());
exports.PrimaryCommentComponent = PrimaryCommentComponent;


/***/ }),

/***/ "./src/secondary-comment/secondary-comment.component.css":
/*!***************************************************************!*\
  !*** ./src/secondary-comment/secondary-comment.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvc2Vjb25kYXJ5LWNvbW1lbnQvc2Vjb25kYXJ5LWNvbW1lbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/secondary-comment/secondary-comment.component.ts":
/*!**************************************************************!*\
  !*** ./src/secondary-comment/secondary-comment.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.SecondaryCommentComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var SecondaryCommentComponent = /** @class */ (function () {
    function SecondaryCommentComponent() {
    }
    SecondaryCommentComponent.prototype.ngOnInit = function () {
    };
    SecondaryCommentComponent.ctorParameters = function () { return []; };
    SecondaryCommentComponent.propDecorators = {
        comment: [{ type: core_1.Input }]
    };
    SecondaryCommentComponent = __decorate([
        core_1.Component({
            selector: 'app-secondary-comment',
            template: __importDefault(__webpack_require__(/*! raw-loader!./secondary-comment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/secondary-comment/secondary-comment.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./secondary-comment.component.css */ "./src/secondary-comment/secondary-comment.component.css"))["default"]]
        })
    ], SecondaryCommentComponent);
    return SecondaryCommentComponent;
}());
exports.SecondaryCommentComponent = SecondaryCommentComponent;


/***/ }),

/***/ "./src/topics-bar/topics-bar.component.css":
/*!*************************************************!*\
  !*** ./src/topics-bar/topics-bar.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvdG9waWNzLWJhci90b3BpY3MtYmFyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/topics-bar/topics-bar.component.ts":
/*!************************************************!*\
  !*** ./src/topics-bar/topics-bar.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.TopicsBarComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var TopicsBarComponent = /** @class */ (function () {
    function TopicsBarComponent() {
        this.selectedCategoryChange = new core_1.EventEmitter();
    }
    TopicsBarComponent.prototype.ngOnInit = function () {
    };
    TopicsBarComponent.prototype.selectCategory = function (cat) {
        this.selectedCategory = cat;
        this.selectedCategoryChange.emit(this.selectedCategory);
    };
    TopicsBarComponent.ctorParameters = function () { return []; };
    TopicsBarComponent.propDecorators = {
        selectedCategory: [{ type: core_1.Input }],
        selectedCategoryChange: [{ type: core_1.Output }]
    };
    TopicsBarComponent = __decorate([
        core_1.Component({
            selector: 'app-topics-bar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./topics-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/topics-bar/topics-bar.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./topics-bar.component.css */ "./src/topics-bar/topics-bar.component.css"))["default"]]
        })
    ], TopicsBarComponent);
    return TopicsBarComponent;
}());
exports.TopicsBarComponent = TopicsBarComponent;


/***/ }),

/***/ "./src/viewer-join/viewer-join.component.css":
/*!***************************************************!*\
  !*** ./src/viewer-join/viewer-join.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvdmlld2VyLWpvaW4vdmlld2VyLWpvaW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/viewer-join/viewer-join.component.ts":
/*!**************************************************!*\
  !*** ./src/viewer-join/viewer-join.component.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.ViewerJoinComponent = void 0;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
var ViewerJoinComponent = /** @class */ (function () {
    function ViewerJoinComponent() {
        this.joinForm = new forms_1.FormGroup({
            firstName: new forms_1.FormControl(''),
            lastName: new forms_1.FormControl(''),
            email: new forms_1.FormControl(''),
            username: new forms_1.FormControl(''),
            password: new forms_1.FormControl('')
        });
    }
    ViewerJoinComponent.prototype.ngOnInit = function () {
    };
    ViewerJoinComponent.prototype.onSubmit = function () {
        var message = "Submitted, first name: " + this.joinForm.value['firstName'];
        alert(message);
    };
    ViewerJoinComponent.ctorParameters = function () { return []; };
    ViewerJoinComponent.propDecorators = {
        visible: [{ type: core_1.Input }]
    };
    ViewerJoinComponent = __decorate([
        core_1.Component({
            selector: 'app-viewer-join',
            template: __importDefault(__webpack_require__(/*! raw-loader!./viewer-join.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/viewer-join/viewer-join.component.html"))["default"],
            styles: [__importDefault(__webpack_require__(/*! ./viewer-join.component.css */ "./src/viewer-join/viewer-join.component.css"))["default"]]
        })
    ], ViewerJoinComponent);
    return ViewerJoinComponent;
}());
exports.ViewerJoinComponent = ViewerJoinComponent;


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Cal Peyser\Desktop\fridgeworthy-proto-1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map