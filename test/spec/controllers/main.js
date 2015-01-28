'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('feedmeApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('exposes a venue', function () {
    expect(scope.venue.name).toEqual('Tenka Sushi');
  });
});
