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