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

// Elements

const guessScrnEl = document.querySelector(".guess-screen")

const gameBtnEls = document.querySelector(".btn-container");
const enterEl = document.querySelector("#enter");
const deleteEl = document.querySelector("#delete")


let pEl = document.querySelector("p").innerHTML = startArray

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

///////////////////////////////////////////// Start/Restart game

// function runGame(){
//     if(numGuesses > 5){
//          gameOver()
//      } else if(numGuesses <=5 && numGuesses >= 1){
//         alert(`Wrong passcode, try again`)
//      } else {
//          alert(`Please enter passcode`)
//      }
     
// }

// function gameOver(){
//     alert(`Maximum qttempts reached, game over!`)
//     Location.reload()
// }

/////////////////////////////////////////// other functions

function passcodeGen() {
    passcode = Array.from({
        length: 4
    }, () => Math.floor(Math.random() * 10))
    console.log(passcode)
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

