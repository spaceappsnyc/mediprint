'use strict';

angular.module('myApp.conditions', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/conditions', {
    templateUrl: 'conditions/conditions.html',
    controller: 'ConditionsCtrl'
  });
}])

.controller('ConditionsCtrl', ['$scope', '$routeParams', "deviceService", function($scope, $routeParams, deviceService) {

    $scope.astronautId = $routeParams.astronautId;
    $scope.bodypartId  = $routeParams.bodypartId;

    $scope.conditions = deviceService.devices;

}]);
