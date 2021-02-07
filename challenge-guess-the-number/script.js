const TOTAL_TRIES = 7;
let randomNumber; // = Math.floor(Math.random() * 100 + 1);
let triesLeft; // = TOTAL_TRIES;
let gameState = "ended";

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;
  let finalOutput = document.querySelector(".final-output");

  let outputMessage1 = "Number of tries left: ";
  let outputMessage2;

  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
  if(guess <= 0 || guess > 100 || guess === "")
  {
    finalOutput.innerHTML = "Please enter a number between 1 and 100";
  }

  // If the user has tries left check if the user's guess matches the randomNumber
  if(triesLeft > 0 && gameState === "started")
  {
    if(guess > randomNumber)
    {
      outputMessage2 = "Number is too high, try again! " + randomNumber;
    }
    else if(guess < randomNumber)
    {
      outputMessage2 = "Number is too low, try again! " + randomNumber;
    }
    else
    {
      outputMessage2 = "The number is " + randomNumber + "<br>Your guess is correct. You win! ";
      gameState = "ended";
    }
    triesLeft--;
    finalOutput.innerHTML = outputMessage1 + triesLeft + "<br>" + outputMessage2;
  }
  else if(triesLeft === 0 && gameState === "started")
  {
    finalOutput.innerHTML = outputMessage1 + triesLeft + "<br>You Lose, the number was " + randomNumber;
  }
  else
  {
    finalOutput.innerHTML = "Game Over!<br>Start a new game.";
  }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);

  //Reset users input field
  let guessInput = document.querySelector(".inputs-Values");
  guessInput.value = "";

  //Reset tries, and triesTaken by the user
  triesLeft = TOTAL_TRIES;

  //Reset the game state
  gameState = "started";

  //Reset the final-output
  let finalOutput = document.querySelector(".final-output");
  finalOutput.innerHTML = "Number of tries left: " + triesLeft + "<br> Guess a number between 1 and 100";
}

document.querySelector(".btnNewGame").addEventListener("click", newGame);
document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);

newGame();

//keyboard exception
function keyBoardEvents(e, randomNumber) {
  if (e.keyCode === 13) {
    guessNumber(randomNumber);
  }
}
