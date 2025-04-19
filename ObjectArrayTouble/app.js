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
var Role;
(function (Role) {
    Role[Role["JUNIER_DEV"] = 0] = "JUNIER_DEV";
    Role[Role["MID_DEV"] = 1] = "MID_DEV";
    Role[Role["SENIOR_DEV"] = 2] = "SENIOR_DEV";
    Role[Role["TEAM_lEAD"] = 3] = "TEAM_lEAD";
})(Role || (Role = {}));
;
var developer = {
    name: "Tinkal Kumar",
    age: 23,
    skills: ["javascript", "typescript", "react", "nodejs", "express", "mongodb"],
    course: ["typescript", 2025],
    role: Role.MID_DEV,
};
if (developer.role === Role.MID_DEV) {
    console.log("mid dev");
}
else if (developer.role === Role.SENIOR_DEV) {
    console.log("senior dev");
}
else {
    console.log("another dev");
}
developer.course[1] = 2024;
console.log(developer.course);
console.log(developer);
