'use strict';

angular.module('myApp.astronauts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/astronauts', {
    templateUrl: 'astronauts/astronauts.html',
    controller: 'AstronautsCtrl'
  });
}])

//.controller('AstronautsCtrl', ['$scope', 'CalculatorService', function($scope, CalculatorService) {
.controller('AstronautsCtrl', ['$scope', 'CalculatorService', 'astronautService', function($scope, CalculatorService, astronautService) {

    console.log("hello!");
    console.log("square: " + CalculatorService.square(5));

    // notify();
    //console.log("astronauts:" + getAstronauts());

    $scope.astronauts = astronautService.astronauts

}]);
