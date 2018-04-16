//run : npm install mocha -g
//run : npm install mocha --save-dev
//to save the modules in the "devDependencies" and not in the "dependencies"
//then add to package.json the following config:
/*
 "scripts": {
    "test": "mocha **//*.test.js",
    "tst": "nodemon --exec 'npm test'"
}
*/

const utils = require('./utils');
var assert = require('assert');


describe('test utils.js', function () {
  describe('#square()', function () {

    //it - is a built-in function in mocha
    //we do not need to require "mocha", because we will run this file with mocha
    it('should add two numbers', () => {
      var res = utils.add(3, 11);

      if (res !== 44) {
        throw new Error(`Expected 44, but got ${res}.`)
      }
    });

    it('should square a number', () => {
      var res = utils.square(3);

      if (res !== 9) {
        throw new Error(`Expected 9, but got ${res}.`);
      }
    });
  });
});

describe('Array', function () {
  describe('#join()', function () {
    it('should return a|b|c for current array', function () {
      assert.equal(["a", "b", "c"].join("|"), "a|b|c");
    });

  });

  describe('#length', function () {
    it('should return 3 for current array', function () {
      assert.equal(["a", "b", "c"].length, 3);
    });
  });
});