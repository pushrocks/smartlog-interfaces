export type TLogLevel = 'error' | 'warn' | 'info' | 'verbose' | 'debug' | 'silly';
export type TEnvironment = 'local' | 'test' | 'staging' | 'production';
export type TRuntime = 'node' | 'browser';

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
  logLevel: TLogLevel
  message: string;
}

export interface ILogDestination {
  handleLog: (ILogPackage) => void;
}
