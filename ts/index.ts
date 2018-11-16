/**
 * the different available log types
 */
export type TLogType =
  | 'log'
  | 'increment'
  | 'gauge'
  | 'error'
  | 'success'
  | 'value'
  | 'finance'
  | 'compliance';

/**
 * the available log levels
 */
export type TLogLevel =
  | 'silly'
  | 'info'
  | 'debug'
  | 'note'
  | 'ok'
  | 'success'
  | 'warn'
  | 'error'
  | 'lifecycle';

/**
 * the available environments
 */
export type TEnvironment = 'local' | 'test' | 'staging' | 'production';

/**
 * the available runtimes
 */
export type TRuntime = 'node' | 'chrome' | 'rust';

export interface ILogContext {
  company?: string;
  companyunit?: string;
  containerName?: string;
  environment: TEnvironment;
  runtime: TRuntime;
  zone: string;
}

export interface ILogPackage {
  timestamp: number;
  type: TLogType;
  context: ILogContext;
  level: TLogLevel;
  message: string;
  data?: any;
}

export interface ILogPackageAuthenticated {
  auth: string;
  logPackage: ILogPackage;
}

export interface ILogDestination {
  handleLog: (logPackage: ILogPackage) => void;
}
