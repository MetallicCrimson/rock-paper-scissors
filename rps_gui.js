function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)

    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "How in the nine hells?";
    }
}

function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    humanMove.textContent = capitalize(humanChoice);
    computerMove.textContent = capitalize(computerChoice);
    // 0: win; 1: lose; 2: tie
    let winStatus;

    if (humanChoice === "rock") {
        switch (computerChoice) {
            case "rock":
                winStatus = 2;
                break;
            case "paper":
                winStatus = 1;
                break;
            case "scissors":
                winStatus = 0;
        }
    } else if (humanChoice === "paper") {
        switch (computerChoice) {
            case "rock":
                winStatus = 0;
                break;
            case "paper":
                winStatus = 2;
                break;
            case "scissors":
                winStatus = 1;
        }
    } else if (humanChoice === "scissors") {
        switch (computerChoice) {
            case "rock":
                winStatus = 1;
                break;
            case "paper":
                winStatus = 0;
                break;
            case "scissors":
                winStatus = 2;
        }
    }

    switch (winStatus) {
        case 0:
            comparison.innerText = "defeats\nYou win this round!";
            humanPoints.textContent = ++humanScore;
            break;
        case 1:
            comparison.innerText = "loses to\nYou lose this round!";
            computerPoints.textContent = ++computerScore;
            break;
        case 2:
            comparison.innerText = "ties with\nIt's a tie!";
            break;
    }

    if (humanScore >= 5) {
        comparison.innerText += "\nYou win! How... how could this happen?";
        endGame();
    } else if (computerScore >= 5) {
        comparison.innerText += "\nYou lost! Fool, did you really think you can defeat me?";
        endGame();
    }

}

function endGame() {
    resetButton.classList.remove("inactive");

    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
}

function initializeGame() {
    resetButton.classList.add("inactive");

    humanScore = 0;
    computerScore = 0;
    humanPoints.textContent = 0;
    computerPoints.textContent = 0;
    humanMove.textContent = "";
    computerMove.textContent = "";
    comparison.textContent = "";

    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
}
let humanScore = 0;
let computerScore = 0;


const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const humanPoints = document.querySelector("#player-column > .points");
const computerPoints = document.querySelector("#computer-column > .points");
const humanMove = document.querySelector("#player-column > .move");
const computerMove = document.querySelector("#computer-column > .move");
const comparison = document.querySelector("#comparison");
const resetButton = document.querySelector("#reset");


rockButton.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperButton.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound("scissors", getComputerChoice()));
resetButton.addEventListener("click", initializeGame);

function displayScore(humanScore, computerScore) {
    humanPoints.textContent = humanScore;
    computerPoints.textContent = computerScore;
}

initializeGame();