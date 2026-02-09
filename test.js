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
            break;
        case "ArrowRight":
            rightPressed = true;
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
            break;
        case "ArrowRight":
            rightPressed = false;
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

const testPlayer = document.querySelector("#test");
const testRect = testPlayer.getBoundingClientRect();
const container = document.querySelector("#container")

document.body.addEventListener("keydown", keyDownFunction);
document.body.addEventListener("keyup", keyUpFunction);
container.addEventListener("focusout", testFunction);
let leftPressed = false;
let rightPressed = false;
let upPressed = false;
let downPressed = false;

let yOffset = container.getBoundingClientRect().top
let xOffset = container.getBoundingClientRect().left

testPlayer.style.left = 0;
testPlayer.style.top = 0;

window.onload = function() {
    function test () {
        // testPlayer.style.top = testPlayer.getBoundingClientRect().top-40 + SPEED + "px";
        if (leftPressed) {
            testPlayer.style.left = parseInt(testPlayer.style.left)-xOffset - SPEED + "px";
            console.log(testPlayer.style.left);
        }
        if (rightPressed) {
            testPlayer.style.left = parseInt(testPlayer.style.left)-xOffset + SPEED + "px";
            console.log(testPlayer.style.left);
        }
        if (upPressed) {
            testPlayer.style.top = parseInt(testPlayer.style.top)-yOffset - SPEED + "px";
        }
        if (downPressed) {
            testPlayer.style.top = parseInt(testPlayer.style.top)-yOffset + SPEED + "px";
        }
    }

    this.setInterval(test, (1000/60));
}
