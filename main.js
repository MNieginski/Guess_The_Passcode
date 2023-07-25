console.log("js: loaded")
// Define Constants

/////////////////////////////////////////// Define Varables
let passcode = [];

let guessCode = [];
let startArray= ["_", "_", "_", "_" ]

let guessCounter

let numGuesses;

let crntSpot = 0

let btnNum

// Elements

const guessScrnEl = document.querySelector(".guess-screen")

const gameBtnEls = document.querySelector(".btn-container");
//console.log(gameBtnEls)

let pEl = document.querySelector("p").innerHTML = startArray


// console.log(pEl.innerHTML)

// Initialization
function init(){
    console.log("Game Started!")

    passcodeGen()
    passcodeEnter()
    
}
init()

/////////////////////// Clicking

function passcodeEnter(){
    for(let i = 0; i < gameBtnEls.length; i++){
       gameBtnEls[i].onclick=function(){
           //console.log("it worked!")
           btnNum = gameBtnEls[i].innerHTML
          // console.log(btnNum)

        } 
       } 
}

gameBtnEls.addEventListener('click', (e) => {
    // Check what we got:
    // console.log(e.target.innerText)
    guessCode.push(e.target.innerText)
    console.log("Here is players guess: ", guessCode)
    //let guessCodeStr = guessCode.toString()
    startArray.splice(crntSpot, 1)
    startArray.splice(crntSpot, 0, e.target.innerText)
    document.querySelector("p").innerHTML = startArray
    crntSpot = crntSpot + 1
    if (crntSpot >= 4){
        startArray.pop(e.target.innerText)
    }
    // console.log(crntSpot)
    // console.log(startArray)
})


///////////////////////////////////////////// Start/Restart game

function runGame(){
    if(numGuesses > 5){
         gameOver()
     } else if(numGuesses <=5 && numGuesses >= 1){
        alert(`Wrong passcode, try again`)
     } else {
         alert(`Please enter passcode`)
     }
     
}

function gameOver(){
    alert(`Maximum qttempts reached, game over!`)
    Location.reload()
}

//runGame()

/////////////////////////////////////////// other functions

function passcodeGen() {
    passcode = Array.from({
        length: 4
    }, () => Math.floor(Math.random() * 10))
    //console.log(passcode)
    let passcodeStr = passcode.toString()
    //console.log(passcodeStr)
}



function compareCode(){
    if(guessCodeStr === passcodeStr){
        alert(`Congrats, you won!`)
        Location.reload()
    }
}
