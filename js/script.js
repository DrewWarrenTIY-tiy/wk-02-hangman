"use strict";

var guessAttempts = 8;
var answerWord = "";
var rightGuesses = "";
var wrongGuesses = "";
var guessProgress = "";
var allLetterString = "abcdefghijklmnopqrstuvwxyz";

//First fxn - starts the game;
  //Assign answerWord var as a random commonWord
  var answerWord = commonWords[Math.floor(Math.random() * commonWords.length)];
  //For each character in answerWord, set guessProgress char to _
  for (var i = 0; i < answerWord.length(); i++ ) {
    guessProgress.charAt(i) = "_";
    console.log(answerWord);
    console.log(guessProgress);
  }
}

//Second fxn - player passes in a guess, confirms guess is a letter that has not been guessed;
var playerGuess = prompt("Guess a letter:")
  playerGuess.toLowerCase();
  if (allLetterString.indexOf(playerGuess) === -1) {
    alert("Not a letter, please guess a letter.");
  } else alert("Valid guess, thanks!");


//Third fxn - Checks if Guess is right/wrong, change guess progress if right, decrement guessAttempts if wrong, add guess letter to right/wrong vars to prevent duplicate guess;
if (answerWord.indexOf(playerGuess) === -1) {
    guessAttempts--;
    console.log(guessAttempts);
  } else {
      console.log(guessAttempts);
  }

// function showGuessProgress() {
//   if (playerGuess === answerWord.charAt(-1)) {
//     wrongGuesses += playerGuess;
//     guessAttempts--;
//   } else {
//     rightGuesses += playerGuess;
//     for (var i = 0; i < guessProgress.length(); i++) {
//     guessProgress.charAt(i) = playerGuess;
//     }
//   }
// }

//Fourth fxn - Checks if player has won or lost;
function didPlayerWin() {
  if (guessProgress.contains("_") {
    alert("Congratulations, you won!")
  }
  if (guessAttempts === 0) {
    alert("Oh no! You lose... D:");
  }
}
