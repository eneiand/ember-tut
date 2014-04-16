//create an instance of Ember.Application and make it available as Todos 
//variable
window.Todos = Ember.Application.create();

//Fixtures are used to put sample data into an application
//tell the app that our ApplicationAdapter is an extension of
//DS.FixtureAdapter.
Todos.ApplicationAdapter = DS.FixtureAdapter.extend();