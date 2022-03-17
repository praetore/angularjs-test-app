import template from './view1.html';

import * as angular from "angular";
import {app} from "../app";

app.config(['$routeProvider', function($routeProvider: angular.route.IRouteProvider) {
  $routeProvider.when('/view1', {
    template: template,
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);