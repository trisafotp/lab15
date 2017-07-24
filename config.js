var app = angular.module('madLib');

app.config(function($routeProvider){
  $routeProvider
  .when('/inputForm', {
    controller: 'inputController',
    templateUrl: 'inputForm.html'
  })
  .when('/story', {
    controller: 'insertController',
    templateUrl: 'story.html'
  })
  .otherwise({
    redirectTo: '/form'
  });
});
