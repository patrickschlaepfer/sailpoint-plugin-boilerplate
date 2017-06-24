interface ISearchController {
    vehicles: any;
    setVehicles(): void;
}

class SearchController implements ISearchController {

    vehicles: any;

    static $inject = ['VehicleMakeService'];
    constructor(private vehicleMakeService: VehicleMakeService) {
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
