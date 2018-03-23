// **************************************************
//         PART TWO - OBJECT PROPERTIES
// **************************************************

"use strict";

// Define object with getter and setter
let catFive = {
    name: {
        first: "Madox",
        second: "Smilestone",
        middle: {
            one: "mid-one",
            two: "mid-two"
        }
    },
    color: "Grey",
    get fullName() {
        return this.name.first + " " + this.name.second;
    },
    set fullName(value) {
        let names = value.split(" ");
        this.name.first = names[0];
        this.name.second = names[1];
    }
};

// Display name property
display(Object.getOwnPropertyDescriptor(catFive, "name"));
// Change name property attribute to read-only
Object.defineProperty(catFive, "name", { writable: false });
display(Object.getOwnPropertyDescriptor(catFive, "name"));

// Try changing read-only property - ERROR
catFive.name.first = "Bob";
listObjectProperties(catFive, "");

// Change full name as well as name.first and name.second
catFive.fullName = "Smelly Buttocks";
listObjectProperties(catFive, "");










