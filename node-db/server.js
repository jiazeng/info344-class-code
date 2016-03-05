<<<<<<< HEAD
/* global __dirname */
'use strict';


//load modules
<<<<<<< HEAD
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
=======
>>>>>>> 73c3867c7416c8f5a2bba02c279db1b1d04edbda
=======
'use strict';

>>>>>>> dd127347d12c8bb16a0f6d7fa4d2cd6133701c08
var express = require('express');
var morgan = require('morgan');                         //logging
var bodyParser = require('body-parser');                //body parsing
var mysql = require('mysql');                           //database
var dbConfig = require('./secret/config-maria.json');   //database config
var bluebird = require('bluebird');                     //promise wrapper

//create a connection pool to the MariaDB server
//this allow multiple queries to execute against
//the database in parallel
var connPool = bluebird.promisifyAll(mysql.createPool(dbConfig));

//require our stories controller
var storiesApi = require('./controllers/stories-api');
//require our story model
var stories = require('./models/stories.js').Model(connPool);

//create the express application
var app = express();

//log requests
app.use(morgan('dev'));
//parse JSON in the request body
app.use(bodyParser.json());

//serve static files from the /static subdirectory
app.use(express.static(__dirname + '/static'));

//mount the stories API router under /api/v1
app.use('/api/v1', storiesApi.Router(stories));

//start listening for HTTP requests on port 80
app.listen(80, function() {
    console.log('server is listening...'); 
});
<<<<<<< HEAD
>>>>>>> 278f399a03f67ccb40c80ec9fe59b166249f0dbb
=======
<<<<<<< HEAD
Status API Training Shop Blog About Pricing
=======
>>>>>>> dd127347d12c8bb16a0f6d7fa4d2cd6133701c08
>>>>>>> 73c3867c7416c8f5a2bba02c279db1b1d04edbda
