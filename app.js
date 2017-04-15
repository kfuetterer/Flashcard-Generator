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
                message: theArrayCloze[0].partial(),
                name: "firstQuestion"
            }
        ]).then(function(input) {
            if (input.firstQuestion === theArrayCloze[0].cloze) {
                console.log("Correct!");
                        inquirer.prompt([
                            {
                                type: "input",
                                message: theArrayCloze[1].partial(),
                                name: "SecondQuestion"
                            }
                        ]).then(function(input) {
                            if (input.SecondQuestion === theArrayCloze[1].cloze) {
                                console.log("Correct!");
                                inquirer.prompt([
                                    {
                                        type: "input",
                                        message: theArrayCloze[2].partial(),
                                        name: "ThirdQuestion"
                                    }
                                ]).then(function(input) {
                                    if (input.ThirdQuestion === theArrayCloze[2].cloze) {
                                        console.log("Correct!");
                                        inquirer.prompt([
                                            {
                                                type: "input",
                                                message: theArrayCloze[3].partial(),
                                                name: "FourthQuestion"
                                            }
                                        ]).then(function(input) {
                                            if (input.FourthQuestion === theArrayCloze[3].cloze) {
                                                console.log("Correct!");
                                                inquirer.prompt([
                                                    {
                                                        type: "input",
                                                        message: theArrayCloze[4].partial(),
                                                        name: "FifthQuestion"
                                                    }
                                                ]).then(function(input) {
                                                    if (input.FifthQuestion === theArrayCloze[4].cloze) {
                                                        console.log("Correct!");
                                                        inquirer.prompt([
                                                            {
                                                                type: "input",
                                                                message: theArrayCloze[5].partial(),
                                                                name: "SixthQuestion"
                                                            }
                                                        ]).then(function(input) {
                                                            if (input.SixthQuestion === theArrayCloze[5].cloze) {
                                                                console.log("Correct!");
                                                                inquirer.prompt([
                                                                    {
                                                                        type: "input",
                                                                        message: theArrayCloze[6].partial(),
                                                                        name: "SeventhQuestion"
                                                                    }
                                                                ]).then(function(input) {
                                                                    if (input.SeventhQuestion === theArrayCloze[6].cloze) {
                                                                        console.log("Correct!");
                                                                        inquirer.prompt([
                                                                            {
                                                                                type: "input",
                                                                                message: theArrayCloze[7].partial(),
                                                                                name: "EighthQuestion"
                                                                            }
                                                                        ]).then(function(input) {
                                                                            if (input.EighthQuestion === theArrayCloze[7].cloze) {
                                                                                console.log("Correct!");
                                                                                inquirer.prompt([
                                                                                    {
                                                                                        type: "input",
                                                                                        message: theArrayCloze[8].partial(),
                                                                                        name: "NinthQuestion"
                                                                                    }
                                                                                ]).then(function(input) {
                                                                                    if (input.NinthQuestion === theArrayCloze[8].cloze) {
                                                                                        console.log("Correct!");
                                                                                        inquirer.prompt([
                                                                                            {
                                                                                                type: "input",
                                                                                                message: theArrayCloze[9].partial(),
                                                                                                name: "TenthQuestion"
                                                                                            }
                                                                                        ]).then(function(input) {
                                                                                            if (input.TenthQuestion === theArrayCloze[9].cloze) {
                                                                                                console.log("Correct!");
                                                                                            } else {
                                                                                                console.log("Incorrect. The answer is '" + theArrayCloze[9].cloze + "'.");
                                                                                            }
                                                                                            
                                                                                        }).catch(function (err) {
                                                                                            console.log("Promise Rejected");
                                                                                            console.log(err);
                                                                                        });
                                                                                    } else {
                                                                                        console.log("Incorrect. The answer is '" + theArrayCloze[8].cloze + "'.");
                                                                                    }
                                                                                    
                                                                                }).catch(function (err) {
                                                                                    console.log("Promise Rejected");
                                                                                    console.log(err);
                                                                                });
                                                                            } else {
                                                                                console.log("Incorrect. The answer is '" + theArrayCloze[7].cloze + "'.");
                                                                            }
                                                                            
                                                                        }).catch(function (err) {
                                                                            console.log("Promise Rejected");
                                                                            console.log(err);
                                                                        });
                                                                    } else {
                                                                        console.log("Incorrect. The answer is '" + theArrayCloze[6].cloze + "'.");
                                                                    }
                                                                    
                                                                }).catch(function (err) {
                                                                    console.log("Promise Rejected");
                                                                    console.log(err);
                                                                });
                                                            } else {
                                                                console.log("Incorrect. The answer is '" + theArrayCloze[5].cloze + "'.");
                                                            }
                                                            
                                                        }).catch(function (err) {
                                                            console.log("Promise Rejected");
                                                            console.log(err);
                                                        });
                                                    } else {
                                                        console.log("Incorrect. The answer is '" + theArrayCloze[4].cloze + "'.");
                                                    }
                                                    
                                                }).catch(function (err) {
                                                    console.log("Promise Rejected");
                                                    console.log(err);
                                                });
                                            } else {
                                                console.log("Incorrect. The answer is '" + theArrayCloze[3].cloze + "'.");
                                            }
                                            
                                        }).catch(function (err) {
                                            console.log("Promise Rejected");
                                            console.log(err);
                                        });
                                    } else {
                                        console.log("Incorrect. The answer is '" + theArrayCloze[2].cloze + "'.");
                                    }
                                    
                                }).catch(function (err) {
                                    console.log("Promise Rejected");
                                    console.log(err);
                                });
                            } else {
                                console.log("Incorrect. The answer is '" + theArrayCloze[1].cloze + "'.");
                            }
                            
                        }).catch(function (err) {
                            console.log("Promise Rejected");
                            console.log(err);
                        });
            } else {
                console.log("Incorrect. The answer is '" + theArrayCloze[0].cloze + "'.");
            }
            
        }).catch(function (err) {
            console.log("Promise Rejected");
            console.log(err);
        });

}