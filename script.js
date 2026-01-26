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
    // ...which is fine for now, I guess

    let choice = prompt("What's your choice?", "rock");
    
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

    let displayText = `Computer chose ${capitalize(computerChoice)}.\n`

    switch (winStatus) {
        case 0:
            displayText += `You win! ${capitalize(humanChoice)} beats ${capitalize(computerChoice)}.`;
            humanScore++;
            break;
        case 1:
            displayText += `You lose! ${capitalize(computerChoice)} beats ${capitalize(humanChoice)}.`;
            computerScore++;
            break;
        case 2:
            displayText += `It's a tie! Both choices were ${capitalize(humanChoice)}.`;
            break;
    }

    console.log(displayText)
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}\n  # Human: ${humanScore}\n  # Computer: ${computerScore}`);

        let tempHumanChoice = getHumanChoice();
        playRound(tempHumanChoice, getComputerChoice());
    }

    let result;
    if (humanScore - computerScore < 0) {
        result = "You lost! Fool, did you really think you can defeat me?";
    } else if (humanScore - computerScore > 0) {
        result = "You win! How... how could this happen?"
    } else {
        result = "It's a tie! What an intense battle!";
    }

    console.log(`Your final score: ${humanScore}\nComputer's final score: ${computerScore}\n${result}`);
}

alert(`If console.log messages don't show up, it might be an issue with Chrome - refresh the page, and they should work just fine.\nGood luck beating me in RPS!`);

let humanScore = 0;
let computerScore = 0;

playGame();