var currentScore;

for (var i = 0; i < scoreboard.length; i++) {
    currentScore = $("<p>");
    currentScore.addClass("lead")
    currentScore.text(scoreboard[i])
    $(".container").append(currentScore);
};