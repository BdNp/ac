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

  $scope.mytime = new Date();
  $scope.mytime.setMinutes(0);

  $scope.hstep = 1;
  $scope.mstep = 6;

  $scope.ismeridian = true;
  $scope.toggleMode = function() {
    $scope.ismeridian = !$scope.ismeridian;
  };

  $scope.update = function() {
    var d = new Date();
    d.setHours( 14 );
    d.setMinutes( 0 );
    $scope.mytime = d;
  };

  $scope.clear = function() {
    $scope.mytime = null;
  };

  });
