function getComputerChoice(){
    const choices =["Rock","Paper","Scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

console.log(getComputerChoice());