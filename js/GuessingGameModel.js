function Game() {
    this.playersGuess = null;
    this.pastGuesses = [];
    this.winningNumber = generateWinningNumber();
    
}

Game.prototype.playersGuessSubmission = function(num) {
    this.playersGuess = num;
    if (isNaN(num) || num > 100 || num < 1) {
       throw "That is an invalid guess.";
    } else {
        return this.checkGuess();
    }
    

};

Game.prototype.checkGuess = function() {
    if (this.playersGuess === this.winningNumber) {
        return "You Win!";
    } 
    if (this.pastGuesses.indexOf(this.playersGuess) > -1) {
        return "You have already guessed that number.";
    } 
    this.pastGuesses.push(this.playersGuess);
    if (this.pastGuesses.length === 5) {
        return "You Lose.";
    }
    if (this.difference() < 10) {
        return "You're burning up!";
    }
    if (this.difference() < 25) {
        return "You're lukewarm."
    }
    if (this.difference() < 50) {
        return "You're a bit chilly.";
    }
    if (this.difference() < 100) {
        return "You're ice cold!"
    }
    return "";

};

Game.prototype.difference = function() {
    return Math.abs(this.playersGuess - this.winningNumber);


};

Game.prototype.isLower = function() {
    if (this.playersGuess < this.winningNumber) {
        return true;
    } else {
        return false;
    }

};


Game.prototype.provideHint = function() {
    var randomArr = [generateWinningNumber(), generateWinningNumber(), this.winningNumber];    
    return shuffle(randomArr);
};

Game.prototype.gameOver = function() {
    return (this.pastGuesses.length >= 5 || this.playersGuess === this.winningNumber);
};

var generateWinningNumber = function() {
    var randomNum = Math.random() * 100;
    var roundedNumber = Math.ceil(randomNum);
    if (roundedNumber === randomNum) {
        return roundedNumber + 1;
    } else {
        return roundedNumber;
    }
};

var newGame = function() {
    return new Game();
};

var shuffle = function(array) {
    for (var endOfShuffleRange = array.length - 1; endOfShuffleRange >= 0; endOfShuffleRange--) {
        var randomIndex = Math.floor(Math.random() * (endOfShuffleRange + 1));
        var tempNum = array[endOfShuffleRange];
        array[endOfShuffleRange] = array[randomIndex];
        array[randomIndex] = tempNum;
    }

    return array;

};



