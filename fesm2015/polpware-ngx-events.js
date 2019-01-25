import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GlobalEventsService {
    constructor() {
        this._listeners = {};
        this._subject = new Subject();
        this._subject.asObservable().subscribe((next) => {
            /** @type {?} */
            const name = next.name;
            /** @type {?} */
            const args = next.args;
            /** @type {?} */
            const callback = next.callback;
            if (this._listeners[name]) {
                for (const listener of this._listeners[name]) {
                    listener(...args);
                }
                if (callback) {
                    callback();
                }
            }
        }, (error) => {
        });
    }
    /**
     * @param {?} name
     * @param {?} listener
     * @return {?}
     */
    on(name, listener) {
        if (!this._listeners[name]) {
            this._listeners[name] = [];
        }
        this._listeners[name].push(listener);
    }
    /**
     * @param {?} name
     * @param {?=} listener
     * @return {?}
     */
    off(name, listener) {
        if (!this._listeners[name]) {
            return;
        }
        if (!listener) {
            delete this._listeners[name];
            return;
        }
        /** @type {?} */
        const callbacks = this._listeners[name];
        /** @type {?} */
        let anyIndex = -1;
        /** @type {?} */
        let index;
        for (index = 0; index < callbacks.length; index++) {
            if (callbacks[index] === listener) {
                anyIndex = index;
                break;
            }
        }
        if (anyIndex !== -1) {
            callbacks.splice(anyIndex, 1);
        }
    }
    /**
     * @param {?} name
     * @param {?=} args
     * @param {?=} callback
     * @return {?}
     */
    broadcast(name, args = [], callback = null) {
        this._subject.next({
            name: name,
            args: args,
            callback: callback
        });
    }
}
GlobalEventsService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
GlobalEventsService.ctorParameters = () => [];

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