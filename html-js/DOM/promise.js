let newPromise = new Promise(function(resolve, reject){
    setTimeout(() =>{
        const success = false;
        if(success){
            resolve("Fetch is successful");
        } else {
            reject("Error in fetching");
        }
    }, 2000);
});
//handling promise
newPromise
    .then(function(result){
        console.log(result);
}).catch(function(error){
    console.log(error);
});