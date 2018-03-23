// **************************************************
//         PART ONE - CREATING OBJECTS
// **************************************************

"use strict";

// Using Object literal
let catOne = {
    name: "Madox",
    color: "Grey"
};

// Using Constructor function
function CatConstructorFunction(name, color) {
    this.name = name;
    this.color = color;
};

let catTwo = new CatConstructorFunction("Madox", "Grey");

// Using Object.create()
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

// Using ES6 class
class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }
}

let catFour = new Cat("Madox", "Grey");
