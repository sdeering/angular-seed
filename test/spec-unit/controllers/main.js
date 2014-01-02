'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('app'));

  var HomeCtrl
      , scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of features to the scope', function () {
    expect(scope.features.length).toBe(8);
  });
});
