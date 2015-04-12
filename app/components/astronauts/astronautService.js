var module = angular.module('myApp.services', []);

module.service('astronautService', function() {
    this.astronauts = [
	    {id:0, name: "Neil Armstrong",   img: "img/astronauts/neil_armstrong.jpg"},
	    {id:1, name: "Buzz Aldrin",      img: "img/astronauts/buzz_aldrin.jpg"},
	    {id:2, name: "John Glenn",       img: "img/astronauts/john_glenn.jpg"},
	    {id:3, name: "Cady Coleman",     img: "img/astronauts/cady_coleman.jpg"},
	    {id:4, name: "Douglas Wheelock", img: "img/astronauts/doug_wheelock.jpg"},
	    //{id:5, name: "John Oquist",      img: "img/astronauts/john_oquist.jpg"},
	    //{id:6, name: "David Kay",        img: "img/astronauts/david_kay.png"},
	    {id:7, name: "John Doe",         img: "img/astronauts/redshirt.jpg"},
    ];
});

module.service('deviceService', function() {
    this.devices = [
        {id:0, name: "Arm Cast",      img: "img/devices/arm_cast_render.png",      model: "models/devices/arm_cast.obj"},
        {id:1, name: "Wrist Brace",   img: "img/devices/wrist_brace_render.png",  model: "models/devices/brace_curved.obj"},
        {id:2, name: "Finger Splint", img: "img/devices/finger_splint_render.png", model: "models/devices/finger_splint.obj"},
        // {id:3, name: "Elbow Brace",  img: "img/devices/arm_cast.jpg", model: "models/devices/arm_cast.obj"},
    ];
});


module.factory('notify', ['$window', function(win) {
   var msgs = [];
   return function(msg) {
     msgs.push(msg);
     if (msgs.length == 3) {
       win.alert(msgs.join("\n"));
       msgs = [];
     }
   };
 }]);

module.service('MathService', function() {
    this.add = function(a, b) { return a + b };

    this.subtract = function(a, b) { return a - b };

    this.multiply = function(a, b) { return a * b };

    this.divide = function(a, b) { return a / b };
});

module.service('CalculatorService', function(MathService){
    this.square = function(a) { return MathService.multiply(a,a); };
    this.cube = function(a) { return MathService.multiply(a, MathService.multiply(a,a)); };
});
