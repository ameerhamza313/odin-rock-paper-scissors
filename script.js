// Function to get computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Function to play a single round
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = determineWinner(playerSelection, computerSelection);

    document.getElementById('round-result').textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. `;
    document.getElementById('winner-announcement').textContent = result.message;
    document.getElementById('winner-announcement').className = result.className;
    document.getElementById('tie-announcement').textContent = result.tieMessage;
}

const wins = {rock: 'scissors', paper: 'rock', scissors: 'paper' };

function determineWinner(player, computer) {
    return player === computer
        ? { message: '', className: '', tieMessage: "It's a tie!" }
        : wins[player] === computer
            ? { message: 'You win!', className: 'user-win', tieMessage: '' }
            : { message: 'Computer wins!', className: 'computer-win', tieMessage: '' };
}

// Add event listeners to the buttons
document.querySelectorAll('.rps-button').forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id);
    });
});