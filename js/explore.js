/*jslint devel: true */

//Fisher-Yates shuffle to shuffle an array
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

//calls function upon page load
$(document).ready(function(){
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

var movies = ["Black_Swan",
              "Harry_Potter_And_The_Deathly_Hallows_Part_1",
              "Inception",
              "Insidious",
              "Kick_Ass",
              "Saw_3D",
              "Scott_Pilgrim",
              "Shutter_Island",
              "Toy_Story_3"];

function fill_movies() {
    "use strict";

    shuffle_array(movies);

    document.getElementById("movies_link1").href = "Years/2010/Movies/" + movies[0] + ".html";
    document.getElementById("movies_thumbnail1").src = "Years/2010/Movies/" + movies[0] + "_Image.jpg";

    document.getElementById("movies_link2").href = "Years/2010/Movies/" + movies[1] + ".html";
    document.getElementById("movies_thumbnail2").src = "Years/2010/Movies/" + movies[1] + "_Image.jpg";

    document.getElementById("movies_link3").href = "Years/2010/Movies/" + movies[2] + ".html";
    document.getElementById("movies_thumbnail3").src = "Years/2010/Movies/" + movies[2] + "_Image.jpg";

    document.getElementById("movies_link4").href = "Years/2010/Movies/" + movies[3] + ".html";
    document.getElementById("movies_thumbnail4").src = "Years/2010/Movies/" + movies[3] + "_Image.jpg";
}
