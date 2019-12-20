// created variables and linked them to the html
var quizContainer = document.getElementById("quizContainer");
var startButton = document.getElementById("start");
var description = document.getElementById("info");
var result = document.getElementById("results")
var result2 = document.getElementById("incorrect")
var questionCount = 0;
var correct = 0;
var incorrect = 0;
var secondsLeft = 75;
var time = document.getElementById("timer");
// created my questions to be used for the quiz
var myQuestions = [
    {
        question: "What’s the total number of dots on a pair of dice?",
        choices: ["60", "55", "42", "46"],
        answer: "42"
    },
    {
        question: "Which planet is the closest to Earth?",
        choices: ["mars", "venus", "the moon", "saturn"],
        answer: "venus"
    },
    {
        question: "What is the chemical symbol for Hydrogen?",
        choices: ["H", "O", "A", "Hy"],
        answer: "H"
    },
    {
        question: "According to the Dr. Seuss book, who stole Christmas?",
        choices: ["The lorax", "The Grinch", "Dr. Seuss", "Santa"],
        answer: "The Grinch"
    },
    {
        question: "Maris Piper and King Edward are varieties of what?",
        choices: ["Rulers", "Legends", "potato", "Riddles"],
        answer: "potato"
    }
]

// created the function which starts the quiz
function startGame() {
    document.getElementById("start").style.display = "none";
    description.style.display = "none";
    renderQuestion();
    setTime();
}

// function to display the quiz and its option buttons
function renderQuestion() {
    quizContainer.textContent = (myQuestions[questionCount].question);
    var $body = document.getElementById("buttons");
    $body.innerHTML = '';
    for (var i = 0; i < myQuestions[questionCount].choices.length; i++) {
        var $btn = document.createElement('button');
        $btn.textContent = (myQuestions[questionCount].choices[i]);
        $btn.onclick = check;
        $btn.setAttribute('data-answer', myQuestions[questionCount].choices[i]);
        $btn.setAttribute('data-correct', myQuestions[questionCount].answer)
        $body.appendChild($btn)
    }
}

// created a function which checks and keeps track of correct and wrong answers
function check(event) {
    event.preventDefault();
    if (event.target.dataset.answer == event.target.dataset.correct) {
        correct++
    } else {
        incorrect++
    }

    questionCount++
    if (questionCount < myQuestions.length) {
        renderQuestion();
    } else {
        secondsLeft = 1;
        endGame();
    };
}

// function which shows the results at the end
function endGame() {
    document.getElementById("quizContainer").style.display = "none";
    document.getElementById("buttons").style.display = "none";
    document.getElementById("results").innerHTML = "";
    document.getElementById("incorrect").innerHTML = "";
    result.append("You got " + correct + " right")
    result2.append("You got " + incorrect + " wrong")
}

function setTime() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        var miss = 0;
        time.textContent = "Time: " + (miss + secondsLeft);
        if (secondsLeft < 1) {
            clearInterval(timerInterval);
            endGame();
        }

    }, 1000);
}
// added a click event on the start button which starts the quiz
startButton.addEventListener('click', startGame)
