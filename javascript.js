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
    },
    {
        title: "CSS stands for _____.",
        choices: ["Cascading style sheets", "Current style set", "Copy set style", "Character subject style"],
        answer: "Cascading style sheets"
    },
    {
        title: "What does the parseInt() function do?",
        choices: ["It breaks up a multi digit number into an array of the number", "It's a debug function that checks if a variable is a number", "It changes an integer into a string", "It changes a string into an integer"],
        answer: "It changes a string into an integer"
    },
];

var choicesDiv = $("#choicesDiv");
var timerElement = $("#timer");
var timeLeft = questions.length * 15;
var i = 0;
var userInitials = "";
var score = "";
var scoreboard = [];
var userScore = "";



// I got this from https://stackoverflow.com/questions/3262605/how-to-check-whether-a-storage-item-is-set
//I wasn't sure how to only get an item if it's not currently set. I know if you try to getItem and it doesn't exist than it comes as null
//so I just had an if statment that only runs if when I pull scoreboard it comes back not null
if (localStorage.getItem("scoreboard") !== null){
    scoreboard = JSON.parse(localStorage.getItem("scoreboard"));
};


$("#question-area").text("Welcome! If you want to play the test just click the button below to get started!")
$("#choices-area").html("<button type='button' class='btn btn-primary' id='start-button'>Start Quiz</button>")

$("#start-button").click(function (event) {
    startTimer();
    generateQuesion();
});

function startTimer() {
    var interval = setInterval(function () {
        timeLeft--
        $("#timer").text("Time left: " + timeLeft);
        if (timeLeft == 0) {
            clearInterval(interval);
            gameOver();
        }
    }, 1000);
}

function generateQuesion() {
    console.log(i);
    if (i == 5){
        console.log("inside if of gameover function call");
        gameOver();
    };
    $("#question-area").text(questions[i].title);
    $("#choices-area").html('<p class="lead" id="choices-area"></p>');
    $("#choices-first").text(questions[i].choices[0]);
    $("#choices-second").text(questions[i].choices[1]);
    $("#choices-third").text(questions[i].choices[2]);
    $("#choices-fourth").text(questions[i].choices[3]);
}

$("#choices-first").click(function (event) {
    event.preventDefault()
    if (questions[i].answer == questions[i].choices[0]) {
        questionCorrect()
    } else {
        questionWrong()
    };
});

$("#choices-second").click(function (event) {
    event.preventDefault()
    if (questions[i].answer == questions[i].choices[1]) {
        questionCorrect()
    } else {
        questionWrong()
    };
});

$("#choices-third").click(function (event) {
    event.prevetDefault
    if (questions[i].answer == questions[i].choices[2]) {
        questionCorrect()
    } else {
        questionWrong()
    };
});

$("#choices-fourth").click(function (event) {
    event.prevetDefault
    if (questions[i].answer == questions[i].choices[3]) {
        questionCorrect()
    } else {
        questionWrong()
    };
});

function questionCorrect() {
    $("#choices-area").html('<p class="lead" id="choices-area">Thats Correct!</p>');
    i++;
    setTimeout(function () {
        if (i < questions.length + 1) {
            generateQuesion();
        }
    }, 1000);
};

function questionWrong() {
    $("#choices-area").html('<p class="lead" id="choices-area">Thats Incorrect!</p>');
    i++;
    if (timeLeft < 15){
        timeLeft = 1;
    } else {
        timeLeft = timeLeft - 15;
    };
    setTimeout(function () {
        if (i < questions.length + 1) {
            generateQuesion();
        }
    }, 1000);
};

function gameOver() {
    score = timeLeft;
    $("#question-area").text("Good job!");
    $("#choices-area").html('<p class="lead" id="choices-area">Head on over to the highscores to see how you did versus your prior tries.</p>');
    $("#choices-first").text("");
    $("#choices-second").text("");
    $("#choices-third").text("");
    $("#choices-fourth").text("");
    userInitials = prompt("Please enter your initials so I can record your highscore.")
    userScore = userInitials + " score: " + score;
    console.log(userScore);
    scoreboard.push(userScore);
    localStorage.setItem("scoreboard", JSON.stringify(scoreboard));
}