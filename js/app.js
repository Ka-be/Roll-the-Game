//PLAYERS DATA
let players = [
	{
		playerNumber: 1,
		name: "Player 1",
		roundScore: 0,
		totalScore: 0,
		isTheWinner: false,
	},
	{
		playerNumber: 2,
		name: "Player 2",
		roundScore: 0,
		totalScore: 0,
		isTheWinner: false,
	},
];




// RANDOM DICE NUMBER PART
const rollButton = document.getElementById("roll"); //Button roll
let diceDisplay = document.getElementById("diceDisplay"); //Dice picture

rollButton.addEventListener("click", () => {
	let diceNumber = Math.floor(Math.random() * 6) + 1;
	diceDisplay.style = "display:block"; // Display the dice
	diceDisplay.src = "images/dice_" + diceNumber + ".svg";
});

// CHANGE PLAYERS
const saveButton = document.getElementById("save");
const player1Screen = document.getElementById("player1-screen");
const player2Screen = document.getElementById("player2-screen");

saveButton.addEventListener("click", () => {
	player1Screen.classList.toggle("active-player");
	player2Screen.classList.toggle("active-player");
	diceDisplay.style = "display:none"; // Hide the dice at the change of player
});

//LAUNCH GAME
//Récuperer les noms des joueurs
//Les afficher
//Display none welcome, display section game(delete display none)


//Recup Nom joueur
let player1Input = document.getElementById('p1');
let player2Input = document.getElementById('p2');



// DISPLAY PLAYERS NAMES
const player1DisplayedName = document.getElementById('player1-name');
const player2DisplayedName = document.getElementById('player2-name');


// ECRANS

function launchGame(){
	const welcomeScreen = document.getElementById('welcome');
	const gameScreen = document.getElementById('game');
	welcomeScreen.classList.add("hide");
	gameScreen.classList.remove("hide");
};