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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderContact\": () => (/* binding */ renderContact)\n/* harmony export */ });\nconst renderContact = () => {\n    const main = document.querySelector('.main'); \n\n    main.appendChild(\n        createItem(\n            'Address',\n            `123 Little Road </br> Main Road </br> City </br> 12345 </br><br> <h2>Phone: </h2> 0123 456 798`\n        )\n    );\n\n    main.appendChild(\n        createItem(\n            'Map',\n            `Map location`\n        )\n    );\n\n\n\nreturn main;\n}\n\n\nconst createItem = (header, paragraph) => {\n    const item = document.createElement('div');\n    item.classList.add('item');\n\n    const myHeader = document.createElement('h2');\n    myHeader.textContent = header;\n\n    const myParagraph = document.createElement('p');\n    myParagraph.innerHTML = paragraph;\n\n    item.appendChild(myHeader);\n    item.appendChild(myParagraph);\n\n    return item;\n}\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFjdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzP2Q1NjUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVuZGVyQ29udGFjdCA9ICgpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTsgXG5cbiAgICBtYWluLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVJdGVtKFxuICAgICAgICAgICAgJ0FkZHJlc3MnLFxuICAgICAgICAgICAgYDEyMyBMaXR0bGUgUm9hZCA8L2JyPiBNYWluIFJvYWQgPC9icj4gQ2l0eSA8L2JyPiAxMjM0NSA8L2JyPjxicj4gPGgyPlBob25lOiA8L2gyPiAwMTIzIDQ1NiA3OThgXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlSXRlbShcbiAgICAgICAgICAgICdNYXAnLFxuICAgICAgICAgICAgYE1hcCBsb2NhdGlvbmBcbiAgICAgICAgKVxuICAgICk7XG5cblxuXG5yZXR1cm4gbWFpbjtcbn1cblxuXG5jb25zdCBjcmVhdGVJdGVtID0gKGhlYWRlciwgcGFyYWdyYXBoKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuXG4gICAgY29uc3QgbXlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG15SGVhZGVyLnRleHRDb250ZW50ID0gaGVhZGVyO1xuXG4gICAgY29uc3QgbXlQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbXlQYXJhZ3JhcGguaW5uZXJIVE1MID0gcGFyYWdyYXBoO1xuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChteUhlYWRlcik7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChteVBhcmFncmFwaCk7XG5cbiAgICByZXR1cm4gaXRlbTtcbn1cblxuXG5leHBvcnQgeyByZW5kZXJDb250YWN0IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contact.js\n");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderHome\": () => (/* binding */ renderHome)\n/* harmony export */ });\nconst renderHome = () => {\n    const main = document.querySelector('.main'); \n\n    main.appendChild(\n        createItem(\n            'Welcome',\n            `Welcome to our amazing restaurant!! We cook lovely food which you order at tables and our wonderful staff bring it right to you!! The chefs are just amazing and we're so sure you'll love the food THAT much that you come back again and again!`\n        )\n    );\n\n    main.appendChild(\n        createItem(\n            'Opening Times:',\n            `Mon: 12:00 - 22:00 <br/> Tue: 12:00 - 22:00 <br> Wed: 12:00 - 22:00 <br/> Thur: 12:00 - 22:00 <br/> Fri: 11:00 - 23:00 <br/> Sat: 11:00 - 23:00 <br/> Sun: 12:00 - 22:00`\n        )\n    );\n\n    main.appendChild(\n        createItem(\n            'Offers',\n            `Free birthday cake with every birthday celebration!`\n        )\n    );\n\n\nreturn main;\n}\n\n\nconst createItem = (header, paragraph) => {\n    const item = document.createElement('div');\n    item.classList.add('item');\n\n    const myHeader = document.createElement('h2');\n    myHeader.textContent = header;\n\n    const myParagraph = document.createElement('p');\n    myParagraph.innerHTML = paragraph;\n\n    item.appendChild(myHeader);\n    item.appendChild(myParagraph);\n\n    return item;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaG9tZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcz83YjQxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlbmRlckhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7IFxuXG4gICAgbWFpbi5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlSXRlbShcbiAgICAgICAgICAgICdXZWxjb21lJyxcbiAgICAgICAgICAgIGBXZWxjb21lIHRvIG91ciBhbWF6aW5nIHJlc3RhdXJhbnQhISBXZSBjb29rIGxvdmVseSBmb29kIHdoaWNoIHlvdSBvcmRlciBhdCB0YWJsZXMgYW5kIG91ciB3b25kZXJmdWwgc3RhZmYgYnJpbmcgaXQgcmlnaHQgdG8geW91ISEgVGhlIGNoZWZzIGFyZSBqdXN0IGFtYXppbmcgYW5kIHdlJ3JlIHNvIHN1cmUgeW91J2xsIGxvdmUgdGhlIGZvb2QgVEhBVCBtdWNoIHRoYXQgeW91IGNvbWUgYmFjayBhZ2FpbiBhbmQgYWdhaW4hYFxuICAgICAgICApXG4gICAgKTtcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZUl0ZW0oXG4gICAgICAgICAgICAnT3BlbmluZyBUaW1lczonLFxuICAgICAgICAgICAgYE1vbjogMTI6MDAgLSAyMjowMCA8YnIvPiBUdWU6IDEyOjAwIC0gMjI6MDAgPGJyPiBXZWQ6IDEyOjAwIC0gMjI6MDAgPGJyLz4gVGh1cjogMTI6MDAgLSAyMjowMCA8YnIvPiBGcmk6IDExOjAwIC0gMjM6MDAgPGJyLz4gU2F0OiAxMTowMCAtIDIzOjAwIDxici8+IFN1bjogMTI6MDAgLSAyMjowMGBcbiAgICAgICAgKVxuICAgICk7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKFxuICAgICAgICBjcmVhdGVJdGVtKFxuICAgICAgICAgICAgJ09mZmVycycsXG4gICAgICAgICAgICBgRnJlZSBiaXJ0aGRheSBjYWtlIHdpdGggZXZlcnkgYmlydGhkYXkgY2VsZWJyYXRpb24hYFxuICAgICAgICApXG4gICAgKTtcblxuXG5yZXR1cm4gbWFpbjtcbn1cblxuXG5jb25zdCBjcmVhdGVJdGVtID0gKGhlYWRlciwgcGFyYWdyYXBoKSA9PiB7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuXG4gICAgY29uc3QgbXlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIG15SGVhZGVyLnRleHRDb250ZW50ID0gaGVhZGVyO1xuXG4gICAgY29uc3QgbXlQYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbXlQYXJhZ3JhcGguaW5uZXJIVE1MID0gcGFyYWdyYXBoO1xuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChteUhlYWRlcik7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChteVBhcmFncmFwaCk7XG5cbiAgICByZXR1cm4gaXRlbTtcbn1cblxuXG5leHBvcnQgeyByZW5kZXJIb21lIH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/home.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n\n\n\n\n // get cache of the #content div\nconst content = document.querySelector('#content');\n\n// render the nav bar (and header)\n(0,_nav__WEBPACK_IMPORTED_MODULE_1__.renderNav)(content);\n\n// main div of the page\nconst main = document.createElement('div');\n\nconst footer = document.createElement('div');\nconst footerText = document.createElement('span');\n\nmain.className = 'main';\nfooter.className = 'footer';\n\nfooterText.innerHTML = '<a href=\"http://github.com/endy128\">Deisgn by endy128</a>';\n\ncontent.appendChild(main);\n\nfooter.appendChild(footerText);\ncontent.appendChild(footer);\n\n// render the main page first by default\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.renderHome)();\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVuZGVySG9tZSB9IGZyb20gXCIuL2hvbWVcIjtcbmltcG9ydCB7IHJlbmRlck5hdiB9IGZyb20gXCIuL25hdlwiO1xuXG5cbiAvLyBnZXQgY2FjaGUgb2YgdGhlICNjb250ZW50IGRpdlxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbi8vIHJlbmRlciB0aGUgbmF2IGJhciAoYW5kIGhlYWRlcilcbnJlbmRlck5hdihjb250ZW50KTtcblxuLy8gbWFpbiBkaXYgb2YgdGhlIHBhZ2VcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXG5tYWluLmNsYXNzTmFtZSA9ICdtYWluJztcbmZvb3Rlci5jbGFzc05hbWUgPSAnZm9vdGVyJztcblxuZm9vdGVyVGV4dC5pbm5lckhUTUwgPSAnPGEgaHJlZj1cImh0dHA6Ly9naXRodWIuY29tL2VuZHkxMjhcIj5EZWlzZ24gYnkgZW5keTEyODwvYT4nO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG5mb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyVGV4dCk7XG5jb250ZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbi8vIHJlbmRlciB0aGUgbWFpbiBwYWdlIGZpcnN0IGJ5IGRlZmF1bHRcbnJlbmRlckhvbWUoKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderMenu\": () => (/* binding */ renderMenu)\n/* harmony export */ });\nconst createMenu = () => {\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n\n    menu.appendChild(\n        createMenuItem(\n            'English Breakfast',\n            'Fried eggs, bacon, sausages, beans, toast, black pudding, tomatoes & mushrooms'\n        )\n    );\n\n    menu.appendChild(\n        createMenuItem(\n            'Continental Breakfast',\n            'Home made croissant with servings of jam or chocolate spread & delicious fruit yoghurt on the side'\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n            'Huevos Rancheros',\n            'Mexican style brunch of eggs, onion, pepper, garlic, tomatoes, olive oil & coriander on a hot tortilla'\n        )\n    );\n\n  return menu;  \n}\n\nconst createMenuItem = (name, description) => {\n    const menuItem = document.createElement('div');\n    menuItem.classList.add('item');\n\n    const dishName = document.createElement('h2');\n    dishName.textContent = name;\n\n    const dishDesc = document.createElement('p');\n    dishDesc.textContent = description;\n\n    menuItem.appendChild(dishName);\n    menuItem.appendChild(dishDesc);\n\n    return menuItem;\n}\n\nconst renderMenu = () => {\n    const main = document.querySelector('.main');\n    main.appendChild(createMenu());\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWVudS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanM/YWIwOCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoXG4gICAgICAgIGNyZWF0ZU1lbnVJdGVtKFxuICAgICAgICAgICAgJ0VuZ2xpc2ggQnJlYWtmYXN0JyxcbiAgICAgICAgICAgICdGcmllZCBlZ2dzLCBiYWNvbiwgc2F1c2FnZXMsIGJlYW5zLCB0b2FzdCwgYmxhY2sgcHVkZGluZywgdG9tYXRvZXMgJiBtdXNocm9vbXMnXG4gICAgICAgIClcbiAgICApO1xuXG4gICAgbWVudS5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICAnQ29udGluZW50YWwgQnJlYWtmYXN0JyxcbiAgICAgICAgICAgICdIb21lIG1hZGUgY3JvaXNzYW50IHdpdGggc2VydmluZ3Mgb2YgamFtIG9yIGNob2NvbGF0ZSBzcHJlYWQgJiBkZWxpY2lvdXMgZnJ1aXQgeW9naHVydCBvbiB0aGUgc2lkZSdcbiAgICAgICAgKVxuICAgICk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChcbiAgICAgICAgY3JlYXRlTWVudUl0ZW0oXG4gICAgICAgICAgICAnSHVldm9zIFJhbmNoZXJvcycsXG4gICAgICAgICAgICAnTWV4aWNhbiBzdHlsZSBicnVuY2ggb2YgZWdncywgb25pb24sIHBlcHBlciwgZ2FybGljLCB0b21hdG9lcywgb2xpdmUgb2lsICYgY29yaWFuZGVyIG9uIGEgaG90IHRvcnRpbGxhJ1xuICAgICAgICApXG4gICAgKTtcblxuICByZXR1cm4gbWVudTsgIFxufVxuXG5jb25zdCBjcmVhdGVNZW51SXRlbSA9IChuYW1lLCBkZXNjcmlwdGlvbikgPT4ge1xuICAgIGNvbnN0IG1lbnVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xuXG4gICAgY29uc3QgZGlzaE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGRpc2hOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcblxuICAgIGNvbnN0IGRpc2hEZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGRpc2hEZXNjLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb247XG5cbiAgICBtZW51SXRlbS5hcHBlbmRDaGlsZChkaXNoTmFtZSk7XG4gICAgbWVudUl0ZW0uYXBwZW5kQ2hpbGQoZGlzaERlc2MpO1xuXG4gICAgcmV0dXJuIG1lbnVJdGVtO1xufVxuXG5jb25zdCByZW5kZXJNZW51ID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY3JlYXRlTWVudSgpKTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyTWVudSB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/menu.js\n");

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