
let userScore = 0;
let computerScore = 0;

game();

game();

game();

game();

game();

function getComputerChoice() {
    let choice = Math.random();
    if(choice < 0.3) {
        choice = "Rock";
    } else if(choice >= 0.3 && choice < 0.6) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}

function getUserChoice() {
    let userChoice = prompt("Move: ");
    return userChoice;
}

function playGame(userChoice, computerChoice) {
    
    let letter = userChoice[0].toUpperCase();
   
  if(letter === "R") {
    if(computerChoice === "Rock") {
        return `Tie! Both went Rock! Score: User: ${userScore} Computer: ${computerScore}`
    } else if(computerChoice === "Paper") {
        computerScore++;
        return `You lose! You went rock while computer went paper! Score: User: ${userScore} Computer: ${computerScore}`
    } else if(computerChoice === "Scissors") {
        userScore++;
        return `You win! you went rock while computer went scissors! Score: User: ${userScore} Computer: ${computerScore}`
    }
  } else if(letter === "P") {
    if(computerChoice === "Rock") {
        userScore++;
        return `you win! you went paper while computer went rock! Score: User: ${userScore} Computer: ${computerScore}`
    } else if(computerChoice === "Paper") {
        return `Tie! both went paper Score: User: ${userScore} Computer: ${computerScore}`
    } else if(computerChoice === "Scissors") {
        computerScore++;
        return `Lose! You went paper while comoputer went scissors Score: User: ${userScore} Computer: ${computerScore}`
    }
  } else if(letter === "S") {
    if(computerChoice === "Rock") {
        computerScore++;
        return "Lose! You went scissors while computer went rock!"
    } else if(computerChoice === "Paper") {
        userScore++;
        return "You win! you went scissors while computer went paper"
    } else if(computerChoice === "Scissors") {
        return "tie! both went scissors"
    }
  }
  
}


function game() {
    console.log(playGame(getUserChoice(), getComputerChoice()));
}



