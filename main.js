
let playerScore = 0;
let computerScore = 0;

const selections = document.querySelectorAll('button');

selections.forEach((selection) => {
    selection.addEventListener('click', () => {
        let roundResult = playRound(selection.textContent, getComputerChoice());
        playGame(roundResult);
    });
});

// returns the computer's randomized choice of either Rock, Paper, or Scissors as a string.

function getComputerChoice() {
    let computerChoice = Math.random() * 3;
    if(computerChoice < 1) {
        return "Rock";
    } else if(computerChoice < 2) {
        return "Paper";
    } else return "Scissors";
    
}

// Game logic for one round that compares user input to computer generated choice and determines winner by returning a string describing win/lose.

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);
    switch(playerSelection) {
        case "rock":
            if(computerSelection === "Scissors") {
                return 2;
            } else if(computerSelection === "Paper"){
                return 1;
            } else {
                return 0;
            }
            break;
        case "paper":
            if(computerSelection === "Rock") {
                return 2;
            } else if(computerSelection === "Scissors"){
                return 1;
            } else {
                return 0;
            }
            break;
        case "scissors":
            if(computerSelection === "Paper") {
                return 2;
            } else if(computerSelection === "Rock"){
                return 1;
            } else {
                return 0;
            }
            break;
        default:
            return -1;
    }
}

function playGame(roundResult) {


    //Run 1 round of the game simulation
    if(roundResult === 2) {
        playerScore++;
        console.log("Win");
    } else if(roundResult === 1) {
        computerScore++;
        console.log("Lose");
    } else if(roundResult === 0) {
        console.log("Tie");
    } else {
        console.log("Invalid computerChoice. Choose Rock, Paper, or Scissors.");
    }

    if(playerScore === 5) {
        console.log("You Win!");
        playerScore = 0;
        computerScore = 0;
        return;
    }
    if(computerScore === 5) {
        console.log("You Lose!");
        playerScore = 0;
        computerScore = 0;
        return;
    }
    
    //At the end of the current round, gives a score update
    console.log(`Your Score: ${playerScore} \nComputer Score: ${computerScore}\n`);

}