'use strict';
const Department = require('./department.model');

exports.findAll = function (req, res) {
  Department.findAll(function (err, Department) {
    console.log('controller')
    if (err)
      res.send(err);
    console.log('res', Department);
    res.send(Department);
  });
};

exports.create = function (req, res) {
  const new_Department = new Department(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Department.create(new_Department, function (err, Department) {
      if (err)
        res.send(err);
      res.json({ error: false, message: "Department added successfully!", data: Department });
    });
  }
};

exports.findById = function (req, res) {
  Department.findById(req.params.id, function (err, Department) {
    if (err)
      res.send(err);
    res.json(Department);
  });
};

exports.update = function (req, res) {
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res.status(400).send({ error: true, message: 'Please provide all required field' });
  } else {
    Department.update(req.params.id, new Department(req.body), function (err, Department) {
      if (err)
        res.send(err);
      res.json({ error: false, message: 'Department successfully updated' });
    });
  }
};

exports.delete = function (req, res) {
  Department.delete(req.params.id, function (err, Department) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'Department successfully deleted' });
  });
};
