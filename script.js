// ChatGPT helped create quiz logic and event handling

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
  if (userAnswer.toLowerCase() === quizData[currentQuestion].answer.toLowerCase()) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    localStorage.setItem("nbaScore", score);
    console.log(`You got ${score} out of ${quizData.length} correct!`);
    window.location.href = "results.html";
  }
});

window.onload = loadQuestion;
