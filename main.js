const quizApp = [
    {
        question: "What is the capital of the US?",
        answers: [
            "Washington D.C",
            "New York",
            "Los Angeles",
            "Dallas"
        ],
        correctAnswer: 0
    },

    {
        question: "What is 100 + 200?",
        answers: [
            "4545",
            "22323",
            "300",
            "7777"
        ],
        correctAnswer: 2
    },

    {
        question: "Who is the founder of Amazon?",
        answers: [
            "Steve Jobs",
            "Bill Gates",
            "You",
            "Jeff Bezos"
        ],
        correctAnswer: 3
    }
]

let currentQuestion = 0;
let score = 0;

const questions = $('#questions');
const choices = $('#answers');
const result = $('#result');
const nextBtn = $('#next');
const prevBtn = $('#prev');

function displayQuestion() {
    questions.text(quizApp[currentQuestion].question);
    choices.empty(); //hide the answers
    nextBtn.hide();

    quizApp[currentQuestion].answers.forEach((answer, i) => {
        const answerChoices = $(`<li class="answer">${answer}</li>`);
        answerChoices.click(() => answerChecker(i));
        choices.append(answerChoices)
    })
}


function answerChecker(userChoice) {
    const correct = quizApp[currentQuestion].correctAnswer;
    
    if(userChoice == correct) {
        score++;
        result.text("You got it right!").css('color', 'green');
    }
    else {
        result.text("Correct answer is: " + quizApp[currentQuestion].answers[correct]).css('color', 'red');
    }
    nextBtn.show();
    $('.answer').off('click') //disable other answers after the user chose the answer
}

$("#next").click(function(){
    if (currentQuestion < quizApp.length - 1) {
        currentQuestion++;
        displayQuestion();
        nextBtn.hide();
        result.empty();
    }
    else {
        showResult();
    }
});

function showResult() {
    if(score == quizApp.length) {
        questions.text(`Good job!! You scored ${score} out of ${quizApp.length}`)
    }
    else {
        questions.text(`Too bad :( You scored ${score} out of ${quizApp.length}`)
    }
    choices.empty();
    result.empty();
    nextBtn.hide();
    prevBtn.hide();
}


displayQuestion();