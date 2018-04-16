const request = require('supertest');

var app = require('./server').app;

it('should return hello world response', (done) => {
  request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      console.log(res.body.error);
    })
    .end(done);
});

// Make a new test
// assert 200
it('should return my user object', (done) => {
  request(app)
    .get('/users')
    .expect(200)
    .expect((res) => {
      console.log(res.body);
    })
    .end(done);
});
