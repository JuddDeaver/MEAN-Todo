// First add the following two lines at the top of the polls controller so that we can access our model through var poll
// need to infouire mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var poll = mongoose.model('poll');

// Edit the show method as follows
module.exports = (function() {
 return {

// Create
  // New (get)
  // Create (post)
    create: function(req, res) {
      console.log(req.body);
      var new_poll = new poll({
        createdBy: req.body.createdBy,
        question: req.body.question,
        createdAt: req.body.createdAt,
        options: req.body.options
      });
      new_poll.save(
        function(err) {
        if(err) {
          console.log('something went wrong', err);
        } else { // else console.log that we did well and then redirect to the root route
          console.log('successfully added a poll!');
          poll.find({},function(err,data){
            res.json(data);
          })
        }
      })
      new_poll = {};
    },


// Retrieve
  // Index (all records)
  index: function(req, res) {
      console.log("polls index function")
     poll.find(
      {},
      function(err, results) {
       if(err) {
      console.log("polls index function err:", err)
         console.log(err);
       } else {
      console.log("polls index function results", results)
         res.json(results);
       }
   })
  },
  // Show (Single Record)
  show: function(req, res) {
    poll.find(
    {_id: req.params.id},
    function(err, results) {
      if(err) {
        console.log(err);
      } else {
        res.json(results);
      }
    })
  },

// Update
  // Edit (get)
  // Update (post)


// Destroy
  // Delete
  delete: function(req,res) {
    poll.remove(
      {_id: req.params.id},
      function(err, results) {
        if (err) {
          console.log(err);
        } else {
          poll.find({},function(err,data){
            res.json(data);
          })
      }
    });




  // return poll.findById(req.params.id, function (error, poll) {
  //         return scope.poll.remove(function (error) {
  //             if (error) {
  //                 console.log(error);
  //             } else {
  //                 console.log("deleted poll: " + req.params.id);
  //                 return res.send();
  //             }
  //         });
  //     })
  }


 }
})();
// note that this is just a code snippet of the show method from the object returned in the controller (this includes the exports module.exports
