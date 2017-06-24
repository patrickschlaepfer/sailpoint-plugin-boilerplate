export class VehicleMakeService {

    static $inject = ['$http'];
    constructor(private $http: ng.IHttpService) {}

    getVehicles(): ng.IPromise<any> {

        return this.$http.get('https://api.edmunds.com/api/vehicle/v2/makes?state=used&year=2015&view=basic&fmt=json')
        .then(function(response) {
            return response.data;
        });
    }
}
