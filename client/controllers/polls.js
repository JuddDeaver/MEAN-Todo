polls_app.controller('pollsController', function($scope, pollFactory, $location) {
  var loginName = "";
  var that = this;
  that.title = "Login";

  that.polls = pollFactory.getPolls(function(data) {
    that.polls = data;
    console.log("controller getPolls:", that.polls[0].question);
  });

  that.getPolls = function() {
    pollFactory.getPolls(function(data) {
      that.polls = data;
    });
  }
  that.addPoll = function(data) {

    var poll = {};
    poll.createdBy = that.loginName;
    poll.question = data.question;
    poll.createdAt = new Date();
    poll.options = [];
    if (data.option_1)
    {
      poll.options.push({option: data.option_1, voteCount:0 });
    }
    if (data.option_2)
    {
      poll.options.push({option: data.option_2, voteCount:0 });
    }
    if (data.option_3)
    {
      poll.options.push({option: data.option_3, voteCount:0 });
    }
    if (data.option_4)
    {
      poll.options.push({option: data.option_4, voteCount:0 });
    }

    pollFactory.addPoll(poll, function(data) {
      that.polls = data;
      that.poll = {};
    });
  }
  that.removePoll = function (poll){
    pollFactory.removePoll(poll, function(data) {
      that.polls = data;
      that.poll = {};
    });
  }
  that.loginUser = function(login) {
    that.loginName = login;
    that.getPolls();
    $location.path("/dashboard");
  }
});