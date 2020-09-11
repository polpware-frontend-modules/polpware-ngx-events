import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class GlobalEventsService {
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
/** @nocollapse */ GlobalEventsService.ɵprov = i0.ɵɵdefineInjectable({ token: GlobalEventsService, factory: GlobalEventsService.ɵfac });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(GlobalEventsService, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWV2ZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1ldmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ2xvYmFsLWV2ZW50cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFTL0IsTUFBTSxPQUFPLG1CQUFtQjtJQUk1QjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUU5QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FDbEMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNMLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN2QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBQy9CLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdkIsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUMxQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztpQkFDckI7Z0JBRUQsSUFBSSxRQUFRLEVBQUU7b0JBQ1YsUUFBUSxFQUFFLENBQUM7aUJBQ2Q7YUFDSjtRQUNMLENBQUMsRUFDRCxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ1YsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDO0lBRUQsRUFBRSxDQUFDLElBQVksRUFBRSxRQUFRO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFZLEVBQUUsUUFBUztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdCLE9BQU87U0FDVjtRQUVELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEIsSUFBSSxLQUFLLENBQUM7UUFDVixLQUFLLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDL0MsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUSxFQUFFO2dCQUMvQixRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUNqQixNQUFNO2FBQ1Q7U0FDSjtRQUNELElBQUksUUFBUSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2pCLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUVELFNBQVMsQ0FBQyxJQUFZLEVBQUUsT0FBYyxFQUFFLEVBQUUsV0FBdUIsSUFBSTtRQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNmLElBQUksRUFBRSxJQUFJO1lBQ1YsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsUUFBUTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDOzt5R0FoRVEsbUJBQW1COzhFQUFuQixtQkFBbUIsV0FBbkIsbUJBQW1CO2tEQUFuQixtQkFBbUI7Y0FEL0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuZXhwb3J0IGludGVyZmFjZSBGdW5jdGlvblNpZ25hdHVyZSB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIGFyZ3M6IGFueVtdO1xuICAgIGNhbGxiYWNrPzogKCkgPT4gdm9pZDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdsb2JhbEV2ZW50c1NlcnZpY2Uge1xuICAgIHByaXZhdGUgX2xpc3RlbmVyczogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbiAgICBwcml2YXRlIF9zdWJqZWN0OiBTdWJqZWN0PEZ1bmN0aW9uU2lnbmF0dXJlPjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLl9saXN0ZW5lcnMgPSB7fTtcbiAgICAgICAgdGhpcy5fc3ViamVjdCA9IG5ldyBTdWJqZWN0KCk7XG5cbiAgICAgICAgdGhpcy5fc3ViamVjdC5hc09ic2VydmFibGUoKS5zdWJzY3JpYmUoXG4gICAgICAgICAgICAobmV4dCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBuZXh0Lm5hbWU7XG4gICAgICAgICAgICAgICAgY29uc3QgYXJncyA9IG5leHQuYXJncztcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IG5leHQuY2FsbGJhY2s7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2xpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGxpc3RlbmVyIG9mIHRoaXMuX2xpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIoLi4uYXJncyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgb24obmFtZTogc3RyaW5nLCBsaXN0ZW5lcikge1xuICAgICAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXJzW25hbWVdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzW25hbWVdLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIG9mZihuYW1lOiBzdHJpbmcsIGxpc3RlbmVyPykge1xuICAgICAgICBpZiAoIXRoaXMuX2xpc3RlbmVyc1tuYW1lXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcnNbbmFtZV07XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYWxsYmFja3MgPSB0aGlzLl9saXN0ZW5lcnNbbmFtZV07XG4gICAgICAgIGxldCBhbnlJbmRleCA9IC0xO1xuICAgICAgICBsZXQgaW5kZXg7XG4gICAgICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IGNhbGxiYWNrcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmIChjYWxsYmFja3NbaW5kZXhdID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIGFueUluZGV4ID0gaW5kZXg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFueUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgY2FsbGJhY2tzLnNwbGljZShhbnlJbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBicm9hZGNhc3QobmFtZTogc3RyaW5nLCBhcmdzOiBhbnlbXSA9IFtdLCBjYWxsYmFjazogKCkgPT4gdm9pZCA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5fc3ViamVjdC5uZXh0KHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBhcmdzOiBhcmdzLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGNhbGxiYWNrXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==