'use strict';

angular.module('myApp.bodyparts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bodyparts', {
    templateUrl: 'bodyparts/bodyparts.html',
    controller: 'BodypartsCtrl'
  });
}])

.controller('BodypartsCtrl', [function() {

}]);
