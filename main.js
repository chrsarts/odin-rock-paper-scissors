const botRandom = (botAns) => {
  let x = ["rock", "paper", "scissors"];
  let y = Math.floor(Math.random() * 3);
  botAns = x[y];

  return botAns;
};
let btnRock = document.querySelector(".rock");
let btnPaper = document.querySelector(".paper");
let btnScissors = document.querySelector(".scissors");

let bot;
let player;

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
        console.log("draw!");
      } else if (bot === "scissors") {
        console.log("you win!");
      } else {
        console.log("you lose.");
      }
      break;
    case "scissors":
      if (bot === "rock") {
        console.log("you lose.");
      } else if (bot === "scissors") {
        console.log("draw!");
      } else {
        console.log("you win!");
      }
      break;
    case "paper":
      if (bot === "rock") {
        console.log("you win!");
      } else if (bot === "scissors") {
        console.log("you lose.");
      } else {
        console.log("draw!");
      }
      break;
    default:
      console.log("enter rock, paper or scissors");
  }
};
