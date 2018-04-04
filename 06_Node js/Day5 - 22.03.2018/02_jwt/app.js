
const jwt = require('jsonwebtoken');

var data = {
  id: 10,
  name: "Zohar"
};


/**
* Synchronously sign the given payload into a JSON Web Token string
* @param payload - Payload to sign, could be an literal, buffer or string
* @param secretOrPrivateKey - the secret for HMAC algorithms
* @returns - The JSON Web Token string
*/
var token = jwt.sign(data, 'my secret');
console.log(token);


/**
* Synchronously verify given token using a secret or a public key to get a decoded token
* @param token - JWT string to verify
* @param secretOrPublicKey - the secret for HMAC algorithms
* @returns - The decoded token.
*/
var decoded = jwt.verify(token, 'my secret');
console.log('decoded', decoded);

