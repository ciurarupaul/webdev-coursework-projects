"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "🎉 Correct Number ! ";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 20;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const youWon = "🎉 Correct Number !";
const youLost = "✨YOU LOST✨";

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
	document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);
	console.log(typeof guess);

	// no input
	if (!guess) {
		displayMessage("⛔ No Number!");

		// player wins
	} else if (guess === secretNumber) {
		displayMessage("🎉 Correct Number !");
		document.querySelector(".number").textContent = secretNumber;

		document.querySelector(".number").style.padding = "1.2rem 4.8rem";
		document.querySelector(".number").style.fontSize = "6.4rem";
		document.querySelector(".number").style.borderRadius = "11px";

		if (score > highscore) highscore = score;

		document.querySelector(".highscore").textContent = highscore;

		// guess is wrong
	} else if (guess != secretNumber) {
		if (score > 1) {
			displayMessage(
				guess > secretNumber ? "😔 Too High :(" : "🤏 Too Low :("
			);
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			displayMessage = "✨YOU LOST✨";
			document.querySelector(".score").textContent = 0;
		}
	}

	// diplay score in designated section
	document.querySelector(".score").textContent = score;
});

document.querySelector(".again").addEventListener("click", function () {
	const message = document.querySelector(".message").textContent;

	if (message === youWon || message === youLost) {
		score = 20;
		secretNumber = Math.trunc(Math.random() * 20) + 1;

		document.querySelector(".score").textContent = score;
		displayMessage("Start guessing...");
		document.querySelector(".number").textContent = "?";
		document.querySelector(".guess").value = "";

		document.querySelector(".number").style.padding = "1.2rem 2.4rem";
		document.querySelector(".number").style.fontSize = "4.8rem";
	}
});
