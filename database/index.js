const Sequelize = require('sequelize');
const mysql = require('mysql2');

const connection = new Sequelize('todo_list', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
}); //// line 4 could be wrong based on where you set it up and the password

connection
  .authenticate()
  .then(() => {
    console.log('Success connecting to the database!')
  })
  .catch(err => {
    console.error('Unable to connect ot the database', err);
  });

module.exports = connection;