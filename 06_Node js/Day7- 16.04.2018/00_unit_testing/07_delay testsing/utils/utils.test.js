
const utils = require('./utils');
const assert = require('assert');

describe('normal describe', function() {
  it('shuld return 9 for utils.square(3)', function () {
    assert.equal(utils.square(3), 9)
  });
});

//delay the describe by Run: mocha **/*.test.js --delay
//This will attach the built-in "run" function, to the global context
//IMPORTANT: will run only the shortest setTimeout 
  
setTimeout(function() {
 describe('5000 ms delayed describe', function() {
    it('shuld return 1 for utils.square(1)', function () {
      assert.equal(utils.square(1), 1)
    });
  });

  run();
}, 5000);

  
setTimeout(function() {
  describe('1000 ms delayed describe - part 1', function() {
     it('shuld return 4 for utils.square(2)', function () {
       assert.equal(utils.square(2), 4)
     });
   });
 
   run();
 }, 1000);

 setTimeout(function() {
  describe('1000 ms delayed describe - part 2', function() {
     it('shuld return 4 for utils.square(2)', function () {
       assert.equal(utils.square(2), 4)
     });
   });
 
   run();
 }, 1000);