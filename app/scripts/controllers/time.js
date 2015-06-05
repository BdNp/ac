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
    $scope.mytime = new Date();
    $scope.mstep = 6; // Step the minutes 
	$scope.ismeridian = true;

	$scope.changed = function () {
		$log.log('Time changed to: ' + $scope.mytime);
	};

  });
