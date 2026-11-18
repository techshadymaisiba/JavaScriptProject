
//1. Built-in Functions

let y = Math.max(4,88,99,72,100);
console.log(y);

let x = Math.min(4,88,99,72,100);
console.log(x);

let z = Math.sqrt(64);
console.log(z);

let a = Math.floor(4.7);
console.log(a);

let b = Math.ceil(4.2);
console.log(b);

let c = Math.round(4.5);
console.log(c);

//2. User-defined Functions

function Employee(firstname, age, course){
    console.log(firstname, age, course);
}

Employee("Glory", 45, "JavaScript");
Employee("Shadrack", 21, "Python");