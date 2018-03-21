"use strict";

// Object literal
let catOne = {
    name: "Madox",
    color: "Grey"
};

// Constructor function
function Cat(name, color) {
    this.name = name;
    this.color = color;
};

let catTwo = new Cat("Madox", "Grey");

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
