let sizeOfGrid = 16;
let container = document.querySelector(".container");
const select = document.querySelector(".select");

function createGrid(amtOfGrid) {
  for (let i = 0; i < amtOfGrid; i++) {
    let heightAndWidth = 100 / amtOfGrid;
    const row = document.createElement("div"); // create row
    row.classList.add("grid-row");
    row.style.width = `100%`;
    row.style.height = `${heightAndWidth}%`;
    for (let j = 0; j < amtOfGrid; j++) {
      console.log(heightAndWidth ,"heightAndWidth");
      const gridBox = document.createElement("div");
      gridBox.classList.add("grid-box");
      gridBox.style.width = `${heightAndWidth}%`;
      gridBox.style.height = `100%`;
      gridBox.addEventListener("mouseenter", () => {
        gridBox.style.backgroundColor = "#a0e9fa";
      });

      row.appendChild(gridBox);
    }
    container.appendChild(row);
  }
}
createGrid(sizeOfGrid);
