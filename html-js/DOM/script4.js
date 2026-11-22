let items = document.querySelectorAll(".item");
let button = document.getElementById("btn");

button.addEventListener("click", function(){
    items.forEach( (it) => {
        it.style.color = "hotpink";
    });
})

let taskAdder = document.getElementById("taskAdder");
let taskList = document.getElementById("tasklist");
taskAdder.addEventListener("click", function(){
    let newTask = document.createElement("li");
    newTask.innerText = "new task";
    taskList.appendChild(newTask);
});


let deleteTask = document.getElementById("delTask");
deleteTask.addEventListener("click", function(){
    taskList.remove();
});




