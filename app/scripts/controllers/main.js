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
  	console.log('main');
    $scope.getCharacters = function(returnScope) {
      characters.api.getCharacters()
        .success(function(data){
          characters.db = data.posts;
          returnScope = characters.db;
        });
    }
  });
