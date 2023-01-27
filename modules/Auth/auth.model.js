"use strict";
var dbConn = require("../../config/db.config");

var bcrypt = require("bcrypt");
const saltRounds = 10;

/* Require JWT */ 
var jwt = require("jsonwebtoken");
var secret = require("../../config/secret.config");
var jwtSecret = secret.jwt;

var Auth = function (auth) {
  this.firstname = auth.firstname;
  this.lastname = auth.lastname;
  this.email = auth.email;
  this.password = auth.password; 
  this.role = auth.role;
  
  this.created_at = new Date(); 
};

Auth.create = function (auth, result) {
  bcrypt.hash(auth.password, saltRounds, function (err, hash) {
    dbConn.query( "INSERT INTO user set firstname=?, lastname=?, email=?, password=?, role=?",
      [auth.firstname, auth.lastname, auth.email, hash, auth.role],
      function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(err, null);
        } else {
          result(null, res.insertId);
        }
      }
    );
  });
};

/*
  Error 0 means no error
  Error 1 means no Account
  Error 2 means invalid Password
*/

Auth.login = function (auth, result) {
  dbConn.query( 
    `SELECT user.id, CONCAT(firstname, lastname) AS Name, email, password, role FROM user
    WHERE email = ?`,
    [auth.email, auth.role], 
    (err, res) => {
      if (res.length != 0) {
        bcrypt.compare(auth.password, res[0].password, (err, hash) => {
          if (hash == true) {
            let id = res[0].id;
            var token = "";
            if (auth.remember === 1) {
              token = jwt.sign({ id }, jwtSecret, { expiresIn: 60 * 60 * 72 });
            } else {
              token = jwt.sign({ id }, jwtSecret, { expiresIn: 60 * 60 * 12 });
            }
            delete res[0].id;
            delete res[0].password;
            result(null, 0, token, res[0]);
          } else {
            result(null, 2);
          }
        });
      } else {
        result(null, 1);
      }
    }
  );
};

Auth.update = function (id, auth, image, result) {
  dbConn.query(
    `UPDATE user set firstname=?, lastname=?, email=?, ${ image ? `image = '${image}'` : "" } WHERE id=?`,
    [auth.firstname, auth.lastname, auth.email, id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res); 
      }
    }
  );
};

Auth.findbyId = function (auth, result) {
  dbConn.query(
    `Select * from user where id=?`, id,
    function (err, res) {  
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("city : ", res);
        result(null, res);
      }
    }
  );
};


Auth.findAll = function (result) {
  dbConn.query(
    `Select * from user`,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("city : ", res);
        result(null, res);
      }
    }
  );
};

Auth.delete = function (id, result) {
  dbConn.query("DELETE from user  WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

Auth.Count = function (result) {
  dbConn.query(
    `SELECT COUNT(id) as id FROM user`,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("user : ", res);
        result(null, res);
      }
    }
  );
};

module.exports = Auth;
