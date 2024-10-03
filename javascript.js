let humanScore = 0;
let computerScore = 0;

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
        return;
    }

    if (humanChoice === `rock`) {
        if (computerChoice === `paper`) {
            console.log(`You lose! Paper beats Rock.`);
            computerScore++;
            return;
        }
        else {
            console.log(`You win! Rock beats Scissor.`);
            humanScore++;
            return;
        }
    }
    else if (humanChoice === `paper`) {
        if (computerChoice === `scissor`) {
            console.log(`You lose! Scissor beats Paper.`);
            computerScore++;
            return;
        }
        else {
            console.log(`You win! Paper beats Rock.`);
            humanScore++;
            return;
        }
    }
    else {
        if (computerChoice === `rock`) {
            console.log(`You lose! Rock beats Scissor.`);
            computerScore++;
            return;
        }
        else {
            console.log(`You win! Scissor beats Paper.`);
            humanScore++;
            return;
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
