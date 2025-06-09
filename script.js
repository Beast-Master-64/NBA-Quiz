const quizData = [
  {
    question: "Who is this player?",
    answer: "LeBron James",
    img: "https://cdn.nba.com/headshots/nba/latest/1040x760/2544.png"
  },
  {
    question: "Who is this MVP center?",
    answer: "Nikola Jokic",
    img: "https://cdn.nba.com/headshots/nba/latest/1040x760/203999.png"
  },
  {
    question: "Name this Warriors sharpshooter.",
    answer: "Stephen Curry",
    img: "https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png"
  }
];

let currentQuestion = 0;
let score = 0;

const playerImage = document.getElementById("player-image");
const questionText = document.getElementById("question-text");
const answerInput = document.getElementById("answer-input");
const submitBtn = document.getElementById("submit-btn");

function loadQuestion() {
  const current = quizData[currentQuestion];
  playerImage.src = current.img;
  questionText.textContent = current.question;
  answerInput.value = "";
}

submitBtn.addEventListener("click", () => {
  const userAnswer = answerInput.value.trim();

  // AI helped me understand how to compare strings in a case-insensitive way
  if (userAnswer.toLowerCase() === quizData[currentQuestion].answer.toLowerCase()) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    // AI showed me how to use localStorage to pass the score to another page
    localStorage.setItem("nbaScore", score);

    window.location.href = "results.html"; // AI helped me figure out how to redirect with JS
  }
});

// AI helped me understand how window.onload ensures the first question is loaded when the page opens
window.onload = loadQuestion;
