import { __read, __spread, __values } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
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
    /** @nocollapse */ GlobalEventsService.ɵprov = i0.ɵɵdefineInjectable({ token: GlobalEventsService, factory: GlobalEventsService.ɵfac });
    return GlobalEventsService;
}());
export { GlobalEventsService };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GlobalEventsService, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWV2ZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1ldmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ2xvYmFsLWV2ZW50cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBUS9CO0lBS0k7UUFBQSxpQkFzQkM7UUFyQkcsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBRTlCLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsU0FBUyxDQUNsQyxVQUFDLElBQUk7O1lBQ0QsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN2QixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDL0IsSUFBSSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFOztvQkFDdkIsS0FBdUIsSUFBQSxLQUFBLFNBQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQSxnQkFBQSw0QkFBRTt3QkFBekMsSUFBTSxRQUFRLFdBQUE7d0JBQ2YsUUFBUSx3QkFBSSxJQUFJLEdBQUU7cUJBQ3JCOzs7Ozs7Ozs7Z0JBRUQsSUFBSSxRQUFRLEVBQUU7b0JBQ1YsUUFBUSxFQUFFLENBQUM7aUJBQ2Q7YUFDSjtRQUNMLENBQUMsRUFDRCxVQUFDLEtBQUs7UUFDTixDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFFRCxnQ0FBRSxHQUFGLFVBQUcsSUFBWSxFQUFFLFFBQVE7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsaUNBQUcsR0FBSCxVQUFJLElBQVksRUFBRSxRQUFTO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDWCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsT0FBTztTQUNWO1FBRUQsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQixJQUFJLEtBQUssQ0FBQztRQUNWLEtBQUssS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMvQyxJQUFJLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQy9CLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ2pCLE1BQU07YUFDVDtTQUNKO1FBQ0QsSUFBSSxRQUFRLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDakIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDakM7SUFDTCxDQUFDO0lBRUQsdUNBQVMsR0FBVCxVQUFVLElBQVksRUFBRSxJQUFnQixFQUFFLFFBQTJCO1FBQTdDLHFCQUFBLEVBQUEsU0FBZ0I7UUFBRSx5QkFBQSxFQUFBLGVBQTJCO1FBQ2pFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1lBQ2YsSUFBSSxFQUFFLElBQUk7WUFDVixJQUFJLEVBQUUsSUFBSTtZQUNWLFFBQVEsRUFBRSxRQUFRO1NBQ3JCLENBQUMsQ0FBQztJQUNQLENBQUM7NkdBaEVRLG1CQUFtQjtrRkFBbkIsbUJBQW1CLFdBQW5CLG1CQUFtQjs4QkFWaEM7Q0EyRUMsQUFsRUQsSUFrRUM7U0FqRVksbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FEL0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBGdW5jdGlvblNpZ25hdHVyZSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFyZ3M6IGFueVtdO1xuICAgIGNhbGxiYWNrPzogKCkgPT4gdm9pZDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdsb2JhbEV2ZW50c1NlcnZpY2Uge1xuICAgIHByaXZhdGUgX2xpc3RlbmVyczogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgICBwcml2YXRlIF9zdWJqZWN0OiBTdWJqZWN0PEZ1bmN0aW9uU2lnbmF0dXJlPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcbiAgICAgICAgdGhpcy5fc3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgICAgICAgdGhpcy5fc3ViamVjdC5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAobmV4dCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBuZXh0Lm5hbWU7XG4gICAgICAgICAgICAgICAgY29uc3QgYXJncyA9IG5leHQuYXJncztcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IG5leHQuY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMuX2xpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIoLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb24obmFtZTogc3RyaW5nLCBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzW25hbWVdLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIG9mZihuYW1lOiBzdHJpbmcsIGxpc3RlbmVyPykge1xuICAgICAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcnNbbmFtZV07XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLl9saXN0ZW5lcnNbbmFtZV07XG4gICAgICAgIGxldCBhbnlJbmRleCA9IC0xO1xuICAgICAgICBsZXQgaW5kZXg7XG4gICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGNhbGxiYWNrcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3NbaW5kZXhdID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIGFueUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFueUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShhbnlJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBicm9hZGNhc3QobmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSA9IFtdLCBjYWxsYmFjazogKCkgPT4gdm9pZCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5fc3ViamVjdC5uZXh0KHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBhcmdzOiBhcmdzLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==