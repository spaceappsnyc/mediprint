'use strict';

angular.module('myApp.device', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/device', {
    templateUrl: 'device/device.html',
    controller: 'DeviceCtrl'
  });
}])

.controller('DeviceCtrl', ['$scope', '$routeParams', 'deviceService', function($scope, $routeParams, deviceService) {

    $scope.astronautId = $routeParams.astronautId;
    $scope.bodyPartId  = $routeParams.bodyPartId;
    $scope.conditionId = $routeParams.conditionId;

    var device = deviceService.devices[$scope.conditionId];

    $scope.device = device;

    $scope.assimpModelUrl = device.model;

    // $scope.printModel = function() {

    // };

}]);
