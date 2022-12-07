//PLAYERS DATA----------------

let players = [
	{
		playerNumber: 1,
		name: "Player 1",
		currentScore: 0,
		totalScore: 0,
		isPlaying: true,
	},
	{
		playerNumber: 2,
		name: "Player 2",
		currentScore: 0,
		totalScore: 0,
		isPlaying: false,
	},
];


// DEFAULT DISPLAY Total & current score 0 - OK
players.forEach((player) => { 
	document.querySelector('#player' + player.playerNumber + '-total-score').innerText = player.totalScore;
	document.querySelector('#player' + player.playerNumber + '-current-score').innerText = player.currentScore;
});


// ROLL THE DICE 
const rollButton = document.getElementById("roll"); //Button roll
const diceDisplay = document.getElementById("diceDisplay"); //Dice picture


// Roll the dice
rollButton.addEventListener("click", () => {
	let diceNumber = Math.floor(Math.random() * 6) + 1;
	diceDisplay.style = "display:block"; // Display the dice
	diceDisplay.src = "images/dice_" + diceNumber + ".svg"; //Display the right image of dice

	// SCORE ATTRIBUTION
	players.forEach((player) => {
		if (player.isPlaying){
			if (diceNumber != 1){
				player.currentScore += diceNumber; // Add the dice number to the active player currentScore
				
				// Display the current cumulated Score at each roll
				document.querySelector('#player' + player.playerNumber + '-current-score').innerText = player.currentScore;

				// SAVE the current score to the total score
				document.getElementById("save").addEventListener("click", () => {
					
					player.totalScore += player.currentScore;
					player.currentScore = 0; // Reset the current score

					// WINNING GAME CONDITION
					if(player.totalScore < 100){ 

						//Display total score & reset current score
						document.querySelector('#player' + player.playerNumber + '-total-score').innerText = player.totalScore;
						document.querySelector('#player' + player.playerNumber + '-current-score').innerText = player.currentScore;
						changePlayer();
					} else {

						// Display "winner", final score and css class for the winner screen
						document.querySelector('#player' + player.playerNumber + '-total-score').innerText = player.totalScore;
						document.querySelector('#player' + player.playerNumber + '-name').innerText = 'Winner !';
						document.querySelector('#player' + player.playerNumber + '-screen').classList.add("winner");
					}
				});
			} else {
				player.currentScore = 0; // IF DICE NUMBER IS 1 : Reset current score
				document.querySelector('#player' + player.playerNumber + '-current-score').innerText = player.currentScore; // Display reseted current score
				setTimeout(changePlayer, 1200) // changePlayer
			}
		}
	})
})

// CHANGE PLAYER FUNCTION
changePlayer = () => {
	for(let i=0; i<players.length; i++){

		// Toggle status of isPLaying
		players[i].isPlaying = !players[i].isPlaying;

		// Changing style of ActivePlayer Screen & hide the dice before next round
		let activePlayerScreen = document.querySelector('#player' + players[i].playerNumber + '-screen'); 
		activePlayerScreen.classList.toggle("active-player");
		diceDisplay.style = "display:none";
	};
}

// RESET THE GAME FUNCTION
// newGame = () => {
// 	players.forEach((player) => { 
// 		player.totalScore = 0;
// 		player.currentScore = 0;
// 		document.querySelector('#player' + player.playerNumber + '-total-score').innerText = player.totalScore;
// 		document.querySelector('#player' + player.playerNumber + '-current-score').innerText = player.currentScore;
// 	});
// };

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