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

  $scope.toggleHide = function(targets) {
    angular.forEach(targets, function(t){
      angular.forEach($scope.acFields, function(f){
        f.visible = (f.name == t) ? !f.visible : f.visible;
      });
    });    
  }

  $scope.userValues = {
    timeIn: $scope.acFields
  };

  $scope.updateValues = function(k,v) {
    $scope.userValues[k] = v;
  }

  $scope.updateTime = function(o) {

  }

  // Set Default Times, get now and straight-8
  $scope.now = moment();
  $scope.now.minutes(Math.ceil($scope.now.minutes() / 6) * 6);
  $scope.now = $scope.now.toDate();
  $scope.straightEight = $scope.now.add(8, 'h').toDate();

  // Dropdown options for Union, Role & Format. Change later to objects
  $scope.zoneOptions = ['NY', 'LA'];
  $scope.unionOptions = ['SAG', 'AFTRA', 'SAG-AFTRA', 'SAG CW', 'AFTRA CW', 'SAG-AFTRA CW'];
  $scope.roleOptions = ['Background', 'Special Ability Background', 'Stand-In', 'Under Five', 'Stunt', 'Principal'];
  $scope.formatOptions = ['Film/TV', 'Commercial'];
  $scope.wardrobeOptions = ['None', 'Formal / Religious', 'Police'];
  $scope.propOptions = ['None', 'Pet', 'Golf Club Set', 'Tennis Racquet', 'Luggage', 'Camera', 'Skis and Poles', 'Other'];
  $scope.carOptions = ['None', 'Car', 'Trailer', 'Bicycle', 'Moped', 'Motorcycle', 'Police Motorcycle', 'Skates/Skateboard'];

  //Fields
  $scope.acFields = [
    {
      fieldset: 'project', 
      name: 'username',
      label: 'Your Name',
      type: 'text',
      class: 'col-xs-12 col-sm-12 col-md-12 col-lg-6',     
      required: true,
      visible: true,
    },
    {
      fieldset: 'project', 
      name: 'project',
      label: 'Project Name',
      type: 'text',     
      class: 'col-xs-12 col-sm-12 col-md-12 col-lg-6',     
      required: true,
      visible: true,
    },
    {
      fieldset: 'project', 
      name: 'zone',
      label: 'Zone',		         
      type: 'radio',    
      class: 'col-xs-12 col-sm-12 col-md-12 col-lg-6',     
      options: $scope.zoneOptions,
      required: true, 
      visible: true,
    },
    {
      fieldset: 'project', 
      name: 'union',
      label: 'Union',   
      type: 'select',   
      class: 'col-xs-12 col-sm-12 col-md-12 col-lg-6',     
      options: $scope.unionOptions,
      required: true, 
      visible: true,
    },
    {
      fieldset: 'project', 
      name: 'role',
      label: 'Role',
      type: 'select',   
      class: 'col-xs-12 col-sm-12 col-md-12 col-lg-6',     
      options: $scope.roleOptions,
      required: true, 
      visible: true,
    },
    {
      fieldset: 'project', 
      name: 'format',
      label: 'Format',   
      type: 'select',   
      class: 'col-xs-12 col-sm-12 col-md-12 col-lg-6',     
      options: $scope.formatOptions,
      required: true, 
      visible: true,
    },
    {
      fieldset: 'fitting', 
      name: 'fitting',
      label: 'Wardrobe Fitting', 
      type: 'checkbox',
      class: "col-xs-12",
      reveals: ['ndb', 'mealBreaks', 'lunchPenalties', 'dinnerPenalties', 'wardrobeChanges', 'specialWardrobe', 'holiday', 'hair', 'wet', 'smoke', 'props', 'vehicle', 'mileage', 'misc', 'adjustment'],
      visible: true,
    },
    {
      fieldset: 'times', 
      name: 'timeIn',
      label: 'Time In', 
      type: 'time',
      // value: moment(),
      value: $scope.now,
      class: "col-xs-6",
      required: true,
      visible: true,
    },
    {
      fieldset: 'times', 
      name: 'timeOut',
      label: 'Time Out', 
      type: 'time',
      value: $scope.straightEight,
      class: "col-xs-6",
      required: true,
      visible: true,
    },
    {
      fieldset: 'times', 
      name: 'ndb',
      label: 'NDB',
      type: 'checkbox',
      class: "col-xs-12",
      reveals: ['NDBIn', 'NDBOut'],
      visible: true,
    },
    {
      fieldset: 'times', 
      name: 'NDBIn',
      label: 'NDB In',   
      type: 'time',
      class: "col-xs-6",
      visible: false,
    },
    {
      fieldset: 'times', 
      name: 'NDBOut',
      label: 'NDB Out',
      type: 'time',
      class: "col-xs-6",
      visible: false,
    },
    {
      fieldset: 'meals', 
      name: 'meal1Break',
      label: '1st Meal Break',
      type: 'checkbox',
      class: "col-xs-6",
      reveals: ['meal1In', 'meal1Out'],
      visible: true,
    },
    {
      fieldset: 'meals', 
      name: 'meal2Break', 
      label: '2nd Meal Break',
      type: 'checkbox',
      class: "col-xs-6",
      reveals: ['meal2In', 'meal2Out'],
      visible: true,
    },
    {
      fieldset: 'meals', 
      name: 'meal1In',
      label: 'meal1 In', 
      type: 'time',
      class: "col-xs-6",
      visible: false,
    },
    {
      fieldset: 'meals', 
      name: 'meal1Out',
      label: 'meal1 Out',
      type: 'time',
      class: "col-xs-6",
      visible: false,
    },
    {
      fieldset: 'meals', 
      name: 'meal2In',
      label: 'meal2 In', 
      type: 'time',
      class: "col-xs-6",
      visible: false,
    },
    {
      fieldset: 'meals', 
      name: 'meal2Out',
      label: 'meal2 Out',
      type: 'time',
      class: "col-xs-6",
      visible: false,
    },
    {
      fieldset: 'meals', 
      name: 'lunchPenalties',  
      label: 'Lunch Penalties',  
      type: 'number',
      class: "col-xs-6",
      visible: true,
    },
    {
      fieldset: 'meals', 
      name: 'dinnerPenalties', 
      label: 'Dinner Penalties', 
      type: 'number',
      class: "col-xs-6",
      visible: true,
    },
    {
      fieldset: 'wardrobe', 
      name: 'wardrobeChanges', 
      label: 'Wardrobe Changes', 
      type: 'number', 
      class: "col-xs-6",
      visible: true,
    },
    {
      fieldset: 'wardrobe', 
      name: 'specialWardrobe', 
      label: 'SpecialWardrobe', 
      type: 'select',
      class: "col-xs-6",
      options: $scope.wardrobeOptions,
      visible: true,
    },
    {
      fieldset: 'bumps', 
      name: 'hair',
      label: 'Hair / Beard / Makeup', 
      type: 'checkbox',
      class: "col-xs-4",
      visible: true,
    },
    {
      fieldset: 'bumps', 
      name: 'wet',
      label: 'Wet Pay', 
      type: 'checkbox',
      class: "col-xs-4",
      visible: true,
    },
    {
      fieldset: 'bumps', 
      name: 'smoke',
      label: 'Smoke Pay', 
      type: 'checkbox',
      class: "col-xs-4",
      visible: true,
    },
    {
      fieldset: 'bumps', 
      name: 'adjustment',
      label: 'Adjustment to Base',
      type: 'number',     
      class: "col-xs-12",
      visible: true,
    },
    {
      fieldset: 'extras', 
      name: 'holiday',
      label: 'Holiday Pay', 
      type: 'checkbox',
      class: "col-xs-12",
      visible: true,
    },
    {
      fieldset: 'extras', 
      name: 'props', 
      label: 'Props', 
      type: 'select',
      class: "col-xs-12",
      options: $scope.propOptions,
      visible: true,
    },
    {
      fieldset: 'extras', 
      name: 'vehicle', 
      label: 'Vehicle', 
      type: 'select',
      class: "col-xs-12",
      options: $scope.carOptions,
      visible: true,
    },
    {
      fieldset: 'extras', 
      name: 'mileage',
      label: 'Mileage',
      type: 'number',     
      class: "col-xs-12",
      visible: true,
    },
    {
      fieldset: 'extras', 
      name: 'misc',
      label: 'Misc. Extras',
      type: 'number',     
      class: "col-xs-12",
      visible: true,
    },
  ];

  $scope.fieldsets = [
    { name: 'project', labelClass: 'col-xs-12 col-sm-12 col-md-12 col-lg-6', pre: '', header: '', post: '', fields: [] },
    { name: 'fitting', labelClass: 'col-xs-12', pre: '', header: '', post: '', fields: [] },
    { name: 'times', labelClass: 'col-xs-6 col-sm-6', pre: '', header: '', post: '', fields: [] },
    { name: 'ndb', labelClass: 'col-xs-6 col-sm-6', pre: '', header: '', post: '', fields: [] },
    { name: 'meals', labelClass: 'col-xs-6 col-sm-6', pre: '', header: '', post: '', fields: [] },
    { name: 'wardrobe', labelClass: 'col-xs-6 col-sm-6', pre: '', header: '', post: '', fields: [] },
    { name: 'bumps', labelClass: 'col-xs-6 col-sm-6', pre: '', header: '', post: '', fields: [] },
    { name: 'extras', labelClass: 'col-xs-12 col-sm-6', pre: '', header: '', post: '', fields: [] },
  ];

  angular.forEach($scope.fieldsets, function(f){ 
    angular.forEach($scope.acFields, function(acf){
      if (f.name == acf.fieldset)
        f.fields.push(acf);
    });
  });

});
