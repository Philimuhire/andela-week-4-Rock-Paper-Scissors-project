function getComputerChoice(){
    const choices =["Rock","Paper","Scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}
//console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){
    if(!playerSelection)
    {
        return "Your selection is invalid";
    }
    playerSelection = playerSelection.toLowerCase();

    if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors")
    {
        return "Your selection is invalid";
    }

    if(playerSelection === computerSelection)
    {
        return "It's a tie!"
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"||
            playerSelection === "paper" && computerSelection === "rock"||
            playerSelection === "scissors" && computerSelection === "paper")
    {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } 
    else {return `You lose! ${computerSelection} beats ${playerSelection}`}       
}

//const playerSelection = 'Rock';
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));


function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let turn = 1; turn <= 5; turn ++){
        const playerSelection = prompt("Enter your choice:");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(`Turn ${turn}: ${result}`);

        if (result.includes('win')){
            playerScore++;
        } else if(result.includes('lose')){
            computerScore++;
        }
    }
    console.log(`Player:${playerScore} , Computer:${computerScore}`)

    if(playerScore > computerScore) {console.log('You win the game');}
    else if(playerScore < computerScore) {console.log('Sorry! You lose the game');}
    else {console.log('The game is draw');}
}

game();
