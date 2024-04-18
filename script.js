// defining variables
let comImage = document.querySelector("#comImage");
let imageToChange = [
  "images/paper.png",
  "images/rock.png",
  "images/scissors.png",
];
let player = document.querySelectorAll(".playerSelect");
let currentImageIndex = 0;
let intervalID;

// player choice
let playerChoicePaper = document.querySelector("#p1");
let playerChoiceRock = document.querySelector("#p2");
let playerChoiceScissors = document.querySelector("#p3");
let playerPaper;
let PlayerRock;
let PlayerScissors;

// score
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let computerScoreCount = 0;
let playerScoreCount = 0;

// computer choice
let paper;
let rock;
let scissors;

//tie

// change image each time
function changeImage() {
  currentImageIndex = (currentImageIndex + 1) % imageToChange.length;
  comImage.src = imageToChange[currentImageIndex];
  console.log(comImage.src);
  if (currentImageIndex === 0) {
    // Paper image
    paper = true;
    rock = false;
    scissors = false;
  } else if (currentImageIndex === 1) {
    // Rock image
    paper = false;
    rock = true;
    scissors = false;
  } else if (currentImageIndex === 2) {
    // Scissors image
    paper = false;
    rock = false;
    scissors = true;
  }
}

function stopChangeImage() {
  clearInterval(intervalID);
}
intervalID = setInterval(changeImage, 500);

for (let images of player) {
  images.addEventListener("click", stopChangeImage);
}

// logic for winning

playerChoicePaper.addEventListener("click", () => {
  playerPaper = true;
  playerRock = false;
  PlayerScissors = false;
  determineWinner();
});
playerChoiceRock.addEventListener("click", () => {
  playerPaper = false;
  playerRock = true;
  PlayerScissors = false;
  determineWinner();
});
playerChoiceScissors.addEventListener("click", () => {
  playerPaper = false;
  playerRock = false;
  PlayerScissors = true;
  determineWinner();
});
function determineWinner() {
  // chances of computer to win
  if (paper === true && playerRock === true) {
    addScoreComputer();
    intervalID = setInterval(changeImage, 500);
  } else if (rock == true && PlayerScissors === true) {
    addScoreComputer();
    intervalID = setInterval(changeImage, 500);
  } else if (scissors === true && playerPaper === true) {
    addScoreComputer();
    intervalID = setInterval(changeImage, 500);
  }

  // chances of tie
  else if (rock && playerRock === true) {
    forTie();
  } else if (paper && playerPaper === true) {
    forTie();
  } else if (scissors && PlayerScissors === true) {
    forTie();
  }

  // chances of player to win
  else if (playerRock && scissors === true) {
    addScorePlayer();
    intervalID = setInterval(changeImage, 500);
  } else if (playerPaper && rock === true) {
    addScorePlayer();
    intervalID = setInterval(changeImage, 500);
  } else if (paper && PlayerScissors === true) {
    addScorePlayer();
    intervalID = setInterval(changeImage, 500);
  }
}

//Adding score
function addScorePlayer() {
  playerScoreCount++;
  playerScore.innerText = `Your score: ${playerScoreCount}`;
  playerScore.style.color = "green";
  playerScore.style.fontSize = "20px";
  computerScore.style.color = "black";
  computerScore.style.fontSize = "18px";
 tie.style.display = "none";
}
function addScoreComputer() {
  computerScoreCount++;
  computerScore.innerText = `Your score: ${computerScoreCount}`;
  computerScore.style.color = "red";
  computerScore.style.fontSize = "20px";
  playerScore.style.color = "black";
  playerScore.style.fontSize = "18px";
   tie.style.display = "none";
}

function forTie(){
    tie.style.display= "block";
    intervalID = setInterval(changeImage, 500);
}