//a new custom component that focuses the <input> when it appears
Todos.EditTodoView = Ember.TextField.extend({
  didInsertElement: function() {
    this.$().focus();
  }
});

//register with handlebars to make it available to our templates
Ember.Handlebars.helper('edit-todo', Todos.EditTodoView);