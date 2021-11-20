
let playerScore = 0;
let computerScore = 0;

const Selections = document.querySelectorAll('button');
const ResultText = document.querySelector(".results");
const Summary = document.querySelector(".summary");

Selections.forEach((selection) => {
    selection.addEventListener('click', () => {
        let roundResult = playRound(selection.textContent, getComputerChoice());
        reportResults(roundResult);
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

function reportResults(roundResult) {
 
    if(roundResult === 2) {
        playerScore++;
        ResultText.textContent = "Round Won";
    } else if(roundResult === 1) {
        computerScore++;
        ResultText.textContent = "Round Lost";
    } else if(roundResult === 0) {
        ResultText.textContent = "Round Tie";
    } 

    //Will break out of the function if a winner is determined because the current score does not need to be reported again. final score is reported in the checkForWinner function.
    if(checkForWinner()) {
        return;
    };
    reportCurrentScore();
}

function reportCurrentScore() {
    Summary.textContent = `Your Score: ${playerScore} \nComputer Score: ${computerScore}\n`;
}

function checkForWinner() {
    if(playerScore === 5) {
        Summary.textContent = `You Win the Game!\nFINAL SCORE: ${playerScore} - ${computerScore}`;
        playerScore = 0;
        computerScore = 0;
        return 1;
    } else if(computerScore === 5) {
        Summary.textContent = `You Lost the game...\nFINAL SCORE: ${computerScore} - ${playerScore}`;
        playerScore = 0;
        computerScore = 0;
        return 1;
    } else return 0;
}