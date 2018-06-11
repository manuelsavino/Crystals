$(function () {

    var userScore = 0;
    var wins = 0;
    var losses = 0;
    var numbers = []
    var scoreNeeded = Math.floor(Math.random() * 120) + 19;
    $("#targetScore").text(scoreNeeded)
   
    genNum()

    $("#wins").text(wins)
    $("#losses").text(losses)

    $("#crystal1").on("click", () => {
        userScore = userScore + numbers[0];
        $("#playerScore").text(userScore)
        $("#crystal1Num").text(numbers[0])
        if (userScore === scoreNeeded) {
            win();
        } else if (userScore > scoreNeeded) {
            loss();
        }
    })

    $("#crystal2").on("click", () => {
        userScore = userScore + numbers[1];
        $("#playerScore").text(userScore)
        $("#crystal2Num").text(numbers[1])

        if (userScore === scoreNeeded) {
            win();
        } else if (userScore > scoreNeeded) {
            loss();
        }
    })

    $("#crystal3").on("click", () => {
        userScore = userScore + numbers[2];
        $("#playerScore").text(userScore)
        $("#crystal3Num").text(numbers[2])

        if (userScore === scoreNeeded) {
            win();
        } else if (userScore > scoreNeeded) {
            loss();
        }
    })

    $("#crystal4").on("click", () =>{
        userScore = userScore + numbers[3];
        $("#playerScore").text(userScore)
        $("#crystal4Num").text(numbers[3])

        if (userScore === scoreNeeded) {
            win();
        } else if (userScore > scoreNeeded) {
            loss();
        }
    })

    $("#newGame").on("click", () =>{
        reset()
    })

    var win = () => {
        setTimeout(() => {
            $("#message").text("You Win")
            $('#myModal').modal({ backdrop: 'static', keyboard: false })
        }, 500);
        wins++;
        $("#wins").text(wins);

    }

    var loss = () => {
        setTimeout(() => {
            $("#message").text("You lost")
            $('#myModal').modal({ backdrop: 'static', keyboard: false })
        }, 500);
        losses++;
        $("#losses").text(losses);
    }

    var reset = () => {
        userScore = 0;
        scoreNeeded = Math.floor(Math.random() * 102 + 19);
        $("#targetScore").text(scoreNeeded)
        genNum()
        $("#playerScore").text("0")
    }

    function  genNum () {
    for(i = 0; i < 4; i++)
    {
        numbers[i] = Math.floor(Math.random() * 12) + 1;
        $("#crystal"+(i+1)+"Num").text("")
    }
    }

    $("#hide").on("click" ,() => {
        $(".jumbotron").hide(300)
    })

})


