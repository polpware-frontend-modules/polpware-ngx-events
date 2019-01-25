import { __values, __spread } from 'tslib';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var GlobalEventsService = /** @class */ (function () {
    function GlobalEventsService() {
        var _this = this;
        this._listeners = {};
        this._subject = new Subject();
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
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
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
        if (args === void 0) { args = []; }
        if (callback === void 0) { callback = null; }
        this._subject.next({
            name: name,
            args: args,
            callback: callback
        });
    };
    GlobalEventsService.decorators = [
        { type: Injectable }
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

export { GlobalEventsService };

//# sourceMappingURL=polpware-ngx-events.js.map