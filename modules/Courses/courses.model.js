'use strict';
var dbConn = require('../../config/db.config');
//ListingCategoSubry object create

var Course = function (courses) {
  this.courseid = courses.courseid;
  this.coursename = courses.coursename;
  this.department = courses.department;
  this.shift = courses.shift;
  this.teacher = courses.teacher;
  
};
Course.create = function (courses, result) {
  dbConn.query("INSERT INTO course set coursename=?, courseid=?, department=?, shift=?, teacher=?",
    [courses.coursename,courses.courseid, courses.department, courses.shift,courses.teacher], function (err, res) {
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

Course.findById = function (id, result) {
  dbConn.query(`Select * from course where id=?`, id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    }
    else {
      result(null, res);
    }
  });
};

Course.findAll = function (result) {
  dbConn.query(`Select * from  course `, function (err, res) {
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

Course.update = function (id, courses, result) {
  dbConn.query("UPDATE course SET coursename=?, courseid=?, department=?, shift=?, teacher=? WHERE id = ?",
    [courses.coursename,courses.courseid, courses.department, courses.shift,courses.teacher,id], function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
};

Course.delete = function (id, result) {
  dbConn.query("DELETE from course  WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Course;
