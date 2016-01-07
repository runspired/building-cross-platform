/*jshint node:true*/
var md5 = require('md5');

module.exports = function(app) {
  var express = require('express');
  var participantRouter = express.Router();

  var participants = {
    '1': {
      id: '1',
      firstName: 'Chris',
      lastName: 'Thoburn',
      email: 'runspired@gmail.com',
      phoneNumber: '+1 (713) 898-3236',
      buddy: null,
      github: 'runspired',
      gravatar: 'http://www.gravatar.com/avatar/' + md5('runspired@gmail.com')
    },
    '2': {
      id: '2',
      firstName: 'Jeffrey',
      lastName: 'Huang',
      email: 'jeffreyhuang165@gmail.com',
      phoneNumber: '+1 (773) 860-3808',
      buddy: '3',
      github: 'jhuang165',
      gravatar: 'http://www.gravatar.com/avatar/' + md5('jeffreyhuang165@gmail.com')
    },
    '3': {
      id: '3',
      firstName: 'Jianli',
      lastName: 'Huang',
      email: 'jianlihuang@yahoo.com',
      phoneNumber: '+1 (773) 860-3808',
      buddy: '2',
      github: null,
      gravatar: 'http://www.gravatar.com/avatar/' + md5('jianlihuang@yahoo.com')
    }
  };

  participantRouter.get('/', function(req, res) {
    var participantsArray = Object.keys(participants).map(function(key) {
      return participants[key];
    });
    res.send({
      'participants': participantsArray
    });
  });

  participantRouter.get('/:id', function(req, res) {
    res.send({
      'participant': participants[req.params.id]
    });
  });

  participantRouter.put('/:id', function(req, res) {
    Object.assign(participants[req.params.id], req.params);
    res.send({
      'participant': participants[req.params.id]
    });
  });

  participantRouter.delete('/:id', function(req, res) {
    delete participants[req.params.id];
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/participant', require('body-parser'));
  app.use('/api/participants', participantRouter);
};
