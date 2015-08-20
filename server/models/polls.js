// This is the poll.js file located at /server/models/poll.js
// We want to create a file that has the schema for our polls and creates a model that we can then call upon in our controller
var mongoose = require('mongoose');
// create our pollSchema
var pollSchema = new mongoose.Schema({
  createdBy: String,
  question: String,
  createdAt: Date,
  options: [{option: String, voteCount: Number}]
});
// use the schema to create the model
// Note that creating a model CREATES the collection in the database (makes the collection plural)


// // we can add validations using the .path() method.
// pollSchema.path('createdBy').required(true, 'User name cannot be blank');
// pollSchema.path('question').required(true, 'question cannot be blank');
// pollSchema.path('createdAt').required(true, 'createdAt cannot be blank');
// pollSchema.path('options').required(true, 'created_at cannot be blank');

mongoose.model('poll', pollSchema);
