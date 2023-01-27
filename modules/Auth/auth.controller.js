"use strict";
const Auth = require("./auth.model");


/* Require JWT */
var jwt = require("jsonwebtoken");
var secret = require("../../config/secret.config.js");
var jwtSecret = secret.jwt;

exports.findAll = function (req, res) {
  Auth.findAll(function (err, auth) {
    if (err) res.send(err);
    res.send(auth);
  });
}; 

// Login a user 
exports.login = function (req, res) {
  const data = new Auth(req.body);
  //handles null error
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    res
      .status(400)
      .send({ error: true, message: "Please provide all required field" });
  } else {
    Auth.login(data, function (err, error, token, user) {
      if (err) res.send(err);
      res.json({ error: error, token: token, user:user })
    })
  }
};

exports.create = function (req, res) {
    const new_code = new Auth(req.body);
    //handles null error
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
      res .status(400) .send({ error: true, message: "Please provide all required field" });
    } else {
      Auth.create(new_code, function (err, auth) {
        if (err) res.send(err);
        res.json({ error: false, message: "Your login create successfully successfully!", data: auth,
        });
      });
    }
};
  
exports.update = function (req, res) {
  const token = req.headers["x-access-token"];
  console.log(req);
  jwt.verify(token, jwtSecret, function (err, decoded) {
    if (decoded) {
      const new_auth = new Auth(req.body);
      const image = typeof req.file === "undefined" ? "" : req.file.key;

      //handles null error
      Auth.update(decoded.id, new_auth, image, function (err, image) {
        console.log(decoded.id);
        if (err) res.send(err);
        res.json({
          error: false,
          message: "User updated successfully!",
          data: image,
        });
      });
    } else {
      res.json({ error: false, message: "Authentication Failed" });
    }
  });
};


exports.findById = function (req, res) {
  Auth.findById(req.params.id, function (err, auth) {
      if (err) res.send(err);
      res.json(auth);
  });
};

exports.delete = function (req, res) {
  Auth.delete(req.params.id, function (err, staff) {
    if (err)
      res.send(err);
    res.json({ error: false, message: 'User successfully deleted' });
  });
};

exports.Count = function (req, res) {
  Auth.Count(function (err, auth) {
    if (err) res.send(err);
    res.send(auth);
  });
}; 
