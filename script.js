function getComputerChoice(){
    const choices =["Rock","Paper","Scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}
//console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors")
    {
        return "Your selection is invalid";
    }

    if(playerSelection === computerSelection)
    {
        return "It's a tie!"
    }
    else if(playerSelection == "rock" && computerSelection == "scissors"||
            playerSelection == "paper" && computerSelection == "rock"||
            playerSelection == "scissors" && computerSelection == "paper")
    {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } 
    else {return `You lose! ${computerSelection} beats ${playerSelection}`}       
}

//const playerSelection = 'Rock';
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));
