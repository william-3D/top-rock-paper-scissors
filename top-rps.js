const computerSelection = document.getElementById("computer-selection")
const playerSelection = document.getElementById("player-selection")
const roundResult = document.getElementById("result")

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);
    
    if (randomNumber === 1){
        computerSelection = "Rock";
    }
    if (randomNumber === 2){
        computerSelection = "Paper";
    }
    if (randomNumber === 3){
        computerSelection = "Scissors";
    }
}


function game() {
    function playRound (playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        
        if (playerSelection === computerSelection) {
            roundResult.textContent = "It's a tie!";
        }else if (playerSelection == "rock" && computerSelection == "scissors") {
            roundResult.textContent = "You win! Rock beats scissors!";
            return "Success!"
        }else if (playerSelection == "rock" && computerSelection == "paper") {
            roundResult.textContent = "You lose! Paper beats rock!";
            return "Epic fail"
        }else if (playerSelection == "paper" && computerSelection == "scissors") {
            roundResult.textContent = "You lose! Scissors beats paper!";
            return "Epic fail"
        }else if (playerSelection == "paper" && computerSelection == "rock") {
            roundResult.textContent = "You win! Paper beats rock!";
            return "Success!"
        }else if (playerSelection == "scissors" && computerSelection == "paper") {
            roundResult.textContent = "You win! Scissors beats paper!";
            return "Success!"
        }else if (playerSelection == "scissors" && computerSelection == "rock") {
            roundResult.textContent = "You lose! Rock beats scissors!";
            return "Epic fail"
    }
    }
    
    function playRound (playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        
        if (playerSelection === computerSelection) {
            roundResult.textContent = "It's a tie!";
        }else if (playerSelection == "rock" && computerSelection == "scissors") {
            roundResult.textContent = "You win! Rock beats scissors!";
            return "Success!"
        }else if (playerSelection == "rock" && computerSelection == "paper") {
            roundResult.textContent = "You lose! Paper beats rock!";
            return "Epic fail"
        }else if (playerSelection == "paper" && computerSelection == "scissors") {
            roundResult.textContent = "You lose! Scissors beats paper!";
            return "Epic fail"
        }else if (playerSelection == "paper" && computerSelection == "rock") {
            roundResult.textContent = "You win! Paper beats rock!";
            return "Success!"
        }else if (playerSelection == "scissors" && computerSelection == "paper") {
            roundResult.textContent = "You win! Scissors beats paper!";
            return "Success!"
        }else if (playerSelection == "scissors" && computerSelection == "rock") {
            roundResult.textContent = "You lose! Rock beats scissors!";
            return "Epic fail"
    }
    }
    function playRound (playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        
        if (playerSelection === computerSelection) {
            roundResult.textContent = "It's a tie!";
        }else if (playerSelection == "rock" && computerSelection == "scissors") {
            roundResult.textContent = "You win! Rock beats scissors!";
            return "Success!"
        }else if (playerSelection == "rock" && computerSelection == "paper") {
            roundResult.textContent = "You lose! Paper beats rock!";
            return "Epic fail"
        }else if (playerSelection == "paper" && computerSelection == "scissors") {
            roundResult.textContent = "You lose! Scissors beats paper!";
            return "Epic fail"
        }else if (playerSelection == "paper" && computerSelection == "rock") {
            roundResult.textContent = "You win! Paper beats rock!";
            return "Success!"
        }else if (playerSelection == "scissors" && computerSelection == "paper") {
            roundResult.textContent = "You win! Scissors beats paper!";
            return "Success!"
        }else if (playerSelection == "scissors" && computerSelection == "rock") {
            roundResult.textContent = "You lose! Rock beats scissors!";
            return "Epic fail"
    }
    }
    function playRound (playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        
        if (playerSelection === computerSelection) {
            roundResult.textContent = "It's a tie!";
        }else if (playerSelection == "rock" && computerSelection == "scissors") {
            roundResult.textContent = "You win! Rock beats scissors!";
            return "Success!"
        }else if (playerSelection == "rock" && computerSelection == "paper") {
            roundResult.textContent = "You lose! Paper beats rock!";
            return "Epic fail"
        }else if (playerSelection == "paper" && computerSelection == "scissors") {
            roundResult.textContent = "You lose! Scissors beats paper!";
            return "Epic fail"
        }else if (playerSelection == "paper" && computerSelection == "rock") {
            roundResult.textContent = "You win! Paper beats rock!";
            return "Success!"
        }else if (playerSelection == "scissors" && computerSelection == "paper") {
            roundResult.textContent = "You win! Scissors beats paper!";
            return "Success!"
        }else if (playerSelection == "scissors" && computerSelection == "rock") {
            roundResult.textContent = "You lose! Rock beats scissors!";
            return "Epic fail"
    }
    }
    function playRound (playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        
        if (playerSelection === computerSelection) {
            roundResult.textContent = "It's a tie!";
        }else if (playerSelection == "rock" && computerSelection == "scissors") {
            roundResult.textContent = "You win! Rock beats scissors!";
            return "Success!"
        }else if (playerSelection == "rock" && computerSelection == "paper") {
            roundResult.textContent = "You lose! Paper beats rock!";
            return "Epic fail"
        }else if (playerSelection == "paper" && computerSelection == "scissors") {
            roundResult.textContent = "You lose! Scissors beats paper!";
            return "Epic fail"
        }else if (playerSelection == "paper" && computerSelection == "rock") {
            roundResult.textContent = "You win! Paper beats rock!";
            return "Success!"
        }else if (playerSelection == "scissors" && computerSelection == "paper") {
            roundResult.textContent = "You win! Scissors beats paper!";
            return "Success!"
        }else if (playerSelection == "scissors" && computerSelection == "rock") {
            roundResult.textContent = "You lose! Rock beats scissors!";
            return "Epic fail"
    }
    }
    function playRound (playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        
        if (playerSelection === computerSelection) {
            roundResult.textContent = "It's a tie!";
        }else if (playerSelection == "rock" && computerSelection == "scissors") {
            roundResult.textContent = "You win! Rock beats scissors!";
            return "Success!"
        }else if (playerSelection == "rock" && computerSelection == "paper") {
            roundResult.textContent = "You lose! Paper beats rock!";
            return "Epic fail"
        }else if (playerSelection == "paper" && computerSelection == "scissors") {
            roundResult.textContent = "You lose! Scissors beats paper!";
            return "Epic fail"
        }else if (playerSelection == "paper" && computerSelection == "rock") {
            roundResult.textContent = "You win! Paper beats rock!";
            return "Success!"
        }else if (playerSelection == "scissors" && computerSelection == "paper") {
            roundResult.textContent = "You win! Scissors beats paper!";
            return "Success!"
        }else if (playerSelection == "scissors" && computerSelection == "rock") {
            roundResult.textContent = "You lose! Rock beats scissors!";
            return "Epic fail"
    }
    }

}