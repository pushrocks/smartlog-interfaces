export type TLogLevel =
  | "error"
  | "warn"
  | "info"
  | "verbose"
  | "debug"
  | "silly";

export interface ILogContext {
  zone?: string;
  company?: string;
  companyunit?: string;
  containerName?: string;
  environment: TEnvironment;
  runtime: TRuntime;
}

export type TEnvironment = "local" | "test" | "staging" | "production";
export type TRuntime = "node" | "browser";

export interface IHandleLogFunc {
  (logObject): void
}

export interface ILogDestination {
  handleLog: IHandleLogFunc
}