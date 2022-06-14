const botRandom = (botAns) => {
  let x = ["rock", "paper", "scissors"];
  let y = Math.floor(Math.random() * 3);
  botAns = x[y];

  return botAns;
};
let btnRock = document.querySelector(".rock");
let btnPaper = document.querySelector(".paper");
let btnScissors = document.querySelector(".scissors");
let score = document.querySelector(".counter");
const botChoice = document.querySelector(".bot-choice");
const winLose = document.querySelector(".win-lose");
const playerScore = document.querySelector(".player-score");
const botScore = document.querySelector(".bot-score");
let bot;
let player;
let playerCounter = 0;
let botCounter = 0;

btnRock.addEventListener("click", (e) => {
  e = "rock";
  play(e);
});
btnPaper.addEventListener("click", (e) => {
  e = "paper";
  play(e);
});
btnScissors.addEventListener("click", (e) => {
  e = "scissors";
  play(e);
});
const play = (player, bot) => {
  bot = botRandom();
  console.log(bot);
  switch (player) {
    case "rock":
      if (bot === "rock") {
      } else if (bot === "scissors") {
        playerCounter++;
      } else {
        botCounter++;
      }
      break;
    case "scissors":
      if (bot === "rock") {
        botCounter++;
      } else if (bot === "scissors") {
      } else {
        playerCounter++;
      }
      break;
    case "paper":
      if (bot === "rock") {
        playerCounter++;
      } else if (bot === "scissors") {
        botCounter++;
      } else {
      }
      break;
    default:
      console.log("enter rock, paper or scissors");
  }
  botChoice.textContent = `Bot chose: ${bot}`;
  botScore.textContent = `Bot: ${botCounter}`;
  playerScore.textContent = `Player: ${playerCounter}`;
  scoreCheck();
};

const scoreCheck = () => {
  if (playerCounter === 5) {
    alert("you win");
  } else if (botCounter === 5) {
    alert("you lose");
  }
};
