let getComputerChoice = () => {
    let randomComputerChoice = Math.floor(Math.random() * 3);
    
    if(randomComputerChoice === 0)
        return "rock";
    if(randomComputerChoice === 1)
        return "paper";
    if(randomComputerChoice === 2)
        return "scissor";
}

console.log(getComputerChoice());

let getHumanChoice = () => {
    let userInpput = prompt(`Please provide your choice. (rock, paper, scissor)`);

    while(userInpput !== "rock" && userInpput !== "paper" && userInpput !== "scissor")
    {
        userInpput = prompt(`Please provide correct choice. (rock, paper, scissor)`);
    }

    return userInpput;
}

console.log(getHumanChoice());