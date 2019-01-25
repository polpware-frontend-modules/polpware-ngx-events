/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class GlobalEventsService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLWV2ZW50cy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHBvbHB3YXJlL25neC1ldmVudHMvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZ2xvYmFsLWV2ZW50cy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7QUFFL0IsdUNBSUM7OztJQUhHLGlDQUFhOztJQUNiLGlDQUFZOztJQUNaLHFDQUFzQjs7QUFJMUIsTUFBTSxPQUFPLG1CQUFtQjtJQUk1QjtRQUNJLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUU5QixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDLFNBQVMsQ0FDbEMsQ0FBQyxJQUFJLEVBQUUsRUFBRTs7a0JBQ0MsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJOztrQkFDaEIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJOztrQkFDaEIsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRO1lBQzlCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdkIsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUMxQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztpQkFDckI7Z0JBRUQsSUFBSSxRQUFRLEVBQUU7b0JBQ1YsUUFBUSxFQUFFLENBQUM7aUJBQ2Q7YUFDSjtRQUNMLENBQUMsRUFDRCxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ1YsQ0FBQyxDQUNKLENBQUM7SUFDTixDQUFDOzs7Ozs7SUFFRCxFQUFFLENBQUMsSUFBWSxFQUFFLFFBQVE7UUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDOUI7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7Ozs7SUFFRCxHQUFHLENBQUMsSUFBWSxFQUFFLFFBQVM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDeEIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixPQUFPO1NBQ1Y7O2NBRUssU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDOztZQUNuQyxRQUFRLEdBQUcsQ0FBQyxDQUFDOztZQUNiLEtBQUs7UUFDVCxLQUFLLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDL0MsSUFBSSxTQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssUUFBUSxFQUFFO2dCQUMvQixRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUNqQixNQUFNO2FBQ1Q7U0FDSjtRQUNELElBQUksUUFBUSxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ2pCLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQzs7Ozs7OztJQUVELFNBQVMsQ0FBQyxJQUFZLEVBQUUsT0FBYyxFQUFFLEVBQUUsV0FBdUIsSUFBSTtRQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNmLElBQUksRUFBRSxJQUFJO1lBQ1YsSUFBSSxFQUFFLElBQUk7WUFDVixRQUFRLEVBQUUsUUFBUTtTQUNyQixDQUFDLENBQUM7SUFDUCxDQUFDOzs7WUFqRUosVUFBVTs7Ozs7Ozs7O0lBRVAseUNBQTJDOzs7OztJQUMzQyx1Q0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRnVuY3Rpb25TaWduYXR1cmUge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBhcmdzOiBhbnlbXTtcbiAgICBjYWxsYmFjaz86ICgpID0+IHZvaWQ7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHbG9iYWxFdmVudHNTZXJ2aWNlIHtcbiAgICBwcml2YXRlIF9saXN0ZW5lcnM6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG4gICAgcHJpdmF0ZSBfc3ViamVjdDogU3ViamVjdDxGdW5jdGlvblNpZ25hdHVyZT47XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5fbGlzdGVuZXJzID0ge307XG4gICAgICAgIHRoaXMuX3N1YmplY3QgPSBuZXcgU3ViamVjdCgpO1xuXG4gICAgICAgIHRoaXMuX3N1YmplY3QuYXNPYnNlcnZhYmxlKCkuc3Vic2NyaWJlKFxuICAgICAgICAgICAgKG5leHQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lID0gbmV4dC5uYW1lO1xuICAgICAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSBuZXh0LmFyZ3M7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBuZXh0LmNhbGxiYWNrO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiB0aGlzLl9saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyKC4uLmFyZ3MpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIG9uKG5hbWU6IHN0cmluZywgbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xpc3RlbmVyc1tuYW1lXS5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBvZmYobmFtZTogc3RyaW5nLCBsaXN0ZW5lcj8pIHtcbiAgICAgICAgaWYgKCF0aGlzLl9saXN0ZW5lcnNbbmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWxpc3RlbmVyKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fbGlzdGVuZXJzW25hbWVdO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2FsbGJhY2tzID0gdGhpcy5fbGlzdGVuZXJzW25hbWVdO1xuICAgICAgICBsZXQgYW55SW5kZXggPSAtMTtcbiAgICAgICAgbGV0IGluZGV4O1xuICAgICAgICBmb3IgKGluZGV4ID0gMDsgaW5kZXggPCBjYWxsYmFja3MubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2tzW2luZGV4XSA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICBhbnlJbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhbnlJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrcy5zcGxpY2UoYW55SW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYnJvYWRjYXN0KG5hbWU6IHN0cmluZywgYXJnczogYW55W10gPSBbXSwgY2FsbGJhY2s6ICgpID0+IHZvaWQgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuX3N1YmplY3QubmV4dCh7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgYXJnczogYXJncyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFja1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=