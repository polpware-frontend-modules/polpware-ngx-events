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
    /** @nocollapse */ static { this.ɵfac = function PolpNgxEventsModule_Factory(t) { return new (t || PolpNgxEventsModule)(i0.ɵɵinject(PolpNgxEventsModule, 12)); }; }
    /** @nocollapse */ static { this.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: PolpNgxEventsModule }); }
    /** @nocollapse */ static { this.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ imports: [CommonModule] }); }
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PolpNgxEventsModule, [{
        type: NgModule,
        args: [{
                declarations: [],
                imports: [
                    CommonModule
                ]
            }]
    }], () => [{ type: PolpNgxEventsModule, decorators: [{
                type: Optional
            }, {
                type: SkipSelf
            }] }], null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PolpNgxEventsModule, { imports: [CommonModule] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV2ZW50cy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9wb2xwd2FyZS9uZ3gtZXZlbnRzL3NyYy9saWIvbmd4LWV2ZW50cy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNrQixRQUFRLEVBQzdCLFFBQVEsRUFBRSxRQUFRLEVBQ3JCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQzs7QUFRdkUsTUFBTSxPQUFPLG1CQUFtQjtJQUM1QixZQUFvQyxZQUFpQztRQUNqRSxJQUFJLFlBQVksRUFBRSxDQUFDO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FDWCxtRkFBbUYsQ0FBQyxDQUFDO1FBQzdGLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLE9BQU87UUFDVixPQUFPO1lBQ0gsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztTQUNuQyxDQUFDO0lBQ04sQ0FBQzt1R0FiUSxtQkFBbUI7a0dBQW5CLG1CQUFtQjtzR0FIeEIsWUFBWTs7aUZBR1AsbUJBQW1CO2NBTi9CLFFBQVE7ZUFBQztnQkFDTixZQUFZLEVBQUUsRUFBRTtnQkFDaEIsT0FBTyxFQUFFO29CQUNMLFlBQVk7aUJBQ2Y7YUFDSjs7c0JBRWdCLFFBQVE7O3NCQUFJLFFBQVE7O3dGQUR4QixtQkFBbUIsY0FIeEIsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsXG4gICAgT3B0aW9uYWwsIFNraXBTZWxmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgR2xvYmFsRXZlbnRzU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZ2xvYmFsLWV2ZW50cy5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ29tbW9uTW9kdWxlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQb2xwTmd4RXZlbnRzTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwYXJlbnRNb2R1bGU6IFBvbHBOZ3hFdmVudHNNb2R1bGUpIHtcbiAgICAgICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgICdQb2xwTmd4RXZlbnRzTW9kdWxlIGlzIGFscmVhZHkgbG9hZGVkIGFuZCBwbGVhc2UgaW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seS4nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8UG9scE5neEV2ZW50c01vZHVsZT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmdNb2R1bGU6IFBvbHBOZ3hFdmVudHNNb2R1bGUsXG4gICAgICAgICAgICBwcm92aWRlcnM6IFtHbG9iYWxFdmVudHNTZXJ2aWNlXVxuICAgICAgICB9O1xuICAgIH1cbn1cbiJdfQ==