'use strict';

/**
 * @ngdoc function
 * @name acApp.controller:TimeCtrl
 * @description
 * # TimeCtrl
 * Controller of the acApp
 */
angular.module('acApp')
  .controller('TimeCtrl', function ($scope, $log) {

  // console.log($('timepicker'));

  $scope.now = moment();
  $scope.now.minutes(Math.ceil($scope.now.minutes() / 6) * 6);
  // console.log($scope.now);
  // $scope.mytime.setMinutes(0);

  $scope.hstep = 1;
  $scope.mstep = 6;

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = !$scope.ismeridian;
  };

  $scope.clear = function() {
    $scope.mytime = null;
  };

  });
