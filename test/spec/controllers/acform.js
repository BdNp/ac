'use strict';

describe('Controller: AcformCtrl', function () {

  // load the controller's module
  beforeEach(module('acApp'));

  var AcformCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AcformCtrl = $controller('AcformCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
