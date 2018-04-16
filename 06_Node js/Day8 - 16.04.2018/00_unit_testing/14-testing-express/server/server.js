const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: '404 code'
  });
});

app.get('/users', (req, res) => {
  res.send([{
    name: 'Bob',
    age: 27
  }, {
    name: 'Alice',
    age: 25
  }, {
    name: 'Tom',
    age: 26
  }]);
});

app.listen(3000);
module.exports.app = app;
