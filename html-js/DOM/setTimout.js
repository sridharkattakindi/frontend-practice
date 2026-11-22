console.log("This is the start");
let timeout = setTimeout(() =>{
    console.log("Matter inside funcation")
}, 10000);
console.log("This is the end!");
clearTimeout(timeout);


console.log("start of interval");
let counter = 0;
let interval = setInterval(() =>{

    console.log("current count: " + counter++);

    if(counter === 10){
        clearInterval(interval);
    }
}, 1)
console.log("end of interval");