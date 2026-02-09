const SPEED = 5;

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

// function step(ts) {
//     test.style.top = (test.getBoundingClientRect().top + 1) + "px";
//     requestAnimationFrame(step);
// }

const testPlayer = document.querySelector("#player");
// const testRect = testPlayer.getBoundingClientRect();
const container = document.querySelector("#container");
const playingScreen = document.querySelector("#playing-screen");
const shootingScreen = document.querySelector("#shooting-screen");
const playerChoiceDiv = document.querySelector("#player-choice");
const computerChoiceDiv = document.querySelector("#computer-choice");

document.body.addEventListener("keydown", keyDownFunction);
document.body.addEventListener("keyup", keyUpFunction);
container.addEventListener("focusout", testFunction);
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

const width = 550;
const height = 715;

// let yOffset = container.getBoundingClientRect().top
// let xOffset = container.getBoundingClientRect().left

testPlayer.style.left = "265px";
testPlayer.style.top = "650px";



window.onload = function() {
    


    function test () {
        if (playingScreen.classList.contains("inactive")) return;
        // testPlayer.style.top = testPlayer.getBoundingClientRect().top-40 + SPEED + "px";
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

    this.setInterval(test, (1000/60));
}

function parseChoice(choice) {
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            break;
    }h
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
    playerChoice = parseChoice(playerChoiceInt);
    computerChoice = parseChoice(computerChoiceInt);

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

    computerChoiceDiv.style.transform = "scale(1) rotate(180deg)";
    playerChoiceDiv.style.transform = "scale(1)";

    setTimeout(() => {
        if (winStatus === 0) {
            computerChoiceDiv.style.transition = "top .5s linear";
            computerChoiceDiv.style.top = "330px";
            playerChoiceDiv.style.transition = "top " + (11/4) + "s linear";
            playerChoiceDiv.style.top = "10px";
        }
    }, 1500);

    
    

    
}