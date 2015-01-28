'use strict';

/**
 * @ngdoc function
 * @name feedmeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the feedmeApp
 */
angular.module('feedmeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.venue = {name: 'Tenka Sushi'};
  });
