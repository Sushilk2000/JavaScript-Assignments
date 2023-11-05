const shape = document.getElementById("shape");

const changeshape = () => {
  if (shape.className == "square") {
    shape.className = "triangle";
  } else {
    shape.className = "square";
  }
};
const color = ["green", "blue", "yellow", "orange", "black", "red"];
let index = 0;
function changecolor() {
  //   console.log(index);
  if (index === color.length) {
    index = 0;
  }
  document.getElementById("innerdiv").style.backgroundColor = color[index];
  index++;
}
