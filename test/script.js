//This section of the code sets up the variables and constants we need to store the data our program will use.

let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
guessField.focus();

//This part below is the checkGuess function

function checkGuess() {
	const userGuess = Number(guessField.value);
	if (guessCount === 1) {
		guesses.textContent = "Previous guesses:";
	}
	guesses.textContent = `${guesses.textContent} ${userGuess}`;

	if (userGuess === randomNumber) {
		lastResult.textContent = "Congratulations! You got it right!";
		lastResult.style.backgroundColor = "green";
		lowOrHi.textContent = "";
		setGameOver();
	} else if (guessCount === 10) {
		lastResult.textContent = "!!!GAME OVER!!!";
		lowOrHi.textContent = "";
		setGameOver();
	} else {
		lastResult.textContent = "Wrong!";
		lastResult.style.backgroundColor = "red";
		if (userGuess < randomNumber) {
			lowOrHi.textContent = "Last guess was too low!";
		} else if (userGuess > randomNumber) {
			lowOrHi.textContent = "Last guess was too high!";
		}
	}

	guessCount++;
	guessField.value = "";
	guessField.focus();
}

//implemented checkGuess() function, but it won't do anything because we haven't called it yet hence add event listener
guessSubmit.addEventListener("click", checkGuess);

//next is function for setGameOver, disables inputting more guesses and resets the game

function setGameOver() {
	guessField.disabled = true;
	guessSubmit.disabled = true;
	resetButton = document.createElement("button");
	resetButton.textContent = "Start new game";
	document.body.append(resetButton);
	resetButton.addEventListener("click", resetGame);
}

//reset game function here

function resetGame() {
	guessCount = 1;

	const resetParas = document.querySelectorAll(".resultParas p");
	for (const resetPara of resetParas) {
		resetPara.textContent = "";
	}

	resetButton.parentNode.removeChild(resetButton);

	guessField.disabled = false;
	guessSubmit.disabled = false;
	guessField.value = "";
	guessField.focus();

	lastResult.style.backgroundColor = "white";

	randomNumber = Math.floor(Math.random() * 100) + 1;
}
