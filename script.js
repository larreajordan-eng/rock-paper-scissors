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