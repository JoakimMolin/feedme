'use strict';

/**
 * @ngdoc function
 * @name feedmeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the feedmeApp
 */
angular.module('feedmeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
