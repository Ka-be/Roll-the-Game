//PLAYERS DATA----------------

let players = [
	{
		playerNumber: 1,
		name: "Player 1",
		currentScore: 0,
		totalScore: 0,
		isPlaying: true,
		isTheWinner: false,
	},
	{
		playerNumber: 2,
		name: "Player 2",
		currentScore: 0,
		totalScore: 0,
		isPlaying: false,
		isTheWinner: false,
	},
];

//-------------------

// LAUNCHGAME FUNCTION - TO BE ACTIVATE

// launchGame = () => {
//   players[0].name = player1Input.value;
// 	players[1].name = player2Input.value;

// 	player1DisplayedName.innerText = players[0].name;
// 	player2DisplayedName.innerText = players[1].name;

// 	// HIDE WELCOME SCREEN at LAUNCH
// 	const welcomeScreen = document.getElementById("welcome");
// 	const gameScreen = document.getElementById("game");

//   	//Supression ecran welcome
// 	welcomeScreen.classList.add("hide");
// 	gameScreen.classList.remove("hide");
// }

//----------------------

// ETAPES
/*
- Afficher les noms
- Afficher score total par défaut
- Afficher round score par défaut
- Roll the dice
- Save
- New game (Reset)
*/

//DISPLAY Total & current score 0 by default - ForEach
players.forEach((player) => { 
	let totalScoreDisplayed = document.querySelector('#player' + player.playerNumber + '-total-score')
	let currentScoreDisplayed = document.querySelector('#player' + player.playerNumber + '-current-score')
	totalScoreDisplayed.innerText = player.totalScore;
	currentScoreDisplayed.innerText = player.currentScore;
})


// ROLL THE DICE 
const rollButton = document.getElementById("roll"); //Button roll
const diceDisplay = document.getElementById("diceDisplay"); //Dice picture

rollButton.addEventListener("click", () => {
	let diceNumber = Math.floor(Math.random() * 6) + 1;
	diceDisplay.style = "display:block"; // Display the dice
	diceDisplay.src = "images/dice_" + diceNumber + ".svg";
})
