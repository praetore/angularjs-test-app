'use strict';

// Declare app level module which depends on views, and core components
import * as angular from "angular";
import * as angularRoute from "angular-route";

export const app = angular.module('myApp', [
    angularRoute,
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]);

app.config(['$locationProvider', '$routeProvider', function (
    $locationProvider: angular.ILocationProvider,
    $routeProvider: angular.route.IRouteProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
}]);