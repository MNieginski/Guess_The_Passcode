console.log("js: loaded")
// Define Constants

// Define Varables
let passcode = [];

let numGuesses;

// Elements

const guessScrnEl = document.querySelector(".guess-screen")


// Initialization
function init(){
    console.log("Game Started!")

    interval = 5000

    render()
}
// Clicking
document.getElementById

// Start/Restart game

function runGame(){
     if(numGuesses > 5){
         gameOver()
     }
}

function gameOver(){
    alert(`Maximum qttempts reached, game over!`)
    Location.reload()
}