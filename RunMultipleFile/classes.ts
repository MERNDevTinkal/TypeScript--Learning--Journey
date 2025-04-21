class Department {
    name :string;

    constructor(n : string) {
        this.name = n;
    }
    describe (){
        console.log("Department", this.name);
    }
}

const accounting = new Department("Accounting");
accounting.describe();

const accountingCopy = {
    name : "Dummmy",
    describe : accounting.describe,
}
accountingCopy.describe();