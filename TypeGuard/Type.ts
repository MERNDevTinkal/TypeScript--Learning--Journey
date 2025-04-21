console.log("TypeGuard");

type combineable = string | number;
type numberic = number | boolean;

type universal = combineable & numberic;

function add (a: combineable, b: combineable) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b
}
console.log(add(12,5));
console.log(add(57,"kjjkl"));
console.log(add(57,"4"));


