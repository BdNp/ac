'use strict';

/**
 * @ngdoc function
 * @name acApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the acApp
 */
angular.module('acApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
