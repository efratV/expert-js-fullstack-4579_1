const utils = require('./utils');
const assert = require('assert');
const MochaSuit = require("mocha-suit");


//mocha-suit - a wrapper for Mocha tests to make them OOP like.

let Suit = MochaSuit("utils MochaSuit");

Suit.before(function(done) {
  this.timeout(3000);
  setTimeout(()=>{
    console.log("before sync-------------------");
    done();
  },2000);
});


Suit.before(function() { 
  console.log("before-------------------");
});


Suit.beforeEach(function() { 
  console.log("\t beforeEach-------------------");
});

Suit.it("should return 9 for utils.square(3)",function() {
  assert.equal(utils.square(3), 9);
});
Suit.it("should return 5 for utils.add(3,2)",function() {
  assert.equal(utils.add(3,2), 5);
});
Suit.after(function() { 
  console.log("after-------------------");
});

Suit.afterEach(function() { 
  console.log("\t afterEach-------------------");
});
new Suit();