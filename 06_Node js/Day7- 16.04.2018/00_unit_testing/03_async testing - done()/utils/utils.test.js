
const utils = require('./utils');

describe('testing async utils', function () {
  describe('#mulAsync()', function () {
    it('shuld return 9 for mulAsync(3) is 9', function (done) {
      utils.mulAsync(3).then(x => {
        if (x == 9)
          done();
        else
          done(`mulAsync(3)) returned ${x}`);
      });
    });
    it('shuld return error for mulAsync(3) is 7', function (done) {
      utils.mulAsync(3).then(x => {
        if (x == 7)
          done();
        else
          done(`mulAsync(3)) returned ${x}`);
      });
    });
  });
});


