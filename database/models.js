const Sequelize = require('sequelize');
const connection = require('./index.js');

const Todo = connection.define('todos', { // 'todos' is the table name //
  // attributes
  todo: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  listName: {
    type: Sequelize.STRING(50),
    allowNull: false
    // allowNull defaults to true
  }
}, {
  // options
  timestamps: false
});

connection.sync({force: false});

module.exports.Todo = Todo;