// global variables
let countS = 0; 
let countL = 0;
const btnStart = document.querySelector("#btnStart");
const input = document.querySelector("#time");

function keyBoardEvents(e) {
  if (e.keyCode === 83 || e.keyCode===115) {  // On 'S' or 's' Pressed
    let sCount = document.getElementById("countS");
    countS++;
    sCount.innerHTML = countS;
  }
  else if (e.keyCode === 76 || e.keyCode===	108) {  // On 'L' or 'l' Pressed
    let LCount = document.getElementById("countL");
    countL++;
    LCount.innerHTML = countL;
  }
}


//helper function
const inputReaderValidator = function (inputValue) {
  if (inputValue === "" || Number.isNaN(inputValue) || inputValue > parseInt(input.max) || inputValue < parseInt(input.min)) {
    return false;
  }
  return true;
};


const startGame = function () {
  // input validation
  const isInputValid = inputReaderValidator(input.value);
  
  if (isInputValid) {  btnStart.disabled = true;
    input.disabled = true;
    document.addEventListener("keypress", keyBoardEvents);
    countdown(input.value);
    addSpinner();
  }else{
    alert(`Input value is invalid.\nPlease enter a number between ${input.min} and ${input.max}`);
    reset();
  }
};

//Because Time out is async function we should put it after countdown would end
function reset() {
  removeSpinner();
  countL = countS = 0;
  input.disabled = false;
  input.value = 5;
  btnStart.disabled = false;  
};

function addSpinner() {
  const markup = `    
  <div class="spinner">
    <img src="spinner.jpeg" alt="spinner">
  </div>`
  document.querySelector(".content").insertAdjacentHTML("afterbegin", markup);
};

function removeSpinner() {
  if (document.querySelector(".spinner")) {
    document.querySelector(".spinner").remove();
  }
}

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
  reset();
}

function countdown(countDownValue) {

  document.addEventListener("keypress", keyBoardEvents);

  let intervalId = setInterval(function() {
      if(countDownValue >= 0) {
        let time = document.getElementById("time");
        time.value = countDownValue--;
      }
      if(countDownValue === -1) {
        clearInterval(intervalId);
        document.removeEventListener("keypress", keyBoardEvents);
        declareWinner(countS,countL);
        isGameOver = true;
      }
    }, 1000);
}
