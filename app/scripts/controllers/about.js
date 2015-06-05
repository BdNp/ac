'use strict';

/**
 * @ngdoc function
 * @name acApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the acApp
 */
angular.module('acApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
