import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

class GlobalEventsService {
    constructor() {
        this._listeners = {};
        this._subject = new Subject();
        this._subject.asObservable().subscribe((next) => {
            const name = next.name;
            const args = next.args;
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
    on(name, listener) {
        if (!this._listeners[name]) {
            this._listeners[name] = [];
        }
        this._listeners[name].push(listener);
    }
    off(name, listener) {
        if (!this._listeners[name]) {
            return;
        }
        if (!listener) {
            delete this._listeners[name];
            return;
        }
        const callbacks = this._listeners[name];
        let anyIndex = -1;
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
    broadcast(name, args = [], callback = null) {
        this._subject.next({
            name: name,
            args: args,
            callback: callback
        });
    }
}
/** @nocollapse */ GlobalEventsService.ɵfac = function GlobalEventsService_Factory(t) { return new (t || GlobalEventsService)(); };
/** @nocollapse */ GlobalEventsService.ɵprov = ɵɵdefineInjectable({ token: GlobalEventsService, factory: GlobalEventsService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GlobalEventsService, [{
        type: Injectable
    }], function () { return []; }, null); })();

/*
 * Public API Surface of ngx-events
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GlobalEventsService };
//# sourceMappingURL=polpware-ngx-events.js.map
