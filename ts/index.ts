export type TLogType = 'log' | 'increment' | 'gauge' | 'error' | 'success';
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
  type: TLogType;
  context: ILogContext;
  level: TLogLevel;
  message: string;
}

export interface ILogPackageAuthenticated {
  auth: string;
  logPackage: ILogPackage;
}

export interface ILogDestination {
  handleLog: (logPackage: ILogPackage) => void;
}
