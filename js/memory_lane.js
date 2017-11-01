//closure for javascript
(function(){
	//create module
	//define module
	var app = angular.module('selecting', []);

	var year = [
		{thousands: 0, 
		 hundreds: 0,
		 tens: 0,
		 ones: 0,
		}
	]

	//define controller
	//capitalcase always!
	app.controller('CountController', function(){
		this.count = 0;

		this.increaseCount = function(place) {
			if( this.count < 9 )
				this.count += 1;
			year[0].place = this.count;
			
		};

		this.decreaseCount = function(place) {
			if( this.count > 0 ) 
				this.count -= 1;
			year[0].place = this.count;
		};
	});

	app.controller('ExploreController', function(){
		this.currentYear = (year[0].thousands*1000 + year[0].hundreds*100 + year[0].tens*10 + year[0].ones);

		this.checkYear = function(){
			console.log(currentYear);
			if( currentYear > 1980 ) {
				angular.element("#submit").href = "explore2.html";
			}
		}
	});
})();


