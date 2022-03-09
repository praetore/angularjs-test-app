'use strict';

import * as angular from "angular";
import {app} from "../app";

app.config(['$routeProvider', function($routeProvider: angular.route.IRouteProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);