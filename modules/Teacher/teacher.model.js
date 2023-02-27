'use strict';
var dbConn = require('../../config/db.config');
//ListingCategoSubry object create

var Teacher = function (teachers) {
  this.name = teachers.name;
  this.email = teachers.email;
  this.password = teachers.password;
  this.department = teachers.department;
  this.created_at = new Date();
  this.updated_at = new Date();
};
Teacher.create = function (teachers, result) {
  dbConn.query("INSERT INTO teacher set name=?, email=?, password=?, department=?",
    [teachers.name, teachers.email, teachers.password, teachers.department], function (err, res) {
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

Teacher.findById = function (ID, result) {
  dbConn.query(`Select * from teacher where id=?`, ID, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};

Teacher.findAll = function (result) {
  dbConn.query(`Select * from  teacher `, function (err, res) {
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

Teacher.update = function (ID, departments, result) {
  dbConn.query("UPDATE teacher SET  Name=?, Email=?, Password=?, Department=? WHERE id = ?",
    [teachers.Name, teachers.Email, teachers.Password, teachers.Department, ID], function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
};

Teacher.delete = function (ID, result) {
  dbConn.query("DELETE from teacher  WHERE id = ?", [ID], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Teacher;
