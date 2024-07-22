const darkbutton = document.getElementById('dark');
const lightbutton = document.getElementById('light');
const body = document.body;

const theme = localStorage.getItem('theme');

if (theme) {
    body.classList.add(theme);
  }
darkbutton.onclick = () =>{
    body.classList.replace('light','dark');
    localStorage.setItem('theme','dark');
}

lightbutton.onclick = () =>{
    body.classList.replace('dark','light');
    localStorage.setItem('theme','light');
}
