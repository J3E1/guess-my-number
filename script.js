// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🥳Correct Number!!";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".highscore").textContent = "Ligma";
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
let rn = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector(".number").textContent = "?";

document.querySelector(".check").addEventListener("click", function () {
  const n = Number(document.querySelector(".guess").value);

  if (!n) {
    displayMessage("🛑No Number Added!!");
    // document.querySelector(".message").textContent = "🛑No Number Added!!";
  } else if (rn === n) {
    document.querySelector(".number").textContent = rn;
    displayMessage("🥳Correct Number!!");
    // document.querySelector(".message").textContent = "🥳Correct Number!!";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (rn !== n) {
    if (score > 1) {
      displayMessage(rn > n ? "Too Low ⬇" : "Too High ⬆");
      //   document.querySelector(".message").textContent =
      //     rn > n ? "Too Low ⬇" : "Too High ⬆";
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".guess").value = null;
    } else {
      displayMessage("You Loose The Game Try Again");
      //   document.querySelector(".message").textContent =
      //     "You Loose The Game Try Again";
      document.querySelector(".score").textContent = 0;
    }
    //   } else if (rn > n) {
    //     if (score > 1) {
    //       document.querySelector(".message").textContent = "Too Low ⬇";
    //       score--;
    //       document.querySelector(".score").textContent = score;
    //       //     document.querySelector(".guess").value = null;
    //     } else {
    //       document.querySelector(".message").textContent =
    //         "You Loose The Game Try Again";
    //       document.querySelector(".score").textContent = 0;
    //     }
    //   } else if (rn < n) {
    //     if (score > 1) {
    //       document.querySelector(".message").textContent = "Too High ⬆";
    //       score--;
    //       document.querySelector(".score").textContent = score;
    //       //    document.querySelector(".guess").value = null;
    //     } else {
    //       document.querySelector(".message").textContent =
    //         "You Loose The Game Try Again";
    //       document.querySelector(".score").textContent = 0;
    //     }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  rn = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing..");
  // document.querySelector(".message").textContent = "Start guessing..";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = null;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
