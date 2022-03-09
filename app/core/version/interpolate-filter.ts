'use strict';

import {app} from "../../app";

app.filter('interpolate', ['version', function(version) {
  return function(text: any) {
    return String(text).replace(/%VERSION%/mg, version);
  };
}]);
