Todos.Router.map(function () {
  //detect the '/' URL and render the todos template
  this.resource('todos', { path: '/' });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});