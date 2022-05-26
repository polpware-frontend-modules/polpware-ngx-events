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
/** @nocollapse */ PolpNgxEventsModule.ɵfac = function PolpNgxEventsModule_Factory(t) { return new (t || PolpNgxEventsModule)(i0.ɵɵinject(PolpNgxEventsModule, 12)); };
/** @nocollapse */ PolpNgxEventsModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: PolpNgxEventsModule });
/** @nocollapse */ PolpNgxEventsModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PolpNgxEventsModule, [{
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PolpNgxEventsModule, { imports: [CommonModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV2ZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9uZ3gtZXZlbnRzL3NyYy9saWIvbmd4LWV2ZW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNrQixRQUFRLEVBQzdCLFFBQVEsRUFBRSxRQUFRLEVBQ3JCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFRdkUsTUFBTSxPQUFPLG1CQUFtQjtJQUM1QixZQUFvQyxZQUFpQztRQUNqRSxJQUFJLFlBQVksRUFBRTtZQUNkLE1BQU0sSUFBSSxLQUFLLENBQ1gsbUZBQW1GLENBQUMsQ0FBQztTQUM1RjtJQUNMLENBQUM7SUFFRCxNQUFNLENBQUMsT0FBTztRQUNWLE9BQU87WUFDSCxRQUFRLEVBQUUsbUJBQW1CO1lBQzdCLFNBQVMsRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQ25DLENBQUM7SUFDTixDQUFDOzt5R0FiUSxtQkFBbUIsY0FDc0IsbUJBQW1CO29HQUQ1RCxtQkFBbUI7d0dBSm5CO1lBQ0wsWUFBWTtTQUNmO3VGQUVRLG1CQUFtQjtjQU4vQixRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRTtvQkFDTCxZQUFZO2lCQUNmO2FBQ0o7c0NBRXFELG1CQUFtQjtzQkFBeEQsUUFBUTs7c0JBQUksUUFBUTs7d0ZBRHhCLG1CQUFtQixjQUh4QixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSxcbiAgICBPcHRpb25hbCwgU2tpcFNlbGZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBHbG9iYWxFdmVudHNTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9nbG9iYWwtZXZlbnRzLnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW10sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGVcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFBvbHBOZ3hFdmVudHNNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogUG9scE5neEV2ZW50c01vZHVsZSkge1xuICAgICAgICBpZiAocGFyZW50TW9kdWxlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgJ1BvbHBOZ3hFdmVudHNNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQgYW5kIHBsZWFzZSBpbXBvcnQgaXQgaW4gdGhlIEFwcE1vZHVsZSBvbmx5LicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxQb2xwTmd4RXZlbnRzTW9kdWxlPiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZ01vZHVsZTogUG9scE5neEV2ZW50c01vZHVsZSxcbiAgICAgICAgICAgIHByb3ZpZGVyczogW0dsb2JhbEV2ZW50c1NlcnZpY2VdXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19