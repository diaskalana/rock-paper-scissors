

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = String(playerSelection).toLowerCase();
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You Win!";
    } else if (playerSelection === computerSelection) {
        return "It's a tie";
    } else {
        return "You Lose!";
    }
}

function game() {
    let computerScore = 0;
    let playerScore = 0;

    for (i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter your choice: ");
        let computerSelection = getComputerChoice();

        //   console.log("Computer: " + computerSelection);
        //   console.log("Player: " + playerSelection);

        let result = playRound(playerSelection, computerSelection);
        if (result === "You Win!") {
            console.log(result);
            playerScore++;
        } else if (result === "You Lose!") {
            console.log(result);
            computerScore++;
        } else {
            console.log(result);
            continue;
        }
    }

    if (computerScore > playerScore) {
        console.log("Computer Wins!");
    } else if (computerScore < playerScore) {
        console.log("Player Wins!");
    } else {
        console.log("It's a tie!");
    }
}
console.log("Type 'game()' to start...");
