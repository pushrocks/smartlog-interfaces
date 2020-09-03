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
export type TRuntime = 'node' | 'chrome' | 'rust' | 'deno' | 'cloudflare_workers';

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

export interface ILogCorrelation {
  /**
   * a unique id for this log
   */
  id: string;
  /**
   * the type of this log
   */
  type: 'none' | 'service' | 'build' | 'infrastructure' | 'cdn';
  /**
   * the instance on which the log is created
   * use it for pinning logs to a certain instance in a cluster
   */
  instance?: string;
  /**
   * a series of logs
   */
  group?: string;
  /**
   * a log that belongs to a transaction. E.g. a Payment or a request traveling through multiple backend instances
   */
  transaction?: string;
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
  correlation: ILogCorrelation;
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

export interface ILogPackageArrayAuthenticated {
  auth: string;
  logPackages: ILogPackage[];
}

/**
 * a destination interface for extending smartlog modules
 */
export interface ILogDestination {
  handleLog: (logPackage: ILogPackage) => Promise<void>;
}
