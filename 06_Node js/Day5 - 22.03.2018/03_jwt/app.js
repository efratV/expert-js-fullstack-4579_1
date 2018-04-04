
const jwt = require('jsonwebtoken');

function setToken(ms) {

  setTimeout(function () {
    var data = {
      id: 10,
      time: Date.now()
    };

    var token = jwt.sign(data, 'my secret');
    console.log(token);


    var decoded = jwt.verify(token, 'my secret');
    console.log('decoded', decoded);
  }, ms);

}


setToken(1000);
setToken(5000);