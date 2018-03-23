// **************************************************
//         PART THREE - PROTOTYPES AND INHERITANCE
// **************************************************

"use strict";

// Add property to Array object
Object.defineProperty(Array.prototype, "last", { get: function () { return this[this.length - 1] } });

let colors = ["red", "green", "blue"];
display(colors.last);
