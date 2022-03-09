'use strict';

// Declare app level module which depends on views, and core components
import * as angular from "angular";
import * as angularRoute from "angular-route";

export const app = angular.module('myApp', [
    angularRoute,
]);

app.config(['$locationProvider', '$routeProvider', function (
    $locationProvider: angular.ILocationProvider,
    $routeProvider: angular.route.IRouteProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
}]);