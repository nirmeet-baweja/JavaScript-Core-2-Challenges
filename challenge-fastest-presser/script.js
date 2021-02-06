function startGame() {}

function keyBoardEvents(e) {
  if (e.keyCode === 83) {
    // On 'S' Pressed
  } else if (e.keyCode === 76) {
    // On 'L' Pressed
  }
}

function declareWinner(userSCounter, userLCounter) {
	let winner;
	if (userSCounter > userLCounter) {
		console.log("Player S wins");
		winner = 'my-canvas';
	} else if (userSCounter < userLCounter) {
		console.log("Player L wins");
		winner = 'my-canvas';
	} else {
		console.log("It's a tie");
	}
	const confettiSettings = { target: winner };
	const confetti = new ConfettiGenerator(confettiSettings);
	confetti.render();
}

document.addEventListener("keypress", keyBoardEvents);
