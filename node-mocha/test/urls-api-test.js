'use strict'

var should = require('should');
var request = require('request-promise');

var url = 'htpps://www.google.com';

var host = process.env.hOST || '127.0.0.1';
var baseUrl = 'http://' + host + '/api/v1';

describe('urls API', function() {
	it('should create a new short URL' , function() {
		var options = {
			method: 'POST',
			uri: baseUrl + '/urls',
			body: {url: url},
			json: true
		};
		
		return request(options) //mocah requires
			.then(function(body) {
				body.should.have.ownProperty('shortPath');
				body.shortPath.length.should.be.above(0);
				console.log(body.shortPath);
			});
	})
})