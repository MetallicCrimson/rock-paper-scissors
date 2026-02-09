const SPEED = 5;

function keyDownFunction(e) {
    switch (e.key) {
        case "ArrowUp":
            upPressed = true;
            break;
        case "ArrowDown":
            downPressed = true;
            break;
        case "ArrowLeft":
            leftPressed = true;
            testPlayer.style.transform = "rotateY(40deg) rotateZ(-20deg)";
            break;
        case "ArrowRight":
            rightPressed = true;
            testPlayer.style.transform = "rotateY(40deg) rotateZ(20deg)";
            break;
        default:
            break;
    }
}

function keyUpFunction(e) {
    switch (e.key) {
        case "ArrowUp":
            upPressed = false;
            break;
        case "ArrowDown":
            downPressed = false;
            break;
        case "ArrowLeft":
            leftPressed = false;
            testPlayer.style.transform = "rotateY(0deg)";
            break;
        case "ArrowRight":
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
const container = document.querySelector("#container")

document.body.addEventListener("keydown", keyDownFunction);
document.body.addEventListener("keyup", keyUpFunction);
container.addEventListener("focusout", testFunction);
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

// let yOffset = container.getBoundingClientRect().top
// let xOffset = container.getBoundingClientRect().left

testPlayer.style.left = "265px";
testPlayer.style.top = "650px";

window.onload = function() {
    function test () {
        // testPlayer.style.top = testPlayer.getBoundingClientRect().top-40 + SPEED + "px";
        if (leftPressed) {
            testPlayer.style.left = parseInt(testPlayer.style.left) - SPEED + "px";
            console.log(testPlayer.style.left);
        }
        if (rightPressed) {
            testPlayer.style.left = parseInt(testPlayer.style.left) + SPEED + "px";
            console.log(testPlayer.style.left);
        }
        if (upPressed) {
            testPlayer.style.top = parseInt(testPlayer.style.top) - SPEED + "px";
        }
        if (downPressed) {
            testPlayer.style.top = parseInt(testPlayer.style.top) + SPEED + "px";
        }
    }

    this.setInterval(test, (1000/60));
}
