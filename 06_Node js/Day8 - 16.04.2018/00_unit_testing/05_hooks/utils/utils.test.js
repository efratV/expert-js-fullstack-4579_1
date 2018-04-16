// Mocha provides the hooks before(), after(), beforeEach(), and afterEach(). 
//These should be used to set up preconditions and clean up after your tests

const utils = require('./utils');
const fs = require('fs');
fs.writeFileSync("log.txt", "");

const logHook = (msg) => {
  fs.appendFileSync("log.txt", msg + "\r\n")
}

describe('testing async utils', function () {

  // runs before all tests in this block
  before(logHook.bind(this, "before"));

  // runs after all tests in this block
  after(logHook.bind(this, "after"));

  // runs before each test in this block
  beforeEach(logHook.bind(this, "beforeEach"));

  // runs after each test in this block
  afterEach(logHook.bind(this, "afterEach"));

  describe('#mulAsync()', function () {
    it('shuld return 9 for mulAsync(3)', function (done) {
      utils.mulAsync(3)
        .then(() => done())
        .catch(e => done(e));
    });
    it('shuld return 10 for mulAsync(5)', function (done) {
      utils.mulAsync(5)
        .then(() => done())
        .catch(e => done(e));
    });
  });
});



