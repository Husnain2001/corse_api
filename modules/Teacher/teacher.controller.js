'use strict';
const Teacher = require('./teacher.model');

exports.findAll = function (req, res) {
    Teacher.findAll(function (err, Teacher) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', Teacher);
    res.send(Teacher);
  });
};

exports.create = function (req, res) {
  const new_Teacher = new Teacher(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Teacher.create(new_Teacher, function (err, Teacher) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "Teacher added successfully!", data: Teacher });
    });
  }
};

exports.findById = function (req, res) {
  Teacher.findById(req.params.id, function (err, Teacher) {
    if (err)
      res.send(err);
    res.json(Teacher);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Teacher.update(req.params.id, new Teacher(req.body), function (err, Teacher) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'Teacher successfully updated' });
    });
  }
};

exports.delete = function (req, res) {
    Teacher.delete(req.params.id, function (err, Teacher) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'Teacher successfully deleted' });
  });
};
