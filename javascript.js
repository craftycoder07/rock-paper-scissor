const getComputerChoice = () => {
    let randomComputerChoice = Math.floor(Math.random() * 3);

    if (randomComputerChoice === 0)
        return "rock";
    if (randomComputerChoice === 1)
        return "paper";
    if (randomComputerChoice === 2)
        return "scissor";
}

const getHumanChoice = () => {
    let userInput = prompt(`Please provide your choice. (rock, paper, scissor)`).toLowerCase();

    while (userInput !== "rock" && userInput !== "paper" && userInput !== "scissor") {
        userInput = prompt(`Please provide correct choice. (rock, paper, scissor)`).toLowerCase();
    }

    return userInput;
}

const playRound = (humanChoice, computerChoice) => {

    if (humanChoice === computerChoice) {
        updateCurrentRoundResult(`It's a draw! Both chose same option.`);
        return;
    }

    if (humanChoice === `rock`) {
        if (computerChoice === `paper`) {
            updateCurrentRoundResult(`You lose! Paper beats Rock.`);
            updateScore(`computer`);
        }
        else {
            updateCurrentRoundResult(`You win! Rock beats Scissor.`);
            updateScore(`user`);
        }
    }
    else if (humanChoice === `paper`) {
        if (computerChoice === `scissor`) {
            updateCurrentRoundResult(`You lose! Scissor beats Paper.`);
            updateScore(`computer`);
        }
        else {
            updateCurrentRoundResult(`You win! Paper beats Rock.`);
            updateScore(`user`);
        }
    }
    else {
        if (computerChoice === `rock`) {
            updateCurrentRoundResult(`You lose! Rock beats Scissor.`);
            updateScore(`computer`);
        }
        else {
            updateCurrentRoundResult(`You win! Scissor beats Paper.`);
            updateScore(`user`);
        }
    }

    checkForGameWinner();
}

//Event bubbling up
const buttons = document.querySelector('#buttons');

buttons.addEventListener('click', (event) => {
    let target = event.target;

    const humanSelection = target.id;
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

});

const resetButton = document.querySelector("#reset");

resetButton.addEventListener('click', () => {
    location.reload();
});

const updateCurrentRoundResult = (result) => {
    const currentRoundResult = document.querySelector("#current-round-result");
    currentRoundResult.textContent = result;
}

const updateScore = (result) => {
    switch (result) {
        case `user`:
            const userScore = document.querySelector("#user-score");
            userScore.textContent = Number(userScore.textContent) + 1;
            break;

        case `computer`:
            const computerScore = document.querySelector("#computer-score");
            computerScore.textContent = Number(computerScore.textContent) + 1;
            break;
    }
}

const checkForGameWinner = () => {
    const gameResult = document.querySelector("#game-result");
    let score = document.querySelector("#user-score");

    if (Number(score.textContent) === 5) {
        gameResult.textContent = `Congratulations! You won the game.`;
        setButtonVisibilityForFinishedGame();
    }
    else {
        score = document.querySelector("#computer-score");
        if (Number(score.textContent) === 5) {
            gameResult.textContent = `Sorry! You lost the game.`;
            setButtonVisibilityForFinishedGame();
        }
    }
}

const setButtonVisibilityForFinishedGame = () => {
    let button = document.querySelector("#reset");
    button.removeAttribute("disabled");

    button = document.querySelector("#rock");
    button.setAttribute("disabled", "disabled");

    button = document.querySelector("#paper");
    button.setAttribute("disabled", "disabled");

    button = document.querySelector("#scissor");
    button.setAttribute("disabled", "disabled");
}