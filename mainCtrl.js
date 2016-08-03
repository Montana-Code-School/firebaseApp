angular.module("ideaList")
.controller("mainCtrl", function($scope, $firebaseArray) {
  var ideaRef = new Firebase('https://idealist-e1141.firebaseio.com/ideas');

  setInterval(function(){
    console.log($scope.newIdea)
  },500)

  $scope.ideas = $firebaseArray(ideaRef);
  $scope.editable = false;

  $scope.addNewIdea = function(newidea){
    $scope.ideas.$add(newidea);
    $scope.newIdea = "";
  };

  $scope.editIdea = function(idea){
    $scope.ideas.$save(idea);
  };

  $scope.deleteIdea = function(idea){
    $scope.ideas.$remove(idea);
  };
});
