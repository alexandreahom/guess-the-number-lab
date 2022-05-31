const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function() {
    this.secretNum = Math.floor(Math.random() * 
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
      game.getGuess()
    this.prevGuesses.push(guess)
  },
getGuess: function() {
    let guess 
    do {
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`,''))
  } while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum)
  return guess

}, 
}
// im sorry i didnt finish it i felt like i wasnt doing it right and i kept starting over..
