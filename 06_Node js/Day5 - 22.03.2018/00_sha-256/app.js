const {SHA256} = require('crypto-js');

//------example to testing the hash
 var message = 'Test hash sha256';
 var hash = SHA256(message).toString();
 console.log(`Message: ${message}`);
 console.log(`Hash: ${hash}`);

var data = {
  id: '01234'
};

var token=SHA256(JSON.stringify(data) + 'hash secret key').toString();
var userHash = SHA256(JSON.stringify(data) + 'hash secret key').toString();

(userHash === token)?console.log('Ok'):console.log('Not ok!');
