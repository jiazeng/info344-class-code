<<<<<<< HEAD
'user strict'; 
//avoid store a plain text pswd, force them to brute hash
//salt the pswd values, slow hackers down enough
=======
'use strict';

if (process.argv.length < 3) {
    console.log('usage:');
    console.log('    node bcrypt password-to-hash [rounds]');
    process.exit(0);
}
>>>>>>> dd127347d12c8bb16a0f6d7fa4d2cd6133701c08

var bluebird = require('bluebird');
var bcrypt = bluebird.promisifyAll(require('bcrypt'));

<<<<<<< HEAD

var password = process.argv[2];
var rounds = 10;

if(process.argv.length >= 4) {
=======
var password = process.argv[2];
var rounds = 10;

//if there is a 3rd command line arg
//parse it as the number of rounds to use
if (process.argv.length >= 4) {
>>>>>>> dd127347d12c8bb16a0f6d7fa4d2cd6133701c08
    rounds = parseInt(process.argv[3]);
    if (isNaN(rounds)) {
        console.error('number of rounds must be an integer!');
        process.exit(1);
    }
}

console.log("hashing '%s' with %d rounds of bcrypt...", password, rounds);
console.time('duration');

<<<<<<< HEAD
=======
//hash the password with the chosen number of rounds
//this will automatically generate a new salt value
//and include that when hashing the password
>>>>>>> dd127347d12c8bb16a0f6d7fa4d2cd6133701c08
bcrypt.hashAsync(password, rounds)
    .then(function(hash) {
        console.timeEnd('duration');
        console.log(hash);
        
<<<<<<< HEAD
        return [hash, bcrypt.compareAsync(password, hash)];
    })   
    .spread(function(hash, isSame) {
        console.log("comparing hash against '%s': %j", password, isSame);
=======
        //compare the original password with the generated hash
        //this should return true since it's the same password
        return [hash, bcrypt.compareAsync(password, hash)]; 
    })
    .spread(function(hash, isSame) {
        console.log("comparing hash against '%s': %j", password, isSame);
        //change the password and compare again
        //it should return false this time since the password
        //is no longer the same as the one used to generate
        //the hash        
>>>>>>> dd127347d12c8bb16a0f6d7fa4d2cd6133701c08
        password += 'x';
        return [hash, bcrypt.compareAsync(password, hash)];
    })
    .spread(function(hash, isSame) {
<<<<<<< HEAD
                console.log("comparing hash against '%s': %j", password, isSame);
    })
    .catch(function(err) {
       console.error(err);
       process.exit(1); 
    });
=======
        console.log("comparing hash against '%s': %j", password, isSame);        
    })
    .catch(function(err) {
        console.error(err);
        process.exit(1);
    });
    
>>>>>>> dd127347d12c8bb16a0f6d7fa4d2cd6133701c08
