Todos.TodoController = Ember.ObjectController.extend({
  isCompleted: function(key, value){
    var model = this.get('model');
    
    if(value === undefined){
      return model.get('isCompleted');
    }else{
      model.set('isCompleted', value);
      model.save();
      
      return value;
    }
    //function is marked as a computer property whose value is dependent on the value of model.isCompleted
  }.property('model.isCompleted')
});