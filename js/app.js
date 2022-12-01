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


// DISPLAY PLAYERS NAMES
const player1name = document.getElementById('player1-name');
const player2name = document.getElementById('player2-name');

function whatIsYourName(){
	players[0].name = prompt("Joueur 1");
	players[1].name = prompt("Joueur 2");
}
// whatIsYourName();

player1name.innerText = players[0].name;
player2name.innerText = players[1].name;

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
