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