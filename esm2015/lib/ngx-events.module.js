import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalEventsService } from './services/global-events.service';
import * as i0 from "@angular/core";
export class PolpNgxEventsModule {
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
/** @nocollapse */ PolpNgxEventsModule.ɵmod = i0.ɵɵdefineNgModule({ type: PolpNgxEventsModule });
/** @nocollapse */ PolpNgxEventsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PolpNgxEventsModule_Factory(t) { return new (t || PolpNgxEventsModule)(i0.ɵɵinject(PolpNgxEventsModule, 12)); }, imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PolpNgxEventsModule, { imports: [CommonModule] }); })();
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(PolpNgxEventsModule, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV2ZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWV2ZW50cy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZXZlbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ2tCLFFBQVEsRUFDN0IsUUFBUSxFQUFFLFFBQVEsRUFDckIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQVF2RSxNQUFNLE9BQU8sbUJBQW1CO0lBQzVCLFlBQW9DLFlBQWlDO1FBQ2pFLElBQUksWUFBWSxFQUFFO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FDWCxtRkFBbUYsQ0FBQyxDQUFDO1NBQzVGO0lBQ0wsQ0FBQztJQUVELE1BQU0sQ0FBQyxPQUFPO1FBQ1YsT0FBTztZQUNILFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDbkMsQ0FBQztJQUNOLENBQUM7OzBFQWJRLG1CQUFtQjt3SUFBbkIsbUJBQW1CLGNBQ3NCLG1CQUFtQixxQkFMNUQ7WUFDTCxZQUFZO1NBQ2Y7d0ZBRVEsbUJBQW1CLGNBSHhCLFlBQVk7a0RBR1AsbUJBQW1CO2NBTi9CLFFBQVE7ZUFBQztnQkFDTixZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFO29CQUNMLFlBQVk7aUJBQ2Y7YUFDSjtzQ0FFcUQsbUJBQW1CO3NCQUF4RCxRQUFROztzQkFBSSxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSxcbiAgICBPcHRpb25hbCwgU2tpcFNlbGZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBHbG9iYWxFdmVudHNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9nbG9iYWwtZXZlbnRzLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW10sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFBvbHBOZ3hFdmVudHNNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogUG9scE5neEV2ZW50c01vZHVsZSkge1xuICAgICAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ1BvbHBOZ3hFdmVudHNNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQgYW5kIHBsZWFzZSBpbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5LicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogUG9scE5neEV2ZW50c01vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW0dsb2JhbEV2ZW50c1NlcnZpY2VdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19