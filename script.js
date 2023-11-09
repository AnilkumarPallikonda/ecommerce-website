function displayMessage() {
    alert("You are going to Home page");
}

function myFunction(){
    var x = document.getElementsByTagName("H2")[0].getAttribute("class");
    document.getElementById("Short by Price").innerHTML=x;
}

const bar = document.getElementById('bar')
const close = document.getElementById('close')
const nav = document.getElementById('navbar')

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active')
  })
 
 if (close) {
   close.addEventListener('click', () => {
     nav.classList.remove('active')
   })
 }
}
