'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.astronauts',
  'myApp.bodyparts',
  'myApp.conditions',
  'myApp.device',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.

      when('/astronauts', {
        templateUrl: 'astronauts/astronauts.html',
        controller: 'AstronautsCtrl'
      }).
      when('/bodyparts', {
        templateUrl: 'bodyparts/bodyparts.html',
        controller: 'BodypartsCtrl'
      }).
      when('/conditions', {
        templateUrl: 'conditions/conditions.html',
        controller: 'ConditionsCtrl'
      }).


      when('/device/:deviceId', {
        templateUrl: 'device/device.html',
        controller: 'DeviceCtrl'
      }).

      otherwise({
        redirectTo: '/astronauts'
      });
}]);
