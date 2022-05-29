const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
        prevGuesses = []
        this.getGuess()
    },
getGuess: function() {
    let guess
    do {
        guess = parseInt(prompt('Enter a guess between ${this.smallestNum} and ${this.biggestNum}'))
        const guess = parseInt(guess)
    } while (guess < this.smallestNum|| guess > this.biggestNum)
    return guess 
    }
}
console.log(game)
