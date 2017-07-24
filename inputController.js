var app = angular.module('madLib');

app.controller('inputCtrl', function($scope, storyService, $location){
  $scope.transferInputs = function(userInputs){
      storyService.insertInputs(userInputs);
      $location.path('/story');
    };
});
