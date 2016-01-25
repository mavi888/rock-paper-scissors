function game() {
  var scoreComputer = 0;
  var scorePlayer = 0;

  for (var i = 1; i <= 3; i++) {
    var winner = round();
    if (winner == 1) {
      scorePlayer++;
    } else if (winner == -1) {
      scoreComputer++;
    }
  }

  if (scoreComputer > scorePlayer) {
    console.log('Computer wins!');
  } else {
    console.log('Player wins!');
  }
}

function round() {
  var userChoice = prompt("Do you choose rock, paper or scissors?");
  var computerChoice = Math.random();
  if (computerChoice < 0.34) {
    computerChoice = "rock";
  } else if(computerChoice <= 0.67) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log("Computer: " + computerChoice);
  console.log("User: " + userChoice);
  return compare(userChoice, computerChoice);
}

function compare (choice1, choice2) {
  if (choice1 === choice2) {
    console.log("The result is a tie!");
    return 0;
  } else if (choice1 === "rock") {
    if (choice2 === "scissors") {
      console.log("Rock wins");
      return 1;
    } else {
      console.log("Paper wins");
      return -1;
    }
  } else if (choice1 === "paper") {
    if (choice2 === "scissors") {
      console.log("Scissors wins");
      return -1;
    } else {
      console.log("Paper wins");
      return 1;
    }
  } else if (choice1 === "scissors") {
    if (choice2 === "paper") {
      console.log("Scissors wins");
      return 1;
    } else {
      console.log("Rock wins");
      return -1;
    }
  }
}
