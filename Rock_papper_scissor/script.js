/*
Rock Paper Scissors 🚀🔥
*/
const totalScore={computerScore:0,playerScore:0};
function getComputerChoice() {
  let arr=['Scissors', 'Rock','Paper'];
  let choice=Math.floor(Math.random()*3);
  return arr[choice];

}
// **getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  let score;
  // All situations where human draws, set `score` to 0
  if (playerChoice === computerChoice) {
    score = 0;
  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
    score = 1;

  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    score = 1;

  } else if (playerChoice === "Scissors" && computerChoice ==="Paper") {
    score = 1;

  // Otherwise human loses (aka set score to -1)
  } else {
    score = -1;
  }
   // return score
   return score;
}
function getComputerScore(playerChoice, computerChoice) {
    // return the result of score based on if you won, drew, or lost
    let score;
    // All situations where human draws, set `score` to 0
    if (playerChoice === computerChoice) {
      score = 0;
    } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
      score = -1;
  
    } else if (playerChoice === "Paper" && computerChoice === "Rock") {
      score = -1;
  
    } else if (playerChoice === "Scissors" && computerChoice ==="Paper") {
      score = -1;
  
    // Otherwise human loses (aka set score to -1)
    } else {
      score = 1;
    }
  // return score
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  const result=document.getElementById("result");
  const hands=document.getElementById("hands");
  const playerScore=document.getElementById("player-score");
  switch(score)
  {
    case -1:result.innerText="YOU LOSE";
      break;
    case 1:result.innerText="YOU WON";
      break;
    case 0:result.innerText="ITS A TIE";
      break;
  }
  hands.innerText=`👱 ${playerChoice} v/s ${computerChoice} 🤖`;
  playerScore.innerText =`( ${totalScore['playerScore']} ) v/s (${totalScore['computerScore']})`;
}
// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const computerChoice=getComputerChoice();
  const score=getResult(playerChoice,computerChoice);
  const compScore=getComputerScore(playerChoice,computerChoice);
  totalScore['playerScore']+=score;
  totalScore['computerScore']+=compScore;
  showResult(score,playerChoice,computerChoice);
}


// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsBtn=document.querySelectorAll('.rpsButton');
  // onclick event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
  // 1. loop through the buttons using a forEach loop
  rpsBtn.forEach(btn=>{
  // 2. A 'click' event listener to each button
    btn.onclick=()=>onClickRPS(btn.value);
  // 3. Calls the onClickRPS function every time someone click
  }
  )
  // A click listener to the end game button that runs the endGame() function on click
    let endGameButton = document.getElementById('endGameButton');
    endGameButton.onclick = () => endGame();
    let restartButton = document.getElementById('restartGameButton');
    restartButton.onclick = () => restartGame();
}
// ** endGame function clears all the text on the DOM **
function endGame() {
  finalScore();
  totalScore['playerScore']=0;
  totalScore['computerScore']=0;
  let result=document.getElementById("result");
  let playerScore = document.getElementById('player-score');
  let hands = document.getElementById('hands');
  playerScore.innerText = '';
  hands.innerText = '';
  result.innerText = '';
}
function restartGame()
{
  totalScore['playerScore']=0;
  totalScore['computerScore']=0;
  let result=document.getElementById("result");
  let playerScore = document.getElementById('player-score');
  let hands = document.getElementById('hands');
  playerScore.innerText = '';
  hands.innerText = '';
  result.innerText = '';
  let final=document.getElementById("final-score");
    final.innerText='';
}
//shows finally who won
function finalScore()
{
  let final=document.getElementById("final-score");
  if(totalScore['playerScore']>totalScore['computerScore'])
    final.innerText="Finally you WON!!";
  else if(totalScore['playerScore']<totalScore['computerScore'])
    final.innerText="You LOOSE!! Better luck next time";
  else
    final.innerText="Chill its a tie!!";

}
playGame();