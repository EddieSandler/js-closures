function guessingGame() {
  let randomNumber = Math.floor(Math.random() * 100);
  let guess = 1;
  let hasWon = false;

  return function getRando(num) {
    if (hasWon === true) return (`The game is over, you already won!`);
    if (num === randomNumber) {
      hasWon = true;
      return (`You win! You found ${randomNumber} in ${guess} guesses.`);
    };
    guess++;
    if (num < randomNumber) return (`${num} is too low!`);
    if (num > randomNumber) return (`${num} is too high!`);

  };

}

module.exports = { guessingGame };



let game = guessingGame();
game(50); // "50 is too low!"
game(90); // "90 is too high!"
game(70); // "You win! You found 70 in 3 guesses."
game(70); // "The game is over, you already won!"