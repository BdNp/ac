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
    $scope.hours = {};

    $scope.difference = function(tStart, tEnd) {
    	return moment(tEnd).diff(moment(tStart), 'hours', true);
    }

    $scope.$watchCollection('userValues', function(){
        console.log('chagne');
        $scope.hours.total = $scope.difference($scope.values.times.timeIn, $scope.values.times.timeOut);
    });

  });
