  // notice how we're putting $http into the factory!
  polls_app.factory('pollFactory', function($http) {
    var factory = {};
    var polls = [];
    // lets edit our angular factory's getpolls method as follows
    factory.getPolls = function(callback) {
      $http.get('polls').success(function(output) {
        callback(output);
      })
    }
    factory.getPoll = function(_id, callback) {
      console.log("factory getPoll", _id);
      $http.get('poll/' + _id).success(function(output) {
        callback(output);
      })
    }
    factory.removePoll = function(poll, callback) {
      $http.delete('poll/' + poll._id).success(function(output) {
        callback(output);
      })
    }
    factory.addPoll = function(poll, callback) {
      $http.post('poll', poll).success(function(output) {
          callback(output);
        })
      }
    return factory;
  });