//closure for javascript
(function(){
	//create module
	//define module
	var app = angular.module('selecting', []);

	var year = [
		{
		 thousands: 1,
		 hundreds: 9,
		 tens: 7,
		 ones: 0,
		}
	]

	//define controller
	//capitalcase always!
	app.controller('CountController', function(){

		this.increaseCount = function(place) {
			if( year[0][place] < 9 ){
				year[0][place] += 1;
			}//end if
			else{
				year[0][place] = 0;
			}//end else

		};//end increaseCount

		this.decreaseCount = function(place) {
			if( year[0][place] > 0 ){
				year[0][place] -= 1;
			}//end if
			else {
				year[0][place] = 9;
			}//end else
		};//end decreaseCount

		this.getValByPlace = function(place) {
			return year[0][place];
		};//end getValByPlace
	});//end CountController

	app.controller('ExploreController', function(){
		this.currentYear = (year[0]['thousands']*1000 + year[0]['hundreds']*100 + year[0]['tens']*10 + year[0]['ones']);

		/* Figure out why the heck currentYear evaluates to 0 in the if statement */
		this.checkYear = function(){
			this.currentYear = (year[0]['thousands']*1000 + year[0]['hundreds']*100 + year[0]['tens']*10 + year[0]['ones']);

            //keeps track of the current year in localStorage.selected_year
            localStorage.setItem("selected_year", this.currentYear);

            //moves to next page
            window.location = "explore.html";
		}
	});
})();