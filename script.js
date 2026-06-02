//Will return computer's selection in console
function getComputerChoice() {
    return Math.random()
}

const choice = getComputerChoice();



if (choice <= 0.32) {
    console.log('Rock');
} else if (choice <= 0.65 && choice >= 0.33) {
    console.log('Paper');
} else {
    console.log('Scissors');
}

getComputerChoice


//Human choice
function getHumanChoice() {
    return prompt('Select Rock, Paper, or Scissors');
}
const human = getHumanChoice();
const lowerHuman = human.toLowerCase();
const humanChoice = lowerHuman.charAt(0).toUpperCase() + lowerHuman.slice(1);
console.log(humanChoice);


//Score variables
let humanScore = 0;
let computerScore = 0;

/*
//Stack overflow error
function playRound(getHumanChoice, getComputerChoice) {
    if (playRound('Rock', 'Rock')) {
        console.log('A tie!');
    } else if (playRound('Rock', 'Paper')) {
        console.log('You Win!');
    } else if (playRound('Rock', 'Scissors')) {
        console.log('You Lose!');
    } else if (playRound('Paper', 'Rock')) {
        console.log('You Win!');
    } else if (playRound('Paper', 'Paper')) {
        console.log('A Tie!');
    } else if (playRound('Paper', 'Scissors')) {
        console.log('You Lose!');
    } else if (playRound('Scissors', 'Rock')) {
        console.log('You Lose!');
    } else if (playRound('Scissors', 'Paper')) {
        console.log('You Win!');
    } else if (playRound('Scissors', 'Scissors')) {
        console.log('A Tie!');
    }
}
playRound();

*/ 