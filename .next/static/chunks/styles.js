(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./components/index.module.scss":
/*!**************************************!*\
  !*** ./components/index.module.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1587314986847");
          });
      }
    }
  

/***/ }),

/***/ "./pages/about/about.module.scss":
/*!***************************************!*\
  !*** ./pages/about/about.module.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"about__container":"about__container","about__4k_container":"about__4k_container","about__navigation":"about__navigation","about__desc":"about__desc","about_h1":"about_h1","about__panda":"about__panda","about__statistic-items":"about__statistic-items","about__statistic-item":"about__statistic-item","about__statistic-value":"about__statistic-value","about__equal_quality":"about__equal_quality","about_equal_diagrams":"about_equal_diagrams","about_equal_diagram":"about_equal_diagram","about_equal_diagram-imgs-num":"about_equal_diagram-imgs-num","diagram-imgs-num-1":"diagram-imgs-num-1","diagram-imgs-num-5":"diagram-imgs-num-5","diagram-imgs-num-23":"diagram-imgs-num-23","diagram-imgs-num-51":"diagram-imgs-num-51","diagram-imgs-num-140":"diagram-imgs-num-140","diagram-imgs-num-270":"diagram-imgs-num-270","diagrambypic":"diagrambypic","about__who-we-are":"about__who-we-are","about__for-client":"about__for-client","about__service-features":"about__service-features","about__service-feature":"about__service-feature","about__service-features-bottom":"about__service-features-bottom","sf-4":"sf-4","sf-5":"sf-5","about__for-partner":"about__for-partner","about__partner-features_box":"about__partner-features_box","about__partner-features":"about__partner-features","about__for-partner-desc":"about__for-partner-desc","about__partner-feature-col":"about__partner-feature-col","about__partner-feature":"about__partner-feature","about__partner-feature-desc":"about__partner-feature-desc","pf-5":"pf-5","about__partner-button":"about__partner-button","about__investors":"about__investors","about__investors-box":"about__investors-box","about__investors-box-column":"about__investors-box-column","investors-box-column-1":"investors-box-column-1","ai-button":"ai-button","investors-widget":"investors-widget","investors-widget_desc":"investors-widget_desc","investors-box-column-3":"investors-box-column-3","about_swiper":"about_swiper","youtube_about_video":"youtube_about_video"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1587316742586");
          });
      }
    }
  

/***/ })

}]);
//# sourceMappingURL=styles.js.map