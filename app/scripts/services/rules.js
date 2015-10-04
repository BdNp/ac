'use strict';

/**
 * @ngdoc service
 * @name acApp.Rules
 * @description
 * # Rules
 * Factory in the acApp.
 */
angular.module('acApp')
  .factory('Rules', [ 'Fields', 'userValues', function (Fields, userValues) {
      // Service logic
      // ...
      console.log('rules');
      console.log(Fields);
      return Fields;
  
      // Public API here
      return {
        nightPremiums: function() {
          var hourMap = [];
          var timeIn  = moment(userValues.times.timeIn),
              timeOut = moment(userValues.times.timeOut);
          var inHour  = timeIn.hour(),
              outHour = timeOut.hour(),
              inMin  = timeIn.minute(),
              outMin = timeOut.minute();
          // moment()
        }
      };
    }]);



/****************** 
 * NIGHT PREMIUMS
 *

// Populate Hour Map for Night Premiums

$hourMap = array();
$i = date( 'G', $input['intime'] ) . '.' .   (date('i', $input['intime'])  / 60) * 10;
$o = (date( 'G', $input['outtime'] ) . '.' . (date('i', $input['outtime']) / 60) * 10) + 1;
for ($h = 0; $h <= 23; $h++) {  $hourMap[$h] = 0; }

function hourMap($hourMap, $i, $o) {
  global $input, $goldenTime, $doubleTime, $overTime;
  for ($h = $i; $h < $o; $h++) {

    $hIndex = $h - date("G", $input['intime']);
    
    $h = ($h > $o - 1) ? $o : $h;

    // round out hours and get the loose minutes from the intime and outtime
    $hourFloor = floor($h);
    if ($hourFloor - $h != 0 && ($h == $i || $h > $o - 1)) {
      $remain = $h - $hourFloor;
    } else $remain = 1;

    // Assign overtime values to each hour
    if    ($hIndex > $goldenTime) $hourMap[$hourFloor] = 8 * $remain;
    else if ($hIndex > $doubleTime) $hourMap[$hourFloor] = 2 * $remain;
    else if ($hIndex > $overTime) $hourMap[$hourFloor] = 1.5 * $remain;
    else              $hourMap[$hourFloor] = 1 * $remain;
  }
  return $hourMap;
}

function nightPremiums( $hourly, $hourMap, $i, $o ) {
  global $base;
  if ( $o < $i ) {
    $hourMap = hourMap($hourMap, 0, $o);
    $hourMap = hourMap($hourMap, $i, 24); 
  } else
    $hourMap = hourMap($hourMap, $i, $o);
  
  for( $h = 0; $h <= 23; $h++ ) {
    if ( ( $h >= 20 && $h < 24 ) || $h == 0 )
       $hourMap[$h] = ( $hourly * $hourMap[$h] ) * .10;
    elseif ( $h >= 1 && $h <= 6 ) 
      $hourMap[$h] = ( $hourly * $hourMap[$h] ) * .20;
    else $hourMap[$h] = 0;
  
    $output = $output + floatval( $hourMap[$h] );
  }                   

  return $output;

}


