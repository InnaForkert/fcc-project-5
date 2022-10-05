function oopsAlert() {
  alert("This one is not ready yet:)");
}

const oops = document.querySelector("#oops");
const o = document.querySelector("#o");

o.addEventListener("click", oopsAlert);
oops.addEventListener("click", oopsAlert);
