const router = require('express').Router();
const controllers = require('./controllers.js');

router
  .route('/todoList')
  .get(controllers.get)
  .post(controllers.post)
  .delete(controllers.delete)

//router
// .route('/chores')
// .get(controllers.chores.get)
// .post(controllers.chores.post)

//^This is if you have multiple databases???

module.exports = router;