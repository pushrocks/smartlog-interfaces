export declare type TLogLevel = "error" | "warn" | "info" | "verbose" | "debug" | "silly";
export interface ILogContext {
    zone?: string;
    company?: string;
    companyunit?: string;
    containerName?: string;
    environment: TEnvironment;
    runtime: TRuntime;
}
export declare type TEnvironment = "local" | "test" | "staging" | "production";
export declare type TRuntime = "node" | "browser";
export interface IHandleLogFunc {
    (logObject: any): void;
}
export interface ILogDestination {
    handleLog: IHandleLogFunc;
}
