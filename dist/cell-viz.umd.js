(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["cell-viz"] = factory(require("vue"));
	else
		root["cell-viz"] = factory(root["Vue"]);
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__8bbf__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fae3");
/******/ })
/************************************************************************/
/******/ ({

/***/ "053b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailedCollection_vue_vue_type_style_index_0_id_00ceb12c_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("20ff");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailedCollection_vue_vue_type_style_index_0_id_00ceb12c_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailedCollection_vue_vue_type_style_index_0_id_00ceb12c_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailedCollection_vue_vue_type_style_index_0_id_00ceb12c_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "0b0c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FigureCaption_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("791b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FigureCaption_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FigureCaption_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FigureCaption_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "1eb2":
/***/ (function(module, exports, __webpack_require__) {

// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}


/***/ }),

/***/ "20ff":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "377a":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "65d9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
  * vue-class-component v6.2.0
  * (c) 2015-present Evan You
  * @license MIT
  */


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(__webpack_require__("8bbf"));

var hasProto = { __proto__: [] } instanceof Array;
function createDecorator(factory) {
    return function (target, key, index) {
        var Ctor = typeof target === 'function'
            ? target
            : target.constructor;
        if (!Ctor.__decorators__) {
            Ctor.__decorators__ = [];
        }
        if (typeof index !== 'number') {
            index = undefined;
        }
        Ctor.__decorators__.push(function (options) { return factory(options, key, index); });
    };
}
function mixins() {
    var Ctors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Ctors[_i] = arguments[_i];
    }
    return Vue.extend({ mixins: Ctors });
}
function isPrimitive(value) {
    var type = typeof value;
    return value == null || (type !== "object" && type !== "function");
}
function warn(message) {
    if (typeof console !== 'undefined') {
        console.warn('[vue-class-component] ' + message);
    }
}

function collectDataFromConstructor(vm, Component) {
    // override _init to prevent to init as Vue instance
    var originalInit = Component.prototype._init;
    Component.prototype._init = function () {
        var _this = this;
        // proxy to actual vm
        var keys = Object.getOwnPropertyNames(vm);
        // 2.2.0 compat (props are no longer exposed as self properties)
        if (vm.$options.props) {
            for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        }
        keys.forEach(function (key) {
            if (key.charAt(0) !== '_') {
                Object.defineProperty(_this, key, {
                    get: function () { return vm[key]; },
                    set: function (value) { return vm[key] = value; },
                    configurable: true
                });
            }
        });
    };
    // should be acquired class property values
    var data = new Component();
    // restore original _init to avoid memory leak (#209)
    Component.prototype._init = originalInit;
    // create plain data object
    var plainData = {};
    Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    });
    if (false) {}
    return plainData;
}

var $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured' // 2.5
];
function componentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag || Component.name;
    // prototype props.
    var proto = Component.prototype;
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        // hooks
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (typeof descriptor.value === 'function') {
            // methods
            (options.methods || (options.methods = {}))[key] = descriptor.value;
        }
        else if (descriptor.get || descriptor.set) {
            // computed properties
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    // decorate options
    var decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(function (fn) { return fn(options); });
        delete Component.__decorators__;
    }
    // find super
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof Vue
        ? superProto.constructor
        : Vue;
    var Extended = Super.extend(options);
    forwardStaticMembers(Extended, Component, Super);
    return Extended;
}
var reservedPropertyNames = [
    // Unique id
    'cid',
    // Super Vue constructor
    'super',
    // Component options that will be used by the component
    'options',
    'superOptions',
    'extendOptions',
    'sealedOptions',
    // Private assets
    'component',
    'directive',
    'filter'
];
function forwardStaticMembers(Extended, Original, Super) {
    // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
    Object.getOwnPropertyNames(Original).forEach(function (key) {
        // `prototype` should not be overwritten
        if (key === 'prototype') {
            return;
        }
        // Some browsers does not allow reconfigure built-in properties
        var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);
        if (extendedDescriptor && !extendedDescriptor.configurable) {
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(Original, key);
        // If the user agent does not support `__proto__` or its family (IE <= 10),
        // the sub class properties may be inherited properties from the super class in TypeScript.
        // We need to exclude such properties to prevent to overwrite
        // the component options object which stored on the extended constructor (See #192).
        // If the value is a referenced value (object or function),
        // we can check equality of them and exclude it if they have the same reference.
        // If it is a primitive value, it will be forwarded for safety.
        if (!hasProto) {
            // Only `cid` is explicitly exluded from property forwarding
            // because we cannot detect whether it is a inherited property or not
            // on the no `__proto__` environment even though the property is reserved.
            if (key === 'cid') {
                return;
            }
            var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);
            if (!isPrimitive(descriptor.value)
                && superDescriptor
                && superDescriptor.value === descriptor.value) {
                return;
            }
        }
        // Warn if the users manually declare reserved properties
        if (false) {}
        Object.defineProperty(Extended, key, descriptor);
    });
}

function Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
(function (Component) {
    function registerHooks(keys) {
        $internalHooks.push.apply($internalHooks, keys);
    }
    Component.registerHooks = registerHooks;
})(Component || (Component = {}));
var Component$1 = Component;

exports.default = Component$1;
exports.createDecorator = createDecorator;
exports.mixins = mixins;


/***/ }),

/***/ "6793":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleCollection_vue_vue_type_style_index_0_id_1030f4c4_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("81e3");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleCollection_vue_vue_type_style_index_0_id_1030f4c4_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleCollection_vue_vue_type_style_index_0_id_1030f4c4_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SimpleCollection_vue_vue_type_style_index_0_id_1030f4c4_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "791b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "81e3":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8641":
/***/ (function(module, exports) {



/***/ }),

/***/ "8bbf":
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__8bbf__;

/***/ }),

/***/ "ab55":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FigureHeader_vue_vue_type_style_index_0_id_1706913d_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("377a");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FigureHeader_vue_vue_type_style_index_0_id_1706913d_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FigureHeader_vue_vue_type_style_index_0_id_1706913d_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FigureHeader_vue_vue_type_style_index_0_id_1706913d_lang_stylus_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "c8c7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("dee2");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_node_modules_css_loader_index_js_ref_11_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_lib_index_js_ref_11_oneOf_1_2_node_modules_stylus_loader_index_js_ref_11_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "dee2":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fae3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
var setPublicPath = __webpack_require__("1eb2");

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0595ba96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Figure.vue?vue&type=template&id=057821b9&lang=pug&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"fig"},[(_vm.title)?_c('div',{staticClass:"fighead"},[_c('FigureHeader',{attrs:{"title":_vm.title}})],1):_vm._e(),_c('div',{staticClass:"figviz"},[_c('Grid',{attrs:{"data":_vm.data,"theme":_vm.theme}})],1),(_vm.caption)?_c('div',{staticClass:"figcap"},[_c('FigureCaption',_vm._b({},'FigureCaption',_vm.caption,false))],1):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Figure.vue?vue&type=template&id=057821b9&lang=pug&

// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.js
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_root_Vue_ = __webpack_require__("8bbf");
var external_commonjs_vue_commonjs2_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_root_Vue_);

// EXTERNAL MODULE: ./node_modules/vue-class-component/dist/vue-class-component.common.js
var vue_class_component_common = __webpack_require__("65d9");
var vue_class_component_common_default = /*#__PURE__*/__webpack_require__.n(vue_class_component_common);

// CONCATENATED MODULE: ./node_modules/vue-property-decorator/lib/vue-property-decorator.js
/** vue-property-decorator verson 7.0.0 MIT LICENSE copyright 2018 kaorun343 */




/**
 * decorator of an inject
 * @param from key
 * @return PropertyDecorator
 */
function Inject(options) {
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, key) {
        if (typeof componentOptions.inject === 'undefined') {
            componentOptions.inject = {};
        }
        if (!Array.isArray(componentOptions.inject)) {
            componentOptions.inject[key] = options || key;
        }
    });
}
/**
 * decorator of a provide
 * @param key key
 * @return PropertyDecorator | void
 */
function Provide(key) {
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, k) {
        var provide = componentOptions.provide;
        if (typeof provide !== 'function' || !provide.managed) {
            var original_1 = componentOptions.provide;
            provide = componentOptions.provide = function () {
                var rv = Object.create((typeof original_1 === 'function' ? original_1.call(this) : original_1) || null);
                for (var i in provide.managed)
                    rv[provide.managed[i]] = this[i];
                return rv;
            };
            provide.managed = {};
        }
        provide.managed[k] = key || k;
    });
}
/**
 * decorator of model
 * @param  event event name
 * @param options options
 * @return PropertyDecorator
 */
function Model(event, options) {
    if (options === void 0) { options = {}; }
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, k) {
        (componentOptions.props || (componentOptions.props = {}))[k] = options;
        componentOptions.model = { prop: k, event: event || k };
    });
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, k) {
        (componentOptions.props || (componentOptions.props = {}))[k] = options;
    });
}
/**
 * decorator of a watch function
 * @param  path the path or the expression to observe
 * @param  WatchOption
 * @return MethodDecorator
 */
function Watch(path, options) {
    if (options === void 0) { options = {}; }
    var _a = options.deep, deep = _a === void 0 ? false : _a, _b = options.immediate, immediate = _b === void 0 ? false : _b;
    return Object(vue_class_component_common["createDecorator"])(function (componentOptions, handler) {
        if (typeof componentOptions.watch !== 'object') {
            componentOptions.watch = Object.create(null);
        }
        componentOptions.watch[path] = { handler: handler, deep: deep, immediate: immediate };
    });
}
// Code copied from Vue/src/shared/util.js
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = function (str) { return str.replace(hyphenateRE, '-$1').toLowerCase(); };
/**
 * decorator of an event-emitter function
 * @param  event The name of the event
 * @return MethodDecorator
 */
function Emit(event) {
    return function (target, key, descriptor) {
        key = hyphenate(key);
        var original = descriptor.value;
        descriptor.value = function emitter() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (original.apply(this, args) !== false)
                this.$emit.apply(this, [event || key].concat(args));
        };
    };
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0595ba96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/metadata/FigureHeader.vue?vue&type=template&id=1706913d&scoped=true&lang=pug&
var FigureHeadervue_type_template_id_1706913d_scoped_true_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"header"},[_c('div',{staticClass:"title"},[_vm._v(_vm._s(_vm.title))])])}
var FigureHeadervue_type_template_id_1706913d_scoped_true_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/metadata/FigureHeader.vue?vue&type=template&id=1706913d&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader??ref--12-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/metadata/FigureHeader.vue?vue&type=script&lang=ts&


var FigureHeadervue_type_script_lang_ts_FigureHeader = /** @class */ (function (_super) {
    __extends(FigureHeader, _super);
    function FigureHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Prop(),
        __metadata("design:type", String)
    ], FigureHeader.prototype, "title", void 0);
    FigureHeader = __decorate([
        vue_class_component_common_default.a
    ], FigureHeader);
    return FigureHeader;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var FigureHeadervue_type_script_lang_ts_ = (FigureHeadervue_type_script_lang_ts_FigureHeader);

// CONCATENATED MODULE: ./src/components/metadata/FigureHeader.vue?vue&type=script&lang=ts&
 /* harmony default export */ var metadata_FigureHeadervue_type_script_lang_ts_ = (FigureHeadervue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/metadata/FigureHeader.vue?vue&type=style&index=0&id=1706913d&lang=stylus&scoped=true&
var FigureHeadervue_type_style_index_0_id_1706913d_lang_stylus_scoped_true_ = __webpack_require__("ab55");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/components/metadata/FigureHeader.vue






/* normalize component */

var component = normalizeComponent(
  metadata_FigureHeadervue_type_script_lang_ts_,
  FigureHeadervue_type_template_id_1706913d_scoped_true_lang_pug_render,
  FigureHeadervue_type_template_id_1706913d_scoped_true_lang_pug_staticRenderFns,
  false,
  null,
  "1706913d",
  null
  
)

component.options.__file = "FigureHeader.vue"
/* harmony default export */ var metadata_FigureHeader = (component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0595ba96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/metadata/FigureCaption.vue?vue&type=template&id=0db24dcb&lang=pug&
var FigureCaptionvue_type_template_id_0db24dcb_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('p',{staticClass:"caption"},[_c('span',{staticClass:"name"},[_vm._v(_vm._s(_vm.name))]),(_vm.info)?_c('span',{staticClass:"info"},[_vm._v(_vm._s(_vm.info))]):_vm._e()])}
var FigureCaptionvue_type_template_id_0db24dcb_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/metadata/FigureCaption.vue?vue&type=template&id=0db24dcb&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader??ref--12-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/metadata/FigureCaption.vue?vue&type=script&lang=ts&


var FigureCaptionvue_type_script_lang_ts_FigureCaption = /** @class */ (function (_super) {
    __extends(FigureCaption, _super);
    function FigureCaption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Prop(),
        __metadata("design:type", String)
    ], FigureCaption.prototype, "name", void 0);
    __decorate([
        Prop(),
        __metadata("design:type", String)
    ], FigureCaption.prototype, "info", void 0);
    FigureCaption = __decorate([
        vue_class_component_common_default.a
    ], FigureCaption);
    return FigureCaption;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var FigureCaptionvue_type_script_lang_ts_ = (FigureCaptionvue_type_script_lang_ts_FigureCaption);

// CONCATENATED MODULE: ./src/components/metadata/FigureCaption.vue?vue&type=script&lang=ts&
 /* harmony default export */ var metadata_FigureCaptionvue_type_script_lang_ts_ = (FigureCaptionvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/metadata/FigureCaption.vue?vue&type=style&index=0&lang=stylus&
var FigureCaptionvue_type_style_index_0_lang_stylus_ = __webpack_require__("0b0c");

// CONCATENATED MODULE: ./src/components/metadata/FigureCaption.vue






/* normalize component */

var FigureCaption_component = normalizeComponent(
  metadata_FigureCaptionvue_type_script_lang_ts_,
  FigureCaptionvue_type_template_id_0db24dcb_lang_pug_render,
  FigureCaptionvue_type_template_id_0db24dcb_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

FigureCaption_component.options.__file = "FigureCaption.vue"
/* harmony default export */ var metadata_FigureCaption = (FigureCaption_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0595ba96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cell/Grid.vue?vue&type=template&id=643e300e&lang=pug&
var Gridvue_type_template_id_643e300e_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',_vm._b({staticClass:"grid"},'svg',_vm.svgAttributes,false),[_c('rect',_vm._b({staticClass:"b"},'rect',_vm.getBorderAttributes(),false)),_c('g',{attrs:{"transform":_vm.gridTransform}},[_vm._l((_vm.data),function(row,r){return _c('g',{staticClass:"r"},_vm._l((row),function(cellState,c){return _c('rect',_vm._b({staticClass:"c",attrs:{"data-state":cellState}},'rect',_vm.getCellAttributes(r, c),false))}))}),_c('g',[_vm._l((Array(_vm.data.length)),function(_,r){return (r > 0)?_c('line',_vm._b({staticClass:"l lh"},'line',_vm.getHorizontalLineAttributes(r),false)):_vm._e()}),_vm._l((Array(_vm.data.length)),function(_,r){return (r > 0)?_c('line',_vm._b({staticClass:"l lv"},'line',_vm.getVerticalLineAttributes(r),false)):_vm._e()})],2)],2)])}
var Gridvue_type_template_id_643e300e_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/cell/Grid.vue?vue&type=template&id=643e300e&lang=pug&

// EXTERNAL MODULE: ./src/interfaces/Theme.ts
var Theme = __webpack_require__("8641");
var Theme_default = /*#__PURE__*/__webpack_require__.n(Theme);

// CONCATENATED MODULE: ./src/themes.ts
var rgb = {
    cellSize: 32,
    cellColor: {
        0: 'red',
        1: 'green',
    },
    gridlineColor: 'yellow',
    borderColor: 'blue',
    borderWidth: 5,
};
var classic = {
    cellSize: 16,
    cellColor: {
        0: '#fff',
        1: '#222',
    },
    gridlineColor: '#ddd',
    borderWidth: 3,
    borderColor: '#aaa',
};
/* harmony default export */ var themes = ({ classic: classic, rgb: rgb });


// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader??ref--12-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/cell/Grid.vue?vue&type=script&lang=ts&




var Gridvue_type_script_lang_ts_Grid = /** @class */ (function (_super) {
    __extends(Grid, _super);
    function Grid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Grid.prototype, "cellSize", {
        get: function () {
            return this.theme.cellSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "innerWidth", {
        get: function () {
            return (this.cellSize) * this.data.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "totalWidth", {
        get: function () {
            return this.innerWidth + (this.theme.borderWidth * 2);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "svgAttributes", {
        get: function () {
            return {
                viewBox: "0 0 " + this.totalWidth + " " + this.totalWidth,
                width: this.totalWidth,
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Grid.prototype, "gridTransform", {
        get: function () {
            return "translate(" + this.theme.borderWidth + "," + this.theme.borderWidth + ")";
        },
        enumerable: true,
        configurable: true
    });
    Grid.prototype.getCellAttributes = function (rowIndex, cellIndex) {
        return {
            y: (rowIndex * this.cellSize),
            x: (cellIndex * this.cellSize),
            width: this.cellSize,
            height: this.cellSize,
            fill: this.theme.cellColor[this.data[rowIndex][cellIndex]],
        };
    };
    Grid.prototype.getHorizontalLineAttributes = function (rowIndex) {
        return {
            stroke: this.theme.gridlineColor,
            x1: 0,
            x2: this.innerWidth,
            y1: (rowIndex * this.cellSize),
            y2: (rowIndex * this.cellSize),
        };
    };
    Grid.prototype.getVerticalLineAttributes = function (rowIndex) {
        return {
            stroke: this.theme.gridlineColor,
            y1: 0,
            y2: this.innerWidth,
            x1: (rowIndex * this.cellSize),
            x2: (rowIndex * this.cellSize),
        };
    };
    Grid.prototype.getBorderAttributes = function (vertical, last) {
        if (vertical === void 0) { vertical = false; }
        if (last === void 0) { last = false; }
        var lineFn = vertical ? this.getVerticalLineAttributes : this.getHorizontalLineAttributes;
        var rowIndex = last ? this.data.length : 0;
        var line = lineFn(rowIndex);
        var mod = last ? (vertical ? {
            // y1: line.y1 + theme.borderWidth,
            y2: line.y2 + this.theme.borderWidth,
        } : {
            // x1: line.x1 + theme.borderWidth,
            x2: line.x2 + this.theme.borderWidth,
        }) : {};
        return Object.assign(line, mod, {
            'fill': 'none',
            'width': this.totalWidth,
            'height': this.totalWidth,
            'stroke': this.theme.borderColor,
            'stroke-width': this.theme.borderWidth * 2,
        });
    };
    var _a;
    __decorate([
        Prop(),
        __metadata("design:type", Array)
    ], Grid.prototype, "data", void 0);
    __decorate([
        Prop({
            type: Object,
            default: function () { return themes.classic; },
        }),
        __metadata("design:type", typeof (_a = typeof Theme_default.a !== "undefined" && Theme_default.a) === "function" && _a || Object)
    ], Grid.prototype, "theme", void 0);
    Grid = __decorate([
        vue_class_component_common_default.a
    ], Grid);
    return Grid;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var Gridvue_type_script_lang_ts_ = (Gridvue_type_script_lang_ts_Grid);

// CONCATENATED MODULE: ./src/components/cell/Grid.vue?vue&type=script&lang=ts&
 /* harmony default export */ var cell_Gridvue_type_script_lang_ts_ = (Gridvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/cell/Grid.vue?vue&type=style&index=0&lang=stylus&
var Gridvue_type_style_index_0_lang_stylus_ = __webpack_require__("c8c7");

// CONCATENATED MODULE: ./src/components/cell/Grid.vue






/* normalize component */

var Grid_component = normalizeComponent(
  cell_Gridvue_type_script_lang_ts_,
  Gridvue_type_template_id_643e300e_lang_pug_render,
  Gridvue_type_template_id_643e300e_lang_pug_staticRenderFns,
  false,
  null,
  null,
  null
  
)

Grid_component.options.__file = "Grid.vue"
/* harmony default export */ var cell_Grid = (Grid_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader??ref--12-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Figure.vue?vue&type=script&lang=ts&






var Figurevue_type_script_lang_ts_Figure = /** @class */ (function (_super) {
    __extends(Figure, _super);
    function Figure() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    var _a;
    __decorate([
        Prop(),
        __metadata("design:type", Array)
    ], Figure.prototype, "data", void 0);
    __decorate([
        Prop(),
        __metadata("design:type", typeof (_a = typeof Theme_default.a !== "undefined" && Theme_default.a) === "function" && _a || Object)
    ], Figure.prototype, "theme", void 0);
    __decorate([
        Prop(),
        __metadata("design:type", String)
    ], Figure.prototype, "title", void 0);
    __decorate([
        Prop(),
        __metadata("design:type", Object)
    ], Figure.prototype, "caption", void 0);
    Figure = __decorate([
        vue_class_component_common_default()({
            components: {
                FigureHeader: metadata_FigureHeader,
                FigureCaption: metadata_FigureCaption,
                Grid: cell_Grid,
            },
        })
    ], Figure);
    return Figure;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var Figurevue_type_script_lang_ts_ = (Figurevue_type_script_lang_ts_Figure);

// CONCATENATED MODULE: ./src/components/Figure.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_Figurevue_type_script_lang_ts_ = (Figurevue_type_script_lang_ts_); 
// CONCATENATED MODULE: ./src/components/Figure.vue





/* normalize component */

var Figure_component = normalizeComponent(
  components_Figurevue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

Figure_component.options.__file = "Figure.vue"
/* harmony default export */ var components_Figure = (Figure_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0595ba96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SimpleCollection.vue?vue&type=template&id=1030f4c4&scoped=true&lang=pug&
var SimpleCollectionvue_type_template_id_1030f4c4_scoped_true_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col"},[_c('div',{staticClass:"colhead"},[_c('FigureHeader',{attrs:{"title":_vm.title}})],1),_c('div',{staticClass:"colviz"},_vm._l((_vm.figures),function(data){return _c('div',{staticClass:"colfig"},[_c('Grid',{attrs:{"data":data,"theme":_vm.theme}})],1)})),_c('div',{staticClass:"colcap"},[_c('FigureCaption',_vm._b({},'FigureCaption',_vm.caption,false))],1)])}
var SimpleCollectionvue_type_template_id_1030f4c4_scoped_true_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/SimpleCollection.vue?vue&type=template&id=1030f4c4&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader??ref--12-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/SimpleCollection.vue?vue&type=script&lang=ts&






var SimpleCollectionvue_type_script_lang_ts_SimpleCollection = /** @class */ (function (_super) {
    __extends(SimpleCollection, _super);
    function SimpleCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    var _a;
    __decorate([
        Prop(),
        __metadata("design:type", Array)
    ], SimpleCollection.prototype, "figures", void 0);
    __decorate([
        Prop(),
        __metadata("design:type", String)
    ], SimpleCollection.prototype, "title", void 0);
    __decorate([
        Prop(),
        __metadata("design:type", Object)
    ], SimpleCollection.prototype, "caption", void 0);
    __decorate([
        Prop(),
        __metadata("design:type", typeof (_a = typeof Theme_default.a !== "undefined" && Theme_default.a) === "function" && _a || Object)
    ], SimpleCollection.prototype, "theme", void 0);
    SimpleCollection = __decorate([
        vue_class_component_common_default()({
            components: {
                FigureHeader: metadata_FigureHeader,
                FigureCaption: metadata_FigureCaption,
                Grid: cell_Grid,
            },
        })
    ], SimpleCollection);
    return SimpleCollection;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var SimpleCollectionvue_type_script_lang_ts_ = (SimpleCollectionvue_type_script_lang_ts_SimpleCollection);

// CONCATENATED MODULE: ./src/components/SimpleCollection.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_SimpleCollectionvue_type_script_lang_ts_ = (SimpleCollectionvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/SimpleCollection.vue?vue&type=style&index=0&id=1030f4c4&lang=stylus&scoped=true&
var SimpleCollectionvue_type_style_index_0_id_1030f4c4_lang_stylus_scoped_true_ = __webpack_require__("6793");

// CONCATENATED MODULE: ./src/components/SimpleCollection.vue






/* normalize component */

var SimpleCollection_component = normalizeComponent(
  components_SimpleCollectionvue_type_script_lang_ts_,
  SimpleCollectionvue_type_template_id_1030f4c4_scoped_true_lang_pug_render,
  SimpleCollectionvue_type_template_id_1030f4c4_scoped_true_lang_pug_staticRenderFns,
  false,
  null,
  "1030f4c4",
  null
  
)

SimpleCollection_component.options.__file = "SimpleCollection.vue"
/* harmony default export */ var components_SimpleCollection = (SimpleCollection_component.exports);
// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"0595ba96-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/pug-plain-loader!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DetailedCollection.vue?vue&type=template&id=00ceb12c&scoped=true&lang=pug&
var DetailedCollectionvue_type_template_id_00ceb12c_scoped_true_lang_pug_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"col"},[_c('div',{staticClass:"colhead"},[_c('FigureHeader',{attrs:{"title":_vm.title}})],1),_c('div',{staticClass:"colviz"},_vm._l((_vm.figures),function(figure){return _c('div',{staticClass:"colfig"},[_c('Grid',{attrs:{"data":figure.data,"theme":_vm.theme}}),_c('FigureCaption',_vm._b({},'FigureCaption',figure.meta,false))],1)}))])}
var DetailedCollectionvue_type_template_id_00ceb12c_scoped_true_lang_pug_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/DetailedCollection.vue?vue&type=template&id=00ceb12c&scoped=true&lang=pug&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/ts-loader??ref--12-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/DetailedCollection.vue?vue&type=script&lang=ts&






var DetailedCollectionvue_type_script_lang_ts_DetailedCollection = /** @class */ (function (_super) {
    __extends(DetailedCollection, _super);
    function DetailedCollection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    var _a, _b;
    __decorate([
        Prop(),
        __metadata("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" && _a || Object)
    ], DetailedCollection.prototype, "figures", void 0);
    __decorate([
        Prop(),
        __metadata("design:type", String)
    ], DetailedCollection.prototype, "title", void 0);
    __decorate([
        Prop(),
        __metadata("design:type", typeof (_b = typeof Theme_default.a !== "undefined" && Theme_default.a) === "function" && _b || Object)
    ], DetailedCollection.prototype, "theme", void 0);
    DetailedCollection = __decorate([
        vue_class_component_common_default()({
            components: {
                FigureHeader: metadata_FigureHeader,
                FigureCaption: metadata_FigureCaption,
                Grid: cell_Grid,
            },
        })
    ], DetailedCollection);
    return DetailedCollection;
}(external_commonjs_vue_commonjs2_vue_root_Vue_default.a));
/* harmony default export */ var DetailedCollectionvue_type_script_lang_ts_ = (DetailedCollectionvue_type_script_lang_ts_DetailedCollection);

// CONCATENATED MODULE: ./src/components/DetailedCollection.vue?vue&type=script&lang=ts&
 /* harmony default export */ var components_DetailedCollectionvue_type_script_lang_ts_ = (DetailedCollectionvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./src/components/DetailedCollection.vue?vue&type=style&index=0&id=00ceb12c&lang=stylus&scoped=true&
var DetailedCollectionvue_type_style_index_0_id_00ceb12c_lang_stylus_scoped_true_ = __webpack_require__("053b");

// CONCATENATED MODULE: ./src/components/DetailedCollection.vue






/* normalize component */

var DetailedCollection_component = normalizeComponent(
  components_DetailedCollectionvue_type_script_lang_ts_,
  DetailedCollectionvue_type_template_id_00ceb12c_scoped_true_lang_pug_render,
  DetailedCollectionvue_type_template_id_00ceb12c_scoped_true_lang_pug_staticRenderFns,
  false,
  null,
  "00ceb12c",
  null
  
)

DetailedCollection_component.options.__file = "DetailedCollection.vue"
/* harmony default export */ var components_DetailedCollection = (DetailedCollection_component.exports);
// CONCATENATED MODULE: ./src/main.ts





// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib-no-default.js
/* concated harmony reexport Figure */__webpack_require__.d(__webpack_exports__, "Figure", function() { return components_Figure; });
/* concated harmony reexport SimpleCollection */__webpack_require__.d(__webpack_exports__, "SimpleCollection", function() { return components_SimpleCollection; });
/* concated harmony reexport DetailedCollection */__webpack_require__.d(__webpack_exports__, "DetailedCollection", function() { return components_DetailedCollection; });




/***/ })

/******/ });
});
//# sourceMappingURL=cell-viz.umd.js.map