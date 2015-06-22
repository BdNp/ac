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
    var hours = {};
    var values = {
      times: times,
      hours: hours,
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
      difference: function(tStart, tEnd) {
        return moment(tEnd).diff(moment(tStart), 'hours', true);
      },
      setTime: function(timeIn, timeOut, hourSet) {
        times[timeIn.name] = timeIn.value;
        times[timeOut.name] = timeOut.value;
        hours[hourSet] = this.difference( timeIn.value, timeOut.value );
        this.updateHours();
        return values;
      },
      updateHours: function() {
        if (!values.hasOwnProperty('union') || !values.hasOwnProperty('zone')) return false;
        //set Caps
        hours.normalCap = (values.union.search("CW") != -1) ? 10 : 8;
        if (values.union.search("CW") != -1 || values.union.search("non") != -1) {
          hours.otCap = -1;
        } else {
          hours.otCap = (values.zone == "LA" ) ? 4 : 2;
          hours.doubleCap = (values.zone == "LA" ) ? 4 : 6;
          hours.goldenMin = 16;
        } 
        
        // Set Normal Hours
        hours.normal = (hours.work < hours.normalCap) ? hours.work : hours.normalCap;
        // Set OT Hours
        if (hours.otCap == -1) {
          hours.ot = hours.work - hours.normalCap;
        } else {
          hours.ot = (hours.work < hours.otCap) ? hours.work - hours.normalCap : hours.otCap;
          hours.dt = (hours.work < hours.doubleCap) ? hours.work - (hours.normalCap + hours.otCap) : hours.otCap;
          hours.gt = (hours.work > hours.goldenMin) ? hours.work - hours.goldenMin : 0;
        }
      },


    };
  });
