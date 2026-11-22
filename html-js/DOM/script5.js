let inputField = document.getElementById("inputField");
let addTaskButton = document.getElementById("addTaskBtn");
let tasks = document.getElementById("tasklist");
let delBtns = document.getElementsByClassName(".delbtn");


function deleter(){
    let delOldBts = document.querySelectorAll(".delbtn");
    delOldBts.forEach(element => {
        element.addEventListener("click", function(){
                this.parentElement.remove();
        });
    });
}


deleter();










addTaskButton.addEventListener("click", function(){
    let inputData = inputField.value.trim();
    if(inputData == ""){
        alert("Enter a value");
        return ;
    }
    let delButton  = document.createElement("button");
    delButton.innerText = "❌";
    delButton.style.marginLeft = "10px";

    let newTask = document.createElement("li");
    newTask.innerText = inputData;
    newTask.appendChild(delButton);
    
    

    delButton.addEventListener("click", function(){
        newTask.remove();
    });

    tasks.appendChild(newTask);
});

delBtns.addEventListener("click", function(){
    tasks.remove();

    inputField.value = "";
})