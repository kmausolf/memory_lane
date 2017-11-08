/*jslint devel: true */

//Fisher-Yates shuffle to shuffle an array
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

//calls function upon page load
$(document).ready(function(){
  fill_news();
  fill_music();
  fill_shows();
  fill_movies();
});

//shuffles an array
function shuffle_array(array) {
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
  //return the shuffled array
  return array;
}

function fill_news() {

}

function fill_music() {
  "use strict";
  var musicArray = 'music' + localStorage.selected_year;
  shuffle_array(window[musicArray]);

  document.getElementById("music_link1").href = "closeup.html";
  document.getElementById("music_thumbnail1").src = window[musicArray][0].picture;

  document.getElementById("music_link2").href = "closeup.html";
  document.getElementById("music_thumbnail2").src = window[musicArray][1].picture;

  document.getElementById("music_link3").href = "closeup.html";
  document.getElementById("music_thumbnail3").src = window[musicArray][2].picture;

  document.getElementById("music_link4").href = "closeup.html";
  document.getElementById("music_thumbnail4").src = window[musicArray][3].picture;
}

function fill_shows() {
  "use strict";
  var showsArray = 'shows' + localStorage.selected_year;
  shuffle_array(window[showsArray]);

  document.getElementById("shows_link1").href = "closeup.html";
  document.getElementById("shows_thumbnail1").src = window[showsArray][0].picture;

  document.getElementById("shows_link2").href = "closeup.html";
  document.getElementById("shows_thumbnail2").src = window[showsArray][1].picture;

  document.getElementById("shows_link3").href = "closeup.html";
  document.getElementById("shows_thumbnail3").src = window[showsArray][2].picture;

  document.getElementById("shows_link4").href = "closeup.html";
  document.getElementById("shows_thumbnail4").src = window[showsArray][3].picture;
}

function fill_movies() {
  "use strict";
  var moviesArray = 'movies' + localStorage.selected_year;
  shuffle_array(window[moviesArray]);

  document.getElementById("movies_link1").href = "closeup.html";
  document.getElementById("movies_thumbnail1").src = window[moviesArray][0].picture;

  document.getElementById("movies_link2").href = "closeup.html";
  document.getElementById("movies_thumbnail2").src = window[moviesArray][1].picture;

  document.getElementById("movies_link3").href = "closeup.html";
  document.getElementById("movies_thumbnail3").src = window[moviesArray][2].picture;

  document.getElementById("movies_link4").href = "closeup.html";
  document.getElementById("movies_thumbnail4").src = window[moviesArray][3].picture;
}