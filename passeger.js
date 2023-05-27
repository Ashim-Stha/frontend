let count = 0;
let counterr = document.getElementById("counter");
function increment() {
  count = count + 1;
  counterr.innerText = count;
}

let show = document.getElementById("show");
function save() {
  //   show.innerText += count + " - ";
  show.textContent += count + " - "; //textContent is used to show hidden contents like spaces
  console.log(count);
  count = 0;
  counterr.innerText = 0;
}

let myname = "Ashim";
let greet = "Hello";

let welcome = document.getElementById("welcome");
welcome.innerText = greet + " " + myname;
