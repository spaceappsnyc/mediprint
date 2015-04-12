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
        {id:0, name: "John Glenn"},
        {id:1, name: "Neil Armstrong"},
        {id:2, name: "Douglas Wheelock"},
        {id:3, name: "Mark Shuttleworth"},
        {id:4, name: "David Kay"}
    ];

}]);
