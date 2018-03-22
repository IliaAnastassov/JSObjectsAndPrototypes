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
    name: {
        first: "Madox",
        second: "Smilestone",
        middle: {
            one: "mid-one",
            two: "mid-two"
        }
    },
    color: "Grey"
}

display(Object.getOwnPropertyDescriptor(catFive, "name"));

Object.defineProperty(catFive, "name", { writable: false });

display(Object.getOwnPropertyDescriptor(catFive, "name"));

catFive.name.first = "Bob";

function listProperties(inputObject, indent, last) {
    let propertyNames = Object.keys(inputObject);
    
    for (let i = 0; i < propertyNames.length; i++) {
        
        let propertyName = propertyNames[i];
        let property = inputObject[propertyName];
        indent += last ? "  " : "";

        if (typeof (property) === "object") {
            console.log(indent + propertyNames[i]);
            listProperties(property, indent, i === propertyNames.length - 1);
        } else {
            console.log(indent + propertyNames[i] + " : " + property);
        }
    }
}

// public static void PrintTree(Node tree, String indent, Bool last)
// {
//     Console.Write(indent + "+- " + tree.Name);
//     indent += last ? "   " : "|  ";

//     for (int i == 0; i < tree.Children.Count; i++)
//     {
//         PrintTree(tree.Children[i], indent, i == tree.Children.Count - 1);
//     }
// }

// PrintTree(node, "", true)

display(JSON.stringify(catFive));

listProperties(catFive, "", true);







