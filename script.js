//Will return computer's selection in console
function getComputerChoice() {
    const randomNumber = Math.random()


if (randomNumber <= 0.33) {
    return 'Rock';
} else if (randomNumber <= 0.66) {
    return 'Paper';
} else {
    return 'Scissors';
}
}



//Human choice
function getHumanChoice() {
const human = prompt ('Select Rock, Paper, or Scissors');
const lowerHuman = human.toLowerCase();
const humanChoiceCaseInsensitive = lowerHuman.charAt(0).toUpperCase() + lowerHuman.slice(1);
console.log(humanChoiceCaseInsensitive);
return humanChoiceCaseInsensitive;
}


//Score variables
let humanScore = 0;
let computerScore = 0;




function playRound(humanChoice, computerChoice) {
    const matchUp = `${humanChoice}-${computerChoice}`
    switch (matchUp) {
    
        case 'Rock-Rock':
        case 'Paper-Paper':
        case 'Scissors-Scissors':
        console.log('A tie!');
        break;

        case 'Rock-Scissors':
        case 'Paper-Rock':
        case 'Scissors-Paper':
        console.log('You win!');
        humanScore++
        break;

        case 'Rock-Paper':
        case 'Paper-Scissors':
        case 'Scissors-Rock':
        console.log('You lose.');
        computerScore++;
        break;
    }
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);

function playGame() {
    humanScore = 0;
    computerScore = 0;

    console.log("Start the game, best of 5 wins.");

    for (let i = 0; i<5; i++) {
        console.log(`\n--- Round ${i+1} ---`);

        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        console.log(`Computer Chose: ${computerChoice}`);

        playRound(humanChoice, computerChoice);

        console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
    }

    console.log("\n=== Game Over ===");
    if (humanScore > computerScore) {
        console.log('You won the Game! Final Score: ${humanScore} to ${computerScore}');
    } else if (computerScore > humanScore) {
        console.log('You lost the game. Final Score: ${humanScore} to ${computerScore}');
    } else {
        console.log(`It's a tie! Final Score: ${humanScore} to ${computerScore}`)
    }
}

playGame();