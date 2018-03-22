"use strict";

// Object literal
let catOne = {
    name: "Madox",
    color: "Grey"
};

// Constructor function
function CatConstructorFunction(name, color) {
    this.name = name;
    this.color = color;
};

let catTwo = new CatConstructorFunction("Madox", "Grey");

// Object.create
let catThree = Object.create(Object.prototype,
    {
        name: {
            value: "Madox",
            configurable: true,
            enumerable: true,
            writable: true
        },
        color: {
            value: "White",
            configurable: true,
            enumerable: true,
            writable: true
        }
    });

// ES6 class
class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}

let catFour = new Cat("Madox", "Grey");


// Object Properties
let catFive = {
    name: { first: "Madox", second: "Smilestone" },
    color: "Grey"
}

display(Object.getOwnPropertyDescriptor(catFive, "name"));

Object.defineProperty(catFive, "name", { writable: false });

display(Object.getOwnPropertyDescriptor(catFive, "name"));

catFive.name.first = "Bob";

function listProperties(inputObject) {
    for (let propertyName in inputObject) {
        let property = inputObject[propertyName];
        if (typeof (property) === "object") {
            console.log(propertyName);            
            listProperties(property)
        } else {
            console.log(propertyName + " : " + inputObject[propertyName]);
        }
    }
}

display(JSON.stringify(catFive));

listProperties(catFive);







