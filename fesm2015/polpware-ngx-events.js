import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵinject, ɵɵsetNgModuleScope, NgModule, Optional, SkipSelf } from '@angular/core';
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
/** @nocollapse */ GlobalEventsService.ɵprov = ɵɵdefineInjectable({ token: GlobalEventsService, factory: GlobalEventsService.ɵfac });
/*@__PURE__*/ (function () { ɵsetClassMetadata(GlobalEventsService, [{
        type: Injectable
    }], function () { return []; }, null); })();

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
/** @nocollapse */ PolpNgxEventsModule.ɵmod = ɵɵdefineNgModule({ type: PolpNgxEventsModule });
/** @nocollapse */ PolpNgxEventsModule.ɵinj = ɵɵdefineInjector({ factory: function PolpNgxEventsModule_Factory(t) { return new (t || PolpNgxEventsModule)(ɵɵinject(PolpNgxEventsModule, 12)); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(PolpNgxEventsModule, { imports: [CommonModule] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(PolpNgxEventsModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [
                    CommonModule
                ]
            }]
    }], function () { return [{ type: PolpNgxEventsModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }]; }, null); })();

/*
 * Public API Surface of ngx-events
 */

/**
 * Generated bundle index. Do not edit.
 */

export { GlobalEventsService, PolpNgxEventsModule };
//# sourceMappingURL=polpware-ngx-events.js.map
