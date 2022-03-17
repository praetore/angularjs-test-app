import angular from "angular";
import "angular-mocks";

describe('myApp.version module', function() {
  beforeEach(angular.mock.module('myApp.version'));

  describe('interpolate filter', function() {
    beforeEach(angular.mock.module(function($provide: angular.auto.IProvideService) {
      $provide.value('version', 'TEST_VER');
    }));

    it('should replace VERSION', inject(function(interpolateFilter) {
      expect(interpolateFilter('before %VERSION% after')).toEqual('before TEST_VER after');
    }));
  });
});
