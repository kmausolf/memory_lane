(function() {
	var objects = [
	{"type": "Movie", "title": "Harry Potter and the Deathly Hallows Part 1", "picture": "Years/2010/Movies/Harry_Potter_And_The_Deathly_Hallows_Part_1_Image.jpg", "year": "2010", "description": "This movie was iconic for a generation of readers and watchers of J.K. Rowling's household story"},
	{"type": "Song", "title": "Rocket Man", "picture": "Years/1972/Songs/Rocket_Man.jpg", "year": "1972", "description": "Elton John is a real talent and this song will take you back to the 70s for sure!"}
	]

	//---------------------------BEGIN DATASET----------------------------------

	var music1970 = [
		{"type": "Song", "artist": "Wild Cherry", "title": "Play That Funky Music", "picture": "Years/1970/Music/wcpf.jpg", "year": "1976", "description": "White boy not required."},
		{"type": "Song", "artist": "Hot Stuff", "title": "Donna Summer", "picture": "Years/1970/Music/dshs.jpg", "year": "1979", "description": "Only the hottest of stuff here at Memory Lane!"},
		{"type": "Song", "artist": "Andy Gibb", "title": "Shadow Dancing", "picture": "Years/1970/Music/agsd.jpg", "year": "1978", "description": "Dance all night!"},
		{"type": "Song", "artist": "Marvin Gaye", "title": "Let's Get It On", "picture": "Years/1970/Music/mgl.jpg", "year": "1973", "description": "For the lovers out there!"},
		{"type": "Song", "artist": "Rod Stewart", "title": "Tonight's The Night (Gonna Be Alright)", "picture": "Years/1970/Music/rst.jpg", "year": "1976", "description": "It's gonna be aaaaaaalright."},
		{"type": "Song", "artist": "Debby Boone", "title": "You Light Up My Life", "picture": "Years/1970/Music/dbyl.jpg", "year": "1977", "description": "It... Lights up my life too."},
		{"type": "Song", "artist": "Bee Gees", "title": "Stayin' Alive", "picture": "Years/1970/Music/bgs.jpg", "year": "1977", "description": "Get down with the Bee Gees!"},
		{"type": "Song", "artist": "Elton John", "title": "Rocket Man", "picture": "Years/1970/Rocket_Man.jpg", "year": "1972", "description": "Elton John is a real talent and this song will take you back to the 70s for sure!"}
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

	var music1960 = [
		{"type": "Song", "artist": "The Beatles", "title": "Hey Jude", "picture": "Years/1960/Music/tbhj.jpg", "year": "1968", "description": "Carry on in the great beyond, John Lennon!"},
		{"type": "Song", "artist": "Chubby Checker", "title": "The Twist", "picture": "Years/1960/Music/cct.jpg", "year": "1960", "description": "The song that started the craze!"},
		{"type": "Song", "artist": "The Monkees", "title": "I'm A Believer", "picture": "Years/1960/Music/tmib.jpg", "year": "1966", "description": "Believe in that beauty!"},
		{"type": "Song", "artist": "Marvin Gaye", "title": "I Heard It Through The Grapevine", "picture": "Years/1960/Music/mggv.jpg", "year": "1968", "description": "Peak Date: December 14, 1968"},
		{"type": "Song", "artist": "Elvis Presley", "title": "It's Now Or Never", "picture": "Years/1960/Music/epnn.jpg", "year": "1960", "description": "Peak Date: August 20, 1960"},
		{"type": "Song", "artist": "Brenda Lee", "title": "I'm Sorry", "picture": "Years/1960/Music/blis.jpg", "year": "1960", "description": "Peak Date: July 23, 1960"},
		{"type": "Song", "artist": "Louis Armstrong", "title": "Hello, Dolly!", "picture": "Years/1960/Music/lahd.jpg", "year": "1964", "description": "Peak Date: May 9, 1964"},
		{"type": "Song", "artist": "The Four Seasons", "title": "Big Girls Don't Cry", "picture": "Years/1960/Music/fsbg.jpg", "year": "1962", "description": "Peak Date: November 17, 1962"}
	]

	var movies1960 = [
		{"type": "Movie", "director": "Alfred Hitchcock", "title": "Psycho",  "picture": "Years/1960/Movies/ahp.jpg", "year": "1960", "description": "A Phoenix secretary embezzles $40,000 from her employer's client, goes on the run, and checks into a remote motel run by a young man under the domination of his mother."},
		{"type": "Movie", "director": "Roman Polanski", "title": "Rosemary's Baby",  "picture": "Years/1960/Movies/rprb.jpg", "year": "1968", "description": "A young couple moves in to an apartment only to be surrounded by peculiar neighbors and occurrences. When the wife becomes mysteriously pregnant, paranoia over the safety of her unborn child begins to control her life."},
		{"type": "Movie", "director": "Sergio Leone", "title": "The Good, the Bad, and the Ugly",  "picture": "Years/1960/Movies/gbu.jpg", "year": "1966", "description": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery."},
		{"type": "Movie", "director": "Franklin J. Shaffner", "title": "Planet of the Apes",  "picture": "Years/1960/Movies/poa.jpg", "year": "1968", "description": "An astronaut crew crash-lands on a planet in the distant future where intelligent talking apes are the dominant species, and humans are the oppressed and enslaved."},
		{"type": "Movie", "director": "George A. Romero", "title": "Night of the Living Dead",  "picture": "Years/1960/Movies/nold.jpg", "year": "1968", "description": "There is panic throughout the nation as the dead suddenly come back to life. The film follows a group of characters who barricade themselves in an old farmhouse in an attempt to remain safe from these bloodthirsty, flesh-eating monsters."},
		{"type": "Movie", "director": "Stanley Kubrick", "title": "2001: A Space Odyssey",  "picture": "Years/1960/Movies/2001.jpg", "year": "1968", "description": "Humanity finds a mysterious, obviously artificial object buried beneath the Lunar surface and, with the intelligent computer H.A.L. 9000, sets off on a quest."},
		{"type": "Movie", "director": "Robert Wise", "title": "The Haunting",  "picture": "Years/1960/Movies/rwth.jpg", "year": "1963", "description": "A scientist doing research on the paranormal invites two women to a haunted mansion. One of the participants soon starts losing her mind."},
		{"type": "Movie", "director": "Roger Vadim", "title": "Barbarella",  "picture": "Years/1960/Movies/rvb.jpg", "year": "1968", "description": "Barbarella, an astronaut from the 41st century, sets out to find and stop the evil scientist Durand Durand, whose Positronic Ray threatens to bring evil back into the galaxy."}
	]

	var shows1960 = [
		{"type": "Show", "creator": "Sheldon Leonard, Aaron Ruben, Danny Thomas", "title": "The Andy Griffith Show",  "picture": "Years/1960/Shows/amc.jpg", "year": "1960", "description": "Widower Sheriff Andy Taylor, and his son Opie, live with Andy's Aunt Bee in Mayberry, North Carolina. With virtually no crimes to solve, most of Andy's time is spent philosophizing and calming down his cousin Deputy Barney Fife."},
		{"type": "Show", "creator": "", "title": "My Three Sons",  "picture": "Years/1960/Shows/mts.jpg", "year": "1960", "description": "Widower Steve Douglas raises three sons with the help of his father-in-law, and is later aided by the boys' great-uncle. An adopted son, a stepdaughter, wives, and another generation of sons join the loving family in later seasons."},
		{"type": "Show", "creator": "Joseph Barbera, William Hanna", "title": "The Flintstones",  "picture": "Years/1960/Shows/hbtf.jpg", "year": "1960", "description": "The misadventures of two modern-day Stone Age families, the Flintstones and the Rubbles."},
		{"type": "Show", "creator": "Stirling Silliphant, Herbert B. Leonard", "title": "Route 66",  "picture": "Years/1960/Shows/rt66.jpg", "year": "1960", "description": "The adventures of two young drifters across America."},
		{"type": "Show", "creator": "Elzie Crisler Segar", "title": "Popeye the Sailor",  "picture": "Years/1960/Shows/pop.jpg", "year": "1960", "description": "The continuing animated adventures of Olive Oyl, Wimpy, Swee'pea and Popeye."},
		{"type": "Show", "creator": "Eric Ambler", "title": "Checkmate",  "picture": "Years/1960/Shows/chk.jpg", "year": "1960", "description": "Don Corey and Jed Sills operate Checkmate, Inc., a very high priced detective agency in San Francisco. Helping them protect the lives of their clients is British criminologist (once an Oxford professor) Carl Hyatt."},
		{"type": "Show", "creator": "Sam Peckinpah", "title": "The Westerner",  "picture": "Years/1960/Shows/sptw.jpg", "year": "1960", "description": "Laconic cowboy Dave Blasingame wanders the Wild West with his faithful dog Brown and the occasional companionship of pal Burgundy Smith."},
		{"type": "Show", "creator": "Harry Julian Fink", "title": "Tate",  "picture": "Years/1960/Shows/hjft.jpg", "year": "1960", "description": "The adventures of a one-armed gunfighter (he lost the use of an arm during the Civil War) in the Old West."}
	]

	var music1950 = [
		{"type": "Song", "artist": "The Elegants", "title": "Little Star", "picture": "Years/1950/Music/tels.jpg", "year": "1958", "description": "Yes, this is doo-wop Twinkle Twinkle Little Star."},
		{"type": "Song", "artist": "Ricky Nelson", "title": "Poor Little Fool", "picture": "Years/1950/Music/rndl.jpg", "year": "1958", "description": "A 50's teen anthem."},
		{"type": "Song", "artist": "Paul Anka", "title": "Lonely Boy", "picture": "Years/1950/Music/palb.jpg", "year": "1959", "description": "So lonely..."},
		{"type": "Song", "artist": "Georgia Gibbs", "title": "Kiss Of Fire", "picture": "Years/1950/Music/ggkf.jpg", "year": "1952", "description": "A bittersweet love song."},
		{"type": "Song", "artist": "The Crew-Cuts", "title": "Sh-Boom", "picture": "Years/1950/Music/ccsb.jpg", "year": "1954", "description": "Life could be a dream, or it could be The Crew-Cuts."},
		{"type": "Song", "artist": "Rosemary Clooney", "title": "Come On-A My House", "picture": "Years/1950/Music/rcch.jpg", "year": "1955", "description": "Come on over, now!"},
		{"type": "Song", "artist": "Johnny Horton", "title": "The Battle Of New Orleans", "picture": "Years/1950/Music/jhbn.jpg", "year": "1959", "description": "The British are coming!"},
		{"type": "Song", "artist": "Frank Sinatra", "title": "Learnin' The Blues", "picture": "Years/1950/Music/fslb.jpg", "year": "1955", "description": "Everybody learns sometime."}
	]

	var movies1950 = [
		{"type": "Movie", "director": "Sidney Lumet", "title": "12 Angry Men",  "picture": "Years/1950/Movies/12am.jpg", "year": "1957", "description": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence."},
		{"type": "Movie", "director": "William Castle", "title": "House on Haunted Hill", "picture": "Years/1950/Movies/hhh.jpg", "year": "1959", "description": "A millionaire offers $10,000 to five people who agree to be locked in a large, spooky, rented house overnight with him and his wife."},
		{"type": "Movie", "director": "Alfred Hitchcock", "title": "Rear Window", "picture": "Years/1950/Movies/ahrw.jpg", "year": "1954", "description": "A wheelchair-bound photographer spies on his neighbours from his apartment window and becomes convinced one of them has committed murder."},
		{"type": "Movie", "director": "Andre De Toth", "title": "House of Wax", "picture": "Years/1950/Movies/how.jpg", "year": "1953", "description": "An associate burns down a wax museum with the owner inside, but he survives only to become vengeful and murderous."},
		{"type": "Movie", "director": "Robert Wise", "title": "Run Silent Run Deep", "picture": "Years/1950/Movies/rsrd.jpg", "year": "1958", "description": "A U.S. sub commander, obsessed with sinking a certain Japanese ship, butts heads with his first officer and crew."},
		{"type": "Movie", "director": "Akira Kurosawa", "title": "Seven Samurai", "picture": "Years/1950/Movies/akss.jpg", "year": "1954", "description": "A poor village under attack by bandits recruits seven unemployed samurai to help them defend themselves."},
		{"type": "Movie", "director": "Jack Arnold", "title": "Creature from the Black Lagoon", "picture": "Years/1950/Movies/cfbb.jpg", "year": "1954", "description": "A strange prehistoric beast lurks in the depths of the Amazonian jungle. A group of scientists try to capture the animal and bring it back to civilization for study."},
		{"type": "Movie", "director": "Joseph L. Mankiewicz", "title": "The Barefoot Contessa", "picture": "Years/1950/Movies/tbca.jpg", "year": "1954", "description": "At Maria Vargas' funeral, several people recall who she was and the impact she had on them."}
	]

	var shows1950 = [
		{"type": "Show", "creator": "", "title": "What's My Line?",  "picture": "Years/1950/Shows/wml.jpg", "year": "1950", "description": "Four panelists must determine guests' occupations - and, in the case of famous guests, while blindfolded, their identity - by asking only yes or no questions."},
		{"type": "Show", "creator": "", "title": "The George Burns and Gracie Allen Show",  "picture": "Years/1950/Shows/gbga.jpg", "year": "1950", "description": "Neighbor Blanche Morton frequently joins Gracie in escapades which annoy hubby Harry and provide George with an opportunity to offer a humorous soliloquy."},
		{"type": "Show", "creator": "", "title": "The Cisco Kid",  "picture": "Years/1950/Shows/tck.jpg", "year": "1950", "description": "The Cisco Kid and his English-mangling sidekick Pancho travel the old west in the grand tradition of the Lone Ranger, righting wrongs and fighting injustice wherever they find it."},
		{"type": "Show", "creator": "", "title": "The Jack Benny Program",  "picture": "Years/1950/Shows/jbp.jpg", "year": "1950", "description": "The comic misadventures of the skinflint comedian and his friends."},
		{"type": "Show", "creator": "Sylvester L. Weaver Jr.", "title": "Your Show of Shows",  "picture": "Years/1950/Shows/ysos.jpg", "year": "1950", "description": "Live, original comedy originally featuring Sid Caesar and Imogene Coca. Carl Reiner and Howard Morris joined the show later."},
		{"type": "Show", "creator": "Fred Hamilton", "title": "The Colgate Comedy Hour",  "picture": "Years/1950/Shows/cch.jpg", "year": "1950", "description": "This was a Colgate sponsored Comedy hour that featured many notable Comedians and Entertainers of the era as Guest Stars."},
		{"type": "Show", "creator": "", "title": "You Bet Your Life",  "picture": "Years/1950/Shows/ybyl.jpg", "year": "1950", "description": "Groucho Marx hosts a quiz show which features a series of competitive questions and a great deal of humourous conversation."},
		{"type": "Show", "creator": "", "title": "Danger",  "picture": "Years/1950/Shows/dang.jpg", "year": "1950", "description": "Live psychological and murder mystery dramas and one of the first U.S. TV dramas to make effective use of background music."}
	]
	
	//-----------------------------END DATASET----------------------------------

	var source = $("#display-template").html();
	var template = Handlebars.compile(source);

	var parentDiv = $("#display-result");

	var html = template(objects[0]);
	console.log(html);
	parentDiv.append(html);
})();
