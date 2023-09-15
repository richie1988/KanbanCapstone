"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkkanbancapstone"] = self["webpackChunkkanbancapstone"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style33.css":
/*!***************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style33.css ***!
  \***************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ``, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://kanbancapstone/./src/style33.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://kanbancapstone/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://kanbancapstone/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style33.css":
/*!*************************!*\
  !*** ./src/style33.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style33_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style33.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style33.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style33_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style33_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style33_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style33_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://kanbancapstone/./src/style33.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://kanbancapstone/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://kanbancapstone/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://kanbancapstone/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://kanbancapstone/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://kanbancapstone/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://kanbancapstone/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/assets/commentCounter.js":
/*!**************************************!*\
  !*** ./src/assets/commentCounter.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((container) => {\r\n  const count = container.childElementCount;\r\n  return count;\r\n});\n\n//# sourceURL=webpack://kanbancapstone/./src/assets/commentCounter.js?");

/***/ }),

/***/ "./src/assets/fetchComments.js":
/*!*************************************!*\
  !*** ./src/assets/fetchComments.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _commentCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commentCounter.js */ \"./src/assets/commentCounter.js\");\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (container, id, key, title) => {\r\n  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${key}/comments?item_id=${id}`;\r\n  const result = await fetch(url);\r\n  const data = await result.json();\r\n  container.innerHTML = '';\r\n\r\n  if (Array.isArray(data)) {\r\n    data.forEach((comment) => {\r\n      const p = document.createElement('p');\r\n      p.innerHTML = `${comment.creation_date} ${comment.username}: ${comment.comment}`;\r\n      container.appendChild(p);\r\n    });\r\n    const count = (0,_commentCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(container);\r\n    title.innerText = `Comments (${count})`;\r\n  } else {\r\n    // Handle cases where data is not an array\r\n    const p = document.createElement('p');\r\n    p.innerHTML = 'No comments available';\r\n    container.appendChild(p);\r\n    title.innerText = 'Comments (0)';\r\n  }\r\n});\n\n//# sourceURL=webpack://kanbancapstone/./src/assets/fetchComments.js?");

/***/ }),

/***/ "./src/assets/likecounter.js":
/*!***********************************!*\
  !*** ./src/assets/likecounter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((buttonId, likesData) => {\r\n  const button = document.getElementById(buttonId);\r\n  if (button) {\r\n    const pokemonName = button.getAttribute('id');\r\n    const likeCount = likesData[pokemonName] || 0;\r\n    button.innerHTML = likeCount.toString();\r\n    return likeCount;\r\n  }\r\n  return 0;\r\n});\n\n//# sourceURL=webpack://kanbancapstone/./src/assets/likecounter.js?");

/***/ }),

/***/ "./src/assets/popupTemplate.js":
/*!*************************************!*\
  !*** ./src/assets/popupTemplate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst template = (data, abilities, moves) => `\r\n<div id=\"popup\">\r\n  <a href=\"#\" id=\"closePop\">\r\n    <i class=\"fas fa-times fa-lg\"></i>\r\n  </a>\r\n  <figure id=\"popPic\">\r\n    <img src=\"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${\r\n  data.id\r\n}.svg\" alt=\"${data.name}\">\r\n    <figcaption id=\"caption\"><h1>${data.name}</h1></figcaption>\r\n  </figure>\r\n\r\n  <div class=\"details\">\r\n    <div class=\"stats\">Height: ${data.height}</div>\r\n    <div class=\"stats\">Weight: ${data.weight}</div>\r\n    <div class=\"stats\">Abilities:\r\n        <ul>\r\n          ${abilities.map((ability) => `<li>${ability}</li>`).join('')}\r\n        </ul>\r\n    </div>\r\n    <div class=\"stats\">Moves:\r\n        <ul>\r\n          ${moves.map((move) => `<li>${move}</li>`).join('')}\r\n        </ul>\r\n    </div>  \r\n  </div>\r\n  <div class=\"comment-section\">\r\n    <h4 id='comments-title'>Comments</h4>\r\n    <div id=\"comments\"></div>\r\n  </div>\r\n  <form id='form'>\r\n    <h4>Add a comment</h4>\r\n    <input type=\"text\" id=\"name\" name='name' placeholder=\"Your name\" required>\r\n    <textarea name=\"comment\" id=\"comment\" cols=\"30\" rows=\"5\" placeholder=\"Your insights\" required></textarea>\r\n    <button type=\"submit\" id='submit'>Comment</button>\r\n  </form>\r\n</div>\r\n`;\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (template);\n\n//# sourceURL=webpack://kanbancapstone/./src/assets/popupTemplate.js?");

/***/ }),

/***/ "./src/assets/updatelike.js":
/*!**********************************!*\
  !*** ./src/assets/updatelike.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst updateLikeCountInPopup = (pokemonName, likeCount) => {\r\n  const popupContainer = document.getElementById('container');\r\n  if (popupContainer) {\r\n    const likesCountElement = popupContainer.querySelector('#likesCount');\r\n    if (likesCountElement && likesCountElement.getAttribute('data-pokemon') === pokemonName) {\r\n      likesCountElement.textContent = likeCount.toString();\r\n    }\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ updateLikeCountInPopup });\n\n//# sourceURL=webpack://kanbancapstone/./src/assets/updatelike.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style33_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style33.css */ \"./src/style33.css\");\n/* harmony import */ var _assets_popupTemplate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/popupTemplate.js */ \"./src/assets/popupTemplate.js\");\n/* harmony import */ var _assets_updatelike_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/updatelike.js */ \"./src/assets/updatelike.js\");\n/* harmony import */ var _assets_likecounter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/likecounter.js */ \"./src/assets/likecounter.js\");\n/* harmony import */ var _PokeFiles_Logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PokeFiles-Logo.png */ \"./src/PokeFiles-Logo.png\");\n/* harmony import */ var _assets_fetchComments_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/fetchComments.js */ \"./src/assets/fetchComments.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// HOME PAGE\r\nconst pokeLogo = new Image();\r\npokeLogo.src = _PokeFiles_Logo_png__WEBPACK_IMPORTED_MODULE_4__;\r\npokeLogo.alt = 'logo';\r\ndocument.getElementById('logo').appendChild(pokeLogo);\r\n\r\nconst itemList = document.getElementById('poke-list');\r\nlet likesData = {};\r\nconst itemGrid = document.createElement('div');\r\nitemGrid.classList.add('poke-grid');\r\nconst apiKey = 'J5DvxD332GJ3W0sJ0ALC';\r\n\r\nconst getPokemonIdFromURL = (url) => {\r\n  const parts = url.split('/');\r\n  return parts[parts.length - 2];\r\n};\r\n\r\nconst updateLikeCount = (likesButtonId) => {\r\n  const likesButton = document.getElementById(likesButtonId);\r\n  if (likesButton) {\r\n    const pokemonName = likesButton.getAttribute('id');\r\n    const likeCount = likesData[pokemonName] || 0;\r\n    likesButton.textContent = likeCount.toString();\r\n  }\r\n};\r\n\r\n// Function to handle liking a Pokemon\r\nconst likePokemon = async (pokemonName, likesButtonId) => {\r\n  try {\r\n    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/likes`, {\r\n      method: 'POST',\r\n      headers: {\r\n        'Content-Type': 'application/json',\r\n      },\r\n      body: JSON.stringify({ item_id: pokemonName }),\r\n    });\r\n\r\n    if (response.ok) {\r\n      const existingLikesCount = likesData[pokemonName] || 0;\r\n      const newLikesCount = existingLikesCount + 1;\r\n      likesData[pokemonName] = newLikesCount;\r\n      updateLikeCount(likesButtonId); // Update the like count in the UI\r\n      (0,_assets_updatelike_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(pokemonName, newLikesCount); // Update the like count in the popup\r\n      localStorage.setItem('likesData', JSON.stringify(likesData)); // Save the updated likes data in local storage\r\n      // Update the like count in the button\r\n      (0,_assets_likecounter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(likesButtonId, likesData);\r\n    }\r\n  } catch (error) {\r\n    // Handle errors\r\n  }\r\n};\r\n\r\nconst renderUI = () => {\r\n  itemGrid.innerHTML = '';\r\n\r\n  fetch('https://pokeapi.co/api/v2/pokemon?limit=40')\r\n    .then((response) => {\r\n      if (!response.ok) {\r\n        throw new Error('Failed to fetch Pokemon data');\r\n      }\r\n      return response.json();\r\n    })\r\n    .then((data) => {\r\n      const fetchedCount = data.results.length;\r\n      const counterElement = document.getElementById('counter');\r\n      counterElement.textContent = `Pokémon(${fetchedCount})`;\r\n\r\n      data.results.forEach((pokemon) => {\r\n        const item = document.createElement('div');\r\n        item.classList.add('item');\r\n        item.classList.add('pokes');\r\n\r\n        const title = document.createElement('h2');\r\n        title.textContent = pokemon.name;\r\n\r\n        const image = document.createElement('img');\r\n        const pokemonId = getPokemonIdFromURL(pokemon.url);\r\n        image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;\r\n        image.classList.add('pokemon');\r\n        image.alt = pokemon.name;\r\n\r\n        const buttonContainer = document.createElement('div');\r\n        buttonContainer.classList.add('button-container');\r\n\r\n        const commentsButton = document.createElement('button');\r\n        commentsButton.classList.add('button');\r\n        commentsButton.classList.add('button-hov');\r\n        commentsButton.textContent = 'Comments';\r\n        commentsButton.setAttribute('name', pokemon.name);\r\n        commentsButton.setAttribute('id', `${pokemonId}c`);\r\n        commentsButton.classList.add('pokePop');\r\n\r\n        const likesButton = document.createElement('button');\r\n        likesButton.classList.add('fas');\r\n        likesButton.classList.add('fa-heart');\r\n        likesButton.setAttribute('id', pokemon.name);\r\n\r\n        const likeCount = likesData[pokemon.name] || 0;\r\n        likesButton.textContent = likeCount;\r\n\r\n        likesButton.addEventListener('click', async () => {\r\n          await likePokemon(pokemon.name, pokemon.name);\r\n        });\r\n\r\n        buttonContainer.appendChild(likesButton);\r\n        buttonContainer.appendChild(commentsButton);\r\n\r\n        item.appendChild(title);\r\n        item.appendChild(image);\r\n        item.appendChild(buttonContainer);\r\n        itemGrid.appendChild(item);\r\n      });\r\n\r\n      itemList.appendChild(itemGrid);\r\n    })\r\n    .catch(() => {\r\n      // Handle errors\r\n    });\r\n};\r\n\r\nconst fetchLikesData = async () => {\r\n  try {\r\n    const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/likes`);\r\n    if (response.ok) {\r\n      const data = await response.json();\r\n      likesData = {};\r\n      data.forEach((like) => {\r\n        likesData[like.item_id] = like.likes;\r\n      });\r\n      localStorage.setItem('likesData', JSON.stringify(likesData));\r\n      renderUI();\r\n    }\r\n  } catch (error) {\r\n    // Handle errors\r\n  }\r\n};\r\n\r\nfetchLikesData();\r\n\r\n// POPUP\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  const container = document.createElement('div');\r\n  container.id = 'container';\r\n  container.className = 'hidden';\r\n\r\n  document.querySelector('main').addEventListener('click', async (e) => {\r\n    if (e.target.classList.contains('pokePop')) {\r\n      const poke = e.target.name;\r\n      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${poke}`);\r\n      const data = await result.json();\r\n      const abilities = [];\r\n      const moves = [];\r\n      for (let i = 0; i < 4; i += 1) {\r\n        if (data.abilities[i] !== undefined) {\r\n          abilities.push(data.abilities[i].ability.name);\r\n        }\r\n        if (data.moves[i] !== undefined) {\r\n          moves.push(data.moves[i].move.name);\r\n        }\r\n      }\r\n      container.innerHTML = (0,_assets_popupTemplate_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(data, abilities, moves);\r\n      document.body.appendChild(container);\r\n      container.classList.remove('hidden');\r\n\r\n      // Getting comments from InvolvementAPI\r\n      const title = document.getElementById('comments-title');\r\n      const comments = document.getElementById('comments');\r\n      const commentsID = e.target.id.toString(); // Define commentsID here\r\n      (0,_assets_fetchComments_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(comments, commentsID, apiKey, title);\r\n\r\n      // Sending comments to InvolvementAPI\r\n      const form = document.getElementById('form');\r\n      form.addEventListener('click', async (e) => {\r\n        if (e.target.id === 'submit') {\r\n          e.preventDefault();\r\n          const input = document.getElementById('name');\r\n          const textArea = document.getElementById('comment');\r\n          const payload = {\r\n            item_id: commentsID,\r\n            username: input.value,\r\n            comment: textArea.value,\r\n          };\r\n          const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${apiKey}/comments`;\r\n          await fetch(url, {\r\n            method: 'POST',\r\n            headers: { 'Content-Type': 'application/json' },\r\n            body: JSON.stringify(payload),\r\n          }).then((result) => JSON.stringify(result));\r\n          (0,_assets_fetchComments_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(comments, commentsID, apiKey, title);\r\n          form.reset();\r\n        }\r\n      });\r\n\r\n      // Close the Pop-up\r\n      const close = document.getElementById('closePop');\r\n      close.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        container.classList.add('hidden');\r\n      });\r\n    }\r\n  });\r\n});\n\n//# sourceURL=webpack://kanbancapstone/./src/index.js?");

/***/ }),

/***/ "./src/PokeFiles-Logo.png":
/*!********************************!*\
  !*** ./src/PokeFiles-Logo.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cc9741e4b00959061281.png\";\n\n//# sourceURL=webpack://kanbancapstone/./src/PokeFiles-Logo.png?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);