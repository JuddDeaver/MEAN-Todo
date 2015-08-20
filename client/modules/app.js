var polls_app = angular.module('polls_app', ['ngRoute']);

polls_app.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: 'partials/login.html'
    })
    .when('/dashboard',{
        templateUrl: 'partials/dashboard.html'
    })
    .when('/poll/:id',{
        templateUrl: 'partials/survey.html'
    })
    .when('/create',{
        templateUrl: 'partials/create.html'
    })
    .otherwise({
      redirectTo: '/'
    });
});