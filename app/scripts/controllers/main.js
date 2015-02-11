'use strict';

/**
 * @ngdoc function
 * @name feedmeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the feedmeApp
 */
angular.module('feedmeApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/places/nearby.json').success(function(json) {
      $scope.venue = json.response.groups[0].items[0].venue;
    });
  });
