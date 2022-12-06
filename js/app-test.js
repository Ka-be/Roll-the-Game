//PLAYERS DATA----------------

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

//-------------------

// LAUNCHGAME FUNCTION

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



// DISPLAY TOTAL SCORE & SAVE BUTTON
const saveButton = document.getElementById("save");
const player1TotalScore = document.getElementById("player1-total-score");
const player2TotalScore = document.getElementById("player2-total-score");

const player1Screen = document.getElementById("player1-screen");
const player2Screen = document.getElementById("player2-screen");

changePlayer = () => {
		//Change status isPlaying - TO OPTIMIZE
		if (players[0].isPlaying) {
			players[0].isPlaying = false;
			players[1].isPlaying = true;
		} else {
			players[0].isPlaying = true;
			players[1].isPlaying = false;
		}
	
	player1Screen.classList.toggle("active-player");
	player2Screen.classList.toggle("active-player");
	diceDisplay.style = "display:none";
};



// GENERATE A RANDOM DICE NUMBER - OK --------------------------
const rollButton = document.getElementById("roll"); //Button roll
let diceDisplay = document.getElementById("diceDisplay"); //Dice picture

rollButton.addEventListener("click", () => {
	let diceNumber = Math.floor(Math.random() * 6) + 1;
	diceDisplay.style = "display:block"; // Display the dice
	diceDisplay.src = "images/dice_" + diceNumber + ".svg";
	
	//SCORE ATTRIBUTION

	players.forEach((player) => {
		if (player.isPlaying) {
			if (diceNumber != 1) {
				player.roundScore += diceNumber; // Add dice score to player current score

				// DISPLAY ROUND SCORE OK

				console.log(player.roundScore);
				let currentScoreDisplayed = document.querySelector('#player' + player.playerNumber + '-current-score'); 
				currentScoreDisplayed.innerText = player.roundScore; // Error here - No reset displaying

				//Saving function - ERROR HERE
				saveButton.addEventListener("click", () => {
					
					player.totalScore += player.roundScore;
					player.roundScore = 0; // RESET

					//Display total score
					player1TotalScore.innerText = players[0].totalScore;
					player2TotalScore.innerText = players[1].totalScore;
					changePlayer();

				});

			} else {
				player.roundScore = 0; // RESET
				setTimeout(changePlayer, 1000);
			}
		}
	});
});


//PLAYERS NAMES IMPUT
let player1Input = document.getElementById("p1");
let player2Input = document.getElementById("p2");

//PLAYERS NAMES in DOM
const player1DisplayedName = document.getElementById("player1-name");
const player2DisplayedName = document.getElementById("player2-name");

// DISPLAY TOTAL SCORE 0 by default
player1TotalScore.innerText = players[0].totalScore;
player2TotalScore.innerText = players[1].totalScore;

//DISPLAY Current score 0 by default
player1RoundScore.innerText = players[0].roundScore;
player2RoundScore.innerText = players[1].roundScore;
