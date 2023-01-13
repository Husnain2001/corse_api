'use strict';
var dbConn = require('../../config/db.config');
//ListingCategoSubry object create

var Department = function (departments) {
  this.department = departments.department;
  this.degree = departments.degree;
  this.created_at = new Date();
  this.updated_at = new Date();
};
Department.create = function (departments, result) {
  dbConn.query("INSERT INTO department set department=?, degree=?",
    [departments.department, departments.degree], function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      }
      else {
        console.log(res.insertId);
        result(null, res.insertId);
      }
    });
};

Department.findById = function (id, result) {
  dbConn.query(`Select * from department where id=?`, id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};

Department.findAll = function (result) {
  dbConn.query(`Select * from  department `, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    }
    else {
      console.log('listingcategory : ', res);
      result(null, res);
    }
  });
};

Department.update = function (id, departments, result) {
  dbConn.query("UPDATE department SET department=?, degree=?  WHERE id = ?",
    [departments.department, departments.degree, id], function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
};

Department.delete = function (id, result) {
  dbConn.query("DELETE from department  WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Department;
