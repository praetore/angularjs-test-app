'use strict';

import * as angular from "angular";

angular.module('myApp.version.interpolate-filter', [])

.filter('interpolate', ['version', function(version) {
  return function(text: any) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);
