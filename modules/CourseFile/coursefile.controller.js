'use strict';
const  Coursefile = require('./coursefile.model');

exports.findAll = function (req, res) {
  Coursefile.findAll(function (err, Coursefile) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', Coursefile);
    res.send(Coursefile);
  });
};

exports.create = function (req, res) {
  const new_Coursefile = new Coursefile(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Coursefile.create(new_Coursefile, function (err, Course) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "Course file added successfully!", data: Coursefile });
    });
  }
};

exports.findById = function (req, res) {
    Coursefle.findById(req.params.id, function (err, Coursefile) {
    if (err)
      res.send(err);
    res.json(Coursefile);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Coursefile.update(req.params.id, new Coursefile(req.body), function (err, Coursefile) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'Course File successfully updated' });
    });
  }
};

exports.delete = function (req, res) {
    Coursefile.delete(req.params.id, function (err, Coursefile) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'Course File successfully deleted' });
  });
};
