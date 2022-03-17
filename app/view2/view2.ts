import template from './view2.html';

import * as angular from "angular";
import {app} from "../app";

app.config(['$routeProvider', function($routeProvider: angular.route.IRouteProvider) {
  $routeProvider.when('/view2', {
    template: template,
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);