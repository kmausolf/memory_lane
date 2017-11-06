/*
(getHeight() {
  var object = document.getElementById('content_box')
  var width = object.width();
  return width;
}):
*/




//randomly select from a folder
var i = Math.floor(Math.random() * 6) + 1;
$("#my-div").load('//' + i + '.html');




var path = '/path-to-files/',
files = ['1.php', '2.php', '3.php', '4.php', '5.php', '6.php'],
i = Math.floor(Math.random()*files.length);
var url = (path+files[i]);
$("#my-div").load(url);