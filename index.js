


// var answer = Math.floor(Math.random() * 25 + 1);
var answer = 5



function clickEvent() {
  var guess = parseInt(document.getElementById('user-input').value);
  var numberDisplay = document.getElementById('number-guess');
  var displayAnswer = document.getElementById('display');

  numberDisplay.innerHTML = guess;
  if (guess > answer) {
    displayAnswer.innerHTML = "That is too high";
  }
  else if (guess < answer) {
    displayAnswer.innerHTML = "That is too low";
  }
  else {
    displayAnswer.innerHTML = "BOOM!";
  }
}
document.getElementById('guess').addEventListener("click" , clickEvent);


//Make a function to clear input
function clearInput() {
  guess=0;
}

//eventListener for clear



//Make Clear button work, disable if there is nothing to clear
//Make Reset button work, disable if there is nothing to reset
