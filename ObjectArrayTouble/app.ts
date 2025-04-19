/* 
// objects in typescript
const person : {
    firstName : string;
    age : number;
} = {
    firstName : "Tinkal",
    age : 23
};

console.log (person); */

/*
// array in typescript
const developer : {
    name : string,
    age : number,
    skills : string[],
} = {
    name : "Tinkal Kumar",
    age : 23,
    skills : ["javascript","typescript","react","nodejs","express","mongodb"],
};

console.log(developer.name);
console.log(developer);
*/

// tuple in typescript
/*
const developer : {
    name : string,
    age : number,
    skills : string[],
    course : [string,number],
} = {
    name : "Tinkal Kumar",
    age : 23,
    skills : ["javascript","typescript","react","nodejs","express","mongodb"],
    course : ["typescript",2025],

};

developer.course[1]=2024;
console.log(developer.course);
console.log(developer);
*/

enum Role {JUNIER_DEV , MID_DEV, SENIOR_DEV,TEAM_lEAD};

const developer : {
    name : string,
    age : number,
    skills : string[],
    course : [string,number],
    role : Role,
} = {
    name : "Tinkal Kumar",
    age : 23,
    skills : ["javascript","typescript","react","nodejs","express","mongodb"],
    course : ["typescript",2025],
    role : Role.MID_DEV,

};

if (developer.role === Role.MID_DEV) {
  console.log("mid dev");
} else if (developer.role === Role.SENIOR_DEV) {
  console.log("senior dev");
} else {
  console.log("another dev");
}



developer.course[1]=2024;
console.log(developer.course);
console.log(developer);