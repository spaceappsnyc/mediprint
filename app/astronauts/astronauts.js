'use strict';

angular.module('myApp.astronauts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/astronauts', {
    templateUrl: 'astronauts/astronauts.html',
    controller: 'AstronautsCtrl'
  });
}])

.controller('AstronautsCtrl', ['$scope', function($scope) {

    $scope.astronauts = [
        {name: "John Glenn"},
        {name: "Neil Armstrong"},
        {name: "Douglas Wheelock"},
        {name: "Mark Shuttleworth"},
        {name: "David Kay"}
    ];

}]);
