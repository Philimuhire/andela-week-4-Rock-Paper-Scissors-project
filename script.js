// Defining getComputerChoice function

function getComputerChoice(){
    const choices =["rock","paper","scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);  //this is to enable computer generate a random choice
    return choices[randomChoice];
}
//console.log(getComputerChoice());

// Defining playRound function

function playRound(playerSelection, computerSelection){
    if(!playerSelection)
    {
        return "Your selection is invalid";
    }
    playerSelection = playerSelection.toLowerCase();  //Convert playerSelection to lowercase for allowing case-insensitive comparison

    if(playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors")  //Check if playerSelection is valid
    {
        return "Your selection is invalid";
    }

    //Codes to Determine the winner
    if(playerSelection === computerSelection)
    {
        return "It's a draw!";
    }
    else if(playerSelection === "rock" && computerSelection === "scissors"||
            playerSelection === "paper" && computerSelection === "rock"||
            playerSelection === "scissors" && computerSelection === "paper")
    {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } 
    else {return `You lose! ${computerSelection} beats ${playerSelection}`;}       
}

//const playerSelection = 'Rock';
//const computerSelection = getComputerChoice();
//console.log(playRound(playerSelection, computerSelection));

// Defining game function

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

game(); //Calling the game function
