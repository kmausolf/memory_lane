(function(){

  var app = angular.module('settings', []);

  app.controller("ButtonCtrl", function($scope){
    $scope.musicActive = true;
    $scope.moviesActive = true;
    $scope.showsActive = true;

    $scope.toggleActive = function(cat){
      if(cat == "music"){
        //Toggle the musicActive button, and save its state in localStorage
        $scope.musicActive = !$scope.musicActive;
        localStorage.setItem("show_music", $scope.musicActive);
      }//end music if
      else if (cat == "movies") {
        //Toggle the moviesActive button, and save its state in localStorage
        $scope.moviesActive = !$scope.moviesActive;
        localStorage.setItem("show_movies", $scope.moviesActive);
      }//end movies if
      else if(cat == "shows"){
        //Toggle the musicActive button, and save its state in localStorage
        $scope.showsActive = !$scope.showsActive;
        localStorage.setItem("show_shows", $scope.showsActive);
      }//end shows if
    };//end toggleMusic

  });//end Buttons

})();
