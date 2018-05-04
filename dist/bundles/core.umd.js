(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ngx-resource-core"] = factory();
	else
		root["ngx-resource-core"] = factory();
})(this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ResourceRequestBodyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ResourceResponseBodyType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ResourceRequestMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceQueryMappingMethod; });
var ResourceRequestBodyType;
(function (ResourceRequestBodyType) {
    ResourceRequestBodyType[ResourceRequestBodyType["NONE"] = 0] = "NONE";
    ResourceRequestBodyType[ResourceRequestBodyType["JSON"] = 1] = "JSON";
    ResourceRequestBodyType[ResourceRequestBodyType["FORM"] = 2] = "FORM";
    ResourceRequestBodyType[ResourceRequestBodyType["FORM_DATA"] = 3] = "FORM_DATA";
    ResourceRequestBodyType[ResourceRequestBodyType["TEXT"] = 4] = "TEXT";
    ResourceRequestBodyType[ResourceRequestBodyType["BLOB"] = 5] = "BLOB";
    ResourceRequestBodyType[ResourceRequestBodyType["ARRAY_BUFFER"] = 6] = "ARRAY_BUFFER";
})(ResourceRequestBodyType || (ResourceRequestBodyType = {}));
var ResourceResponseBodyType;
(function (ResourceResponseBodyType) {
    ResourceResponseBodyType[ResourceResponseBodyType["Text"] = 1] = "Text";
    ResourceResponseBodyType[ResourceResponseBodyType["Json"] = 2] = "Json";
    ResourceResponseBodyType[ResourceResponseBodyType["ArrayBuffer"] = 3] = "ArrayBuffer";
    ResourceResponseBodyType[ResourceResponseBodyType["Blob"] = 4] = "Blob";
})(ResourceResponseBodyType || (ResourceResponseBodyType = {}));
var ResourceRequestMethod;
(function (ResourceRequestMethod) {
    ResourceRequestMethod[ResourceRequestMethod["Get"] = 1] = "Get";
    ResourceRequestMethod[ResourceRequestMethod["Post"] = 2] = "Post";
    ResourceRequestMethod[ResourceRequestMethod["Put"] = 3] = "Put";
    ResourceRequestMethod[ResourceRequestMethod["Delete"] = 4] = "Delete";
    ResourceRequestMethod[ResourceRequestMethod["Options"] = 5] = "Options";
    ResourceRequestMethod[ResourceRequestMethod["Head"] = 6] = "Head";
    ResourceRequestMethod[ResourceRequestMethod["Patch"] = 7] = "Patch";
})(ResourceRequestMethod || (ResourceRequestMethod = {}));
var ResourceQueryMappingMethod;
(function (ResourceQueryMappingMethod) {
    ResourceQueryMappingMethod[ResourceQueryMappingMethod["Plain"] = 1] = "Plain";
    ResourceQueryMappingMethod[ResourceQueryMappingMethod["Bracket"] = 2] = "Bracket";
    ResourceQueryMappingMethod[ResourceQueryMappingMethod["JQueryParamsBracket"] = 3] = "JQueryParamsBracket";
})(ResourceQueryMappingMethod || (ResourceQueryMappingMethod = {}));


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceHelper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Declarations__ = __webpack_require__(0);

var ResourceHelper = /** @class */ (function () {
    function ResourceHelper() {
    }
    ResourceHelper.isRunningInBrowser = function () {
        if (this.isBrowser !== null) {
            return this.isBrowser;
        }
        try {
            this.isBrowser = !!window;
        }
        catch (e) {
            this.isBrowser = false;
        }
        return this.isBrowser;
    };
    ResourceHelper.getRealTypeOf = function (data) {
        if (!data) {
            return __WEBPACK_IMPORTED_MODULE_0__Declarations__["b" /* ResourceRequestBodyType */].NONE;
        }
        if (this.isRunningInBrowser()) {
            if (data instanceof FormData) {
                return __WEBPACK_IMPORTED_MODULE_0__Declarations__["b" /* ResourceRequestBodyType */].FORM_DATA;
            }
            if (data instanceof Blob) {
                return __WEBPACK_IMPORTED_MODULE_0__Declarations__["b" /* ResourceRequestBodyType */].BLOB;
            }
        }
        if (data instanceof ArrayBuffer) {
            return __WEBPACK_IMPORTED_MODULE_0__Declarations__["b" /* ResourceRequestBodyType */].ARRAY_BUFFER;
        }
        if (['string', 'number'].indexOf(typeof data) > -1) {
            return __WEBPACK_IMPORTED_MODULE_0__Declarations__["b" /* ResourceRequestBodyType */].TEXT;
        }
        return __WEBPACK_IMPORTED_MODULE_0__Declarations__["b" /* ResourceRequestBodyType */].JSON;
    };
    ResourceHelper.defaults = function (dst, src) {
        if (!dst) {
            dst = {};
        }
        Object.keys(src)
            .forEach(function (key) {
            if (dst[key] === undefined) {
                dst[key] = src[key];
            }
        });
        return dst;
    };
    ResourceHelper.isNullOrUndefined = function (value) {
        return value === null || value === undefined;
    };
    ResourceHelper.cleanData = function (obj) {
        if (Array.isArray(obj)) {
            return this.cleanDataArray(obj);
        }
        else {
            return this.cleanDataObject(obj);
        }
    };
    ResourceHelper.cleanDataArray = function (obj) {
        for (var propName in obj) {
            if (typeof obj[propName] === 'function' || this.cleanDataFields.indexOf(propName) > -1) {
                delete obj[propName];
            }
        }
        return obj;
    };
    ResourceHelper.cleanDataObject = function (obj) {
        var cleanedObj = {};
        for (var propName in obj) {
            if (typeof obj[propName] !== 'function' && this.cleanDataFields.indexOf(propName) === -1) {
                cleanedObj[propName] = obj[propName];
            }
        }
        return cleanedObj;
    };
    ResourceHelper.cleanDataFields = [
        '$resolved',
        '$promise',
        '$abort',
        '$resource'
    ];
    ResourceHelper.isBrowser = null;
    return ResourceHelper;
}());



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Resource; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Declarations__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ResourceHelper__ = __webpack_require__(1);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};



var Resource = /** @class */ (function () {
    function Resource(requestHandler) {
        this.requestHandler = requestHandler;
        this.$url = null;
        this.$pathPrefix = null;
        this.$path = null;
        this.$headers = null;
        this.$body = null;
        this.$params = null;
        this.$query = null;
        this.constructor.instance = this;
    }
    /**
     * Used to get url
     *
     * @param {IResourceAction} actionOptions
     * @return {string | Promise<string>}
     */
    Resource.prototype.$getUrl = function (actionOptions) {
        if (actionOptions === void 0) { actionOptions = {}; }
        return this.$url || actionOptions.url || __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].url || '';
    };
    Resource.prototype.$setUrl = function (url) {
        this.$url = url;
    };
    /**
     * Used to get path prefix
     *
     * @param {IResourceAction} actionOptions
     * @return {string | Promise<string>}
     */
    Resource.prototype.$getPathPrefix = function (actionOptions) {
        if (actionOptions === void 0) { actionOptions = {}; }
        return this.$pathPrefix || actionOptions.pathPrefix || __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].pathPrefix || '';
    };
    Resource.prototype.$setPathPrefix = function (path) {
        this.$pathPrefix = path;
    };
    /**
     * Used to get path
     *
     * @param {IResourceAction} actionOptions
     * @return {string | Promise<string>}
     */
    Resource.prototype.$getPath = function (actionOptions) {
        if (actionOptions === void 0) { actionOptions = {}; }
        return this.$path || actionOptions.path || __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].path || '';
    };
    Resource.prototype.$setPath = function (path) {
        this.$path = path;
    };
    /**
     * Get headers.
     *
     * @param {IResourceAction} actionOptions
     * @return {any | Promise<any>}
     */
    Resource.prototype.$getHeaders = function (actionOptions) {
        if (actionOptions === void 0) { actionOptions = {}; }
        return this.$headers || actionOptions.headers || __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].headers || {};
    };
    Resource.prototype.$setHeaders = function (headers) {
        this.$headers = headers;
    };
    /**
     * Get body
     *
     * @param {IResourceAction} actionOptions
     * @return {any | Promise<any>}
     */
    Resource.prototype.$getBody = function (actionOptions) {
        if (actionOptions === void 0) { actionOptions = {}; }
        return this.$body || actionOptions.body || __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].body || {};
    };
    Resource.prototype.$setBody = function (body) {
        this.$body = body;
    };
    /**
     * Get path params
     *
     * @param {IResourceAction} actionOptions
     * @return {any | Promise<any>}
     */
    Resource.prototype.$getParams = function (actionOptions) {
        if (actionOptions === void 0) { actionOptions = {}; }
        return this.$params || actionOptions.params || __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].params || {};
    };
    Resource.prototype.$setParams = function (params) {
        this.$params = params;
    };
    /**
     * Get query params
     *
     * @param {IResourceAction} actionOptions
     * @return {any | Promise<any>}
     */
    Resource.prototype.$getQuery = function (actionOptions) {
        if (actionOptions === void 0) { actionOptions = {}; }
        return this.$query || actionOptions.query || __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].query || {};
    };
    Resource.prototype.$setQuery = function (query) {
        this.$query = query;
    };
    /**
     * Used to filter received data.
     * Is applied on each element of array or object
     *
     * @param data
     * @param {IResourceActionInner} options
     * @return {boolean}
     */
    Resource.prototype.$filter = function (data, options) {
        if (options === void 0) { options = {}; }
        return true;
    };
    /**
     * Used to map received data
     * Is applied on each element of array or object
     *
     * @param data
     * @param {IResourceActionInner} options
     * @return {any}
     */
    Resource.prototype.$map = function (data, options) {
        if (options === void 0) { options = {}; }
        return data;
    };
    /**
     * Used to create result object
     * Is applied on each element of array or object
     *
     * @param data
     * @param {IResourceActionInner} options
     * @return {any}
     */
    Resource.prototype.$resultFactory = function (data, options) {
        if (options === void 0) { options = {}; }
        return data || {};
    };
    Resource.prototype.$restAction = function (options) {
        var _this = this;
        this.$_setResourceActionInnerDefaults(options);
        this.$_setResourceActionOptionDefaults(options);
        var actionOptions = options.actionOptions;
        if (actionOptions.mutateBody || options.isModel) {
            options.returnData = options.actionAttributes.body;
        }
        if (!actionOptions.asPromise) {
            options.returnData = actionOptions.expectJsonArray ? [] : actionOptions.resultFactory.call(this, null, options);
        }
        if (this.$_canSetInternalData(options)) {
            Object.defineProperty(options.returnData, '$resolved', {
                enumerable: false,
                configurable: true,
                writable: true,
                value: false
            });
            Object.defineProperty(options.returnData, '$abort', {
                enumerable: false,
                configurable: true,
                writable: true,
                value: function () {
                    // does nothing for now
                }
            });
        }
        options.mainPromise = this.$_setResolvedOptions(options)
            .then(function (o) { return _this.$_createRequestOptions(o); })
            .then(function (o) {
            var handlerResp = _this.requestHandler.handle(o.requestOptions);
            if (o.returnData && _this.$_canSetInternalData(options)) {
                o.returnData.$abort = handlerResp.abort;
            }
            return handlerResp.promise;
        })
            .then(function (resp) { return _this.$handleSuccessResponse(options, resp); })
            .catch(function (resp) { return _this.$handleErrorResponse(options, resp); });
        if (this.$_canSetInternalData(options)) {
            Object.defineProperty(options.returnData, '$promise', {
                enumerable: false,
                configurable: true,
                writable: true,
                value: options.mainPromise
            });
        }
        return actionOptions.asPromise ? options.mainPromise : options.returnData;
    };
    Resource.prototype.$handleSuccessResponse = function (options, resp) {
        var _this = this;
        var body = resp.body;
        var actionOptions = options.actionOptions;
        if (Array.isArray(body)) {
            body = body
                .filter(function (item) { return actionOptions.filter.call(_this, item, options); })
                .map(function (item) {
                item = actionOptions.map.call(_this, item, options);
                return actionOptions.resultFactory.call(_this, item, options);
            });
            if (options.returnData) {
                Array.prototype.push.apply(options.returnData, body);
                body = options.returnData;
            }
        }
        else {
            if (actionOptions.filter.call(this, body, options)) {
                body = actionOptions.map.call(this, body, options);
                var newBody = options.returnData;
                if (newBody) {
                    if (typeof newBody.$setData === 'function') {
                        newBody.$setData(body);
                    }
                    else {
                        Object.assign(newBody, body);
                    }
                }
                else {
                    newBody = actionOptions.resultFactory.call(this, body, options);
                }
                body = newBody;
                // If it's model
                if (body.$resource) {
                    body.$resolved = true;
                    body.$promise = options.mainPromise;
                    body.$abort = function () { return true; };
                }
            }
            else {
                body = null;
            }
        }
        if (this.$_canSetInternalData(options)) {
            options.returnData.$resolved = true;
        }
        if (options.actionAttributes.onSuccess) {
            options.actionAttributes.onSuccess(body);
        }
        return body;
    };
    Resource.prototype.$handleErrorResponse = function (options, resp) {
        if (options.returnData && this.$_canSetInternalData(options)) {
            options.returnData.$resolved = true;
        }
        if (options.actionAttributes.onError) {
            options.actionAttributes.onError(resp);
        }
        throw resp;
    };
    Resource.prototype.$setRequestOptionsUrl = function (options) {
        var ro = options.requestOptions;
        if (!ro.url) {
            ro.url =
                options.resolvedOptions.url +
                    options.resolvedOptions.pathPrefix +
                    options.resolvedOptions.path;
        }
        options.usedInPath = {};
        var params = __WEBPACK_IMPORTED_MODULE_2__ResourceHelper__["a" /* ResourceHelper */].defaults(options.actionAttributes.params, options.resolvedOptions.params);
        var pathParams = ro.url.match(/{([^}]*)}/g) || [];
        for (var i = 0; i < pathParams.length; i++) {
            var pathParam = pathParams[i];
            var pathKey = pathParam.substr(1, pathParam.length - 2);
            var isMandatory = pathKey[0] === '!';
            if (isMandatory) {
                pathKey = pathKey.substr(1);
            }
            var onlyPathParam = pathKey[0] === ':';
            if (onlyPathParam) {
                pathKey = pathKey.substr(1);
            }
            if (options.actionAttributes.query && options.actionAttributes.query === options.actionAttributes.params) {
                options.usedInPath[pathKey] = true;
            }
            var value = params[pathKey];
            if (onlyPathParam) {
                delete params[pathKey];
            }
            if (__WEBPACK_IMPORTED_MODULE_2__ResourceHelper__["a" /* ResourceHelper */].isNullOrUndefined(value)) {
                if (isMandatory) {
                    var consoleMsg = "Mandatory " + pathParam + " path parameter is missing";
                    console.warn(consoleMsg);
                    // shell.mainObservable = Observable.create((observer: any) => {
                    //   observer.error(new Error(consoleMsg));
                    // });
                    //
                    //
                    // this.$_releaseMainDeferredSubscriber(shell);
                    throw new Error(consoleMsg);
                }
                ro.url = ro.url.substr(0, ro.url.indexOf(pathParam));
                break;
            }
            // Replacing in the url
            ro.url = ro.url.replace(pathParam, value);
        }
        // Removing double slashed from final url
        ro.url = ro.url.replace(/\/\/+/g, '/');
        if (ro.url.startsWith('http')) {
            ro.url = ro.url.replace(':/', '://');
        }
        // Remove trailing slash
        if (options.actionOptions.removeTrailingSlash) {
            while (ro.url[ro.url.length - 1] === '/') {
                ro.url = ro.url.substr(0, ro.url.length - 1);
            }
        }
    };
    Resource.prototype.$setRequestOptionsBody = function (options) {
        var body = options.actionAttributes.body;
        if (!body) {
            return;
        }
        var realBodyType = __WEBPACK_IMPORTED_MODULE_2__ResourceHelper__["a" /* ResourceHelper */].getRealTypeOf(body);
        var bodyOk = realBodyType === options.actionOptions.requestBodyType;
        if (!bodyOk) {
            if (realBodyType === __WEBPACK_IMPORTED_MODULE_0__Declarations__["b" /* ResourceRequestBodyType */].JSON) {
                switch (options.actionOptions.requestBodyType) {
                    case __WEBPACK_IMPORTED_MODULE_0__Declarations__["b" /* ResourceRequestBodyType */].FORM_DATA:
                        var newBody_1 = new FormData();
                        Object.keys(body).forEach(function (key) {
                            var value = body[key];
                            if (body.hasOwnProperty(key) && typeof value !== 'function') {
                                var fileName = void 0;
                                if (value instanceof File) {
                                    fileName = value.name;
                                }
                                newBody_1.append(key, value, fileName);
                            }
                        });
                        bodyOk = true;
                }
            }
        }
        if (!bodyOk) {
            throw new Error('Can not convert body');
        }
        // Add root node if needed
        if (options.actionOptions.rootNode) {
            var newBody = {};
            newBody[options.actionOptions.rootNode] = body;
            body = newBody;
        }
        if (typeof body === 'object' && Object.keys(body).length === 0 && !options.actionOptions.keepEmptyBody) {
            return;
        }
        options.requestOptions.body = body;
    };
    Resource.prototype.$setRequestOptionsQuery = function (options) {
        var _this = this;
        var oq = options.actionAttributes.query || {};
        if (options.resolvedOptions.query) {
            oq = __assign({}, options.resolvedOptions.query, oq);
        }
        if (oq) {
            options.requestOptions.query = {};
            Object.keys(oq).forEach(function (key) {
                if (oq.hasOwnProperty(key) && !options.usedInPath[key]) {
                    _this.$appendQueryParams(options.requestOptions.query, key, oq[key], options.queryMappingMethod);
                }
            });
        }
        if (options.actionOptions.addTimestamp) {
            options.requestOptions.query = options.requestOptions.query || {};
            this.$appendQueryParams(options.requestOptions.query, options.actionOptions.addTimestamp, Date.now().toString(10), options.queryMappingMethod);
        }
    };
    Resource.prototype.$appendQueryParams = function (query, key, value, queryMappingMethod) {
        if (value instanceof Date) {
            query[key] = value.toISOString();
            return;
        }
        if (typeof value === 'object') {
            switch (queryMappingMethod) {
                case __WEBPACK_IMPORTED_MODULE_0__Declarations__["a" /* ResourceQueryMappingMethod */].Plain:
                    if (Array.isArray(value)) {
                        query[key] = value.join(',');
                        // for (const arrValue of value) {
                        //   query[key] = arrValue;
                        // }
                    }
                    else {
                        if (value && typeof value === 'object') {
                            /// Convert dates to ISO format string
                            if (value instanceof Date) {
                                value = value.toISOString();
                            }
                            else {
                                value = JSON.stringify(value);
                            }
                        }
                        query[key] = value;
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__Declarations__["a" /* ResourceQueryMappingMethod */].Bracket:
                    /// Convert object and arrays to query params
                    for (var k in value) {
                        if (value.hasOwnProperty(k)) {
                            this.$appendQueryParams(query, key + "[" + k + "]", value[k], queryMappingMethod);
                        }
                    }
                    break;
                case __WEBPACK_IMPORTED_MODULE_0__Declarations__["a" /* ResourceQueryMappingMethod */].JQueryParamsBracket:
                    /// Convert object and arrays to query params according to $.params
                    for (var k in value) {
                        if (value.hasOwnProperty(k)) {
                            var path = key + "[" + k + "]";
                            if (Array.isArray(value) && typeof value[k] !== 'object') {
                                path = key + "[]";
                            }
                            this.$appendQueryParams(query, path, value[k], queryMappingMethod);
                        }
                    }
            }
            return;
        }
        query[key] = value;
    };
    Resource.prototype.$_setResourceActionInnerDefaults = function (options) {
        var actionOptions = options.actionOptions;
        // Setting default request method
        if (!actionOptions.method) {
            actionOptions.method = __WEBPACK_IMPORTED_MODULE_0__Declarations__["c" /* ResourceRequestMethod */].Get;
        }
        var actionAttributes = options.actionAttributes;
        if (actionAttributes.body) {
            // Setting default request content type
            if (!actionOptions.requestBodyType) {
                actionOptions.requestBodyType = __WEBPACK_IMPORTED_MODULE_2__ResourceHelper__["a" /* ResourceHelper */].getRealTypeOf(actionAttributes.body);
            }
            // Setting params and query if needed
            if (actionOptions.requestBodyType === __WEBPACK_IMPORTED_MODULE_0__Declarations__["b" /* ResourceRequestBodyType */].JSON &&
                typeof actionAttributes.body === 'object' && !Array.isArray(actionAttributes.body)) {
                if (!actionAttributes.params) {
                    actionAttributes.params = actionAttributes.body;
                }
                options.isModel = !!actionAttributes.body.$resource;
            }
        }
        actionAttributes.params = actionAttributes.params || {};
        if (!actionAttributes.query && actionOptions.method === __WEBPACK_IMPORTED_MODULE_0__Declarations__["c" /* ResourceRequestMethod */].Get) {
            actionAttributes.query = actionAttributes.params;
        }
        options.queryMappingMethod = actionOptions.queryMappingMethod || __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].queryMappingMethod;
    };
    Resource.prototype.$_setResourceActionOptionDefaults = function (options) {
        var actionOptions = options.actionOptions;
        if (__WEBPACK_IMPORTED_MODULE_2__ResourceHelper__["a" /* ResourceHelper */].isNullOrUndefined(actionOptions.filter)) {
            actionOptions.filter = this.$filter;
        }
        if (__WEBPACK_IMPORTED_MODULE_2__ResourceHelper__["a" /* ResourceHelper */].isNullOrUndefined(actionOptions.map)) {
            actionOptions.map = this.$map;
        }
        if (__WEBPACK_IMPORTED_MODULE_2__ResourceHelper__["a" /* ResourceHelper */].isNullOrUndefined(actionOptions.resultFactory)) {
            actionOptions.resultFactory = this.$resultFactory;
        }
        if (__WEBPACK_IMPORTED_MODULE_2__ResourceHelper__["a" /* ResourceHelper */].isNullOrUndefined(actionOptions.removeTrailingSlash)) {
            actionOptions.removeTrailingSlash = __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].removeTrailingSlash;
        }
        if (__WEBPACK_IMPORTED_MODULE_2__ResourceHelper__["a" /* ResourceHelper */].isNullOrUndefined(actionOptions.withCredentials)) {
            actionOptions.withCredentials = __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].withCredentials;
        }
        if (__WEBPACK_IMPORTED_MODULE_2__ResourceHelper__["a" /* ResourceHelper */].isNullOrUndefined(actionOptions.asPromise)) {
            actionOptions.asPromise = __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].asPromise;
        }
        if (__WEBPACK_IMPORTED_MODULE_2__ResourceHelper__["a" /* ResourceHelper */].isNullOrUndefined(actionOptions.responseBodyType)) {
            actionOptions.responseBodyType = __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].responseBodyType;
        }
        if (__WEBPACK_IMPORTED_MODULE_2__ResourceHelper__["a" /* ResourceHelper */].isNullOrUndefined(actionOptions.lean)) {
            actionOptions.lean = __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].lean;
            if (actionOptions.mutateBody && !actionOptions.asPromise && __WEBPACK_IMPORTED_MODULE_2__ResourceHelper__["a" /* ResourceHelper */].isNullOrUndefined(actionOptions.lean)) {
                actionOptions.lean = true;
            }
        }
        if (__WEBPACK_IMPORTED_MODULE_2__ResourceHelper__["a" /* ResourceHelper */].isNullOrUndefined(actionOptions.addTimestamp)) {
            actionOptions.addTimestamp = __WEBPACK_IMPORTED_MODULE_1__ResourceGlobalConfig__["a" /* ResourceGlobalConfig */].addTimestamp;
            if (actionOptions.addTimestamp && typeof actionOptions.addTimestamp !== 'string') {
                actionOptions.addTimestamp = 'ts';
            }
        }
    };
    Resource.prototype.$_setResolvedOptions = function (options) {
        return Promise.all([
            this.$getUrl(options.actionOptions),
            this.$getPathPrefix(options.actionOptions),
            this.$getPath(options.actionOptions),
            this.$getHeaders(options.actionOptions),
            this.$getBody(options.actionOptions),
            this.$getParams(options.actionOptions),
            this.$getQuery(options.actionOptions)
        ])
            .then(function (resolvedMain) {
            options.resolvedOptions = {};
            var r = options.resolvedOptions;
            r.url = resolvedMain[0], r.pathPrefix = resolvedMain[1], r.path = resolvedMain[2], r.headers = resolvedMain[3], r.body = resolvedMain[4], r.params = resolvedMain[5], r.query = resolvedMain[6];
            return options;
        });
    };
    Resource.prototype.$_createRequestOptions = function (options) {
        options.requestOptions = {};
        // Step 1 set main
        options.requestOptions.method = options.actionOptions.method;
        options.requestOptions.headers = options.resolvedOptions.headers;
        options.requestOptions.withCredentials = options.actionOptions.withCredentials;
        options.requestOptions.responseBodyType = options.actionOptions.responseBodyType;
        options.requestOptions.requestBodyType = options.actionOptions.requestBodyType;
        // Step 2 create url
        this.$setRequestOptionsUrl(options);
        // Step 3 create body
        this.$setRequestOptionsBody(options);
        // Step 4 set query params
        this.$setRequestOptionsQuery(options);
        return options;
    };
    Resource.prototype.$_canSetInternalData = function (options) {
        return options.returnData && (!options.actionOptions.lean || options.isModel);
    };
    return Resource;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceGlobalConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Declarations__ = __webpack_require__(0);

var ResourceGlobalConfig = /** @class */ (function () {
    function ResourceGlobalConfig() {
    }
    ResourceGlobalConfig.url = null;
    ResourceGlobalConfig.pathPrefix = null;
    ResourceGlobalConfig.path = null;
    ResourceGlobalConfig.headers = null;
    ResourceGlobalConfig.body = null;
    ResourceGlobalConfig.params = null;
    ResourceGlobalConfig.query = null;
    ResourceGlobalConfig.removeTrailingSlash = true;
    ResourceGlobalConfig.addTimestamp = false;
    ResourceGlobalConfig.withCredentials = false;
    ResourceGlobalConfig.lean = null;
    ResourceGlobalConfig.asPromise = true;
    // static toObservable: boolean = null;
    ResourceGlobalConfig.responseBodyType = __WEBPACK_IMPORTED_MODULE_0__Declarations__["d" /* ResourceResponseBodyType */].Json;
    ResourceGlobalConfig.queryMappingMethod = __WEBPACK_IMPORTED_MODULE_0__Declarations__["a" /* ResourceQueryMappingMethod */].Plain;
    return ResourceGlobalConfig;
}());



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ResourceAction;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Declarations__ = __webpack_require__(0);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

function ResourceAction(methodOptions) {
    methodOptions = methodOptions || {};
    if (methodOptions.method === undefined) {
        methodOptions.method = __WEBPACK_IMPORTED_MODULE_0__Declarations__["c" /* ResourceRequestMethod */].Get;
    }
    return function (target, propertyKey) {
        target[propertyKey] = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var callbacks = args.filter(function (arg) { return typeof arg === 'function'; });
            var data = args.filter(function (arg) { return typeof arg !== 'function'; });
            var body = data[0];
            var query = data[1];
            var params = data[2];
            var onSuccess = callbacks[0];
            var onError = callbacks[1];
            //tslint:disable-next-line:no-invalid-this
            var actionOptions = __assign({}, this.getResourceOptions(), methodOptions);
            //tslint:disable-next-line:no-invalid-this
            return this.$restAction({ actionAttributes: { body: body, query: query, params: params, onSuccess: onSuccess, onError: onError }, actionOptions: actionOptions });
        };
    };
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_Declarations__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceRequestBodyType", function() { return __WEBPACK_IMPORTED_MODULE_0__src_Declarations__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceResponseBodyType", function() { return __WEBPACK_IMPORTED_MODULE_0__src_Declarations__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceRequestMethod", function() { return __WEBPACK_IMPORTED_MODULE_0__src_Declarations__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceQueryMappingMethod", function() { return __WEBPACK_IMPORTED_MODULE_0__src_Declarations__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_Resource__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return __WEBPACK_IMPORTED_MODULE_1__src_Resource__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_ResourceAction__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceAction", function() { return __WEBPACK_IMPORTED_MODULE_2__src_ResourceAction__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_ResourceGlobalConfig__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceGlobalConfig", function() { return __WEBPACK_IMPORTED_MODULE_3__src_ResourceGlobalConfig__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_ResourceHandler__ = __webpack_require__(6);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceHandler", function() { return __WEBPACK_IMPORTED_MODULE_4__src_ResourceHandler__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_ResourceHelper__ = __webpack_require__(1);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceHelper", function() { return __WEBPACK_IMPORTED_MODULE_5__src_ResourceHelper__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_ResourceModel__ = __webpack_require__(7);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceModel", function() { return __WEBPACK_IMPORTED_MODULE_6__src_ResourceModel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_ResourceParams__ = __webpack_require__(8);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceParams", function() { return __WEBPACK_IMPORTED_MODULE_7__src_ResourceParams__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_ResourceCommon_ResourceCRUD__ = __webpack_require__(9);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResourceCRUD", function() { return __WEBPACK_IMPORTED_MODULE_8__src_ResourceCommon_ResourceCRUD__["a"]; });











/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceHandler; });
var ResourceHandler = /** @class */ (function () {
    function ResourceHandler() {
    }
    return ResourceHandler;
}());



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ResourceHelper__ = __webpack_require__(1);

var ResourceModel = /** @class */ (function () {
    function ResourceModel() {
        this.$resource = null;
        this.$resolved = true;
        this.$promise = null;
    }
    ResourceModel.get = function (id) {
        return this.getInstance()[this.methodGet]({ id: id });
    };
    ResourceModel.query = function (query) {
        return this.getInstance()[this.methodQuery](query);
    };
    ResourceModel.remove = function (id) {
        return this.getInstance()[this.methodRemove]({ id: id });
    };
    ResourceModel.getInstance = function () {
        if (!this.resourceInstance) {
            var model = (new this());
            if (!model.$resource) {
                throw new Error('Your resource is not defined');
            }
            if (!model.$resource.instance) {
                throw new Error('Your resource is not created (inject it somewhere)');
            }
            this.resourceInstance = (new this()).$resource.instance;
        }
        return this.resourceInstance;
    };
    ResourceModel.prototype.$setData = function (data) {
        Object.assign(this, data);
        return this;
    };
    ResourceModel.prototype.$save = function (query, params) {
        if (this.isNew()) {
            return this.$create(query, params);
        }
        else {
            return this.$update(query, params);
        }
    };
    ResourceModel.prototype.$create = function (query, params) {
        return this.$executeResourceMethod(this.constructor.methodCreate, query, params);
    };
    ResourceModel.prototype.$update = function (query, params) {
        return this.$executeResourceMethod(this.constructor.methodUpdate, query, params);
    };
    ResourceModel.prototype.$remove = function (query, params) {
        return this.$executeResourceMethod(this.constructor.methodRemove, query, params);
    };
    ResourceModel.prototype.toJSON = function () {
        return __WEBPACK_IMPORTED_MODULE_0__ResourceHelper__["a" /* ResourceHelper */].cleanData(this);
    };
    ResourceModel.prototype.isNew = function () {
        return !this['id'];
    };
    ResourceModel.prototype.$getResourceWithMethodCheck = function (methodName) {
        if (!this.$resource) {
            console.error("Your Resource is not defined");
            return null;
        }
        var restInstance = this.$resource.instance;
        if (!restInstance) {
            console.error("Your Resource is not defined or not created");
            return null;
        }
        if (!restInstance[methodName]) {
            console.error("Your Resource has no implemented " + methodName + " method.");
            return null;
        }
        return restInstance;
    };
    ResourceModel.prototype.$executeResourceMethod = function (methodName, query, params) {
        var resource = this.$getResourceWithMethodCheck(methodName);
        if (resource) {
            resource[methodName](this, query, params);
        }
        return this;
    };
    ResourceModel.resourceInstance = null;
    ResourceModel.methodQuery = 'query';
    ResourceModel.methodGet = 'get';
    ResourceModel.methodCreate = 'create';
    ResourceModel.methodUpdate = 'update';
    ResourceModel.methodRemove = 'remove';
    return ResourceModel;
}());



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ResourceParams;
function ResourceParams(params) {
    if (params === void 0) { params = {}; }
    return function (target) {
        target.prototype.getResourceOptions = function () {
            return params;
        };
    };
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourceCRUD; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Resource__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ResourceAction__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Declarations__ = __webpack_require__(0);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResourceCRUD = /** @class */ (function (_super) {
    __extends(ResourceCRUD, _super);
    function ResourceCRUD() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Alias to save
    ResourceCRUD.prototype.create = function (data, callback) {
        return this.save(data, callback);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ResourceAction__["a" /* ResourceAction */])(),
        __metadata("design:type", Function)
    ], ResourceCRUD.prototype, "query", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ResourceAction__["a" /* ResourceAction */])({
            path: '/{!id}'
        }),
        __metadata("design:type", Function)
    ], ResourceCRUD.prototype, "get", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ResourceAction__["a" /* ResourceAction */])({
            method: __WEBPACK_IMPORTED_MODULE_2__Declarations__["c" /* ResourceRequestMethod */].Post
        }),
        __metadata("design:type", Function)
    ], ResourceCRUD.prototype, "save", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ResourceAction__["a" /* ResourceAction */])({
            method: __WEBPACK_IMPORTED_MODULE_2__Declarations__["c" /* ResourceRequestMethod */].Put,
            path: '/{!id}'
        }),
        __metadata("design:type", Function)
    ], ResourceCRUD.prototype, "update", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ResourceAction__["a" /* ResourceAction */])({
            method: __WEBPACK_IMPORTED_MODULE_2__Declarations__["c" /* ResourceRequestMethod */].Delete,
            path: '/{!id}'
        }),
        __metadata("design:type", Function)
    ], ResourceCRUD.prototype, "remove", void 0);
    return ResourceCRUD;
}(__WEBPACK_IMPORTED_MODULE_0__Resource__["a" /* Resource */]));



/***/ })
/******/ ]);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1NWFhNzkyNGVlYTdlMGMzMzcyMyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVjbGFyYXRpb25zLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZUhlbHBlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Jlc291cmNlR2xvYmFsQ29uZmlnLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZUFjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VIYW5kbGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZU1vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9SZXNvdXJjZVBhcmFtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvUmVzb3VyY2VDb21tb24vUmVzb3VyY2VDUlVELnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztB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Ozs7O0FDWHNDO0FBQ1k7QUFDc0I7QUFHekU7SUFBa0UsZ0NBQVE7SUFBMUU7O0lBZ0NBLENBQUM7SUFMQyxnQkFBZ0I7SUFDaEIsNkJBQU0sR0FBTixVQUFPLElBQVcsRUFBRSxRQUE4QjtRQUNoRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQTNCRDtRQURDLCtFQUFjLEVBQUU7OytDQUN3QjtJQUt6QztRQUhDLCtFQUFjLENBQUM7WUFDZCxJQUFJLEVBQUUsUUFBUTtTQUNmLENBQUM7OzZDQUN1QztJQUt6QztRQUhDLCtFQUFjLENBQUM7WUFDZCxNQUFNLEVBQUUsNEVBQXFCLENBQUMsSUFBSTtTQUNuQyxDQUFDOzs4Q0FDa0M7SUFNcEM7UUFKQywrRUFBYyxDQUFDO1lBQ2QsTUFBTSxFQUFFLDRFQUFxQixDQUFDLEdBQUc7WUFDakMsSUFBSSxFQUFFLFFBQVE7U0FDZixDQUFDOztnREFDb0M7SUFNdEM7UUFKQywrRUFBYyxDQUFDO1lBQ2QsTUFBTSxFQUFFLDRFQUFxQixDQUFDLE1BQU07WUFDcEMsSUFBSSxFQUFFLFFBQVE7U0FDZixDQUFDOztnREFDd0M7SUFPNUMsbUJBQUM7Q0FBQSxDQWhDaUUsMkRBQVEsR0FnQ3pFO0FBaENpQyIsImZpbGUiOiJjb3JlLnVtZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm5neC1yZXNvdXJjZS1jb3JlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm5neC1yZXNvdXJjZS1jb3JlXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1NWFhNzkyNGVlYTdlMGMzMzcyMyIsIlxuZXhwb3J0IGludGVyZmFjZSBJUmVzb3VyY2VQYXJhbXNCYXNlIHtcbiAgdXJsPzogc3RyaW5nO1xuICBwYXRoUHJlZml4Pzogc3RyaW5nO1xuICBwYXRoPzogc3RyaW5nO1xuICBoZWFkZXJzPzogYW55O1xuICBib2R5PzogYW55O1xuICBwYXJhbXM/OiBhbnk7XG4gIHF1ZXJ5PzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSZXNvdXJjZVBhcmFtcyBleHRlbmRzIElSZXNvdXJjZVBhcmFtc0Jhc2Uge1xuICByb290Tm9kZT86IHN0cmluZztcbiAgcmVtb3ZlVHJhaWxpbmdTbGFzaD86IGJvb2xlYW47XG4gIGFkZFRpbWVzdGFtcD86IGJvb2xlYW4gfCBzdHJpbmc7XG4gIHdpdGhDcmVkZW50aWFscz86IGJvb2xlYW47XG4gIGxlYW4/OiBib29sZWFuO1xuICBtdXRhdGVCb2R5PzogYm9vbGVhbjtcbiAgYXNQcm9taXNlPzogYm9vbGVhbjtcbiAga2VlcEVtcHR5Qm9keT86IGJvb2xlYW47XG4gIHJlcXVlc3RCb2R5VHlwZT86IFJlc291cmNlUmVxdWVzdEJvZHlUeXBlO1xuICByZXNwb25zZUJvZHlUeXBlPzogUmVzb3VyY2VSZXNwb25zZUJvZHlUeXBlO1xuICBxdWVyeU1hcHBpbmdNZXRob2Q/OiBSZXNvdXJjZVF1ZXJ5TWFwcGluZ01ldGhvZDtcbiAgW3Byb3A6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUmVzb3VyY2VBY3Rpb24gZXh0ZW5kcyBJUmVzb3VyY2VQYXJhbXMge1xuICBtZXRob2Q/OiBSZXNvdXJjZVJlcXVlc3RNZXRob2Q7IC8vIGdldCBkZWZhdWx0XG4gIGV4cGVjdEpzb25BcnJheT86IGJvb2xlYW47XG4gIHJlc3VsdEZhY3Rvcnk/OiBJUmVzb3VyY2VSZXN1bHRGYWN0b3J5O1xuICBtYXA/OiBJUmVzb3VyY2VSZXNwb25zZU1hcDtcbiAgZmlsdGVyPzogSVJlc291cmNlUmVzcG9uc2VGaWx0ZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlc291cmNlUmVzcG9uc2VNYXAge1xuICAoaXRlbTogYW55LCBvcHRpb25zOiBJUmVzb3VyY2VBY3Rpb25Jbm5lcik6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUmVzb3VyY2VSZXNwb25zZUZpbHRlciB7XG4gIChpdGVtOiBhbnksIG9wdGlvbnM6IElSZXNvdXJjZUFjdGlvbklubmVyKTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUmVzb3VyY2VSZXN1bHRGYWN0b3J5IHtcbiAgKGl0ZW06IGFueSwgb3B0aW9uczogSVJlc291cmNlQWN0aW9uSW5uZXIpOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVJlc291cmNlQWN0aW9uQXR0cmlidXRlcyB7XG4gIGJvZHk6IGFueTtcbiAgcXVlcnk6IGFueTtcbiAgcGFyYW1zOiBhbnk7XG4gIG9uU3VjY2VzcyhkYXRhOiBhbnkpOiBhbnk7XG4gIG9uRXJyb3IoZGF0YTogYW55KTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSZXNvdXJjZUFjdGlvbklubmVyIHtcbiAgYWN0aW9uQXR0cmlidXRlcz86IElSZXNvdXJjZUFjdGlvbkF0dHJpYnV0ZXM7XG4gIGFjdGlvbk9wdGlvbnM/OiBJUmVzb3VyY2VBY3Rpb247XG4gIHJlc29sdmVkT3B0aW9ucz86IElSZXNvdXJjZVBhcmFtc0Jhc2U7XG5cbiAgcXVlcnlNYXBwaW5nTWV0aG9kPzogUmVzb3VyY2VRdWVyeU1hcHBpbmdNZXRob2Q7XG5cbiAgdXNlZEluUGF0aD86IHtba2V5OiBzdHJpbmddOiBib29sZWFufTtcbiAgbWFpblByb21pc2U/OiBQcm9taXNlPGFueT47XG4gIGlzTW9kZWw/OiBib29sZWFuO1xuXG4gIHJlcXVlc3RPcHRpb25zPzogSVJlc291cmNlUmVxdWVzdDtcblxuICByZXR1cm5EYXRhPzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSZXNvdXJjZVJlcXVlc3Qge1xuICBtZXRob2Q/OiBSZXNvdXJjZVJlcXVlc3RNZXRob2Q7XG4gIGhlYWRlcnM/OiBhbnk7XG4gIHVybD86IHN0cmluZztcbiAgd2l0aENyZWRlbnRpYWxzPzogYm9vbGVhbjtcbiAgYm9keT86IGFueTtcbiAgcXVlcnk/OiB7W3Byb3A6IHN0cmluZ106IHN0cmluZ307XG4gIHJlc3BvbnNlQm9keVR5cGU/OiBSZXNvdXJjZVJlc3BvbnNlQm9keVR5cGU7XG4gIHJlcXVlc3RCb2R5VHlwZT86IFJlc291cmNlUmVxdWVzdEJvZHlUeXBlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSZXNvdXJjZUhhbmRsZXJSZXNwb25zZSB7XG4gIHByb21pc2U6IFByb21pc2U8SVJlc291cmNlUmVzcG9uc2U+O1xuICBhYm9ydD8oKTogdm9pZDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUmVzb3VyY2VSZXNwb25zZSB7XG4gIHN0YXR1czogbnVtYmVyO1xuICBoZWFkZXJzPzogYW55O1xuICBib2R5PzogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSZXNvdXJjZU1ldGhvZFN0cmljdDxJQiwgSVEsIElQLCBPPiB7XG4gIChib2R5OiBJQixcbiAgIHF1ZXJ5OiBJUSxcbiAgIHBhcmFtczogSVAsXG4gICBvblN1Y2Nlc3M/OiAoZGF0YTogTykgPT4gYW55LFxuICAgb25FcnJvcj86IChlcnI6IElSZXNvdXJjZVJlc3BvbnNlKSA9PiBhbnkpOiBQcm9taXNlPE8+O1xuXG4gIChib2R5OiBJQixcbiAgIHF1ZXJ5OiBJUSxcbiAgIG9uU3VjY2Vzcz86IChkYXRhOiBPKSA9PiBhbnksXG4gICBvbkVycm9yPzogKGVycjogSVJlc291cmNlUmVzcG9uc2UpID0+IGFueSk6IFByb21pc2U8Tz47XG5cbiAgKGJvZHk6IElCLFxuICAgb25TdWNjZXNzPzogKGRhdGE6IE8pID0+IGFueSxcbiAgIG9uRXJyb3I/OiAoZXJyOiBJUmVzb3VyY2VSZXNwb25zZSkgPT4gYW55KTogUHJvbWlzZTxPPjtcblxuICAob25TdWNjZXNzPzogKGRhdGE6IE8pID0+IGFueSxcbiAgIG9uRXJyb3I/OiAoZXJyOiBJUmVzb3VyY2VSZXNwb25zZSkgPT4gYW55KTogUHJvbWlzZTxPPjtcblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSZXNvdXJjZU1ldGhvZFJlc3VsdFN0cmljdDxJQiwgSVEsIElQLCBPPiB7XG4gIChib2R5OiBJQixcbiAgIHF1ZXJ5OiBJUSxcbiAgIHBhcmFtczogSVAsXG4gICBvblN1Y2Nlc3M/OiAoZGF0YTogUmVzb3VyY2VSZXN1bHQ8Tz4pID0+IGFueSxcbiAgIG9uRXJyb3I/OiAoZXJyOiBJUmVzb3VyY2VSZXNwb25zZSkgPT4gYW55KTogUmVzb3VyY2VSZXN1bHQ8Tz47XG5cbiAgKGJvZHk6IElCLFxuICAgcXVlcnk6IElRLFxuICAgb25TdWNjZXNzPzogKGRhdGE6IFJlc291cmNlUmVzdWx0PE8+KSA9PiBhbnksXG4gICBvbkVycm9yPzogKGVycjogSVJlc291cmNlUmVzcG9uc2UpID0+IGFueSk6IFJlc291cmNlUmVzdWx0PE8+O1xuXG4gIChib2R5OiBJQixcbiAgIG9uU3VjY2Vzcz86IChkYXRhOiBSZXNvdXJjZVJlc3VsdDxPPikgPT4gYW55LFxuICAgb25FcnJvcj86IChlcnI6IElSZXNvdXJjZVJlc3BvbnNlKSA9PiBhbnkpOiBSZXNvdXJjZVJlc3VsdDxPPjtcblxuICAob25TdWNjZXNzPzogKGRhdGE6IFJlc291cmNlUmVzdWx0PE8+KSA9PiBhbnksXG4gICBvbkVycm9yPzogKGVycjogSVJlc291cmNlUmVzcG9uc2UpID0+IGFueSk6IFJlc291cmNlUmVzdWx0PE8+O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSZXNvdXJjZU1ldGhvZFJlc3VsdDxJQiwgTz4gZXh0ZW5kcyBJUmVzb3VyY2VNZXRob2RSZXN1bHRTdHJpY3Q8SUIsIGFueSwgYW55LCBPPiB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIElSZXNvdXJjZU1ldGhvZDxJQiwgTz4gZXh0ZW5kcyBJUmVzb3VyY2VNZXRob2RTdHJpY3Q8SUIsIGFueSwgYW55LCBPPiB7fVxuXG5cbmV4cG9ydCB0eXBlIFJlc291cmNlUmVzdWx0PFIgZXh0ZW5kcyB7fT4gPSBSICYge1xuICAkcmVzb2x2ZWQ/OiBib29sZWFuO1xuICAkcHJvbWlzZT86IFByb21pc2U8Uj47XG4gICRhYm9ydD8oKTogdm9pZDtcbn07XG5cblxuZXhwb3J0IGVudW0gUmVzb3VyY2VSZXF1ZXN0Qm9keVR5cGUge1xuICBOT05FID0gMCxcbiAgSlNPTiA9IDEsXG4gIEZPUk0gPSAyLFxuICBGT1JNX0RBVEEgPSAzLFxuICBURVhUID0gNCxcbiAgQkxPQiA9IDUsXG4gIEFSUkFZX0JVRkZFUiA9IDZcbn1cblxuZXhwb3J0IGVudW0gUmVzb3VyY2VSZXNwb25zZUJvZHlUeXBlIHtcbiAgVGV4dCA9IDEsXG4gIEpzb24gPSAyLFxuICBBcnJheUJ1ZmZlciA9IDMsXG4gIEJsb2IgPSA0XG59XG5cbmV4cG9ydCBlbnVtIFJlc291cmNlUmVxdWVzdE1ldGhvZCB7XG4gIEdldCA9IDEsXG4gIFBvc3QgPSAyLFxuICBQdXQgPSAzLFxuICBEZWxldGUgPSA0LFxuICBPcHRpb25zID0gNSxcbiAgSGVhZCA9IDYsXG4gIFBhdGNoID0gN1xufVxuXG5leHBvcnQgZW51bSBSZXNvdXJjZVF1ZXJ5TWFwcGluZ01ldGhvZCB7XG4gIFBsYWluID0gMSxcbiAgQnJhY2tldCA9IDIsXG4gIEpRdWVyeVBhcmFtc0JyYWNrZXQgPSAzXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvRGVjbGFyYXRpb25zLnRzIiwiaW1wb3J0IHsgUmVzb3VyY2VSZXF1ZXN0Qm9keVR5cGUgfSBmcm9tICcuL0RlY2xhcmF0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZUhlbHBlciB7XG5cbiAgc3RhdGljIGNsZWFuRGF0YUZpZWxkczogc3RyaW5nW10gPSBbXG4gICAgJyRyZXNvbHZlZCcsXG4gICAgJyRwcm9taXNlJyxcbiAgICAnJGFib3J0JyxcbiAgICAnJHJlc291cmNlJ1xuICBdO1xuXG5cblxuICBwcml2YXRlIHN0YXRpYyBpc0Jyb3dzZXI6IGJvb2xlYW4gPSBudWxsO1xuXG4gIHN0YXRpYyBpc1J1bm5pbmdJbkJyb3dzZXIoKTogYm9vbGVhbiB7XG5cbiAgICBpZiAodGhpcy5pc0Jyb3dzZXIgIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmlzQnJvd3NlcjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgdGhpcy5pc0Jyb3dzZXIgPSAhIXdpbmRvdztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICB0aGlzLmlzQnJvd3NlciA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmlzQnJvd3NlcjtcbiAgfVxuXG4gIHN0YXRpYyBnZXRSZWFsVHlwZU9mKGRhdGE6IGFueSk6IFJlc291cmNlUmVxdWVzdEJvZHlUeXBlIHtcbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiBSZXNvdXJjZVJlcXVlc3RCb2R5VHlwZS5OT05FO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzUnVubmluZ0luQnJvd3NlcigpKSB7XG4gICAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEZvcm1EYXRhKSB7XG4gICAgICAgIHJldHVybiBSZXNvdXJjZVJlcXVlc3RCb2R5VHlwZS5GT1JNX0RBVEE7XG4gICAgICB9XG5cbiAgICAgIGlmIChkYXRhIGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgICByZXR1cm4gUmVzb3VyY2VSZXF1ZXN0Qm9keVR5cGUuQkxPQjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZGF0YSBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSB7XG4gICAgICByZXR1cm4gUmVzb3VyY2VSZXF1ZXN0Qm9keVR5cGUuQVJSQVlfQlVGRkVSO1xuICAgIH1cblxuICAgIGlmIChbJ3N0cmluZycsICdudW1iZXInXS5pbmRleE9mKHR5cGVvZiBkYXRhKSA+IC0xKSB7XG4gICAgICByZXR1cm4gUmVzb3VyY2VSZXF1ZXN0Qm9keVR5cGUuVEVYVDtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVzb3VyY2VSZXF1ZXN0Qm9keVR5cGUuSlNPTjtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0cyhkc3Q6IGFueSwgc3JjOiBhbnkpOiBhbnkge1xuXG4gICAgaWYgKCFkc3QpIHtcbiAgICAgIGRzdCA9IHt9O1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKHNyYylcbiAgICAgIC5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICBpZiAoZHN0W2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRzdFtrZXldID0gc3JjW2tleV07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGRzdDtcblxuICB9XG5cbiAgc3RhdGljIGlzTnVsbE9yVW5kZWZpbmVkKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHN0YXRpYyBjbGVhbkRhdGEob2JqOiBhbnkpOiBhbnkge1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgcmV0dXJuIHRoaXMuY2xlYW5EYXRhQXJyYXkob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuY2xlYW5EYXRhT2JqZWN0KG9iaik7XG4gICAgfVxuXG4gIH1cblxuICBzdGF0aWMgY2xlYW5EYXRhQXJyYXkob2JqOiBhbnlbXSk6IGFueVtdIHtcbiAgICBmb3IgKGNvbnN0IHByb3BOYW1lIGluIG9iaikge1xuXG4gICAgICBpZiAodHlwZW9mIG9ialtwcm9wTmFtZV0gPT09ICdmdW5jdGlvbicgfHwgdGhpcy5jbGVhbkRhdGFGaWVsZHMuaW5kZXhPZihwcm9wTmFtZSkgPiAtMSkge1xuICAgICAgICBkZWxldGUgb2JqW3Byb3BOYW1lXTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBzdGF0aWMgY2xlYW5EYXRhT2JqZWN0KG9iajogYW55KTogYW55IHtcbiAgICBjb25zdCBjbGVhbmVkT2JqOiBhbnkgPSB7fTtcblxuICAgIGZvciAoY29uc3QgcHJvcE5hbWUgaW4gb2JqKSB7XG5cbiAgICAgIGlmICh0eXBlb2Ygb2JqW3Byb3BOYW1lXSAhPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzLmNsZWFuRGF0YUZpZWxkcy5pbmRleE9mKHByb3BOYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgY2xlYW5lZE9ialtwcm9wTmFtZV0gPSBvYmpbcHJvcE5hbWVdO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgcmV0dXJuIGNsZWFuZWRPYmo7XG4gIH1cblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Jlc291cmNlSGVscGVyLnRzIiwiaW1wb3J0IHtcbiAgSVJlc291cmNlQWN0aW9uLFxuICBJUmVzb3VyY2VBY3Rpb25Jbm5lcixcbiAgSVJlc291cmNlUmVzcG9uc2UsXG4gIFJlc291cmNlUXVlcnlNYXBwaW5nTWV0aG9kLFxuICBSZXNvdXJjZVJlcXVlc3RCb2R5VHlwZSxcbiAgUmVzb3VyY2VSZXF1ZXN0TWV0aG9kXG59IGZyb20gJy4vRGVjbGFyYXRpb25zJztcbmltcG9ydCB7IFJlc291cmNlR2xvYmFsQ29uZmlnIH0gZnJvbSAnLi9SZXNvdXJjZUdsb2JhbENvbmZpZyc7XG5pbXBvcnQgeyBSZXNvdXJjZUhlbHBlciB9IGZyb20gJy4vUmVzb3VyY2VIZWxwZXInO1xuaW1wb3J0IHsgUmVzb3VyY2VIYW5kbGVyIH0gZnJvbSAnLi9SZXNvdXJjZUhhbmRsZXInO1xuXG5leHBvcnQgY2xhc3MgUmVzb3VyY2Uge1xuXG4gIHByaXZhdGUgJHVybDogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSAkcGF0aFByZWZpeDogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSAkcGF0aDogc3RyaW5nID0gbnVsbDtcbiAgcHJpdmF0ZSAkaGVhZGVyczogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSAkYm9keTogYW55ID0gbnVsbDtcbiAgcHJpdmF0ZSAkcGFyYW1zOiBhbnkgPSBudWxsO1xuICBwcml2YXRlICRxdWVyeTogYW55ID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcmVxdWVzdEhhbmRsZXI6IFJlc291cmNlSGFuZGxlcikge1xuICAgICh0aGlzLmNvbnN0cnVjdG9yIGFzIGFueSkuaW5zdGFuY2UgPSB0aGlzO1xuICB9XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gZ2V0IHVybFxuICAgKlxuICAgKiBAcGFyYW0ge0lSZXNvdXJjZUFjdGlvbn0gYWN0aW9uT3B0aW9uc1xuICAgKiBAcmV0dXJuIHtzdHJpbmcgfCBQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICAkZ2V0VXJsKGFjdGlvbk9wdGlvbnM6IElSZXNvdXJjZUFjdGlvbiA9IHt9KTogc3RyaW5nIHwgUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm4gdGhpcy4kdXJsIHx8IGFjdGlvbk9wdGlvbnMudXJsIHx8IFJlc291cmNlR2xvYmFsQ29uZmlnLnVybCB8fCAnJztcbiAgfVxuXG4gICRzZXRVcmwodXJsOiBzdHJpbmcpIHtcbiAgICB0aGlzLiR1cmwgPSB1cmw7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBnZXQgcGF0aCBwcmVmaXhcbiAgICpcbiAgICogQHBhcmFtIHtJUmVzb3VyY2VBY3Rpb259IGFjdGlvbk9wdGlvbnNcbiAgICogQHJldHVybiB7c3RyaW5nIHwgUHJvbWlzZTxzdHJpbmc+fVxuICAgKi9cbiAgJGdldFBhdGhQcmVmaXgoYWN0aW9uT3B0aW9uczogSVJlc291cmNlQWN0aW9uID0ge30pOiBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz4ge1xuICAgIHJldHVybiB0aGlzLiRwYXRoUHJlZml4IHx8IGFjdGlvbk9wdGlvbnMucGF0aFByZWZpeCB8fCBSZXNvdXJjZUdsb2JhbENvbmZpZy5wYXRoUHJlZml4IHx8ICcnO1xuICB9XG5cbiAgJHNldFBhdGhQcmVmaXgocGF0aDogc3RyaW5nKSB7XG4gICAgdGhpcy4kcGF0aFByZWZpeCA9IHBhdGg7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBnZXQgcGF0aFxuICAgKlxuICAgKiBAcGFyYW0ge0lSZXNvdXJjZUFjdGlvbn0gYWN0aW9uT3B0aW9uc1xuICAgKiBAcmV0dXJuIHtzdHJpbmcgfCBQcm9taXNlPHN0cmluZz59XG4gICAqL1xuICAkZ2V0UGF0aChhY3Rpb25PcHRpb25zOiBJUmVzb3VyY2VBY3Rpb24gPSB7fSk6IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPiB7XG4gICAgcmV0dXJuIHRoaXMuJHBhdGggfHwgYWN0aW9uT3B0aW9ucy5wYXRoIHx8IFJlc291cmNlR2xvYmFsQ29uZmlnLnBhdGggfHwgJyc7XG4gIH1cblxuICAkc2V0UGF0aChwYXRoOiBzdHJpbmcpIHtcbiAgICB0aGlzLiRwYXRoID0gcGF0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgaGVhZGVycy5cbiAgICpcbiAgICogQHBhcmFtIHtJUmVzb3VyY2VBY3Rpb259IGFjdGlvbk9wdGlvbnNcbiAgICogQHJldHVybiB7YW55IHwgUHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgJGdldEhlYWRlcnMoYWN0aW9uT3B0aW9uczogSVJlc291cmNlQWN0aW9uID0ge30pOiBhbnkgfCBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLiRoZWFkZXJzIHx8IGFjdGlvbk9wdGlvbnMuaGVhZGVycyB8fCBSZXNvdXJjZUdsb2JhbENvbmZpZy5oZWFkZXJzIHx8IHt9O1xuICB9XG5cbiAgJHNldEhlYWRlcnMoaGVhZGVyczogYW55KSB7XG4gICAgdGhpcy4kaGVhZGVycyA9IGhlYWRlcnM7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGJvZHlcbiAgICpcbiAgICogQHBhcmFtIHtJUmVzb3VyY2VBY3Rpb259IGFjdGlvbk9wdGlvbnNcbiAgICogQHJldHVybiB7YW55IHwgUHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgJGdldEJvZHkoYWN0aW9uT3B0aW9uczogSVJlc291cmNlQWN0aW9uID0ge30pOiBhbnkgfCBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLiRib2R5IHx8IGFjdGlvbk9wdGlvbnMuYm9keSB8fCBSZXNvdXJjZUdsb2JhbENvbmZpZy5ib2R5IHx8IHt9O1xuICB9XG5cbiAgJHNldEJvZHkoYm9keTogYW55KSB7XG4gICAgdGhpcy4kYm9keSA9IGJvZHk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHBhdGggcGFyYW1zXG4gICAqXG4gICAqIEBwYXJhbSB7SVJlc291cmNlQWN0aW9ufSBhY3Rpb25PcHRpb25zXG4gICAqIEByZXR1cm4ge2FueSB8IFByb21pc2U8YW55Pn1cbiAgICovXG4gICRnZXRQYXJhbXMoYWN0aW9uT3B0aW9uczogSVJlc291cmNlQWN0aW9uID0ge30pOiBhbnkgfCBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLiRwYXJhbXMgfHwgYWN0aW9uT3B0aW9ucy5wYXJhbXMgfHwgUmVzb3VyY2VHbG9iYWxDb25maWcucGFyYW1zIHx8IHt9O1xuICB9XG5cbiAgJHNldFBhcmFtcyhwYXJhbXM6IGFueSkge1xuICAgIHRoaXMuJHBhcmFtcyA9IHBhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgcXVlcnkgcGFyYW1zXG4gICAqXG4gICAqIEBwYXJhbSB7SVJlc291cmNlQWN0aW9ufSBhY3Rpb25PcHRpb25zXG4gICAqIEByZXR1cm4ge2FueSB8IFByb21pc2U8YW55Pn1cbiAgICovXG4gICRnZXRRdWVyeShhY3Rpb25PcHRpb25zOiBJUmVzb3VyY2VBY3Rpb24gPSB7fSk6IGFueSB8IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuJHF1ZXJ5IHx8IGFjdGlvbk9wdGlvbnMucXVlcnkgfHwgUmVzb3VyY2VHbG9iYWxDb25maWcucXVlcnkgfHwge307XG4gIH1cblxuICAkc2V0UXVlcnkocXVlcnk6IGFueSkge1xuICAgIHRoaXMuJHF1ZXJ5ID0gcXVlcnk7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBmaWx0ZXIgcmVjZWl2ZWQgZGF0YS5cbiAgICogSXMgYXBwbGllZCBvbiBlYWNoIGVsZW1lbnQgb2YgYXJyYXkgb3Igb2JqZWN0XG4gICAqXG4gICAqIEBwYXJhbSBkYXRhXG4gICAqIEBwYXJhbSB7SVJlc291cmNlQWN0aW9uSW5uZXJ9IG9wdGlvbnNcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gICRmaWx0ZXIoZGF0YTogYW55LCBvcHRpb25zOiBJUmVzb3VyY2VBY3Rpb25Jbm5lciA9IHt9KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBtYXAgcmVjZWl2ZWQgZGF0YVxuICAgKiBJcyBhcHBsaWVkIG9uIGVhY2ggZWxlbWVudCBvZiBhcnJheSBvciBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHBhcmFtIHtJUmVzb3VyY2VBY3Rpb25Jbm5lcn0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHthbnl9XG4gICAqL1xuICAkbWFwKGRhdGE6IGFueSwgb3B0aW9uczogSVJlc291cmNlQWN0aW9uSW5uZXIgPSB7fSk6IGFueSB7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICAvKipcbiAgICogVXNlZCB0byBjcmVhdGUgcmVzdWx0IG9iamVjdFxuICAgKiBJcyBhcHBsaWVkIG9uIGVhY2ggZWxlbWVudCBvZiBhcnJheSBvciBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtIGRhdGFcbiAgICogQHBhcmFtIHtJUmVzb3VyY2VBY3Rpb25Jbm5lcn0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHthbnl9XG4gICAqL1xuICAkcmVzdWx0RmFjdG9yeShkYXRhOiBhbnksIG9wdGlvbnM6IElSZXNvdXJjZUFjdGlvbklubmVyID0ge30pOiBhbnkge1xuICAgIHJldHVybiBkYXRhIHx8IHt9O1xuICB9XG5cbiAgJHJlc3RBY3Rpb24ob3B0aW9uczogSVJlc291cmNlQWN0aW9uSW5uZXIpIHtcblxuICAgIHRoaXMuJF9zZXRSZXNvdXJjZUFjdGlvbklubmVyRGVmYXVsdHMob3B0aW9ucyk7XG4gICAgdGhpcy4kX3NldFJlc291cmNlQWN0aW9uT3B0aW9uRGVmYXVsdHMob3B0aW9ucyk7XG5cbiAgICBjb25zdCBhY3Rpb25PcHRpb25zID0gb3B0aW9ucy5hY3Rpb25PcHRpb25zO1xuXG4gICAgaWYgKGFjdGlvbk9wdGlvbnMubXV0YXRlQm9keSB8fCBvcHRpb25zLmlzTW9kZWwpIHtcbiAgICAgIG9wdGlvbnMucmV0dXJuRGF0YSA9IG9wdGlvbnMuYWN0aW9uQXR0cmlidXRlcy5ib2R5O1xuICAgIH1cblxuICAgIGlmICghYWN0aW9uT3B0aW9ucy5hc1Byb21pc2UpIHtcbiAgICAgIG9wdGlvbnMucmV0dXJuRGF0YSA9IGFjdGlvbk9wdGlvbnMuZXhwZWN0SnNvbkFycmF5ID8gW10gOiBhY3Rpb25PcHRpb25zLnJlc3VsdEZhY3RvcnkuY2FsbCh0aGlzLCBudWxsLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy4kX2NhblNldEludGVybmFsRGF0YShvcHRpb25zKSkge1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3B0aW9ucy5yZXR1cm5EYXRhLCAnJHJlc29sdmVkJywge1xuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9KTtcblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9wdGlvbnMucmV0dXJuRGF0YSwgJyRhYm9ydCcsIHtcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgLy8gZG9lcyBub3RoaW5nIGZvciBub3dcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBvcHRpb25zLm1haW5Qcm9taXNlID0gdGhpcy4kX3NldFJlc29sdmVkT3B0aW9ucyhvcHRpb25zKVxuICAgICAgLnRoZW4oKG86IElSZXNvdXJjZUFjdGlvbklubmVyKSA9PiB0aGlzLiRfY3JlYXRlUmVxdWVzdE9wdGlvbnMobykpXG4gICAgICAudGhlbigobzogSVJlc291cmNlQWN0aW9uSW5uZXIpID0+IHtcbiAgICAgICAgY29uc3QgaGFuZGxlclJlc3AgPSB0aGlzLnJlcXVlc3RIYW5kbGVyLmhhbmRsZShvLnJlcXVlc3RPcHRpb25zKTtcblxuICAgICAgICBpZiAoby5yZXR1cm5EYXRhICYmIHRoaXMuJF9jYW5TZXRJbnRlcm5hbERhdGEob3B0aW9ucykpIHtcbiAgICAgICAgICBvLnJldHVybkRhdGEuJGFib3J0ID0gaGFuZGxlclJlc3AuYWJvcnQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaGFuZGxlclJlc3AucHJvbWlzZTtcbiAgICAgIH0pXG4gICAgICAudGhlbigocmVzcDogSVJlc291cmNlUmVzcG9uc2UpID0+IHRoaXMuJGhhbmRsZVN1Y2Nlc3NSZXNwb25zZShvcHRpb25zLCByZXNwKSlcbiAgICAgIC5jYXRjaCgocmVzcDogSVJlc291cmNlUmVzcG9uc2UpID0+IHRoaXMuJGhhbmRsZUVycm9yUmVzcG9uc2Uob3B0aW9ucywgcmVzcCkpO1xuXG5cbiAgICBpZiAodGhpcy4kX2NhblNldEludGVybmFsRGF0YShvcHRpb25zKSkge1xuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob3B0aW9ucy5yZXR1cm5EYXRhLCAnJHByb21pc2UnLCB7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogb3B0aW9ucy5tYWluUHJvbWlzZVxuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICByZXR1cm4gYWN0aW9uT3B0aW9ucy5hc1Byb21pc2UgPyBvcHRpb25zLm1haW5Qcm9taXNlIDogb3B0aW9ucy5yZXR1cm5EYXRhO1xuXG4gIH1cblxuICBwcm90ZWN0ZWQgJGhhbmRsZVN1Y2Nlc3NSZXNwb25zZShvcHRpb25zOiBJUmVzb3VyY2VBY3Rpb25Jbm5lciwgcmVzcDogSVJlc291cmNlUmVzcG9uc2UpOiBhbnkge1xuXG4gICAgbGV0IGJvZHkgPSByZXNwLmJvZHk7XG5cbiAgICBjb25zdCBhY3Rpb25PcHRpb25zID0gb3B0aW9ucy5hY3Rpb25PcHRpb25zO1xuXG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYm9keSkpIHtcblxuICAgICAgYm9keSA9IGJvZHlcbiAgICAgICAgLmZpbHRlcigoaXRlbTogYW55KSA9PiBhY3Rpb25PcHRpb25zLmZpbHRlci5jYWxsKHRoaXMsIGl0ZW0sIG9wdGlvbnMpKVxuICAgICAgICAubWFwKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICBpdGVtID0gYWN0aW9uT3B0aW9ucy5tYXAuY2FsbCh0aGlzLCBpdGVtLCBvcHRpb25zKTtcblxuICAgICAgICAgIHJldHVybiBhY3Rpb25PcHRpb25zLnJlc3VsdEZhY3RvcnkuY2FsbCh0aGlzLCBpdGVtLCBvcHRpb25zKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGlmIChvcHRpb25zLnJldHVybkRhdGEpIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnB1c2guYXBwbHkob3B0aW9ucy5yZXR1cm5EYXRhLCBib2R5KTtcbiAgICAgICAgYm9keSA9IG9wdGlvbnMucmV0dXJuRGF0YTtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIGlmIChhY3Rpb25PcHRpb25zLmZpbHRlci5jYWxsKHRoaXMsIGJvZHksIG9wdGlvbnMpKSB7XG5cbiAgICAgICAgYm9keSA9IGFjdGlvbk9wdGlvbnMubWFwLmNhbGwodGhpcywgYm9keSwgb3B0aW9ucyk7XG5cbiAgICAgICAgbGV0IG5ld0JvZHkgPSBvcHRpb25zLnJldHVybkRhdGE7XG5cbiAgICAgICAgaWYgKG5ld0JvZHkpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIG5ld0JvZHkuJHNldERhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIG5ld0JvZHkuJHNldERhdGEoYm9keSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24obmV3Qm9keSwgYm9keSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0JvZHkgPSBhY3Rpb25PcHRpb25zLnJlc3VsdEZhY3RvcnkuY2FsbCh0aGlzLCBib2R5LCBvcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkgPSBuZXdCb2R5O1xuXG4gICAgICAgIC8vIElmIGl0J3MgbW9kZWxcbiAgICAgICAgaWYgKGJvZHkuJHJlc291cmNlKSB7XG4gICAgICAgICAgYm9keS4kcmVzb2x2ZWQgPSB0cnVlO1xuICAgICAgICAgIGJvZHkuJHByb21pc2UgPSBvcHRpb25zLm1haW5Qcm9taXNlO1xuICAgICAgICAgIGJvZHkuJGFib3J0ID0gKCkgPT4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGJvZHkgPSBudWxsO1xuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuJF9jYW5TZXRJbnRlcm5hbERhdGEob3B0aW9ucykpIHtcbiAgICAgIG9wdGlvbnMucmV0dXJuRGF0YS4kcmVzb2x2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmFjdGlvbkF0dHJpYnV0ZXMub25TdWNjZXNzKSB7XG4gICAgICBvcHRpb25zLmFjdGlvbkF0dHJpYnV0ZXMub25TdWNjZXNzKGJvZHkpO1xuICAgIH1cblxuICAgIHJldHVybiBib2R5O1xuICB9XG5cbiAgcHJvdGVjdGVkICRoYW5kbGVFcnJvclJlc3BvbnNlKG9wdGlvbnM6IElSZXNvdXJjZUFjdGlvbklubmVyLCByZXNwOiBJUmVzb3VyY2VSZXNwb25zZSk6IGFueSB7XG5cbiAgICBpZiAob3B0aW9ucy5yZXR1cm5EYXRhICYmIHRoaXMuJF9jYW5TZXRJbnRlcm5hbERhdGEob3B0aW9ucykpIHtcbiAgICAgIG9wdGlvbnMucmV0dXJuRGF0YS4kcmVzb2x2ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmFjdGlvbkF0dHJpYnV0ZXMub25FcnJvcikge1xuICAgICAgb3B0aW9ucy5hY3Rpb25BdHRyaWJ1dGVzLm9uRXJyb3IocmVzcCk7XG4gICAgfVxuXG4gICAgdGhyb3cgcmVzcDtcbiAgfVxuXG4gIHByb3RlY3RlZCAkc2V0UmVxdWVzdE9wdGlvbnNVcmwob3B0aW9uczogSVJlc291cmNlQWN0aW9uSW5uZXIpOiB2b2lkIHtcblxuICAgIGNvbnN0IHJvID0gb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucztcblxuICAgIGlmICghcm8udXJsKSB7XG4gICAgICByby51cmwgPVxuICAgICAgICBvcHRpb25zLnJlc29sdmVkT3B0aW9ucy51cmwgK1xuICAgICAgICBvcHRpb25zLnJlc29sdmVkT3B0aW9ucy5wYXRoUHJlZml4ICtcbiAgICAgICAgb3B0aW9ucy5yZXNvbHZlZE9wdGlvbnMucGF0aDtcbiAgICB9XG5cblxuICAgIG9wdGlvbnMudXNlZEluUGF0aCA9IHt9O1xuXG4gICAgY29uc3QgcGFyYW1zID0gUmVzb3VyY2VIZWxwZXIuZGVmYXVsdHMob3B0aW9ucy5hY3Rpb25BdHRyaWJ1dGVzLnBhcmFtcywgb3B0aW9ucy5yZXNvbHZlZE9wdGlvbnMucGFyYW1zKTtcbiAgICBjb25zdCBwYXRoUGFyYW1zID0gcm8udXJsLm1hdGNoKC97KFtefV0qKX0vZykgfHwgW107XG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aFBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcGF0aFBhcmFtID0gcGF0aFBhcmFtc1tpXTtcblxuICAgICAgbGV0IHBhdGhLZXkgPSBwYXRoUGFyYW0uc3Vic3RyKDEsIHBhdGhQYXJhbS5sZW5ndGggLSAyKTtcbiAgICAgIGNvbnN0IGlzTWFuZGF0b3J5ID0gcGF0aEtleVswXSA9PT0gJyEnO1xuICAgICAgaWYgKGlzTWFuZGF0b3J5KSB7XG4gICAgICAgIHBhdGhLZXkgPSBwYXRoS2V5LnN1YnN0cigxKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb25seVBhdGhQYXJhbSA9IHBhdGhLZXlbMF0gPT09ICc6JztcbiAgICAgIGlmIChvbmx5UGF0aFBhcmFtKSB7XG4gICAgICAgIHBhdGhLZXkgPSBwYXRoS2V5LnN1YnN0cigxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wdGlvbnMuYWN0aW9uQXR0cmlidXRlcy5xdWVyeSAmJiBvcHRpb25zLmFjdGlvbkF0dHJpYnV0ZXMucXVlcnkgPT09IG9wdGlvbnMuYWN0aW9uQXR0cmlidXRlcy5wYXJhbXMpIHtcbiAgICAgICAgb3B0aW9ucy51c2VkSW5QYXRoW3BhdGhLZXldID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdmFsdWUgPSBwYXJhbXNbcGF0aEtleV07XG5cbiAgICAgIGlmIChvbmx5UGF0aFBhcmFtKSB7XG4gICAgICAgIGRlbGV0ZSBwYXJhbXNbcGF0aEtleV07XG4gICAgICB9XG5cbiAgICAgIGlmIChSZXNvdXJjZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh2YWx1ZSkpIHtcbiAgICAgICAgaWYgKGlzTWFuZGF0b3J5KSB7XG4gICAgICAgICAgY29uc3QgY29uc29sZU1zZyA9IGBNYW5kYXRvcnkgJHtwYXRoUGFyYW19IHBhdGggcGFyYW1ldGVyIGlzIG1pc3NpbmdgO1xuICAgICAgICAgIGNvbnNvbGUud2Fybihjb25zb2xlTXNnKTtcblxuICAgICAgICAgIC8vIHNoZWxsLm1haW5PYnNlcnZhYmxlID0gT2JzZXJ2YWJsZS5jcmVhdGUoKG9ic2VydmVyOiBhbnkpID0+IHtcbiAgICAgICAgICAvLyAgIG9ic2VydmVyLmVycm9yKG5ldyBFcnJvcihjb25zb2xlTXNnKSk7XG4gICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgLy9cbiAgICAgICAgICAvL1xuICAgICAgICAgIC8vIHRoaXMuJF9yZWxlYXNlTWFpbkRlZmVycmVkU3Vic2NyaWJlcihzaGVsbCk7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbnNvbGVNc2cpO1xuICAgICAgICB9XG5cbiAgICAgICAgcm8udXJsID0gcm8udXJsLnN1YnN0cigwLCByby51cmwuaW5kZXhPZihwYXRoUGFyYW0pKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIH1cblxuICAgICAgLy8gUmVwbGFjaW5nIGluIHRoZSB1cmxcbiAgICAgIHJvLnVybCA9IHJvLnVybC5yZXBsYWNlKHBhdGhQYXJhbSwgdmFsdWUpO1xuXG4gICAgfVxuXG4gICAgLy8gUmVtb3ZpbmcgZG91YmxlIHNsYXNoZWQgZnJvbSBmaW5hbCB1cmxcbiAgICByby51cmwgPSByby51cmwucmVwbGFjZSgvXFwvXFwvKy9nLCAnLycpO1xuICAgIGlmIChyby51cmwuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICByby51cmwgPSByby51cmwucmVwbGFjZSgnOi8nLCAnOi8vJyk7XG4gICAgfVxuXG4gICAgLy8gUmVtb3ZlIHRyYWlsaW5nIHNsYXNoXG4gICAgaWYgKG9wdGlvbnMuYWN0aW9uT3B0aW9ucy5yZW1vdmVUcmFpbGluZ1NsYXNoKSB7XG4gICAgICB3aGlsZSAocm8udXJsW3JvLnVybC5sZW5ndGggLSAxXSA9PT0gJy8nKSB7XG4gICAgICAgIHJvLnVybCA9IHJvLnVybC5zdWJzdHIoMCwgcm8udXJsLmxlbmd0aCAtIDEpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcHJvdGVjdGVkICRzZXRSZXF1ZXN0T3B0aW9uc0JvZHkob3B0aW9uczogSVJlc291cmNlQWN0aW9uSW5uZXIpOiB2b2lkIHtcblxuICAgIGxldCBib2R5ID0gb3B0aW9ucy5hY3Rpb25BdHRyaWJ1dGVzLmJvZHk7XG5cbiAgICBpZiAoIWJvZHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCByZWFsQm9keVR5cGUgPSBSZXNvdXJjZUhlbHBlci5nZXRSZWFsVHlwZU9mKGJvZHkpO1xuXG4gICAgbGV0IGJvZHlPazogYm9vbGVhbiA9IHJlYWxCb2R5VHlwZSA9PT0gb3B0aW9ucy5hY3Rpb25PcHRpb25zLnJlcXVlc3RCb2R5VHlwZTtcblxuICAgIGlmICghYm9keU9rKSB7XG5cbiAgICAgIGlmIChyZWFsQm9keVR5cGUgPT09IFJlc291cmNlUmVxdWVzdEJvZHlUeXBlLkpTT04pIHtcblxuICAgICAgICBzd2l0Y2ggKG9wdGlvbnMuYWN0aW9uT3B0aW9ucy5yZXF1ZXN0Qm9keVR5cGUpIHtcblxuICAgICAgICAgIGNhc2UgUmVzb3VyY2VSZXF1ZXN0Qm9keVR5cGUuRk9STV9EQVRBOlxuXG4gICAgICAgICAgICBjb25zdCBuZXdCb2R5ID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGJvZHkpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG5cbiAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBib2R5W2tleV07XG5cbiAgICAgICAgICAgICAgaWYgKGJvZHkuaGFzT3duUHJvcGVydHkoa2V5KSAmJiB0eXBlb2YgdmFsdWUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmlsZU5hbWU6IHN0cmluZztcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGaWxlKSB7XG4gICAgICAgICAgICAgICAgICBmaWxlTmFtZSA9ICh2YWx1ZSBhcyBGaWxlKS5uYW1lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG5ld0JvZHkuYXBwZW5kKGtleSwgdmFsdWUsIGZpbGVOYW1lKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgYm9keU9rID0gdHJ1ZTtcblxuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgIH1cblxuICAgIGlmICghYm9keU9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbiBub3QgY29udmVydCBib2R5Jyk7XG4gICAgfVxuXG5cbiAgICAvLyBBZGQgcm9vdCBub2RlIGlmIG5lZWRlZFxuICAgIGlmIChvcHRpb25zLmFjdGlvbk9wdGlvbnMucm9vdE5vZGUpIHtcbiAgICAgIGNvbnN0IG5ld0JvZHk6IGFueSA9IHt9O1xuICAgICAgbmV3Qm9keVtvcHRpb25zLmFjdGlvbk9wdGlvbnMucm9vdE5vZGVdID0gYm9keTtcbiAgICAgIGJvZHkgPSBuZXdCb2R5O1xuICAgIH1cblxuXG4gICAgaWYgKHR5cGVvZiBib2R5ID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhib2R5KS5sZW5ndGggPT09IDAgJiYgIW9wdGlvbnMuYWN0aW9uT3B0aW9ucy5rZWVwRW1wdHlCb2R5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5ib2R5ID0gYm9keTtcblxuICB9XG5cbiAgcHJvdGVjdGVkICRzZXRSZXF1ZXN0T3B0aW9uc1F1ZXJ5KG9wdGlvbnM6IElSZXNvdXJjZUFjdGlvbklubmVyKTogdm9pZCB7XG5cbiAgICBsZXQgb3EgPSBvcHRpb25zLmFjdGlvbkF0dHJpYnV0ZXMucXVlcnkgfHwge307XG4gICAgaWYgKG9wdGlvbnMucmVzb2x2ZWRPcHRpb25zLnF1ZXJ5KSB7XG4gICAgICBvcSA9IHsuLi5vcHRpb25zLnJlc29sdmVkT3B0aW9ucy5xdWVyeSwgLi4ub3F9O1xuICAgIH1cblxuICAgIGlmIChvcSkge1xuICAgICAgb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5xdWVyeSA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMob3EpLmZvckVhY2goKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGlmIChvcS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmICFvcHRpb25zLnVzZWRJblBhdGhba2V5XSkge1xuICAgICAgICAgIHRoaXMuJGFwcGVuZFF1ZXJ5UGFyYW1zKG9wdGlvbnMucmVxdWVzdE9wdGlvbnMucXVlcnksIGtleSwgb3Fba2V5XSwgb3B0aW9ucy5xdWVyeU1hcHBpbmdNZXRob2QpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5hY3Rpb25PcHRpb25zLmFkZFRpbWVzdGFtcCkge1xuICAgICAgb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5xdWVyeSA9IG9wdGlvbnMucmVxdWVzdE9wdGlvbnMucXVlcnkgfHwge307XG4gICAgICB0aGlzLiRhcHBlbmRRdWVyeVBhcmFtcyhcbiAgICAgICAgb3B0aW9ucy5yZXF1ZXN0T3B0aW9ucy5xdWVyeSxcbiAgICAgICAgb3B0aW9ucy5hY3Rpb25PcHRpb25zLmFkZFRpbWVzdGFtcCBhcyBzdHJpbmcsXG4gICAgICAgIERhdGUubm93KCkudG9TdHJpbmcoMTApLFxuICAgICAgICBvcHRpb25zLnF1ZXJ5TWFwcGluZ01ldGhvZCk7XG4gICAgfVxuXG4gIH1cblxuICBwcm90ZWN0ZWQgJGFwcGVuZFF1ZXJ5UGFyYW1zKHF1ZXJ5OiB7IFtwcm9wOiBzdHJpbmddOiBzdHJpbmcgfCBhbnlbXSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogc3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBhbnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlNYXBwaW5nTWV0aG9kOiBSZXNvdXJjZVF1ZXJ5TWFwcGluZ01ldGhvZCk6IHZvaWQge1xuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlLnRvSVNPU3RyaW5nKCk7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuXG4gICAgICBzd2l0Y2ggKHF1ZXJ5TWFwcGluZ01ldGhvZCkge1xuXG4gICAgICAgIGNhc2UgUmVzb3VyY2VRdWVyeU1hcHBpbmdNZXRob2QuUGxhaW46XG5cbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZS5qb2luKCcsJyk7XG4gICAgICAgICAgICAvLyBmb3IgKGNvbnN0IGFyclZhbHVlIG9mIHZhbHVlKSB7XG4gICAgICAgICAgICAvLyAgIHF1ZXJ5W2tleV0gPSBhcnJWYWx1ZTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAvLy8gQ29udmVydCBkYXRlcyB0byBJU08gZm9ybWF0IHN0cmluZ1xuICAgICAgICAgICAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkodmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWVyeVtrZXldID0gdmFsdWU7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBSZXNvdXJjZVF1ZXJ5TWFwcGluZ01ldGhvZC5CcmFja2V0OlxuICAgICAgICAgIC8vLyBDb252ZXJ0IG9iamVjdCBhbmQgYXJyYXlzIHRvIHF1ZXJ5IHBhcmFtc1xuICAgICAgICAgIGZvciAoY29uc3QgayBpbiB2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KGspKSB7XG4gICAgICAgICAgICAgIHRoaXMuJGFwcGVuZFF1ZXJ5UGFyYW1zKHF1ZXJ5LCBgJHtrZXl9WyR7a31dYCwgdmFsdWVba10sIHF1ZXJ5TWFwcGluZ01ldGhvZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgUmVzb3VyY2VRdWVyeU1hcHBpbmdNZXRob2QuSlF1ZXJ5UGFyYW1zQnJhY2tldDpcbiAgICAgICAgICAvLy8gQ29udmVydCBvYmplY3QgYW5kIGFycmF5cyB0byBxdWVyeSBwYXJhbXMgYWNjb3JkaW5nIHRvICQucGFyYW1zXG4gICAgICAgICAgZm9yIChjb25zdCBrIGluIHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoaykpIHtcbiAgICAgICAgICAgICAgbGV0IHBhdGggPSBgJHtrZXl9WyR7a31dYDtcbiAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiB2YWx1ZVs8YW55PmtdICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHBhdGggPSBgJHtrZXl9W11gO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuJGFwcGVuZFF1ZXJ5UGFyYW1zKHF1ZXJ5LCBwYXRoLCB2YWx1ZVtrXSwgcXVlcnlNYXBwaW5nTWV0aG9kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZTtcblxuICB9XG5cbiAgcHJvdGVjdGVkICRfc2V0UmVzb3VyY2VBY3Rpb25Jbm5lckRlZmF1bHRzKG9wdGlvbnM6IElSZXNvdXJjZUFjdGlvbklubmVyKSB7XG4gICAgY29uc3QgYWN0aW9uT3B0aW9ucyA9IG9wdGlvbnMuYWN0aW9uT3B0aW9ucztcblxuICAgIC8vIFNldHRpbmcgZGVmYXVsdCByZXF1ZXN0IG1ldGhvZFxuICAgIGlmICghYWN0aW9uT3B0aW9ucy5tZXRob2QpIHtcbiAgICAgIGFjdGlvbk9wdGlvbnMubWV0aG9kID0gUmVzb3VyY2VSZXF1ZXN0TWV0aG9kLkdldDtcbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpb25BdHRyaWJ1dGVzID0gb3B0aW9ucy5hY3Rpb25BdHRyaWJ1dGVzO1xuXG4gICAgaWYgKGFjdGlvbkF0dHJpYnV0ZXMuYm9keSkge1xuXG4gICAgICAvLyBTZXR0aW5nIGRlZmF1bHQgcmVxdWVzdCBjb250ZW50IHR5cGVcbiAgICAgIGlmICghYWN0aW9uT3B0aW9ucy5yZXF1ZXN0Qm9keVR5cGUpIHtcbiAgICAgICAgYWN0aW9uT3B0aW9ucy5yZXF1ZXN0Qm9keVR5cGUgPSBSZXNvdXJjZUhlbHBlci5nZXRSZWFsVHlwZU9mKGFjdGlvbkF0dHJpYnV0ZXMuYm9keSk7XG4gICAgICB9XG5cblxuICAgICAgLy8gU2V0dGluZyBwYXJhbXMgYW5kIHF1ZXJ5IGlmIG5lZWRlZFxuICAgICAgaWYgKGFjdGlvbk9wdGlvbnMucmVxdWVzdEJvZHlUeXBlID09PSBSZXNvdXJjZVJlcXVlc3RCb2R5VHlwZS5KU09OICYmXG4gICAgICAgIHR5cGVvZiBhY3Rpb25BdHRyaWJ1dGVzLmJvZHkgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KGFjdGlvbkF0dHJpYnV0ZXMuYm9keSkpIHtcblxuICAgICAgICBpZiAoIWFjdGlvbkF0dHJpYnV0ZXMucGFyYW1zKSB7XG4gICAgICAgICAgYWN0aW9uQXR0cmlidXRlcy5wYXJhbXMgPSBhY3Rpb25BdHRyaWJ1dGVzLmJvZHk7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLmlzTW9kZWwgPSAhIWFjdGlvbkF0dHJpYnV0ZXMuYm9keS4kcmVzb3VyY2U7XG5cbiAgICAgIH1cblxuICAgIH1cblxuICAgIGFjdGlvbkF0dHJpYnV0ZXMucGFyYW1zID0gYWN0aW9uQXR0cmlidXRlcy5wYXJhbXMgfHwge307XG5cbiAgICBpZiAoIWFjdGlvbkF0dHJpYnV0ZXMucXVlcnkgJiYgYWN0aW9uT3B0aW9ucy5tZXRob2QgPT09IFJlc291cmNlUmVxdWVzdE1ldGhvZC5HZXQpIHtcbiAgICAgIGFjdGlvbkF0dHJpYnV0ZXMucXVlcnkgPSBhY3Rpb25BdHRyaWJ1dGVzLnBhcmFtcztcbiAgICB9XG5cbiAgICBvcHRpb25zLnF1ZXJ5TWFwcGluZ01ldGhvZCA9IGFjdGlvbk9wdGlvbnMucXVlcnlNYXBwaW5nTWV0aG9kIHx8IFJlc291cmNlR2xvYmFsQ29uZmlnLnF1ZXJ5TWFwcGluZ01ldGhvZDtcblxuICB9XG5cbiAgcHJvdGVjdGVkICRfc2V0UmVzb3VyY2VBY3Rpb25PcHRpb25EZWZhdWx0cyhvcHRpb25zOiBJUmVzb3VyY2VBY3Rpb25Jbm5lcikge1xuXG4gICAgY29uc3QgYWN0aW9uT3B0aW9ucyA9IG9wdGlvbnMuYWN0aW9uT3B0aW9ucztcblxuICAgIGlmIChSZXNvdXJjZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChhY3Rpb25PcHRpb25zLmZpbHRlcikpIHtcbiAgICAgIGFjdGlvbk9wdGlvbnMuZmlsdGVyID0gdGhpcy4kZmlsdGVyO1xuICAgIH1cblxuICAgIGlmIChSZXNvdXJjZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChhY3Rpb25PcHRpb25zLm1hcCkpIHtcbiAgICAgIGFjdGlvbk9wdGlvbnMubWFwID0gdGhpcy4kbWFwO1xuICAgIH1cblxuICAgIGlmIChSZXNvdXJjZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChhY3Rpb25PcHRpb25zLnJlc3VsdEZhY3RvcnkpKSB7XG4gICAgICBhY3Rpb25PcHRpb25zLnJlc3VsdEZhY3RvcnkgPSB0aGlzLiRyZXN1bHRGYWN0b3J5O1xuICAgIH1cblxuICAgIGlmIChSZXNvdXJjZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChhY3Rpb25PcHRpb25zLnJlbW92ZVRyYWlsaW5nU2xhc2gpKSB7XG4gICAgICBhY3Rpb25PcHRpb25zLnJlbW92ZVRyYWlsaW5nU2xhc2ggPSBSZXNvdXJjZUdsb2JhbENvbmZpZy5yZW1vdmVUcmFpbGluZ1NsYXNoO1xuICAgIH1cblxuICAgIGlmIChSZXNvdXJjZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChhY3Rpb25PcHRpb25zLndpdGhDcmVkZW50aWFscykpIHtcbiAgICAgIGFjdGlvbk9wdGlvbnMud2l0aENyZWRlbnRpYWxzID0gUmVzb3VyY2VHbG9iYWxDb25maWcud2l0aENyZWRlbnRpYWxzO1xuICAgIH1cblxuICAgIGlmIChSZXNvdXJjZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChhY3Rpb25PcHRpb25zLmFzUHJvbWlzZSkpIHtcbiAgICAgIGFjdGlvbk9wdGlvbnMuYXNQcm9taXNlID0gUmVzb3VyY2VHbG9iYWxDb25maWcuYXNQcm9taXNlO1xuICAgIH1cblxuICAgIGlmIChSZXNvdXJjZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChhY3Rpb25PcHRpb25zLnJlc3BvbnNlQm9keVR5cGUpKSB7XG4gICAgICBhY3Rpb25PcHRpb25zLnJlc3BvbnNlQm9keVR5cGUgPSBSZXNvdXJjZUdsb2JhbENvbmZpZy5yZXNwb25zZUJvZHlUeXBlO1xuICAgIH1cblxuICAgIGlmIChSZXNvdXJjZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChhY3Rpb25PcHRpb25zLmxlYW4pKSB7XG4gICAgICBhY3Rpb25PcHRpb25zLmxlYW4gPSBSZXNvdXJjZUdsb2JhbENvbmZpZy5sZWFuO1xuXG4gICAgICBpZiAoYWN0aW9uT3B0aW9ucy5tdXRhdGVCb2R5ICYmICFhY3Rpb25PcHRpb25zLmFzUHJvbWlzZSAmJiBSZXNvdXJjZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChhY3Rpb25PcHRpb25zLmxlYW4pKSB7XG4gICAgICAgIGFjdGlvbk9wdGlvbnMubGVhbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKFJlc291cmNlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKGFjdGlvbk9wdGlvbnMuYWRkVGltZXN0YW1wKSkge1xuICAgICAgYWN0aW9uT3B0aW9ucy5hZGRUaW1lc3RhbXAgPSBSZXNvdXJjZUdsb2JhbENvbmZpZy5hZGRUaW1lc3RhbXA7XG5cbiAgICAgIGlmIChhY3Rpb25PcHRpb25zLmFkZFRpbWVzdGFtcCAmJiB0eXBlb2YgYWN0aW9uT3B0aW9ucy5hZGRUaW1lc3RhbXAgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGFjdGlvbk9wdGlvbnMuYWRkVGltZXN0YW1wID0gJ3RzJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgJF9zZXRSZXNvbHZlZE9wdGlvbnMob3B0aW9uczogSVJlc291cmNlQWN0aW9uSW5uZXIpOiBQcm9taXNlPElSZXNvdXJjZUFjdGlvbklubmVyPiB7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMuJGdldFVybChvcHRpb25zLmFjdGlvbk9wdGlvbnMpLFxuICAgICAgdGhpcy4kZ2V0UGF0aFByZWZpeChvcHRpb25zLmFjdGlvbk9wdGlvbnMpLFxuICAgICAgdGhpcy4kZ2V0UGF0aChvcHRpb25zLmFjdGlvbk9wdGlvbnMpLFxuICAgICAgdGhpcy4kZ2V0SGVhZGVycyhvcHRpb25zLmFjdGlvbk9wdGlvbnMpLFxuICAgICAgdGhpcy4kZ2V0Qm9keShvcHRpb25zLmFjdGlvbk9wdGlvbnMpLFxuICAgICAgdGhpcy4kZ2V0UGFyYW1zKG9wdGlvbnMuYWN0aW9uT3B0aW9ucyksXG4gICAgICB0aGlzLiRnZXRRdWVyeShvcHRpb25zLmFjdGlvbk9wdGlvbnMpXG4gICAgXSlcbiAgICAgIC50aGVuKChyZXNvbHZlZE1haW46IGFueVtdKSA9PiB7XG4gICAgICAgIG9wdGlvbnMucmVzb2x2ZWRPcHRpb25zID0ge307XG4gICAgICAgIGNvbnN0IHIgPSBvcHRpb25zLnJlc29sdmVkT3B0aW9ucztcbiAgICAgICAgW3IudXJsLCByLnBhdGhQcmVmaXgsIHIucGF0aCwgci5oZWFkZXJzLCByLmJvZHksIHIucGFyYW1zLCByLnF1ZXJ5XSA9IHJlc29sdmVkTWFpbjtcblxuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJvdGVjdGVkICRfY3JlYXRlUmVxdWVzdE9wdGlvbnMob3B0aW9uczogSVJlc291cmNlQWN0aW9uSW5uZXIpOiBJUmVzb3VyY2VBY3Rpb25Jbm5lciB8IFByb21pc2U8SVJlc291cmNlQWN0aW9uSW5uZXI+IHtcblxuICAgIG9wdGlvbnMucmVxdWVzdE9wdGlvbnMgPSB7fTtcblxuICAgIC8vIFN0ZXAgMSBzZXQgbWFpblxuICAgIG9wdGlvbnMucmVxdWVzdE9wdGlvbnMubWV0aG9kID0gb3B0aW9ucy5hY3Rpb25PcHRpb25zLm1ldGhvZDtcbiAgICBvcHRpb25zLnJlcXVlc3RPcHRpb25zLmhlYWRlcnMgPSBvcHRpb25zLnJlc29sdmVkT3B0aW9ucy5oZWFkZXJzO1xuICAgIG9wdGlvbnMucmVxdWVzdE9wdGlvbnMud2l0aENyZWRlbnRpYWxzID0gb3B0aW9ucy5hY3Rpb25PcHRpb25zLndpdGhDcmVkZW50aWFscztcbiAgICBvcHRpb25zLnJlcXVlc3RPcHRpb25zLnJlc3BvbnNlQm9keVR5cGUgPSBvcHRpb25zLmFjdGlvbk9wdGlvbnMucmVzcG9uc2VCb2R5VHlwZTtcbiAgICBvcHRpb25zLnJlcXVlc3RPcHRpb25zLnJlcXVlc3RCb2R5VHlwZSA9IG9wdGlvbnMuYWN0aW9uT3B0aW9ucy5yZXF1ZXN0Qm9keVR5cGU7XG5cbiAgICAvLyBTdGVwIDIgY3JlYXRlIHVybFxuICAgIHRoaXMuJHNldFJlcXVlc3RPcHRpb25zVXJsKG9wdGlvbnMpO1xuXG4gICAgLy8gU3RlcCAzIGNyZWF0ZSBib2R5XG4gICAgdGhpcy4kc2V0UmVxdWVzdE9wdGlvbnNCb2R5KG9wdGlvbnMpO1xuXG4gICAgLy8gU3RlcCA0IHNldCBxdWVyeSBwYXJhbXNcbiAgICB0aGlzLiRzZXRSZXF1ZXN0T3B0aW9uc1F1ZXJ5KG9wdGlvbnMpO1xuXG4gICAgcmV0dXJuIG9wdGlvbnM7XG4gIH1cblxuICBwcm90ZWN0ZWQgJF9jYW5TZXRJbnRlcm5hbERhdGEob3B0aW9uczogSVJlc291cmNlQWN0aW9uSW5uZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gb3B0aW9ucy5yZXR1cm5EYXRhICYmICghb3B0aW9ucy5hY3Rpb25PcHRpb25zLmxlYW4gfHwgb3B0aW9ucy5pc01vZGVsKTtcbiAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVzb3VyY2UudHMiLCJpbXBvcnQgeyBSZXNvdXJjZVF1ZXJ5TWFwcGluZ01ldGhvZCwgUmVzb3VyY2VSZXNwb25zZUJvZHlUeXBlIH0gZnJvbSAnLi9EZWNsYXJhdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VHbG9iYWxDb25maWcge1xuICBzdGF0aWMgdXJsOiBzdHJpbmcgfCBQcm9taXNlPHN0cmluZz4gPSBudWxsO1xuICBzdGF0aWMgcGF0aFByZWZpeDogc3RyaW5nIHwgUHJvbWlzZTxzdHJpbmc+ID0gbnVsbDtcbiAgc3RhdGljIHBhdGg6IHN0cmluZyB8IFByb21pc2U8c3RyaW5nPiA9IG51bGw7XG4gIHN0YXRpYyBoZWFkZXJzOiBhbnkgfCBQcm9taXNlPGFueT4gPSBudWxsO1xuICBzdGF0aWMgYm9keTogYW55IHwgUHJvbWlzZTxhbnk+ID0gbnVsbDtcbiAgc3RhdGljIHBhcmFtczogYW55IHwgUHJvbWlzZTxhbnk+ID0gbnVsbDtcbiAgc3RhdGljIHF1ZXJ5OiBhbnkgfCBQcm9taXNlPGFueT4gPSBudWxsO1xuXG4gIHN0YXRpYyByZW1vdmVUcmFpbGluZ1NsYXNoOiBib29sZWFuID0gdHJ1ZTtcbiAgc3RhdGljIGFkZFRpbWVzdGFtcDogYm9vbGVhbiB8IHN0cmluZyA9IGZhbHNlO1xuICBzdGF0aWMgd2l0aENyZWRlbnRpYWxzOiBib29sZWFuID0gZmFsc2U7XG4gIHN0YXRpYyBsZWFuOiBib29sZWFuID0gbnVsbDtcbiAgc3RhdGljIGFzUHJvbWlzZTogYm9vbGVhbiA9IHRydWU7XG4gIC8vIHN0YXRpYyB0b09ic2VydmFibGU6IGJvb2xlYW4gPSBudWxsO1xuICBzdGF0aWMgcmVzcG9uc2VCb2R5VHlwZTogUmVzb3VyY2VSZXNwb25zZUJvZHlUeXBlID0gUmVzb3VyY2VSZXNwb25zZUJvZHlUeXBlLkpzb247XG5cblxuICBzdGF0aWMgcXVlcnlNYXBwaW5nTWV0aG9kOiBSZXNvdXJjZVF1ZXJ5TWFwcGluZ01ldGhvZCA9IFJlc291cmNlUXVlcnlNYXBwaW5nTWV0aG9kLlBsYWluO1xuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVzb3VyY2VHbG9iYWxDb25maWcudHMiLCJpbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4vUmVzb3VyY2UnO1xuaW1wb3J0IHsgSVJlc291cmNlQWN0aW9uLCBSZXNvdXJjZVJlcXVlc3RNZXRob2QgfSBmcm9tICcuL0RlY2xhcmF0aW9ucyc7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIFJlc291cmNlQWN0aW9uKG1ldGhvZE9wdGlvbnM/OiBJUmVzb3VyY2VBY3Rpb24pIHtcblxuICBtZXRob2RPcHRpb25zID0gbWV0aG9kT3B0aW9ucyB8fCB7fTtcblxuICBpZiAobWV0aG9kT3B0aW9ucy5tZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgIG1ldGhvZE9wdGlvbnMubWV0aG9kID0gUmVzb3VyY2VSZXF1ZXN0TWV0aG9kLkdldDtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBSZXNvdXJjZSwgcHJvcGVydHlLZXk6IHN0cmluZykge1xuXG4gICAgKDxhbnk+dGFyZ2V0KVtwcm9wZXJ0eUtleV0gPSBmdW5jdGlvbiAoLi4uYXJnczogYW55W10pOiBhbnkge1xuXG4gICAgICBjb25zdCBjYWxsYmFja3M6IGFueSA9IGFyZ3MuZmlsdGVyKChhcmc6IGFueSkgPT4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJyk7XG4gICAgICBjb25zdCBkYXRhOiBhbnkgPSBhcmdzLmZpbHRlcigoYXJnOiBhbnkpICA9PiB0eXBlb2YgYXJnICE9PSAnZnVuY3Rpb24nKTtcblxuICAgICAgY29uc3QgYm9keTogYW55ID0gZGF0YVswXTtcbiAgICAgIGNvbnN0IHF1ZXJ5OiBhbnkgPSBkYXRhWzFdO1xuICAgICAgY29uc3QgcGFyYW1zOiBhbnkgPSBkYXRhWzJdO1xuICAgICAgY29uc3Qgb25TdWNjZXNzOiBhbnkgPSBjYWxsYmFja3NbMF07XG4gICAgICBjb25zdCBvbkVycm9yOiBhbnkgPSBjYWxsYmFja3NbMV07XG5cblxuICAgICAgLy90c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW52YWxpZC10aGlzXG4gICAgICBjb25zdCBhY3Rpb25PcHRpb25zOiBJUmVzb3VyY2VBY3Rpb24gPSB7Li4udGhpcy5nZXRSZXNvdXJjZU9wdGlvbnMoKSwgLi4ubWV0aG9kT3B0aW9uc307XG5cblxuICAgICAgLy90c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8taW52YWxpZC10aGlzXG4gICAgICByZXR1cm4gdGhpcy4kcmVzdEFjdGlvbih7YWN0aW9uQXR0cmlidXRlczoge2JvZHksIHF1ZXJ5LCBwYXJhbXMsIG9uU3VjY2Vzcywgb25FcnJvcn0sIGFjdGlvbk9wdGlvbnN9KTtcblxuICAgIH07XG5cbiAgfTtcblxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL1Jlc291cmNlQWN0aW9uLnRzIiwiZXhwb3J0ICogZnJvbSAnLi9zcmMvRGVjbGFyYXRpb25zJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlQWN0aW9uJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlR2xvYmFsQ29uZmlnJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlSGFuZGxlcic7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZUhlbHBlcic7XG5leHBvcnQgKiBmcm9tICcuL3NyYy9SZXNvdXJjZU1vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlUGFyYW1zJztcbmV4cG9ydCAqIGZyb20gJy4vc3JjL1Jlc291cmNlQ29tbW9uL1Jlc291cmNlQ1JVRCc7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC50cyIsImltcG9ydCB7IElSZXNvdXJjZUhhbmRsZXJSZXNwb25zZSwgSVJlc291cmNlUmVxdWVzdCB9IGZyb20gJy4vRGVjbGFyYXRpb25zJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlc291cmNlSGFuZGxlciB7XG4gIGFic3RyYWN0IGhhbmRsZShyZXE6IElSZXNvdXJjZVJlcXVlc3QpOiBJUmVzb3VyY2VIYW5kbGVyUmVzcG9uc2U7XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVzb3VyY2VIYW5kbGVyLnRzIiwiaW1wb3J0IHsgUmVzb3VyY2VDUlVEIH0gZnJvbSAnLi9SZXNvdXJjZUNvbW1vbi9SZXNvdXJjZUNSVUQnO1xuaW1wb3J0IHsgUmVzb3VyY2VIZWxwZXIgfSBmcm9tICcuL1Jlc291cmNlSGVscGVyJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlc291cmNlTW9kZWwge1xuXG4gIHN0YXRpYyByZXNvdXJjZUluc3RhbmNlOiBSZXNvdXJjZUNSVUQ8YW55LCBhbnksIGFueT4gPSBudWxsO1xuXG4gIHByb3RlY3RlZCBzdGF0aWMgbWV0aG9kUXVlcnk6IHN0cmluZyA9ICdxdWVyeSc7XG4gIHByb3RlY3RlZCBzdGF0aWMgbWV0aG9kR2V0OiBzdHJpbmcgPSAnZ2V0JztcbiAgcHJvdGVjdGVkIHN0YXRpYyBtZXRob2RDcmVhdGU6IHN0cmluZyA9ICdjcmVhdGUnO1xuICBwcm90ZWN0ZWQgc3RhdGljIG1ldGhvZFVwZGF0ZTogc3RyaW5nID0gJ3VwZGF0ZSc7XG4gIHByb3RlY3RlZCBzdGF0aWMgbWV0aG9kUmVtb3ZlOiBzdHJpbmcgPSAncmVtb3ZlJztcblxuICBzdGF0aWMgZ2V0KGlkOiBzdHJpbmcgfCBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlKClbdGhpcy5tZXRob2RHZXRdKHtpZH0pO1xuICB9XG5cbiAgc3RhdGljIHF1ZXJ5KHF1ZXJ5PzogYW55KTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5nZXRJbnN0YW5jZSgpW3RoaXMubWV0aG9kUXVlcnldKHF1ZXJ5KTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmUoaWQ6IHN0cmluZyB8IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlKClbdGhpcy5tZXRob2RSZW1vdmVdKHtpZH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogYW55IHtcbiAgICBpZiAoIXRoaXMucmVzb3VyY2VJbnN0YW5jZSkge1xuXG4gICAgICBjb25zdCBtb2RlbDogUmVzb3VyY2VNb2RlbCA9IChuZXcgKHRoaXMgYXMgYW55KSgpKTtcblxuICAgICAgaWYgKCFtb2RlbC4kcmVzb3VyY2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3VyIHJlc291cmNlIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICB9XG5cbiAgICAgIGlmICghbW9kZWwuJHJlc291cmNlLmluc3RhbmNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91ciByZXNvdXJjZSBpcyBub3QgY3JlYXRlZCAoaW5qZWN0IGl0IHNvbWV3aGVyZSknKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZXNvdXJjZUluc3RhbmNlID0gKG5ldyAodGhpcyBhcyBhbnkpKCkpLiRyZXNvdXJjZS5pbnN0YW5jZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZUluc3RhbmNlO1xuICB9XG5cbiAgYWJzdHJhY3QgcmVhZG9ubHkgJHJlc291cmNlOiBhbnkgPSBudWxsO1xuXG4gICRyZXNvbHZlZDogYm9vbGVhbiA9IHRydWU7XG4gICRwcm9taXNlOiBQcm9taXNlPGFueT4gPSBudWxsO1xuICAkYWJvcnQ6ICgpID0+IHZvaWQ7XG5cblxuICBwdWJsaWMgJHNldERhdGEoZGF0YTogYW55KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljICRzYXZlKHF1ZXJ5PzogYW55LCBwYXJhbXM/OiBhbnkpIHtcblxuICAgIGlmICh0aGlzLmlzTmV3KCkpIHtcbiAgICAgIHJldHVybiB0aGlzLiRjcmVhdGUocXVlcnksIHBhcmFtcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLiR1cGRhdGUocXVlcnksIHBhcmFtcyk7XG4gICAgfVxuXG4gIH1cblxuICBwdWJsaWMgJGNyZWF0ZShxdWVyeT86IGFueSwgcGFyYW1zPzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuJGV4ZWN1dGVSZXNvdXJjZU1ldGhvZCgodGhpcy5jb25zdHJ1Y3RvciBhcyBhbnkpLm1ldGhvZENyZWF0ZSwgcXVlcnksIHBhcmFtcyk7XG4gIH1cblxuICBwdWJsaWMgJHVwZGF0ZShxdWVyeT86IGFueSwgcGFyYW1zPzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuJGV4ZWN1dGVSZXNvdXJjZU1ldGhvZCgodGhpcy5jb25zdHJ1Y3RvciBhcyBhbnkpLm1ldGhvZFVwZGF0ZSwgcXVlcnksIHBhcmFtcyk7XG4gIH1cblxuICBwdWJsaWMgJHJlbW92ZShxdWVyeT86IGFueSwgcGFyYW1zPzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuJGV4ZWN1dGVSZXNvdXJjZU1ldGhvZCgodGhpcy5jb25zdHJ1Y3RvciBhcyBhbnkpLm1ldGhvZFJlbW92ZSwgcXVlcnksIHBhcmFtcyk7XG4gIH1cblxuICBwdWJsaWMgdG9KU09OKCk6IGFueSB7XG4gICAgcmV0dXJuIFJlc291cmNlSGVscGVyLmNsZWFuRGF0YSh0aGlzKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBpc05ldygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISg8YW55PnRoaXMpWydpZCddO1xuICB9XG5cbiAgcHJvdGVjdGVkICRnZXRSZXNvdXJjZVdpdGhNZXRob2RDaGVjayhtZXRob2ROYW1lOiBzdHJpbmcpOiBhbnkge1xuXG4gICAgaWYgKCF0aGlzLiRyZXNvdXJjZSkge1xuICAgICAgY29uc29sZS5lcnJvcihgWW91ciBSZXNvdXJjZSBpcyBub3QgZGVmaW5lZGApO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCByZXN0SW5zdGFuY2UgPSB0aGlzLiRyZXNvdXJjZS5pbnN0YW5jZTtcblxuICAgIGlmICghcmVzdEluc3RhbmNlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBZb3VyIFJlc291cmNlIGlzIG5vdCBkZWZpbmVkIG9yIG5vdCBjcmVhdGVkYCk7XG5cbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICghcmVzdEluc3RhbmNlW21ldGhvZE5hbWVdKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBZb3VyIFJlc291cmNlIGhhcyBubyBpbXBsZW1lbnRlZCAke21ldGhvZE5hbWV9IG1ldGhvZC5gKTtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3RJbnN0YW5jZTtcblxuICB9XG5cbiAgcHJvdGVjdGVkICRleGVjdXRlUmVzb3VyY2VNZXRob2QobWV0aG9kTmFtZTogc3RyaW5nLCBxdWVyeT86IGFueSwgcGFyYW1zPzogYW55KSB7XG5cbiAgICBjb25zdCByZXNvdXJjZSA9IHRoaXMuJGdldFJlc291cmNlV2l0aE1ldGhvZENoZWNrKG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKHJlc291cmNlKSB7XG4gICAgICByZXNvdXJjZVttZXRob2ROYW1lXSh0aGlzLCBxdWVyeSwgcGFyYW1zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZXNvdXJjZU1vZGVsLnRzIiwiaW1wb3J0IHsgSVJlc291cmNlUGFyYW1zIH0gZnJvbSAnLi9EZWNsYXJhdGlvbnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gUmVzb3VyY2VQYXJhbXMocGFyYW1zOiBJUmVzb3VyY2VQYXJhbXMgPSB7fSkge1xuXG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0OiBhbnkpIHtcblxuICAgIHRhcmdldC5wcm90b3R5cGUuZ2V0UmVzb3VyY2VPcHRpb25zID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHBhcmFtcztcbiAgICB9O1xuXG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvUmVzb3VyY2VQYXJhbXMudHMiLCJpbXBvcnQgeyBSZXNvdXJjZSB9IGZyb20gJy4uL1Jlc291cmNlJztcbmltcG9ydCB7IFJlc291cmNlQWN0aW9uIH0gZnJvbSAnLi4vUmVzb3VyY2VBY3Rpb24nO1xuaW1wb3J0IHsgSVJlc291cmNlTWV0aG9kLCBSZXNvdXJjZVJlcXVlc3RNZXRob2QgfSBmcm9tICcuLi9EZWNsYXJhdGlvbnMnO1xuXG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZXNvdXJjZUNSVUQ8VFF1ZXJ5LCBUU2hvcnQsIFRGdWxsPiBleHRlbmRzIFJlc291cmNlIHtcblxuICBAUmVzb3VyY2VBY3Rpb24oKVxuICBxdWVyeTogSVJlc291cmNlTWV0aG9kPFRRdWVyeSwgVFNob3J0W10+O1xuXG4gIEBSZXNvdXJjZUFjdGlvbih7XG4gICAgcGF0aDogJy97IWlkfSdcbiAgfSlcbiAgZ2V0OiBJUmVzb3VyY2VNZXRob2Q8eyBpZDogYW55IH0sIFRGdWxsPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIG1ldGhvZDogUmVzb3VyY2VSZXF1ZXN0TWV0aG9kLlBvc3RcbiAgfSlcbiAgc2F2ZTogSVJlc291cmNlTWV0aG9kPFRGdWxsLCBURnVsbD47XG5cbiAgQFJlc291cmNlQWN0aW9uKHtcbiAgICBtZXRob2Q6IFJlc291cmNlUmVxdWVzdE1ldGhvZC5QdXQsXG4gICAgcGF0aDogJy97IWlkfSdcbiAgfSlcbiAgdXBkYXRlOiBJUmVzb3VyY2VNZXRob2Q8VEZ1bGwsIFRGdWxsPjtcblxuICBAUmVzb3VyY2VBY3Rpb24oe1xuICAgIG1ldGhvZDogUmVzb3VyY2VSZXF1ZXN0TWV0aG9kLkRlbGV0ZSxcbiAgICBwYXRoOiAnL3shaWR9J1xuICB9KVxuICByZW1vdmU6IElSZXNvdXJjZU1ldGhvZDx7IGlkOiBhbnkgfSwgYW55PjtcblxuICAvLyBBbGlhcyB0byBzYXZlXG4gIGNyZWF0ZShkYXRhOiBURnVsbCwgY2FsbGJhY2s/OiAocmVzOiBURnVsbCkgPT4gYW55KTogUHJvbWlzZTxURnVsbD4ge1xuICAgIHJldHVybiB0aGlzLnNhdmUoZGF0YSwgY2FsbGJhY2spO1xuICB9XG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9SZXNvdXJjZUNvbW1vbi9SZXNvdXJjZUNSVUQudHMiXSwic291cmNlUm9vdCI6IiJ9