
function greet(name , callback){
    console.log("Hi " + name);
    callback(name);
}

function goodBye(name){
    console.log("Bye " + name);
}

greet("Sridhar", goodBye);


const person = {
    name: "Sridahr",
    greet: function(){
        console.log(this.name + "greet is called");
    }
}

person.greet();