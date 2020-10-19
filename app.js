let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
rock_div = document.getElementById("r");
paper_div = document.getElementById("p");
scissors_div = document.getElementById("s");
// computer choose
function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
// showing win lose result
function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  // result_p.innerHTML = userChoice + " beats " + computerChoice + ". You Win";
  console.log(user);
  console.log(computer);
}

function lose() {}

function draw() {
  console.log("drawww")
}
// determine win or lose
function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
  }
}
// click function to trigger r p s
function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  })

  paper_div.addEventListener("click", function () {
    game("p");
  })

  scissors_div.addEventListener("click", function () {
    game("s");
  })
}

main();
