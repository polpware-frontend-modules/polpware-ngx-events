import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalEventsService } from './services/global-events.service';
import * as i0 from "@angular/core";
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
    /** @nocollapse */ PolpNgxEventsModule.ɵmod = i0.ɵɵdefineNgModule({ type: PolpNgxEventsModule });
    /** @nocollapse */ PolpNgxEventsModule.ɵinj = i0.ɵɵdefineInjector({ factory: function PolpNgxEventsModule_Factory(t) { return new (t || PolpNgxEventsModule)(i0.ɵɵinject(PolpNgxEventsModule, 12)); }, imports: [[
                CommonModule
            ]] });
    return PolpNgxEventsModule;
}());
export { PolpNgxEventsModule };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV2ZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcG9scHdhcmUvbmd4LWV2ZW50cy8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtZXZlbnRzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ2tCLFFBQVEsRUFDN0IsUUFBUSxFQUFFLFFBQVEsRUFDckIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDOztBQUV2RTtJQU9JLDZCQUFvQyxZQUFpQztRQUNqRSxJQUFJLFlBQVksRUFBRTtZQUNkLE1BQU0sSUFBSSxLQUFLLENBQ1gsbUZBQW1GLENBQUMsQ0FBQztTQUM1RjtJQUNMLENBQUM7SUFFTSwyQkFBTyxHQUFkO1FBQ0ksT0FBTztZQUNILFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFLENBQUMsbUJBQW1CLENBQUM7U0FDbkMsQ0FBQztJQUNOLENBQUM7OEVBYlEsbUJBQW1COzRJQUFuQixtQkFBbUIsY0FDc0IsbUJBQW1CLHFCQUw1RDtnQkFDTCxZQUFZO2FBQ2Y7OEJBWkw7Q0E0QkMsQUFwQkQsSUFvQkM7U0FkWSxtQkFBbUI7d0ZBQW5CLG1CQUFtQixjQUh4QixZQUFZO2tEQUdQLG1CQUFtQjtjQU4vQixRQUFRO2VBQUM7Z0JBQ04sWUFBWSxFQUFFLEVBQUU7Z0JBQ2hCLE9BQU8sRUFBRTtvQkFDTCxZQUFZO2lCQUNmO2FBQ0o7c0NBRXFELG1CQUFtQjtzQkFBeEQsUUFBUTs7c0JBQUksUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsXG4gICAgT3B0aW9uYWwsIFNraXBTZWxmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgR2xvYmFsRXZlbnRzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZ2xvYmFsLWV2ZW50cy5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQb2xwTmd4RXZlbnRzTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IFBvbHBOZ3hFdmVudHNNb2R1bGUpIHtcbiAgICAgICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdQb2xwTmd4RXZlbnRzTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkIGFuZCBwbGVhc2UgaW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seS4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IFBvbHBOZ3hFdmVudHNNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtHbG9iYWxFdmVudHNTZXJ2aWNlXVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==