var module = angular.module('myApp', []);

module.factory('getAstronauts', function(){

    return function() {
	var astronauts = [
	    {id:0, name: "Neil Armstrong",   img: "img/astronauts/neil_armstrong.jpg"},
	    {id:1, name: "Buzz Aldrin",      img: "img/astronauts/buzz_aldrin.jpg"},
	    {id:2, name: "John Glenn",       img: "img/astronauts/john_glenn.jpg"},
	    {id:3, name: "Cady Coleman",     img: "img/astronauts/cady_coleman.jpg"},
	    {id:4, name: "Douglas Wheelock", img: "img/astronauts/doug_wheelock.jpg"},
	    //{id:3, name: "John Oquist",      img: "img/astronauts/john_oquist.jpg"},
	    {id:5, name: "David Kay",        img: "img/astronauts/david_kay.png"},
	];
	return astronauts;
    };


});
