var module = angular.module('myApp.services', []);

module.service('deviceService', function() {
    this.devices = [
        {id:0, name: "Broken Arm",    img: "img/devices/arm_cast.jpg", model: "models/devices/arm_cast.obj"},
        {id:1, name: "Broken Wrist",  img: "img/devices/arm_cast.jpg", model: "models/devices/arm_cast.obj"},
        {id:2, name: "Broken Finger", img: "img/devices/arm_cast.jpg", model: "models/devices/arm_cast.obj"},
        {id:3, name: "Tennis Elbow",  img: "img/devices/arm_cast.jpg", model: "models/devices/arm_cast.obj"},
    ];
});
