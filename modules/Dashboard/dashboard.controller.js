'use strict';
const  Course = require('./dashboard.model');


exports.count = function(req, res) {
    SuperCategory.count(req.params.id, function(err, reaction) {
      if (err)
      res.send(err);
      res.json(reaction);
    });
  }; 