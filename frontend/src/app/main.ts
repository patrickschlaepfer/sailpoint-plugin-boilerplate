'use strict';

// java libs
import 'angular';
import 'angular-sanitize';
import 'angular-route';
import 'angular-ui-bootstrap';

// Vendor specific js
import {IdentityListController} from './identities/identity-list.component';

angular.module('',
[
  'ngRoute',
  'ui.bootstrap',
  'ngSanitize'
])

// Services
.service('IdentitiesService',IdentitiesService)

// Controllers
.controller('IdentityListController',IdentityListController)

.filter('',)

.config(($routeProvider: ng.Route.IRouteProvider) => {
  $routeProvider
  .when('/', {
    template: homeTpl, controller: '', controllerAs: ''
  })
});s
