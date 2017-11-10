var source = $("#display-template").html();
var template = Handlebars.compile(source);
var cat = JSON.parse(localStorage.getItem('cat'));
var obj = localStorage.getItem('img');
var parentDiv = $("#display-result");

function newPage() {
  for( var i = 0; i < cat.length; i++ ) {
    if( cat[i]['picture'] == obj ) {
      var temp = cat[i];
      break;
    }

  }
  var html = template(temp);
  console.log(html);
  parentDiv.append(html);
}


$(document).ready(function() {
  newPage();
  localStorage.setItem("previous_page", "closeup");
});