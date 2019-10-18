var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "DOM stands for _____.",
        choices: ["Domain", "Document object model", "Domain operation method", "Document operation method"],
        answer: "Document object model"
    }
];

var choicesDiv = $("#choicesDiv");
var timerElement = $("#timer");
var timeLeft = questions.length * 15;
var currentItteration = 0

$("#question-area").text("Welcome! If you want to play the test just click the button below to get started!")
$("#choices-area").html("<button type='button' class='btn btn-primary' id='start-button'>Start Quiz</button>")

$("#start-button").click(function (event) {
    startTimer();
    generateQuesion();
});

function generateQuesion() {
    for (var i = 0; i < questions.length; i){
        currentItteration = i
        $("#question-area").text(questions[i].title);
        $("#choices-area").html('<p class="lead" id="choices-area"></p>');
        $("#choices-first").text(questions[i].choices[0]);
        $("#choices-second").text(questions[i].choices[1]);
        $("#choices-third").text(questions[i].choices[2]);
        $("#choices-fourth").text(questions[i].choices[3]);
    
    $("#choices-first").click(function(event){
        event.prevetDefault
        if (questions[currentItteration].answer = $("choices-first").text){
            questionCorrect()
        } else {
            questionWrong()
        };
    })
    $("#choices-second").click(function(event){
        event.prevetDefault
        if (questions[currentItteration].answer = $("choices-first").text){
            questionCorrect()
        } else {
            questionWrong()
        };
    })
    $("#choices-third").click(function(event){
        event.prevetDefault
        if (questions[currentItteration].answer = $("choices-first").text){
            questionCorrect()
        } else {
            questionWrong()
        };
    })
    $("#choices-fourth").click(function(event){
        event.prevetDefault
        if (questions[currentItteration].answer = $("choices-first").text){
            questionCorrect()
        } else {
            questionWrong()
        };
    })
};
}

function questionCorrect(){
    $("#choices-area").html('<p class="lead" id="choices-area">Thats Correct!</p>');
    setTimeout(function () {
        i++;
    }, 500);
};

function questionWrong(){
    $("#choices-area").html('<p class="lead" id="choices-area">Thats Incorrect!</p>');
    setTimeout(function () {
        i++;
    }, 500);
};

function startTimer() {
var interval = setInterval(function () {
    timeLeft--   
    $("#timer").text("Time left: " + timeLeft);
    if (timeLeft == 0){
        clearInterval(interval);
    }
}, 1000);
}

// for (var x = 0; x < questions.choices.length; x++){
//     var choiceElement = $("<p>" + questions.choices[x] + "</p>")
//     choicesDiv.append(choiceElement);
// }