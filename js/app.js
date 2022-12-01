/**************/
/* GAME RULES */
/**************/

/*

- The game has 2 players, playing in rounds;
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score;
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn;
- The first player to reach 100 points on GLOBAL score wins the game.

*/

//PLAYERS DATA
let players = [
	{
		playerNumber: 1,
		name: "Player 1",
		roundScore: 0,
		totalScore: 0,
		isPlaying: true,
		isTheWinner: false,
	},
	{
		playerNumber: 2,
		name: "Player 2",
		roundScore: 0,
		totalScore: 0,
		isPlaying: false,
		isTheWinner: false,
	},
];

// GENERATE A RANDOM DICE NUMBER - OK --------------------------
const rollButton = document.getElementById("roll"); //Button roll
let diceDisplay = document.getElementById("diceDisplay"); //Dice picture

rollButton.addEventListener("click", () => {
	let diceNumber = Math.floor(Math.random() * 6) + 1;
	diceDisplay.style = "display:block"; // Display the dice
	diceDisplay.src = "images/dice_" + diceNumber + ".svg";


	if(diceNumber == 1){
		setTimeout(changePlayer, 1500); // Delay after 1 disappear
		//Reset current score
	} else {
		//Add score to current score
	}

});

// CHANGE PLAYER - SAVE ROUND SCORE-------------------------- 
const saveButton = document.getElementById("save");
const player1Screen = document.getElementById("player1-screen");
const player2Screen = document.getElementById("player2-screen");

function changePlayer(){
	player1Screen.classList.toggle("active-player");
	player2Screen.classList.toggle("active-player");
	diceDisplay.style = "display:none"; 

	//Change status isPlaying - OK
	if(players[0].isPlaying){
		players[0].isPlaying = false;
		players[1].isPlaying = true;
	} else {
		players[0].isPlaying = true;
		players[1].isPlaying = false;
	}
};


saveButton.addEventListener("click", save);
function save(){
	changePlayer();
	//Add current score to total score
}




//-------------------

//PLAYERS NAMES IMPUT
let player1Input = document.getElementById("p1");
let player2Input = document.getElementById("p2");

//PLAYERS NAMES in DOM
const player1DisplayedName = document.getElementById("player1-name");
const player2DisplayedName = document.getElementById("player2-name");

// DISPLAY TOTAL SCORE
const player1TotalScore = document.getElementById("player1-total-score");
const player2TotalScore = document.getElementById("player2-total-score");
player1TotalScore.innerText = players[0].totalScore;
player2TotalScore.innerText = players[1].totalScore;

// DISPLAY ROUND SCORE
const player1RoundScore = document.getElementById("player1-current-score");
const player2RoundScore = document.getElementById("player2-current-score");
player1RoundScore.innerText = players[0].roundScore;
player2RoundScore.innerText = players[1].roundScore;

// LAUNCH
// Hide Welcome Screen / Display players name

function launchGame() {
	//DISPLAY NAMES at LAUNCH

	players[0].name = player1Input.value;
	players[1].name = player2Input.value;

	player1DisplayedName.innerText = players[0].name;
	player2DisplayedName.innerText = players[1].name;

	// HIDE WELCOME SCREEN at LAUNCH

	const welcomeScreen = document.getElementById("welcome");
	const gameScreen = document.getElementById("game");

	//Supression ecran welcome
	// welcomeScreen.classList.add("hide");
	// gameScreen.classList.remove("hide");
}
