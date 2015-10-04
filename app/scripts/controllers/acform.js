  'use strict';

/**
 * @ngdoc function
 * @name acApp.controller:AcformCtrl
 * @description
 * # AcformCtrl
 * Controller of the acApp
 */
angular.module('acApp')
  .filter('getByName', function(){
    return function(input, name) {
      var i=0, len=input.length;
      for(; i<len; i++) {
        if (input[i].name  == name) 
          return input[i];
      }
    }
  })
  .controller('AcformCtrl', ['$scope', '$filter', 'userValues', 'Fields', function ($scope, $filter, userValues, Fields) {

    // Get fields API
    console.log(Fields);
    $scope.acFields = Fields.acFields;

    $scope.toggleHide = function(targets) {
      angular.forEach(targets, function(t){
        angular.forEach($scope.acFields, function(f){
          f.visible = (f.name == t) ? !f.visible : f.visible;
        });
      });    
    }
  
    $scope.userValues = {
      // timeIn: $scope.acFields
    };

    // Update user values
    $scope.updateValues = function(field) {
      if (field.type == 'time') {
        var counterpart = $filter('getByName')($scope.acFields, field.counterpart); 
        if( field.name.search('In') != -1 ) {
          var timeIn = { name: field.name, value: field.value };
          var timeOut = { name: counterpart.name, value: counterpart.value };
        } else {
          var timeIn = { name: counterpart.name, value: counterpart.value };
          var timeOut = { name: field.name, value: field.value };
        }
        userValues.setTime( timeIn, timeOut, field.hourSet );
      } 
      else {
        if (field.type == 'checkbox'){
          userValues.setField(field.name, field.selected);
          if (field.name == 'fitting') 
            $scope.toggleFitting(field.selected);
        } else {
          userValues.setField(field.name, field.value);
        }
      }
    }

    // Round minutes up to multiple of 6
    var roundMinutes = function(time) {
      time.seconds(0);
      time.millisecond(0);
      return Math.ceil(time.minutes() / 6) * 6;
    }

    // Set Default Times, get now and straight-8
    $scope.now = moment();
    $scope.now = $scope.now.minutes(roundMinutes($scope.now)).toDate();
    $scope.fitting = moment();
    $scope.fitting = $scope.fitting.add(2, 'h').minutes(roundMinutes($scope.fitting)).toDate();
    $scope.straightEight = moment();
    $scope.straightEight = $scope.straightEight.add(8, 'h').minutes(roundMinutes($scope.straightEight)).toDate();

    //Fitting Function: Set Out time to 2 hours from now if Fitting is selected
    $scope.toggleFitting = function(currentValue) {
      var out = $filter('getByName')($scope.acFields, 'timeOut'); 
      if (currentValue)
        out.value = $scope.fitting;
      else out.value = $scope.straightEight;
    }
      
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
  
    // Push fields into the appropriate fieldsets
    // May become obsolete in the future
    angular.forEach($scope.fieldsets, function(f){ 
      angular.forEach($scope.acFields, function(acf){
        if (f.name == acf.fieldset)
          f.fields.push(acf);
      });
    });
  
    // On initial load, Time In/Out are set. These functions define the values in userValues
    $filter('getByName')($scope.acFields, 'timeIn').value = $scope.now;
    $filter('getByName')($scope.acFields, 'timeOut').value = $scope.straightEight;
    $scope.updateValues($filter('getByName')($scope.acFields, 'timeIn'));
    $scope.updateValues($filter('getByName')($scope.acFields, 'timeOut'))

  
  
  }]);
