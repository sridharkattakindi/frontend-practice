function operate(a, b, method){
    return method(a,b);
}

const multiply = (a, b) => a * b;
const addition = (a , b) => a + b;

console.log(operate(10, 20, multiply));
console.log(operate(10, 20, addition));


const numbers = [1,2,3,5,4];
const squared = numbers.map( n => n * n);

console.log(squared);

const evens = numbers.filter( k => k%2 == 0);
console.log(evens);

const sum = numbers.reduce((a, b) => a+b , 0);
console.log("Sum of values" + sum);

numbers.sort((a, b) => b -a ) ;

console.log("Numbers after sort: " + numbers);
//RETURNING FUNCTIONS
function multiplier(factor){
    return number => number * factor;
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(10));
console.log(triple(10));


let numsLessThan4 = numbers
                    .filter(n => n < 4)
                    .map(num => num * num);
                            

                            console.log("Nums less four: " + numsLessThan4);