var visual = document.querySelector(".visual");
var newnodes = document.querySelector("#newnodes");
var delay = 1000;
var nodenumber = 30;
createnodes();
function createnodes() {
  var array = [];
  visual.innerHTML = "";
  for (let i = 0; i < nodenumber; i++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }
  for (var i = 0; i < array.length; i++) {
    var node = document.createElement("div");
    node.style.height = `${array[i] * 5}px`;
    node.classList.add("node");
    visual.appendChild(node);
  }
}

//buttons
newnodes.addEventListener("click", function () {
  createnodes();
});
