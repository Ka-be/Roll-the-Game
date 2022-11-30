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
