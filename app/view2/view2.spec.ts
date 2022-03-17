import angular from "angular";
import "angular-mocks";

describe('myApp.view2 module', function() {

  beforeEach(angular.mock.module('myApp.view2'));

  describe('view2 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      const view2Ctrl = $controller('View2Ctrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});