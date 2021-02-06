let ountS = 0;
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