const playerText = document.querySelector('#playerText');
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#restulText");
const choiceBtns = document.querySelectorAll(".choiceBtn");
let player;
let computer;
let result;

choiceBtns.forEach(button =>  button.addEventListener("click", () =>{

    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner()
}));

function computerTurn(){
    const randNumber = Math.floor(Math.random() * 3) + 1;

    switch(randNumber){
        case 1:
        computer = "ROCK";
        break;
        case 2:
        computer = "PAPER";
        break;
        case 3:
            computer = "SCISSORS";
            break;
    }
}
function checkWinner(){
    if(player == computer){
        return "Draw!";
    }
    else if(computer == "ROCK"){
        if(player == "PAPER"){
            return "You Win!";
        }else
        return "You Lose!";
    }
    else if(computer == "PAPER"){
        if (player == "SCISSORS"){
            return "You Win!";
        }else
        return "You Lose!";
    }
    else if(computer == "SCISSORS"){
        if(player == "ROCK"){
            return "You Win!";
    }else
    return "You Lose!";
}
}
