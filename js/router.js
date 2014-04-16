Todos.Router.map(function () {
  //detect the '/' URL and render the todos template
  this.resource('todos', { path: '/' });
});

//class with a model function that returns all existing todos
Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});