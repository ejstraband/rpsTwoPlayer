// Initialize Firebase
var config = {
	apiKey: "AIzaSyDQBmoKW6_lNWn0GzIAiKbI2ivdqRl-Nh8",
	authDomain: "rpsonline-688d9.firebaseapp.com",
	databaseURL: "https://rpsonline-688d9.firebaseio.com",
	projectId: "rpsonline-688d9",
	storageBucket: "rpsonline-688d9.appspot.com",
	messagingSenderId: "888887307965"
	};
firebase.initializeApp(config);

// global variables
var database = firebase.database();
var player1;
var player2;
var p1wins;
var p1losses;
var p2wins;
var p2losses;
var ties;

player1 = "p1";
player2 = "P2";
p1wins = 10;
p1losses = 20;
p2wins = 20;
p2losses = 10;
ties = 10;

// initialize firebase
database.ref().set({
	dbP1: player1,
	dbP2: player2,
	dbP1wins: p1wins,
	dbP2wins: p2wins,
	dbP1losses: p1losses,
	dbP2losses: p2losses,
	dbTies: ties
});

// reset app function
function globalResetApp() {
p1wins = 0;
p1losses = 0;
p2wins = 0;
p2losses = 0;
ties = 0;
}

// pick color function
	// pick a color
	// captures name
	// autoselects other user color
	// waits for user to input name

// RPS 

	// capture p1 || p2 play
		// hide other buttons
	// wait for other player
		// hide other buttons
	// who won?
	// score
	// reset buttons

// chat function

	// enter chat into your window
	// click send
	// capture the message
	// format the message
	// write to the message div