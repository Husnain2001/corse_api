'use strict';
const  Course = require('./courses.model');

exports.findAll = function (req, res) {
  Course.findAll(function (err, Course) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', Course);
    res.send(Course);
  });
};

exports.create = function (req, res) {
  const new_Course = new Course(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Course.create(new_Course, function (err, Course) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "Course added successfully!", data: Course });
    });
  }
};

exports.findById = function (req, res) {
    Course.findById(req.params.id, function (err, Course) {
    if (err)
      res.send(err);
    res.json(Course);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Course.update(req.params.id, new Course(req.body), function (err, Course) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'Course successfully updated' });
    });
  }
};

exports.delete = function (req, res) {
    Course.delete(req.params.id, function (err, Course) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'Course successfully deleted' });
  });
};
