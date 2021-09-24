function computerPlay() { 
    // Randomly returns either "Rock", "Paper" or "Scissors"
    var plays = ["Rock", "Paper", "Scissors"];
    return plays[Math.floor(Math.random() * plays.length)];
}

for(var x=0; x<20; x++) {
    console.log(computerPlay());
}