function startGame() { }

function keyBoardEvents(e) {
  if (e.keyCode === 83) {
    // On 'S' Pressed
  } else if (e.keyCode === 76) {
    // On 'L' Pressed
  }
}

document.addEventListener("keypress", keyBoardEvents);



//variables
const input = document.querySelector(".input") //wrong one -> put a proper one


//helper function
const inputReaderValidator = function () {
  const input = 21;
  // const input = input.value;
  if (input === "" || Number.isNaN(input) || input < 20) {
    //render the warning in html
  }
  return input;
};


const startGame = function () {
  const userInput = inputReaderValidator(); //
  // input validation
  const timeOfTheGame = userInput * 1000; // setTimeout is taking input in milliseconds so * 1000


};
