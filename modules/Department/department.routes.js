const express = require('express')
const router = express.Router()
const departmentController =   require('./department.controller');

// Retrieve all employees
router.get('/', departmentController.findAll);

// Create a new employee
router.post('/', departmentController.create);

// Retrieve a single employee with id
router.get('/:id', departmentController.findById);

// Update a employee with id
router.put('/:id', departmentController.update);

// Delete a employee with id
router.delete('/delete/:id', departmentController.delete);

module.exports = router
