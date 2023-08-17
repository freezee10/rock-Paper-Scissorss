
let userScore = 0;
let computerScore = 0;
let finished = false;

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



function playGame(userChoice, computerChoice) {
if(finished === true) {
    return;
} else {
    let letter = userChoice[0].toUpperCase();
    logic(letter, computerChoice);
  eventListenerComputer(computerChoice);
  console.log(result);
  console.log(computerChoice);
if(userScore === 5) {
    
   finished = true;
   
    let winnerMessage = `PLAYER Wins ${userScore} to ${computerScore}`;
    document.querySelector('.ggMessage').innerHTML = winnerMessage;
    document.querySelector('.again').classList.remove('invis');
  
    
} else if(computerScore === 5) {
   finished = true;
  
    let winnerMessage = `COMPUTER Wins ${computerScore} to ${userScore}`
    document.querySelector('.ggMessage').innerHTML = winnerMessage;
    document.querySelector('.again').classList.remove('invis');
  

}
}
}


function logic(letter,computerChoice) {
    if(letter === "R") {
        if(computerChoice === "Rock") {
           result =  `Tie! Both went Rock! Score: User: ${userScore} Computer: ${computerScore}`
        } else if(computerChoice === "Paper") {
            computerScore++;
            result = `You lose! You went rock while computer went paper! Score: User: ${userScore} Computer: ${computerScore}`
        } else if(computerChoice === "Scissors") {
            userScore++;
            result = `You win! you went rock while computer went scissors! Score: User: ${userScore} Computer: ${computerScore}`
        }
      } else if(letter === "P") {
        if(computerChoice === "Rock") {
            userScore++;
            result = `you win! you went paper while computer went rock! Score: User: ${userScore} Computer: ${computerScore}`
        } else if(computerChoice === "Paper") {
            result  =`Tie! both went paper Score: User: ${userScore} Computer: ${computerScore}`
        } else if(computerChoice === "Scissors") {
            computerScore++;
            result = `Lose! You went paper while comoputer went scissors Score: User: ${userScore} Computer: ${computerScore}`
        }
      } else if(letter === "S") {
        if(computerChoice === "Rock") {
            computerScore++;
            result = "Lose! You went scissors while computer went rock!"
        } else if(computerChoice === "Paper") {
            userScore++;
            result = "You win! you went scissors while computer went paper"
        } else if(computerChoice === "Scissors") {
            result = "tie! both went scissors"
        }
      }
}

eventListenerUser();
let soundEffect = document.querySelector('.sound');


function eventListenerUser() {
    document.querySelector('.rock-coo').addEventListener('click', () => {
        if(finished === true) {
            return;
        }else {
        soundEffect.play();
        playGame("Rock", getComputerChoice());
        document.querySelector('.playerScore').innerHTML = `Score: ${userScore}`;
        document.querySelector('.computerScore').innerHTML = `Score: ${computerScore}`;
        document.querySelector('.paper-coo').classList.remove('clicked');
        document.querySelector('.scissors-coo').classList.remove('clicked');
        document.querySelector('.rock-coo').classList.add('clicked');
        }
    })

    document.querySelector('.paper-coo').addEventListener('click', () => {
        if(finished === true) {
            return;
        } else {
        soundEffect.play();
        playGame("Paper", getComputerChoice());
        document.querySelector('.playerScore').innerHTML = `Score: ${userScore}`;
        document.querySelector('.computerScore').innerHTML = `Score: ${computerScore}`;
         document.querySelector('.rock-coo').classList.remove('clicked');
        document.querySelector('.scissors-coo').classList.remove('clicked');
        document.querySelector('.paper-coo').classList.add('clicked');
        }
    })

    document.querySelector('.scissors-coo').addEventListener('click', () => {
        if(finished === true) {
            return;
        } else {
        soundEffect.play();
        playGame("Scissors", getComputerChoice());
        document.querySelector('.playerScore').innerHTML = `Score: ${userScore}`;
        document.querySelector('.computerScore').innerHTML = `Score: ${computerScore}`;
        document.querySelector('.paper-coo').classList.remove('clicked');
        document.querySelector('.rock-coo').classList.remove('clicked');
        
        document.querySelector('.scissors-coo').classList.add('clicked');
        }
    })
}

function eventListenerComputer(choice) {
    document.querySelector('.Rock-comp').classList.remove('clicked');
    document.querySelector('.Paper-comp').classList.remove('clicked');
   document.querySelector('.Scissors-comp').classList.remove('clicked');
    document.querySelector(`.${choice}-comp`).classList.add('clicked');
}

document.querySelector('.again').addEventListener('click', ()=> {
    soundEffect.play();
    userScore = 0;
    computerScore = 0;
    finished = false;
    document.querySelector('.Rock-comp').classList.remove('clicked');
    document.querySelector('.Paper-comp').classList.remove('clicked');
   document.querySelector('.Scissors-comp').classList.remove('clicked')

    document.querySelector('.paper-coo').classList.remove('clicked');
    document.querySelector('.rock-coo').classList.remove('clicked');
    document.querySelector('.scissors-coo').classList.remove('clicked');

    document.querySelector('.playerScore').innerHTML = `Score: ${userScore}`;
    document.querySelector('.computerScore').innerHTML = `Score: ${computerScore}`;
    
    document.querySelector('.again').classList.add('invis');
    document.querySelector('.ggMessage').innerHTML = "";
})


