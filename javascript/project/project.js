
const quizData = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Hyper Transfer Markup Language", "High Level Text Markup Language"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["color", "text-color", "font-color"],
        correctAnswer: "color"
    },
    {
        question: "What is the purpose of JavaScript?",
        options: ["Styling web pages", "Creating interactive web pages", "Managing databases"],
        correctAnswer: "Creating interactive web pages"
    },
    {
        question: "What HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<hlink>"],
        correctAnswer: "<a>"
    },
    {
        question: "Which CSS property is used to set the background color of an element?",
        options: ["background-color", "color", "background-style"],
        correctAnswer: "background-color"
    },
    {
        question: "In CSS, what does the 'margin' property control?",
        options: ["Spacing between elements", "Element's content", "Element's border"],
        correctAnswer: "Spacing between elements"
    },
    {
        question: "What is the purpose of the 'typeof' operator in JavaScript?",
        options: ["To check if a variable is defined", "To determine the type of a variable", "To assign a variable type"],
        correctAnswer: "To determine the type of a variable"
    },
    {
        question: "Which HTML tag is used to define an unordered list?",
        options: ["<ul>", "<ol>", "<li>"],
        correctAnswer: "<ul>"
    },
    {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "let", "const", "all of the above"],
        correctAnswer: "all of the above"
    },
    {
        question: "Which HTML tag is used to define a table?",
        options: ["<table>", "<tr>", "<td>"],
        correctAnswer: "<table>"
    },
    {
        question: "What does the '=== ' operator do in JavaScript?",
        options: ["Checks for equality without type coercion", "Assigns a value to a variable", "Checks for equality with type coercion"],
        correctAnswer: "Checks for equality without type coercion"
    },
    {
        question: "Which HTML tag is used to create a line break?",
        options: ["<br>", "<lb>", "<break>"],
        correctAnswer: "<br>"
    },
    {
        question: "What does the 'display: none;' CSS property do?",
        options: ["Hides the element", "Displays the element as a block", "Makes the text italic"],
        correctAnswer: "Hides the element"
    },
    {
        question: "What is the purpose of the 'for' loop in JavaScript?",
        options: ["To define a function", "To declare a variable", "To repeatedly execute a block of code"],
        correctAnswer: "To repeatedly execute a block of code"
    },
    {
        question: "Which CSS property is used for styling the text font?",
        options: ["font-family", "text-style", "font-style"],
        correctAnswer: "font-family"
    }
];

// Initialize variables to keep track of the current question and the user's score
let currentQuestion = 0;
let score = 0;

// Get references to HTML elements
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const scoreDisplay = document.getElementById("score");

// Function to load the current question and its options into the HTML elements
function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionText.innerText = currentQuizData.question;

    // Clear the options container and create buttons for each option
    optionsContainer.innerHTML = "";
    currentQuizData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        // Add an event listener to check the user's answer when an option is clicked
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionText.innerText = `${currentQuestion + 1}. ${currentQuizData.question}`; // Display question number
    scoreDisplay.innerText = `Your Score: ${score} / ${quizData.length}`;

    // Clear the options container and create buttons for each option
    optionsContainer.innerHTML = "";
    currentQuizData.options.forEach(function (option, index) {
        const button = document.createElement("button");
        button.innerText = option;
        // Add an event listener to check the user's answer when an option is clicked
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

// Function to check the user's answer and update the score
function checkAnswer(userAnswer) {
    const currentQuizData = quizData[currentQuestion];
    if (userAnswer === currentQuizData.correctAnswer) {
        // Increment the score if the user's answer is correct
        score++;
    }

    // Move to the next question or end the quiz if all questions have been answered
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        endQuiz();
    }
}

// Function to display the final score and end the quiz
function endQuiz() {
    questionText.innerText = "Quiz completed!";
    optionsContainer.innerHTML = "";
    // Hide the "Next" button at the end of the quiz
    nextButton.style.display = "none";
    // Display the user's score
    scoreDisplay.innerText = `Your Score: ${score} / ${quizData.length}`;
}

// Initial load of the first question
loadQuestion();

// Add an event listener to the "Next" button to move to the next question
nextButton.addEventListener("click", () => {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        // End the quiz if all questions have been answered
        endQuiz();
    }
});
