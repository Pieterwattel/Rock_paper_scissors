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