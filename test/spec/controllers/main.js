'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('lotoratorApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
  /*
  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainCtrl.awesomeThings.length).toBe(3);
  });
  */
  it('should return object with different numbers', function () {
    expect(scope.sviBrojevi.a !== scope.sviBrojevi.g && scope.sviBrojevi.b !== scope.sviBrojevi.g && scope.sviBrojevi.c !== scope.sviBrojevi.g && scope.sviBrojevi.d !== scope.sviBrojevi.g && scope.sviBrojevi.e !== scope.sviBrojevi.g && scope.sviBrojevi.f !== scope.sviBrojevi.g).toBe(false);
  });
});
