/*jslint devel: true */

//closure for javascript
//(function () {

/****************************** Start ******************************/

//calls functions on page load
$(document).ready(function(){

});

/****************************** Functions ******************************/

//test function
function testFunction() {

  console.log('getting user info...');
  //get user info

  //Initialize Firebase?
  var app;
  try {
    config = {
      //NOTE: public apiKey is a security issue
      apiKey: "AIzaSyABzPj3JJjsth_x7iEEeus_diIj_Hx3ajg",
      authDomain: "cse-170.firebaseapp.com",
      databaseURL: "https://cse-170.firebaseio.com",
      projectId: "cse-170",
      storageBucket: "cse-170.appspot.com"
    };
    app = firebase.app();
  }
  catch(e) {
    app = firebase.initializeApp(config);
  }

  /*
  //lets firebase be used elsewhere
  var firebaseApp = firebase.initializeApp(config);
  module.exports.FBApp = firebaseApp.database();
  */

  var user = firebase.auth().currentUser;
  var name, email, photoUrl, uid, emailVerified;
  if (user != null) {
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
  }

  console.log('printing user info...');
  console.log(name);
  console.log(email);
  console.log(photoUrl);
  console.log(emailVerified);
  console.log(uid);






}






