var inquirer = require("inquirer");
var word = require("./word.js");
var words = ["javascript", "ruby", "python", "sql", "php",
    "nodejs", "html", "css", "objectivec", "perl", "java"
];
var number = 10;
var newWord = new word(words);
newWord.retrieveLetters();
newWord.displayWord();

function decreaseGuesses(x) {
    newWord.saveLettersInWord(x)
    if (newWord.activeLetters.indexOf(x) === -1) {
        number--;
        console.log("You got it wrong!")
    } else {
        console.log("You got it right!")
    }
    console.log("Number of Guesses left: " + number)
    if (number === 0) {
        endGame();
    } else {
        playGame();
    }
}

function endGame() {
    if (number === 0) {
        playAgain();
    }
}

function playAgain() {
    inquirer.prompt([{
        type: "confirm",
        name: "playAgain",
        message: "Would you like to play again?",
        default: false
    }]).then(function (user) {
        if (user.playAgain === true) {
            for(var i = 0; i < newWord.lettersInWord.length;i++){
                newWord.lettersInWord[i].present = false;
            }
            number = 10;
            newWord.displayWord();
            playGame();
        } else {
            process.exit();
        }
    })
}

function playGame() {
    inquirer.prompt([{
        type: "input",
        name: "guess",
        message: "Guess a letter!",
        validate: function validateGuess(guess) {
            var reg = /^[a-z]+$/;
            return reg.test(guess) || "Guess must be a lower case letter!";
        },
    }, ]).then(function (user) {
        newWord.userGuess(user.guess);
        newWord.guessedWord();
        decreaseGuesses(user.guess);
    })
}

playGame();