"use strict";
let user;
user = {
    name: "Tinkal",
    age: 23,
    greet(text) {
        console.log(`${text} ${this.name}`);
    },
};
console.log(user);
user.greet("Hello, I am ");
