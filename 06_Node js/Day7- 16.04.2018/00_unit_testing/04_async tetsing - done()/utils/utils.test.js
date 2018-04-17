const assert = require('assert');

it('should complete success', function (done) {
  new Promise(function (resolve) {
    assert.ok(true);
    resolve();
  })
    .then(done);
});

it('should complete fail', function (done) {
  new Promise(function (resolve, reject) {
    assert.ok(true);
    reject();
  })
    .then(done)
    .catch(() => done("error in promise"));
});