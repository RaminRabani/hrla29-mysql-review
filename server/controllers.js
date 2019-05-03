const db = require('../database/models.js');

module.exports = {

  //chores: {}  //*See routes.js

  post: (req, res) => {
    console.log('IN POST');

    const { todo, listName } = req.body; //THIS LINE VERY IMPORTANT. INFO COMING FROM REQ.BODY (but not always???)
    
    db.Todo.create({
      todo: todo,
      listName: listName
    })
    .then( () => {
      res.status(201).send('Success creating new entry');
    })
    .catch(err => {
      res.status(404).send('Error creating new entry', err);
    });
  },

  get: (req, res) => {
    console.log('IN GET');

    const { listName } = req.query;   ////VERY IMPORTANT!!!!!

    db.Todo.findAll({
      where: {
        listName: listName
      }
    })
    .then(todos => {
      if (todos) {
        res.status(200).send(todos);
      } else {
        res.status(404).send('List not found');
      }
    })
    .catch(err => {
      res.status(404).send('Error getting items', err);
    })
  },

  delete: (req, res) => {
    console.log('IN DELETE');

    const {listName, index} = req.query;

    db.Todo.destroy({
      where: {
        id: index
      }
    })
    .then( () => {
      res.status(202).send('Todo deleted');
    })
    .catch(err => {
      res.status(404).send('Error deleting todo', err);
    })
  }
};