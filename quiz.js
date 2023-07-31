// quiz2.js
// Creates a quiz
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const quizQuestions = [
  {
    question: "Dericka is currently working on a PhD application on:",
    answers: {
      a: "Project management",
      b: "Communities of practice",
      c: "StartUp model for confirmation",
      d: "All of the above"
    },
    correctAnswer: "a"
  },
  {
    question: "Dericka works at:",
    answers: {
      a: "University of the Sunshine Coast",
      b: "HochScule Koblenz in Remagen",
      c: "Queensland University of Technology",
      d: "Queensland TAFE"
    },
    correctAnswer: "a"
  },
  {
    question: "Dericka's research skills include:",
    answers: {
      a: "Project design",
      b: "Time management",
      c: "Collaboration",
      d: "All of the above"
    },
    correctAnswer: "d"
  },
  {
    question: "Dericka is passionate about:",
    answers: {
      a: "Equity",
      b: "Project design",
      c: "Communication",
      d: "Finding synergies"
    },
    correctAnswer: "a"
  }
];

function buildQuiz() {
  // Variable to store the HTML output
  const output = [];

  for (let i = 0; i < quizQuestions.length; i++) {
    // Variable to store list of possible answers
    const answers = [];

    // For each available answer to this question, add an HTML radio button
    for (const letter in quizQuestions[i].answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${i}" value="${letter}">
          ${letter}: ${quizQuestions[i].answers[letter]}
        </label>`
      );
    }

    // Add this question and its answers to the output
    output.push(
      `<div class="question">${quizQuestions[i].question}</div>
      <div class="answers">${answers.join("")}</div>`
    );
  }

  // Combine our output list into one string of HTML and put it on the page
  quizContainer.innerHTML = output.join("");
}

function showResults() {
  const answerContainers = quizContainer.querySelectorAll(".answers");
  let numCorrect = 0;

  for (let i = 0; i < quizQuestions.length; i++) {
    const answerContainer = answerContainers[i];
    const selector = `input[name=question${i}]:checked`;
    const userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if (userAnswer === quizQuestions[i].correctAnswer) {
      numCorrect++;
    }
  }

  resultsContainer.innerHTML = `${numCorrect} out of ${quizQuestions.length}`;
}

// Build the quiz when the page loads
buildQuiz();

// Event listener for the submit button to show results when clicked
submitButton.addEventListener("click", showResults);
