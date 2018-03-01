export declare type TLogLevel = 'error' | 'warn' | 'info' | 'verbose' | 'debug' | 'silly';
export declare type TEnvironment = 'local' | 'test' | 'staging' | 'production';
export declare type TRuntime = 'node' | 'browser';
export interface ILogContext {
    zone?: string;
    company?: string;
    companyunit?: string;
    containerName?: string;
    environment: TEnvironment;
    runtime: TRuntime;
}
export interface ILogPackage {
    logContext: ILogContext;
    logLevel: TLogLevel;
    message: string;
}
export interface ILogDestination {
    handleLog: (logPackage: ILogPackage) => void;
}
