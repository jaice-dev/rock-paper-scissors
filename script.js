function computerPlay() { 
    // Randomly returns either "Rock", "Paper" or "Scissors"
    var plays = ["Rock", "Paper", "Scissors"];
    return plays[Math.floor(Math.random() * plays.length)];
}

function playRound(playerSelection, computerSelection) {
    // Plays a single round of Rock Paper Scissors
    let result = ''
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        result = 'tie';
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        result = 'won';
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
       result = 'won';
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result = 'won';
    } else {
        result = 'lost';
    }

    console.log(playerSelection, computerSelection, result)

    if (result === 'won') {
        console.log(`You won! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)} beats ${computerSelection}.`)
    } else if (result === 'lost') {
        console.log(`You lost! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection}.`)
    } else if (result === 'tie') {
        console.log(`You drew!`)
    }
    
    return result
}



function game() {
    // Play a 5 round game that keeps score and reports a winner or loser at the end.
    let score = 0;

    for (let i = 0; i < 5; i++) {
        userChoice = prompt("Please pick a move");
        computerChoice = computerPlay();
        outcome = playRound(userChoice, computerChoice);

        if (outcome === 'won') {
            score++;
        }
    }

    if (score >= 3) {
        return `You Won! Your score is ${score}/5`;
    } else {
        return `You Lose! Your score is ${score}/5`;
    }
}

console.log(game());
