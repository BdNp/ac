'use strict';

/**
 * @ngdoc overview
 * @name acApp
 * @description
 * # acApp
 *
 * Main module of the application.
 */
angular
  .module('acApp', [
    'ngAnimate',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'ui.bootstrap',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/acform.html',
        controller: 'AcformCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
  // .controller()
  // });
