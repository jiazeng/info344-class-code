'use strict';

var should = require('should'); // assertion testing

var shorten = require('../lib/shorten');

describe('shorten module', function() {
	it('should encode an id to a path', function() {
		var enc = shorten.encode(99999);
		should.exist(enc); // test enc is not null && not undefined
		enc.length.should.be.above(0);
	});
	
	it('shold decode a path back to the same id', function() {
		var id = 99999;
		shorten.decode(shorten.encode(id)).should.equal(id);
	});
});