let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const reset_button = document.querySelector(".reset-button");
var choiceMap = {"r": "Rock", "p": "Paper", "s": "Scissors"};

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor( Math.random() * 3 );
  return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${choiceMap[userChoice]} beats ${choiceMap[computerChoice]}, User Win !`;
  userChoice_div.classList.add("green-glow"); // Add new class on tag
  setTimeout(() => userChoice_div.classList.remove("green-glow"), 1000); // Some kind of timer in JS
}

function lose(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${choiceMap[computerChoice]} beats ${choiceMap[userChoice]}, Computer Win !`;
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 1000);
}

function draw(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `Double ${choiceMap[userChoice]}, it\'s a Draw!`;
  userChoice_div.classList.add("white-glow");
  setTimeout(() => userChoice_div.classList.remove("white-glow"), 1000);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice){
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "sr":
    case "rp":
    case "ps":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}

function reset() {
  userScore_span.innerHTML = 0;
  computerScore_span.innerHTML = 0;
  reset_button.classList.add("reset-button-active");
  setTimeout(() => reset_button.classList.remove("reset-button-active"), 300);
}

function main() {
  rock_div.addEventListener("click", () => game("r"));

  paper_div.addEventListener("click", () => game("p"));

  scissors_div.addEventListener("click", () => game("s"));

  reset_button.addEventListener("click", () => reset());
}

main();