$(function () {

    var totalScore = 0;
    var wins = 0;
    var losses = 0;

    var scoreNeeded = Math.floor(Math.random() * 102 + 19);
    $("#targetScore").html(scoreNeeded)

    var number1 = Math.floor(Math.random() * 12 + 1);
    var number2 = Math.floor(Math.random() * 12 + 1);
    var number3 = Math.floor(Math.random() * 12 + 1);
    var number4 = Math.floor(Math.random() * 12 + 1);

    $("#wins").html(wins)
    $("#losses").html(losses)

    $("#crystal1").on("click", function () {
        totalScore = totalScore + number1;
        $("#playerScore").html(totalScore)

        if (totalScore == scoreNeeded) {
            userWin();
        } else if (totalScore > scoreNeeded) {
            userLoss();
        }
    })

    $("#crystal2").on("click", function () {
        totalScore = totalScore + number2;
        $("#playerScore").html(totalScore)

        if (totalScore == scoreNeeded) {
            userWin();
        } else if (totalScore > scoreNeeded) {
            userLoss();
        }
    })

    $("#crystal3").on("click", function () {
        totalScore = totalScore + number3;
        $("#playerScore").html(totalScore)

        if (totalScore == scoreNeeded) {
            userWin();
        } else if (totalScore > scoreNeeded) {
            userLoss();
        }
    })

    $("#crystal4").on("click", function () {
        totalScore = totalScore + number4;
        $("#playerScore").html(totalScore)

        if (totalScore == scoreNeeded) {
            userWin();
        } else if (totalScore > scoreNeeded) {
            userLoss();
        }
    })

    function userWin() {
        alert("You won!");
        wins++;
        $("#wins").html(wins);
        reset();
    }

    function userLoss() {
        alert("You lost!");
        losses++;
        $("#losses").html(losses);
        reset();
    }

    function reset() {
        var totalScore = 0;
        var scoreNeeded = Math.floor(Math.random() * 102 + 19);
        $("#targetScore").html(scoreNeeded)
        var number1 = Math.floor(Math.random() * 12 + 1);
        var number2 = Math.floor(Math.random() * 12 + 1);
        var number3 = Math.floor(Math.random() * 12 + 1);
        var number4 = Math.floor(Math.random() * 12 + 1);
        $("#playerScore").html(totalScore)
    }

})


