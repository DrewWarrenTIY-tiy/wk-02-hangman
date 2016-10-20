"use strict";

var tries = 8;
var guess;
var answerWord = "";
var guessProgress = "";
var status = "status";

//Display tries on page load.
document.querySelector('.triesCount').innerHTML = "Tries: " + tries;

//Create Answer Word
function setAnswerWord() {
  answerWord = getWord();
}

//Create string of _'s to show Progress
function setProgress() {
  for (var i = 0; i < answerWord.length; i++ ) {
    guessProgress += "_ ";
  }
}

//Display progress to HTML.
function showProgress() {
  document.querySelector('.progressHolder').innerHTML = guessProgress;
}

//Guess Functions - Button sets 'guess' var.
function inputGuess() {
  return document.querySelector('.guessLetter').value;
}

function setGuess() {
  guess = inputGuess();
  updateGuess();
}

document.querySelector('.submitGuess').onclick = setGuess;
//End Guess Functions

//Update Progress if Guess is match.
function updateGuess() {
  let ansArray = answerWord.split('');
  let progArray = guessProgress.split(" ");
  for (let i = 0; i < answerWord.length; i++) {
    if (ansArray[i] === guess) {
      progArray[i] = guess;
    }
  }
  answerWord = ansArray.join("");
  guessProgress = progArray.join(" ");
  showProgress();
  checkMatch();
  setStatus();
  checkWin();
  checkLose();
}

//If guess is not a match, decrement tries.
function checkMatch() {
  if (answerWord.includes(guess)) {
    document.querySelector('.triesCount').innerHTML = "Tries: " + tries;
    return true;
  } else {
    document.querySelector('.triesCount').innerHTML = "Tries: " + tries;
    return false;
  }
}

//Set and Display Status Message.
function setStatus() {
  if (checkMatch() === true) {
    status = "Nice Guess! Keep it up!"
  } else {
    status = "Whoops! Wrong... Try again!"
    tries--;
    document.querySelector('.triesCount').innerHTML = "Tries: " + tries;
  }
  document.querySelector('.statusHolder').innerHTML = status;
}

//Check if Player Lost.
function checkLose() {
  if (tries <= 0) {
    status = "Oh no! You lost... D; \n Better luck next time!";
    document.querySelector('.statusHolder').innerHTML = status;
    return true;
  }
}

//Check if Player Won.
function checkWin() {
  if (guessProgress.includes("_")) {
    return false;
  } else {
    status = "Wow! You got it! Great job, you win!";
    document.querySelector('.statusHolder').innerHTML = status;
    return true;
  }
}

setAnswerWord();
setProgress();
showProgress();
