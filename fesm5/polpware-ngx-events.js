import { __values, __spread } from 'tslib';
import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵinject, ɵɵsetNgModuleScope, NgModule, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs';
import { CommonModule } from '@angular/common';

var GlobalEventsService = /** @class */ (function () {
    function GlobalEventsService() {
        var _this = this;
        this._listeners = {};
        this._subject = new Subject();
        this._subject.asObservable().subscribe(function (next) {
            var e_1, _a;
            var name = next.name;
            var args = next.args;
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
    GlobalEventsService.prototype.on = function (name, listener) {
        if (!this._listeners[name]) {
            this._listeners[name] = [];
        }
        this._listeners[name].push(listener);
    };
    GlobalEventsService.prototype.off = function (name, listener) {
        if (!this._listeners[name]) {
            return;
        }
        if (!listener) {
            delete this._listeners[name];
            return;
        }
        var callbacks = this._listeners[name];
        var anyIndex = -1;
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
    GlobalEventsService.prototype.broadcast = function (name, args, callback) {
        if (args === void 0) { args = []; }
        if (callback === void 0) { callback = null; }
        this._subject.next({
            name: name,
            args: args,
            callback: callback
        });
    };
    /** @nocollapse */ GlobalEventsService.ɵfac = function GlobalEventsService_Factory(t) { return new (t || GlobalEventsService)(); };
    /** @nocollapse */ GlobalEventsService.ɵprov = ɵɵdefineInjectable({ token: GlobalEventsService, factory: GlobalEventsService.ɵfac });
    return GlobalEventsService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(GlobalEventsService, [{
        type: Injectable
    }], function () { return []; }, null); })();

var PolpNgxEventsModule = /** @class */ (function () {
    function PolpNgxEventsModule(parentModule) {
        if (parentModule) {
            throw new Error('PolpNgxEventsModule is already loaded and please import it in the AppModule only.');
        }
    }
    PolpNgxEventsModule.forRoot = function () {
        return {
            ngModule: PolpNgxEventsModule,
            providers: [GlobalEventsService]
        };
    };
    /** @nocollapse */ PolpNgxEventsModule.ɵmod = ɵɵdefineNgModule({ type: PolpNgxEventsModule });
    /** @nocollapse */ PolpNgxEventsModule.ɵinj = ɵɵdefineInjector({ factory: function PolpNgxEventsModule_Factory(t) { return new (t || PolpNgxEventsModule)(ɵɵinject(PolpNgxEventsModule, 12)); }, imports: [[
                CommonModule
            ]] });
    return PolpNgxEventsModule;
}());
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
