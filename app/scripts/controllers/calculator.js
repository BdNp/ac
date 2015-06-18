'use strict';

/**
 * @ngdoc function
 * @name acApp.controller:CalculatorCtrl
 * @description
 * # CalculatorCtrl
 * Controller of the acApp
 */
angular.module('acApp')
  .controller('CalculatorCtrl', function ($scope, userValues, Rules) {
    $scope.values = userValues.getValues();
    $scope.hours = [];

    $scope.difference = function(typeOfHours, tStart, tEnd) {
    	var output = moment(tEnd).diff(moment(tStart), 'hours', true);
    	$scope.hours[typeOfHours] = output;
    }

	console.log($scope.difference('work', $scope.values.timeIn, $scope.values.timeOut));
    // angular.forEach(values.times, function(t){
    // });

  });
