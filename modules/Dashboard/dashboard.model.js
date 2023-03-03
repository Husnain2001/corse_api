'use strict';
var dbConn = require('../../config/db.config');

var Dashboard = function (dashboards) {
    this.department = dashboards.department;
    this.courses = dashboards.courses;
    this.teacher = dashboards.teacher;
    
  };
  
SuperCategory.count = function (supercate, result) {
    dbConn.query(`SELECT count(*) as total FROM courseprofile`, function (err, res) {
        if (err) {
          console.log("error: ", err);
          result(null, err);
        } else {
          result(null, res);
        } 
      });
  };