let countS = 0;
let countL = 0;

function startGame() {}

function keyBoardEvents(e) {
  if (e.keyCode === 83) {
    // On 'S' Pressed
    countS++;
  } else if (e.keyCode === 76) {
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

function countdown(countDownValue) {

  document.addEventListener("keypress", keyBoardEvents);

  let intervalId = setInterval(function() {
      if(countDownValue >= 0) {
        countDownValue--;
        console.log("Timer decremented!");
      }
      if(timer === -1) {
        clearInterval(intervalId);
        document.removeEventListener("", keyBoardEvents);
        isGameOver = true;
      }
    }, 1000);
}

