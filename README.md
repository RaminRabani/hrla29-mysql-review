# mysql-review

#Exercise-1 <br />
Install any dependencies you need and write a start script for your server.  Make sure that your requests are hitting your endpoints (test through Postman or Insomnia).


//1. sudo npm install
//2. sudo npm install mysql
//3. sudo npm install mysql2
//4. sudo npm install sequelize

//5. in package json under scripts add: "start": "nodemon ./server/index.js"

//6. in terminal, npm run build

/7. Check Postman to see its working
  // in postman: http://localhost:3000/api/todoList (should hang since theres response sent yet, just dont get 404).

#Exercise-2 <br />
Create an index.js file in your database directory. Inside of that file, use sequelize to establish a connection to your database.
Export your connection.

//1. Make a new folder on the same level of server and client
//2. make a new file in that folder called index.js

******http://docs.sequelizejs.com/manual/getting-started.html****

//3. write everthing in that index.js
//4. open a new tab in terminal and open mysql shell:
  //mysql -u root -p (take out the -p right now since you dont have a password)
  //type password
  CREATE DATABASE todo_list;
  show databases;

//5. go to server/index.js
  // at the top:
   // const db = require('../database/index.js')


#Exercise-3 <br />
Create a models.js file inside your database directory. Inside of that file, construct your schemas to have fields for todo name and list name and export those schemas.

//1. make model.js in database folder
//2. write the code thats in model.js

//3. In server/controller: 
  // add at the top const db = require('../database/models.js';

#Exercise-4 <br />
Inside of your controller.js, import your database models and build out your controller functions.

//1. fill in functions in controllers
//2. Make a request in Postman
  //(Example: POST request):
  // POST
  // localhost:3000/api/todoList
  //==> body
  // --raw
  //JSON
  //enter into the body:
    // {
      "todo" : "clean floor",
      "listName" : "Todos"
    }
  //check mysql in terminal to see if it worked (with SELECT * .....)

//3. Test GET request in Postman too
  //must set param key to listname and the value to the list name (example: todos);
//4. Test DELETE
  //Must set param to index and value to id of the todo you are deleting