document.getElementById("demo").innerHTML = "Hello World!";
document.getElementById("heading");
document.getElementById("btn").addEventListener("click", function(){
    heading.innerText = "BUTTON IS CLICKED! HOW MAY i HELP YOU?";
    heading.style.color = "blue";
heading.style.fontSize = "25px";
});

document.getElementById("title").addEventListener("keydown", function(){
        this.style.color = "red";
});


let output = document.getElementById("output");
document.addEventListener("keydown", function(event){
    output.innerText = "Key is pressed: " + event.key;
});
