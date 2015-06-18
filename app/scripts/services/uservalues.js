'use strict';

/**
 * @ngdoc service
 * @name acApp.userValues
 * @description
 * # userValues
 * Factory in the acApp.
 */
angular.module('acApp')
  .factory('userValues', function () {

    // Define the user values object
    var times = {};
    var values = {
      times: times,
    };

    // Public API here
    return {
      getValues: function() {
        return values;
      },
      setField: function(key, value) {
        values[key] = value;
        return values;
      },
      setTime: function(key, value) {
        times[key] = value;
        return times;
      }
    };
  });
