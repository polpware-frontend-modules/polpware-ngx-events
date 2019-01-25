(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('@polpware/ngx-events', ['exports', '@angular/core', 'rxjs'], factory) :
    (factory((global.polpware = global.polpware || {}, global.polpware['ngx-events'] = {}),global.ng.core,global.rxjs));
}(this, (function (exports,core,rxjs) { 'use strict';

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
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GlobalEventsService = /** @class */ (function () {
        function GlobalEventsService() {
            var _this = this;
            this._listeners = {};
            this._subject = new rxjs.Subject();
            this._subject.asObservable().subscribe(function (next) {
                var e_1, _a;
                /** @type {?} */
                var name = next.name;
                /** @type {?} */
                var args = next.args;
                /** @type {?} */
                var callback = next.callback;
                if (_this._listeners[name]) {
                    try {
                        for (var _b = __values(_this._listeners[name]), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var listener = _c.value;
                            listener.apply(void 0, __spread(args));
                        }
                    }
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
                        }
                    }
                    if (callback) {
                        callback();
                    }
                }
            }, function (error) {
            });
        }
        /**
         * @param {?} name
         * @param {?} listener
         * @return {?}
         */
        GlobalEventsService.prototype.on = /**
         * @param {?} name
         * @param {?} listener
         * @return {?}
         */
            function (name, listener) {
                if (!this._listeners[name]) {
                    this._listeners[name] = [];
                }
                this._listeners[name].push(listener);
            };
        /**
         * @param {?} name
         * @param {?=} listener
         * @return {?}
         */
        GlobalEventsService.prototype.off = /**
         * @param {?} name
         * @param {?=} listener
         * @return {?}
         */
            function (name, listener) {
                if (!this._listeners[name]) {
                    return;
                }
                if (!listener) {
                    delete this._listeners[name];
                    return;
                }
                /** @type {?} */
                var callbacks = this._listeners[name];
                /** @type {?} */
                var anyIndex = -1;
                /** @type {?} */
                var index;
                for (index = 0; index < callbacks.length; index++) {
                    if (callbacks[index] === listener) {
                        anyIndex = index;
                        break;
                    }
                }
                if (anyIndex !== -1) {
                    callbacks.splice(anyIndex, 1);
                }
            };
        /**
         * @param {?} name
         * @param {?=} args
         * @param {?=} callback
         * @return {?}
         */
        GlobalEventsService.prototype.broadcast = /**
         * @param {?} name
         * @param {?=} args
         * @param {?=} callback
         * @return {?}
         */
            function (name, args, callback) {
                if (args === void 0) {
                    args = [];
                }
                if (callback === void 0) {
                    callback = null;
                }
                this._subject.next({
                    name: name,
                    args: args,
                    callback: callback
                });
            };
        GlobalEventsService.decorators = [
            { type: core.Injectable }
        ];
        /** @nocollapse */
        GlobalEventsService.ctorParameters = function () { return []; };
        return GlobalEventsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.GlobalEventsService = GlobalEventsService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=polpware-ngx-events.umd.js.map