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
    },

    {
        question: "How many US states are there?",
        answers: [
            "43",
            "50",
            "90",
            "123"
        ],
        correctAnswer: 1
    }
]

let currentQuestion = 0;
let score = 0;
const incorrectAnswers = []; //array to store incorrect questions

const questions = $('#questions');
const choices = $('#answers');
const result = $('#result');
const nextBtn = $('#next');
const again = $('#again');

function displayQuestion() {
    questions.text(quizApp[currentQuestion].question);
    choices.empty(); //hide the answers
    nextBtn.hide();//hide the button until the user answered the question
    again.hide();
    quizApp[currentQuestion].answers.forEach((answer, i) => { //loop through and display the questions in the quizApp array
        const answerChoices = $(`<li class="answer">${answer}</li>`);
        answerChoices.click(() => answerChecker(i));
        choices.append(answerChoices)
    })
}


function answerChecker(userChoice) {
    const correct = quizApp[currentQuestion].correctAnswer;
    
    if(userChoice == correct) {
        score++; //give 1 pt when answered correctly
        result.text("You got it right!").css('color', 'green');//green message for correct answers
    }
    else {
        result.text("Correct answer is: " + quizApp[currentQuestion].answers[correct]).css('color', 'red');//red message for correct answers
        incorrectAnswers.push(`<span style="font-size: 100%;">${quizApp[currentQuestion].question}</span>`);//push the incorrect questions into the incorrectAnswer array
    }
    nextBtn.show();
    $('.answer').off('click') //disable other answers after the user chose the answer
}

$("#next").click(function(){
    if (currentQuestion < quizApp.length - 1) {
        currentQuestion++; //go up one question 
        displayQuestion();
        nextBtn.hide();
        result.empty();
    }
    else {
        showResult();
    }
});

function showResult() {
    const correctAnswers = quizApp.length - incorrectAnswers.length; //check for how many correct questions in the arrays

    if (correctAnswers === quizApp.length) {
        questions.text(`Good job!! You scored ${score} out of ${quizApp.length}`);
    } else {
        questions.text(`You scored ${score} out of ${quizApp.length}. You got the following questions wrong:`);
        const incorrectList = $('<ul>'); //creates an unordered list
        incorrectAnswers.forEach((question) => {
            incorrectList.append($(`<li style="font-size: 100%;">${question}</li>`));
        });
        questions.append(incorrectList); //display incorrect questions
    }
    choices.empty();
    result.empty();
    nextBtn.hide();
    again.show();
}

displayQuestion();