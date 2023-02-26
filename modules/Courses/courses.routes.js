const express = require('express')
const router = express.Router()
const courseController =   require('./courses.controller');

// Retrieve all employees
router.get('/', courseController.findAll);

// Create a new employee
router.post('/', courseController.create);

// Retrieve a single employee with id
router.get('/:id', courseController.findById);

// Update a employee with id
router.put('/:id', courseController.update);

// Delete a employee with id
router.delete('/delete/:id', courseController.delete);

module.exports = router
