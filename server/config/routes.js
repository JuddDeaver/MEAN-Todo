// First at the top of your routes.js file you'll have to require the controller
// TODO: CHANGE CONTROLLER NAME
var poll = require('./../controllers/polls.js');
  // This is our routes.js file located in server/config/routes.js
  // This is where we will define all of our routing rules!
  // We will have to require this in the server.js file (and pass it app!)
  module.exports = function(app) {
	app.get('/polls', function(req, res) {
	poll.index(req, res);
	console.log("routes app.get", "res.json", res.json);
	})
	app.post('/poll', function(req, res) {
		console.log("routes app.post",req.body);
	  poll.create(req, res);
	})
	app.delete('/poll/:id', function (req, res) {
		poll.delete(req,res);
	})
  }; 