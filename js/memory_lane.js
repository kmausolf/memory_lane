//closure for javascript
(function(){
	//create module
	//define module
	var app = angular.module('years', []);

	//define controller
	//capitalcase always!
	app.controller('CountController', ['$scope', function($){
		$scope.count = 0;

		$scope.increaseCount = function() {
			if( $scope.count < 10 )
				$scope.count += 1;
			
		};

		$scope.decreaseCount = function() {
			if( $scope.count > 0 ) {
				$scope.count -= 1;
			};
		};
	}]);
})();