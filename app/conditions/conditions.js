'use strict';

angular.module('myApp.conditions', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/conditions', {
    templateUrl: 'conditions/conditions.html',
    controller: 'ConditionsCtrl'
  });
}])

.controller('ConditionsCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {

    $scope.astronautId = $routeParams.astronautId;
    $scope.bodypartId  = $routeParams.bodypartId;

    $scope.conditions = [
        {id:0, name: "Broken Arm"},
        {id:1, name: "Broken Wrist"},
        {id:2, name: "Tennis Elbow"}
    ];

}]);
