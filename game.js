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
        return "Rock";
    } else if ( hand == paper) {
        return "Paper";
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
    let human = humanChoice.toLowerCase();
    let computer = computerChoice.toLowerCase();
    
    if (human === computer)
    {
        console.log("it's a draw!!");
    } 
    else if (
        (human === "rock" && computer === "scissors") ||
        (human === "paper" && computer === "rock") ||
        (human === "scissors" && computer === "paper")
    ) {
        console.log('You win ' + human + " beats " + computer + ".");
        humanScore++;
        console.log(`The score is human: ${humanScore} and computer: ${computerScore}`);
        return humanScore;
    } 
    else {

        console.log('You lose ' + computer + " beats " + human + ".");
        computerScore++;
        console.log(`The score is human: ${humanScore} and computer: ${computerScore}`);
        return computerScore;
    }
}

function playGame()
{
    let i = 1;
    while (i <= 5)
    {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        i++;
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();
