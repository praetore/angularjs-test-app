'use strict';

// Declare app level module which depends on views, and core components
import * as angular from "angular";

export const app = angular.module('myApp', [
    'ngRoute',
]);

app.config(['$locationProvider', '$routeProvider', function (
    $locationProvider: angular.ILocationProvider,
    $routeProvider: angular.route.IRouteProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({redirectTo: '/view1'});
}]);