var letters = require("./letters.js");

var PickedWord = function (word) {
    this.currentWord = word[(Math.floor(Math.random() * word.length))];
    this.lettersInWord = [];
    this.activeLetters = [];
    this.won = false;
    this.retrieveLetters = function () {
        for (var i = 0; i < this.currentWord.length; i++) {
            this.lettersInWord.push(new letters(this.currentWord[i]))
        }
    }
    this.displayWord = function () {
        this.showWord = "";
        for (var j = 0; j < this.lettersInWord.length; j++) {
            this.showWord += this.lettersInWord[j].buildWord();
        }
        console.log(this.showWord)
    }
    this.userGuess = function (guess) {
        this.showWord = "";
        for (var k = 0; k < this.lettersInWord.length; k++) {
            if (this.lettersInWord[k].letter === guess) {
                this.lettersInWord[k].present = true;
                this.showWord += this.lettersInWord[k].buildWord();
            } else {
                this.showWord += this.lettersInWord[k].buildWord();
            }
        }
        console.log(this.showWord)
    }
    this.saveLettersInWord = function (guess) {
        for (var l = 0; l < this.lettersInWord.length; l++) {
            this.activeLetters.push(this.lettersInWord[l].letter)
        }
    }
    this.guessedWord = function () {
        this.won = this.lettersInWord.every(function (tf) {
            return tf.present;
        })
        if (this.won === true) {
            console.log("You Won!")
            process.exit();
        }
    }
}

module.exports = PickedWord;