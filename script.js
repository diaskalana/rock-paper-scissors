const body = document.querySelector('body')
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const reset = document.getElementById('reset')
const gameData = document.querySelector('.game-data')
const computerSelectionText = document.querySelector('.computer-selection')
const playerSelectionText = document.querySelector('.player-choice')
const message = document.querySelector('.message')
const playerScoreText = document.querySelector('.player-score')
const computerScoreText = document.querySelector('.computer-score')
const winner = document.querySelector('.winner')
const year = document.querySelector('.year')

year.textContent = new Date().getFullYear();

winner.style.display = 'none';
gameData.style.display = 'none';

let computerScore = 0;
let playerScore = 0;

rock.addEventListener('click', () => {
    playerSelectionText.textContent = `Player selection: ${rock.innerText}`
    playRound('rock', getComputerChoice())
})

paper.addEventListener('click', () => {
    playerSelectionText.textContent = `Player selection: ${paper.innerText}`
    playRound('paper', getComputerChoice())
})
scissors.addEventListener('click', () => {
    playerSelectionText.textContent = `Player selection: ${scissors.innerText}`
    playRound('scissors', getComputerChoice())
})
reset.addEventListener('click', () => {
    window.location.reload();
})

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    message.style.display = 'none';
    gameData.style.display = 'block';
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
    } else if (playerSelection === computerSelection) {
        // Do nothing
    } else {
        computerScore++;
    }
    playerScoreText.textContent = `Player score: ${playerScore}`
    computerScoreText.textContent = `Computer score: ${computerScore}`

    if (computerSelection === "rock") {
        computerSelectionText.textContent = "Computer selection: ✊"
    } else if (computerSelection === "paper") {
        computerSelectionText.textContent = "Computer selection: ✋"
    } else {
        computerSelectionText.textContent = "Computer selection: ✌️"
    }

    if (computerScore === 5) {
        winner.style.display = 'block';
        winner.textContent = 'Computer Wins. You loose :('
        console.log("Computer Wins!");
        gameOver();
        setSadFace();


    } else if (playerScore === 5) {
        winner.style.display = 'block';
        winner.textContent = "You're the Winner!"
        console.log("Player Wins!");
        gameOver();
        Draw();


    }
}

function gameOver() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}

function setSadFace() {
    body.style.backgroundImage = "url('images/sad.jpg')";
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
    body.style.backgroundRepeat = 'no-repeat';
}


