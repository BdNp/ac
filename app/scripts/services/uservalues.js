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

    // Service API here
    return {
      // times: {},
      // hours: {},
      data: {
        times: {},
        hours: {},
      },
      results: {},

      getValues: function() {
        return values;
      },
      setField: function(key, value) {
        values[key] = value;
        this.updateHours();
        this.getValues();
      },
      difference: function(tStart, tEnd) {
        var output = moment(tEnd).diff(moment(tStart), 'hours', true);
        var duration = moment.duration(moment(tEnd).diff(tStart)).asHours();
        if (duration <= 0.0)
          output = moment(tEnd).add(1, 'd').diff(moment(tStart), 'hours', true);
        if (duration > 24)
          output = moment(tEnd).subtract(1, 'd').diff(moment(tStart), 'hours', true);
        return output;
      },
      setTime: function(timeIn, timeOut, hourSet) {
        times[timeIn.name] = timeIn.value;
        times[timeOut.name] = timeOut.value;
        hours[hourSet] = this.difference( timeIn.value, timeOut.value );
        this.updateHours();
        this.getValues();
      },

      // Create the set of worked hours
      updateHours: function() {
        var normalCap, otCap, otMin, dtCap, dtMin, goldenMin, hours = this.data.hours;
        if (!values.hasOwnProperty('union') || !values.hasOwnProperty('zone')) return false;
        //set Caps
        if (values.fitting)
             normalCap = 2;
        else normalCap = (values.union.search("CW") != -1) ? 10 : 8;
        if ( (values.union.search("CW") != -1 || values.union.search("non") != -1) || values.fitting) {
          otCap = -1;
        } else {
          otCap = ( values.zone == "LA" ) ? 4 : 2;
          dtCap = ( values.zone == "LA" ) ? 4 : 6;
          otMin = normalCap;
          dtMin = otMin + otCap;
          goldenMin = dtMin + dtCap;
        } 
        
        // Set Normal Hours
        hours.normal = (hours.work < normalCap) ? hours.work : normalCap;
        // Set OT Hours
        if (otCap == -1) {
          hours.ot = hours.work - normalCap;
        } else {
          hours.ot = (hours.work < dtMin) ? hours.work - otMin : otCap;
          hours.dt = (hours.work < goldenMin) ? hours.work - dtMin : dtCap;
          hours.gt = (hours.work >= goldenMin) ? hours.work - goldenMin : 0;
        }
        // this.setField();
        this.getValues();
        console.log(this.data);
      },

      // Spit out results
      getResults: function() {
        return this.results;
      },
      setResults: function(key, value) {
        this.results[key] = value;
        return this.getResults();
      }


    };
  });
