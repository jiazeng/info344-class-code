'use strict';

var express = require('express');

//export so that can use outside this module
module.exports.Router = function(Story) {
    var router = express.Router();
    
    router.get('/stories', function(req, res, next) {
       //return all stories from the database
       //res.json([]); 
       Story.getAll()
            .then(function(rows) {
                res.json(rows);
            })
            .catch(next);
    });
    
    router.post('/storeis', function(req, res, next) {
        //insert a new story into the database
        //and return the data with default values
        //applied
        //res.json({});
        Story.insert(req.body)
            .then(function(row){
                res.json(row);
            })
            .catch(next);
    });
    router.post('/stories/:id/votes', function(req, res, next) {
        //upvote the story and return the full story with current number of votes
        //res.json({});
        Story.upVote();
    });
    
    return router;
    
}
