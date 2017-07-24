var app = angular.module('madLib');
  app.factory('storyService', function(){

    return {
      insertInputs: insertInputs,
      storeInputs: storeInputs
    }
    var inputs = {};
    function insertInputs(userInputs){
      inputs = userInputs;
    };
    function storeInputs(){
      return inputs;
    };
  });
