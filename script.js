import { questions } from './questions.js';  // Import the questions array

const questionElement = document.getElementById('question');
const answerBtn = document.getElementById('answer-button');
const nextBtn = document.getElementById('next-btn');

let currentQsnIndex = 0;
let score = 0;
let shuffledQuestions = [];
let questionsLimit = 10;

function startQuiz() {
    currentQsnIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    shuffledQuestions = shuffleArray(questions).slice(0, questionsLimit); // Shuffle and pick the first 10 questions
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQsn = shuffledQuestions[currentQsnIndex];
    let questionNo = currentQsnIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQsn.question;

    currentQsn.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerBtn.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
    });
}

function resetState() {
    nextBtn.style.display = "none";
    while (answerBtn.firstChild) {
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questionsLimit}!`;
    nextBtn.innerHTML = "Play again";
    nextBtn.style.display = "block";
}

function handleNextBtn() {
    currentQsnIndex++;
    if (currentQsnIndex < shuffledQuestions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener('click', () => {
    if (currentQsnIndex < shuffledQuestions.length) {
        handleNextBtn();
    } else {
        startQuiz();
    }
});

// Shuffle array function to randomize the question order
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

startQuiz();
