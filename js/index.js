//closure for javascript
(function(){
  //create module
  //define module
  var app = angular.module('selecting', []);

  /****************************** Year Selection ******************************/
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
      //keeps track of which page explore page is being loaded from
      localStorage.setItem("previous_page", "home");

      //moves to next page
      window.location = "explore.html";
    }
  });

  /****************************** Login, Logout, Signup ******************************/

  //Tutorial: https://www.youtube.com/watch?v=-OKrloDzGpU

  //Initialize Firebase
  const config = {
    apiKey: "AIzaSyABzPj3JJjsth_x7iEEeus_diIj_Hx3ajg",
    authDomain: "cse-170.firebaseapp.com",
    databaseURL: "https://cse-170.firebaseio.com",
    projectId: "cse-170",
    storageBucket: "cse-170.appspot.com",
  };
  firebase.initializeApp(config);

  //Get elements from html document
  const login_email = document.getElementById('login_email');
  const login_password = document.getElementById('login_password');
  const login_button = document.getElementById('login_button');
  const logout_button = document.getElementById('logout_button');
  const signup_button = document.getElementById('signup_button');

  //Adds login event
  login_button.addEventListener('click', e => {
    //Get email and password
    const email = login_email.value;
    const password = login_password.value;
    //Attempts to sign in with entered email and password
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    //If signin fails, logs error message to console
    promise.catch(e => console.log(e.message));
  });
  
  //Adds logout event
  logout_button.addEventListener('click', e => {
    firebase.auth.signOut();
  });

  //Adds signup Event
  signup_button.addEventListener('click', e => {
    const email = login_email.value;
    const password = login_password.value;
    //Attempts to sign in with entered email and password
    const auth = firebase.auth();
    const promise = auth.signInWithEmailAndPassword(email, password);
    //If signin fails, logs error message to console
    promise.catch(e => console.log(e.message));
  });
  
  //Add a realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
    //logs the user to the console if the user exists
    if(firebaseUser) {
      console.log(firebaseUser);
      //shows the logout button if the user is already logged in
      logout_button.classList.remove('hide');
    }
    //else logs a message if the user was not logged in
    else {
      console.log('user not logged in');
      //hides the logout button if the user isn't logged in
      logout_button.classList.add('hide');
    }
  });


})();