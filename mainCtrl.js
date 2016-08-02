angular.module("ideaList")
.controller("mainCtrl", function($scope, $firebaseArray, $firebaseAuth) {
  var ideaRef = new Firebase('https://idealist-e1141.firebaseio.com/ideas');
  var authRef = new Firebase('https://idealist-e1141.firebaseio.com/users');
  var auth = $firebaseAuth(authRef);
  
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

  auth.$authWithOAuthPopup("facebook").then(function(authData) {
    console.log("Logged in as:", authData.uid);
  }).catch(function(error) {
    console.log("Authentication failed:", error);
  });
});
