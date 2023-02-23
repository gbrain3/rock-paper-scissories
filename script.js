let selection = ["Rock", "Paper", "Scissors"];

let computerSelection = selection[Math.floor(Math.random()*selection.length)];
console.log(computerSelection)

let playerSelection = selection[Math.floor(Math.random()*selection.length)];
console.log(playerSelection)

function rockPaperScissors(computerSelection,playerSelection) {
    if (computerSelection == playerSelection) {
        return "Tie. Play Again!";
    } else if (computerSelection == "Rock" & playerSelection == "Paper") {
        return "You win! Paper beats Rock";
    } else if (computerSelection == "Paper" & playerSelection == "Scissors") {
        return "You win! Scissors beats Paper";
    } else if (computerSelection == "Scissors" & playerSelection == "Rock") {
        return "You win! Rock beats Paper";
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}
console.log(rockPaperScissors(computerSelection,playerSelection))