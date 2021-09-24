function computerPlay() { 
    // Randomly returns either "Rock", "Paper" or "Scissors"
    var plays = ["Rock", "Paper", "Scissors"];
    return plays[Math.floor(Math.random() * plays.length)];
}

function playRound(playerSelection, computerSelection) {
    // Plays a single round of Rock Paper Scissors
    let won = null;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a draw!"
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            won = true
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            won = true
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            won = true
        }
    } else {
        won = false
    }

    if (won === true) {
        return `You won! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`
    }
    else {
        return `You lost! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playerSelection, computerSelection)
console.log(playRound(playerSelection, computerSelection));