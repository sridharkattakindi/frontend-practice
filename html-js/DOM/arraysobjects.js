
//array destructuring
const numbers = [1,2,3];

const [f,s,t] = numbers;


console.log(f);
console.log(s);
console.log(t);

const numbers1 = [1,2,3];
const [h, , l] = numbers1;

console.log(h);
console.log(l);


const numbers2 = [4,5,6];
const [a, b = 50, c = 20] = numbers2;

console.log(a);

let x = 12; let z = 28;
 
[x, z] = [z, x];

console.log(z);


let numbers3 = [41,42,43,44,45,46,47];
let [g, hh, ...leftOuts] = numbers3;
console.log(leftOuts);

//6. Destructuring in Function Parameters

function printCoordinates([x, y]){
    console.log(`X: ${x}, Y: ${y}`);
}

const point = [34, 53,55];
printCoordinates(point);

// 7. Nested Array Destructuring
let nestArr = [11,[22,33],44];
let [con, [st, sc], gh] = nestArr;


//REAL WORLD USE CASE
let users = [
    ["Ajay", 25],
    ["Kiran", 27],
    ["Kamal", 29]
];

users.forEach(([name, age]) => {
        console.log(`Name: ${name}, age: ${age}`)
});
// SPREAD OPERATOR IS USED TO UNPACK THE ELEMENTS OF AN ARRAY

const numbers4 = [111,222,333,444];
console.log(...numbers4);

//copying array

const numbers5 = [...numbers4];
numbers5.push(555);
console.log(numbers5);
//merging

const numbers6 = [...numbers4, ...numbers5];
console.log(numbers6);

//ADDING ELEMENTS TO AN ARRAY
const arr1 = [21,32,43,54];
const arr2 = [1, ...arr1, 4];
console.log(arr2);

//SPREAD WITH OBJECTS

//copy
const obj1 = {name:"alice", age: 20};
const obj2 = {...obj1};

//merging objects
const obj3 = {name: "Kim"};
const obj4 = {age: 52};
const obj5 = {...obj3, ...obj4};

console.log(obj5);

//overrideing properties
const obj6 = {...obj5, age: 63};
console.log(obj6);

//Spread Operator in Function Arguments
const arr3 = [212,213,214];
function sum(a, b, c){
    return a + b + c;
}
console.log(sum(...arr3));

//SPREAD spreads, REST collects

function sum(...values){
    return values.reduce((g,h) => g +h, 0);
}
console.log("This is the sum: " + sum(45,44,43));


