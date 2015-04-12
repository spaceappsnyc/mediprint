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
        {id:0, name: "Buzz Aldrin",      img: "img/astronauts/buzz_aldrin.jpg"},
        {id:0, name: "John Glenn",       img: "img/astronauts/john_glenn.jpg"},
        {id:0, name: "Cady Coleman",     img: "img/astronauts/cady_coleman.jpg"},
        {id:1, name: "Neil Armstrong",   img: "img/astronauts/neil_armstrong.jpg"},
        {id:2, name: "Douglas Wheelock", img: "img/astronauts/doug_wheelock.jpg"},
        //{id:3, name: "John Oquist",      img: "img/astronauts/john_oquist.jpg"},
        {id:4, name: "David Kay",        img: "img/astronauts/david_kay.png"},
    ];

}]);
