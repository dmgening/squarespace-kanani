/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@squarespace/core/ImageLoader.js":
/*!*******************************************************!*\
  !*** ./node_modules/@squarespace/core/ImageLoader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Squarespace, INC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * ​Squarespace comes with a number of built-in facilities for managing images
 * that are uploaded to our system. After uploading an image into a collection,
 * Squarespace automatically creates multiple copies of the image with different 
 * sizes. Our ImageLoader will then help render images properly when they are
 * presented on a page, even on retina displays.
 *
 * ImageLoader can also be used to fit or fill an image inside ​a parent
 * container, where it automatically determines which image size to use
 * depending on the current dimensions of the container.
 *
 * WARNING:
 * Currently, ImageLoader is present on all Squarespace sites under the global
 * namespace ImageLoader, but this is an unsupported API and we recommend
 * accessing this functionality through squarespace-core.
 *
 * @namespace ImageLoader
 */
var ImageLoader = {

  /**
   * Using the global ImageLoader namespace, calls ImageLoader.load on the
   * given node with the given config options.
   *
   * @method load
   * @param  {HTMLElement} img    Image node to be loaded
   * @param  {Object} config      Config object
   * @return {Boolean}            True if the image was loaded, false otherwise
   */
  load: function load(img, config) {
    return window.ImageLoader.load(img, config);
  }
};

/**
 * @exports {Object} ImageLoader
 */
exports.default = ImageLoader;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/@squarespace/core/Lifecycle.js":
/*!*****************************************************!*\
  !*** ./node_modules/@squarespace/core/Lifecycle.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Squarespace, INC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Squarespace provides default functionality for some content that users add
 * in the CMS.
 *
 * If you are building a Developer Platform site that loads Squarespace content
 * through an XHR or some other kind of AJAX, you can use the Lifecycle methods
 * provided here to initialize and/or destroy this functionality.
 *
 * WARNING:
 * The functionality called by Lifecycle is available on the global namespace
 * window.Squarespace, but this is an unsupported API and it is highly
 * recommended that you access it through squarespace-core.
 *
 * @namespace Lifecycle
 */
var Lifecycle = {

  /**
   * Squarespace.afterBodyLoad() trigger loads scripts and calls onInitialize,
   * which individual modules' init functions are bound to. This should be
   * called after new HTML content containing Squarespace default functionality
   * is added to a page (for example, after AJAX loading a new page).
   *
   * @method init
   */
  init: function init() {
    window.Squarespace.AFTER_BODY_LOADED = false;
    window.Squarespace.afterBodyLoad();
  },


  /**
   * Squarespace.globalDestroy calls onDestroy, triggering each module's
   * destructor. This should be called prior to loading in new HTML content
   * containing Squarespace default functionality.
   *
   * @method  destroy
   */
  destroy: function destroy() {
    window.Squarespace.globalDestroy(Y);
  }
};

/**
 * @exports {Object} Lifecycle
 */
exports.default = Lifecycle;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/@squarespace/core/Tweak.js":
/*!*************************************************!*\
  !*** ./node_modules/@squarespace/core/Tweak.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Squarespace, INC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var isAuthenticated = Static.SQUARESPACE_CONTEXT.authenticatedAccount;

/**
 * @const {Object} tweaksToWatch
 */
var tweaksToWatch = {
  all: {
    callbacks: []
  }
};

/**
 * Tweaks allow a developer to isolate specific elements of the design and
 * present options to the user in an easy-to-use interface. Tweaks are surfaced
 * in the Squarespace interface through Style Editor (e.g.
 * yoursite.squarespace.com/config/design/style). Using tweaks, a user can make
 * presentational changes to their website without having to know or edit CSS code.
 *
 * Tweaks are typically used by the developers through LESS variables, mixins,
 * and class names added to the <body> element.
 *
 * Sometimes, a developer may find it necessary to access the value of a tweak
 * through Javascript, or to watch for changes in that tweak and update the DOM
 * accordingly. The Tweak module of squarespace-core is meant to provide an
 * official interface for doing so.
 *
 * @namespace Tweak
 */
var Tweak = {

  /**
   * Gets the value of one of the tweaks given its name.
   *
   * @method getValue
   * @param {String} name      Name of the tweak
   * @returns {String}         The value of the tweak
   */
  getValue: function getValue(name) {
    if (!name || typeof name !== 'string') {
      console.error('squarespace-core: Invalid tweak name ' + name);
      return null;
    }

    return window.Static.SQUARESPACE_CONTEXT.tweakJSON[name] || window.Static.SQUARESPACE_CONTEXT.tweakJSON[name.replace('@', '').replace('.', '')];
  },


  /**
   * Listen for changes on a tweak item. If one parameter is provided, the
   * callback will be executed every time any tweak changes. If two parameters
   * are provided and the first parameter is a String, the callback will be
   * executed only when that particular tweak changes. If two parameters are
   * provided and the first parameter is an Array of strings, the callback will
   * be executed any time one of those tweaks changes.
   *
   * @method watch
   * @param {String}          Optional: Name of the tweak
   * @param {Array}           Optional: Array with multiple tweak names
   * @param {Function}        Callback to call when watcher is triggered
   */
  watch: function watch() {
    var _arguments = arguments;


    if (!isAuthenticated) {
      return;
    }

    if (arguments.length === 0) {
      console.error('squarespace-core: ' + 'Tweak.watch must be called with at least one parameter');
      return;
    }

    if (arguments.length === 1) {
      // Only callback passed in, no tweak name string or tweaks array passed.
      // Run callback for all tweaks.
      if (typeof arguments[0] === 'function') {
        tweaksToWatch.all.callbacks.push(arguments[0]);
      }
      return;
    }

    if (typeof arguments[0] === 'string' && typeof arguments[1] === 'function') {
      // Specific tweak name passed in. Run callback when that tweak is changed.
      var tweakName = arguments[0];
      if (!tweaksToWatch[tweakName]) {
        tweaksToWatch[tweakName] = {
          callbacks: []
        };
      }
      tweaksToWatch[tweakName].callbacks.push(arguments[1]);
    } else if (arguments[0].constructor === Array && typeof arguments[1] === 'function') {
      // Multiple tweak names passed in as array. Run callback when any one of
      // those tweaks are changed.
      arguments[0].forEach(function (tweakName) {
        if (!tweaksToWatch[tweakName]) {
          tweaksToWatch[tweakName] = {
            callbacks: []
          };
        }
        tweaksToWatch[tweakName].callbacks.push(_arguments[1]);
      });
    }
  }
};

if (isAuthenticated && window.Y && window.Y.Global) {
  // If Y.Global is present on the page, set up the tweak event listener.
  window.Y.Global.on('tweak:change', function (e) {
    var tweakName = e.getName();
    var callbackSignature = {
      name: tweakName,
      value: e.config && e.config.value || e.value
    };

    if (tweaksToWatch[tweakName]) {
      tweaksToWatch[tweakName].callbacks.forEach(function (callback) {
        try {
          callback(callbackSignature);
        } catch (err) {
          console.error(err);
        }
      });
    }

    if (tweaksToWatch.all.callbacks.length > 0) {
      tweaksToWatch.all.callbacks.forEach(function (callback) {
        try {
          callback(callbackSignature);
        } catch (err) {
          console.error(err);
        }
      });
    }
  });
}

/**
 * @exports {Object} Tweak
 */
exports.default = Tweak;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/@squarespace/core/UserAccounts.js":
/*!********************************************************!*\
  !*** ./node_modules/@squarespace/core/UserAccounts.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * @license
 * Copyright 2016 Squarespace, INC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var warningMessage = 'UserAccounts API not available';
var ua = window.UserAccountApi;
var warn = function warn() {
  console.warn(warningMessage);
};

var isUserAuthenticated = ua ? ua.isUserAuthenticated : warn;
var openAccountScreen = ua ? ua.openAccountScreen : warn;

exports.default = { isUserAuthenticated: isUserAuthenticated, openAccountScreen: openAccountScreen };
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/@squarespace/core/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@squarespace/core/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ImageLoader = __webpack_require__(/*! ./ImageLoader */ "./node_modules/@squarespace/core/ImageLoader.js");

var _ImageLoader2 = _interopRequireDefault(_ImageLoader);

var _Lifecycle = __webpack_require__(/*! ./Lifecycle */ "./node_modules/@squarespace/core/Lifecycle.js");

var _Lifecycle2 = _interopRequireDefault(_Lifecycle);

var _Tweak = __webpack_require__(/*! ./Tweak */ "./node_modules/@squarespace/core/Tweak.js");

var _Tweak2 = _interopRequireDefault(_Tweak);

var _UserAccounts = __webpack_require__(/*! ./UserAccounts */ "./node_modules/@squarespace/core/UserAccounts.js");

var _UserAccounts2 = _interopRequireDefault(_UserAccounts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The public JavaScript API for Squarespace template developers.
 * @namespace SQS
 */
/**
 * @license
 * Copyright 2016 Squarespace, INC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var SQS = {
  ImageLoader: _ImageLoader2.default,
  Lifecycle: _Lifecycle2.default,
  Tweak: _Tweak2.default,
  UserAccounts: _UserAccounts2.default
};

exports.default = SQS;
module.exports = exports['default'];

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Use the sqs-core module to access core Squarespace
// functionality, like Lifecycle and ImageLoader. For
// full documentation, go to:
//
// http://github.com/squarespace/squarespace-core
__webpack_require__(/*! ./styles/site.less */ "./src/styles/site.less");

var core = __webpack_require__(/*! @squarespace/core */ "./node_modules/@squarespace/core/index.js");

window.addEventListener('DOMContentLoaded', function () {
  var images = document.querySelectorAll('img[data-src]');

  for (var i = 0; i < images.length; i++) {
    core.ImageLoader.load(images[i], {
      load: true
    });
  }
});

/***/ }),

/***/ "./src/styles/site.less":
/*!******************************!*\
  !*** ./src/styles/site.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

/******/ });
//# sourceMappingURL=app.js.map