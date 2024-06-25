const hands = ['rock','paper','scissors'];

function getHand() {
    return hands[parseInt(Math.random()*10) % 3];
}

const player1 = {
    name: 'Player 1',
    getHand: getHand
};

const player2 = {
    name: 'Player 2',
    getHand: getHand
};

function playRound(player1, player2) {
    const hand1 = player1.getHand();
    const hand2 = player2.getHand();

    document.getElementById('roundNumber').textContent = `--- Round ${round} ---`;
    document.getElementById('roundOutcome').textContent = `${player1.name} plays ${player1.choice} vs ${player2.name} plays ${player2.choice}`;

    if (hand1 === hand2) {
        document.getElementById('roundOutcome').textContent += " It's a tie!";
    } else if (
        (hand1 === 'rock' && hand2 === 'scissors') ||
        (hand1 === 'scissors' && hand2 === 'paper') ||
        (hand1 === 'paper' && hand2 === 'rock')
    ) {
        document.getElementById('roundOutcome').textContent += ` ${player1.name} wins!`;
        player1.score++;
    } else {
        document.getElementById('roundOutcome').textContent += ` ${player2.name} wins!`;
        player2.score++;
    }
}

    document.getElementById('score1').textContent = player1.score;
    document.getElementById('score2').textContent = player2.score;

const playGame = (player1 ,player2 , playUntil) => {
    let score1 = 0, score2 = 0, round = 1;
    while (score1 < playUntil && score2 < playUntil) {
        console.log(`--- Round ${round++} ---`);
        const winner = playRound(player1, player2);
        if (winner) {
            winner === player1 ? score1++ : score2++;
        }
        console.log('--- Game Over ---');
        if (score1 === playUntil) {
            console.log(`${player1.name} wins the game!`);
            return player1;
        } else {
            console.log(`${player2.name} wins the game!`);
            return player2;
        }
    }
}


function playTournament(player1, player2, player3, player4, playUntil) {
    const winner1 = playGame(player1, player2, playUntil);
    const winner2 = playGame(player3, player4, playUntil);
    const tournamentWinner = playGame(winner1, winner2, playUntil);

    console.log(`${tournamentWinner.name} is the world champion`);
}

const player3 = { 
                name: "Player 3", 
                getHand: getHand
};
const player4 = { 
                name: "Player 4",
                getHand: getHand
};

playTournament(player1, player2, player3, player4, playUntil);

document.getElementById('startGame').addEventListener('click', startGame);
document.getElementById('playRound').addEventListener('click', playRound);

let round = 1;
const playUntil = 3;

function startGame() {
    document.getElementById('startGame').disabled = true;
    document.getElementById('playRound').disabled = false;
    document.getElementById('roundNumber').textContent = `--- Round ${round} ---`;
    document.getElementById('roundOutcome').textContent = '';
}

function disableButtons() {
    document.getElementById('startGame').disabled = true;
    document.getElementById('playRound').disabled = true;
}