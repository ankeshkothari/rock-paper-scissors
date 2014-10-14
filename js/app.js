$(document).ready(function(){

	var computerhas;
	var userhas;
	var userWinCount = 0;
	var userLoseCount = 0;
	var userTieCount = 0;
	var totalCount = userWinCount + userLoseCount + userTieCount;

	/** function for computer to generate 
	 rock, paper, scissors. **/
	var computerrps = function (){
		computerhas = Math.floor((Math.random() * 3) + 1);
		convertComputer();
		return computerhas;
	};

	/* run computerrps function */
	

	/* Create function to write computerhas in html */
	var computerText = function (){
		console.log("Computer chose " + computerhas);
		$(".computerhas").text("Computer chose " + computerhas);
	};

	/* Convert random computerhas 
	numerical value to rock paper scissors*/
	var convertComputer = function(){
		if (computerhas === 1) {
			computerhas = "Rock";
		}
		else if (computerhas === 2) {
			computerhas = "Paper";
		}
		else {
			computerhas = "Scissors";
		};
	};

	/** Compare function **/
	var compare = function (){
		if (userhas === "Rock") {
			if (computerhas === "Rock") {
				console.log("It's a tie! Play again.");
				$(".result").text("It's a tie! Play again.");
				userTieCount++;
				console.log("Total ties: " + userTieCount);
			}
			else if (computerhas === "Paper") {
				console.log("Paper wraps rock. You lose :(");
				$(".result").text("Paper wraps rock. You lose :(");
				userLoseCount++;
				console.log("Total loses: " + userLoseCount);
			}
			else if (computerhas === "Scissors") {
				console.log("Rock breaks scissors. You win!");
				$(".result").text("Rock breaks scissors. You win!");
				userWinCount++;
				console.log("Total wins: " + userWinCount);
			};
		}
		else if (userhas === "Paper"){
			if (computerhas === "Paper") {
				console.log("It's a tie! Play again.");
				$(".result").text("It's a tie! Play again.");
				userTieCount++;
				console.log("Total ties: " + userTieCount);
			}
			else if (computerhas === "Scissors") {
				console.log("Scissors cuts paper. You lose :(");
				$(".result").text("Scissors cuts paper. You lose :(");
				userLoseCount++;
				console.log("Total loses: " + userLoseCount);
			}
			else if (computerhas === "Rock") {
				console.log("Paper wraps rock. You win!");
				$(".result").text("Paper wraps rock. You win!");
				userWinCount++;
				console.log("Total wins: " + userWinCount);
			};
		}
		else if (userhas === "Scissors") {
			if (computerhas === "Scissors") {
				console.log("It's a tie! Play again.");
				$(".result").text("It's a tie! Play again.");
				userTieCount++;
				console.log("Total ties: " + userTieCount);
			}
			else if (computerhas === "Rock") {
				console.log("Rock breaks scissors. You lose :(");
				$(".result").text("Rock breaks scissors. You lose :(");
				userLoseCount++;
				console.log("Total loses: " + userLoseCount);
			}
			else if (computerhas === "Paper") {
				console.log("Scissors cut paper. You win!");
				$(".result").text("Scissors cut paper. You win!");
				userWinCount++;
				console.log("Total wins: " + userWinCount);
			};
		};
	};

	
	/** User selects rock paper or scissors on button click 
	we then run the compare function**/

	$("button").on("click", function(){
		userhas = $(this).text();
		console.log("You chose " + userhas)
		$(".userhas").text("You chose " + userhas);
		computerrps();
		computerText();
		compare();
		stats();
		playAgain();
	});

	/** Stats updating variables. Calculating totalCount again **/
	var stats = function(){
		totalCount = userWinCount + userLoseCount + userTieCount;
		$(document).find(".totalCount").find("span").html(totalCount);
		$(document).find(".userWinCount").find("span").html(userWinCount);
		$(document).find(".userLoseCount").find("span").html(userLoseCount);
		$(document).find(".userTieCount").find("span").html(userTieCount);
	};

	/** Show Play Again option **/
	var playAgain = function(){
		$(".buttonContainer").hide();
		$(document).find(".playAgain").show();
		$(document).find(".choiceShow").show();
		$(document).find(".result").show();
	};

	$(document).find(".play").on("click", function(){
		$(document).find(".buttonContainer").show();
		$(document).find(".playAgain").hide();
		$(document).find(".choiceShow").hide();
		$(document).find(".result").hide();
	});


});

/*  
new game resets. 
*/