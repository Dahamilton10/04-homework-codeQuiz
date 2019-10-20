var currentScore;

for (var i = 0; i < scoreboard.length; i++) {
    console.log("hi");
    currentScore = $("<p>");
    currentScore.addClass("lead")
    currentScore.text(scoreboard[i])
    $(".container").append(currentScore);
};