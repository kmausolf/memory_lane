(function() {
	var objects = [
	{"type": "Movie", "title": "Harry Potter and the Deathly Hallows Part 1", "picture": "Years/2010/Movies/Harry_Potter_And_The_Deathly_Hallows_Part_1_Image.jpg", "year": "2010", "description": "This movie was iconic for a generation of readers and watchers of J.K. Rowling's household story"},
	{"type": "Song", "title": "Rocket Man", "picture": "Years/1972/Songs/Rocket_Man.jpg", "year": "1972", "description": "Elton John is a real talent and this song will take you back to the 70s for sure!"}
	]

	var source = $("#display-template").html();
	var template = Handlebars.compile(source);

	var parentDiv = $("#display-result");

	var html = template(objects[0]);
	console.log(html);
	parentDiv.append(html);
})();