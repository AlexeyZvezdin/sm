module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Basic/Header.js":
/*!************************************!*\
  !*** ./components/Basic/Header.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_UrlBuilder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/UrlBuilder */ "./utils/UrlBuilder.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.module.scss */ "./components/Basic/header.module.scss");
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\Desktop\\All Work\\next-official-guide\\components\\Basic\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const links = [{
  name: 'Акции',
  link: _utils_UrlBuilder__WEBPACK_IMPORTED_MODULE_2__["promotions"]()
}, {
  name: 'Бонусы',
  link: _utils_UrlBuilder__WEBPACK_IMPORTED_MODULE_2__["bonuses"]()
}, {
  name: 'Доставка',
  link: _utils_UrlBuilder__WEBPACK_IMPORTED_MODULE_2__["delivery"]()
}, {
  name: 'О компании',
  link: _utils_UrlBuilder__WEBPACK_IMPORTED_MODULE_2__["about"]()
}, {
  name: 'Вакансии',
  link: _utils_UrlBuilder__WEBPACK_IMPORTED_MODULE_2__["vacancy"]()
}, {
  name: 'Франшиза',
  link: 'https://fr.sushi-master.ru/?utm_source=glavniy_sait'
}];

class Header extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      sticky: false,
      headerOffset: 0,
      showCitySelector: false
    });

    _defineProperty(this, "handleCityModal", () => {
      // fetch cities
      // show city modal
      this.props.dispatchModalStatus();
    });
  }

  render() {
    const menu = links.map((el, index) => __jsx("li", {
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }
    }, __jsx("a", {
      href: el.link,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }
    }, el.name)));
    let re = /\D/gi; // Убирает всесимволы для номера

    return __jsx("header", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['main_header'],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 7
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }
    }, __jsx("a", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['header-logo'],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: "/img/icons/icon-logo.svg",
      alt: "\u0421\u0443\u0448\u0438 \u043C\u0430\u0441\u0442\u0435\u0440 \u2014 \u0437\u0430\u043A\u0430\u0437 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u044F\u043F\u043E\u043D\u0441\u043A\u043E\u0439 \u0435\u0434\u044B \u043D\u0430 \u0434\u043E\u043C",
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['header-info__logo'],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }
    }), "\u0421\u0443\u0448\u0438 \u043C\u0430\u0441\u0442\u0435\u0440 \u2014 \u0437\u0430\u043A\u0430\u0437 \u0438 \u0434\u043E\u0441\u0442\u0430\u0432\u043A\u0430 \u0435\u0434\u044B \u043D\u0430 \u0434\u043E\u043C \u0432 \u0413\u043E\u0440\u043E\u0434\u041D\u0435\u0439\u043C")), __jsx("div", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['header-city_and_phone'],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }
    }, __jsx("button", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['header-city_choice'],
      onClick: this.handleCityModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: "/img/icons/icon-location.svg",
      alt: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }
    }), __jsx("span", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['header-city_choice-city_name'],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 13
      }
    }, "\u0413\u043E\u0440\u043E\u0434")), __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 11
      }
    }, "No phone")), __jsx("nav", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['menu'],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }
    }, __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 11
      }
    }, menu)), __jsx("div", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['header-cart_n_login'],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/cart",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }
    }, __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['header-cart_n_login-price'],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 15
      }
    }, "Price ", __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 23
      }
    }, "\u20BD")), __jsx("div", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['header-cart_n_login-card_icon'],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['header-cart_n_login__icon'],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['header-cart_n_login__icon__count'],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 19
      }
    }, "0")))))), __jsx("div", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['profile-badge-block'],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['profile-badge-block__login'],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 11
      }
    }, "\u0412\u043E\u0439\u0442\u0438")));
  }

}

const mapStateToProps = ({
  modal
}) => {
  // console.log(modal.openModalBg, ' STATE modal');
  const modalBg = modal.openModalBg;
  return {
    modalBg
  };
};

const dispatchToProps = dispatch => ({
  dispatchModalStatus: status => dispatch({
    type: 'OPEN_MODAL'
  })
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, dispatchToProps)(Header));

/***/ }),

/***/ "./components/Basic/StickyHeader.js":
/*!******************************************!*\
  !*** ./components/Basic/StickyHeader.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StickyHeaderView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StickyHeaderView */ "./components/Basic/StickyHeaderView.js");
var _jsxFileName = "C:\\Users\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\Desktop\\All Work\\next-official-guide\\components\\Basic\\StickyHeader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class StickyHeader extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx(_StickyHeaderView__WEBPACK_IMPORTED_MODULE_2__["default"], {
      tabs: this.props.stickyTabs,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 12
      }
    });
  }

}

const mapStateToProps = ({
  store
}) => ({
  categories: store.categories,
  catalogStructure: store.catalogStructure
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(StickyHeader)); // Это всё тут не работает тем же образом
// const placeholderLengths = [5, 6, 8, 5, 7, 5, 9];
// {
//   showPlaceholder
//     ? placeholderLengths.map((item, index) => (
//         <div className={styles['sticky-header__categories__item']} key={index}>
//           <div
//             style={{ width: `${item * 18}px` }}
//             className={styles['sticky-header__categories__placeholder']}
//           />
//         </div>
//       ))
//     : '';
// }

/***/ }),

/***/ "./components/Basic/StickyHeaderView.js":
/*!**********************************************!*\
  !*** ./components/Basic/StickyHeaderView.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StickyHeaderView; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sticky_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sticky.module.scss */ "./components/Basic/sticky.module.scss");
/* harmony import */ var _sticky_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sticky_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\Desktop\\All Work\\next-official-guide\\components\\Basic\\StickyHeaderView.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function StickyHeaderView(props) {
  return __jsx("div", {
    className: _sticky_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a[`sticky-header`],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, props.tabs.map(item => __jsx("div", {
    key: item.id,
    className: _sticky_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a['sticky-header__categories__item'],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/[path]",
    as: `/${item.path}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 11
    }
  }, __jsx("a", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, item.name)))));
}

/***/ }),

/***/ "./components/Basic/header.module.scss":
/*!*********************************************!*\
  !*** ./components/Basic/header.module.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"main_header": "main_header",
	"header-logo": "header-logo",
	"menu": "menu",
	"header-city_and_phone": "header-city_and_phone",
	"header-city_choice": "header-city_choice",
	"header-city_choice-city_name": "header-city_choice-city_name",
	"header-cart_n_login": "header-cart_n_login",
	"header-cart_n_login__icon": "header-cart_n_login__icon",
	"header-cart_n_login__icon__count": "header-cart_n_login__icon__count",
	"profile-badge-block__login": "profile-badge-block__login"
};

/***/ }),

/***/ "./components/Basic/sticky.module.scss":
/*!*********************************************!*\
  !*** ./components/Basic/sticky.module.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"sticky-header": "sticky-header",
	"sticky-header__categories__item": "sticky-header__categories__item",
	"sticky-header__categories__item-monopizza": "sticky-header__categories__item-monopizza",
	"selected": "selected",
	"sticky-header__categories__item__sub-menu": "sticky-header__categories__item__sub-menu",
	"sticky-header__categories__placeholder": "sticky-header__categories__placeholder",
	"progress": "progress"
};

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.module.scss */ "./components/index.module.scss");
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Basic_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Basic/Header */ "./components/Basic/Header.js");
/* harmony import */ var _components_Basic_StickyHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Basic/StickyHeader */ "./components/Basic/StickyHeader.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "C:\\Users\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\Desktop\\All Work\\next-official-guide\\components\\Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // import loader from '../public/img/loader.gif';






function Layout(props) {
  // Не работает, бэд сетСтейт
  // props.dispatchCategoriesWithMain(stickyTabsWithMain);
  const thisRouteProducts = props.products[0].find(item => {
    if (props.path === undefined) {
      return item.itemName === 'main';
    }

    return item.itemName === props.path;
  });
  const children = react__WEBPACK_IMPORTED_MODULE_1___default.a.Children.map(props.children, (child, index) => {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(child, {
      stickyTabsWithMain: props.stickyTabs.stickyTabsWithMain,
      currentPageIndex: index,
      thisRouteProducts
    });
  });
  console.log(props.stickyTabs.stickyTabsWithMain, ' stickyTabs');
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_Basic_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }), __jsx(_components_Basic_StickyHeader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    stickyTabs: props.stickyTabs.stickyTabs,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }), __jsx("main", {
    className: "jsx-1430570554",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1430570554" + " " + (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['container__full'] || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, children))), __jsx("footer", {
    className: "jsx-1430570554" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1430570554",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, "\xA9 ", new Date().getFullYear()), __jsx("div", {
    className: "jsx-1430570554",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "jsx-1430570554",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }
  }, "FOOTER"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1430570554",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc0JDQu9C10LrRgdC10LlcXERlc2t0b3BcXEFsbCBXb3JrXFxuZXh0LW9mZmljaWFsLWd1aWRlXFxjb21wb25lbnRzXFxMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUR5QiIsImZpbGUiOiJDOlxcVXNlcnNcXNCQ0LvQtdC60YHQtdC5XFxEZXNrdG9wXFxBbGwgV29ya1xcbmV4dC1vZmZpY2lhbC1ndWlkZVxcY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuc2Nzcyc7XHJcbi8vIGltcG9ydCBsb2FkZXIgZnJvbSAnLi4vcHVibGljL2ltZy9sb2FkZXIuZ2lmJztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL0Jhc2ljL0hlYWRlcic7XHJcbmltcG9ydCBTdGlja3lIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9CYXNpYy9TdGlja3lIZWFkZXInO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuZnVuY3Rpb24gTGF5b3V0KHByb3BzKSB7XHJcbiAgLy8g0J3QtSDRgNCw0LHQvtGC0LDQtdGCLCDQsdGN0LQg0YHQtdGC0KHRgtC10LnRglxyXG4gIC8vIHByb3BzLmRpc3BhdGNoQ2F0ZWdvcmllc1dpdGhNYWluKHN0aWNreVRhYnNXaXRoTWFpbik7XHJcbiAgY29uc3QgdGhpc1JvdXRlUHJvZHVjdHMgPSBwcm9wcy5wcm9kdWN0c1swXS5maW5kKChpdGVtKSA9PiB7XHJcbiAgICBpZiAocHJvcHMucGF0aCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiBpdGVtLml0ZW1OYW1lID09PSAnbWFpbic7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXRlbS5pdGVtTmFtZSA9PT0gcHJvcHMucGF0aDtcclxuICB9KTtcclxuXHJcbiAgY29uc3QgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAocHJvcHMuY2hpbGRyZW4sIChjaGlsZCwgaW5kZXgpID0+IHtcclxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHtcclxuICAgICAgc3RpY2t5VGFic1dpdGhNYWluOiBwcm9wcy5zdGlja3lUYWJzLnN0aWNreVRhYnNXaXRoTWFpbixcclxuICAgICAgY3VycmVudFBhZ2VJbmRleDogaW5kZXgsXHJcbiAgICAgIHRoaXNSb3V0ZVByb2R1Y3RzLFxyXG4gICAgfSk7XHJcbiAgfSk7XHJcblxyXG4gIGNvbnNvbGUubG9nKHByb3BzLnN0aWNreVRhYnMuc3RpY2t5VGFic1dpdGhNYWluLCAnIHN0aWNreVRhYnMnKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8U3RpY2t5SGVhZGVyIHN0aWNreVRhYnM9e3Byb3BzLnN0aWNreVRhYnMuc3RpY2t5VGFic30gLz5cclxuXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICAgIHsvKiDQstC+0LfQvNC+0LbQvdC+INCyINCx0YPQtNGD0YnQtdC8INGD0LHQtdGA0YMg0L7RgtGB0Y7QtNCwICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbJ2NvbnRhaW5lcl9fZnVsbCddfT5cclxuICAgICAgICAgIHsvKiB7dGhpcy5zdGF0ZS5sb2FkZWQgPT09ICdubycgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnNTBweCcsXHJcbiAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvbG9hZGVyLmdpZlwiIGFsdD1cImxvYWRlclwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkgOiAoICovfVxyXG4gICAgICAgICAgPD57Y2hpbGRyZW59PC8+XHJcbiAgICAgICAgICB7LyogKX0gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2PiZjb3B5OyB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfTwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aDM+Rk9PVEVSPC9oMz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgYm9keSB7XHJcbiAgICAgICAgICAvLyBvdmVyZmxvdzogaGlkZGVuOyDRgdC00LXQu9Cw0YLRjCDQvdCw0LTQviDQtNC70Y8g0LzQvtC00LDQu9C60Lgg0L/QvtGC0L7QvCDQsdGD0LTQtdGCXHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8Lz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZSA9IChcclxuICB7XHJcbiAgICBzdG9yZToge1xyXG4gICAgICBjaXR5LFxyXG4gICAgICBwcm9kdWN0cyxcclxuICAgICAgYmFubmVycyxcclxuICAgICAgY2F0ZWdvcmllcyxcclxuICAgICAgY2F0YWxvZ1N0cnVjdHVyZSxcclxuICAgICAgc3RpY2t5VGFicyxcclxuICAgIH0sXHJcbiAgfSxcclxuICB7XHJcbiAgICByb3V0ZXI6IHtcclxuICAgICAgcXVlcnk6IHsgcGF0aCB9LFxyXG4gICAgfSxcclxuICB9XHJcbikgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBjYXRhbG9nU3RydWN0dXJlLFxyXG4gICAgY2F0ZWdvcmllcyxcclxuICAgIGNpdHksXHJcbiAgICBwcm9kdWN0cyxcclxuICAgIHBhdGgsXHJcbiAgICBiYW5uZXJzLFxyXG4gICAgc3RpY2t5VGFicyxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihjb25uZWN0KG1hcFN0YXRlKShMYXlvdXQpKTtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\\\Desktop\\\\All Work\\\\next-official-guide\\\\components\\\\Layout.js */"));
}

const mapState = ({
  store: {
    city,
    products,
    banners,
    categories,
    catalogStructure,
    stickyTabs
  }
}, {
  router: {
    query: {
      path
    }
  }
}) => {
  return {
    catalogStructure,
    categories,
    city,
    products,
    path,
    banners,
    stickyTabs
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapState)(Layout)));

/***/ }),

/***/ "./components/Modals/CityChoiceModal.js":
/*!**********************************************!*\
  !*** ./components/Modals/CityChoiceModal.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/fetcher */ "./utils/fetcher.js");
/* harmony import */ var _css_city_choice_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/city_choice.module.scss */ "./components/Modals/css/city_choice.module.scss");
/* harmony import */ var _css_city_choice_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_city_choice_module_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\Desktop\\All Work\\next-official-guide\\components\\Modals\\CityChoiceModal.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class CityChoiceModal extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "state", {
      cities: null
    });

    _defineProperty(this, "handleModalBG", e => {
      e.stopPropagation();
      this.props.dispatchModalStatus();
    });
  }

  async fetchCities() {
    if (this.state.cities == null) {
      let cities = await Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_3__["default"])('https://client-api.sushi-master.ru/api/v1/city');
      console.log(cities, 'CITIES');
      this.setState({
        cities
      });
    } else {
      return;
    }
  }

  render() {
    const modalHeader = () => __jsx("div", {
      className: _css_city_choice_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['m_m-header'],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 7
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }
    }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043E\u0440\u043E\u0434"));

    const modalFooter = () => __jsx("div", {
      className: _css_city_choice_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['m_m-footer'],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }
    }, __jsx("button", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }
    }, "\u043F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C"));

    this.props.modalBg ? this.fetchCities() : '';
    return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["744395776", [this.props.modalBg ? 'block' : 'none', this.props.modalBg ? 'block' : 'none', this.props.modalBg ? 'block' : 'none']]]) + " " + (_css_city_choice_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['modal-backdrop'] || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }
    }), __jsx("div", {
      role: "dialog",
      onClick: e => this.handleModalBG(e),
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["744395776", [this.props.modalBg ? 'block' : 'none', this.props.modalBg ? 'block' : 'none', this.props.modalBg ? 'block' : 'none']]]) + " " + (_css_city_choice_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['city_modal'] || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }
    }), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["744395776", [this.props.modalBg ? 'block' : 'none', this.props.modalBg ? 'block' : 'none', this.props.modalBg ? 'block' : 'none']]]) + " " + (_css_city_choice_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['city_modal-center_container'] || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["744395776", [this.props.modalBg ? 'block' : 'none', this.props.modalBg ? 'block' : 'none', this.props.modalBg ? 'block' : 'none']]]) + " " + (_css_city_choice_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['m_m-box'] || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }
    }, modalHeader(), __jsx("div", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["744395776", [this.props.modalBg ? 'block' : 'none', this.props.modalBg ? 'block' : 'none', this.props.modalBg ? 'block' : 'none']]]) + " " + (_css_city_choice_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a['m_m-body'] || ""),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 13
      }
    }, this.props.modalBg && this.state.cities ? this.state.cities.result.items.map(item => __jsx("button", {
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["744395776", [this.props.modalBg ? 'block' : 'none', this.props.modalBg ? 'block' : 'none', this.props.modalBg ? 'block' : 'none']]]),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }, item.name)) : ''), modalFooter())), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "744395776",
      dynamic: [this.props.modalBg ? 'block' : 'none', this.props.modalBg ? 'block' : 'none', this.props.modalBg ? 'block' : 'none'],
      __self: this
    }, `.modal-backdrop.__jsx-style-dynamic-selector{display:${this.props.modalBg ? 'block' : 'none'};}.city_modal.__jsx-style-dynamic-selector{display:${this.props.modalBg ? 'block' : 'none'};}.city_modal-center_container.__jsx-style-dynamic-selector{display:${this.props.modalBg ? 'block' : 'none'};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xc0JDQu9C10LrRgdC10LlcXERlc2t0b3BcXEFsbCBXb3JrXFxuZXh0LW9mZmljaWFsLWd1aWRlXFxjb21wb25lbnRzXFxNb2RhbHNcXENpdHlDaG9pY2VNb2RhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRW9CLEFBR2tELEFBR0EsQUFHQSxxQ0FMdkMsQUFHQSxBQUdBIiwiZmlsZSI6IkM6XFxVc2Vyc1xc0JDQu9C10LrRgdC10LlcXERlc2t0b3BcXEFsbCBXb3JrXFxuZXh0LW9mZmljaWFsLWd1aWRlXFxjb21wb25lbnRzXFxNb2RhbHNcXENpdHlDaG9pY2VNb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBmZXRjaGVyIGZyb20gJy4uLy4uL3V0aWxzL2ZldGNoZXInO1xyXG5cclxuaW1wb3J0IHMgZnJvbSAnLi9jc3MvY2l0eV9jaG9pY2UubW9kdWxlLnNjc3MnO1xyXG5cclxuY2xhc3MgQ2l0eUNob2ljZU1vZGFsIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuXHJcbiAgc3RhdGUgPSB7XHJcbiAgICBjaXRpZXM6IG51bGwsXHJcbiAgfTtcclxuXHJcbiAgYXN5bmMgZmV0Y2hDaXRpZXMoKSB7XHJcbiAgICBpZiAodGhpcy5zdGF0ZS5jaXRpZXMgPT0gbnVsbCkge1xyXG4gICAgICBsZXQgY2l0aWVzID0gYXdhaXQgZmV0Y2hlcihcclxuICAgICAgICAnaHR0cHM6Ly9jbGllbnQtYXBpLnN1c2hpLW1hc3Rlci5ydS9hcGkvdjEvY2l0eSdcclxuICAgICAgKTtcclxuICAgICAgY29uc29sZS5sb2coY2l0aWVzLCAnQ0lUSUVTJyk7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIGNpdGllcyxcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoYW5kbGVNb2RhbEJHID0gKGUpID0+IHtcclxuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLnByb3BzLmRpc3BhdGNoTW9kYWxTdGF0dXMoKTtcclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBtb2RhbEhlYWRlciA9ICgpID0+IChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3NbJ21fbS1oZWFkZXInXX0+XHJcbiAgICAgICAgPGgxPtCS0YvQsdC10YDQuNGC0LUg0LPQvtGA0L7QtDwvaDE+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICAgIGNvbnN0IG1vZGFsRm9vdGVyID0gKCkgPT4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c1snbV9tLWZvb3RlciddfT5cclxuICAgICAgICA8YnV0dG9uPtC/0YDQvtC00L7Qu9C20LjRgtGMPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbiAgICB0aGlzLnByb3BzLm1vZGFsQmcgPyB0aGlzLmZldGNoQ2l0aWVzKCkgOiAnJztcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3NbJ21vZGFsLWJhY2tkcm9wJ119PjwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17c1snY2l0eV9tb2RhbCddfVxyXG4gICAgICAgICAgcm9sZT1cImRpYWxvZ1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gdGhpcy5oYW5kbGVNb2RhbEJHKGUpfVxyXG4gICAgICAgID48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c1snY2l0eV9tb2RhbC1jZW50ZXJfY29udGFpbmVyJ119PlxyXG4gICAgICAgICAgey8qIG1haW4gbW9kYWwgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c1snbV9tLWJveCddfT5cclxuICAgICAgICAgICAge21vZGFsSGVhZGVyKCl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzWydtX20tYm9keSddfT5cclxuICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5tb2RhbEJnICYmIHRoaXMuc3RhdGUuY2l0aWVzXHJcbiAgICAgICAgICAgICAgICA/IHRoaXMuc3RhdGUuY2l0aWVzLnJlc3VsdC5pdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPntpdGVtLm5hbWV9PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICA6ICcnfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge21vZGFsRm9vdGVyKCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAubW9kYWwtYmFja2Ryb3Age1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMucHJvcHMubW9kYWxCZyA/ICdibG9jaycgOiAnbm9uZSd9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNpdHlfbW9kYWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAke3RoaXMucHJvcHMubW9kYWxCZyA/ICdibG9jaycgOiAnbm9uZSd9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNpdHlfbW9kYWwtY2VudGVyX2NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ICR7dGhpcy5wcm9wcy5tb2RhbEJnID8gJ2Jsb2NrJyA6ICdub25lJ307XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IG1vZGFsIH0pID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhtb2RhbC5vcGVuTW9kYWxCZywgJyBTVEFURSBtb2RhbCcpO1xyXG4gIGNvbnN0IG1vZGFsQmcgPSBtb2RhbC5vcGVuTW9kYWxCZztcclxuICByZXR1cm4geyBtb2RhbEJnIH07XHJcbn07XHJcbmNvbnN0IGRpc3BhdGNoVG9Qcm9wcyA9IChkaXNwYXRjaCkgPT4gKHtcclxuICBkaXNwYXRjaE1vZGFsU3RhdHVzOiAoc3RhdHVzKSA9PiBkaXNwYXRjaCh7IHR5cGU6ICdDTE9TRV9NT0RBTCcgfSksXHJcbn0pO1xyXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgZGlzcGF0Y2hUb1Byb3BzKShDaXR5Q2hvaWNlTW9kYWwpO1xyXG4iXX0= */
/*@ sourceURL=C:\\Users\\Алексей\\Desktop\\All Work\\next-official-guide\\components\\Modals\\CityChoiceModal.js */`));
  }

}

const mapStateToProps = ({
  modal
}) => {
  // console.log(modal.openModalBg, ' STATE modal');
  const modalBg = modal.openModalBg;
  return {
    modalBg
  };
};

const dispatchToProps = dispatch => ({
  dispatchModalStatus: status => dispatch({
    type: 'CLOSE_MODAL'
  })
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, dispatchToProps)(CityChoiceModal));

/***/ }),

/***/ "./components/Modals/css/city_choice.module.scss":
/*!*******************************************************!*\
  !*** ./components/Modals/css/city_choice.module.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"modal-backdrop": "modal-backdrop",
	"city_modal": "city_modal",
	"city_modal-center_container": "city_modal-center_container",
	"m_m-box": "m_m-box",
	"m_m-header": "m_m-header",
	"m_m-body": "m_m-body",
	"m_m-footer": "m_m-footer"
};

/***/ }),

/***/ "./components/index.module.scss":
/*!**************************************!*\
  !*** ./components/index.module.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"container__full": "container__full"
};

/***/ }),

/***/ "./config/api.js":
/*!***********************!*\
  !*** ./config/api.js ***!
  \***********************/
/*! exports provided: HEADER_AUTH_TOKEN, HEADER_DEVICE_TYPE, HEADER_DEVICE_TOKEN, DEVICE_TYPE_WEB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_AUTH_TOKEN", function() { return HEADER_AUTH_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_DEVICE_TYPE", function() { return HEADER_DEVICE_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_DEVICE_TOKEN", function() { return HEADER_DEVICE_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEVICE_TYPE_WEB", function() { return DEVICE_TYPE_WEB; });
const HEADER_AUTH_TOKEN = 'X-Auth-Token';
const HEADER_DEVICE_TYPE = 'X-Device-Type';
const HEADER_DEVICE_TOKEN = 'X-Device-Token';
/* other */

const DEVICE_TYPE_WEB = 'WEB';

/***/ }),

/***/ "./config/device-token.js":
/*!********************************!*\
  !*** ./config/device-token.js ***!
  \********************************/
/*! exports provided: getDeviceToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDeviceToken", function() { return getDeviceToken; });
/* harmony import */ var _utils_generateUniqueString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/generateUniqueString */ "./utils/generateUniqueString.js");

function getDeviceToken() {
  let deviceToken = '';

  if (deviceToken) {
    return deviceToken;
  } else {
    deviceToken = Object(_utils_generateUniqueString__WEBPACK_IMPORTED_MODULE_0__["generateUniqueString"])(16);
    return deviceToken;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, addBasePath(as), options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, addBasePath(as), options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return _react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_fetcher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/fetcher */ "./utils/fetcher.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Modals_CityChoiceModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Modals/CityChoiceModal */ "./components/Modals/CityChoiceModal.js");
/* harmony import */ var _redux_actions_dispatchStickyTabsWithMain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/actions/dispatchStickyTabsWithMain */ "./redux/actions/dispatchStickyTabsWithMain.js");
var _jsxFileName = "C:\\Users\\\u0410\u043B\u0435\u043A\u0441\u0435\u0439\\Desktop\\All Work\\next-official-guide\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








 // убирая дебаг на фолс можно контролировать высеры в консоль

/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_6___default()(_redux_store__WEBPACK_IMPORTED_MODULE_5__["default"], {
  debug: false
})(class SushiMaster extends next_app__WEBPACK_IMPORTED_MODULE_2___default.a {
  static async getInitialProps({
    Component,
    ctx
  }) {
    // const options = {
    //   headers: {
    //     [HEADER_DEVICE_TYPE]: DEVICE_TYPE_WEB,
    //     [HEADER_DEVICE_TOKEN]: getDeviceToken(),
    //   },
    // };
    //   const cityByIpOrDomain = await fetch(
    //     'https://client-api.sushi-master.ru/api/v1/city/current?domain=abakan'
    //   );
    const allCities = await Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"])('https://client-api.sushi-master.ru/api/v1/city'); // const allCities = await allCitiesReq.json();
    // тут пока по двоеточию поделил чтобы чекнуть что работает, с доменами будет так же

    let domain = ctx.req ? ctx.req.headers.host.split(':', 1) : ''; // console.log(domain, ' DOMAIN');

    let cityInsteadOfDomain = 'abakan';
    const defaultCityData = await Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"])(`https://client-api.sushi-master.ru/api/v1/city/current?domain=${cityInsteadOfDomain}`);
    console.time('fetchstart'); // 5d3834ad59201a66b905d9e7 - id abakan

    const thisCityCategoriesData = await Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"])(`https://client-api.sushi-master.ru/api/v1/catalog/categories/?cityId=${defaultCityData.result.cityId}`); // debugger;
    // const category_id = thisCityCategoriesData.result.update.items[0].id;
    // const thisCategoryProductsData = await fetcher(
    //   `https://client-api.sushi-master.ru/api/v1/catalog/categories/${category_id}/products`
    // );

    const getAllBannersData = await Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"])(`https://client-api.sushi-master.ru/api/v1/catalog/banners?${defaultCityData.result.cityId}`);
    const catalogStructure = await Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"])(`https://client-api.sushi-master.ru/api/v1/catalog/structure?${defaultCityData.result.cityId}`); // const getAllBannersData = await getAllBanners.json();
    // console.log(getAllBannersData, ' getAllBannersData');
    // console.log(defaultCityData, 'defaultCityData');

    let stickyTabs = [];
    console.log(catalogStructure, ' catalogStructure');
    catalogStructure.result.update.categories.map(item => thisCityCategoriesData.result.update.items.filter(categoryItem => categoryItem.id === item.id ? stickyTabs.push(categoryItem) : ''));
    let stickyTabsWithMain = [...stickyTabs, thisCityCategoriesData.result.update.items.filter(item => item.path === 'main')[0]];
    const cityID = defaultCityData.result.cityId;
    console.log(cityID, ' city');
    const promises = stickyTabsWithMain.map(async item => {
      const promResult = await Object(_utils_fetcher__WEBPACK_IMPORTED_MODULE_1__["default"])(`https://client-api.sushi-master.ru/api/v1/catalog/categories/${item.id}/products`, {
        cityId: cityID
      });
      const itemName = item.path;
      return _objectSpread({}, promResult.result, {
        itemName
      });
    });
    const allProducts = await Promise.all(promises);
    ctx.store.dispatch(Object(_redux_actions_dispatchStickyTabsWithMain__WEBPACK_IMPORTED_MODULE_8__["dispatchCategoriesWithMain"])(stickyTabsWithMain, stickyTabs));
    ctx.store.dispatch({
      type: 'INITIAL_CITY_STATE',
      payload: defaultCityData
    });
    ctx.store.dispatch({
      type: 'CATALOG_STRUCTURE',
      payload: catalogStructure
    });
    ctx.store.dispatch({
      type: 'INITIAL_CATEGORIES',
      payload: thisCityCategoriesData
    });
    ctx.store.dispatch({
      type: 'INITIAL_BANNERS',
      payload: getAllBannersData.result.update
    });
    ctx.store.dispatch({
      type: 'INITIAL_PRODUCTS',
      payload: [allProducts]
    });
    console.timeEnd('fetchstart');
    return {
      pageProps: _objectSpread({}, Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    };
  }

  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
      store: store,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }
    }, __jsx(_components_Modals_CityChoiceModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 11
      }
    }), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }
    }, __jsx(Component, _extends({}, pageProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }
    }))));
  }

})); // Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// static async getInitialProps(appContext) {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

/***/ }),

/***/ "./redux/actions/counterActions.js":
/*!*****************************************!*\
  !*** ./redux/actions/counterActions.js ***!
  \*****************************************/
/*! exports provided: INCREMENT_COUNTER, DECREMENT_COUNTER, incrementCounter, decrementCounter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_COUNTER", function() { return INCREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECREMENT_COUNTER", function() { return DECREMENT_COUNTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementCounter", function() { return incrementCounter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decrementCounter", function() { return decrementCounter; });
//Action Types
const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'; //Action Creator

const incrementCounter = () => ({
  type: INCREMENT_COUNTER
});
const decrementCounter = () => ({
  type: DECREMENT_COUNTER
});

/***/ }),

/***/ "./redux/actions/dispatchStickyTabsWithMain.js":
/*!*****************************************************!*\
  !*** ./redux/actions/dispatchStickyTabsWithMain.js ***!
  \*****************************************************/
/*! exports provided: dispatchCategoriesWithMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatchCategoriesWithMain", function() { return dispatchCategoriesWithMain; });
const dispatchCategoriesWithMain = (stickyTabsWithMain, stickyTabs) => {
  return {
    type: 'DISPATCH_CATEGORIES_WITH_MAIN',
    payload: {
      stickyTabsWithMain,
      stickyTabs
    }
  };
};

/***/ }),

/***/ "./redux/reducers/initialReducer.js":
/*!******************************************!*\
  !*** ./redux/reducers/initialReducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_counterActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/counterActions */ "./redux/actions/counterActions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const counterReducer = (state = {
  value: 0,
  city: {},
  categories: {}
}, action) => {
  switch (action.type) {
    case _actions_counterActions__WEBPACK_IMPORTED_MODULE_0__["INCREMENT_COUNTER"]:
      return _objectSpread({}, state, {
        value: state.value + 1
      });

    case _actions_counterActions__WEBPACK_IMPORTED_MODULE_0__["DECREMENT_COUNTER"]:
      return _objectSpread({}, state, {
        value: state.value - 1
      });

    case 'INITIAL_CITY_STATE':
      return _objectSpread({}, state, {
        city: action.payload.result
      });

    case 'CATALOG_STRUCTURE':
      return _objectSpread({}, state, {
        catalogStructure: action.payload.result
      });

    case 'INITIAL_CATEGORIES':
      return _objectSpread({}, state, {
        categories: action.payload.result
      });

    case 'INITIAL_PRODUCTS':
      console.log(action.payload, ' action.payload');
      return _objectSpread({}, state, {
        products: action.payload
      });

    case 'INITIAL_BANNERS':
      return _objectSpread({}, state, {
        banners: action.payload
      });

    case 'DISPATCH_CATEGORIES_WITH_MAIN':
      console.log(action.payload, ' ITS WORK');
      return _objectSpread({}, state, {
        stickyTabs: action.payload
      });

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (counterReducer);

/***/ }),

/***/ "./redux/reducers/modals/modalReducer.js":
/*!***********************************************!*\
  !*** ./redux/reducers/modals/modalReducer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const modalReducer = (state = {
  openModalBg: false
}, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      // console.log(action, ' ACTION');
      return {
        openModalBg: true
      };

    case 'CLOSE_MODAL':
      return {
        openModalBg: false
      };

    default:
      return _objectSpread({}, state);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (modalReducer);

/***/ }),

/***/ "./redux/reducers/rootReducer.js":
/*!***************************************!*\
  !*** ./redux/reducers/rootReducer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _initialReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initialReducer */ "./redux/reducers/initialReducer.js");
/* harmony import */ var _modals_modalReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modals/modalReducer */ "./redux/reducers/modals/modalReducer.js");



const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  store: _initialReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  modal: _modals_modalReducer__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducers_rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reducers/rootReducer */ "./redux/reducers/rootReducer.js");



/**
 * @param {object} initialState The store's initial state (on the client side, the state of the server-side store is passed here)
 * @param {boolean} options.isServer Indicates whether makeStore is executed on the server or the client side
 * @param {Request} options.req Node.js `Request` object (only set before `getInitialProps` on the server side)
 * @param {Response} options.res Node.js `Response` object (only set before `getInitialProps` on the server side)
 * @param {boolean} options.debug User-defined debug flag
 * @param {string} options.storeKey The key that will be used to persist the store in the browser's `window` object for safe HMR
 */

const makeStore = (initialState = {}, options) => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState);
};

/* harmony default export */ __webpack_exports__["default"] = (makeStore);

/***/ }),

/***/ "./utils/UrlBuilder.js":
/*!*****************************!*\
  !*** ./utils/UrlBuilder.js ***!
  \*****************************/
/*! exports provided: category, product, productById, productByUrl, productByCategoryAndUrl, cart, cartOrder, cartOrderSuccess, payment, vacancy, paymentStatus, delivery, bonuses, promotions, profile, profileHistory, about */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category", function() { return category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "product", function() { return product; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productById", function() { return productById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productByUrl", function() { return productByUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productByCategoryAndUrl", function() { return productByCategoryAndUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cart", function() { return cart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartOrder", function() { return cartOrder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartOrderSuccess", function() { return cartOrderSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "payment", function() { return payment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "vacancy", function() { return vacancy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentStatus", function() { return paymentStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delivery", function() { return delivery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bonuses", function() { return bonuses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promotions", function() { return promotions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profile", function() { return profile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileHistory", function() { return profileHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "about", function() { return about; });
function category(category) {
  return `/menu/${category.path}`;
}
function product(product) {
  // console.log("-----")
  // console.log(product)
  // console.log("-----")
  return `/products/${product.url}`;
}
function productById(product) {
  return `/products/${product.id}`;
}
function productByUrl(product) {
  return `/products/${product.url}`;
}
function productByCategoryAndUrl(category, product) {
  return `/menu/${category}/${product.url}`;
}
function cart() {
  return '/cart';
}
function cartOrder() {
  return '/cart/order';
}
function cartOrderSuccess(orderId) {
  return `/cart/order/success/${orderId}`;
}
function payment() {
  return '/payment';
}
function vacancy() {
  return '/vacancy';
}
function paymentStatus(status, orderId) {
  return `/payment/${status}/${orderId}`;
}
function delivery() {
  return '/delivery';
}
function bonuses() {
  return '/bonuses';
}
function promotions() {
  return '/promotions';
}
function profile(tab) {
  // TODO
  return `/profile/${tab}`;
}
function profileHistory(orderId) {
  // TODO
  return `/profile/history/${orderId}`;
}
const about = () => `/about`; //TODO /campaign/

/***/ }),

/***/ "./utils/fetcher.js":
/*!**************************!*\
  !*** ./utils/fetcher.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config_device_token__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/device-token */ "./config/device-token.js");
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/api */ "./config/api.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




let options = {
  headers: {
    [_config_api__WEBPACK_IMPORTED_MODULE_2__["HEADER_DEVICE_TYPE"]]: _config_api__WEBPACK_IMPORTED_MODULE_2__["DEVICE_TYPE_WEB"],
    [_config_api__WEBPACK_IMPORTED_MODULE_2__["HEADER_DEVICE_TOKEN"]]: Object(_config_device_token__WEBPACK_IMPORTED_MODULE_1__["getDeviceToken"])()
  }
};

function fetcher(url, otherOpts) {
  if (otherOpts) {
    options = _objectSpread({}, options, {}, otherOpts);
  }

  console.log(url, ' url');
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_0___default()(url, options).then(r => r.json()).catch(err => console.log(err, ' ERROR in FETHCER'));
}

/* harmony default export */ __webpack_exports__["default"] = (fetcher);

/***/ }),

/***/ "./utils/generateUniqueString.js":
/*!***************************************!*\
  !*** ./utils/generateUniqueString.js ***!
  \***************************************/
/*! exports provided: generateUniqueString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateUniqueString", function() { return generateUniqueString; });
function generateUniqueString(length) {
  let result = '';
  let randomASCII;

  for (let i = 0; i < length; i++) {
    randomASCII = Math.floor(Math.random() * 25 + 97);
    result += String.fromCharCode(randomASCII);
  }

  return result;
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map