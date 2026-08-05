import * as i0 from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import * as i1 from '@angular/common';

interface FunctionSignature {
    name: string;
    args: any[];
    callback?: () => void;
}
declare class GlobalEventsService {
    private _listeners;
    private _subject;
    constructor();
    on(name: string, listener: any): void;
    off(name: string, listener?: any): void;
    broadcast(name: string, args?: any[], callback?: () => void): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GlobalEventsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<GlobalEventsService>;
}

declare class PolpNgxEventsModule {
    constructor(parentModule: PolpNgxEventsModule);
    static forRoot(): ModuleWithProviders<PolpNgxEventsModule>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PolpNgxEventsModule, [{ optional: true; skipSelf: true; }]>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<PolpNgxEventsModule, never, [typeof i1.CommonModule], never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<PolpNgxEventsModule>;
}

export { GlobalEventsService, PolpNgxEventsModule };
export type { FunctionSignature };
