var app = angular.module('madLib');

app.controller('storyCtrl', function($scope, storyService){
  $scope.insert = storyService.storeInputs();
});
