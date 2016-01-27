
'use strict';

var http = require('http');

function get(url) {
  // Return a new promise.
  return new Promise(function(resolve, reject) {
    // Do the usual request stuff
    http.get(url, function(res) {
        var body = '';
        res.on('data', function(chunk) {
            body += chunk;
        });
        res.on('end', function() {
            resolve(body);
        });
    }).on('error', function(err) {
        reject(err);
    });
  });
}

function getMovie(movieId) {
	get("http://www.omdbapi.com/?i={movieId}&plot=short&r=json")
	.then(function() {
		console.log()
	})
	.catch(function(err) {
		console.error(err);
	});
}

// Exercise 1: Brain-dead Promises
// function add2(num) {
// 	var promise = new Promise(function(resolve, reject) {
// 		resolve(num);
// 	});
// 	promise.then(function(num) {
// 		return num + 2;
// 	}).then(function(num) {
// 		console.log(num);
// 	})
// }

// add2(3);