$(window).on("load", function() {
    var gameData = new Game();
    $("#submit").on("click", function() {
        respondGuess();        
     });
     $(document).keypress(function(e) {
        if (e.which == 13) {
            if (!gameData.gameOver()) {
                respondGuess();
                
            }
        }
    });

    function respondGuess() {
        var currentGuess = $("#player-input").val();
        currentGuess = parseInt(currentGuess);
        $("#player-input").val("");
        var feedback = (gameData.playersGuessSubmission(currentGuess));
        $("#game-title").text(feedback);
        if (gameData.gameOver()) {
            $("#game-subtitle").text("Click 'reset' to play again.");
            $("#submit, #hint").prop("disabled", true);            
        } else if (gameData.isLower()) {
            $("#game-subtitle").text("Guess Higher.");
        } else {
            $("#game-subtitle").text("Guess Lower.");
            
        }
        var guessNum = gameData.getGuessNum();
        $("#guess" + guessNum).text(gameData.playersGuess);
        
        
    }
    $("#reset").on("click", function() {
        gameData = new Game();
        $("#game-title").text("Guessing Game!");
        $("#game-subtitle").text("Guess a number between 1-100!");
        $(".guess").text("-");
        $("#submit, #hint").prop("disabled", false);            
        
        
    });

    $("#hint").on("click", function() {
        var currentHints = gameData.provideHint();
        $("#game-title").text("The winning number is " + currentHints[0] + ", " + currentHints[1] + ", or " + currentHints [2]);


    });
    


     









    
 });