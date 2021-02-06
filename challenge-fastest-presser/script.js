let countS = 0;
let countL = 0;

function keyBoardEvents(e) {
  if (e.keyCode === 83) {
    console.log("I'm S")
    // On 'S' Pressed
    countS++;
  } else if (e.keyCode === 76) {
    console.log("I'm L")
    // On 'L' Pressed
    countL++;
  }
}


//helper function
const inputReaderValidator = function (inputValue) {
  if (inputValue === "" || Number.isNaN(inputValue) || inputValue > 20 || inputValue <= 0) {
    //render the warning in html
    console.log("Input value is invalid");
    return false;
  }
  return true;
};


const startGame = function () {
  //variables
  const input = document.querySelector("#time") //wrong one -> put a proper one
  
  // input validation
  const isInputValid = inputReaderValidator(input.value); //
  
  if(isInputValid) { 
    countdown(input.value);
  }
  // the esle part needs to dealt with
};

// document.addEventListener("keypress", keyBoardEvents);
function declareWinner(userSCounter, userLCounter) {
	let winner;
	const tie = document.getElementById("tie");
	tie.innerHTML = "";
	if (userSCounter > userLCounter) {
		console.log("Player S wins");
		winner = 'playerSCanvas';
	} else if (userSCounter < userLCounter) {
		console.log("Player L wins");
		winner = 'playerLCanvas';
	} else {
		console.log("It's a tie");
	}
	if (winner) {
		const confettiSettings = { target: winner, width: 300, height: 200 };
		const confetti = new ConfettiGenerator(confettiSettings);
		confetti.render();
	} else {
		tie.innerHTML = "It's a tie!"
	}
	
}

function countdown(countDownValue) {

  document.addEventListener("keypress", keyBoardEvents);

  let intervalId = setInterval(function() {
      if(countDownValue >= 0) {
        countDownValue--;
        console.log("Timer decremented!");
      }
      if(countDownValue === -1) {
        clearInterval(intervalId);
        document.removeEventListener("", keyBoardEvents);
        declareWinner(countS,countL);
        isGameOver = true;
      }
    }, 1000);
}


