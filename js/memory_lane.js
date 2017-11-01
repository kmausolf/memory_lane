//closure for javascript
(function(){
	//create module
	//define module
	var app = angular.module('selecting', []);

	var year = [
		{
		 thousands: 0, 
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
			year[0][place] = this.count;
			
		};

		this.decreaseCount = function(place) {
			if( this.count > 0 ) 
				this.count -= 1;
			year[0][place] = this.count;
		};
	});

	app.controller('ExploreController', function(){
		this.currentYear = (year[0]['thousands']*1000 + year[0]['hundreds']*100 + year[0]['tens']*10 + year[0]['ones']);

		/* Figure out why the heck currentYear evaluates to 0 in the if statement */
		this.checkYear = function(){
			console.log(year[0]['thousands']*1000 + year[0]['hundreds']*100 + year[0]['tens']*10 + year[0]['ones']);
			
			if( (year[0]['thousands']*1000 + year[0]['hundreds']*100 + year[0]['tens']*10 + year[0]['ones']) > 1980 ){
				window.location = "explore2.html";
			}
			else {
				window.location = "explore.html";
			}
			
		}

	});
})();


