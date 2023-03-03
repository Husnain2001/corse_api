const express = require('express')
const router = express.Router()
const dashboardController =   require('./dashboard.controller');

// Get all counts
router.get('/count', dashboardController.count);