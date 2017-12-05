                       function getRandomInt(min, max){
 			min = Math.ceil(min);
  			max = Math.floor(max);
  			return Math.floor(Math.random() * (max - min) + min); 
			};
			var number = getRandomInt(0, 6);
    		var guess = prompt("try to guess a number between 0 and 5.", "");
       		var guessNumber = 0;
       		while(guess != number){
        		alert("You tried " + guess + ": The correct try was " + number + ". Please try to guess again");
          		guessNumber += 1;
          		number = getRandomInt(0,6);
          		guess = prompt("try to guess a number between 0 and 5.", "");
        	}
        	guessNumber += 1;
        	alert("You tried " + guess + ": You right. It took you " + guessNumber + " tries.");1
