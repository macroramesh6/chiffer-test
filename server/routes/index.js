// const todosController = require('../controllers').todos;
// const todoItemsController = require('../controllers').todoItems;
const userController = require('../controllers').users;
const orgController = require('../controllers').organizations;
const projects = require('../controllers').projects;
const tasks = require('../controllers').tasks;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));
  
  // Organization routes
  app.post('/api/org', orgController.create);
  app.get('/api/orgs', orgController.list);
  app.put('/api/org/:orgId', orgController.update);
  app.delete('/api/org/:orgId', orgController.destroy);
  
  // User routes
  app.post('/api/:orgId/user', userController.create);

  // Projects
  app.post('/api/:orgId/project', projects.create);
  app.get('/api/:orgId/projects', projects.list);
  app.put('/api/project/:projectId', projects.update);
  app.delete('/api/project/:projectId', projects.destroy);


  // Task
  app.post('/api/task/:projectId', tasks.create);
  app.get('/api/task/:orgId/:projectId', tasks.list);
  app.put('/api/:projectId/task', tasks.update);
  app.delete('/api/:projectId/task/:taskId', tasks.destroy);

/*
  app.post('/api/todos', todosController.create);
  app.get('/api/todos', todosController.list);
  app.get('/api/todos/:todoId', todosController.retrieve);
  app.put('/api/todos/:todoId', todosController.update);
  app.delete('/api/todos/:todoId', todosController.destroy);

  app.post('/api/todos/:todoId/items', todoItemsController.create);
  app.put('/api/todos/:todoId/items/:todoItemId', todoItemsController.update);
  app.delete(
    '/api/todos/:todoId/items/:todoItemId', todoItemsController.destroy
  );
  app.all('/api/todos/:todoId/items', (req, res) => res.status(405).send({
    message: 'Method Not Allowed',
  }));
  */
};
