'use strict';

angular.module('myApp.bodyparts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/bodyparts', {
    templateUrl: 'bodyparts/bodyparts.html',
    controller: 'BodypartsCtrl'
  });
}])

.controller('BodypartsCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {

    $scope.astronautId = $routeParams.astronautId;

    $scope.bodyparts = [
        {name: "Torso"},
        {name: "Right Arm"},
        {name: "Left Arm"},
        {name: "Right Leg"},
        {name: "Left Leg"}
    ];

}]);
