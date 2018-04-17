var parallel = require('mocha.parallel');
var Promise  = require('bluebird');


//Rather than taking 1.5s, 
//the specs below run in parallel, completing in just ~ 500ms.
parallel('delays', function() {
  it('test1', function(done) {
    setTimeout(done, 500);
  });

  it('test2', function(done) {
    setTimeout(done, 500);
  });

  it('test3', function() {
    return Promise.delay(500);
  });
});