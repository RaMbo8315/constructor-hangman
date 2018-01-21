# constructor-hangman

A hangman command-line game using constructor functions

## Description

This game is played from the command-line. The player is asked to guess a letter while displaying the word they are guessing 
repesenting each letter with an underscore. If the player guesses correctly the letter in the word is displayed otherwise 
the number of guesses is decreased by one and they are reminded of how many guesses they have remaining after each guess. If the number of guesses reaches zero the player is asked if they want to play again, if so the game starts over otherwise the game ends. If the player guesses the word correctly they are alerted that they won.

### How it works

The game was built using three separate javascript files. One called letters.js which contains the Letter constructor used for determine whether the presence of the letter is true or false and whether to display the letter or a underscore. A second called word.js which contains the PickedWord constructor with several properties and methods used for the functionality of the game. The PickedWord constructor also utilizes the Letters constructor which is exported by letters.js., which is also required by word.js. The third called hangman.js this file calls on Inquirer to take in the players guesses. There are a few functions in this file used for starting the game, decreasing number of guesses if guessed wrong, ending the game, and asking the player if they would like to play again. These functions call upon the the PickedWord methods to function. this file requires word.js and the inquirer package to work. Hangman.js is the file you run to play the game.

## Built With

* Javascript
* Nodejs
* Inquirer package

## Authors

* **Henry Urena** - *Initial work* - [Constructor-hangman](https://github.com/RaMbo8315/constructor-hangman)




