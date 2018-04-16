
const utils = require('./utils');
const assert = require('assert');

describe('Outer describe', function() {
  describe.only('inner[0] describe.only', function() {
    it.only('inner[0][0] - it.only', function () {
      // this test will be run
      assert.equal(utils.square(3), 9);
    });

    it('inner[0][1] - it', function () {
      // this test will also be run
      assert.equal(utils.square(3), 9);
    });

    it.only('inner[0][2] - it.only', function () {
      // this test will be run
      assert.equal(utils.square(3), 9);
    });
  });

  describe.only('inner[1] describe.only', function () {
    it('inner[1][0] - it.only', function () {
      // this test will also be run
      assert.equal(utils.square(3), 9);
    });
  });

  describe('inner[2] describe', function () {
    it.only('inner[2][0] - it.only', function () {
      // this test will not be run
      assert.equal(utils.square(3), 9);
    });
  });

  describe('inner[3] describe', function () {
    it('inner[3][0] - it', function () {
      // this test will not be run
      assert.equal(utils.square(3), 9);
    });
  });
});
