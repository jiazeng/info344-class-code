'use strict';

//command line: cd dir, vagrant up, vagrant ssh, cd /vagrant
//npm install, tsd install
//if no json file yet, npm init, npm install --save
var express = require('express');
var morgan = require('morgan'); //load morgan to do logging
var bodyParser = require('body-parser'); //parse require json, in json and html syntax files
var session = require('express-session'); //allow user sessions
var RedisStore = require('connect-redis')(session); //stores session
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

var ghConfig = require('./secret/oauth-github.json');
//add the callback URL, which can be relative (i.e., no demain)
ghConfig.callbackURL = 'http://localhost:8080/signin/github/callback';

//create the github authenticaiton strategy
var ghStrategy = new GitHubStrategy(ghConfig, 
    //this function is called after the user has authenticated and Github has
    //returned to our server 'profile'contains the full profile info at this
    //point ou would probably want to create or update a corresponding user 
    //account in your database, as the 'id' property on the profile will be local
    //to GitHub, and may conflict with IDs from other OAuth providers you may support
    function(accessToken, refreshToken, profile, done) {
        console.log('Authentication Successful!');
        console.dir(profile);
        done(null, profile);
    });

//load the cookie signature secret
//this is used to digitally sign the cookie so that 
//express can tell if it was tampered with on the client 
//red this from an environment variable
//set the environment variable using the command
//$export cookie_sig_secret = "my secret value"  
//adnnd then start the server 
var cookieSigSecret = process.env.COOKIE_SIG_SECRET;
if(!cookieSigSecret) {
    console.error('Please set COOKIE_SIG_SECRET');
    process.exit(1);
}

var app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(session( { //session is a function
    secret: cookieSigSecret,
    resave: false,
    saveUninitialized: false,
    store: new RedisStore()
}));

passport.use(ghStrategy);
passport.serializeUser(function(user,done) {
    done(null,user);
});
passport.deserializeUser(function(user,done) {
    done(null,user);
});

app.use(passport.initialize());
app.use(passport.session());

//GET of /signin/github triggers autentication using the GitHub strategy
app.get('/signin/github', passport.authenticate('github'));

//and GitHub redirects back to /signin/github/callback after authentication
//the passport.authenticate('github') receives the response from GitHub
//and processes it, and then our middleware funciton redirects to
//the /secure.html page
app.get('/signin/github/callback', passport.authenticate('github'), 
    function(req, res) {
        res.redirect('/secure.html');
    });
    
 //GET of /signout should end the session and redirect back to the homepage
app.get('/signout', function(req, res) {
    req.logout();
    res.redirect('/');
});

//tell experss to serve static files from the /static/public
//subdirectory (any user can see these)
app.use(express.static(__dirname + '/static/public'));

//add a middleware function to verify that the user is
//autenticated: if so, continue processing; if not,
//redirect back to the home page
//stop users to see /secure page if not authenticated
app.use(function(req, res, next) {
   //TODO: Add code to check req isAutenticated
   //MAYBE HELPFUL: http://passportjs.org/docs/configure
   console.log(req.session);
   if(req.isAuthenticated()) {
       return next();
   }
   res.redirect('/');
   //next(); 
});

//tell express to serve static files form the /static/secure
//subdirectory as well, but since this middleware function
//is added aftre the check above, express will never call it
//if the function above doesn't call next()
app.use(express.static(__dirname + '/static/secure'));

app.get('/api/v1/users/me/', function(req, res) {
    //req.user is the currently authenticated user
    res.json(req.user);
});

//start the user
app.listen(80, function() {
    console.log('server is listening...')
});

//NOTES IN CLASS ABOUT CODE STRUCTURE
//the way of segmenting code
//controler implements routes related to similar thing
//modele works with database (get, insert, upload, data validation), 
//      seperate from urls, html and other codes
//      seperare from http protocols, abstract the way of interacting with data
//dependenc & injection, model creae ConnectionPool, can switch which kind of database or where it lives
//      allows server.js to wire it up, by passing in the connPool