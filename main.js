console.log("js: loaded")
// Define Constants

// Define Varables
let passcode = [];
let guessCode = [];

let guessCounter

let numGuesses;

// Elements

const guessScrnEl = document.querySelector(".guess-screen")

const gameBtnEls = document.querySelectorAll("button");
console.log(gameBtnEls)

const pEl = document.querySelector("p").innerHTML= "_ _ _ _"
console.log(pEl.innerHTML)

// Initialization
function init(){
    console.log("Game Started!")

    render()
    passcodeGen()
    
    // pEl.innerHTML("_ _ _ _")
}

// Clicking
for(let i = 0; i < gameBtnEls.length; i++){
gameBtnEls[i].onclick=function(){
    // console.log("it worked!")
    let btnNum = gameBtnEls[i].innerHTML
    
    }
}
// Start/Restart game

function runGame(){
     if(numGuesses > 5){
         gameOver()
     } else if(numGuesses <5 && numGuesses >= 1){
        alert(`Wrong passcode, try again`)
     } else {
         alert(`Please enter passcode`)
     }
}

function gameOver(){
    alert(`Maximum qttempts reached, game over!`)
    Location.reload()
}

// other functions


function passcodeGen() {
    passcode = Array.from({
        length: 4
    }, () => Math.floor(Math.random() * 10));
}
