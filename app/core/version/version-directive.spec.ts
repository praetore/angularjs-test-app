import angular from "angular";
import "angular-mocks";

describe('myApp.version module', function() {
  beforeEach(angular.mock.module('myApp.version'));

  describe('app-version directive', function() {
    it('should print current version', function() {
      angular.mock.module(function($provide: angular.auto.IProvideService) {
        $provide.value('version', 'TEST_VER');
      });
      inject(function($compile, $rootScope) {
        const element = $compile('<span app-version></span>')($rootScope);
        expect(element.text()).toEqual('TEST_VER');
      });
    });
  });
});
