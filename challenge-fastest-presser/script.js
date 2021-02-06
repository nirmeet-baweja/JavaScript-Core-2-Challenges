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
    console.error("Input value is invalid");
    return false;
  }
  return true;
};


const startGame = function () {
  //variables
  document.querySelector("#btnStart").removeEventListener("onclick", startGame)
  const input = document.querySelector("#time") //wrong one -> put a proper one

  // input validation
  const isInputValid = inputReaderValidator(input.value); //
  spinnerAdding();
  if (isInputValid) {
    countdown(input.value);
  }
  // the else part needs to dealt with

  // block the start function

};

//Because Time out is async function we should put it after countdown would end
const originalGameState = function () {
  countL = countS = 0;
  document.querySelector("#time").value = "";
  document.removeEventListener("keypress", keyBoardEvents);

};

const spinnerAdding = function () {
  const markup = `    
  <div class="spinner">

            <img src="spinner.jpeg" alt="spinner">

        </div>`
  document.querySelector(".content").insertAdjacentHTML("afterbegin", markup);

};

const spinnerRemoving = function () {
  document.querySelector(".spinner").remove();
}

// document.addEventListener("keypress", keyBoardEvents);
function declareWinner(userSCounter, userLCounter) {
  let winner;
  if (userSCounter > userLCounter) {
    console.log("Player S wins");
    winner = 'playerS';
  } else if (userSCounter < userLCounter) {
    console.log("Player L wins");
    winner = 'playerL';
  } else {
    console.log("It's a tie");
    winner = ""
  }
  const theWinner = document.getElementById(winner);
  // no more error when there is tie
  document.getElementById(winner) ? theWinner.style.backgroundColor = "green" : "";
  // const confettiSettings = { target: winner };
  // const confetti = new ConfettiGenerator(confettiSettings);
  // confetti.render();
}

function countdown(countDownValue) {

  document.addEventListener("keypress", keyBoardEvents);

  let intervalId = setInterval(function () {
    if (countDownValue >= 0) {
      countDownValue--;
      console.log("Timer decremented!");
    }
    if (countDownValue === -1) {
      clearInterval(intervalId);
      document.removeEventListener("", keyBoardEvents);
      declareWinner(countS, countL);
      isGameOver = true;

    }
  }, 1000);
}


