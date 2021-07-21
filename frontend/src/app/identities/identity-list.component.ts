import {IdentitiesService} from "../shared/services/identity.service";


interface IIdentityListController {
    getIdentities():void;
}

export class IdentityListController implements IIdentityListController {
  static componentName: string = 'IdentityListController';

  static $inject: Array<string> = ['$log', IdentitiesService.serviceName]

  public getIdentities():void {}

}
