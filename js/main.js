
cards = ["queen", "queen", "king", "king"];
cardsInPlay = [];



checkForMatch = function () {
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
	} 
	else {
	alert("Sorry, try again.");
	}
  }
}

var flipCard = function (cardId) {

/* 
var cardOne = cards[0];
cardsInPlay.push(cardOne); 
console.log("User flipped " + cardOne);

var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);
*/
console.log ("User flipped " + cards[cardId]);

cardsInPlay.push(cards[cardId]); 

checkForMatch();



/*
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} 
	else {
		alert("Please try again.");
	}
  }
*/
} 

flipCard(0);
flipCard(2);
