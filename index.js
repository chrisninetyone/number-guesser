var answer = Math.floor(Math.random() * 100 + 1);
// var answer = 5

function clickEvent() {
  var guess = parseInt(document.querySelector('.user-input').value);
  var numberDisplay = document.querySelector('.number-guess');
  var displayAnswer = document.querySelector('.display');

  numberDisplay.innerHTML = guess;
  if (guess > answer && guess <= 100) {
    displayAnswer.innerHTML = "That is too high";
  }
  else if (guess < answer && guess >= 1) {
    displayAnswer.innerHTML = "That is too low";
  } else if (guess <= 0 || guess >= 101) {
    alert("Value must be between 1 and 100");
  } else {
    displayAnswer.innerHTML = "Correct Answer!";
}
}
document.getElementById('guess').addEventListener("click", clickEvent);


document.getElementById('clear').addEventListener("click", function clearInput() {
  document.querySelector('.user-input').value='';
})

document.getElementById('reset').addEventListener("click", function resetField() {
  document.querySelector('.number-guess').innerHTML   = '';
  document.querySelector('.display').innerHTML = '';
})


//Clear button disable if there is nothing to clear
//Reset button disable if there is nothing to reset
