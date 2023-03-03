const express = require('express')
const router = express.Router()
const coursefileController =   require('./coursefile.controller');

// Retrieve all employees
router.get('/', coursefileController.findAll);

// Create a new employee
router.post('/', coursefileController.create);

// Retrieve a single employee with id
router.get('/:id', coursefileController.findById);

// Update a employee with id
router.put('/:id', coursefileController.update);

// Delete a employee with id
router.delete('/delete/:id', coursefileController.delete);

module.exports = router
