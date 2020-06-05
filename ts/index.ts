import * as plugins from './smartlog-interfaces.plugins';

import * as requestInterfaces from './smartlog-interfaces.requests';

export { requestInterfaces as request };

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
export type TRuntime = 'node' | 'chrome' | 'rust' | 'deno';

/**
 * the log context e.g. what app in what version on what server
 */
export interface ILogContext {
  company?: string;
  companyunit?: string;
  containerName?: string;
  environment: TEnvironment;
  runtime: TRuntime;
  zone: string;
}

/**
 * the main logpackage
 */
export interface ILogPackage<T = unknown> {
  /**
   * a unix timestamp in milliseconds
   */
  timestamp: number;
  type: TLogType;
  context: ILogContext;
  level: TLogLevel;
  /**
   * allows grouping of log messages
   */
  correlationId: string;
  /**
   * the message to log
   */
  message: string;
  data?: T;
}

export interface ILogPackageDataRequest {
  requestCorrelationId: string;
  url: string;
  pathname: string;
  method: string;
  status: string;
}

export interface ILogPackageAuthenticated {
  auth: string;
  logPackage: ILogPackage;
}

/**
 * a destination interface for extending smartlog modules
 */
export interface ILogDestination {
  handleLog: (logPackage: ILogPackage) => void;
}
