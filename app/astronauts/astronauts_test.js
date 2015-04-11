'use strict';

describe('myApp.astronauts module', function() {

  beforeEach(module('myApp.astronauts'));

  describe('astronauts controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var astronautsCtrl = $controller('AstronautsCtrl');
      expect(astronautsCtrl).toBeDefined();
    }));

  });
});
