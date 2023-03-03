'use strict';
var dbConn = require('../../config/db.config');
//ListingCategoSubry object create

var Coursefile = function (coursefiles) {
  this.session = coursefiles.session;
  this.coursename = coursefiles.coursename;
  this.department = coursefiles.department;
  this.semester = coursefiles.semester;
  this.teacher = coursefiles.teacher;
  
};
Coursefile.create = function (coursefiles, result) {
  dbConn.query("INSERT INTO coursefile set coursename=?, session=?, department=?, semester=?, teacher=?",
    [coursefiles.coursename,coursefiles.session, coursefiles.department, coursefiles.semester,coursefiles.teacher], function (err, res) {
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

Coursefile.findById = function (id, result) {
  dbConn.query(`Select * from coursefile where id=?`, id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};

Coursefile.findAll = function (result) {
  dbConn.query(`Select * from  coursefile `, function (err, res) {
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

Coursefile.update = function (id, coursefiles, result) {
  dbConn.query("UPDATE coursefile SET coursename=?, session=?, department=?, semester=?, teacher=? WHERE id = ?",
    [coursefiles.coursename,coursefiles.session, coursefiles.department, coursefiles.semester,coursefiles.teacher,id], function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
};

Coursefile.delete = function (id, result) {
  dbConn.query("DELETE from coursefile  WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Coursefile;
