/*jslint devel: true */

//NOTE for future reference: firebase.auth().currentUser.uid is the user's ID, unique to the Firebase project. Do NOT use this value to authenticate with your backend server, if you have one. Use User.getToken() instead.

//closure for javascript
//(function () {

/****************************** Setup ******************************/

//calls functions on page load
//$(document).ready(function(){

//Tries to use previously initialized firebaseApp
var app;
try {
  app = firebase.app();
}
//If firebaseApp has not yet been initialized, initializes it
catch(e) {
  console.log('initializing firebaseApp...');
  config = {
    //NOTE: public apiKey is a security issue
    apiKey: "AIzaSyABzPj3JJjsth_x7iEEeus_diIj_Hx3ajg",
    authDomain: "cse-170.firebaseapp.com",
    databaseURL: "https://cse-170.firebaseio.com",
    projectId: "cse-170",
    storageBucket: "cse-170.appspot.com"
  };
  app = firebase.initializeApp(config);
}

//})();//end of ready function

/****************************** Functions ******************************/

//Initializes user data in firebase with the user's email and uid.
function initializeUserData() {

  //Declare variables
  var user, email, uid;
  //Initialize variables
  user = firebase.auth().currentUser;
  if (user != null) {
    //variables
    email = user.email;
    uid = user.uid;
  }
  else {
    console.log('User is null. Cannot initialize user data.');
    return;
  }

  //writes to firebase
  console.log('Initializing user data with:');
  console.log('   email : ' + email);
  console.log('   user id: ' + uid);
  firebase.database().ref('users/' + uid).update({
    email: email,
    userID: uid
  });
}

//Uses the "path" param to find the "field" in firebase
//and sets the value of that field to "value".
//If changing field with uid as root, use '' as the path value.
function writeUserData(path, field, value) {
  //test function: write user data to firebase

  //Declare variables
  var user, uid;
  //Initialize variables
  user = firebase.auth().currentUser;
  if (user != null) {
    uid = user.uid;
  }
  else {
    console.log('User is null. Cannot write user data to database.');
    return;
  }

  //writes to firebase
  console.log('Updating user ' + field + ' field to: ' + value)
  firebase.database().ref('users/' + uid + path).update({
    [field]: value
  });
}

//Returns a promise for the user data (specified by "field" param) 
//based on the path (using the uid as the root of the path).
function getUserData(path, field) {

  //Declare variables
  var user, email, uid;
  //Initialize user id
  user = firebase.auth().currentUser;
  if (user == null) {
    console.log('User is null. Cannot get user data.');
    return;
  }
  var uid = user.uid;
  //get firebase database reference to appropriate data in firebase
  var ref = firebase.database().ref('/users/' + uid + path).child(field);

  //Uses the reference to get the value of the appropriate element.
  //Utilizes firebase promise to return a promise of the data
  return ref.once('value').then(function(dataSnapshot) {
    console.log('getUserData returned: ' + dataSnapshot.val());
    return Promise.resolve(dataSnapshot.val());
    //error handling if promise was rejected
  }, function(error) {
    console.log('The promise was rejected.');
    console.log(error);
    return null;
  });
};

/****************************** Old Code ******************************/

/*
  firebase.auth().currentUser.once('value').then(function(snapshot) {
    console.log('first part of promise');
    console.log(snapshot.val());
  }, function(error) {
    console.log('error occurred while initializing app:');
    console.log(error);
  });
  console.log('creating current user instance...')
*/

/*
//fires when the user is logged in
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('User is signed in');
  } else {
    console.log('No user is signed in');
  }
});

if(user == null){
  console.log('User not yet logged in');
}
else {
  console.log('getCurrentUser returned logged in');
}
*/

/*
  //attempt at sync function
  var syncRef = new Firebase("https://cse-170.firebaseio.com");
  var authData = syncRef.getAuth();
  if (authData) {
    console.log('synchronous call successful');
    console.log("User " + authData.uid + " is logged in with " + authData.provider);
  } else {
    console.log('synchronous call unsuccessful');
    console.log("User is logged out");
  }
  */

/*
  //delay script
  var start = new Date().getTime();
  var end = start;
  while(end < start + 1000) {
    end = new Date().getTime();
  }
  */