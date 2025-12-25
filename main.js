/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_actions_makeTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_actions/makeTodo.js */ \"./src/todo_actions/makeTodo.js\");\n/* harmony import */ var _todo_actions_makeTodo_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_todo_actions_makeTodo_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n\n\n\n/**\n * Must be able to\n * - Make a TODO with (title, desc, dueDate, priority)\n * - Make a Project that has TODOs in them\n * - View TODOs by clicking\n * - Edit TODO\n * - Delete TODO\n * - Add Persistent Data using localStorage (https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)\n */\n\n/**\n * Personal Notes\n * - Each TODO can have their own ID\n * - The ID can be used to get the appropriate TODO for editing or deleting\n * - Return null if TODO id is invalid or DNE\n *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWtEOzs7Ozs7QUFNbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tYXBwLXRvcC8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYWtlVG9kbyBmcm9tIFwiLi90b2RvX2FjdGlvbnMvbWFrZVRvZG8uanNcIjtcblxuXG5cblxuXG4vKipcbiAqIE11c3QgYmUgYWJsZSB0b1xuICogLSBNYWtlIGEgVE9ETyB3aXRoICh0aXRsZSwgZGVzYywgZHVlRGF0ZSwgcHJpb3JpdHkpXG4gKiAtIE1ha2UgYSBQcm9qZWN0IHRoYXQgaGFzIFRPRE9zIGluIHRoZW1cbiAqIC0gVmlldyBUT0RPcyBieSBjbGlja2luZ1xuICogLSBFZGl0IFRPRE9cbiAqIC0gRGVsZXRlIFRPRE9cbiAqIC0gQWRkIFBlcnNpc3RlbnQgRGF0YSB1c2luZyBsb2NhbFN0b3JhZ2UgKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XZWJfU3RvcmFnZV9BUEkvVXNpbmdfdGhlX1dlYl9TdG9yYWdlX0FQSSlcbiAqL1xuXG4vKipcbiAqIFBlcnNvbmFsIE5vdGVzXG4gKiAtIEVhY2ggVE9ETyBjYW4gaGF2ZSB0aGVpciBvd24gSURcbiAqIC0gVGhlIElEIGNhbiBiZSB1c2VkIHRvIGdldCB0aGUgYXBwcm9wcmlhdGUgVE9ETyBmb3IgZWRpdGluZyBvciBkZWxldGluZ1xuICogLSBSZXR1cm4gbnVsbCBpZiBUT0RPIGlkIGlzIGludmFsaWQgb3IgRE5FXG4gKi8iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ },

/***/ "./src/todo_actions/makeTodo.js"
/*!**************************************!*\
  !*** ./src/todo_actions/makeTodo.js ***!
  \**************************************/
() {

eval("{const tasks = [];\n\nfunction makeTask(name, desc, dueDate, priority) {\n    this.name = name;\n    this.desc = desc;\n    this.dueDate = dueDate;\n    this.priority = priority;\n    this.id = crypto.randomUUID();\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdG9kb19hY3Rpb25zL21ha2VUb2RvLmpzIiwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1hcHAtdG9wLy4vc3JjL3RvZG9fYWN0aW9ucy9tYWtlVG9kby5qcz85MmRmIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRhc2tzID0gW107XG5cbmZ1bmN0aW9uIG1ha2VUYXNrKG5hbWUsIGRlc2MsIGR1ZURhdGUsIHByaW9yaXR5KSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuaWQgPSBjcnlwdG8ucmFuZG9tVVVJRCgpO1xufVxuXG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/todo_actions/makeTodo.js\n\n}");

/***/ }

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
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;