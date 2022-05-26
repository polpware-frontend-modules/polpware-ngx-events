import * as i0 from '@angular/core';
import { Injectable, NgModule, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

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
/** @nocollapse */ GlobalEventsService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: GlobalEventsService, factory: GlobalEventsService.ɵfac });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GlobalEventsService, [{
            type: Injectable
        }], function () { return []; }, null);
})();

class PolpNgxEventsModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('PolpNgxEventsModule is already loaded and please import it in the AppModule only.');
        }
    }
    static forRoot() {
        return {
            ngModule: PolpNgxEventsModule,
            providers: [GlobalEventsService]
        };
    }
}
/** @nocollapse */ PolpNgxEventsModule.ɵfac = function PolpNgxEventsModule_Factory(t) { return new (t || PolpNgxEventsModule)(i0.ɵɵinject(PolpNgxEventsModule, 12)); };
/** @nocollapse */ PolpNgxEventsModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: PolpNgxEventsModule });
/** @nocollapse */ PolpNgxEventsModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PolpNgxEventsModule, [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        CommonModule
                    ]
                }]
        }], function () {
        return [{ type: PolpNgxEventsModule, decorators: [{
                        type: Optional
                    }, {
                        type: SkipSelf
                    }] }];
    }, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PolpNgxEventsModule, { imports: [CommonModule] }); })();

/*
 * Public API Surface of ngx-events
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GlobalEventsService, PolpNgxEventsModule };
//# sourceMappingURL=polpware-ngx-events.mjs.map
