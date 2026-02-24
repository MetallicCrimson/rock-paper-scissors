const SPEED = 5;
const width = 550;
const height = 715;

// You can modify full health, the game aligns itself to
// use it correctly
const FULL_HEALTH = 5;
const HEALTH_UNIT = 560 / FULL_HEALTH;

function keyDownFunction(e) {
    switch (e.code) {
        case "KeyW":
            upPressed = true;
            break;
        case "KeyS":
            downPressed = true;
            break;
        case "KeyA":
            leftPressed = true;
            testPlayer.style.transform = "rotateY(40deg) rotateZ(-20deg)";
            break;
        case "KeyD":
            rightPressed = true;
            testPlayer.style.transform = "rotateY(40deg) rotateZ(20deg)";
            break;
        default:
            break;
    }
}

function keyUpFunction(e) {
    switch (e.code) {
        case "KeyW":
            upPressed = false;
            break;
        case "KeyS":
            downPressed = false;
            break;
        case "KeyA":
            leftPressed = false;
            testPlayer.style.transform = "rotateY(0deg)";
            break;
        case "KeyD":
            rightPressed = false;
            testPlayer.style.transform = "rotateY(0deg)";
            break;
        default:
            break;
    }
}

function testFunction(e) {
    console.log(e);
}


const testPlayer = document.querySelector("#player");
const container = document.querySelector("#container");
const playingScreen = document.querySelector("#playing-screen");
const shootingScreen = document.querySelector("#shooting-screen");
const playerChoiceDiv = document.querySelector("#player-choice");
const computerChoiceDiv = document.querySelector("#computer-choice");
const playerHealthbar = document.querySelector("#player-healthbar");
const computerHealthbar = document.querySelector("#computer-healthbar");
const gameOver = document.querySelector("#gameover");

document.body.addEventListener("keydown", keyDownFunction);
document.body.addEventListener("keyup", keyUpFunction);
container.addEventListener("focusout", testFunction);
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

const winningText = `You win!\nHow... how could this happen?\n\n\n
< restart by pressing the spacebar >`;
const losingText = `You lost!\nFool, did you really think you can defeat me?\n\n\n
< restart by pressing the spacebar >`;

let playerHealth;
let computerHealth;

let playerHitCounter;
let computerHitCounter;

function initializeGame() {
    playerHealth = FULL_HEALTH;
    computerHealth = FULL_HEALTH;

    playerHitCounter = 0;
    computerHitCounter = 0;

    gameOver.style.opacity = 0;

    playerHealthbar.style.width = FULL_HEALTH*HEALTH_UNIT + "px";
    computerHealthbar.style.width = FULL_HEALTH*HEALTH_UNIT + "px";

    initializeRound();   
}

function initializeRound() {
    playingScreen.classList.remove("inactive");
    shootingScreen.classList.add("inactive");

    playerChoiceDiv.style.transition = "transform 0s, top 0s";
    computerChoiceDiv.style.transition = "transform 0s, top 0s";

    playerChoiceDiv.style.transform = "scale(0)";
    computerChoiceDiv.style.transform = "scale(0) rotate(180deg)";

    setTimeout(() => {
        playerChoiceDiv.style.transition = "transform 1.5s, top 1.5s";
        computerChoiceDiv.style.transition = "transform 1.5s, top 1.5s";
    });

    testPlayer.style.left = "265px";
    testPlayer.style.top = "650px";
}


// This could have been done much cleaner by adding/removing the
// event listener on each occasion.
// Alas, I will absolutely not refactor it
function moveByFrame () {
    if (playingScreen.classList.contains("inactive")) return;
    
    if (leftPressed && parseInt(testPlayer.style.left) >= SPEED) {
        testPlayer.style.left = parseInt(testPlayer.style.left) - SPEED + "px";
        console.log(testPlayer.style.left);
    }
    if (rightPressed && parseInt(testPlayer.style.left) <= width - SPEED - 20) {
        testPlayer.style.left = parseInt(testPlayer.style.left) + SPEED + "px";
        console.log(testPlayer.style.left);
    }
    if (upPressed) {
        if (parseInt(testPlayer.style.top) >= 560 - SPEED) { 
            testPlayer.style.top = parseInt(testPlayer.style.top) - SPEED + "px";
        } else {
            let playerChoice;
            let choiceCoord = parseInt(testPlayer.style.left) + 10;

            if (choiceCoord <= 180) {
                playerChoice = 0;
            } else if (choiceCoord <= 370) {
                playerChoice = 1;
            } else {
                playerChoice = 2;
            }

            
            playRound(playerChoice, Math.floor(Math.random() * 3));
        }
    }
    if (downPressed && parseInt(testPlayer.style.top) <= height - SPEED - 50) {
        testPlayer.style.top = parseInt(testPlayer.style.top) + SPEED + "px";
    }
}

function gameOverKeyListener (e) {
    if (e.code !== "Space") return;

    this.removeEventListener("keyup", gameOverKeyListener);
    initializeGame();
}

window.onload = function() {
    this.setInterval(moveByFrame, (1000/60));

    initializeGame();
}

function getChoiceText(choice) {
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            break;
    }
}

function getChoiceCharacter(choice) {
    switch (choice) {
        case 0:
            return "✊";
        case 1:
            return "✋";
        case 2:
            return "✌️";
        default:
            break;
    }
}


// 0: rock, 1: paper, 2: scissors
function playRound(playerChoiceInt, computerChoiceInt) {
    playingScreen.classList.add("inactive");
    shootingScreen.classList.remove("inactive");

    let winStatus;
    playerChoice = getChoiceText(playerChoiceInt);
    computerChoice = getChoiceText(computerChoiceInt);

    computerChoiceInt = 0;
    computerChoice = "rock";

    if (playerChoice === "rock") {
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
    } else if (playerChoice === "paper") {
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
    } else if (playerChoice === "scissors") {
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

    computerChoiceDiv.textContent = getChoiceCharacter(computerChoiceInt);
    playerChoiceDiv.textContent = getChoiceCharacter(playerChoiceInt);

    playerChoiceDiv.style.animationName = "";
    computerChoiceDiv.style.animationName = "";
    playerChoiceDiv.style.top = "450px";
    playerChoiceDiv.style.left = "250px";
    computerChoiceDiv.style.top = "250px";
    computerChoiceDiv.style.left = "250px";

    computerChoiceDiv.style.transform = "scale(1) rotate(180deg)";
    playerChoiceDiv.style.transform = "scale(1)";

    setTimeout(() => {
        if (winStatus === 0) {
            computerHitCounter = 0;
            if (++playerHitCounter >= 3 && computerHealth > 1) {
                computerHealth--;
                playerHitCounter = 0;
            }

            playerChoiceDiv.style.animationName = "player-winning";
            computerChoiceDiv.style.animationName = "computer-losing";

        
            computerHealth--;
        } else if (winStatus === 1) {
            playerHitCounter = 0;
            if (++computerHitCounter >= 3 && playerHealth > 1) {
                playerHealth--;
                computerHitCounter = 0;
            }

            playerChoiceDiv.style.animationName = "player-losing";
            computerChoiceDiv.style.animationName = "computer-winning";

            playerHealth--;
        } else {
            playerHitCounter = 0;
            computerHitCounter = 0;

            playerChoiceDiv.style.animationName = "player-losing";
            computerChoiceDiv.style.animationName = "computer-losing";
        }

        setTimeout(() => {

            playerHealthbar.style.width = playerHealth*HEALTH_UNIT + "px";
            computerHealthbar.style.width = computerHealth*HEALTH_UNIT + "px";

            if (playerHealth >= 1 && computerHealth >= 1) {
               setTimeout(() => {
                    initializeRound();
                }, 500); 
            } else {
                if (playerHealth <= 0) {
                    gameOver.innerText = losingText;
                } else {
                    gameOver.innerText = winningText;
                }
            document.body.addEventListener("keyup", gameOverKeyListener);

                setTimeout(() => {
                    gameOver.style.opacity = "100%";
                }, 700);
            }
        }, 900);

    }, 1500);    
}

