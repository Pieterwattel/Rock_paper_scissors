//getting the computer answer
function getComputerChoice() {
    //let the math.random operator make a number between 1 and 3.
    let num = Math.floor(Math.random()*3)
    //transform the number to a string answer
    if (num == 0) {
        return "rock"
    } else if (num == 1) {
        return "paper"
    } else if (num == 2) {
        return "scissors"
    }
}

//start of the score
let humanScore = 0
let computerScore = 0

//function to increment the human score, every time it is run
function incHumanScore() {
    ++humanScore
    return humanScore
}
//function to increment the computer score, every time it is run
function incComputerScore() {
    ++computerScore
    return computerScore
}


let playRound = function (humanChoice, computerChoice, incHumanScore, incComputerScore){
    let humanAnswer = humanChoice.toLowerCase();
    let computerAnswer = computerChoice();
    
    if (computerAnswer == "rock" && humanAnswer == "scissors") {
        console.log("you chose " + humanAnswer + ", and the computer chose " + computerAnswer + " and won. 1 point for the computer")
        incComputerScore()
        
    } else if (computerAnswer == "paper" && humanAnswer == "rock") {
        console.log("you chose " + humanAnswer + ", and the computer chose " + computerAnswer + " and won. 1 point for the computer")
        incComputerScore()
        
    } else if (computerAnswer == "scissors" && humanAnswer == "paper") {
        console.log("you chose " + humanAnswer + ", and the computer chose " + computerAnswer + " and won. 1 point for the computer")
        incComputerScore()
        
    }

    else if (humanAnswer == "rock" && computerAnswer == "scissors") {
        console.log("you chose " + humanAnswer + ", and the computer chose " + computerAnswer + " and lost. 1 point for you")
        incHumanScore()
      
    } else if (humanAnswer == "paper" && computerAnswer == "rock") {
        console.log("you chose " + humanAnswer + ", and the computer chose " + computerAnswer + " and lost. 1 point for you")
        incHumanScore()
        
    } else if (humanAnswer == "scissors" && computerAnswer == "paper") {
        console.log("you chose " + humanAnswer + ", and the computer chose " + computerAnswer + " and lost. 1 point for you")
        incHumanScore()
        

    } else if (humanAnswer == "rock" && computerAnswer == "rock") {
        console.log("you both chose " + computerAnswer + ". no points are awarded")
        
    } else if (humanAnswer == "paper" && computerAnswer == "paper") {
        console.log("you both chose " + computerAnswer + ". no points are awarded")
        
    } else if (humanAnswer == "scissors" && computerAnswer == "scissors") {
        console.log("you both chose " + computerAnswer + ". no points are awarded")
        
    } else if (humanAnswer == "null") {
        endLoop = true
    } else if ("") {
        console.log ("choice is invalid")
        
    }
    scoreLog();
}

function scoreLog() {
    console.log("current score: you have " + humanScore + " points , and the computer has " + computerScore + " points.")
    if (computerScore == 3){
        console.log("the computer won")
        image.src = "./files/sadDuck.gif"
        buttons.forEach((item) => {
            item.removeEventListener("click", playRound())
        })

    } else if (humanScore == 3){
        console.log("you won! congratzz.")
        image.src = "./files/dancingDuck.gif"
        buttons.forEach((item) => {
            item.removeEventListener("click", playRound())
        })

    }
}

let resetGame = function() {
    computerScore = 0
    humanScore = 0
    image.src = "./files/happyDuck2.jpg"
    console.log("game reset")
    buttons.forEach((item) => {
        item.addEventListener("click", () => playRound(item.textContent, getComputerChoice, incHumanScore, incComputerScore))
    })
}

//here all DOM items are created and appended

let body = document.querySelector("body")

let btnDiv = document.createElement("div")

let btn1 = document.createElement("button")
let btn2 = document.createElement("button")
let btn3 = document.createElement("button")
let btnReset = document.createElement("button")

btn1.textContent = "Rock"
btn2.textContent = "Paper"
btn3.textContent = "Scissors"
btnReset.textContent = "reset"

body.appendChild(btnDiv)

btnDiv.appendChild(btn1)
btnDiv.appendChild(btn2)
btnDiv.appendChild(btn3)
body.appendChild(btnReset)

let buttons = btnDiv.childNodes

console.log(buttons)

buttons.forEach((item) => {
    item.classList.add("gold")
    item.addEventListener("click", () => playRound(item.textContent, getComputerChoice, incHumanScore, incComputerScore))
})

btnReset.addEventListener("click", resetGame)

let image = document.querySelector("img")