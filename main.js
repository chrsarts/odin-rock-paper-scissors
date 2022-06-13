const botRandom = (botAns) => {
  let x = ["rock", "paper", "scissors"];
  let y = Math.floor(Math.random() * 3);
  botAns = x[y];

  return botAns;
};
let bot;
let player;
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
