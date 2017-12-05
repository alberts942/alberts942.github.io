			var number = getRandomInt(0, 6);
    		var guess = prompt("try to Guess a number between 0 and 5.", "");
       		var guessNumber = 0;
       		while(guess != number){
        		alert("You tried " + guess + ": The right think was" + number + ". Please try again");
          		guessNumber += 1;
          		number = getRandomInt(0,6);
          		guess = prompt("the number is between 0 and 5.", "");
        	}
        	guessNumber += 1;
        	alert("Your Answer " + guess + ": You right. you tried " + guessNumber + " times.");
