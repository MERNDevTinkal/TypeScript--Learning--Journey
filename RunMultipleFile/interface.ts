interface Person{
    name : String;
    age : Number;
    greet (text : String) : void;
}

let user : Person;

user = {
    name : "Tinkal",
    age : 23,
    greet(text ):void{
        console.log(`${text} ${this.name}`);
    },
}

console.log(user);
user.greet("Hello, I am ")