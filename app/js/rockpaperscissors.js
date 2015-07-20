'use strict';

function getInput() {
        console.log("Please choose either 'rock', 'paper', or 'scissors'.");
        return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var playerMove = move;
    console.log("Player Move: " + playerMove);
    return playerMove;
}


function getComputerMove(move) {
    var computerMove = move;
    console.log("Computer Move: " + computerMove);
    return computerMove;
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === 'rock') {
        switch (computerMove){
            case 'scissors':
            winner = 'Player';
            break;
            case 'paper':
            winner = 'Computer';
            break;
            default:
            winner = 'Tie';
        }
    }
    else if (playerMove === 'paper') {
        switch (computerMove){
            case 'rock':
            winner = 'Player';
            break;
            case 'scissors':
            winner = 'Computer';
            break;
            default:
            winner = 'Tie';
            }
    }
    else if (playerMove === 'scissors') {
        switch (computerMove){
            case 'paper':
            winner = 'Player';
            break;
            case 'rock':
            winner = 'Computer';
            break;
            default:
            winner = 'Tie';
        }
    }
    else {
        winner = null;
    }
    
    if (winner === null){
    console.log("Invalid move.");
    }
    else if (winner !== 'Tie') {
    console.log(winner + " wins!");
    }
    else {
    console.log("The result is a Tie.");
    }
    return winner;
}

function getN() {
        console.log("How many games would you like to play?");
        return prompt();
}


function playToN() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var gameLimit = getN();
    console.log("First to " + gameLimit + " wins!")
    
    while (playerWins < gameLimit && computerWins < gameLimit){
        var winner = getWinner(getPlayerMove(getInput()), getComputerMove(randomPlay()));
        if (winner === 'Computer') {
        computerWins += 1;
        }
        else if (winner === 'Player') {
        playerWins += 1;
        }
        else {
        //Tie
        }
        
    console.log("Player Wins: " + playerWins + "   " + "Computer Wins: " + computerWins);
    }
    
    if (playerWins == gameLimit) {
        console.log("Player Wins First to " + gameLimit + "!!!");
    }
    else {
        console.log("You Lose!");
    }
    return [playerWins, computerWins];
}



playToN();
