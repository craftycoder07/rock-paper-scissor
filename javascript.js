let getComputerChoice = () => {
    let randomComputerChoice = Math.floor(Math.random() * 3);

    if (randomComputerChoice === 0)
        return "rock";
    if (randomComputerChoice === 1)
        return "paper";
    if (randomComputerChoice === 2)
        return "scissor";
}

//console.log(getComputerChoice());

let getHumanChoice = () => {
    let userInput = prompt(`Please provide your choice. (rock, paper, scissor)`).toLowerCase();

    while (userInput !== "rock" && userInput !== "paper" && userInput !== "scissor") {
        userInput = prompt(`Please provide correct choice. (rock, paper, scissor)`).toLowerCase();
    }

    return userInput;
}

//console.log(getHumanChoice());


let playRound = (humanChoice, computerChoice) => {

    if (humanChoice === computerChoice) {
        console.log(`It's a draw! Both chose same option.`);
        return `draw`;
    }

    if (humanChoice === `rock`) {
        if (computerChoice === `paper`) {
            console.log(`You lose! Paper beats Rock.`);
            return `computer`;
        }
        else {
            console.log(`You win! Rock beats Scissor.`);
            return `user`;
        }
    }
    else if (humanChoice === `paper`) {
        if (computerChoice === `scissor`) {
            console.log(`You lose! Scissor beats Paper.`);
            return `computer`;
        }
        else {
            console.log(`You win! Paper beats Rock.`);
            return `user`;
        }
    }
    else {
        if (computerChoice === `rock`) {
            console.log(`You lose! Rock beats Scissor.`);
            return `computer`;
        }
        else {
            console.log(`You win! Scissor beats Paper.`);
            return `user`;
        }
    }
}


let playGame = () => {
    let humanScore = 0;
    let computerScore = 0;
    let numberOfRounds = 0;

    while (numberOfRounds < 5) {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        let result = playRound(humanSelection, computerSelection, humanScore, computerScore);

        if (result === `user`)
            humanScore++;
        if (result === `computer`)
            computerScore++;

        numberOfRounds++;
    }

    if (humanScore === computerScore)
        console.log(`It's a draw. Nobody won.`);
    else if (humanScore > computerScore)
        console.log(`Congratulations on your win.`);
    else
        console.log(`You lost. Please try again.`);

}

playGame();
