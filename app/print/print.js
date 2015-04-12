'use strict';

angular.module('myApp.print', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/print', {
    templateUrl: 'print/print.html',
    controller: 'PrintCtrl'
  });
}])

.controller('PrintCtrl', ['$scope', '$routeParams', 'printService', function($scope, $routeParams, printService) {


}]);
