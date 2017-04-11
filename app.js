var inquirer = require('inquirer');

var cardObject = require("./cards.js");
var allCards = cardObject.cards;

function BasicCard (front, back) {
    this.front = front;
    this.back = back;
}

function ClozeCard (text, cloze) {
    this.cloze = cloze;
    this.fullText = text;
    this.partial = function() {
        var partial = text.replace(cloze, "...");
        console.log(partial);
    }
    //error
}

var newCard = new BasicCard (allCards[0].front, allCards[0].back);
var newCardCloze = new ClozeCard (allCards[0].text, allCards[0].cloze);

console.log(newCard.front);
console.log(newCard.back);
console.log(newCardCloze.cloze);
console.log(newCardCloze.fullText);
console.log(newCardCloze.partial);

if (process.argv[2] === "Basic-Card"){

    inquirer.prompt([
        {
            type: "input",
            message: newCard.front,
            name: "firstQuestion"
        }
    ]).then(function () {
        console.log("Correct!");
    })
}

if (process.argv[2] === "Cloze-Card"){

    for (var i = 0; i < allCards.length; i++) {

        inquirer.prompt([
            {
                type: "input",
                message: allCards[i].front,
                name: "firstQuestion",
                validate: function (input) {
                // Declare function as asynchronous, and save the done callback 
                var done = this.async();
            
                // Do async stuff 
                setTimeout(function () {
                if (typeof input !== 'number') {
                    // Pass the return value in the done callback 
                    done('You need to provide a number');
                    return;
                }
                // Pass the return value in the done callback 
                done(null, true);
            }, 3000);
                }
            }
        ])
        // ]).then(function() {
        //     if ("input" === allCards[i].cloze) {
        //         console.log("Correct!");
        //     } else {
        //         console.log("Incorrect. The answer is '" + allCards[i].cloze + "'.");
        //     }
            
        // }).catch(function () {
        //     console.log("Promise Rejected");
        // });
    }

}