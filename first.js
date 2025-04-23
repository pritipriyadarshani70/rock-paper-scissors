let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choic");
const msg = document.querySelector("#msg")

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice =( ) => {
    const options =["rock" , "paper" , "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    msg.innerText="Game Was Draw.Play Again";
    msg.style.backgroundColor ="#081b31";

}

const showWiner =(userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText =`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText=`You Lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor ="red";
    }
}

const playGame =(userChoice) =>{
    console.log("user choice =",userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice==="rock"){
           userWin= compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
             userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }

        showWiner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choic) => {
    console.log(choic);
    choic.addEventListener("click", () =>{
        const userChoice=choic.getAttribute("id")
        playGame(userChoice);
        
    });
});