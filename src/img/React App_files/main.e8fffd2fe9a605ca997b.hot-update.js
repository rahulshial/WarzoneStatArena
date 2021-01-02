webpackHotUpdate("main",{

/***/ "./src/roulette/Roulette.js":
/*!**********************************!*\
  !*** ./src/roulette/Roulette.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Roulette; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkbox */ "./src/roulette/checkbox.js");
/* harmony import */ var _hooks_useApplicationData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useApplicationData */ "./src/hooks/useApplicationData.js");
/* harmony import */ var _rouletteButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rouletteButton */ "./src/roulette/rouletteButton.js");
/* harmony import */ var _img_trainstation_weapon_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/trainstation-weapon.jpeg */ "./src/img/trainstation-weapon.jpeg");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/torabi97/Desktop/coding_tools/final_project/statsite/src/roulette/Roulette.js",
    _s = __webpack_require__.$Refresh$.signature();

 //import "../checkbox.css";





function Roulette(props) {
  _s();

  const {
    state
  } = Object(_hooks_useApplicationData__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const [primaryChecked, setPrimaryChecked] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [secondaryChecked, setSecondaryChecked] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [dropzoneChecked, setDropzoneChecked] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [rulesChecked, setRulesChecked] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [selected, setSelected] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    rule: [],
    primary: [],
    secondary: [],
    dropzone: [],
    primaryImage: [],
    secondaryImage: [],
    dropzoneImage: []
  });

  function generateRoulette(props) {
    //data
    let weapon = state.guns;
    let rules = state.rules;
    let dropzone = state.dropzone; //Primary Weapon

    let allowableChars1 = Math.floor(Math.random() * weapon.length);
    const primary = weapon[allowableChars1];

    if (primaryChecked) {
      setSelected(prev => ({ ...prev,
        primary: primary.weapon
      }));
    } //Secondary Weapon


    let allowableChars2 = Math.floor(Math.random() * weapon.length);
    let secondary;

    if (allowableChars1 !== allowableChars2) {
      secondary = weapon[allowableChars2];
    } else {
      secondary = "any secondary Gun";
    }

    ;
    console.log(secondary.image);

    if (secondaryChecked) {
      setSelected(prev => ({ ...prev,
        secondary: secondary.weapon,
        secondaryImage: secondary.image
      }));
    } //dropZones


    let allowableChars = Math.floor(Math.random() * dropzone.length);
    const dropZones = dropzone[allowableChars];

    if (dropzoneChecked) {
      setSelected(prev => ({ ...prev,
        dropzone: dropZones.dropzone
      }));
    } //rules


    let allowableChars3 = Math.floor(Math.random() * rules.length);
    const rule = rules[allowableChars3];

    if (rulesChecked) {
      setSelected(prev => ({ ...prev,
        rule: rule.rules
      }));
    }
  }

  console.log(selected.secondaryImage);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "Roulette",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "checkbox",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
          checked: primaryChecked,
          onChange: () => setPrimaryChecked(!primaryChecked),
          label: "Primary Gun"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
          checked: secondaryChecked,
          onChange: () => setSecondaryChecked(!secondaryChecked),
          label: "Secondary Gun"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: "size",
          checked: dropzoneChecked,
          onChange: () => setDropzoneChecked(!dropzoneChecked),
          label: "dropzone"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 9
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_checkbox__WEBPACK_IMPORTED_MODULE_2__["default"], {
          checked: rulesChecked,
          onChange: () => setRulesChecked(!rulesChecked),
          label: "Rule"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_rouletteButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
          className: "button",
          onClick: generateRoulette
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: ["Primary Gun: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: selected.primary
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 28
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: ["Secondary Gun: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: selected.secondary
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 30
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: ["Drop Zone: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: selected.dropzone
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 26
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
          src: _img_trainstation_weapon_jpeg__WEBPACK_IMPORTED_MODULE_5__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 13
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: ["Rule: ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
          children: selected.rule
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 96,
    columnNumber: 5
  }, this);
}

_s(Roulette, "k+8xPWf3G9GfCgJF5HgUSvdtfGQ=", false, function () {
  return [_hooks_useApplicationData__WEBPACK_IMPORTED_MODULE_3__["default"]];
});

_c = Roulette;

var _c;

__webpack_require__.$Refresh$.register(_c, "Roulette");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.e8fffd2fe9a605ca997b.hot-update.js.map