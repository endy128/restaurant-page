/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/changePage.js":
/*!***************************!*\
  !*** ./src/changePage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changePage\": () => (/* binding */ changePage)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst changePage = (e) => {\n\n    const pageNum = e.target.dataset.page;\n    document.querySelector('.main').innerHTML = '';\n\n    removeSelection();\n    e.target.classList.add('selected');\n\n    if (pageNum === '0') (0,_home__WEBPACK_IMPORTED_MODULE_0__.renderHome)();\n    if (pageNum === '1') (0,_menu__WEBPACK_IMPORTED_MODULE_1__.renderMenu)();\n    if (pageNum === '2') (0,_contact__WEBPACK_IMPORTED_MODULE_2__.renderContact)();\n\n};\n\nconst removeSelection = () => {\n    const buttons = Array.from(document.querySelectorAll('div.nav-button > h2'));\n    buttons.forEach(button => button.classList.remove('selected'));\n};\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2hhbmdlUGFnZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY2hhbmdlUGFnZS5qcz85NDRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyByZW5kZXJNZW51IH0gZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IHsgcmVuZGVyQ29udGFjdCB9IGZyb20gXCIuL2NvbnRhY3RcIjtcblxuY29uc3QgY2hhbmdlUGFnZSA9IChlKSA9PiB7XG5cbiAgICBjb25zdCBwYWdlTnVtID0gZS50YXJnZXQuZGF0YXNldC5wYWdlO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJykuaW5uZXJIVE1MID0gJyc7XG5cbiAgICByZW1vdmVTZWxlY3Rpb24oKTtcbiAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXG4gICAgaWYgKHBhZ2VOdW0gPT09ICcwJykgcmVuZGVySG9tZSgpO1xuICAgIGlmIChwYWdlTnVtID09PSAnMScpIHJlbmRlck1lbnUoKTtcbiAgICBpZiAocGFnZU51bSA9PT0gJzInKSByZW5kZXJDb250YWN0KCk7XG5cbn07XG5cbmNvbnN0IHJlbW92ZVNlbGVjdGlvbiA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYubmF2LWJ1dHRvbiA+IGgyJykpO1xuICAgIGJ1dHRvbnMuZm9yRWFjaChidXR0b24gPT4gYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykpO1xufTtcblxuXG5leHBvcnQgeyBjaGFuZ2VQYWdlIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/changePage.js\n");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContact\": () => (/* binding */ renderContact)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\nconst renderContact = () => {\n    const main = document.querySelector('.main'); \n\n    main.appendChild(\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__.createItem)(\n            'Address',\n            `123 Little Road </br> Main Road </br> City </br> 12345 </br><br> <h2>Phone: </h2> 0123 456 798`\n        )\n    );\n\n    main.appendChild(\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__.createItem)(\n            'Map',\n            `Map location`\n        )\n    );\nreturn main;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcz9kNTY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUl0ZW0gfSBmcm9tIFwiLi9ob21lXCI7XG5cblxuY29uc3QgcmVuZGVyQ29udGFjdCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTsgXG5cbiAgICBtYWluLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVJdGVtKFxuICAgICAgICAgICAgJ0FkZHJlc3MnLFxuICAgICAgICAgICAgYDEyMyBMaXR0bGUgUm9hZCA8L2JyPiBNYWluIFJvYWQgPC9icj4gQ2l0eSA8L2JyPiAxMjM0NSA8L2JyPjxicj4gPGgyPlBob25lOiA8L2gyPiAwMTIzIDQ1NiA3OThgXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlSXRlbShcbiAgICAgICAgICAgICdNYXAnLFxuICAgICAgICAgICAgYE1hcCBsb2NhdGlvbmBcbiAgICAgICAgKVxuICAgICk7XG5yZXR1cm4gbWFpbjtcbn1cblxuZXhwb3J0IHsgcmVuZGVyQ29udGFjdCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contact.js\n");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createItem\": () => (/* binding */ createItem),\n/* harmony export */   \"renderHome\": () => (/* binding */ renderHome)\n/* harmony export */ });\nconst renderHome = () => {\n    const main = document.querySelector('.main'); \n\n    main.appendChild(\n        createItem(\n            'Welcome',\n            `Welcome to our amazing restaurant!! We cook lovely food which you order at tables and our wonderful staff bring it right to you!! The chefs are just amazing and we're so sure you'll love the food THAT much that you come back again and again!`\n        )\n    );\n\n    main.appendChild(\n        createItem(\n            'Opening Times:',\n            `Mon: 12:00 - 22:00 <br/> Tue: 12:00 - 22:00 <br> Wed: 12:00 - 22:00 <br/> Thur: 12:00 - 22:00 <br/> Fri: 11:00 - 23:00 <br/> Sat: 11:00 - 23:00 <br/> Sun: 12:00 - 22:00`\n        )\n    );\n\n    main.appendChild(\n        createItem(\n            'Offers',\n            `Free birthday cake with every birthday celebration!`\n        )\n    );\n\n\nreturn main;\n}\n\n\nconst createItem = (header, paragraph) => {\n    const item = document.createElement('div');\n    item.classList.add('item');\n\n    const myHeader = document.createElement('h2');\n    myHeader.textContent = header;\n\n    const myParagraph = document.createElement('p');\n    myParagraph.innerHTML = paragraph;\n\n    item.appendChild(myHeader);\n    item.appendChild(myParagraph);\n\n    return item;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanM/N2I0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCByZW5kZXJIb21lID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpOyBcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZUl0ZW0oXG4gICAgICAgICAgICAnV2VsY29tZScsXG4gICAgICAgICAgICBgV2VsY29tZSB0byBvdXIgYW1hemluZyByZXN0YXVyYW50ISEgV2UgY29vayBsb3ZlbHkgZm9vZCB3aGljaCB5b3Ugb3JkZXIgYXQgdGFibGVzIGFuZCBvdXIgd29uZGVyZnVsIHN0YWZmIGJyaW5nIGl0IHJpZ2h0IHRvIHlvdSEhIFRoZSBjaGVmcyBhcmUganVzdCBhbWF6aW5nIGFuZCB3ZSdyZSBzbyBzdXJlIHlvdSdsbCBsb3ZlIHRoZSBmb29kIFRIQVQgbXVjaCB0aGF0IHlvdSBjb21lIGJhY2sgYWdhaW4gYW5kIGFnYWluIWBcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVJdGVtKFxuICAgICAgICAgICAgJ09wZW5pbmcgVGltZXM6JyxcbiAgICAgICAgICAgIGBNb246IDEyOjAwIC0gMjI6MDAgPGJyLz4gVHVlOiAxMjowMCAtIDIyOjAwIDxicj4gV2VkOiAxMjowMCAtIDIyOjAwIDxici8+IFRodXI6IDEyOjAwIC0gMjI6MDAgPGJyLz4gRnJpOiAxMTowMCAtIDIzOjAwIDxici8+IFNhdDogMTE6MDAgLSAyMzowMCA8YnIvPiBTdW46IDEyOjAwIC0gMjI6MDBgXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlSXRlbShcbiAgICAgICAgICAgICdPZmZlcnMnLFxuICAgICAgICAgICAgYEZyZWUgYmlydGhkYXkgY2FrZSB3aXRoIGV2ZXJ5IGJpcnRoZGF5IGNlbGVicmF0aW9uIWBcbiAgICAgICAgKVxuICAgICk7XG5cblxucmV0dXJuIG1haW47XG59XG5cblxuY29uc3QgY3JlYXRlSXRlbSA9IChoZWFkZXIsIHBhcmFncmFwaCkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2l0ZW0nKTtcblxuICAgIGNvbnN0IG15SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBteUhlYWRlci50ZXh0Q29udGVudCA9IGhlYWRlcjtcblxuICAgIGNvbnN0IG15UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG15UGFyYWdyYXBoLmlubmVySFRNTCA9IHBhcmFncmFwaDtcblxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQobXlIZWFkZXIpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQobXlQYXJhZ3JhcGgpO1xuXG4gICAgcmV0dXJuIGl0ZW07XG59XG5cblxuZXhwb3J0IHsgcmVuZGVySG9tZSwgY3JlYXRlSXRlbSB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/home.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n\n\n\nconst createDiv = (name, innerHTML) => {\n    const div = document.createElement('div');\n    div.classList.add(name);\n    if (innerHTML) {\n        const span = document.createElement('span');\n        span.innerHTML = innerHTML;\n        div.appendChild(span);\n    }\n    return div;\n}\n\n\n\nconst initialRender = (() => {\n    // get cache of the #content div\n   const content = document.querySelector('#content');\n   \n   // render the nav bar (and header)\n   (0,_nav__WEBPACK_IMPORTED_MODULE_1__.renderNav)(content);\n   \n   content.appendChild(createDiv('main'));\n   \n   content.appendChild(createDiv('footer', '<a href=\"http://github.com/endy128\">Deisgn by endy128</a>'));\n   \n   // render the main page first by default\n   (0,_home__WEBPACK_IMPORTED_MODULE_0__.renderHome)();\n   \n})();\n\n\n// const initialRender = () => {\n//  // get cache of the #content div\n// const content = document.querySelector('#content');\n\n// // render the nav bar (and header)\n// renderNav(content);\n\n// content.appendChild(createDiv('main'));\n\n// content.appendChild(createDiv('footer', '<a href=\"http://github.com/endy128\">Deisgn by endy128</a>'));\n\n// // render the main page first by default\n// renderHome();\n\n// };\n\n// initialRender();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlckhvbWUgfSBmcm9tIFwiLi9ob21lXCI7XG5pbXBvcnQgeyByZW5kZXJOYXYgfSBmcm9tIFwiLi9uYXZcIjtcblxuY29uc3QgY3JlYXRlRGl2ID0gKG5hbWUsIGlubmVySFRNTCkgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKG5hbWUpO1xuICAgIGlmIChpbm5lckhUTUwpIHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuXG5cbmNvbnN0IGluaXRpYWxSZW5kZXIgPSAoKCkgPT4ge1xuICAgIC8vIGdldCBjYWNoZSBvZiB0aGUgI2NvbnRlbnQgZGl2XG4gICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgIFxuICAgLy8gcmVuZGVyIHRoZSBuYXYgYmFyIChhbmQgaGVhZGVyKVxuICAgcmVuZGVyTmF2KGNvbnRlbnQpO1xuICAgXG4gICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZURpdignbWFpbicpKTtcbiAgIFxuICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVEaXYoJ2Zvb3RlcicsICc8YSBocmVmPVwiaHR0cDovL2dpdGh1Yi5jb20vZW5keTEyOFwiPkRlaXNnbiBieSBlbmR5MTI4PC9hPicpKTtcbiAgIFxuICAgLy8gcmVuZGVyIHRoZSBtYWluIHBhZ2UgZmlyc3QgYnkgZGVmYXVsdFxuICAgcmVuZGVySG9tZSgpO1xuICAgXG59KSgpO1xuXG5cbi8vIGNvbnN0IGluaXRpYWxSZW5kZXIgPSAoKSA9PiB7XG4vLyAgLy8gZ2V0IGNhY2hlIG9mIHRoZSAjY29udGVudCBkaXZcbi8vIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4vLyAvLyByZW5kZXIgdGhlIG5hdiBiYXIgKGFuZCBoZWFkZXIpXG4vLyByZW5kZXJOYXYoY29udGVudCk7XG5cbi8vIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRGl2KCdtYWluJykpO1xuXG4vLyBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZURpdignZm9vdGVyJywgJzxhIGhyZWY9XCJodHRwOi8vZ2l0aHViLmNvbS9lbmR5MTI4XCI+RGVpc2duIGJ5IGVuZHkxMjg8L2E+JykpO1xuXG4vLyAvLyByZW5kZXIgdGhlIG1haW4gcGFnZSBmaXJzdCBieSBkZWZhdWx0XG4vLyByZW5kZXJIb21lKCk7XG5cbi8vIH07XG5cbi8vIGluaXRpYWxSZW5kZXIoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenu\": () => (/* binding */ renderMenu)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\nconst createMenu = () => {\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n\n    menu.appendChild(\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__.createItem)(\n            'English Breakfast',\n            'Fried eggs, bacon, sausages, beans, toast, black pudding, tomatoes & mushrooms'\n        )\n    );\n\n    menu.appendChild(\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__.createItem)(\n            'Continental Breakfast',\n            'Home made croissant with servings of jam or chocolate spread & delicious fruit yoghurt on the side'\n        )\n    );\n    menu.appendChild(\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__.createItem)(\n            'Huevos Rancheros',\n            'Mexican style brunch of eggs, onion, pepper, garlic, tomatoes, olive oil & coriander on a hot tortilla'\n        )\n    );\n\n  return menu;  \n}\n\n\nconst renderMenu = () => {\n    const main = document.querySelector('.main');\n    main.appendChild(createMenu());\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzP2FiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlSXRlbSB9IGZyb20gXCIuL2hvbWVcIjtcblxuXG5jb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZUl0ZW0oXG4gICAgICAgICAgICAnRW5nbGlzaCBCcmVha2Zhc3QnLFxuICAgICAgICAgICAgJ0ZyaWVkIGVnZ3MsIGJhY29uLCBzYXVzYWdlcywgYmVhbnMsIHRvYXN0LCBibGFjayBwdWRkaW5nLCB0b21hdG9lcyAmIG11c2hyb29tcydcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVJdGVtKFxuICAgICAgICAgICAgJ0NvbnRpbmVudGFsIEJyZWFrZmFzdCcsXG4gICAgICAgICAgICAnSG9tZSBtYWRlIGNyb2lzc2FudCB3aXRoIHNlcnZpbmdzIG9mIGphbSBvciBjaG9jb2xhdGUgc3ByZWFkICYgZGVsaWNpb3VzIGZydWl0IHlvZ2h1cnQgb24gdGhlIHNpZGUnXG4gICAgICAgIClcbiAgICApO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZUl0ZW0oXG4gICAgICAgICAgICAnSHVldm9zIFJhbmNoZXJvcycsXG4gICAgICAgICAgICAnTWV4aWNhbiBzdHlsZSBicnVuY2ggb2YgZWdncywgb25pb24sIHBlcHBlciwgZ2FybGljLCB0b21hdG9lcywgb2xpdmUgb2lsICYgY29yaWFuZGVyIG9uIGEgaG90IHRvcnRpbGxhJ1xuICAgICAgICApXG4gICAgKTtcblxuICByZXR1cm4gbWVudTsgIFxufVxuXG5cbmNvbnN0IHJlbmRlck1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVNZW51KCkpO1xufVxuXG5leHBvcnQgeyByZW5kZXJNZW51IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/menu.js\n");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderNav\": () => (/* binding */ renderNav)\n/* harmony export */ });\n/* harmony import */ var _changePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changePage */ \"./src/changePage.js\");\n\n\nconst createHeader = () => {\n    const header = document.createElement('div');\n    const headerText = document.createElement('h1');\n    \n    header.classList.add('header');\n    \n    headerText.textContent = 'Breakfast Restaurant';\n    header.appendChild(headerText);\n\n    return header;\n}\n\nconst createNavItem = (name, pageNum) => {\n    const button = document.createElement('div');\n    const h2 = document.createElement('h2');\n    h2.textContent = name;\n    h2.dataset.page = pageNum;\n    button.classList.add('nav-button');\n    \n    // as the home page is first to render, set it to selected for css bottom border\n    if (name === 'Home') h2.classList.add('selected');\n\n    button.appendChild(h2);\n\n    return button;\n\n}\n\nconst createNavBar = () => {\n    const nav = document.createElement('div');\n    nav.classList.add('nav');\n\n    nav.appendChild(createNavItem('Home', 0));\n    nav.appendChild(createNavItem('Menu', 1));\n    nav.appendChild(createNavItem('Contact', 2));\n\n    return nav;\n\n}\n\nconst renderNav = (content) => {\n    content.appendChild(createHeader());\n    content.appendChild(createNavBar());\n\n    addEventListeners();\n}\n\nconst addEventListeners = () => {\n    const buttons = Array.from(document.querySelectorAll('.nav-button'));\n    buttons.forEach(button => button.addEventListener('click', _changePage__WEBPACK_IMPORTED_MODULE_0__.changePage));\n        \n};\n    \n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbmF2LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbmF2LmpzPzhiODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2hhbmdlUGFnZSB9IGZyb20gXCIuL2NoYW5nZVBhZ2VcIjtcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIFxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcbiAgICBcbiAgICBoZWFkZXJUZXh0LnRleHRDb250ZW50ID0gJ0JyZWFrZmFzdCBSZXN0YXVyYW50JztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGV4dCk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5jb25zdCBjcmVhdGVOYXZJdGVtID0gKG5hbWUsIHBhZ2VOdW0pID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDIudGV4dENvbnRlbnQgPSBuYW1lO1xuICAgIGgyLmRhdGFzZXQucGFnZSA9IHBhZ2VOdW07XG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ25hdi1idXR0b24nKTtcbiAgICBcbiAgICAvLyBhcyB0aGUgaG9tZSBwYWdlIGlzIGZpcnN0IHRvIHJlbmRlciwgc2V0IGl0IHRvIHNlbGVjdGVkIGZvciBjc3MgYm90dG9tIGJvcmRlclxuICAgIGlmIChuYW1lID09PSAnSG9tZScpIGgyLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cbiAgICBidXR0b24uYXBwZW5kQ2hpbGQoaDIpO1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcblxufVxuXG5jb25zdCBjcmVhdGVOYXZCYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ25hdicpO1xuXG4gICAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZU5hdkl0ZW0oJ0hvbWUnLCAwKSk7XG4gICAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZU5hdkl0ZW0oJ01lbnUnLCAxKSk7XG4gICAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZU5hdkl0ZW0oJ0NvbnRhY3QnLCAyKSk7XG5cbiAgICByZXR1cm4gbmF2O1xuXG59XG5cbmNvbnN0IHJlbmRlck5hdiA9IChjb250ZW50KSA9PiB7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVOYXZCYXIoKSk7XG5cbiAgICBhZGRFdmVudExpc3RlbmVycygpO1xufVxuXG5jb25zdCBhZGRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgICBjb25zdCBidXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWJ1dHRvbicpKTtcbiAgICBidXR0b25zLmZvckVhY2goYnV0dG9uID0+IGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNoYW5nZVBhZ2UpKTtcbiAgICAgICAgXG59O1xuICAgIFxuZXhwb3J0IHsgcmVuZGVyTmF2IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/nav.js\n");

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