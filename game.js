/* 
    Requirements for this game:
        * The game is played between an user and computer
        * Computer needs to generate random hand (rock, paper, scissors)
            - generate a random integer number between 1-3.
            - Link these numbers to a hand and return:
                - 1 = rock
                - 2 = paper
                - 3 = scissors
        * User needs to type it's choice
        * compute the results
            - rock wins against scissors but losses against paper
            - paper wins against rock but losses against scissors
            - Scissors wins against paper but losses against rock
        * return who the winner is
    
    - things to consider -
        * users input should be accepted even if it's lowercase or upptercase
        * Each hand, should be linked to a number due to the random number generation 
*/

/* 
Returns a random integer between min and max
The parameters are both inclusive
*/
function computeInt(min, max)
{
    const min_num = Math.ceil(min);
    const max_num = Math.floor(max);
    return Math.floor(Math.random() * (max_num - min_num + 1) + min_num);
}


function getComputerChoice() 
{
    let hand = computeInt(1, 3);
    let rock = 1;
    let paper = 2;
    let scissors = 3;
    
    if (hand == rock) {
        return "rock";
    } else if ( hand == paper) {
        return "paper";
    } else if (hand == scissors) {
        return "scissors";
    } else {
        return "opps it shouldn't do this";
    }
}

function getHumanChoice()
{
    let answer = prompt("Rock, Paper or Scissors?");
    return answer;
}

/*
- rock wins against scissors but losses against paper
- paper wins against rock but losses against scissors
- Scissors wins against paper but losses against rock
*/

function playRound(humanChoice, computerChoice)
{
    let human = humanChoice;
    let computer = getComputerChoice();
    
    if (human === computer)
    {
        displayMessage(`it's a draw!! Score — You: ${humanScore}, Computer: ${computerScore}`);
    } 
    else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        humanScore++;
        displayMessage(`You win! ${human} beats ${computer}.  
            Score — You: ${humanScore}, Computer: ${computerScore}`)
        return humanScore;
    } 
    else {
        computerScore++;
        displayMessage(`You lose! ${computer} beats ${human}.  
            Score — You: ${humanScore}, Computer: ${computerScore}`);
        return computerScore;
    }
}


let humanScore = 0;
let computerScore = 0;

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener("click", () => {
    playRound("rock")
});

paper.addEventListener("click", () => {
    playRound("paper")
});

scissors.addEventListener("click", () => {
    playRound("scissors")
});

function displayMessage(message){
    const resultDiv = document.getElementById("results");
    resultDiv.textContent = message;
}

