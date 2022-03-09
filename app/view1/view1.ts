'use strict';

import * as angular from "angular";
import {app} from "../app";

app.config(['$routeProvider', function($routeProvider: angular.route.IRouteProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);