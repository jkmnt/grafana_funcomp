define(["@grafana/data","@grafana/runtime","@grafana/ui","emotion","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./coreapi.ts":
/*!********************!*\
  !*** ./coreapi.ts ***!
  \********************/
/*! exports provided: api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _a, _b;


var backendSrv = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__["getBackendSrv"])();
var locationSrv = Object(_grafana_runtime__WEBPACK_IMPORTED_MODULE_0__["getLocationSrv"])(); // HACK: steal registered services from the angular root element

var injector = (_a = window) === null || _a === void 0 ? void 0 : _a.angular.element('body').injector();
var dashboardSrv = injector.get('dashboardSrv');
var timeSrv = injector.get('dashboardSrv');
var contextSrv = injector.get('contextSrv'); // HACK: steal appEvents bus from the backendSrc private stuff

var appEvents = (_b = backendSrv) === null || _b === void 0 ? void 0 : _b.dependencies.appEvents;
var api = {
  backendSrv: backendSrv,
  dashboardSrv: dashboardSrv,
  locationSrv: locationSrv,
  timeSrv: timeSrv,
  contextSrv: contextSrv,
  appEvents: appEvents,
  show_message: function show_message(severity, strings) {
    appEvents.emit("alert-" + severity, strings);
  }
};

/***/ }),

/***/ "./funcomp.ts":
/*!********************!*\
  !*** ./funcomp.ts ***!
  \********************/
/*! exports provided: Funcomp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Funcomp", function() { return Funcomp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _coreapi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coreapi */ "./coreapi.ts");





function create(type, props) {
  var _a;

  var children = [];

  for (var _i = 2; _i < arguments.length; _i++) {
    children[_i - 2] = arguments[_i];
  }

  var map = {
    Button: _grafana_ui__WEBPACK_IMPORTED_MODULE_2__["Button"]
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement((_a = map[type]) !== null && _a !== void 0 ? _a : type, props, children);
}

function Funcomp(props) {
  var _a;

  console.log('render fun');
  if (!props.options.render) return null;
  var render = react__WEBPACK_IMPORTED_MODULE_0___default.a.useMemo(function () {
    console.log('compiling renderer');

    try {
      return Function('props', 'data', 'React', 'create', 'css', 'api', 'core', props.options.render);
    } catch (e) {
      console.warn('failed to compile render', e);
      return e.toString();
    }
  }, [props.options.render]);
  if (typeof render === 'string') return render;

  try {
    return (_a = render(props, props.data, react__WEBPACK_IMPORTED_MODULE_0___default.a, create, emotion__WEBPACK_IMPORTED_MODULE_1__["css"], {}, _coreapi__WEBPACK_IMPORTED_MODULE_3__["api"])) !== null && _a !== void 0 ? _a : null;
  } catch (e) {
    console.warn('failed to render', e);
    return e.toString();
  }
}

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _funcomp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./funcomp */ "./funcomp.ts");




var suggestions = [
  /*
  { kind: CodeEditorSuggestionItemKind.Field, label: 'value' },
  { kind: CodeEditorSuggestionItemKind.Property, label: 'value.text' },
  { kind: CodeEditorSuggestionItemKind.Property, label: 'value.style' },
  { kind: CodeEditorSuggestionItemKind.Property, label: 'value.html' },
  { kind: CodeEditorSuggestionItemKind.Constant, label: 'value.raw' },
  { kind: CodeEditorSuggestionItemKind.Constant, label: 'value.name' },
  { kind: CodeEditorSuggestionItemKind.Constant, label: 'value.i' },
  { kind: CodeEditorSuggestionItemKind.Field, label: 'field' },
  { kind: CodeEditorSuggestionItemKind.Constant, label: 'field.name' },
  { kind: CodeEditorSuggestionItemKind.Field, label: 'lib' },
  { kind: CodeEditorSuggestionItemKind.Property, label: 'lib.moment' },
  { kind: CodeEditorSuggestionItemKind.Field, label: 'context' },
  { kind: CodeEditorSuggestionItemKind.Constant, label: 'context.df' },
  */
];
var DEF_CODE = "/* */";

function JsEditor(_a) {
  var value = _a.value,
      onChange = _a.onChange;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_2__["CodeEditor"], {
    value: value,
    onBlur: onChange,
    onSave: onChange,
    language: 'javascript',
    showMiniMap: false,
    showLineNumbers: true,
    getSuggestions: function getSuggestions() {
      return suggestions;
    },
    height: 400
  });
}

var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_1__["PanelPlugin"](_funcomp__WEBPACK_IMPORTED_MODULE_3__["Funcomp"]);
plugin.setPanelOptions(function (builder) {
  builder.addCustomEditor({
    id: 'render',
    path: 'render',
    name: 'Render JS',
    editor: JsEditor,
    defaultValue: DEF_CODE
  });
});

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_emotion__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map