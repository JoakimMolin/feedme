'use strict';

describe('Controller: MainCtrl', function () {
  // load the controller's module
  beforeEach(module('feedmeApp'));

  var MainCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($injector, $controller, $rootScope) {
    $httpBackend = $injector.get('$httpBackend');
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('fetches a list of venues and exposes one of them randomly', function () {
    spyOn(Math, 'random').and.returnValue(0.99);
    $httpBackend.expectGET('/places/nearby.json').respond({
      response: {
        groups: [ {
          items: [
          {
            venue: { name: 'Lounge Lizards' }
          },
          {
            venue: { name: 'Kitchen Kittens' }
          }]
        } ]
      }
    });
    $httpBackend.flush();
    expect(scope.venue.name).toEqual('Kitchen Kittens');
  });
});
