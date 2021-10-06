const container = document.getElementById("grid-container");

function makeGrid(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    };
  };
  
  makeGrid(16, 16);
const cells = document.querySelectorAll(".grid-item");
cells.forEach( (cell) => {
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor= "gray";
    })})
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", () => {
    cells.forEach( (cell) => {
        cell.style.backgroundColor= "white";
    })
})
