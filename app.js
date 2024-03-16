let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompchoice = () =>{
//rock paper scissors
   const options = ["rock", "paper", "scissors"];//-----------Generate computer choice;
   let randomIdx = Math.floor(Math.random()*3);

   return options[randomIdx];
}

const drawGame = ()=>{
    // console.log("Game Was Draw..");

    msg.innerText = "Game Was Draw. Play again.";
    msg.style.backgroundColor = "#081b31"
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        // console.log("You Win");
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        // console.log("You Lose");
        compScore++;
        compScorepara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
};

const playGame = (userChoice)=>{
    // console.log("user choice : ",userChoice)

    const compChoice = genCompchoice();    
    
    // generate computer choice
    // console.log("comp choice : ", compChoice);


    if(userChoice === compChoice){           //Draw Game
        drawGame();
    }
    else{

        let userWin = true;                                      //--------------------
        if(userChoice === "rock"){     
            //scissors, paper 
            userWin = compChoice === "paper" ? false : true;     //
        }
        else if(userChoice ==="paper"){                          //                       
            //rock , scissors
            userWin = compChoice === "scissors" ? false : true;//Logic Winner comp or user 
        }
        else{
            //scissors user 
            userWin = compChoice === "rock" ? false : true;     //--------------------
        }

        showWinner(userWin , userChoice, compChoice);           
    }
}

choices.forEach((choice)=>{

    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");   //get id of choice
        // console.log("choice was clicked",userChoice);//----------------Choices user;

        playGame(userChoice);
    })
})