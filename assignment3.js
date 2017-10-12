var randomNum = Math.floor(Math.random() * 10) + 1;
var paragraph = document.getElementById("result-info");
var guessDisplay = document.getElementById("guess-info");
var numInput = document.getElementById("num-input");
numInput.focus();
var guessCounter = 0;

document.body.onkeydown = function(e) {
    if (e.keyCode == 13) {
        guess();
    }
}

function guess() {
    var currentGuess = numInput.value;
    guessCounter++;
    guessDisplay.innerHTML = "Guesses: " + guessCounter;
    if (currentGuess > randomNum) {
        paragraph.innerHTML = "too high you're wrong";
    }
    else if (currentGuess == randomNum) {
        paragraph.innerHTML = "Well I guess some people do have brains, you're correct";
    }
    else if (currentGuess < randomNum) {
        paragraph.innerHTML = "too low so sad ha";
    }
    else {
        paragraph.innerHTML = "Definently not!";
    }
}
