let hs = 0;
let gs = 0;
let gsb = document.getElementById("gscore");
let hsb = document.getElementById("hscore");
console.log(gsb);
function hadd1() {
  hs += 1;
  hsb.innerText = hs;
}
function hadd2() {
  hs += 2;
  hsb.innerText = hs;
}
function hadd3() {
  hs += 3;
  hsb.innerText = hs;
}
function gadd1() {
  gs += 1;
  gsb.innerText = gs;
}
function gadd2() {
  gs += 2;
  gsb.innerText = gs;
}
function gadd3() {
  gs += 3;
  gsb.innerText = gs;
}
