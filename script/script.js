(function(){
	const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
	const nextButton = document.getElementById('next');
	var myQuestions;
	const myQuestionsHollywood = [{
	question: "       Which two actors directed themselves in movies and won Oscars for Best Actor?",answers : {
	a: "      Al Pacino and Timothy Hutton",
	b: "      Jack Nicholson and Kevin Spacey",
	c: "       Laurence Olivier and Roberto Benigni",
	d: "      Tom Hanks and Paul Newman"},
	correctAnswer:"c"},
	{
	question: "       \"After all, tomorrow is another day!\" was the last line in which Oscar-winning Best Picture?",answers : {
	a: "      Gone With the Wind",
	b: "      Great Expectations",
	c: "       Harold and Maude",
	d: "      The Matrix"},
	correctAnswer:"a"},
	{
	question: "       In Harry Potter, who plays Nearly Headless Nick in the movie?",answers : {
	a: "      Nicholas Cage",
	b: "      John Hurt",
	c: "       John Cleese",
	d: "      Nick Nolte"},
	correctAnswer:"c"},
	{
	question: "       Who is the only person to win an Oscar for Best Director for the only movie he ever directed?",answers : {
	a: "      Bob Fosse",
	b: "      Frank Borzage",
	c: "       Leo McCarey",
	d: "      Jerome Robbins"},
	correctAnswer:"d"},
	{
	question: "       From which year was the Oscars first awarded",answers : {
	a: "      1923",
	b: "      1929",
	c: "       1936",
	d: "      1945"},
	correctAnswer:"b"},
	{
	question: "       Which country was the Lord of the Rings trilogy filmed in?",answers : {
	a: "      Australia",
	b: "      New Zealand",
	c: "       Malaysia",
	d: "      Thailand"},
	correctAnswer:"b"},
	{
	question: "       Which is the oldest international film festival?",answers : {
	a: "       Cairo",
	b: "      Cannes",
	c: "       Berlin",
	d: "      Venice"},
	correctAnswer:"d"},
	{
	question: "       Who is the author of the famous Lord of the Rings Trilogy?",answers : {
	a: "       George R.R. Martin",
	b: "      Peter Jackson",
	c: "       J.R.R. Tolkien",
	d: "      J K Rowling"},
	correctAnswer:"c"},
	{
	question: "       Roger Moore played James Bond in how many movies?",answers : {
	a: "       5",
	b: "      7",
	c: "       8",
	d: "      11"},
	correctAnswer:"b"},
	{
	question: "   What is the number on the front of the Train \"Hogwarts Express\" from the Harry Potter film series?",answers : {
	a: "       5972",
	b: "      6061",
	c: "       3879",
	d: "      3096"},
	correctAnswer:"a"},
	{
	question: "   Who is the most nominated actor in the academy’s history for Oscars?",answers : {
	a: "       Jack Nicholson",
	b: "      Paul Newman",
	c: "       Leonardo Dicaprio",
	d: "      Joaquin Phoenix"},
	correctAnswer:"a"},
	{
	question: "   Who performs the most on-screen kills in the Lord of The Rings movies?",answers : {
	a: "       Boromir",
	b: "      Legolas",
	c: "       Gimli",
	d: "      Frodo"},
	correctAnswer:"b"},
	{
	question: "   Which of the following actresses appeared in the 1986 film `Top Gun`?",answers : {
	a: "       Helen Hunt",
	b: "      Meg Ryan",
	c: "       Michelle Pfeiffer",
	d: "      Julia Roberts"},
	correctAnswer:"b"},
	{
	question: "   Who was offered and turned down the part of Han Solo in the original Star Wars film?",answers : {
	a: "       Sylvester Stallone",
	b: "      Al Pacino",
	c: "       Bruce Willis",
	d: "      Roger Moore"},
	correctAnswer:"b"},
	{
	question: "   How many Oscars did the 1994 movie Forrest Gump win?",answers : {
	a: "       3",
	b: "      6",
	c: "       9",
	d: "      10"},
	correctAnswer:"b"},
	{
	question: "   Who holds the record of 14 nominations for Worst Actor at the Razzies?",answers : {
	a: "       Arnold Schwarzenegger",
	b: "      Sylvester Stallone",
	c: "       Nicolas Cage",
	d: "      Kevin Costner"},
	correctAnswer:"b"},
	{
	question: "   What country is Sacha Baron Cohen's character 'Borat' supposed to be from?",answers : {
	a: "       Afghanistan",
	b: "      Azerbaijan",
	c: "       Kazakhstan",
	d: "      Uzbekistan"},
	correctAnswer:"c"},
	{
	question: "   What US city is the post-apocalyptic setting for the 2014 science-fiction film 'Divergent'?",answers : {
	a: "       Atlanta",
	b: "      Baltimore",
	c: "       Chicago",
	d: "      Dundee"},
	correctAnswer:"C"},
	{
	question: "   Which 1985 film had the tagline \He's the only kid ever to get into trouble before he was born\?",answers : {
	a: "       The Breakfast Club",
	b: "      Back to the Future",
	c: "       The Color Purple",
	d: "      The clue"},
	correctAnswer:"B"},
	{
	question: "   Which 1959 film won 11 Oscars?",answers : {
	a: "       Ben Hur",
	b: "      Room at the Top",
	c: "       Anatomy of a murder",
	d: "      The Dairy of Anne Frank"},
	correctAnswer:"A"},
	{
	question: "       Which is the only Disney Movie to be nominated for 13 Academy Awards?",answers : {
	a: "       Mary Janes",
	b: "      Mary Poppins",
	c: "       Alladin",
	d: "      Little Mermaid"},
	correctAnswer:"B"},
	{
	question: "       What was the first movie in the Marvel Cinematic Universe?",answers : {
	a: "       Batman",
	b: "      Iron man",
	c: "       The Avengers",
	d: "      Spider-Man"},
	correctAnswer:"B"},
	{
	question: "       Which of these movies was NOT directed by M. Night Shyamalan?",answers : {
	a: "       The Ring",
	b: "      Glass",
	c: "       Signs",
	d: "      The Sixth Sense"},
	correctAnswer:"A"},
	{
	question: "       Which of the following is filmmaker Michael Bay known for?",answers : {
	a: "       Explosions",
	b: "      Unique costume design",
	c: "       Artful Sceneries",
	d: "      Romantic Comedy"},
	correctAnswer:"A"},
	{
	question: "       Which Disney movie was not created by Walt Disney Animation Studios?",answers : {
	a: "       A goofy Movie",
	b: "      Frozen",
	c: "       Chicken Little",
	d: "      Hercules"},
	correctAnswer:"A"},
	{
	question: "       Which of these Oscar categories has been discontinued?",answers : {
	a: "       Best Assistant Direction",
	b: "      Best Sound Mixing",
	c: "       Best Cinematography",
	d: "      Best OriginalScore"},
	correctAnswer:"A"},
	{
	question: "       Who is the only woman to be nominated for Best Actress at least 15 times?",answers : {
	a: "       Katherin Hepburn",
	b: "      Merly Streep",
	c: "       Ingrid Bregman",
	d: "      Bette Davis"},
	correctAnswer:"B"},
	{
	question: "       Which director is known for suspense thrillers such as 'Psycho'",answers : {
	a: "       Alfred Hitchcock",
	b: "      Stanley Kubrick",
	c: "       Robert Zemeckis",
	d: "      Steven Spielberg"},
	correctAnswer:"A"},
	{
	question: "       In the Movie series \"Twilight\" which of the following is not a title of the books it was adapted from?",answers : {
	a: "       New Moon",
	b: "      Midnight",
	c: "       Eclipse",
	d: "      Breaking Dawn"},
	correctAnswer:"B"},
	{
	question: "   What superhero is the TV show 'Smallville' based on?",answers : {
	a: "       Spiderman",
	b: "      Superman",
	c: "       Batman",
	d: "      Ironman"},
	correctAnswer:"B"},
	{
	question: "   What was the name of the island on which King Kong was discovered in the movie?",answers : {
	a: "       Ape Island",
	b: "      Borneo",
	c: "       Monster Island",
	d: "      Skull Island"},
	correctAnswer:"D"},
	{
	question: "   In the Star Wars universe, which of these droids had the ability to translate multiple languages?",answers : {
	a: "       C3P0",
	b: "      R2D2",
	c: "       BB8",
	d: "      IG-88"},
	correctAnswer:"A"},
	{
	question: "   What is the name of Captain Jack Sparrow's ship in the Pirates of the Caribbean series?",answers : {
	a: "       The Jolly Roger",
	b: "      The Maurader",
	c: "       The Wyndlass",
	d: "      The Black Pearl"},
	correctAnswer:"D"},
	{
	question: "   Avengers: Endgame is now the biggest box office hit of all time, replacing which movie which held the previous record?",answers : {
	a: "       Avatar",
	b: "      Titanic",
	c: "       Star Wars: The Force Awakens",
	d: "      Avenger: Infinity War"},
	correctAnswer:"A"},
	{
	question: "   Special Agent 'James Bond' works for which secret service agency",answers : {
	a: "       Mi6",
	b: "      CIA",
	c: "       CDO",
	d: "      The Q"},
	correctAnswer:"a"},
	{
	question: "   Which of these actors has not played the role of Batman?",answers : {
	a: "       Liam Neeson",
	b: "      Val Kilmer",
	c: "       Christian Bale",
	d: "      Ben Affleck"},
	correctAnswer:"A"},
	{
	question: "   Which of these films did not gross over 2 billion dollars worldwide?",answers : {
	a: "       Titanic",
	b: "      The Dark Knight",
	c: "       Avatar",
	d: "      Star Wars: The Force Awakens"},
	correctAnswer:"B"},
	{
	question: "   What island is Jurassic Park on?",answers : {
	a: "       Isla Cruces",
	b: "      Isla Fritos",
	c: "       Isla Nublar",
	d: "      Isla Fisher"},
	correctAnswer:"C"},
	{
	question: "   What is the name of Han Solo's ship in the Star Wars franchise?",answers : {
	a: "       Flacon III",
	b: "      F47",
	c: "       The Profundity",
	d: "      The Millennium Flacon"},
	correctAnswer:"D"},
	{
	question: "   What superhero team did Deadpool create in Deadpool 2?",answers : {
	a: "       X-Men",
	b: "      X-Force",
	c: "       X-Team",
	d: "      X-Factor"},
	correctAnswer:"B"},
	{
	question: "   What are non-magical people called in the Harry Potter universe?",answers : {
	a: "       Shuggles",
	b: "      Bruggles",
	c: "       Muggles",
	d: "      Guggles"},
	correctAnswer:"C"},
	{
	question: "   Who is Simba's uncle in the Lion King Movie?",answers : {
	a: "       Blade",
	b: "      Amos",
	c: "       Scar",
	d: "      Zazou"},
	correctAnswer:"C"},
	{
	question: "   What was the name of the Extremely rare mineral found on Pandora in the Avatar Movie",answers : {
	a: "       Dysprosium",
	b: "      Unobtanium",
	c: "       Vibranium",
	d: "      Adamantium"},
	correctAnswer:"B"},
	{
	question: "   Which material’s radiation is superman’s weak to?",answers : {
	a: "       Dracolite",
	b: "      Kryptonite",
	c: "       Cryolite",
	d: "      Magnesite"},
	correctAnswer:"B"},
	{
	question: "   What volcano does Frodo Baggins toss the One Ring into in the Lord of the Rings movie?",answers : {
	a: "       Mount Peril",
	b: "      Mount Doom",
	c: "       Mount Fire",
	d: "      Mount Fate"},
	correctAnswer:" "},
	{
	question: "   Who Voices Kung Fu Panda?",answers : {
	a: "       Seth Rogan",
	b: "      Jack Black",
	c: "       Jackie Chan",
	d: "      Dustin Hoffman"},
	correctAnswer:"B"},
	{
	question: "   Which former Miss Israel plays a role in the Fast and Furious series of films?",answers : {
	a: "       Michelle Rodriguez",
	b: "      Jordana Brewster",
	c: "       Gal Gadot",
	d: "      Charlize Theron"},
	correctAnswer:"C"},
	{
	question: "   Which British actor plays J. R. R. Tolkien in the biographical film about the Lord of the Rings author's life?",answers : {
	a: "       James McAvoy",
	b: "      Collin Farrell",
	c: "       Nicholas Hoult",
	d: "      Benedict Cumberbatch"},
	correctAnswer:"C"},
	{
	question: "   In the X-Men films, what's the name of Professor Xavier's telepathy-enhancing machine?",answers : {
	a: "       Psychismo",
	b: "      The Cortex",
	c: "       The Black box",
	d: "      Cerebro"},
	correctAnswer:"D"},
	{
	question: "   In the movie \"Frozen\, who is Olaf?",answers : {
	a: "       A reindeer",
	b: "      A ghost",
	c: "       A troll",
	d: "      A snowman"},
	correctAnswer:"D"}];

  const myQuestionsOlympics = [
    {
      question: "The first winter Olympics was held in which year?",
      answers: {
        a: "1926",
        b: "1922",
        c: "1924",
				d: "None of these"
      },
      correctAnswer: "c"
    },
    {
      question: "The first Summer Olympics was held in which year?",
      answers: {
        a: "1900",
        b: "1896",
        c: "1902",
				d: "None of these"
      },
      correctAnswer: "b"
    },
    {
      question: "Which Colour represents Asia in Olympics ring?",
      answers: {
        a: "Red",
        b: "Yellow",
        c: "Green",
        d: "None of these"
      },
      correctAnswer: "b"
    },
		{
      question: "Where did the 2018 Winter Olympics held?",
      answers: {
        a: "China",
        b: "Japan",
        c: "South Korea",
        d: "None of these"
      },
      correctAnswer: "c"
    },
		{
      question: "How many countries participated in the 2018 Winter Olympics?",
      answers: {
        a: "87",
        b: "92",
        c: "102",
        d: "None of these"
      },
      correctAnswer: "b"
    },
		{
      question: "Where is the headquarters of International Olympic Committee situated?",
      answers: {
        a: "Germany",
        b: "Sweden",
        c: "Switzerland",
        d: "None of these"
      },
      correctAnswer: "c"
    },
		{
      question: "Who is the present President of International Olympic Committee?",
      answers: {
        a: "Thomas Bach",
        b: "Jacques Rogge",
        c: "Craig Reedie",
        d: "None of these"
      },
      correctAnswer: "a"
    },
		{
      question: "Who is the first Indian woman to join the International Olympic Committee?",
      answers: {
        a: "Narinder Batra",
        b: "Nita Ambani",
        c: "Karnam Malleswari",
        d: "None of these"
      },
      correctAnswer: "b"
    },
		{
      question: "Who is the current president of Indian Olympic committee?",
      answers: {
        a: "Narayana Ramachandran",
        b: "Rajeev Mehta",
        c: "Narinder Batra",
        d: "None of these"
      },
      correctAnswer: "c"
    },
		{
      question: "Which of the following country was banned in Winter Olympics 2018?",
      answers: {
        a: "North Korea",
        b: "Japan",
        c: "Russia",
        d: "None of these"
      },
      correctAnswer: "b"
    }
  ];
	const myQuestionsGOT = [{question: "       How did Daenerys Targaryen eventually hatch her dragon eggs?",answers : {
	a: "       In a lightning storm",
	b: "      In a funeral pyre",
	c: "       In a fireplace",
	d: "      In a frozen cave"},
	correctAnswer: "b"},


	{question: "        Which U.S. city was one of 8 international locations visited by the 2015 'Game of Thrones' Exhibition?",answers : {
	a: "       Chicago",
	b: "      New York City",
	c: "       San Diego",
	d: "      Boston"},
	correctAnswer: "c"},

	{question: "The phrase 'ValarMorghulis' or 'all men must die' is usually responded with:",answers : {
	a: "       ValarDohaeris or 'all men must serve'",
	b: "      ValarRohnas or 'all men must live'",
	c: "       ValarGoGo or 'all men must dance'",
	d: "      None of the above"},
	correctAnswer: "a"},

	{question: " American actor Peter Dinklage, who plays Tyrion Lannister, also had a starring role in this fantasy franchise: ",answers : {
	a: "       Lord of the Rings",
	b: "      Highlander",
	c: "       The Chronicles of Narnia",
	d: "      The Legend of Zelda"},
	correctAnswer: "c"},

	{question: " What is the only thing that can put out volatile Wildfire?",answers : {
	a: "       Sand",
	b: "      Water",
	c: "       Dragon's blood",
	d: "      Sunlight"},
	correctAnswer: "a"},


	{question: " Besides dragonglass, what is the only other substance capable of defeating White Walkers?",answers : {
	a: "       Weirwood",
	b: "      Wildfire",
	c: "       Valyrian Steel",
	d: "      Snowballs"},
	correctAnswer: "c"},


	{question: " How many times has BericDondarrion been brought back to life?",answers : {
	a: "       Three times",
	b: "      Five times",
	c: "       Six times",
	d: "      Seven times"},
	correctAnswer: "c"},


	{question: " Which Stark family direwolf was killed in retaliation for an attack on Prince Joffrey?",answers : {
	a: "       Ghost",
	b: "      Lady",
	c: "       Nymeria",
	d: "      Summer"},
	correctAnswer: "b"},

	{question: " Arya's punishment for stealing from the Many-Face God is:",answers : {
	a: "       Death",
	b: "      Memory Loss",
	c: "       Blindness",
	d: "      Uncontrollable laughter"},
	correctAnswer: "c"},


	{question: " 'It's nothing' were the last words of this infamous character:",answers : {
	a: "       Renly Baratheon",
	b: "      Tywin Lannister",
	c: "       Robb Stark",
	d: "      King Joffrey"},
	correctAnswer: "d"},


	{question: " What was the name of Ned Stark's greatsword?",answers : {
	a: "       Ice",
	b: "      Oathkeeper",
	c: "       Widow's Wail",
	d: "      Northguard"},
	correctAnswer: "a"},

	{question: " Who shoots the flaming arrow that subsequently destroy's Stannis' fleet in Blackwater Bay?",answers : {
	a: "       Tyrion Lannister",
	b: "      King Joffrey",
	c: "       Jaime Lannister",
	d: "      Bronn"},
	correctAnswer: "d"},

	{question: " Prince Oberyn Martell is nicknamed the 'Red Viper' because of his combat and:",answers : {
	a: "       Pride in drawing blood first",
	b: "      Knowledge of poisons",
	c: "       Nighttime attacks",
	d: "      Ruby-coloredarmor"},
	correctAnswer: "b"},


	{question: " The Night King was created using a dagger made of:",answers : {
	a: "       Valyrian Steel",
	b: "      Blue Ice",
	c: "       Dragonglass",
	d: "      Weirwood"},
	correctAnswer: "c"},


	{question: " Who created the secret tunnel in the sewers under Casterly Rock?",answers : {
	a: "       1.Tyrion Lannister",
	b: "      Lord Baelish",
	c: "       Jaime Lannister",
	d: "      Varys"},
	correctAnswer: "a"},



	{question: " Dead creatures revived by White Walkers are known as:",answers : {
	a: "       Walkers",
	b: "      Wights",
	c: "       Zombie",
	d: "      Claws"},
	correctAnswer: "b"},

	{question: " What is the surname given to bastards born in Dorne?",answers : {
	a: "       1.Rivers",
	b: "      2.Waters",
	c: "       3.Stone",
	d: "      4.Sand"},
	correctAnswer: "d"},

	{question: " 'The Mountain' is the nickname for which character?",answers : {
	a: "       Sandor Clegane",
	b: "      Gregor Clegane",
	c: "       Gerold Clegane",
	d: "      Oberyn Martell"},
	correctAnswer: "b"},

	{question: " Who is Lord Commander of the Kingsguard at the beginning of Game of Thrones?",answers : {
	a: "   SerLoras Tyrell",
	b: "      Ser Barristan Selmy",
	c: "       Ser Jaime Lannister",
	d: "      Ser Jeor Mormont"},
	correctAnswer: "b"},


	{question: " Who is known as 'The-King-Beyond-the-Wall'?",answers : {
	a: "       Stannis Baratheon",
	b: "      The Night King",
	c: "       Tormund Giantsbane",
	d: "      ManceRayder"},
	correctAnswer: "d"},


	{question: " How many times has Sansa Stark been married?",answers : {
	a: "       Three times",
	b: "      Twice",
	c: "       None",
	d: "      Once"},
	correctAnswer: "b"},


	{question: " Who is the ruler of the Iron Islands at the beginning of Game of Thrones?",answers : {
	a: "Euron Greyjoy",
	b: "Balon Greyjoy",
	c: "Aeron Greyjoy",
	d: "Yara Greyjoy"},
	correctAnswer: "b"},

	{question: " Who delivered the fatal blow to the King-in-the North, Robb Stark?",answers : {
	a: "Roose Bolton",
	b: "Ramsay Bolton",
	c: "Alliser Thorne",
	d: "Walder Frey"},
	correctAnswer: "a"},

	{question: " Grey Worm and Missandei became allies of Daenerys Targaryen after she liberated the slaves of which city?",answers : {
	a: "Meereen",
	b: "Qarth",
	c: "Yunkai",
	d: "Astapor"},
	correctAnswer: "d"},

	{question: " Which rival king attempted to take King's Landing during the Battle of the Blackwater?",answers : {
	a: "Stannis Baratheon",
	b: "Balon Greyjoy",
	c: "Renly Baratheon",
	d: "Robb Stark"},
	correctAnswer: "a"},


	{question: " In which city does Arya Stark train to become a Faceless Man?",answers : {
	a: "Meereen",
	b: "Astapor",
	c: "Pentos",
	d: "Braavos"},
	correctAnswer: "d"},

	{question: " What relation is Lyanna Mormont to Jorah Mormont?",answers : {
	a: "Cousin",
	b: "Niece",
	c: "Daughter",
	d: "Sister"},
	correctAnswer: "a"},


	{question: " What’s the name of Arya Stark’s sword?",answers : {
	a: "            Longclaw",
	b: "            Oathkeeper",
	c: "            Needle",
	d: "            Heartsbane"},
	correctAnswer: "c"},

	{question: " What’s the location where most scenes in the North below The Wall are filmed?",answers : {

	a: "            Dublin",
	b: "            Bath",
	c: "            Croatia",
	d: "            Belfast"},
	correctAnswer: "c"},


	{question: " Which king did Jamie Lannister slay to earn his \"Kingslayer\" nickname?",answers : {
	a: "            King Robert Baratheon",
	b: "            King Aegon I Targaryen",
	c: "            King Aerys II Targaryen",
	d: "            King Joffrey Baratheon"},
	correctAnswer: "c"},


	{question: " What’s the name of the song associated with House Lannister that played at the Red Wedding?",answers : {

	a: "            The Bear and the Maiden Fair",
	b: "            A Lannister Always Pays His Debts",
	c: "            The Rains of Castamere",
	d: "            What Is Dead May Never Die"},
	correctAnswer: "c"},

	{question: " How did Daenerys Targaryen eventually hatch her dragon eggs?",answers : {
	a: "In a lightning storm",
	b: "In a funeral pyre",
	c: "In a fireplace",
	d: "In a frozen cave"},
	correctAnswer: "b"}];

	const myQuestionsWorldcup = [
    {
      question: "Who scored the first World Cup century in the inaugural 1975 edition, staged in England?",
      answers: {
        a: "Geoffrey Boycott",
        b: "Dennis Amiss",
        c: "Mike Brearley",
				d: "None of these"
      },
      correctAnswer: "b"
    },
    {
      question: "Which batsman, in the same match scored a painstaking 36 not out of 174 balls and batted throughout the 60 overs to remain not out?",
      answers: {
        a: "Abid Ali",
        b: "Sunil Gavaskar",
        c: "Gundappa Viswanath",
				d: "Yashpal Sharma"
      },
      correctAnswer: "b"
    },
    {
      question: "In one of the World Cup classics which West Indian last wicket stand put on 64 in 14 overs to grab a miraculous victory over Pakistan?",
      answers: {
        a: "Clive Lloyd and Collis King",
        b: "Deryck Murray and Andy Roberts",
        c: "Viv Richards and Joel Garner",
        d: "Gordon Greenidge and Michael Holding"
      },
      correctAnswer: "b"
    }
  ];
	const myQuestionsAvengers = [{question: "       Who among the following characters in Avengers says the quote \"You didn’t see that coming\"?",answers : {
	a: "       Quicksilver",
	b: "      Hawkeye",
	c: "       Iron Man",
	d: "      Ultron"},
	correctAnswer: "a"},

	{question: "       In the Avengers franchise, who among the following was a former SHIELD agent?",answers : {
	a: "       Pietro Maximoff",
	b: "      Thor Odinson",
	c: "       Wanda Maximoff",
	d: "      Natasha Romanoff"},
	correctAnswer: "c"},

	{question: "       What is the Hulk’s real name?",answers : {
	a: "       Bruce Banner",
	b: "      Steve Rogers",
	c: "       Tony Stark",
	d: "      Natsaha Romanoff"},
	correctAnswer: "a"},

	{question: "       Where is Stark Tower located?",answers : {
	a: "       London",
	b: "      New York City",
	c: "       Rome",
	d: "      Paris"},
	correctAnswer: "b"},


	{question: "       What is Captain America’s shield made of ?",answers : {
	a: "       Iron",
	b: "      Vibranium",
	c: "       Silver",
	d: "      Gold"},
	correctAnswer: "b"},

	{question: "       Thor’s Hammer Mjolnir is made of a metal taken from the heart of which cosmic source?",answers : {
	a: "       Asteroid",
	b: "      Comet",
	c: "       A dying Star",
	d: "      Meteorite"},
	correctAnswer: "c"},

	{question: "       There were 2 Infinity Stones in play in the first Avengers Movie. One was the Space Stone in the Tesseract. Which was the other stone?",answers : {
	a: "       Mind Stone",
	b: "      Soul Stone",
	c: "       Power Stone",
	d: "      Infinity Stone"},
	correctAnswer: "a"},

	{question: "       Which Avenger’s form does Loki briefly take in Thor: The Dark World?",answers : {
	a: "       Hulk",
	b: "      Captain America",
	c: "       Iron Man",
	d: "      Dr. Strange"},
	correctAnswer: "b"},

	{question: "       Exoskeleton Technology is being used to develop a future soldier armoury in US modelled on the suit of which of these characters?",answers : {
	a: "       Spiderman",
	b: "      Dr. Strange",
	c: "       Ironman",
	d: "      Hulk"},
	correctAnswer: "c"},

	{question: "       The suit of which of these characters uses Pym particles based on the core technology of shortening empirical distances?",answers : {
	a: "       The Iron Man Suit",
	b: "      The Ant Man Suit",
	c: "       Dr. Strange Suit",
	d: "      Loki’s suit"},
	correctAnswer: "b"}];
  const myQuestionsPolitics = [
	{question: " On January 26, 1950, the Constitution of India came into effect and replaced the Government of India Act, 1935 as the country’s fundamental governing document. This led to India becoming a republic, and consequently this day is celebrated as Republic Day. Between India’s Independence on August 15, 1947 and January 26, 1950, India was a semi-independent autonomous entity under the British crown. What was the term used to refer to India in that 895-day period? ",answers : {
	a: "Dominion of India",
	b: "Republic of India",
	c: "United States of India",
	d: "Union of India"},
	correctAnswer: "a"},




	{question: " At 117,369 words, the Indian Constitution is the longest in the world and was prepared in both English and Hindi. Prem BehariNarainRaizada was approached to carry out a very important job for which he refused payment but just asked that he be allowed to mention his grandfather’s name at the end. He was then allotted a room, and after close to three years he finished his job. What was Prem Behari’s contribution to the Constitution of India?",answers : {
	a: "he wrote the entire constitution by hand",
	b: "he decorated the constitution",
	c: "he photolithographed the constitution",
	d: "he prepared the initial draft of the constitution"},
	correctAnswer: "a"},


	{question: " This section of the Constitution is a brief introductory statement that sets out guidelines and the principles of the Constitution, and indicates the source from which the document derives its authority and meaning. It is the essence of the Indian Constitution and plays an important role in shaping the destiny of the country. It plays a vital role in defining the essential features of the Constitution, and the arrangement of the terms and their order clearly define their significance. What is the name given to this section?",answers : {
	a: "The Preamble",
	b: "Part III of the constitution",
	c: "Part II of the constitution",
	d: "First Schedule of the constitution"},
	correctAnswer: "a"},


	{question: " The first five words of this introductory section define who are the sovereign authorities in the country, who give the government all the power vested in it. What are these five words that make all of us authors of the Constitution and give us the power to choose the government?",answers : {
	a: "We, the people of India",
	b: "In the name of God",
	c: "This New Republic of India",
	d: "We hereby declare ourselves free"},
	correctAnswer: "a"},


	{question: " The second word that was added to the preamble had been earlier explicitly rejected by the Constituent Assembly when framing the document as they believed it didn’t need to be specified and was embodied by the Constitution itself. It ensures that the relationship between the government and religious groups is determined according to the Constitution and law, and it enjoins equal freedom and respect for all religions. What word is this that separates the power of the state and religion?",answers : {
	a: "       Socialist",
	b: "      Sovereign",
	c: "       equality",
	d: "Secular"},
	correctAnswer: "d"},


	{question: " This term ensures the right to freedom of thought, expression, belief, faith and worship for all Indian nationals and establishes that there are no unreasonable restrictions on Indian citizens in those terms. What is this term? ",answers : {
	a: "Equality",
	b: "Liberty",
	c: "sovereignty",
	d: "autonomy"},
	correctAnswer: "b"},


	{question: "  The penultimate line of the introductory section has a term that refers to a feeling of brotherhood and a sense of belonging with the country among its people. It leaves no room for division on lines of region, community, caste, religion etc., which hinders the unity of the state. What term is this?",answers : {
	a: "Comredship",
	b: "Fraternity",
	c: "Unity",
	d: "Integrity"},
	correctAnswer: "b"},

	{question: " This term refers to the absence of privileges or discrimination against any section of society. It envisages that all individuals be provided with adequate opportunities. What is this term?  ",answers : {
	a: "Egalitarian",
	b: "Parity",
	c: "Equality",
	d: "Non-discrimination"},
	correctAnswer: "c"},

	{question: " This is the common name for the official residence of the governor in any Indian State and simply means \"government building\". However, there are three places where the corresponding building is known as 'Raj Niwas' and is the residence of the lieutenant governor. What is the name of the governors’ residences and in which places are the Raj Niwas buildings? ",answers : {
	a: "Raj Bhavan,Union territories",
	b: "Governor’s Residence, Union Territories",
	c: "Governor’s Retreat ,Hill Stations",
	d: "Chief Minister’s office, State Capitals)"},
	correctAnswer: "a"},


	{question: " King George V made a surprise announcement at the Imperial Durbar on 12 December, 1911 that the capital of the Raj would be moved from Calcutta. Two architects had created a new city around a certain hill. Eventually, India's most important government buildings, including the President’s official residence and the Central Secretariat, were constructed on the hill. What is the name of this hill? ",answers : {
	a: "Aravalli Hills",
	b: "Dalhousie Hills",
	c: "Lansdowne Hills",
	d: "Raisina Hills"},
	correctAnswer: "d"},


	{question: " This entire locality in Chennai once belonged to an Englishman in the 19th century, and the local people used to refer to it as his gardens. In 1921 most of the property was bought by Binny and Co. for its directors. In the 1950s, the area was divided into residential plots and sold. Although it sounds like it is named after an American poet, the only connection it has to him is the number of crows in the area. Which area is this that is most famous for being the residence of a former chief minister and a present-day movie star?",answers : {
	a: "Kilpauk Garden",
	b: "Besant Garden",
	c: "Huddleston Gardens",
	d: "Poes Garden"},
	correctAnswer: "d"},



	{question: " On May 12, 1784, the Treaty of Paris was signed by representatives of King George III and a group led by Benjamin Franklin. Details included establishing boundaries between two parties, fishing rights and restoration of property and prisoners of war. Which war, going on for eight years and taken the lives of more than 78,000 soldiers, did this bring to an end?",answers : {
	a: "       American War of Independence",
	b: "      Seven Years War",
	c: "       French-Indian War",
	d: "      French Revolutionary Wars"},
	correctAnswer: "a"},
	{question: " How many countries are part of G20 ?",answers : {
	a: "       19 countries + European union",
	b: "      20",
	c: "       25",
	d: "      the number is not fixed"},
	correctAnswer: "a"},


	{question: " This organization, formed in 1949, is a military alliance among various North American and European states. *? ",answers : {
	a: "       OECD",
	b: "      NATO",
	c: "       ANZUS",
	d: "      SEATO"},
	correctAnswer: "b"},

	{question: " In a 1942 statement, a group of countries first used the name that would later be used for which major postwar institution? ",answers : {
	a: "       North Atlantic Treaty Organization",
	b: "      League of Nations",
	c: "       Warsaw Pact",
	d: "      UN"},
	correctAnswer: "d"},



	{question: "   Today, the territory initially called East Pakistan is ________. ",answers : {
	a: "       Assam",
	b: "      Bangladesh",
	c: "       Country of Nepal",
	d: "      Punjab"},
	correctAnswer: "b"},

	{question: "   This organization, focused on oil policy, brings together several of the world’s leading oil producers. ?",answers : {
	a: "       OPEC",
	b: "      IAEA",
	c: "       IEA",
	d: "      Arab League"},
	correctAnswer: "a"},

	{question: "   This international organization, one of the oldest in existence, focuses on workers’ rights and other employment-related issues?",answers : {
	a: "       WTO",
	b: "      ILO",
	c: "       UNCTAD",
	d: "      UNHCR"},
	correctAnswer: "b"}
	];

  const vLinks = [{
	      name: "Is drinking Milk is not good for health?",
	      link: "https://www.youtube.com/embed/FBA0h2x129s"
	},

	{
	      name: "Your health is governed by environment",
	      link: "https://www.youtube.com/embed/K-mgmIjaRlY&t=10s"
	},
	{
	      name: "Is sleeping late unhealthy?",
	      link: "https://www.youtube.com/embed/ysamjYNXLe8"
	},
	{
	      name: "Ayurveda overwestern medicine",
	      link: "https://www.youtube.com/embed/HzTvEK1sVi0&t=3s"
	},
	{
	      name: "Change is life",
	      link: "https://www.youtube.com/embed/wBhxIW24jaE"
	},
	{
	      name: "Change is life",
	      link: "https://www.youtube.com/embed/wBhxIW24jaE"
	},
	{
	      name: "Don’t feed  your baby on time",
	      link: "https://www.youtube.com/embed/AivxlytafRM"
	}];

	const tVideo = [{
      name: "Travel tips on folding clothes ",
      link: "https://www.youtube.com/embed/AaYYlOkK-dI"
},

{
      name: "Planning for a trip ??Watch this video before you pack your bags",
      link: "https://www.youtube.com/embed/P7u-2lIC9tc"
},

{
      name: "Creative  organization hacks for your home",
      link: "https://www.youtube.com/embed/kN8EpwUYN7E"
}];
  const hVideo = [{
      name: "Dwarka",
      link: "https://www.youtube.com/embed/nQZFS9Hij0M"
}];

const rVideo = [
	{
      name: "Sugi sivam's meserising speech on stress and worries",
      link: "https://www.youtube.com/embed/GqM0AesoZ6I"
},
{
      name: "Sugi sivam's Speech on Parenting",
      link: "https://www.youtube.com/embed/KLPzLCS5UwU"
}

     ];
  function buildQuiz(type){
    // variable to store the HTML output
    const output = [];

		var element = document.getElementById("submit");
		element.classList.remove("hide");

		var myQ = null;
		if(type == 'O')
			myQ = myQuestionsOlympics;
		else if(type == 'P')
				myQ = myQuestionsPolitics;
		else if(type == 'A')
				myQ = myQuestionsAvengers;
		else if(type == 'G')
				myQ = myQuestionsGOT;
		else if(type == 'H')
				myQ = myQuestionsHollywood;
	  else {
	  	myQ = myQuestionsWorldcup;
	  }
    myQuestions = myQ;

    // for each question...
    myQ.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

					var flag = currentQuestion.correctAnswer == letter ? 'border' : '';

          // ...add an HTML radio button
          answers.push(
            `<label class="` + flag + `">
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="item"><div class="question">` + (questionNumber+1) + `. ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div></div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');

		document.getElementsByClassName('con')[0].style.display = 'none';
		document.getElementsByClassName('header')[0].style.display = 'none';
		document.getElementsByClassName('back')[0].style.display = 'block';


  }

  function buildVideo() {
		var s = '';
		for(var c=0; c<vLinks.length; c++) {
			 s += "<div class='label'>" + vLinks[c].name + "</div><iframe width='720' height='315'src='" + vLinks[c].link + "'></iframe>";
		}

		s += '<br><div style="margin-top: 133px; font-weight: bold; font-size: 55px; border-top: 1px solid black;">Travel Videos</div><br>';
		for(var c=0; c<tVideo.length; c++) {
			 s += "<div class='label'>" + tVideo[c].name + "</div><iframe width='720' height='315'src='" + tVideo[c].link + "'></iframe>";
		}

		s += '<br><div style="margin-top: 133px; font-weight: bold; font-size: 55px; border-top: 1px solid black;">History Videos</div><br>';
		for(var c=0; c<hVideo.length; c++) {
			 s += "<div class='label'>" + hVideo[c].name + "</div><iframe width='720' height='315'src='" + hVideo[c].link + "'></iframe>";
		}

		s += '<br><div style="margin-top: 133px; font-weight: bold; font-size: 55px; border-top: 1px solid black;">Regional Videos</div><br>';
		for(var c=0; c<rVideo.length; c++) {
			 s += "<div class='label'>" + rVideo[c].name + "</div><iframe width='720' height='315'src='" + rVideo[c].link + "'></iframe>";
		}

		document.getElementsByClassName('v-con')[0].innerHTML = s;
	}

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer.toLowerCase()) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
				answerContainers[questionNumber].classList.add('red-border');
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
				answerContainers[questionNumber].classList.add('red-border');
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `You have got ${numCorrect} answers correct out of ${myQuestions.length}`;
  }

  // Kick things off
  //buildQuiz();
	var elements = document.getElementsByClassName("ch");

	var myFunction = function() {
	    var attribute = this.getAttribute("data-cat");
	    buildQuiz(attribute);
	};

	for (var i = 0; i < elements.length; i++) {
	    elements[i].addEventListener('click', myFunction, false);
	}

	var elements = document.getElementsByClassName("cat");

	var myFunction = function() {
	    var attribute = this.getAttribute("data-cat");
	    if(attribute == '1') {
					document.getElementsByClassName("basic-con")[0].style.display = 'none';
					document.getElementsByClassName("con")[0].style.display = 'block';
			}
			else if(attribute == '2') {
				buildVideo();
				document.getElementsByClassName("basic-con")[0].style.display = 'none';
				document.getElementsByClassName("header")[0].style.display = 'none';
				document.getElementsByClassName("v-con")[0].style.display = 'block';
				document.getElementsByClassName('back')[0].style.display = 'block';
			}
			else if(attribute == '4') {
				document.getElementsByClassName("basic-con")[0].style.display = 'none';
				document.getElementsByClassName("omg-con")[0].style.display = 'block';
			}
			else {
				alert('Not yet implemented. In alpha testing.');
			}
	};

	for (var i = 0; i < elements.length; i++) {
	    elements[i].addEventListener('click', myFunction, false);
	}

  // Event listeners
  submitButton.addEventListener('click', showResults);
	//buildQuiz('O');
	//nextButton.addEventListener('click', showNext);
})();