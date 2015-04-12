'use strict';

angular.module('myApp.astronauts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/astronauts', {
    templateUrl: 'astronauts/astronauts.html',
    controller: 'AstronautsCtrl'
  });
}])

.controller('AstronautsCtrl', ['$scope', 'CalculatorService', 'astronautService', function($scope, CalculatorService, astronautService) {

    console.log("hello!");

    $scope.astronauts = astronautService.astronauts

}]);
