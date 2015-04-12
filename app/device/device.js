'use strict';

angular.module('myApp.device', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/device', {
    templateUrl: 'device/device.html',
    controller: 'DeviceCtrl'
  });
}])

.controller('DeviceCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {

    $scope.astronautId = $routeParams.astronautId;
    $scope.bodyPartId  = $routeParams.bodyPartId;
    $scope.conditionId = $routeParams.conditionId;

}]);
