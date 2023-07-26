////////////////////////////////////////// Constants

const INTERVAL = 1000; //one seccond

////////////////////////////////////////// Define Varables
let passcode = [];
let passcodeStr

let guessCode = [];
let startArray = ["_", "_", "_", "_"]
let finalArray

let guessCounter

let numGuesses;

let crntSpot = 0

let btnNum

let timerValue = 60; // timer starting value (60 seconds)
let timer

// Elements

const guessScrnEl = document.querySelector(".guess-screen")

const gameBtnEls = document.querySelector(".btn-container");
const enterEl = document.querySelector("#enter");
const deleteEl = document.querySelector("#delete")


let pEl = document.querySelector("p").innerHTML = startArray

const timerDisplayEl = document.querySelector("#timerDisplay");
const startBtnEl = document.querySelector("#start");

// Initialization
function init(){
    console.log("Game Started!")

    passcodeGen()
    passcodeEnter()
    
    
}
init()

///////////////////////////////////////////////////////// Clicking

function passcodeEnter(){
    for(let i = 0; i < gameBtnEls.length; i++){
       gameBtnEls[i].onclick=function(){
           btnNum = gameBtnEls[i].innerHTML
        }
       } 
}

gameBtnEls.addEventListener('click', (e) => {
    guessCode.push(e.target.innerText)

    startArray.splice(crntSpot, 1)
    startArray.splice(crntSpot, 0, e.target.innerText)

    document.querySelector("p").innerHTML = startArray
    crntSpot = crntSpot + 1
    
    if (crntSpot >= 4){
        //startArray.pop(e.target.innerText)
    }
    
})

enterEl.addEventListener('click', (e) => {
    compareCode()
})

deleteEl.addEventListener('click', (e) => {
    deleteDigit()
})

startBtnEl.addEventListener("click", handleBtnClick);

///////////////////////////////////////////// Start/Restart game

function render() {
   timerDisplayEl.textContent = timerValue;
   // changes the number on the page, to match the new timerValue value as it updates
  }

function gameOver(){
    alert(`You ran out of time!`)
    location.reload()
}

///////////////////////////////////////////// Other functions

function passcodeGen() {
    passcode = Array.from({
        length: 4
    }, () => Math.floor(Math.random() * 10))
    console.log(passcode)
}

function handleBtnClick() {
    startBtnEl.setAttribute("disabled", "true");
    timer = setInterval(decrementCount, INTERVAL);
  }

  function decrementCount() {
    if (timerValue > 0) {
      timerValue--;
      render(); 
    } else {
        gameOver() // calls for an end game
        resetClock() // without this, game never resets
    }
  }

  function resetClock() {
    clearInterval(timer)
  }

function deleteDigit(){

}

function compareCode(){
    if(startArray.toString() === passcode.toString()){
        alert(`Congrats, you won!`)
        location.reload()        
    } else {
        startArray = ["_", "_", "_", "_"]
    }
}
