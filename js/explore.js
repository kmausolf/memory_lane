/*jslint devel: true */

/****************************** Setup ******************************/

//calls function upon page load
$(document).ready(function(){
  fill_news();
  fill_music();
  fill_shows();
  fill_movies();
});

//declares variables to retrieve the correct data from the js data file
var musicArray = 'music' + localStorage.selected_year;
var showsArray = 'shows' + localStorage.selected_year;
var moviesArray = 'movies' + localStorage.selected_year;

/****************************** Helper Functions ******************************/

//Fisher-Yates shuffle to shuffle an array
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle_array(array, string) {
  "use strict";
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  //store the shuffled array into localStorage
  localStorage.setItem(string, JSON.stringify(array));
}

function set_prev() {
  localStorage.setItem("previous_page", "explore");
}

/****************************** Fills Content Sections ******************************/

//filles in the news section
function fill_news() {

}

//fills in music section
function fill_music() {
  "use strict";
  
  //uses data from localStorage instead of the js data file
  musicArray = JSON.parse(window.localStorage.getItem("musicArray"));
  
  //only shuffles musicArray if called from home page or refresh button
  if(localStorage.getItem("previous_page") != "closeup"){
    shuffle_array(musicArray, "musicArray");
  }
  
  //fills the Music section of explore page
  document.getElementById("music_thumbnail1").src = musicArray[0].picture;
  document.getElementById("music_thumbnail2").src = musicArray[1].picture;
  document.getElementById("music_thumbnail3").src = musicArray[2].picture;
  document.getElementById("music_thumbnail4").src = musicArray[3].picture;
}

//fills in the shows section
function fill_shows() {
  "use strict";
  
  //uses data from localStorage instead of the js data file
  showsArray = JSON.parse(window.localStorage.getItem("showsArray"));
  
  //only shuffles showsArray if called from home page or refresh button
  if(localStorage.getItem("previous_page") != "closeup"){
    shuffle_array(showsArray, "showsArray");
  }

  //fills the Shows section of explore page
  document.getElementById("shows_thumbnail1").src = showsArray[0].picture;
  document.getElementById("shows_thumbnail2").src = showsArray[1].picture;
  document.getElementById("shows_thumbnail3").src = showsArray[2].picture;
  document.getElementById("shows_thumbnail4").src = showsArray[3].picture;

}

//fills in the movies section
function fill_movies() {
  "use strict";
  
  //uses data from localStorage instead of the js data file
  moviesArray = JSON.parse(window.localStorage.getItem("moviesArray"));
  
  //only shuffles moviesArray if called from home page or refresh button
  if(localStorage.getItem("previous_page") != "closeup"){
    shuffle_array(moviesArray, "moviesArray");
  }
  
  //fills the Movies section of explore page  
  document.getElementById("movies_thumbnail1").src = moviesArray[0].picture;
  document.getElementById("movies_thumbnail2").src = moviesArray[1].picture;
  document.getElementById("movies_thumbnail3").src = moviesArray[2].picture;
  document.getElementById("movies_thumbnail4").src = moviesArray[3].picture;
}

/****************************** Content On-Click ******************************/

//functionality for when a thumbnail in a section is clicked
function newPage(cat, img) {
  for( var i = 0; i < cat.length; i++ ) {
    if( cat[i][picture] == img ) {
      var temp = object[0];
      break;
    }
  }
  //fill in template from closeup.html
  var html = template(temp);
  console.log(html);
  parentDiv.append(html);
}

//functionality for when a thumbnail in a section is clicked
function onCatClick(cat, img) {
    //variable for section+year (ex: movies1970)
    cat = cat + localStorage.selected_year;
    //set up data for closeup page load
    localStorage.setItem('cat', JSON.stringify(window[cat]));
    localStorage.setItem('img', img);
    location.assign("closeup.html");
};