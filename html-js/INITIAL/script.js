function hello(){
    alert("Hello! You clicked me!")
}

let m = 20;
const constr = "I'm a constant";
let name = "siri";
let isDeveloper = true;
let car;
let man = { peronsname: "Shyam", complexion: "fair" };

let fruits = ["apple", "almonds", "ornage"];

let z= 50;



console.log(m, constr, name, isDeveloper, car, man, fruits);
console.log("addition: "+ (m+z));

console.log(3 =="3");
console.log( 3 === "3");

let age = 17;

if(age< 18){
    console.log("You're not eligible");
} else{
    console.log("You're eligible")
}


for(let h = 0; h < 10; h++){
    console.log("iteration no: " + h);
}

function sayBye(name){
    console.log("Bye "+ name);
}

sayBye("sridhar");



function add(a, b){
    return a+b;
}

let sum = add(10, 3);
console.log(sum);


let mulitply = (a,b) => a *b;

console.log(mulitply(9, 9));

let numbers = [1,2,3,4,5];
numbers.pop();
numbers.push(19);
numbers.shift();
numbers.unshift(21);
console.log(numbers, "length: " + numbers.length + "index of 4 is: " + numbers.indexOf(4));



let person = {

    name: "Pushpa", profession: "smuggler", age: 25, married: false
};
console.log("Name of person: " + person.name);
person.name = "Pushpa Raj";
console.log("Name of person: " + person.name);
person.district = "Chitoor";
console.log(person);