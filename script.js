function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3)

    return choice;
}

for (let i = 0; i < 10; i++) {
    console.log(getComputerChoice());
}