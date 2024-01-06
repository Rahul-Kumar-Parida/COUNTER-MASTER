
let saveEL = document.querySelector(".savepara");
let counter = document.querySelector(".head2");
let count = 0;
function increment() {
  count = count + 1;
//   console.log(count);
document.querySelector(".head2").textContent = count;
}
document.querySelector(".increment").addEventListener("click", increment);
function decrement() {
  count = count - 1;
//   console.log(count);
document.querySelector(".head2").textContent = count;
}
document.querySelector(".decrement").addEventListener("click", decrement);

function save(){
    let countstr = count + " / ";
    saveEL.textContent +=countstr;
    counter.textContent = 0;
    count = 0;
}
document.querySelector(".save").addEventListener("click", save);

function refresh(){
  location.reload()
}
document.querySelector(".reset").addEventListener("click", refresh)