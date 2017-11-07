(function() {
  /*jslint devel: true */

  var shuffle_movies, fill_movies;


  //Fisher-Yates shuffle to shuffle an array
  //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  function shuffle_movies(array) {
      //"use strict";

      alert('wtf2');
      
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
      //"use strict";

      alert('wtf1');
      shuffle_movies(movies);
      
      alert('wtf3');
      
      document.getElementById("movies_link1").href = movies[0] + ".html";
      document.getElementById("movies_thumbnail1").src = movies[0] + "_Image.jpg";
      
      document.getElementById("movies_link2").href = movies[1] + ".html";
      document.getElementById("movies_thumbnail2").src = movies[1] + "_Image.jpg";
      
      document.getElementById("movies_link3").href = movies[2] + ".html";
      document.getElementById("movies_thumnail3").src = movies[2] + "_Image.jpg";
      
      document.getElementById("movies_link4").href = movies[3] + ".html";
      document.getElementById("movies_thumbnail4").src = movies[3] + "_Image.jpg";
      
      alert('movies[0]');
      alert(movies[1]);
      alert(movies[2]);
      alert(movies[3]);
  }




  /*
  Black_Swan.html
  Black_Swan_Image.jpg
  Harry_Potter_And_The_Deathly_Hallows_Part_1.html
  Harry_Potter_And_The_Deathly_Hallows_Part_1_Image.jpg
  Inception.html
  Inception_Image.jpg
  Insidious.html
  Insidious_Image.jpg
  Kick_Ass.html
  Kick_Ass_Image.jpg
  Saw_3D.html
  Saw_3D_Image.jpg
  Scott_Pilgrim.html
  Scott_Pilgrim_Image.jpg
  Shutter_Island.html
  Shutter_Island_Image.jpg
  Toy_Story_3.html
  Toy_Story_3_Image.jpg
  */

})();