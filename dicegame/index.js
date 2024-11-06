let player1Name, player2Name;

function startGame() {

  player1Name = document.getElementById("player1Name").value || "Player 1";
  player2Name = document.getElementById("player2Name").value || "Player 2";

 
  document.getElementById("name1").textContent = player1Name;
  document.getElementById("name2").textContent = player2Name;

 
  document.querySelector(".container").style.display = "block";
  document.querySelector(".name-inputs").style.display = "none";
  document.querySelector(".game-controls").style.display = "none";

  rollDice();
}

function rollDice() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
  document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);

  const heading = document.querySelector("h1");
  if (randomNumber1 > randomNumber2) {
    heading.textContent = `🚩 ${player1Name} Wins!`;
  } else if (randomNumber2 > randomNumber1) {
    heading.textContent = `${player2Name} Wins! 🚩`;
  } else {
    heading.textContent = "It's a Draw!";
  }

  document.querySelector(".game-controls").style.display = "block";
}

function replayGame() {
  
  document.querySelector(".game-controls").style.display = "none";
  rollDice();
}

function quitGame() {
 
  document.querySelector(".container").style.display = "none";
  document.querySelector(".name-inputs").style.display = "block";

  // Clear input fields for new names
  document.getElementById("player1Name").value = "";
  document.getElementById("player2Name").value = "";

  // Reset heading text
  document.querySelector("h1").textContent = "Refresh Me";
}
