var app = angular.module('madLib');
  app.factory('storyService', function(){
    var inputs = {};
    function insertInputs(userInputs){
      inputs = userInputs;
    };
    function storeInputs(){
      return inputs;
    };
  });
