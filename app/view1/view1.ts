'use strict';

import * as angular from "angular";
import * as angularRoute from "angular-route";

angular.module('myApp.view1', [angularRoute])

.config(['$routeProvider', function($routeProvider: angular.route.IRouteProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);