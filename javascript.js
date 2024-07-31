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

//a prompt asking: 
//"rock, paper or scissors."
function getHumanChoice(){
    let result1 = prompt("rock paper or scissors?")
    let result = result1.toLowerCase();
// if the result is something other than those 3, this will return undefined
    if (result == "rock" || result == "paper" || result == "scissors") {
        return result
    } else {  
        return "invalid"
    }
}
