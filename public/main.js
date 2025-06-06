/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.hero {\n  background-size: cover;\n  background-position: center;\n  color: white;\n  position: relative;\n  min-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 3rem 1rem;\n}\n.hero__content {\n  text-align: center;\n  z-index: 2;\n}\n.hero__image {\n  background: transparent;\n  width: 100%;\n  height: 0;\n  padding-bottom: 56.25%;\n}\n.hero__cta {\n  position: absolute;\n  bottom: 3rem;\n  left: 3rem;\n  display: inline-block;\n  padding: 1rem 2rem;\n  background-color: #8e44ec;\n  border: none;\n  color: white;\n  font-weight: bold;\n  text-transform: uppercase;\n  border-radius: 6px;\n  text-decoration: none;\n  transition: background-color 0.3s ease;\n}\n.hero__cta:hover {\n  background-color: #6f42c1;\n}\n@media (max-width: 768px) {\n  .hero__cta {\n    left: 1.5rem;\n    bottom: 2rem;\n    font-size: 0.85rem;\n    padding: 0.75rem 1.5rem;\n  }\n}\n.hero__marquee {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background-color: #8e44ec;\n  overflow: hidden;\n  height: 32px;\n  display: flex;\n  align-items: center;\n  color: white;\n}\n.hero__marquee-track {\n  display: flex;\n  gap: 2rem;\n  white-space: nowrap;\n  animation: hero-marquee 25s linear infinite;\n}\n.hero__marquee-item {\n  display: inline-block;\n  font-weight: 600;\n  text-transform: uppercase;\n  padding: 0 1rem;\n}\n@keyframes hero-marquee {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n@media (max-width: 768px) {\n  .hero__cta {\n    font-size: 0.85rem;\n    padding: 0.75rem 1.5rem;\n  }\n  .hero__marquee {\n    font-size: 0.75rem;\n  }\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.2rem 2rem;\n  background-color: #111;\n  color: #fff;\n  position: sticky;\n  top: 0;\n  z-index: 1000;\n  transition: background-color 0.3s ease, backdrop-filter 0.3s ease;\n}\n.header--transparent {\n  background-color: rgba(17, 17, 17, 0.8);\n  backdrop-filter: blur(10px);\n}\n.header__logo img {\n  height: 32px;\n}\n.header__payments {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  background: #1a1a1a;\n  padding: 0.4rem 1rem;\n  border-radius: 2rem;\n  border: 1px solid #6f42c1;\n}\n.header__payments-label {\n  font-size: 0.875rem;\n  margin-right: 0.5rem;\n}\n.header__icon {\n  height: 20px;\n  width: 20px;\n}\n.header__actions {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.header__link {\n  color: white;\n  text-decoration: none;\n}\n.header__link:hover {\n  text-decoration: underline;\n}\n.header__cart {\n  background: #8e44ec;\n  color: white;\n  border: none;\n  padding: 0.6rem;\n  border-radius: 6px;\n  font-size: 1.1rem;\n}\n@media (max-width: 768px) {\n  .header {\n    flex-direction: column;\n    gap: 1rem;\n    padding: 1rem;\n  }\n}\n\n.footer {\n  background-color: #0d0d0d;\n  padding: 2rem 2rem 0rem;\n  color: white;\n  font-family: \"Inter\", sans-serif;\n}\n.footer__container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 2rem;\n  align-items: start;\n}\n.footer__column {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.footer__column--left p {\n  line-height: 15px;\n  margin: 0;\n}\n.footer__column--left .footer__logo-img {\n  width: 120px;\n  margin-bottom: 1rem;\n}\n.footer__column--left .footer__info {\n  font-size: 0.85rem;\n  color: #ccc;\n}\n.footer__column--left .footer__info a {\n  color: inherit;\n  text-decoration: none;\n}\n.footer__column--left .footer__info a:hover {\n  color: #a259ff;\n}\n.footer__column--center {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n}\n.footer__column--center .footer__nav-list {\n  list-style: none;\n  padding: 0;\n  margin-top: -20px;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.footer__column--center .footer__nav-list li {\n  margin: 0.25rem 10px;\n  text-transform: uppercase;\n}\n.footer__column--center .footer__nav-list li a {\n  color: white;\n  font-weight: 600;\n  font-size: 0.85rem;\n  text-decoration: none;\n  font-size: 25px;\n}\n.footer__column--center .footer__nav-list li a:hover {\n  color: #a259ff;\n}\n.footer__column--center .footer__nav-sublist {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  margin-top: -30px;\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  margin-top: 0.5rem;\n}\n.footer__column--center .footer__nav-sublist li {\n  margin: 0.25rem 10px;\n  text-transform: uppercase;\n}\n.footer__column--center .footer__nav-sublist li a {\n  color: white;\n  font-weight: 600;\n  font-size: 0.85rem;\n  text-decoration: none;\n  font-size: 15px;\n}\n.footer__column--center .footer__nav-sublist li a:hover {\n  color: #a259ff;\n}\n.footer__column--center .footer_nav-pay {\n  position: absolute;\n  bottom: 0;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.footer__column--center .footer__payments {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.footer__column--center .footer__payments .footer__payment-icon {\n  width: 24px;\n  height: auto;\n}\n.footer__column--center .footer__payments .footer__payment-text {\n  font-size: 0.85rem;\n  margin-right: 0.5rem;\n}\n.footer__column--right {\n  align-items: flex-end;\n}\n.footer__column--right .footer__label {\n  font-size: 0.9rem;\n  margin-bottom: 0.5rem;\n}\n.footer__column--right .footer__newsletter {\n  display: flex;\n  margin-bottom: 1rem;\n}\n.footer__column--right .footer__newsletter input {\n  padding: 0.5rem 1rem;\n  border: none;\n  background-color: #1a1a1a;\n  color: white;\n  border-radius: 4px 0 0 4px;\n}\n.footer__column--right .footer__newsletter .footer__submit {\n  background-color: #a259ff;\n  color: white;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 0 4px 4px 0;\n  cursor: pointer;\n}\n.footer__column--right .footer__socials {\n  display: flex;\n  gap: 1rem;\n}\n.footer__column--right .footer__socials a {\n  color: #ccc;\n  font-size: 0.8rem;\n  text-decoration: none;\n}\n.footer__column--right .footer__socials a:hover {\n  color: #a259ff;\n}\n\n.footer__block {\n  display: grid;\n  grid-template-columns: 1fr 3fr 1fr;\n  gap: 2rem;\n  padding: 1rem;\n}\n@media screen and (max-width: 768px) {\n  .footer__block {\n    grid-template-columns: 1fr;\n    text-align: left;\n  }\n  .footer__block .footer__column--right {\n    align-items: center;\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .footer__column {\n    display: block;\n    flex-direction: column;\n    gap: 1rem;\n    width: 100%;\n  }\n  .footer__nav-list {\n    display: block !important;\n  }\n  .collections__grid {\n    display: block;\n  }\n  .footer__column--center .footer_nav-pay {\n    position: relative;\n  }\n  .footer__column--center .footer_nav-pay {\n    left: 40%;\n  }\n}\n.topbar {\n  background-color: #8e44ec;\n  color: white;\n  overflow: hidden;\n  white-space: nowrap;\n  font-size: 0.875rem;\n}\n.topbar__marquee {\n  display: flex;\n  align-items: center;\n  height: 32px;\n  position: relative;\n}\n.topbar__track {\n  display: flex;\n  animation: marquee 25s linear infinite;\n  gap: 2rem;\n}\n.topbar__item {\n  display: inline-block;\n  text-transform: uppercase;\n  font-weight: 600;\n  padding: 0 1rem;\n  letter-spacing: 0.5px;\n}\n@keyframes marquee {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n@media (max-width: 768px) {\n  .topbar {\n    font-size: 0.75rem;\n  }\n  .topbar__item {\n    padding: 0 0.5rem;\n  }\n}\n\n.products {\n  padding: 4rem 2rem;\n  color: white;\n  text-align: center;\n}\n.products__title {\n  font-size: 2.5rem;\n  margin-bottom: 2rem;\n  text-transform: uppercase;\n}\n.products__grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 2rem;\n  justify-items: center;\n}\n.products__footer {\n  margin-top: 2rem;\n}\n.products__btn {\n  background: #8e44ec;\n  border: none;\n  color: white;\n  font-weight: bold;\n  padding: 1rem 2rem;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: background 0.3s;\n  text-transform: uppercase;\n}\n.products__btn:hover {\n  background: #6f42c1;\n}\n\n.product-card {\n  background: transparent;\n  padding: 0;\n  border: none;\n  border-radius: 0;\n  max-width: 300px;\n  opacity: 1;\n  transform: translateY(0);\n  transition: all 0.3s ease-in-out;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  height: 100%;\n}\n.product-card__image-wrapper {\n  overflow: hidden;\n}\n.product-card__image {\n  width: 100%;\n  transition: transform 0.5s ease;\n}\n.product-card:hover .product-card__image {\n  transform: scale(1.1) rotate(1deg);\n}\n.product-card__info {\n  margin-top: 1rem;\n}\n.product-card__row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n}\n.product-card__text {\n  flex: 1;\n}\n.product-card__text .product-card__title,\n.product-card__text .product-card__price {\n  margin: 0;\n}\n.product-card__text.is-hidden {\n  display: none;\n}\n.product-card__text.fade-in {\n  display: block;\n  opacity: 0;\n  animation: fadeInUp 0.4s ease forwards;\n}\n.product-card__title {\n  font-size: 1rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n}\n.product-card__price {\n  font-size: 0.875rem;\n  margin-bottom: 0.5rem;\n}\n.product-card__cart-btn {\n  background-color: #814cff;\n  border: none;\n  border-radius: 50%;\n  padding: 0.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n.product-card__cart-btn img {\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.product-card__cart-btn:hover {\n  background-color: #a073ff;\n}\n.product-card__tags {\n  list-style: none;\n  padding: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n  justify-content: center;\n  margin-top: 0.5rem;\n}\n.product-card__tag {\n  font-size: 0.75rem;\n  background: #8e44ec;\n  padding: 0.25rem 0.5rem;\n  border-radius: 4px;\n  text-transform: uppercase;\n}\n.product-card.is-hidden {\n  display: none;\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translateY(30px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.product-card__cart-btn {\n  background-color: #8e2de2;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  border: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  cursor: pointer;\n  transition: transform 0.3s ease;\n}\n.product-card__cart-btn img {\n  width: 18px;\n  height: 18px;\n  filter: brightness(0) invert(1);\n}\n.product-card__cart-btn:hover {\n  transform: scale(1.1);\n}\n\n@media (max-width: 768px) {\n  .product-card__cart-btn {\n    width: 36px;\n    height: 36px;\n  }\n  .product-card__cart-btn img {\n    width: 18px;\n    height: 18px;\n  }\n  .products__grid {\n    grid-template-columns: repeat(1, 1fr);\n  }\n}\n.product-card__row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n}\n\n.product-card__image-wrapper {\n  height: 300px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid #8e44ec;\n  border-radius: 6px;\n  overflow: hidden;\n  padding: 0;\n  margin: 0;\n  height: 300px;\n  min-height: 300px;\n}\n\n.product-card__image {\n  height: 100%;\n  width: auto;\n  object-fit: cover;\n  display: block;\n}\n\n.product-card__info {\n  margin-top: 0.75rem;\n  text-align: left;\n}\n\n.product-card__title {\n  font-size: 1rem;\n  font-weight: 700;\n  margin-bottom: 0.25rem;\n  text-align: left;\n}\n\n.product-card__price {\n  font-size: 0.875rem;\n  margin-bottom: 0.5rem;\n  text-align: left;\n}\n\n.main {\n  background-color: #1a1a1a;\n}\n.main .main__container {\n  width: 100%;\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 1.5rem;\n  background-color: #1a1a1a;\n}\n.main .message {\n  width: 100%;\n  background-color: #1a1a1a;\n  overflow: hidden;\n}\n.main .marquee {\n  display: flex;\n  gap: 3rem;\n  padding: 1rem 0;\n  white-space: nowrap;\n  animation: marquee 20s linear infinite;\n  font-size: 2rem;\n  font-weight: 700;\n  color: white;\n  text-transform: uppercase;\n  margin-top: 40px;\n}\n@keyframes marquee {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .main .main__container {\n    display: block;\n    position: relative;\n    width: auto;\n  }\n}\n.collections {\n  padding: 4rem 0;\n  text-align: center;\n}\n.collections__title {\n  font-size: 2.5rem;\n  font-weight: 700;\n  color: white;\n  text-transform: uppercase;\n  margin-bottom: 2rem;\n}\n.collections__grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n  gap: 2rem;\n}\n\n.collection-card {\n  background-color: #141414;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.collection-card__image {\n  width: 100%;\n  display: block;\n  object-fit: cover;\n}\n.collection-card__title {\n  color: white;\n  font-weight: 600;\n  margin-top: 0.75rem;\n  padding: 0 1rem 1rem;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://shopify-simulator/./src/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://shopify-simulator/./src/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://shopify-simulator/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n\n//hero\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  document.querySelectorAll(\".header__link\").forEach((link) => {\n    link.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n      const target = document.querySelector(this.getAttribute(\"href\"));\n      if (target) {\n        target.scrollIntoView({ behavior: \"smooth\" });\n      }\n    });\n  });\n});\n\n//header\n// Scroll suave\ndocument.querySelectorAll(\".header__link\").forEach((link) => {\n  link.addEventListener(\"click\", function (e) {\n    e.preventDefault();\n    const target = document.querySelector(this.getAttribute(\"href\"));\n    if (target) {\n      target.scrollIntoView({ behavior: \"smooth\" });\n    }\n  });\n});\n\n// Sticky con transparencia\nwindow.addEventListener(\"scroll\", () => {\n  const header = document.getElementById(\"main-header\");\n  if (window.scrollY > 20) {\n    header.classList.add(\"header--transparent\");\n  } else {\n    header.classList.remove(\"header--transparent\");\n  }\n});\n\n//products\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const toggleBtn = document.getElementById(\"toggleProducts\");\n  const hiddenCards = document.querySelectorAll(\".product-card.is-hidden\");\n\n  if (toggleBtn) {\n    toggleBtn.addEventListener(\"click\", () => {\n      hiddenCards.forEach((card, index) => {\n        // Animación con retraso escalonado\n        setTimeout(() => {\n          card.classList.remove(\"is-hidden\");\n          card.classList.add(\"fade-in\"); // Agregamos animación CSS\n        }, index * 100); // Escalonar aparición\n      });\n\n      toggleBtn.style.display = \"none\";\n    });\n  }\n});\n\n\n//# sourceURL=webpack://shopify-simulator/./src/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;