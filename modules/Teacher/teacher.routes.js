const express = require('express')
const router = express.Router()
const teacherController =   require('./teacher.controller');

// Retrieve all employees
router.get('/', teacherController.findAll);

// Create a new employee
router.post('/', teacherController.create);

// Retrieve a single employee with id
router.get('/:id', teacherController.findById);

// Update a employee with id
router.put('/:id', teacherController.update);

// Delete a employee with id
router.delete('/delete/:id', teacherController.delete);

module.exports = router
