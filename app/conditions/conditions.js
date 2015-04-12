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
        {id:0, name: "Broken Arm",    img: "img/devices/arm_cast.jpg", model: "models/devices/arm_cast.obj"},
        {id:1, name: "Broken Wrist",  img: "img/devices/arm_cast.jpg", model: "models/devices/arm_cast.obj"},
        {id:2, name: "Broken Finger", img: "img/devices/arm_cast.jpg", model: "models/devices/arm_cast.obj"},
        {id:3, name: "Tennis Elbow",  img: "img/devices/arm_cast.jpg", model: "models/devices/arm_cast.obj"},
    ];

}]);
