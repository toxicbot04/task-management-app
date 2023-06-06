const express = require('express');
const app = express();
const port = 4000;

// Import the todos routes
const todosRouter = require('./routes/todos');

// Set up middleware to parse JSON request bodies
app.use(express.json());

// Mount the todos routes at the '/todos' path
app.use('/todos', todosRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
