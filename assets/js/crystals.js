$(function () {

    var userScore = 0;
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
        userScore = userScore + number1;
        $("#playerScore").html(userScore)
        $("#crystal1Num").text(number1)
        if (userScore == scoreNeeded) {
            userWin();
        } else if (userScore > scoreNeeded) {
            userLoss();
        }
    })

    $("#crystal2").on("click", function () {
        userScore = userScore + number2;
        $("#playerScore").html(userScore)
        $("#crystal2Num").text(number2)

        if (userScore == scoreNeeded) {
            userWin();
        } else if (userScore > scoreNeeded) {
            userLoss();
        }
    })

    $("#crystal3").on("click", function () {
        userScore = userScore + number3;
        $("#playerScore").html(userScore)
        $("#crystal3Num").text(number3)

        if (userScore == scoreNeeded) {
            userWin();
        } else if (userScore > scoreNeeded) {
            userLoss();
        }
    })

    $("#crystal4").on("click", function () {
        userScore = userScore + number4;
        $("#playerScore").html(userScore)
        $("#crystal4Num").text(number4)

        if (userScore == scoreNeeded) {
            userWin();
        } else if (userScore > scoreNeeded) {
            userLoss();
        }
    })

    $("#newGame").on("click", function(){
        
        reset()
        
    })

    function userWin() {
        setTimeout(() => {
            $("#message").text("You Win")
            $('#myModal').modal('show')
        }, 500);
        wins++;
        $("#wins").html(wins);

    }

    function userLoss() {
        setTimeout(() => {
            $("#message").text("You lost")
            $('#myModal').modal('show')
        }, 500);
        
        losses++;
        $("#losses").html(losses);
    }

    function reset() {
        userScore = 0;
        scoreNeeded = Math.floor(Math.random() * 102 + 19);
        $("#targetScore").html(scoreNeeded)
        number1 = Math.floor(Math.random() * 12 + 1);
        number2 = Math.floor(Math.random() * 12 + 1);
        number3 = Math.floor(Math.random() * 12 + 1);
        number4 = Math.floor(Math.random() * 12 + 1);
        $("#crystal1Num").text("")
        $("#crystal2Num").text("")
        $("#crystal3Num").text("")
        $("#crystal4Num").text("")
        $("#playerScore").html(userScore)
    }

})


