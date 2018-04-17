
const utils = require('./utils');
const assert = require('assert');


//every hook can be set as a "root"-level hook. 
//For example: add beforeEach() outside of all describe() blocks. 
//This will cause the callback to beforeEach() 
//to run before any test case, in this file 
beforeEach(function () {
  console.log('============================');
});



describe('testing Array', function () {
  describe('#length', function () {
    it('shuld return 0 for [].length', function () {
      assert.equal([].length, 0)
    });
  });
});

describe('testing utils', function () {
  describe('#add()', function () {
    it('shuld return 3 for utils.add(1, 2)', function () {
      assert.equal(utils.add(1, 2), 3)
    });
    it('shuld return 5 for utils.add(3, 2)', function () {
      assert.equal(utils.add(3,2), 5)
    });
  });

  describe('#square()', function () {
    it('shuld return 1 for utils.square(1)', function () {
      assert.equal(utils.square(1), 1)
    });
    it('shuld return 9 for utils.square(3)', function () {
      assert.equal(utils.square(3), 9)
    });
  });
});


