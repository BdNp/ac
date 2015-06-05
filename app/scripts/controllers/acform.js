'use strict';

/**
 * @ngdoc function
 * @name acApp.controller:AcformCtrl
 * @description
 * # AcformCtrl
 * Controller of the acApp
 */
angular.module('acApp')
  .controller('AcformCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


  // Dropdown options for Union, Role & Format. Change later to objects
  $scope.zoneOptions = ['NY', 'LA'];
  $scope.unionOptions = [ 'SAG', 'AFTRA', 'SAG-AFTRA', 'SAG CW', 'AFTRA CW', 'SAG-AFTRA CW'];
  $scope.roleOptions = [ 'Background', 'Special Ability Background', 'Stand-In', 'Under Five', 'Stunt', 'Principal'];
  $scope.formatOptions = [ 'Film/TV', 'Commercial'];

  //Fields
  $scope.acFields = [
    { index: 0,  fieldset: '', name: 'username',  	label: 'Your Name', type: 'text',   required: true },
    { index: 1,  fieldset: '', name: 'zone', 		label: 'Zone',		type: 'radio',  required: true, options: $scope.zoneOptions },
    { index: 2,  fieldset: '', name: 'union', 		label: 'Union', 	type: 'select', required: true, options: $scope.unionOptions },
    { index: 3,  fieldset: '', name: 'role', 	 	label: 'Role', 		type: 'select', required: true, options: $scope.roleOptions },
    { index: 4,  fieldset: '', name: 'format', 		label: 'Format', 	type: 'select', required: true, options: $scope.formatOptions },
    { index: 5,  fieldset: '', name: 'fitting', 	label: 'Wardrobe Fitting', type: 'checkbox',  	    options: ['Wardrobe Fitting'] },
    { index: 6,  fieldset: '', name: 'timeIn', 		label: 'Time In', 	type: 'time',   required: true },
    { index: 7,  fieldset: '', name: 'timeOut', 	label: 'Time Out', 	type: 'time',   required: true },
    { index: 8,  fieldset: '', name: 'NDBIn', 		label: 'NDB In', 	type: 'time' },
    { index: 9,  fieldset: '', name: 'NDBOut', 		label: 'NDB Out', 	type: 'time' },
    { index: 10, fieldset: '', name: 'mealBreaks', 	label: 'Meal Breaks', type: 'checkbox', 		   options: ['Meal Breaks'] },
    { index: 11, fieldset: '', name: 'meal1In', 	label: 'meal1 In', 	type: 'time' },
    { index: 12, fieldset: '', name: 'meal1Out', 	label: 'meal1 Out', type: 'time' },
    { index: 13, fieldset: '', name: 'meal2In', 	label: 'meal2 In', 	type: 'time' },
    { index: 14, fieldset: '', name: 'meal2Out', 	label: 'meal2 Out', type: 'time' },
    { index: 15, fieldset: '', name: 'lunchPenalties', label: 'Lunch Penalties', type: 'number' },
    { index: 16, fieldset: '', name: 'dinnerPenalties', label: 'Dinner Penalties', type: 'number' },

  ];
  console.log($scope.fields);

  });
