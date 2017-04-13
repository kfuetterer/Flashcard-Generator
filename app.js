var inquirer = require('inquirer');

var cardObject = require("./cards.js");
var allCards = cardObject.cards;

var theArray = [];

function BasicCard (front, back) {
    this.front = front;
    this.back = back;
}

function ClozeCard (text, cloze) {
    this.cloze = cloze;
    this.fullText = text;
    this.partial = function() {
        return this.fullText.replace(this.cloze, "...");
    }
    this.addToArray = function(){
        theArray.push(this);
    };

    this.addToArray();
    //error
}

for (var i = 0; i < allCards.length; i++) {
    new ClozeCard (allCards[i].text, allCards[i].cloze);
}

// console.log(newCard.front);
// console.log(newCard.back);
// console.log(newCardCloze.cloze);
// console.log(newCardCloze.fullText);
// console.log(newCardCloze.partial);

if (process.argv[2] === "Basic-Card"){

    inquirer.prompt([
        {
            type: "confirm",
            message: theArray[1].partial,
            name: "firstQuestion"
        }
    ]).then(function () { 
        console.log(theArray[1].cloze);
    })
}

if (process.argv[2] === "Cloze-Card"){

        inquirer.prompt([
            {
                type: "input",
                message: newCardCloze.partial,
                name: "firstQuestion"
            }
        ]).then(function(input) {
            if (input === newCardCloze.cloze) {
                console.log("Correct!");
            } else {
                console.log("Incorrect. The answer is '" + newCardCloze.cloze + "'.");
            }
            
        }).catch(function () {
            console.log("Promise Rejected");
        });

}