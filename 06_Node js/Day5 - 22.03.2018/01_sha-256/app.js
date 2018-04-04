const {SHA256} = require('crypto-js');

//------example to testing the hash
 var message1 = 'Zohar';
 var message2 = 'Noam';
 var hash1 = SHA256(message1).toString();  //sha256 to userName
 var hash2 = SHA256(message2).toString();  //sha256 to password
 var hash3 = SHA256(hash1+hash2+"xyz").toString();


 console.log(`Hash1: ${hash1}`);
 console.log(`Hash2: ${hash2}`);
 console.log(`Hash3: ${hash3}`);

 var hashTest = SHA256(`${SHA256('Zohar')}`+`${SHA256('Noam')}`+"xyz").toString();  //sha256 to userName
 console.log(`hash3==hashTest: ${hash3==hashTest}`);