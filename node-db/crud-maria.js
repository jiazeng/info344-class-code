'use strict';

var mysql = require('mysql');
var bluebird = require('bluebird');

// load connection info
var dbConfig = require('./secret/config-maria.json');

// create a connection to the database
// var conn = mysql.createConnection(dbConfig);
var conn = bluebird.promisifyAll(mysql.createConnection(dbConfig));

// id of newly inserted row
var id;

// conn.query('SELECT * FROM stories', function (err, rows) {
// 	if (err) {
// 		console.error(err);
// 	} else {
// 		console.log('%d rows returned', rows.length);
// 		rows.forEach(function(row) {
// 			console.log(row);
// 		});
// 	}
// 	conn.end();
// });

function logRow(row) {
	console.log(row);
}

// iterates over log rows
function logRows(rows) {
	rows.forEach(logRow);
}

conn.queryAsync('INSERT INTO stories (url) values (?)', ['http://google.com'])
	.then(function(results) {
		console.log('row inserted, new id = %s', results.insertId);	
		id = results.insertId;
		return conn.queryAsync('SELECT * FROM stories WHERE id=?', [results.insertId]);
	})
	.then(logRows)
	.then(function(rows) {
		logRow(rows);
		return conn.queryAsync('update stories set votes=votes+1 WHERE id=?', [id])
	})
	.then(function(results) {
		console.log('%d rows affected', results.affectedRows)
		return conn.queryAsync('SELECT * FROM stories WHERE id=?', [id]);
	})
	// .then(function(rows) {
	// 	logRow(rows[0]);
	// })
	// same as above
	.then(logRows)
	.then(function() {
		return conn.queryAsync('delete from stories where id=?', [id]);
	})
	.then(function(results) {
		console.log('%d rows affected', results.affectedRows);
	})
	.catch(function(err) {
		console.error(err);
		conn.end();
	})
	.then(function() {
		conn.end();
	});