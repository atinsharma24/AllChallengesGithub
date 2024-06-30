const gameArea = document.getElementById('gameArea');
const scoreBoard = document.getElementById('score');
let score = 0;
let gameDuration = 30;
let gameStarted = false;

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = Math.random() * (gameArea.clientWidth - 50) + 'px';
    balloon.style.animationDuration = Math.random() * 3 + 3 + 's';
    gameArea.appendChild(balloon);

    balloon.addEventListener('click', () => {
        score++;
        scoreBoard.textContent = score;
        gameArea.removeChild(balloon);
    });

    setTimeout(() => {
        if (gameArea.contains(balloon)) {
            gameArea.removeChild(balloon);
        }
    }, parseFloat(balloon.style.animationDuration) * 1000);
}

function startGame() {
    gameStarted = true;
    score = 0;
    scoreBoard.textContent = score;

    const balloonInterval = setInterval(createBalloon, 1000);

    setTimeout(() => {
        clearInterval(balloonInterval);
        gameStarted = false;
        alert(`Game Over! Your score is ${score}`);
    }, gameDuration * 1000);
}

startGame();
