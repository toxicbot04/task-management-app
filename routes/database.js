const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('todos', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
});

// Test the database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;
