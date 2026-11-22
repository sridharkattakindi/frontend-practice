
//WITH PROMISES
// let promise = new Promise(function(resolve, reject){
//         setTimeout(() =>{
//             resolve("matter inside promise");
//         }, 3000);
// });
// promise.then((resolve) => {

//     console.log(resolve);
// });
// WITH ASYNC, CLEANER CODE
async function getData(){
    

let promise2 = new Promise( (resolve) =>{
    setTimeout(() =>{
            resolve("I'm matter inside promise");
    }, 4000);
});
let value  = await promise2;
console.log(value);
};

getData();