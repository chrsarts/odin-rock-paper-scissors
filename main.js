/* rock paper scissors
    -make a function to let bot choose rock, paper or scissors
    -make a function that takes player rock paper or scissors
    -compare both and declare a winner
*/

const botRandom = (botAns) => {
  let x = ["rock", "paper", "scissors"];
  let y = Math.floor(Math.random() * 3);
  botAns = x[y];

  return botAns;
};
bot = botRandom();
player = "rock";
const play = (player, bot) => {
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
  }
};
console.log(play(player, bot));
