'use strict';

angular.module('myApp.conditions', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/conditions', {
    templateUrl: 'conditions/conditions.html',
    controller: 'ConditionsCtrl'
  });
}])

.controller('ConditionsCtrl', ['$scope', function($scope) {

    $scope.astronautId = $routeParams.astronautId;
    $scope.bodyPartId  = $routeParams.bodyPartId;

    $scope.conditions = [
        {name: "Broken Arm"},
        {name: "Broken Wrist"},
        {name: "Tennis Elbow"}
    ];


}]);
