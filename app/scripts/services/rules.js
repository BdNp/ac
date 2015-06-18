'use strict';

/**
 * @ngdoc service
 * @name acApp.Rules
 * @description
 * # Rules
 * Factory in the acApp.
 */
angular.module('acApp')
  .factory('Rules', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
