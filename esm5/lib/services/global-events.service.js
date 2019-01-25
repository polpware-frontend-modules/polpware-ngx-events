/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
/**
 * @record
 */
export function FunctionSignature() { }
if (false) {
    /** @type {?} */
    FunctionSignature.prototype.name;
    /** @type {?} */
    FunctionSignature.prototype.args;
    /** @type {?|undefined} */
    FunctionSignature.prototype.callback;
}
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
                    for (var _b = tslib_1.__values(_this._listeners[name]), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var listener = _c.value;
                        listener.apply(void 0, tslib_1.__spread(args));
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
export { GlobalEventsService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GlobalEventsService.prototype._listeners;
    /**
     * @type {?}
     * @private
     */
    GlobalEventsService.prototype._subject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWV2ZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1ldmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ2xvYmFsLWV2ZW50cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0FBRS9CLHVDQUlDOzs7SUFIRyxpQ0FBYTs7SUFDYixpQ0FBWTs7SUFDWixxQ0FBc0I7O0FBRzFCO0lBS0k7UUFBQSxpQkFzQkM7UUFyQkcsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRTlCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUNsQyxVQUFDLElBQUk7OztnQkFDSyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7O2dCQUNoQixJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUk7O2dCQUNoQixRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVE7WUFDOUIsSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFOztvQkFDdkIsS0FBdUIsSUFBQSxLQUFBLGlCQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUEsZ0JBQUEsNEJBQUU7d0JBQXpDLElBQU0sUUFBUSxXQUFBO3dCQUNmLFFBQVEsZ0NBQUksSUFBSSxHQUFFO3FCQUNyQjs7Ozs7Ozs7O2dCQUVELElBQUksUUFBUSxFQUFFO29CQUNWLFFBQVEsRUFBRSxDQUFDO2lCQUNkO2FBQ0o7UUFDTCxDQUFDLEVBQ0QsVUFBQyxLQUFLO1FBQ04sQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDOzs7Ozs7SUFFRCxnQ0FBRTs7Ozs7SUFBRixVQUFHLElBQVksRUFBRSxRQUFRO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7Ozs7O0lBRUQsaUNBQUc7Ozs7O0lBQUgsVUFBSSxJQUFZLEVBQUUsUUFBUztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLE9BQU87U0FDVjs7WUFFSyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7O1lBQ25DLFFBQVEsR0FBRyxDQUFDLENBQUM7O1lBQ2IsS0FBSztRQUNULEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMvQyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQy9CLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ2pCLE1BQU07YUFDVDtTQUNKO1FBQ0QsSUFBSSxRQUFRLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDakIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDakM7SUFDTCxDQUFDOzs7Ozs7O0lBRUQsdUNBQVM7Ozs7OztJQUFULFVBQVUsSUFBWSxFQUFFLElBQWdCLEVBQUUsUUFBMkI7UUFBN0MscUJBQUEsRUFBQSxTQUFnQjtRQUFFLHlCQUFBLEVBQUEsZUFBMkI7UUFDakUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFDZixJQUFJLEVBQUUsSUFBSTtZQUNWLElBQUksRUFBRSxJQUFJO1lBQ1YsUUFBUSxFQUFFLFFBQVE7U0FDckIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzs7Z0JBakVKLFVBQVU7Ozs7SUFrRVgsMEJBQUM7Q0FBQSxBQWxFRCxJQWtFQztTQWpFWSxtQkFBbUI7Ozs7OztJQUM1Qix5Q0FBMkM7Ozs7O0lBQzNDLHVDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBGdW5jdGlvblNpZ25hdHVyZSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFyZ3M6IGFueVtdO1xuICAgIGNhbGxiYWNrPzogKCkgPT4gdm9pZDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdsb2JhbEV2ZW50c1NlcnZpY2Uge1xuICAgIHByaXZhdGUgX2xpc3RlbmVyczogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgICBwcml2YXRlIF9zdWJqZWN0OiBTdWJqZWN0PEZ1bmN0aW9uU2lnbmF0dXJlPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcbiAgICAgICAgdGhpcy5fc3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgICAgICAgdGhpcy5fc3ViamVjdC5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAobmV4dCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBuZXh0Lm5hbWU7XG4gICAgICAgICAgICAgICAgY29uc3QgYXJncyA9IG5leHQuYXJncztcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IG5leHQuY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMuX2xpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIoLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb24obmFtZTogc3RyaW5nLCBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzW25hbWVdLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIG9mZihuYW1lOiBzdHJpbmcsIGxpc3RlbmVyPykge1xuICAgICAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcnNbbmFtZV07XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLl9saXN0ZW5lcnNbbmFtZV07XG4gICAgICAgIGxldCBhbnlJbmRleCA9IC0xO1xuICAgICAgICBsZXQgaW5kZXg7XG4gICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGNhbGxiYWNrcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3NbaW5kZXhdID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIGFueUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFueUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShhbnlJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBicm9hZGNhc3QobmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSA9IFtdLCBjYWxsYmFjazogKCkgPT4gdm9pZCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5fc3ViamVjdC5uZXh0KHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBhcmdzOiBhcmdzLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==