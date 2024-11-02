// var main = document.getElementsById("main");
// var s = "";
// for(let i = 1; i <= 10; i++){
//     s += "<h1>goodbye</h1>";
// }
// main.innerHTML = s;

let main = document.getElementById("main");

let arr = ["https://i.pinimg.com/236x/5d/6d/23/5d6d23fd7adb44baba20a60c252da339.jpg",
           "https://i.pinimg.com/236x/31/49/13/3149131d03082fddb8b096d9c3aeff48.jpg",
           "https://i.pinimg.com/236x/fd/9d/8a/fd9d8ab48dec6ab12cbbf31edd92040b.jpg",
           "https://i.pinimg.com/236x/4a/c4/58/4ac458b8bc53756a40af5c1c947e4a5d.jpg",
           "https://i.pinimg.com/236x/e4/10/10/e410102e04a7a4ae17bead4970feb1f6.jpg",
           "https://i.pinimg.com/236x/65/14/e2/6514e2ade7ba2eddff40960d1ec8f507.jpg",
           "https://i.pinimg.com/236x/98/2a/b6/982ab66f09a7cc30332ebd73cb4ab4fc.jpg",
           "https://i.pinimg.com/236x/a6/c1/24/a6c1243a06824da518c30e5f8709a795.jpg",
           "https://i.pinimg.com/236x/94/4f/fa/944ffa2285b1d774851afe2c6126d924.jpg",
           "https://i.pinimg.com/236x/a3/d4/aa/a3d4aa05160b71850783e8490edc4529.jpg"      
           ];

let s = "";
for(let i = 1; i <= 60; i++){
    let index = Math.floor(Math.random()*10);
    s += `<div class="card"><img src = ${arr[index]}></div>`
}

main.innerHTML = s;