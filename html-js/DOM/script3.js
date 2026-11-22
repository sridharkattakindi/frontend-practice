


let output = document.getElementById("output");
document.addEventListener("keyup", function(event){
    output.innerText = "A key is pressed! " + event.key;
});