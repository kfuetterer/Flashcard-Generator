var inquirer = require('inquirer');

var cardObject = require("./cards.js");
var allCards = cardObject.cards;

var theArray = [];
var theArrayCloze = [];

function BasicCard (front, back) {
    this.front = front;
    this.back = back;
    this.addToArray = function(){
        theArray.push(this);
    };
    this.addToArray();
}

function ClozeCard (text, cloze) {
    this.cloze = cloze;
    this.text = text;
    this.addToArray = function(){
        theArrayCloze.push(this);
    };
    this.addToArray();
    //error
}

ClozeCard.prototype.partial = function() {
    return this.text.replace(this.cloze, "....");
}

for (var i = 0; i < allCards.length; i++) {
    new ClozeCard (allCards[i].text, allCards[i].cloze);
    new BasicCard (allCards[i].front, allCards[i].back);
}

if (process.argv[2] === "Basic-Card"){

    inquirer.prompt([
        {
            type: "confirm",
            message: theArray[0].front,
            name: "firstQuestion"
        }
    ]).then(function () { 
        console.log(theArray[0].back);
            inquirer.prompt([
        {
            type: "confirm",
            message: theArray[1].front,
            name: "firstQuestion"
        }
    ]).then(function () { 
        console.log(theArray[1].back);
            inquirer.prompt([
        {
            type: "confirm",
            message: theArray[2].front,
            name: "firstQuestion"
        }
    ]).then(function () { 
        console.log(theArray[2].back);
            inquirer.prompt([
        {
            type: "confirm",
            message: theArray[3].front,
            name: "firstQuestion"
        }
    ]).then(function () { 
        console.log(theArray[3].back);
            inquirer.prompt([
        {
            type: "confirm",
            message: theArray[4].front,
            name: "firstQuestion"
        }
    ]).then(function () { 
        console.log(theArray[4].back);
            inquirer.prompt([
        {
            type: "confirm",
            message: theArray[5].front,
            name: "firstQuestion"
        }
    ]).then(function () { 
        console.log(theArray[5].back);
            inquirer.prompt([
        {
            type: "confirm",
            message: theArray[6].front,
            name: "firstQuestion"
        }
    ]).then(function () { 
        console.log(theArray[6].back);
            inquirer.prompt([
        {
            type: "confirm",
            message: theArray[7].front,
            name: "firstQuestion"
        }
    ]).then(function () { 
        console.log(theArray[7].back);
            inquirer.prompt([
        {
            type: "confirm",
            message: theArray[8].front,
            name: "firstQuestion"
        }
    ]).then(function () { 
        console.log(theArray[8].back);
            inquirer.prompt([
        {
            type: "confirm",
            message: theArray[9].front,
            name: "firstQuestion"
        }
    ]).then(function () { 
        console.log(theArray[9].back);
    })
    })
    })
    })
    })
    })
    })
    })
    })
    })
}

if (process.argv[2] === "Cloze-Card"){

        inquirer.prompt([
            {
                type: "input",
                message: theArrayCloze[0].partial,
                name: "firstQuestion"
            }
        ]).then(function(data) {
            if (data === theArrayCloze[0].cloze) {
                console.log("Correct!");
            } else {
                console.log("Incorrect. The answer is '" + theArrayCloze[0].cloze + "'.");
            }
            
        }).catch(function (err) {
            console.log("Promise Rejected");
            console.log(err);
        });

}