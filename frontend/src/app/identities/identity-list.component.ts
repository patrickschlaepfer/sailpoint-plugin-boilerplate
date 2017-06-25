interface IIdentityListController {
    vehicles: any;
    setVehicles(): void;
}

export class IdentityListController implements IIdentityListController {
  static componentName: string = 'IdentityListController';

    vehicles: any;

    static $inject = ['IdentitiesService'];
    constructor(private vehicleMakeService: IIdentitiesService) {
        this.vehicles = {};
        this.setVehicles();
    }

    setVehicles(): void {
        this.vehicleMakeService.getVehicles().then((data) => {
        this.vehicles = data;
        console.log(this.vehicles);
        });
    }

}
