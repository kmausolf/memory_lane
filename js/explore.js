/*jslint devel: true */

//Fisher-Yates shuffle to shuffle an array
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

//loads the displays js file
//$.getScript('js/displays.js', function() { });
//$.getScript('displays.js', function() { });
//let json = require('js/displays.js');
//let json = require('displays.js');

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

/*
var music1970 = [
    {"type": "Song", "artist": "Wild Cherry", "title": "Play That Funky Music", "picture": "Years/1970/Music/wcpf.jpg", "year": "1976", "description": "White boy not required."},
    {"type": "Song", "artist": "Hot Stuff", "title": "Donna Summer", "picture": "Years/1970/Music/dshs.jpg", "year": "1979", "description": "Only the hottest of stuff here at Memory Lane!"},
    {"type": "Song", "artist": "Andy Gibb", "title": "Shadow Dancing", "picture": "Years/1970/Music/agsd.jpg", "year": "1978", "description": "Dance all night!"},
    {"type": "Song", "artist": "Marvin Gaye", "title": "Let's Get It On", "picture": "Years/1970/Music/mgl.jpg", "year": "1973", "description": "For the lovers out there!"},
    {"type": "Song", "artist": "Rod Stewart", "title": "Tonight's The Night (Gonna Be Alright)", "picture": "Years/1970/Music/rst.jpg", "year": "1976", "description": "It's gonna be aaaaaaalright."},
    {"type": "Song", "artist": "Debby Boone", "title": "You Light Up My Life", "picture": "Years/1970/Music/dbyl.jpg", "year": "1977", "description": "It... Lights up my life too."},
    {"type": "Song", "artist": "Bee Gees", "title": "Stayin' Alive", "picture": "Years/1970/Music/bgs.jpg", "year": "1977", "description": "Get down with the Bee Gees!"},
    {"type": "Song", "artist": "Elton John", "title": "Rocket Man", "picture": "Years/1970/Music/Rocket_Man.jpg", "year": "1972", "description": "Elton John is a real talent and this song will take you back to the 70s for sure!"}
]

var shows1970 = [
    {"type": "Show", "creator": "Agnes Nixon", "title": "All My Children",  "picture": "Years/1970/Shows/amc.jpg", "year": "1970", "description": "Set in the fictional East Coast suburb Pine Valley, All My Children is the decades-old, risk-taking soap that centers around Erica Kane and her long line of husbands."},
    {"type": "Show", "creator": "Gerry Anderson, Sylvia Anderson", "title": "UFO",  "picture": "Years/1970/Shows/ufo.jpg", "year": "1970", "description": "In the year 1980 the Earth is threatened by an alien race who kidnap and kill humans and use them for body parts."},
    {"type": "Show", "creator": "James L. Brooks, Allan Burns", "title": "Mary Tyler Moore",  "picture": "Years/1970/Shows/mtm.jpg", "year": "1970", "description": "The lives and trials of a young single woman and her friends, both at work and at home."},
    {"type": "Show", "creator": "Bernard Slade", "title": "The Partridge Family",  "picture": "Years/1970/Shows/tpf.jpg", "year": "1970", "description": "The humourous adventures of a family of pop musicians."},
    {"type": "Show", "creator": "Jerry Belson, Garry Marshall", "title": "The Odd Couple",  "picture": "Years/1970/Shows/toc.jpg", "year": "1970", "description": "Two men, a neat freak and a slob separated from their wives, have to live together despite their differences."},
    {"type": "Show", "creator": "Herman Miller", "title": "McCloud",  "picture": "Years/1970/Shows/hmmc.jpg", "year": "1970", "description": "Sam McCloud is a Marshal from a Taos, New Mexico, who takes a temporary assignment in the New York City Police. His keen sense of detail and detecting subtle clues, learned from his experience, enable him to nab unsuspecting criminals despite his unbelieving boss."},
    {"type": "Show", "creator": "AJ Carothers, Thomas L. Miller", "title": "Nanny and the Professor",  "picture": "Years/1970/Shows/natp.jpg", "year": "1970", "description": "Ever-cheerful Nanny helps the Everett family with her subtly magical abilities, such as seemingly reading minds, seeing the future or making fortunate coincidences happen."},
    {"type": "Show", "creator": "Dan DeCarlo, Richard Goldwater", "title": "Josie and the Pussycats",  "picture": "Years/1970/Shows/jatp.jpg", "year": "1970", "description": "'Josie and the Pussycats' is a pop music group. During their tours are always involved in strange mysteries."}
]

var movies1970 = [
    {"type": "Movie", "director": "John Carpenter", "title": "Halloween",  "picture": "Years/1970/Movies/jch.jpg", "year": "1978", "description": "Fifteen years after murdering his sister on Halloween night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield to kill again."},
    {"type": "Movie", "director": "Jim Sharman", "title": "The Rocky Horror Picture Show",  "picture": "Years/1970/Movies/rhps.jpg", "year": "1975", "description": "A newly engaged couple have a breakdown in an isolated area and must pay a call to the bizarre residence of Dr. Frank-N-Furter."},
    {"type": "Movie", "director": "Francis Ford Coppola", "title": "The Godfather",  "picture": "Years/1970/Movies/ffcg.jpg", "year": "1972", "description": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son."},
    {"type": "Movie", "director": "William Friedkin", "title": "The Exorcist",  "picture": "Years/1970/Movies/wfte.jpg", "year": "1973", "description": "When a girl is possessed by a mysterious entity, her mother seeks the help of two priests to save her daughter."},
    {"type": "Movie", "director": "Sidney Lumet", "title": "Murder on the Orient Express",  "picture": "Years/1970/Movies/moe.jpg", "year": "1974", "description": "In December 1935, when his train is stopped by deep snow, detective Hercule Poirot is called on to solve a murder that occurred in his car the night before."},
    {"type": "Movie", "director": "Stanley Kubrick", "title": "A Clockwork Orange",  "picture": "Years/1970/Movies/aco.jpg", "year": "1971", "description": "In the future, a sadistic gang leader is imprisoned and volunteers for a conduct-aversion experiment, but it doesn't go as planned."},
    {"type": "Movie", "director": "Mel Brooks", "title": "Young Frankenstein",  "picture": "Years/1970/Movies/mbyf.jpg", "year": "1974", "description": "An American grandson of the infamous scientist, struggling to prove that he is not as insane as people believe, is invited to Transylvania, where he discovers the process that reanimates a dead body."},
    {"type": "Movie", "director": "George Lucas", "title": "Star Wars: Episode IV - A New Hope",  "picture": "Years/1970/Movies/anh.jpg", "year": "1977", "description": "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee, and two droids to save the galaxy from the Empire's world-destroying battle-station, while also attempting to rescue Princess Leia from the evil Darth Vader."}
]
*/

function fill_news() {

}

function fill_music() {
    "use strict";
    shuffle_array(music1970);

    document.getElementById("music_link1").href = "#";
    document.getElementById("music_thumbnail1").src = music1970[0].picture;

    document.getElementById("music_link2").href = "#";
    document.getElementById("music_thumbnail2").src = music1970[1].picture;

    document.getElementById("music_link3").href = "#";
    document.getElementById("music_thumbnail3").src = music1970[2].picture;

    document.getElementById("music_link4").href = "#";
    document.getElementById("music_thumbnail4").src = music1970[3].picture;
}

function fill_shows() {
    "use strict";
    shuffle_array(shows1970);

    document.getElementById("shows_link1").href = "#";
    document.getElementById("shows_thumbnail1").src = shows1970[0].picture;

    document.getElementById("shows_link2").href = "#";
    document.getElementById("shows_thumbnail2").src = shows1970[1].picture;

    document.getElementById("shows_link3").href = "#";
    document.getElementById("shows_thumbnail3").src = shows1970[2].picture;

    document.getElementById("shows_link4").href = "#";
    document.getElementById("shows_thumbnail4").src = shows1970[3].picture;
}

function fill_movies() {
    "use strict";
    shuffle_array(movies1970);

    document.getElementById("movies_link1").href = "#";
    document.getElementById("movies_thumbnail1").src = movies1970[0].picture;

    document.getElementById("movies_link2").href = "#";
    document.getElementById("movies_thumbnail2").src = movies1970[1].picture;

    document.getElementById("movies_link3").href = "#";
    document.getElementById("movies_thumbnail3").src = movies1970[2].picture;

    document.getElementById("movies_link4").href = "#";
    document.getElementById("movies_thumbnail4").src = movies1970[3].picture;
}

/*
    document.getElementById("movies_link1").href = "Years/2010/Movies/" + movies[0] + ".html";
    document.getElementById("movies_thumbnail1").src = "Years/2010/Movies/" + movies[0] + "_Image.jpg";

    document.getElementById("movies_link2").href = "Years/2010/Movies/" + movies[1] + ".html";
    document.getElementById("movies_thumbnail2").src = "Years/2010/Movies/" + movies[1] + "_Image.jpg";

    document.getElementById("movies_link3").href = "Years/2010/Movies/" + movies[2] + ".html";
    document.getElementById("movies_thumbnail3").src = "Years/2010/Movies/" + movies[2] + "_Image.jpg";

    document.getElementById("movies_link4").href = "Years/2010/Movies/" + movies[3] + ".html";
    document.getElementById("movies_thumbnail4").src = "Years/2010/Movies/" + movies[3] + "_Image.jpg";
    */

/*
    var movies = ["Black_Swan",
              "Harry_Potter_And_The_Deathly_Hallows_Part_1",
              "Inception",
              "Insidious",
              "Kick_Ass",
              "Saw_3D",
              "Scott_Pilgrim",
              "Shutter_Island",
              "Toy_Story_3"];
    */