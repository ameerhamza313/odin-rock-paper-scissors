let humanScore = 0;
let computerScore = 0;
let tieCount = 0;

// Function to get computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to get human's choice
function getHumanChoice() {
    let humanChoice;
    do {
        humanChoice = prompt('Rock, paper, or scissors?');
        // Check if the user canceled the prompt
        if (humanChoice === null) {
            return null; // Return null if user cancels
        }
        humanChoice = humanChoice.toLowerCase();
        if (!['rock', 'paper', 'scissors'].includes(humanChoice)) {
            alert('Invalid choice. Please enter rock, paper, or scissors.');
        }
    } while (!['rock', 'paper', 'scissors'].includes(humanChoice));
    return humanChoice;
}

// Function to play a single round
function playRound() {
    const humanChoice = getHumanChoice();
    // Check if the user canceled the prompt
    if (humanChoice === null) {
        console.log("Game canceled by the user.");
        return false; // Indicate that the round was not played
    }
    
    const computerChoice = getComputerChoice();

    console.log(`Your choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        tieCount++;
        console.log("It's a tie!");
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
    }
    return true; // Indicate that the round was played
}

// Function to play the game for 5 rounds and declare the winner
function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(`\nRound ${i + 1}:`);
        const roundPlayed = playRound();
        // If the round was not played (user canceled), exit the game
        if (!roundPlayed) {
            console.log("Exiting the game.");
            return;
        }
    }

    console.log(`\nFinal Scores: You - ${humanScore}, Computer - ${computerScore}, Tie - ${tieCount}`);
    if (humanScore > computerScore) {
        console.log("You are the overall winner!");
    } else if (humanScore < computerScore) {
        console.log("Computer is the overall winner!");
    } else {
        console.log("It's an overall tie!");
    }
}

// Start the game
playGame();