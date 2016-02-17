/* global __dirname */
'use strict';


//load modules
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var dbConfig = require('./secret/config-maria.json');
var bluebird = require('bluebird'); //vagrant, tsd install

var storiesApi = require('./controllers/stories-api.js');

var connPool = bluebird.promisifyAll(mysql.createPoll(dbConfig));
var Story = require('./models/story.js').Model(connPool);

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/static'));

app.use('/api/v1', storiesApi.Router(Story));

app.listen(80, function() {
    console.log('server is listening...');
});


//NOTES IN CLASS ABOUT CODE STRUCTURE
//the way of segmenting code
//controlers/ implements routes related to similar thing
//modeles/ works with database (get, insert, upload, data validation), 
//      seperate from urls, html and other codes
//      seperare from http protocols, abstract the way of interacting with data
//dependenc injection, model creae ConnectionPool, can switch which kind of database or where it lives
//      allows server.js to wire it up, by passing in the connPool
//static/ static files served from the express.static middleware


//controllers/  
//      modules that implement route handlers
//models/
//      modules that deine models or functions that manipulate models
//static/
//      static files erved form the express.static middleware
//server.js
//package.jasn