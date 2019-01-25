export interface FunctionSignature {
    name: string;
    args: any[];
    callback?: () => void;
}
export declare class GlobalEventsService {
    private _listeners;
    private _subject;
    constructor();
    on(name: string, listener: any): void;
    off(name: string, listener?: any): void;
    broadcast(name: string, args?: any[], callback?: () => void): void;
}
