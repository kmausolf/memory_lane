//closure for javascript
(function(){
	//create module
	//define module
	var app = angular.module('selecting', []);

	//define controller
	//capitalcase always!
	app.controller('CountController', function(){
		this.count = 0;

		this.increaseCount = function() {
			if( this.count < 9 )
				this.count += 1;
			
		};

		this.decreaseCount = function() {
			if( this.count > 0 ) {
				this.count -= 1;
			};
		};
	});
})();