"use strict";
console.log("TypeGuard");
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(add(12, 5));
console.log(add(57, "kjjkl"));
console.log(add(57, "4"));
