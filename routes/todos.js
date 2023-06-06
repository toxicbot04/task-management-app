const express = require('express');
const router = express.Router();

// Import the Todo model and other necessary modules
const Todo = require('../models/todo');

// Define the API routes
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, description } = req.body; // Change `completed` to `description`
    const todo = await Todo.create({ title, description }); // Change `completed` to `description`
    res.json(todo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Export the router
module.exports = router;
