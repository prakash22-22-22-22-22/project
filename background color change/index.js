let colors = ["red", "green", "blue", "yellow", "orange", "pink", "black"];
let index = 0;

document.getElementById("submit").addEventListener("click", () => {
  if (index > colors.length - 1)
    index = 0;
  document.body.style.backgroundColor = colors[index++];  
});