'use strict';

angular.module('myApp.device', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/device', {
    templateUrl: 'device/device.html',
    controller: 'DeviceCtrl'
  });
}])

.controller('DeviceCtrl', ['$scope', '$routeParams', function($scope, $routeParams) {

    $scope.assimpModelUrl = "models/jeep1.ms3d.json";

    $scope.changeModel = function() {
        if ($scope.assimpModelUrl == "models/interior.3ds.json") {
            $scope.assimpModelUrl = "models/jeep1.ms3d.json";
        }
        else {
            $scope.assimpModelUrl = "models/interior.3ds.json";
        }
    };

    $scope.astronautId = $routeParams.astronautId;
    $scope.bodyPartId  = $routeParams.bodyPartId;
    $scope.conditionId = $routeParams.conditionId;

}]);
