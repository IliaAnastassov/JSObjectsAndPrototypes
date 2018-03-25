// **************************************************
//         PART THREE - PROTOTYPES AND INHERITANCE
// **************************************************

// Definitions:
// - A function's prototype is the object instance that will become the prototype
// for all objects created using this function as a constructor.
// - An object's prototype is the object instance from which the object is inherited.

"use strict";

// Add property to Array object
Object.defineProperty(Array.prototype, "last", { get: function () { return this[this.length - 1] } });

let colors = ["red", "green", "blue"];
display(colors.last);

// Demonstrate prototypes
function Cat(name, color) {
    this.name = name;
    this.color = color;
}
Cat.prototype.age = 2;

let bob = new Cat("Bob", "Grey");
let greg = new Cat("Greg", "Black");

// the Cat function's prototype and bob and greg's prototypes
// are the exact same object in memory
display(Cat.prototype);
display(bob.__proto__);
display(greg.__proto__);
display(Cat.prototype === bob.__proto__
    && Cat.prototype === greg.__proto__
    && bob.__proto__ === greg.__proto__);

// Change Cat function's prototype to a new object
Cat.prototype = { age: 5 };

let snorki = new Cat("Snorki", "Brown");

display(Cat.prototype === bob.__proto__); // False
display(Cat.prototype === snorki.__proto__); // True

// Creating prototypal inheritance chains using constructor functions
function Animal(voice) {
    this.voice = voice || "grunt";
}
Animal.prototype.speak = function () {
    display(this.voice);
}

function Dog(name, color) {
    Animal.call(this, "Woof");
    this.name = name;
    this.color = color;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

let barky = new Dog("Barky", "Brown");
display(barky);

// Creating prototypal inheritance chains using classes
class Employee {
    constructor(jobDescription) {
        this.jobDescription = jobDescription || "Doing actual work";
    }

    work() {
        display(this.jobDescription);
    }
}

class Manager extends Employee {
    constructor(id, name) {
        super("Create meetings");
        this.id = id;
        this.name = name;
    }
}

let john = new Manager(66, "John");
display(john);