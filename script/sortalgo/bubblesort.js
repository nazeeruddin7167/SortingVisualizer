var bubble = document.querySelector("#bubble");
function swap(n1, n2) {
  var temp = n1.style.height;
  n1.style.height = n2.style.height;
  n2.style.height = temp;
}
const bsort = async () => {
  var n = document.querySelectorAll(".node");
  for (var i = 0; i < n.length - 1; i++) {
    for (var j = 0; j < n.length - i - 1; j++) {
      n[j].style.background = "blue";
      n[j + 1].style.background = "blue";
      if (parseInt(n[j].style.height) > parseInt(n[j + 1].style.height)) {
        await delayfunction();
        swap(n[j], n[j + 1]);
      }
      n[j].style.background = "coral";
      n[j + 1].style.background = "coral";
    }
    n[n.length - 1 - i].style.background = "green";
  }
  n[0].style.background = "green";
};
const delayfunction = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delay);
  });
};
bubble.addEventListener("click", async () => {
  await bsort();
});
