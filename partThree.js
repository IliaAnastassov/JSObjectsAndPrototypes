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

let bob = new Cat("Bob", "Grey");
Cat.prototype.age = 2;

display(Cat.prototype);
display(bob.__proto__);
display(Cat.prototype === bob.__proto__);