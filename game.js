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

    return computeInt(1, 3);    
    
}

console.log(getComputerChoice());







