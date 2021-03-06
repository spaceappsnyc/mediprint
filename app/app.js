'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'tjsModelViewer',
  'ngRoute',
  'myApp.services',
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
      when('/astronauts/:astronautId/bodyparts', {
        templateUrl: 'bodyparts/bodyparts.html',
        controller: 'BodypartsCtrl'
      }).
      when('/astronauts/:astronautId/bodyparts/:bodypartId/conditions', {
        templateUrl: 'conditions/conditions.html',
        controller: 'ConditionsCtrl'
      }).

      when('/astronauts/:astronautId/bodyparts/:bodypartId/conditions/:conditionId', {
        templateUrl: 'device/device.html',
        controller: 'DeviceCtrl'
      }).
      when('/print', {
	  templateUrl: 'print/print.html',
      controller: 'PrintCtrl'
      }).

      otherwise({
        redirectTo: '/astronauts'
      });
}]);
