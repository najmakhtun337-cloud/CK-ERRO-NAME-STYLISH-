const input = document.getElementById("name");
const out = document.getElementById("out");
const out2 = document.getElementById("out2");

// default name
input.value = "CK-ERROR";

function update(){
  let t = input.value.replace(/ /g,"-");
  out.textContent = t.split("").join(" ");
  out2.textContent = t;
}

input.addEventListener("input", update);
update();

function copy1(){
  navigator.clipboard.writeText(out.textContent);
  alert("COPIED");
}

function copy2(){
  navigator.clipboard.writeText(out2.textContent);
  alert("COPIED");
}
