let s1 = document.getElementById("sq1");
let s2 = document.getElementById("sq2");
let s3 = document.getElementById("sq3");
let s4 = document.getElementById("sq4");

s1.addEventListener("mouseenter", function(){
    s1.style.backgroundColor = "red";
    let r = Math.floor(Math.random()*100);
    s1.innerHTML = `<h1>${r}</h1>`;
})

s1.addEventListener("mouseleave", function(){
    s1.style.backgroundColor = "white";
    s1.innerHTML = "<h1>1</h1>";
})

let color = "green";

s2.addEventListener("mouseenter", function(){
    if(color == "green"){
        s2.style.backgroundColor = "green";
        color = "red";
    }
    else if(color == "red"){
        s2.style.backgroundColor = "red";
        color = "blue";
    }
    else{
        s2.style.backgroundColor = "blue";
        color = "green";
    }  
})

s2.addEventListener("mouseleave", function(){
    s2.style.backgroundColor = "white";
})

s3.addEventListener("mouseenter", function(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    s3.style.backgroundColor = `rgb(${red},${green},${blue})`;
})

s3.addEventListener("mouseleave", function(){
    s3.style.backgroundColor = "white";
})

s4.addEventListener("mouseenter", function(){
    let r1 = Math.floor(Math.random()*256);
    let r2 = Math.floor(Math.random()*256);
    let r3 = Math.floor(Math.random()*256);

    s1.style.backgroundColor = `rgb(${r1},255,255)`;
    s2.style.backgroundColor = `rgb(255,${r2},255)`;
    s3.style.backgroundColor = `rgb(255,255,${r3})`;
})

s4.addEventListener("mouseleave", function(){
    s1.style.backgroundColor = "white";
    s2.style.backgroundColor = "white";
    s3.style.backgroundColor = "white";
})
 
let crsr = document.getElementById("cursor");
let main = document.getElementById("main");
main.addEventListener("mousemove",function(details){
    crsr.style.top = details.y + "px";
    crsr.style.left = details.x + "px";
})