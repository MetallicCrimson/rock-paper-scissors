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

function getHumanChoice() {
    // Assume: the user always returns a correct choice
    // ...why?

    let choice = prompt("What's your choice?");
    
    return choice;
}

function capitalize(s) {
    return s[0].toUpperCase() + s.slice(1);
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
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
            console.log(`You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`);
            humanScore++;
            break;
        case 1:
            console.log(`You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`);
            computerScore++;
            break;
        case 2:
            console.log(`It's a tie! Both choices were ${capitalize(humanChoice)}.`);
            break;
    }
}

let humanScore = 0;
let computerScore = 0;