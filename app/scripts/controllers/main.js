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
      var group = json.response.groups[0];
      var itemIndex = Math.floor(Math.random() * group.items.length);
      $scope.venue = group.items[itemIndex].venue;
    });
  });
