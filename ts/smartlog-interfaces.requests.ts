import { ILogPackageAuthenticated } from "./index";

export interface IRequest_SmartlogDestinationReceiver_Any_PostLogPackages {
  method: 'postLogPackages';
  request: {
    logPackages: ILogPackageAuthenticated[];
  };
}