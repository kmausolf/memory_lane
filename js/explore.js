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

//declares arrays to store category elements
var musicArray = 'music' + localStorage.selected_year;
var showsArray = 'shows' + localStorage.selected_year;
var moviesArray = 'movies' + localStorage.selected_year;

//filles in the news section
function fill_news() {

}

//fills in music section
function fill_music() {
  "use strict";
  shuffle_array(window[musicArray]);

  document.getElementById("music_thumbnail1").src = window[musicArray][0].picture;
  document.getElementById("music_thumbnail2").src = window[musicArray][1].picture;
  document.getElementById("music_thumbnail3").src = window[musicArray][2].picture;
  document.getElementById("music_thumbnail4").src = window[musicArray][3].picture;
}

//fills in the shows section
function fill_shows() {
  "use strict";
  shuffle_array(window[showsArray]);

  document.getElementById("shows_thumbnail1").src = window[showsArray][0].picture;
  document.getElementById("shows_thumbnail2").src = window[showsArray][1].picture;
  document.getElementById("shows_thumbnail3").src = window[showsArray][2].picture;
  document.getElementById("shows_thumbnail4").src = window[showsArray][3].picture;

}

//fills in the movies section
function fill_movies() {
  "use strict";
  shuffle_array(window[moviesArray]);
  
  document.getElementById("movies_thumbnail1").src = window[moviesArray][0].picture;
  document.getElementById("movies_thumbnail2").src = window[moviesArray][1].picture;
  document.getElementById("movies_thumbnail3").src = window[moviesArray][2].picture;
  document.getElementById("movies_thumbnail4").src = window[moviesArray][3].picture;
}

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

function onCatClick(cat, img) {
    //variable for section+year (ex: movies1970)
    cat = cat + localStorage.selected_year;
    //set up data for closeup page load
    localStorage.setItem('cat', JSON.stringify(window[cat]));
    localStorage.setItem('img', img);
    location.assign("closeup.html");
};