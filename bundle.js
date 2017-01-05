webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(32);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _loadApp = __webpack_require__(178);

	var _loadApp2 = _interopRequireDefault(_loadApp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// import styles


	/**
	 * app entry point
	 */
	_reactDom2.default.render(_react2.default.createElement(_loadApp2.default, null), document.getElementById("App"));

/***/ },

/***/ 178:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _desc, _value, _class2, _descriptor, _descriptor2, _descriptor3;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _mobxReact = __webpack_require__(179);

	var _mobx = __webpack_require__(180);

	var _TextField = __webpack_require__(181);

	var _TextField2 = _interopRequireDefault(_TextField);

	var _getMuiTheme = __webpack_require__(288);

	var _getMuiTheme2 = _interopRequireDefault(_getMuiTheme);

	var _MuiThemeProvider = __webpack_require__(349);

	var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

	var _reactTapEventPlugin = __webpack_require__(350);

	var _reactTapEventPlugin2 = _interopRequireDefault(_reactTapEventPlugin);

	var _RaisedButton = __webpack_require__(356);

	var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

	var _loadApp = __webpack_require__(383);

	var _loadApp2 = _interopRequireDefault(_loadApp);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _initDefineProp(target, property, descriptor, context) {
	    if (!descriptor) return;
	    Object.defineProperty(target, property, {
	        enumerable: descriptor.enumerable,
	        configurable: descriptor.configurable,
	        writable: descriptor.writable,
	        value: descriptor.initializer ? descriptor.initializer.call(context) : void 0
	    });
	}

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	    var desc = {};
	    Object['ke' + 'ys'](descriptor).forEach(function (key) {
	        desc[key] = descriptor[key];
	    });
	    desc.enumerable = !!desc.enumerable;
	    desc.configurable = !!desc.configurable;

	    if ('value' in desc || desc.initializer) {
	        desc.writable = true;
	    }

	    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	        return decorator(target, property, desc) || desc;
	    }, desc);

	    if (context && desc.initializer !== void 0) {
	        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	        desc.initializer = undefined;
	    }

	    if (desc.initializer === void 0) {
	        Object['define' + 'Property'](target, property, desc);
	        desc = null;
	    }

	    return desc;
	}

	function _initializerWarningHelper(descriptor, context) {
	    throw new Error('Decorating class property failed. Please ensure that transform-class-properties is enabled.');
	}

	var MUICustomStyles = {
	    textField: {
	        errorStyle: {
	            position: "absolute",
	            bottom: "-8px"
	        }
	    }
	};

	var App = (0, _mobxReact.observer)(_class = (_class2 = function (_React$Component) {
	    _inherits(App, _React$Component);

	    function App() {
	        var _ref;

	        var _temp, _this, _ret;

	        _classCallCheck(this, App);

	        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	            args[_key] = arguments[_key];
	        }

	        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _initDefineProp(_this, "mobxState", _descriptor, _this), _initDefineProp(_this, "handleChange", _descriptor2, _this), _initDefineProp(_this, "handleClick", _descriptor3, _this), _this.flatAlgorithm = function (obj, ret) {
	            if (Array.isArray(obj)) {
	                for (var key in obj) {
	                    _this.flatAlgorithm(obj[key], ret);
	                }
	            } else {
	                ret.push(obj);
	            }

	            return ret;
	        }, _temp), _possibleConstructorReturn(_this, _ret);
	    }

	    _createClass(App, [{
	        key: "componentWillMount",
	        value: function componentWillMount() {
	            (0, _reactTapEventPlugin2.default)();
	        }
	    }, {
	        key: "render",
	        value: function render() {
	            return _react2.default.createElement(
	                "div",
	                { className: _loadApp2.default.container },
	                _react2.default.createElement(
	                    _MuiThemeProvider2.default,
	                    { muiTheme: (0, _getMuiTheme2.default)() },
	                    _react2.default.createElement(
	                        "div",
	                        null,
	                        _react2.default.createElement(
	                            "h1",
	                            null,
	                            "Nested To Flat"
	                        ),
	                        _react2.default.createElement(_TextField2.default, {
	                            floatingLabelText: "Insert array e.g. [ [ 1, 2, [ 3 ] ], 4 ]",
	                            value: this.mobxState.textFieldValue,
	                            onChange: this.handleChange,
	                            errorText: this.mobxState.error,
	                            errorStyle: MUICustomStyles.textField.errorStyle,
	                            ref: "textField"
	                        }),
	                        _react2.default.createElement(_RaisedButton2.default, { ref: "button", className: _loadApp2.default.button, label: "Flat array", primary: true,
	                            onTouchTap: this.handleClick }),
	                        _react2.default.createElement(
	                            "h3",
	                            null,
	                            "Result: "
	                        ),
	                        _react2.default.createElement(
	                            "p",
	                            null,
	                            "Entry: ",
	                            _react2.default.createElement(
	                                "b",
	                                { ref: "entry" },
	                                JSON.stringify(this.mobxState.nestedArray)
	                            )
	                        ),
	                        _react2.default.createElement(
	                            "p",
	                            null,
	                            "Result: ",
	                            _react2.default.createElement(
	                                "b",
	                                { ref: "result" },
	                                JSON.stringify(this.mobxState.flatArray)
	                            )
	                        )
	                    )
	                )
	            );
	        }
	    }]);

	    return App;
	}(_react2.default.Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mobxState", [_mobx.observable], {
	    enumerable: true,
	    initializer: function initializer() {
	        return {
	            textFieldValue: "",
	            nestedArray: [],
	            flatArray: [],
	            error: ""
	        };
	    }
	}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "handleChange", [_mobx.action], {
	    enumerable: true,
	    initializer: function initializer() {
	        var _this2 = this;

	        return function (event) {
	            _this2.mobxState.textFieldValue = event.target.value;
	        };
	    }
	}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "handleClick", [_mobx.action], {
	    enumerable: true,
	    initializer: function initializer() {
	        var _this3 = this;

	        return function () {
	            try {
	                var nestedArray = JSON.parse(_this3.mobxState.textFieldValue);
	                if (Array.isArray(nestedArray)) {
	                    _this3.mobxState.flatArray = _this3.flatAlgorithm(nestedArray, []);
	                    _this3.mobxState.nestedArray = nestedArray;
	                    _this3.mobxState.error = "";
	                } else {
	                    _this3.mobxState.error = "The text you entered is not an array";
	                }
	            } catch (error) {
	                _this3.mobxState.error = "Invalid format";
	            }
	        };
	    }
	})), _class2)) || _class;

	exports.default = App;
	module.exports = exports["default"];

/***/ },

/***/ 383:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(384);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(386)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./loadApp.scss", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!./loadApp.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 384:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(385)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto:400,400italic,500,500italic,700,700italic,300,300italic|Roboto+Condensed:400italic,700italic,400,700);", ""]);

	// module
	exports.push([module.id, "body{\n    font-family: 'Roboto', sans-serif;\n}\n\n.loadApp__container___3JRIP{\n    padding: 0 20px;\n}\n\n.loadApp__button___18fr4{\n    margin-left: 20px;\n}", ""]);

	// exports
	exports.locals = {
		"container": "loadApp__container___3JRIP",
		"button": "loadApp__button___18fr4"
	};

/***/ },

/***/ 385:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 386:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }

});